import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const PRICE_MAP = {
  investor_monthly: 'price_1TLRkgAIx5vWj5b2tp3I22Ia',
  // add more price IDs here as you create them in Stripe
};

export async function POST(request) {
  try {
    const { priceKey, userId, email } = await request.json();

    const priceId = PRICE_MAP[priceKey];
    if (!priceId) return Response.json({ error: 'Invalid price' }, { status: 400 });

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
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