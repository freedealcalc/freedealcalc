// scripts/seed_metro_stats.js
// Run with: node scripts/seed_metro_stats.js
// Requires: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local

const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

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

function getMarketTemp(data) {
  const dom = parseInt(data['MEDIAN DAYS ON MARKET (DAYS)']) || 30;
  const pctAbove = parseFloat(data['SHARE SOLD ABOVE ORIGINAL LIST (%)']) || 0;
  const salesToList = parseFloat(data['AVERAGE SALE TO LIST RATIO (%)']) || 97;

  if (dom < 20 && pctAbove > 30 && salesToList > 100) return 'hot';
  if (dom < 35 && pctAbove > 20) return 'warm';
  if (dom > 60 || pctAbove < 10) return 'cold';
  return 'cool';
}

function parseNum(val) {
  if (!val || val === '') return null;
  const n = parseFloat(val);
  return isNaN(n) ? null : n;
}

function parseInt2(val) {
  if (!val || val === '') return null;
  const n = parseInt(val);
  return isNaN(n) ? null : n;
}

async function seed() {
  // Read CSV - update this path to wherever you saved the Redfin CSV
  const csvPath = process.argv[2] || './redfin_metro_data.csv';
  
  if (!fs.existsSync(csvPath)) {
    console.error(`CSV file not found: ${csvPath}`);
    console.error('Usage: node scripts/seed_metro_stats.js /path/to/redfin_metro.csv');
    process.exit(1);
  }

  const content = fs.readFileSync(csvPath, 'utf-8');
  const lines = content.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  
  const rows = lines.slice(1).map(line => {
    // Handle quoted fields with commas (e.g., "Atlanta, GA metro area")
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

  console.log(`Loaded ${rows.length} rows from CSV`);

  // Use most recent period only (March 2026)
  const latestPeriod = rows.reduce((max, r) => r['PERIOD BEGIN'] > max ? r['PERIOD BEGIN'] : max, '');
  const latest = rows.filter(r => r['PERIOD BEGIN'] === latestPeriod);
  console.log(`Using period: ${latestPeriod} (${latest.length} metros)`);

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
    market_temp: getMarketTemp(r),
    deals_analyzed: 0,
    avg_deal_score: null,
    top_strategy: null,
  }));

  console.log(`Inserting ${records.length} metro records...`);

  // Upsert all records
  const { data, error } = await supabase
    .from('metro_stats')
    .upsert(records, { onConflict: 'metro_slug,period_begin' });

  if (error) {
    console.error('Insert error:', error);
    process.exit(1);
  }

  console.log(`Successfully seeded ${records.length} metros.`);
  
  // Verify
  const { count } = await supabase
    .from('metro_stats')
    .select('*', { count: 'exact', head: true });
  console.log(`Total rows in metro_stats: ${count}`);
  
  // Sample output
  const { data: sample } = await supabase
    .from('metro_stats')
    .select('metro_slug, metro_name, median_sale_price, median_days_on_market, market_temp')
    .eq('metro_slug', 'atlanta-ga')
    .single();
  console.log('Atlanta sample:', sample);
}

seed().catch(console.error);
