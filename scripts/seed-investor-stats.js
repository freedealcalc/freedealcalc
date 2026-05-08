// =====================================================
// FreeDealCalc — Investor Stats Seed Script
// Reads data/investor-stats-2025.csv and upserts to Supabase.
// Reusable for future quarterly data refreshes.
//
// Usage:
//   1. Make sure SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are in .env.local
//   2. Run: node scripts/seed-investor-stats.js
//      OR:   node scripts/seed-investor-stats.js path/to/other.csv
// =====================================================

const fs = require('fs');
const path = require('path');

// Load env from .env.local if dotenv is installed; otherwise rely on shell env.
try {
  require('dotenv').config({ path: path.join(process.cwd(), '.env.local') });
} catch (e) {
  // dotenv not installed — env vars must be set in shell
}

const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('ERROR: Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.');
  console.error('Add them to .env.local at the repo root, then re-run.');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false },
});

const csvPath = process.argv[2] || path.join(process.cwd(), 'data', 'investor-stats-2025.csv');

if (!fs.existsSync(csvPath)) {
  console.error(`ERROR: CSV not found at ${csvPath}`);
  process.exit(1);
}

// Simple CSV parser that handles quoted fields with commas
function parseCSV(text) {
  const lines = text.replace(/\r\n/g, '\n').split('\n').filter(l => l.length > 0);
  const headers = parseLine(lines[0]);
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseLine(lines[i]);
    const row = {};
    headers.forEach((h, idx) => { row[h] = values[idx]; });
    rows.push(row);
  }
  return rows;
}

function parseLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if (c === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += c;
    }
  }
  result.push(current);
  return result;
}

async function main() {
  console.log(`Reading ${csvPath}...`);
  const text = fs.readFileSync(csvPath, 'utf8');
  const rows = parseCSV(text);
  console.log(`Parsed ${rows.length} rows.`);

  const records = rows.map(r => ({
    metro_slug: r.metro_slug,
    metro_name: r.metro_name,
    period_begin: r.period_begin,
    period_end: r.period_end,
    investor_purchases: r.investor_purchases ? parseInt(r.investor_purchases, 10) : null,
    investor_purchases_yoy: r.investor_purchases_yoy ? parseFloat(r.investor_purchases_yoy) : null,
    investor_market_share: r.investor_market_share ? parseFloat(r.investor_market_share) : null,
  }));

  console.log('Upserting to investor_stats...');

  // Upsert in batches of 50 to be safe
  const batchSize = 50;
  let totalUpserted = 0;
  for (let i = 0; i < records.length; i += batchSize) {
    const batch = records.slice(i, i + batchSize);
    const { data, error } = await supabase
      .from('investor_stats')
      .upsert(batch, { onConflict: 'metro_slug,period_begin' });
    if (error) {
      console.error(`Batch ${i / batchSize + 1} failed:`, error.message);
      process.exit(1);
    }
    totalUpserted += batch.length;
    console.log(`  Upserted ${totalUpserted} / ${records.length}`);
  }

  console.log(`\n✓ Done. ${totalUpserted} rows upserted.`);

  // Verify count
  const { count, error: countError } = await supabase
    .from('investor_stats')
    .select('*', { count: 'exact', head: true });
  if (!countError) {
    console.log(`✓ Total rows in investor_stats: ${count}`);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
