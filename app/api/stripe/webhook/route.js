import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const VALID_SUBSCRIPTIONS = ['investor_monthly', 'investor_annual', 'pro_monthly', 'pro_annual'];

// Calculate the next usage period reset — 1st of next calendar month
function getNextResetDate() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 1).toISOString();
}

export async function POST(request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (e) {
    console.error('Webhook signature error:', e);
    return Response.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // ============================================================
  // EVENT: checkout.session.completed
  // Fires when a user finishes subscribing via Stripe Checkout
  // ============================================================
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    let userId = session.metadata?.userId;
    const priceKey = session.metadata?.priceKey;
    const email = session.customer_email || session.customer_details?.email;

    // Fallback: resolve userId from email if metadata is missing
    if (!userId && email) {
      const { data: { users } } = await supabase.auth.admin.listUsers();
      const match = users?.find(u => u.email === email);
      userId = match?.id || null;
    }

    if (!userId) {
      console.error('Webhook: could not resolve userId for session', session.id);
      return Response.json({ received: true });
    }

    // Guard: only process valid subscription price keys
    if (!priceKey || !VALID_SUBSCRIPTIONS.includes(priceKey)) {
      console.error('Webhook: invalid or missing priceKey for session', session.id, priceKey);
      return Response.json({ received: true });
    }

    const tier = priceKey.startsWith('pro') ? 'pro' : 'investor';

    // Update profile: set tier, stripe customer id, reset counters fresh
    // Paid users get unlimited, but we reset counters anyway for clean accounting
    const updateData = {
      tier,
      proposals_used_this_period: 0,
      dispos_used_this_period: 0,
      usage_period_reset_at: getNextResetDate(),
    };

    if (session.customer) {
      updateData.stripe_customer_id = session.customer;
    }

    const { error: updateError } = await supabase
      .from('profiles')
      .update(updateData)
      .eq('id', userId);

    if (updateError) {
      console.error('Webhook: profile update failed', updateError);
    } else {
      console.log(`Webhook: upgraded user ${userId} to ${tier} via ${priceKey}`);
    }
  }

  // ============================================================
  // EVENT: customer.subscription.deleted
  // Fires when a subscription is cancelled (at period end or immediately)
  // ============================================================
  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object;
    const customerId = subscription.customer;

    const { data: profiles } = await supabase
      .from('profiles')
      .select('id')
      .eq('stripe_customer_id', customerId);

    if (profiles?.length) {
      const userId = profiles[0].id;

      // Downgrade to free and cap counters so they can't exploit the downgrade
      const { error } = await supabase
        .from('profiles')
        .update({
          tier: 'free',
          proposals_used_this_period: 3,
          dispos_used_this_period: 3,
          usage_period_reset_at: getNextResetDate(),
        })
        .eq('id', userId);

      if (error) {
        console.error('Webhook: downgrade failed', error);
      } else {
        console.log(`Webhook: downgraded user ${userId} to free tier`);
      }
    } else {
      console.warn('Webhook: no profile found for cancelled stripe_customer_id', customerId);
    }
  }

  // ============================================================
  // EVENT: customer.subscription.updated
  // Fires on plan changes (upgrade/downgrade mid-cycle)
  // ============================================================
  if (event.type === 'customer.subscription.updated') {
    const subscription = event.data.object;
    const customerId = subscription.customer;
    const status = subscription.status;

    const { data: profiles } = await supabase
      .from('profiles')
      .select('id')
      .eq('stripe_customer_id', customerId);

    if (!profiles?.length) {
      console.warn('Webhook: no profile for updated sub, customer', customerId);
      return Response.json({ received: true });
    }

    const userId = profiles[0].id;

    // Handle status changes
    if (status === 'active' || status === 'trialing') {
      // Figure out what price they're on now
      const priceId = subscription.items?.data?.[0]?.price?.id;
      let newTier = null;
      if (priceId === 'price_1TLRkgAIx5vWj5b2tp3I22Ia' || priceId === 'price_1TLUGnAIx5vWj5b2Y5cf69hd') {
        newTier = 'investor';
      } else if (priceId === 'price_1TLUIPAIx5vWj5b2mW27yOGR' || priceId === 'price_1TLUJ8AIx5vWj5b2ZezCT1tk') {
        newTier = 'pro';
      }

      if (newTier) {
        await supabase.from('profiles').update({ tier: newTier }).eq('id', userId);
        console.log(`Webhook: updated user ${userId} to ${newTier} via subscription.updated`);
      }
    } else if (status === 'canceled' || status === 'unpaid' || status === 'incomplete_expired') {
      // Subscription went bad — downgrade
      await supabase
        .from('profiles')
        .update({
          tier: 'free',
          proposals_used_this_period: 3,
          dispos_used_this_period: 3,
          usage_period_reset_at: getNextResetDate(),
        })
        .eq('id', userId);
      console.log(`Webhook: downgraded user ${userId} due to status ${status}`);
    }
  }

  return Response.json({ received: true });
}