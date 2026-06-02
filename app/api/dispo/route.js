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

    // Resolve ARV — wholesale deals may have rentcastArv or no ARV at all
    const resolvedArv = dealData.arv || dealData.rentcastArv || null;

    // Profile + limit check — only for authenticated users
    let disposUsed = 0;
    let tier = 'free';

    if (userId) {
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('tier, dispos_used_this_period, usage_period_reset_at')
        .eq('id', userId)
        .single();

      if (profileError || !profile) {
        return Response.json({ error: 'profile_not_found' }, { status: 404 });
      }

      tier = profile.tier || 'free';
      const limit = DISPO_LIMITS[tier] ?? 3;

      // Check if usage period needs reset
      const now = new Date();
      const resetAt = profile.usage_period_reset_at ? new Date(profile.usage_period_reset_at) : null;
      disposUsed = profile.dispos_used_this_period || 0;

      if (!resetAt || now > resetAt) {
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
ARV: $${resolvedArv?.toLocaleString() ?? 'Not provided'}
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

    // Increment usage counter — authenticated users only
    if (userId) {
      await supabase.from('profiles')
        .update({ dispos_used_this_period: disposUsed + 1 })
        .eq('id', userId);
    }

    // Save full deal record — anon and authenticated
    await supabase.from('deals').insert({
      user_id: userId || null,
      address: dealData.address || null,
      strategy: 'Wholesale',
      purchase_price: dealData.purchasePrice || null,
      arv: resolvedArv || null,
      rehab_budget: dealData.rehabBudget || null,
      asking_price: askingPrice || null,
      emd: emd || null,
      close_by: closeBy || null,
      condition: condition || null,
      rehab_scope: rehabScope || null,
      comps: dealData.userComps ? dealData.userComps.join(', ') : null,
      score: null,
      status: 'Dispo Generated',
    });

    return Response.json({
      pitch: pitchRes.content[0].text,
      scopeSummary: scopeRes.content[0].text,
    });

  } catch(e) {
    console.error('Dispo error:', e);
    return Response.json({ error: 'Failed to generate disposition package' }, { status: 500 });
  }
}