import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';

const client = new Anthropic();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(request) {
  try {
    const { dealData, userId, offerPrice, closeDate, dealNotes, profile } = await request.json();

    // Check and deduct credits
    if (userId) {
      const { data: credits } = await supabase
        .from('credits')
        .select('credits, transaction_type')
        .eq('user_id', userId);

      const balance = (credits || []).reduce((sum, row) => {
        return row.transaction_type === 'Spend' ? sum - Math.abs(row.credits) : sum + row.credits;
      }, 0);

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

    const benefits = [
      `We can close by ${closeDate}`,
      'All cash — no financing contingencies',
      'No inspection contingencies',
      'No repairs required from the seller',
      profile?.leaveBehind ? 'Seller can leave anything behind at no cost' : null,
      profile?.cashAdvance ? `We offer $${profile.cashAdvance} to help with moving costs` : null,
      dealNotes ? `Additional context: ${dealNotes}` : null,
    ].filter(Boolean).join('\n');

    const res = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 300,
      messages: [{
        role: 'user',
        content: `You are writing a seller proposal on behalf of a real estate investor. Your job is to write 3 short paragraphs that make the seller feel confident, respected, and excited to accept this offer. 

Rules:
- Never mention ARV, after-repair value, or what the property could sell for on the open market
- Never show or reference buyer profit calculations
- Never apologize for or justify the offer price
- Focus entirely on what the seller gains: speed, certainty, simplicity, cash
- Warm but professional tone — like a trusted neighbor, not a corporation
- Plain text only, no markdown, no bullet points
- 3 short paragraphs, each 2-3 sentences

Property: ${dealData?.address}
Offer: $${offerPrice?.toLocaleString()}
What we're offering the seller:
${benefits}
Our background: ${profile?.pitch || 'Experienced local investor'}

Write the 3 paragraphs now:`
      }]
    });

    return Response.json({
      narrative: res.content[0].text,
      creditsUsed: 25,
    });
  } catch(e) {
    console.error('Proposal error:', e);
    return Response.json({ error: 'Failed to generate proposal' }, { status: 500 });
  }
}