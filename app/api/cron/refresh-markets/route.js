// app/api/cron/refresh-markets/route.js
// Vercel Cron Job - runs monthly to refresh Redfin metro data
// Configure in vercel.json (see below)

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Redfin Data Center - monthly metro CSV
// This URL downloads the latest monthly data for all metro areas
const REDFIN_URL = 'https://redfin-public-data.s3.us-west-2.amazonaws.com/redfin_market_tracker/redfin_metro_market_tracker.tsv000.gz';

function makeSlug(name) {
  return name
    .replace(' metro area', '')
    .toLowerCase()
    .replace(/[^a-z0-9\s,]/g, '')
    .replace(', ', '-')
    .replace(/\s+/g, '-');
}

function getStateCode(name) {
  const match = name.match(/,\s*([A-Z]{2})\s+metro/);
  return match ? match[1] : 'US';
}

function getMarketTemp(row) {
  const dom = parseInt(row.median_days_on_market) || 30;
  const pctAbove = parseFloat(row.pct_sold_above_list) || 0;
  const salesToList = parseFloat(row.sale_to_list_ratio) || 97;
  if (dom < 20 && pctAbove > 30 && salesToList > 100) return 'hot';
  if (dom < 35 && pctAbove > 20) return 'warm';
  if (dom > 60 || pctAbove < 10) return 'cold';
  return 'cool';
}

function parseNum(val) {
  if (!val || val === '' || val === 'N/A') return null;
  const n = parseFloat(val);
  return isNaN(n) ? null : n;
}

function parseInt2(val) {
  if (!val || val === '' || val === 'N/A') return null;
  const n = parseInt(val);
  return isNaN(n) ? null : n;
}

export async function GET(request) {
  // Verify this is called by Vercel Cron (not a random request)
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    console.log('Starting metro stats refresh...');

    // NOTE: Redfin's public S3 file is a gzipped TSV
    // For the manual monthly update flow, you can also POST a CSV body
    // For now this handles the manual update path
    // Full automated S3 download requires additional parsing (see README)

    // Instead: use the manually downloaded CSV approach
    // POST to this endpoint with CSV content in body for manual monthly updates
    return Response.json({ 
      message: 'Cron endpoint ready. POST CSV content to refresh, or use seed script.',
      hint: 'Run: node scripts/seed_metro_stats.js /path/to/redfin_metro.csv'
    });

  } catch (error) {
    console.error('Cron refresh error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}

// Handle manual CSV upload for monthly refresh
export async function POST(request) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.text();
    const lines = body.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));

    const rows = lines.slice(1).map(line => {
      const values = [];
      let current = '';
      let inQuotes = false;
      for (const char of line) {
        if (char === '"') { inQuotes = !inQuotes; }
        else if (char === ',' && !inQuotes) { values.push(current); current = ''; }
        else { current += char; }
      }
      values.push(current);
      const row = {};
      headers.forEach((h, i) => { row[h] = values[i] || ''; });
      return row;
    });

    // Get most recent period
    const latestPeriod = rows.reduce((max, r) => r['PERIOD BEGIN'] > max ? r['PERIOD BEGIN'] : max, '');
    const latest = rows.filter(r => r['PERIOD BEGIN'] === latestPeriod);

    const records = latest.map(r => ({
      metro_slug: makeSlug(r['REGION NAME']),
      metro_name: r['REGION NAME'].replace(' metro area', ''),
      state_code: getStateCode(r['REGION NAME']),
      period_begin: r['PERIOD BEGIN'],
      period_end: r['PERIOD END'],
      last_updated: r['LAST UPDATED'],
      homes_sold: parseInt2(r['HOMES SOLD']),
      homes_sold_yoy: parseNum(r['HOMES SOLD YOY (%)']),
      median_sale_price: parseInt2(r['MEDIAN SALE PRICE ($)']),
      median_sale_price_yoy: parseNum(r['MEDIAN SALE PRICE YOY (%)']),
      median_days_on_market: parseInt2(r['MEDIAN DAYS ON MARKET (DAYS)']),
      median_dom_yoy: parseNum(r['MEDIAN DAYS ON MARKET YOY (%)']),
      sale_to_list_ratio: parseNum(r['AVERAGE SALE TO LIST RATIO (%)']),
      sale_to_list_yoy: parseNum(r['AVERAGE SALE TO LIST RATIO YOY (PPTS)']),
      pct_sold_above_list: parseNum(r['SHARE SOLD ABOVE ORIGINAL LIST (%)']),
      pct_sold_above_list_yoy: parseNum(r['SHARE SOLD ABOVE ORIGINAL LIST YOY (PPTS)']),
      new_listings: parseInt2(r['NEW LISTINGS']),
      new_listings_yoy: parseNum(r['NEW LISTINGS YOY (%)']),
      active_listings: parseInt2(r['ACTIVE LISTINGS']),
      active_listings_yoy: parseNum(r['ACTIVE LISTINGS YOY (%)']),
      pending_sales: parseInt2(r['PENDING SALES']),
      pending_sales_yoy: parseNum(r['PENDING SALES YOY (%)']),
      market_temp: getMarketTemp({
        median_days_on_market: parseInt2(r['MEDIAN DAYS ON MARKET (DAYS)']),
        pct_sold_above_list: parseNum(r['SHARE SOLD ABOVE ORIGINAL LIST (%)']),
        sale_to_list_ratio: parseNum(r['AVERAGE SALE TO LIST RATIO (%)']),
      }),
    }));

    const { error } = await supabase
      .from('metro_stats')
      .upsert(records, { onConflict: 'metro_slug,period_begin' });

    if (error) throw error;

    return Response.json({ success: true, updated: records.length, period: latestPeriod });

  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
