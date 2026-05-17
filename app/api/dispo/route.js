import Anthropic from '@anthropic-ai/sdk';
import { createClient } from '@supabase/supabase-js';

const client = new Anthropic();
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const DISPO_LIMITS = {
  free: 3,
  investor: 3,
  pro: Infinity,
};

export async function POST(request) {
  try {
    const { dealData, userId, askingPrice, emd, closeBy, condition, rehabScope, extras,
      showComps, showRentcastBadge, showBuyerSpread, showRehabEstimate } = await request.json();

    if (!userId) {
      return Response.json({ error: 'auth_required' }, { status: 401 });
    }

    // Load profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('tier, dispos_used_this_period, usage_period_reset_at')
      .eq('id', userId)
      .single();

    if (profileError || !profile) {
      return Response.json({ error: 'profile_not_found' }, { status: 404 });
    }

    const tier = profile.tier || 'free';
    const limit = DISPO_LIMITS[tier] ?? 3;

    // Check if usage period needs reset
    const now = new Date();
    const resetAt = profile.usage_period_reset_at ? new Date(profile.usage_period_reset_at) : null;
    let disposUsed = profile.dispos_used_this_period || 0;

    if (!resetAt || now > resetAt) {
      // Reset period
      const nextReset = new Date(now);
      nextReset.setMonth(nextReset.getMonth() + 1);
      await supabase.from('profiles').update({
        dispos_used_this_period: 0,
        usage_period_reset_at: nextReset.toISOString(),
      }).eq('id', userId);
      disposUsed = 0;
    }

    // Check limit
    if (limit !== Infinity && disposUsed >= limit) {
      return Response.json({ error: 'limit_reached', used: disposUsed, limit }, { status: 402 });
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

    // Increment usage counter
    await supabase.from('profiles')
      .update({ dispos_used_this_period: disposUsed + 1 })
      .eq('id', userId);

    return Response.json({
      pitch: pitchRes.content[0].text,
      scopeSummary: scopeRes.content[0].text,
    });

  } catch(e) {
    console.error('Dispo error:', e);
    return Response.json({ error: 'Failed to generate disposition package' }, { status: 500 });
  }
}