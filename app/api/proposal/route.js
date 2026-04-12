import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';

const client = new Anthropic();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const { dealData, score, userId, offerPrice, whyUs } = await request.json();

    // Check credits
    if (userId) {
      const { data: credits } = await supabase
        .from('credits')
        .select('credits')
        .eq('user_id', userId);

      const balance = credits?.reduce((a, c) => a + c.credits, 0) || 0;
      if (balance < 25) {
        return Response.json({ error: 'insufficient_credits' }, { status: 402 });
      }

      await supabase.from('credits').insert({
        user_id: userId,
        transaction_type: 'Spend',
        credits: -25,
        description: 'Seller Proposal',
      });
    }

    // Generate numbers narrative
    const numbersRes = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 250,
      messages: [{
        role: 'user',
        content: `Write a 3-4 sentence factual explanation of why this offer price makes sense, addressed to the property seller. Be respectful and professional. Use the actual numbers. Do not mention AI. Plain text only, no markdown.

Property: ${dealData.address}
Offer Price: $${offerPrice?.toLocaleString()}
ARV (After Repair Value): $${dealData.arv?.toLocaleString()}
Rehab Budget: $${dealData.rehabBudget?.toLocaleString()}
Financing: ${dealData.financing}
Hold Time: ${dealData.holdMonths} months

Write the explanation now:`
      }]
    });

    // Polish the "why us" section
    const whyUsRes = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 200,
      messages: [{
        role: 'user',
        content: `Take this investor's notes about what makes them a good buyer and rewrite it as 2-3 polished, professional sentences for a seller proposal. Keep their specific claims and numbers. Do not add anything they didn't say. Plain text only, no markdown.

Their notes: ${whyUs}

Write the polished version now:`
      }]
    });

    return Response.json({
      numbersNarrative: numbersRes.content[0].text,
      whyUsNarrative: whyUsRes.content[0].text,
      creditsUsed: 25,
    });
  } catch(e) {
    console.error('Proposal error:', e);
    return Response.json({ error: 'Failed to generate proposal' }, { status: 500 });
  }
}