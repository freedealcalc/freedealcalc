import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const CREDIT_AMOUNTS = {
  credits_starter: 100,
  credits_standard: 300,
  credits_value: 750,
};

const SUBSCRIPTION_CREDITS = {
  investor_monthly: 400,
  investor_annual: 400,
  pro_monthly: 1100,
  pro_annual: 1100,
};

async function resolveUserId(userId, email) {
  // If userId came through metadata, use it directly
  if (userId) return userId;
  // Fallback — look up by email
  if (!email) return null;
  const { data } = await supabase
    .from('profiles')
    .select('id')
    .eq('id', (
      await supabase.rpc('get_user_id_by_email', { user_email: email })
    ).data)
    .single();
  // Simpler fallback via auth admin
  const { data: { users } } = await supabase.auth.admin.listUsers();
  const match = users?.find(u => u.email === email);
  return match?.id || null;
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

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    let userId = session.metadata?.userId;
    const priceKey = session.metadata?.priceKey;
    const email = session.customer_email || session.customer_details?.email;

    // Fallback: resolve userId from email if metadata was missing
    if (!userId && email) {
      const { data: { users } } = await supabase.auth.admin.listUsers();
      const match = users?.find(u => u.email === email);
      userId = match?.id || null;
    }

    if (!userId) {
      console.error('Webhook: could not resolve userId for session', session.id);
      return Response.json({ received: true });
    }

    // Store stripe customer id on profile
    if (session.customer) {
      await supabase
        .from('profiles')
        .update({ stripe_customer_id: session.customer })
        .eq('id', userId);
    }

    // Credit pack purchase
    if (priceKey && CREDIT_AMOUNTS[priceKey]) {
      await supabase.from('credits').insert({
        user_id: userId,
        transaction_type: 'Purchase',
        credits: CREDIT_AMOUNTS[priceKey],
        description: `Credit pack — ${priceKey}`,
      });
    }

    // Subscription purchase
    if (priceKey && SUBSCRIPTION_CREDITS[priceKey]) {
      const tier = priceKey.startsWith('pro') ? 'pro' : 'investor';
      await supabase.from('profiles').update({ tier }).eq('id', userId);
      await supabase.from('credits').insert({
        user_id: userId,
        transaction_type: 'Purchase',
        credits: SUBSCRIPTION_CREDITS[priceKey],
        description: `${tier} subscription — monthly credits`,
      });
    }

    // If priceKey missing but we know it's a credit pack, resolve from line items
    if (!priceKey) {
      console.error('Webhook: priceKey missing for session', session.id, 'userId', userId);
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object;
    const customerId = subscription.customer;
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id')
      .eq('stripe_customer_id', customerId);
    if (profiles?.length) {
      await supabase.from('profiles').update({ tier: 'free' }).eq('id', profiles[0].id);
    }
  }

  return Response.json({ received: true });
}