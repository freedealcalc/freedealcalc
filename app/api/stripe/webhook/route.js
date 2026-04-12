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

export async function POST(request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch(e) {
    console.error('Webhook signature error:', e);
    return Response.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const userId = session.metadata?.userId;
    const priceKey = session.metadata?.priceKey;

    if (!userId || !priceKey) return Response.json({ received: true });

    // Credit pack purchase
    if (CREDIT_AMOUNTS[priceKey]) {
      await supabase.from('credits').insert({
        user_id: userId,
        transaction_type: 'Purchase',
        credits: CREDIT_AMOUNTS[priceKey],
        description: `Credit pack — ${priceKey}`,
      });
    }

    // Subscription purchase
    if (SUBSCRIPTION_CREDITS[priceKey]) {
      const tier = priceKey.startsWith('pro') ? 'pro' : 'investor';
      await supabase.from('profiles').update({ tier }).eq('id', userId);
      await supabase.from('credits').insert({
        user_id: userId,
        transaction_type: 'Purchase',
        credits: SUBSCRIPTION_CREDITS[priceKey],
        description: `${tier} subscription — monthly credits`,
      });
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