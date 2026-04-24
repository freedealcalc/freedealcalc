import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRICE_MAP = {
  investor_monthly: 'price_1TLRkgAIx5vWj5b2tp3I22Ia',
  investor_annual: 'price_1TLUGnAIx5vWj5b2Y5cf69hd',
  pro_monthly: 'price_1TLUIPAIx5vWj5b2mW27yOGR',
  pro_annual: 'price_1TLUJ8AIx5vWj5b2ZezCT1tk',
};

const VALID_SUBSCRIPTIONS = ['investor_monthly', 'investor_annual', 'pro_monthly', 'pro_annual'];

export async function POST(request) {
  try {
    const { priceKey, userId, email } = await request.json();

    const priceId = PRICE_MAP[priceKey];
    if (!priceId) {
      return Response.json({ error: 'Invalid price' }, { status: 400 });
    }

    if (!VALID_SUBSCRIPTIONS.includes(priceKey)) {
      return Response.json({ error: 'Invalid subscription type' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}&type=subscription`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
      customer_email: email,
      metadata: { userId, priceKey },
    });

    return Response.json({ url: session.url });
  } catch(e) {
    console.error('Stripe checkout error:', e);
    return Response.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}