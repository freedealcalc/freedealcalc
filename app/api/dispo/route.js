import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';

const client = new Anthropic();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const { dealData, userId, askingPrice, emd, closeBy, condition, rehabScope, extras } = await request.json();

    // Check credits
    if (userId) {
      const { data: credits } = await supabase
        .from('credits')
        .select('credits')
        .eq('user_id', userId);

      const balance = credits?.reduce((a, c) => a + c.credits, 0) || 0;
      if (balance < 50) {
        return Response.json({ error: 'insufficient_credits' }, { status: 402 });
      }

      await supabase.from('credits').insert({
        user_id: userId,
        transaction_type: 'Spend',
        credits: -50,
        description: 'Disposition Package',
      });
    }

    // Generate deal pitch
    const pitchRes = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 250,
      messages: [{
        role: 'user',
        content: `Write a high-energy 3-4 sentence pitch for a wholesale real estate deal targeted at cash buyers and flippers. Make it sound like a great opportunity. Use the actual numbers. Create urgency. Do not mention AI. Plain text only, no markdown, no exclamation marks — let the numbers do the talking.

Property: ${dealData.address}
Buy It Now Price: $${askingPrice?.toLocaleString()}
ARV: $${dealData.arv?.toLocaleString()}
Rehab Budget: $${dealData.rehabBudget?.toLocaleString()}
Condition: ${condition}
Close By: ${closeBy}

Write the pitch now:`
      }]
    });

    // Generate condition/scope summary
    const scopeRes = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 200,
      messages: [{
        role: 'user',
        content: `Write a concise 2-3 sentence property condition and rehab scope summary for a wholesale deal package. Professional tone. Plain text only, no markdown.

Condition notes: ${condition}
Rehab scope: ${rehabScope}
Rehab budget: $${dealData.rehabBudget?.toLocaleString()}

Write the summary now:`
      }]
    });

    return Response.json({
      pitch: pitchRes.content[0].text,
      scopeSummary: scopeRes.content[0].text,
      creditsUsed: 50,
    });
  } catch(e) {
    console.error('Dispo error:', e);
    return Response.json({ error: 'Failed to generate disposition package' }, { status: 500 });
  }
}