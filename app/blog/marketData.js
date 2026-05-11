// lib/blog/marketData.js
// Server-side market data fetcher for blog posts
// Pulls most recent NoVA market stats from Supabase redfin_market_stats table

import { createClient } from '@supabase/supabase-js';

export async function getNOVAMarketData() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Pull the most recent row for Prince William County as the NoVA proxy
    // Falls back to Fairfax County if PWC data is missing
    const { data: rows } = await supabase
      .from('redfin_market_stats')
      .select('*')
      .in('region_name', ['Prince William County, VA', 'Fairfax County, VA'])
      .order('period', { ascending: false })
      .limit(2);

    const stats = rows?.[0] || null;

    if (!stats) return null;

    return {
      regionName: stats.region_name?.replace(', VA', '') || 'Northern Virginia',
      period: stats.period || null,
      medianPrice: stats.median_price || null,
      medianDom: stats.median_dom || null,
      saleToList: stats.sale_to_list || null,
      pctAboveList: stats.pct_above_list || null,
      homesSold: stats.homes_sold || null,
      medianPriceYoy: stats.median_price_yoy || null,
    };
  } catch (e) {
    console.error('[getNOVAMarketData] Error:', e.message);
    return null;
  }
}

export function formatPeriod(period) {
  if (!period) return null;
  const [year, month] = period.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export function formatPrice(price) {
  if (!price) return null;
  return '$' + price.toLocaleString();
}
