import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://www.freedealcalc.com';

// Route segments intentionally excluded from the sitemap: auth-gated app screens
// (account, login, onboarding, payment-success) and per-session/query-param-driven
// result pages with no static, indexable content of their own (certificate,
// deal-blast, deal-results, dispo, proposal). "investors" holds user-generated
// [username] profile pages that can't be safely enumerated here.
const EXCLUDE_TOP_LEVEL = new Set([
  'api',
  'account',
  'login',
  'onboarding',
  'payment-success',
  'certificate',
  'deal-blast',
  'deal-results',
  'dispo',
  'proposal',
  'investors',
]);

function collectRoutes(dir, prefix = '') {
  const routes = [];

  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return routes;
  }

  for (const entry of entries) {
    if (entry.startsWith('_') || entry.startsWith('.') || entry.startsWith('[')) continue;
    if (!prefix && EXCLUDE_TOP_LEVEL.has(entry)) continue;

    const fullPath = join(dir, entry);
    let isDir = false;
    try {
      isDir = statSync(fullPath).isDirectory();
    } catch {
      continue;
    }
    if (!isDir) continue;

    const slug = prefix ? `${prefix}/${entry}` : entry;
    const pageFile = join(fullPath, 'page.js');
    let hasPage = false;
    try {
      statSync(pageFile);
      hasPage = true;
    } catch {}

    if (hasPage) routes.push(slug);

    routes.push(...collectRoutes(fullPath, slug));
  }

  return routes;
}

// Real estate metro markets served behind the dynamic [metro-slug] routes below.
// These live behind bracketed directories that a filesystem walk can't enumerate,
// so the known-good slug list is kept here explicitly. This is the same list of
// markets that was already live in the sitemap prior to this fix.
const MARKET_SLUGS = [
  'akron-oh', 'albany-ny', 'albuquerque-nm', 'allentown-pa', 'anaheim-ca',
  'atlanta-ga', 'austin-tx', 'bakersfield-ca', 'baltimore-md', 'baton-rouge-la',
  'birmingham-al', 'boise-city-id', 'boston-ma', 'bridgeport-ct', 'buffalo-ny',
  'camden-nj', 'cape-coral-fl', 'charleston-sc', 'charlotte-nc', 'chicago-il',
  'cincinnati-oh', 'cleveland-oh', 'colorado-springs-co', 'columbia-sc', 'columbus-oh',
  'dallas-tx', 'dayton-oh', 'denver-co', 'des-moines-ia', 'detroit-mi',
  'el-paso-tx', 'elgin-il', 'fort-lauderdale-fl', 'fort-worth-tx', 'frederick-md',
  'fresno-ca', 'gary-in', 'grand-rapids-mi', 'greensboro-nc', 'greenville-sc',
  'hartford-ct', 'honolulu-hi', 'houston-tx', 'indianapolis-in', 'jacksonville-fl',
  'kansas-city-mo', 'knoxville-tn', 'lake-county-il', 'lakeland-fl', 'las-vegas-nv',
  'little-rock-ar', 'los-angeles-ca', 'louisville-ky', 'mcallen-tx', 'memphis-tn',
  'miami-fl', 'milwaukee-wi', 'minneapolis-mn', 'montgomery-county-pa', 'nashville-tn',
  'nassau-county-ny', 'new-brunswick-nj', 'new-haven-ct', 'new-orleans-la', 'new-york-ny',
  'newark-nj', 'north-port-fl', 'oakland-ca', 'oklahoma-city-ok', 'omaha-ne',
  'orlando-fl', 'oxnard-ca', 'philadelphia-pa', 'phoenix-az', 'pittsburgh-pa',
  'portland-or', 'providence-ri', 'raleigh-nc', 'richmond-va', 'riverside-ca',
  'rochester-ny', 'sacramento-ca', 'salt-lake-city-ut', 'san-antonio-tx', 'san-diego-ca',
  'san-francisco-ca', 'san-jose-ca', 'seattle-wa', 'st-louis-mo', 'stockton-ca',
  'tacoma-wa', 'tampa-fl', 'tucson-az', 'tulsa-ok', 'virginia-beach-va',
  'warren-mi', 'washington-dc', 'west-palm-beach-fl', 'wilmington-de', 'worcester-ma',
];

const INVESTOR_MARKET_SLUGS = [
  'anaheim-ca', 'atlanta-ga', 'baltimore-md', 'charlotte-nc', 'chicago-il',
  'cincinnati-oh', 'cleveland-oh', 'columbus-oh', 'denver-co', 'detroit-mi',
  'fort-lauderdale-fl', 'jacksonville-fl', 'las-vegas-nv', 'los-angeles-ca', 'miami-fl',
  'milwaukee-wi', 'minneapolis-mn', 'montgomery-county-pa', 'nashville-tn', 'new-brunswick-nj',
  'new-york-ny', 'newark-nj', 'oakland-ca', 'orlando-fl', 'philadelphia-pa',
  'phoenix-az', 'portland-or', 'providence-ri', 'riverside-ca', 'sacramento-ca',
  'san-diego-ca', 'san-francisco-ca', 'san-jose-ca', 'seattle-wa', 'tampa-fl',
  'virginia-beach-va', 'warren-mi', 'washington-dc', 'west-palm-beach-fl',
];

function priorityFor(slug) {
  if (slug === '') return 1.0;
  if (slug === 'blog' || slug === 'tools') return 0.9;
  if (slug.startsWith('blog/')) return 0.7;
  if (slug.startsWith('tools/')) return 0.8;
  if (slug.startsWith('markets/') || slug.startsWith('investor-markets/')) return 0.8;
  return 0.7;
}

function changeFreqFor(slug) {
  if (slug === '' || slug === 'blog' || slug === 'tools') return 'weekly';
  return 'monthly';
}

export default function sitemap() {
  const appDir = join(process.cwd(), 'app');
  const staticRoutes = collectRoutes(appDir);

  const allSlugs = [
    '',
    ...staticRoutes,
    ...MARKET_SLUGS.map((s) => `markets/${s}`),
    ...INVESTOR_MARKET_SLUGS.map((s) => `investor-markets/${s}`),
  ];

  const now = new Date();

  return allSlugs.map((slug) => ({
    url: slug ? `${BASE_URL}/${slug}` : BASE_URL,
    lastModified: now,
    changeFrequency: changeFreqFor(slug),
    priority: priorityFor(slug),
  }));
}
