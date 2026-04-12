import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';

const client = new Anthropic();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const { dealData, score, userId } = await request.json();

    // Check credits if user is logged in
    if (userId) {
      const { data: credits } = await supabase
        .from('credits')
        .select('credits')
        .eq('user_id', userId);

      const balance = credits?.reduce((a, c) => a + c.credits, 0) || 0;
      if (balance < 10) {
        return Response.json({ error: 'insufficient_credits' }, { status: 402 });
      }

      // Deduct 10 credits
      await supabase.from('credits').insert({
        user_id: userId,
        transaction_type: 'Spend',
        credits: -10,
        description: 'Score Certificate',
      });
    }

    // Generate AI narrative
    const response = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 200,
      messages: [{
        role: 'user',
        content: `You are Freddie, a seasoned real estate investor. Write a 2-3 sentence deal analysis narrative for a Score Certificate. Be direct, specific, and use the actual numbers. No fluff. No markdown. Plain text only.

Deal: ${dealData.strategy} at ${dealData.address}
Purchase Price: $${dealData.purchasePrice?.toLocaleString()}
ARV: $${dealData.arv?.toLocaleString()}
Rehab: $${dealData.rehabBudget?.toLocaleString()}
Financing: ${dealData.financing}
Hold: ${dealData.holdMonths} months
Score: ${score.total}/100
Profit: $${score.profit?.toLocaleString()}
ROI: ${score.roi}%
Margin: ${score.margin}%
70% Rule: ${score.rule70Pass ? 'Pass' : 'Fail'}

Write the narrative now:`
      }]
    });

    const narrative = response.content[0].text;

    return Response.json({ narrative, creditsUsed: 10 });
  } catch(e) {
    console.error('Certificate error:', e);
    return Response.json({ error: 'Failed to generate certificate' }, { status: 500 });
  }
}