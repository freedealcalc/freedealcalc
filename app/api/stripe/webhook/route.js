import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

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

    if (userId && priceKey) {
      const tier = priceKey.startsWith('pro') ? 'pro' : 'investor';
      await supabase.from('profiles').update({ tier }).eq('id', userId);

      // Add monthly credits based on tier
      const credits = tier === 'pro' ? 1100 : 400;
      await supabase.from('credits').insert({
        user_id: userId,
        transaction_type: 'Purchase',
        credits,
        description: `${tier} subscription — monthly credits`,
      });
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object;
    const customerId = subscription.customer;

    // Find user by stripe customer ID and downgrade to free
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