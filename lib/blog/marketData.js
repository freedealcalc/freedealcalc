// lib/blog/marketData.js
// Server-side market data fetcher for blog posts
// Pulls from metro_stats table — seeded from Redfin, 100+ metros

import { createClient } from '@supabase/supabase-js';

// Metro slug map — maps city names used in blog posts to metro_stats slugs
const CITY_SLUG_MAP = {
  // Default / NoVA
  'northern virginia': 'washington-dc',
  'nova': 'washington-dc',
  'washington dc': 'washington-dc',
  'dc': 'washington-dc',

  // Major metros
  'atlanta': 'atlanta-ga',
  'phoenix': 'phoenix-az',
  'dallas': 'dallas-tx',
  'houston': 'houston-tx',
  'charlotte': 'charlotte-nc',
  'nashville': 'nashville-tn',
  'denver': 'denver-co',
  'indianapolis': 'indianapolis-in',
  'jacksonville': 'jacksonville-fl',
  'columbus': 'columbus-oh',
  'kansas city': 'kansas-city-mo',
  'memphis': 'memphis-tn',
  'cleveland': 'cleveland-oh',
  'detroit': 'detroit-mi',
  'las vegas': 'las-vegas-nv',
  'orlando': 'orlando-fl',
  'san antonio': 'san-antonio-tx',
  'raleigh': 'raleigh-nc',
  'minneapolis': 'minneapolis-mn',
  'tampa': 'tampa-fl',
  'miami': 'miami-fl',
  'chicago': 'chicago-il',
  'philadelphia': 'philadelphia-pa',
  'los angeles': 'los-angeles-ca',
  'seattle': 'seattle-wa',
  'portland': 'portland-or',
  'baltimore': 'baltimore-md',
  'pittsburgh': 'pittsburgh-pa',
  'st louis': 'st-louis-mo',
  'cincinnati': 'cincinnati-oh',
  'salt lake city': 'salt-lake-city-ut',
  'richmond': 'richmond-va',
  'birmingham': 'birmingham-al',
  'new orleans': 'new-orleans-la',
  'oklahoma city': 'oklahoma-city-ok',
  'austin': 'austin-tx',
};

export async function getMarketData(city = 'northern virginia') {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Resolve city to slug
    const normalizedCity = city.toLowerCase().trim();
    const slug = CITY_SLUG_MAP[normalizedCity] || 'washington-dc';

    // Pull most recent row for this metro
    const { data: rows, error } = await supabase
      .from('metro_stats')
      .select('*')
      .eq('metro_slug', slug)
      .order('period_begin', { ascending: false })
      .limit(1);

    if (error || !rows || rows.length === 0) {
      // Fallback to washington-dc if slug not found
      const { data: fallback } = await supabase
        .from('metro_stats')
        .select('*')
        .eq('metro_slug', 'washington-dc')
        .order('period_begin', { ascending: false })
        .limit(1);

      if (!fallback || fallback.length === 0) return null;
      return formatRow(fallback[0]);
    }

    return formatRow(rows[0]);
  } catch (e) {
    console.error('[getMarketData] Error:', e.message);
    return null;
  }
}

function formatRow(row) {
  return {
    regionName: row.metro_name || 'US Market',
    period: row.period_begin || null,
    medianPrice: row.median_sale_price || null,
    medianDom: row.median_days_on_market || null,
    saleToList: row.sale_to_list_ratio ? row.sale_to_list_ratio / 100 : null,
    pctAboveList: row.pct_sold_above_list || null,
    homesSold: row.homes_sold || null,
    medianPriceYoy: row.median_sale_price_yoy || null,
    marketTemp: row.market_temp || null,
    newListings: row.new_listings || null,
    activeListings: row.active_listings || null,
  };
}

// Legacy export — kept for backward compat with existing 30 posts
// Points to washington-dc as the NoVA proxy
export async function getNOVAMarketData() {
  return getMarketData('northern virginia');
}

export function formatPeriod(period) {
  if (!period) return null;
  const date = new Date(period);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatPrice(price) {
  if (!price) return null;
  return '$' + price.toLocaleString();
}
