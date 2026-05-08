'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// =====================================================
// METRO CONFIG — display name, state, investor narrative
// All 39 metros from the Redfin investor data set
// =====================================================
const METRO_CONFIG = {
  'anaheim-ca': { city: 'Anaheim', state: 'California', region: 'Orange County', narrative: 'Anaheim and the Orange County market run one of the highest investor market shares in California, with consistent demand from cash buyers, premium ARVs, and active flip and rental activity across diverse submarkets.' },
  'atlanta-ga': { city: 'Atlanta', state: 'Georgia', region: 'metro Atlanta', narrative: 'Atlanta is one of the most active wholesale and fix-and-flip markets in the Southeast, with strong cash buyer demand, diverse neighborhoods at every price point, and consistent investor activity across Fulton, DeKalb, and Clayton counties.' },
  'baltimore-md': { city: 'Baltimore', state: 'Maryland', region: 'metro Baltimore', narrative: 'Baltimore is one of the top wholesale markets on the East Coast, with large ARV gaps in transitional neighborhoods, strong investor buyer pools, and consistent deal flow from distressed inventory.' },
  'charlotte-nc': { city: 'Charlotte', state: 'North Carolina', region: 'metro Charlotte', narrative: 'Charlotte is a rising investor market with strong population growth, improving neighborhoods, and solid rent-to-price ratios that support both flip and rental strategies.' },
  'chicago-il': { city: 'Chicago', state: 'Illinois', region: 'Chicagoland', narrative: 'Chicago is a deep, diverse investor market with significant spread between distressed and renovated values in established neighborhoods, strong rental demand, and active wholesale networks.' },
  'cincinnati-oh': { city: 'Cincinnati', state: 'Ohio', region: 'Greater Cincinnati', narrative: 'Cincinnati offers strong cash flow fundamentals, accessible price points, and a growing investor community with consistent wholesale and rental activity across Hamilton County.' },
  'cleveland-oh': { city: 'Cleveland', state: 'Ohio', region: 'Northeast Ohio', narrative: 'Cleveland is a top-ranked cash flow market with some of the lowest acquisition costs for rental properties in any major metro, strong Section 8 demand, and significant wholesale opportunity.' },
  'columbus-oh': { city: 'Columbus', state: 'Ohio', region: 'Central Ohio', narrative: 'Columbus is a stable, growing market with strong university-driven rental demand, improving neighborhoods, and accessible price points for both wholesale and rental strategies.' },
  'denver-co': { city: 'Denver', state: 'Colorado', region: 'Front Range', narrative: 'Denver offers strong ARVs and an active investor community, though higher price points require careful deal analysis to protect margins on fix-and-flip projects.' },
  'detroit-mi': { city: 'Detroit', state: 'Michigan', region: 'metro Detroit', narrative: 'Detroit is one of the most active rental investor markets in the country, with low acquisition costs, deep wholesale deal flow, and strong cash flow potential across Wayne County submarkets.' },
  'fort-lauderdale-fl': { city: 'Fort Lauderdale', state: 'Florida', region: 'Broward County', narrative: 'Fort Lauderdale combines South Florida investor demand with diverse submarkets, no state income tax, and active flip and rental activity across both coastal and inland neighborhoods.' },
  'jacksonville-fl': { city: 'Jacksonville', state: 'Florida', region: 'Northeast Florida', narrative: 'Jacksonville offers some of the best cash flow fundamentals in Florida, with affordable acquisition costs, strong rental demand, and significant spread between distressed and renovated values.' },
  'las-vegas-nv': { city: 'Las Vegas', state: 'Nevada', region: 'Clark County', narrative: 'Las Vegas offers no state income tax, high rental demand from hospitality workers, and a historically active investor market with significant wholesale deal flow.' },
  'los-angeles-ca': { city: 'Los Angeles', state: 'California', region: 'LA County', narrative: 'Los Angeles is one of the deepest investor markets in the country, with premium ARVs, active cash buyers, and consistent flip and rental activity across diverse submarkets despite high entry price points.' },
  'miami-fl': { city: 'Miami', state: 'Florida', region: 'Miami-Dade', narrative: 'Miami runs the highest investor market share of any major US metro, with strong international buyer demand, premium coastal ARVs, and active investor activity in inland neighborhoods with significant value-add potential.' },
  'milwaukee-wi': { city: 'Milwaukee', state: 'Wisconsin', region: 'Greater Milwaukee', narrative: 'Milwaukee is one of the fastest-growing investor markets in the Midwest, with affordable price points, strong rental demand, and significant year-over-year growth in investor activity.' },
  'minneapolis-mn': { city: 'Minneapolis', state: 'Minnesota', region: 'Twin Cities', narrative: 'Minneapolis offers a stable investor market with strong employment fundamentals, moderate price points, and consistent rental demand across diverse Twin Cities submarkets.' },
  'montgomery-county-pa': { city: 'Montgomery County', state: 'Pennsylvania', region: 'Philadelphia suburbs', narrative: 'Montgomery County is a stable suburban Philadelphia investor market with premium ARVs, strong rental demand from professional employment, and steady deal flow across diverse townships.' },
  'nashville-tn': { city: 'Nashville', state: 'Tennessee', region: 'Middle Tennessee', narrative: 'Nashville is one of the strongest appreciation markets in the Southeast, with premium ARVs in desirable neighborhoods and consistent demand from both investors and retail buyers.' },
  'new-brunswick-nj': { city: 'New Brunswick', state: 'New Jersey', region: 'Central New Jersey', narrative: 'New Brunswick and Central New Jersey offer strong investor activity driven by Rutgers University demand, NYC commuter access, and diverse submarkets across Middlesex County.' },
  'new-york-ny': { city: 'New York', state: 'New York', region: 'NYC metro', narrative: 'New York is one of the most active investor markets in the country, with deep cash buyer pools, premium ARVs across the five boroughs, and strong rental demand driving consistent flip and hold activity.' },
  'newark-nj': { city: 'Newark', state: 'New Jersey', region: 'Essex County', narrative: 'Newark offers strong investor fundamentals with NYC proximity, accessible price points relative to neighboring markets, and significant wholesale and rental activity across Essex County.' },
  'oakland-ca': { city: 'Oakland', state: 'California', region: 'East Bay', narrative: 'Oakland and the East Bay run strong investor activity with premium ARVs, Bay Area employment driving rental demand, and significant year-over-year growth in investor purchases.' },
  'orlando-fl': { city: 'Orlando', state: 'Florida', region: 'Central Florida', narrative: 'Orlando combines strong population growth, active rental demand, and accessible price points that support both flip and rental strategies across Orange and Osceola counties.' },
  'philadelphia-pa': { city: 'Philadelphia', state: 'Pennsylvania', region: 'metro Philadelphia', narrative: 'Philadelphia is a deep wholesale and rental market with strong ARV spreads in transitional neighborhoods, accessible price points, and consistent investor activity across diverse city submarkets.' },
  'phoenix-az': { city: 'Phoenix', state: 'Arizona', region: 'Maricopa County', narrative: 'Phoenix has been one of the fastest-growing investor markets in the country, with strong appreciation history, active wholesaler networks, and high out-of-state investor demand.' },
  'portland-or': { city: 'Portland', state: 'Oregon', region: 'metro Portland', narrative: 'Portland is one of the strongest momentum investor markets in the country right now, with significant year-over-year growth in investor purchases and strong fundamentals supporting both flip and rental strategies.' },
  'providence-ri': { city: 'Providence', state: 'Rhode Island', region: 'Greater Providence', narrative: 'Providence offers a steady New England investor market with affordable price points relative to Boston, strong rental demand, and growing year-over-year investor activity.' },
  'riverside-ca': { city: 'Riverside', state: 'California', region: 'Inland Empire', narrative: 'Riverside and the Inland Empire offer strong investor fundamentals with more accessible price points than coastal Southern California, deep cash buyer pools, and active flip and rental activity.' },
  'sacramento-ca': { city: 'Sacramento', state: 'California', region: 'Sacramento Valley', narrative: 'Sacramento is a steady California investor market with strong state government employment, accessible price points relative to Bay Area peers, and consistent investor activity across diverse submarkets.' },
  'san-diego-ca': { city: 'San Diego', state: 'California', region: 'San Diego County', narrative: 'San Diego runs strong investor market share with premium ARVs, military and tech employment driving rental demand, and consistent year-over-year growth in investor purchases.' },
  'san-francisco-ca': { city: 'San Francisco', state: 'California', region: 'San Francisco Bay', narrative: 'San Francisco is one of the strongest momentum investor markets in the country, with significant year-over-year growth in investor purchases, premium ARVs, and tech-driven rental demand.' },
  'san-jose-ca': { city: 'San Jose', state: 'California', region: 'Silicon Valley', narrative: 'San Jose and Silicon Valley offer premium ARVs, strong tech employment driving rental demand, and consistent investor activity despite the highest entry price points in California.' },
  'seattle-wa': { city: 'Seattle', state: 'Washington', region: 'Puget Sound', narrative: 'Seattle is the fastest-growing investor market in the country right now, with massive year-over-year growth in investor purchases, no state income tax, and tech-driven rental demand.' },
  'tampa-fl': { city: 'Tampa', state: 'Florida', region: 'Tampa Bay', narrative: 'Tampa Bay offers strong investor fundamentals with no state income tax, active cash buyer networks, and diverse submarkets from Class A beach communities to affordable inland neighborhoods.' },
  'virginia-beach-va': { city: 'Virginia Beach', state: 'Virginia', region: 'Hampton Roads', narrative: 'Hampton Roads offers military-driven rental demand, stable employment base, and growing investor activity across Virginia Beach, Norfolk, and Chesapeake.' },
  'warren-mi': { city: 'Warren', state: 'Michigan', region: 'Macomb County', narrative: 'Warren and Macomb County offer affordable price points, stable rental demand, and consistent investor activity in the Detroit metro area with accessible entry costs.' },
  'washington-dc': { city: 'Washington', state: 'DC / Maryland / Virginia', region: 'the DMV', narrative: 'The DMV market offers premium ARVs, strong rental demand from government and tech employment, and active investor activity in surrounding Maryland and Virginia submarkets.' },
  'west-palm-beach-fl': { city: 'West Palm Beach', state: 'Florida', region: 'Palm Beach County', narrative: 'West Palm Beach combines strong South Florida investor demand with diverse submarkets, premium coastal ARVs, and growing year-over-year investor activity across Palm Beach County.' },
};

function getConfig(slug) {
  if (METRO_CONFIG[slug]) return METRO_CONFIG[slug];
  const parts = slug.split('-');
  const state = parts[parts.length - 1].toUpperCase();
  const city = parts.slice(0, -1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return { city, state, region: city, narrative: `${city} is an active real estate investor market. Track investor activity, market share, and competition trends with FreeDealCalc.` };
}

function formatPct(n, withSign = true) {
  if (n === null || n === undefined) return 'N/A';
  const val = parseFloat(n);
  return (withSign && val > 0 ? '+' : '') + val.toFixed(1) + '%';
}

function quarterLabel(periodBegin) {
  const d = new Date(periodBegin + 'T12:00:00');
  const m = d.getMonth();
  const q = m < 3 ? 'Q1' : m < 6 ? 'Q2' : m < 9 ? 'Q3' : 'Q4';
  return `${q} ${d.getFullYear()}`;
}

function fullQuarterLabel(periodBegin) {
  const d = new Date(periodBegin + 'T12:00:00');
  const m = d.getMonth();
  const q = m < 3 ? 'Q1' : m < 6 ? 'Q2' : m < 9 ? 'Q3' : 'Q4';
  const monthRange = m < 3 ? 'January–March' : m < 6 ? 'April–June' : m < 9 ? 'July–September' : 'October–December';
  return `${q} ${d.getFullYear()} (${monthRange})`;
}

// Determine market temp based on share + YoY trend
function getMarketTemp(share, yoy) {
  const s = parseFloat(share);
  const y = parseFloat(yoy);
  if (s >= 22 && y >= 0) return 'hot';
  if (s >= 18 || y >= 10) return 'warm';
  if (s >= 12) return 'cool';
  return 'cold';
}

function tempLabel(temp) {
  return { hot: '🔥 Hot Investor Market', warm: '📈 Active Investor Market', cool: '📊 Moderate Investor Market', cold: '❄️ Light Investor Activity' }[temp] || '📊 Stable Market';
}

function tempColor(temp) {
  return { hot: '#ef4444', warm: '#f59e0b', cool: '#3b82f6', cold: '#6366f1' }[temp] || '#64748b';
}

function tempDescription(temp, city) {
  return {
    hot: `Investors are competing aggressively for inventory in ${city}. Wholesalers see strong cash buyer demand; flippers face higher acquisition costs but solid exit support.`,
    warm: `${city} has healthy investor activity with active cash buyers and consistent deal flow. Good environment for both wholesale and flip strategies.`,
    cool: `${city} sees moderate investor activity. More room for wholesalers to negotiate; flippers should price ARV conservatively.`,
    cold: `Investors are pulling back in ${city}. Less competition for deals, but build extra margin into your numbers — exit may take longer.`,
  }[temp] || '';
}

export default function InvestorPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params['metro-slug'];
  const config = getConfig(slug);

  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from('investor_stats')
      .select('*')
      .eq('metro_slug', slug)
      .order('period_begin', { ascending: false })
      .limit(4)
      .then(({ data, error }) => {
        if (!error && data) setHistory(data);
        setLoading(false);
      });
  }, [slug]);

  const latest = history[0] || null;
  const trendChronological = [...history].reverse(); // Q1 -> Q4 for chart

  const handleFreddie = () => {
    setClicked(true);
    sessionStorage.setItem('fdc_seed_message', `I want to analyze a real estate deal in ${config.city}. Can you help me run the numbers for this market?`);
    router.push('/freddie');
  };

  const temp = latest ? getMarketTemp(latest.investor_market_share, latest.investor_purchases_yoy) : null;
  const periodLabel = latest ? quarterLabel(latest.period_begin) : '';
  const periodFull = latest ? fullQuarterLabel(latest.period_begin) : '';

  // ---- JSON-LD ----
  // Build structured data only when we have data, so the FAQ answers reflect real numbers.
  const buildJsonLd = () => {
    if (!latest) return null;
    const purchases = latest.investor_purchases?.toLocaleString() || 'N/A';
    const share = parseFloat(latest.investor_market_share || 0).toFixed(2);
    const yoy = parseFloat(latest.investor_purchases_yoy || 0);
    const yoyText = yoy >= 0 ? `up ${yoy.toFixed(1)}% year-over-year` : `down ${Math.abs(yoy).toFixed(1)}% year-over-year`;
    const trendText = yoy >= 5 ? 'rising' : yoy <= -5 ? 'falling' : 'roughly steady';

    const faqPage = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `How many investors are buying homes in ${config.city}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Investors purchased ${purchases} homes in ${config.city} during ${periodFull}, accounting for ${share}% of all home sales in the metro.`,
          },
        },
        {
          '@type': 'Question',
          name: `What is the investor market share in ${config.city}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Investors made up ${share}% of all home purchases in ${config.city} in ${periodLabel}. This is ${yoyText} compared to the same quarter last year.`,
          },
        },
        {
          '@type': 'Question',
          name: `Is investor activity rising or falling in ${config.city}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Investor activity in ${config.city} is ${trendText}. Investor home purchases are ${yoyText} as of ${periodLabel}.`,
          },
        },
        {
          '@type': 'Question',
          name: `How competitive is ${config.city} for real estate wholesalers?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `With investors capturing ${share}% of ${config.city} home sales in ${periodLabel}, wholesalers face ${parseFloat(share) >= 20 ? 'strong competition for distressed inventory but a deep cash buyer pool for assignments' : parseFloat(share) >= 14 ? 'moderate competition with healthy cash buyer demand' : 'lower competition for inventory but a thinner cash buyer pool to assign deals to'}.`,
          },
        },
        {
          '@type': 'Question',
          name: `Where can I analyze a ${config.city} real estate deal for free?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `FreeDealCalc offers a free AI-powered deal analyzer built for real estate investors. Freddie analyzes flips, wholesales, rentals, and BRRRR deals in ${config.city} in a real conversation, with deal score and Score Certificate included free.`,
          },
        },
      ],
    };

    const webApp = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'FreeDealCalc',
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Any',
      url: 'https://freedealcalc.com/',
      description: `Free AI-powered real estate deal analyzer for ${config.city} investors. Analyze fix-and-flip, wholesale, rental, and BRRRR deals with live market data.`,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    };

    const dataset = {
      '@context': 'https://schema.org',
      '@type': 'Dataset',
      name: `${config.city} Real Estate Investor Activity — ${periodLabel}`,
      description: `Quarterly real estate investor purchase data for ${config.city}, ${config.state}, including investor home purchases, market share percentage, and year-over-year change.`,
      creator: { '@type': 'Organization', name: 'Redfin', url: 'https://www.redfin.com/news/data-center/' },
      temporalCoverage: `${latest.period_begin}/${latest.period_end}`,
      spatialCoverage: { '@type': 'Place', name: `${config.city}, ${config.state}` },
      variableMeasured: ['Investor Home Purchases', 'Investor Market Share', 'Year-over-Year Change'],
      isAccessibleForFree: true,
    };

    return [faqPage, webApp, dataset];
  };

  const jsonLdBlocks = buildJsonLd();

  return (
    <div style={{ minHeight: '100vh', background: '#F0F2F5', fontFamily: 'DM Sans, sans-serif' }}>

      {/* JSON-LD STRUCTURED DATA */}
      {jsonLdBlocks && jsonLdBlocks.map((block, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}

      {/* NAV */}
      <nav style={{ background: '#0f1c2d', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '22px', fontStyle: 'italic', color: '#fff', fontFamily: 'Instrument Serif, serif' }}>FreeDealCalc</span>
        </a>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <a href="/freddie" style={{ color: '#00C27C', textDecoration: 'none', fontSize: '14px', fontWeight: '600', padding: '8px 16px', border: '1px solid #00C27C', borderRadius: '8px' }}>Try Freddie</a>
          <a href="/pricing" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '14px', padding: '8px 12px' }}>Pricing</a>
          <a href="/signup" style={{ background: '#00C27C', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: '700', padding: '8px 18px', borderRadius: '8px' }}>Sign Up Free</a>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ background: '#0f1c2d', padding: '64px 24px 72px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: '#00C27C', color: '#fff', fontSize: '11px', fontWeight: '800', letterSpacing: '0.12em', padding: '6px 16px', borderRadius: '100px', marginBottom: '20px', textTransform: 'uppercase' }}>
          FREE INVESTOR INTELLIGENCE
        </div>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontStyle: 'italic', color: '#00C27C', fontFamily: 'Instrument Serif, serif', lineHeight: '1.1', margin: '0 0 16px' }}>
          {config.city} Real Estate<br />Investor Activity
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '640px', margin: '0 auto 12px', lineHeight: '1.6' }}>
          Live investor market share, purchase volume, and competition trends for {config.region}. Updated quarterly.
        </p>
        {latest && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00C27C' }} />
            <span style={{ fontSize: '13px', color: '#64748b' }}>Latest data: {periodLabel} · Source: Redfin Investor Data</span>
          </div>
        )}
        <button
          onClick={handleFreddie}
          disabled={clicked}
          style={{ background: clicked ? '#059669' : '#00C27C', color: '#fff', border: 'none', borderRadius: '12px', padding: '16px 40px', fontSize: '18px', fontWeight: '800', cursor: clicked ? 'default' : 'pointer', fontFamily: 'DM Sans, sans-serif', transition: 'all 0.2s' }}
        >
          {clicked ? 'Opening Freddie…' : `Analyze a ${config.city} Deal →`}
        </button>
      </div>

      {/* INVESTOR STATS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 0' }}>
        <h2 style={{ fontSize: '26px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '8px' }}>
          {config.city} Investor Snapshot
        </h2>
        {latest && (
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
            {periodLabel} data · {tempLabel(temp)}
          </p>
        )}

        {loading ? (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '48px', textAlign: 'center', color: '#64748b' }}>Loading investor data…</div>
        ) : !latest ? (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '48px', textAlign: 'center', color: '#64748b' }}>Investor data loading shortly.</div>
        ) : (
          <>
            {/* Market temp banner */}
            <div style={{ background: tempColor(temp), borderRadius: '12px', padding: '16px 24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '16px', fontWeight: '700', color: '#fff' }}>{tempLabel(temp)}</span>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>
                {tempDescription(temp, config.city)}
              </span>
            </div>

            {/* Key metrics grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Investor Home Purchases</div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#0f1c2d', marginBottom: '4px' }}>{latest.investor_purchases?.toLocaleString() || 'N/A'}</div>
                <div style={{ fontSize: '13px', color: '#64748b' }}>{periodLabel}</div>
              </div>

              <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Investor Market Share</div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: '#0f1c2d', marginBottom: '4px' }}>{parseFloat(latest.investor_market_share).toFixed(1)}%</div>
                <div style={{ fontSize: '13px', color: '#64748b' }}>of all home sales</div>
              </div>

              <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Year-Over-Year Change</div>
                <div style={{ fontSize: '28px', fontWeight: '800', color: parseFloat(latest.investor_purchases_yoy) >= 0 ? '#00C27C' : '#ef4444', marginBottom: '4px' }}>
                  {formatPct(latest.investor_purchases_yoy)}
                </div>
                <div style={{ fontSize: '13px', color: '#64748b' }}>vs. same quarter prior year</div>
              </div>

              <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Trend Direction</div>
                <div style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2d', marginBottom: '4px' }}>
                  {parseFloat(latest.investor_purchases_yoy) >= 5 ? '📈 Rising' : parseFloat(latest.investor_purchases_yoy) <= -5 ? '📉 Pulling Back' : '➡️ Steady'}
                </div>
                <div style={{ fontSize: '13px', color: '#64748b' }}>investor activity</div>
              </div>
            </div>

            {/* Quarterly Trend Chart */}
            {trendChronological.length >= 2 && (
              <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>2025 Quarterly Investor Activity</h3>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '24px' }}>Investor home purchases by quarter in {config.city}</p>
                <QuarterlyChart data={trendChronological} />
              </div>
            )}

            {/* Investor intelligence callout */}
            <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '32px', marginBottom: '24px', borderLeft: '5px solid #00C27C' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#00C27C', marginBottom: '12px', fontFamily: 'DM Sans, sans-serif' }}>
                What This Means for {config.city} Investors
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>WHOLESALER COMPETITION</div>
                  <div style={{ fontSize: '15px', color: '#fff', lineHeight: '1.5' }}>
                    {parseFloat(latest.investor_market_share) >= 22
                      ? `At ${parseFloat(latest.investor_market_share).toFixed(1)}% investor share, ${config.city} has very heavy investor competition. Cash buyer pool is deep — assignments move fast — but acquisition spreads are tighter.`
                      : parseFloat(latest.investor_market_share) >= 16
                      ? `At ${parseFloat(latest.investor_market_share).toFixed(1)}% investor share, ${config.city} has healthy investor competition. Solid cash buyer demand for assignments and active wholesale deal flow.`
                      : `At ${parseFloat(latest.investor_market_share).toFixed(1)}% investor share, ${config.city} has lighter investor competition. More room on acquisition, but build a deeper buyer list before scaling assignments.`}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>FLIPPER EXIT ENVIRONMENT</div>
                  <div style={{ fontSize: '15px', color: '#fff', lineHeight: '1.5' }}>
                    {parseFloat(latest.investor_purchases_yoy) >= 10
                      ? `Investor purchases up ${parseFloat(latest.investor_purchases_yoy).toFixed(1)}% YoY signals rising investor confidence in ${config.city}. Generally supportive ARV environment, but watch for compressed margins as competition heats up.`
                      : parseFloat(latest.investor_purchases_yoy) >= 0
                      ? `Investor activity holding steady or slightly up YoY. Stable exit environment for flips — price ARV based on actual recent comps, not aspirational pricing.`
                      : `Investors pulling back ${Math.abs(parseFloat(latest.investor_purchases_yoy)).toFixed(1)}% YoY. Be conservative on ARV, build extra hold time into your numbers, and verify retail demand before relying on flip exit.`}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>RENTAL DEMAND SIGNAL</div>
                  <div style={{ fontSize: '15px', color: '#fff', lineHeight: '1.5' }}>
                    Strong investor share usually means strong rental demand. {config.city} investors bought {latest.investor_purchases?.toLocaleString()} homes in {periodLabel} — many of those are heading to the rental market, which competes with retail buyers and supports rents.
                  </div>
                </div>
              </div>
            </div>

            {/* Cross-link to market page */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '20px 24px', marginBottom: '24px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Want full {config.city} market data?</div>
                <div style={{ fontSize: '13px', color: '#64748b' }}>Median sale price, days on market, sale-to-list ratio, and more.</div>
              </div>
              <a href={`/markets/${slug}`} style={{ background: '#0f1c2d', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: '700', padding: '10px 20px', borderRadius: '8px' }}>
                See {config.city} Market Data →
              </a>
            </div>
          </>
        )}
      </div>

      {/* INVESTOR NARRATIVE */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 0' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '24px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '16px' }}>
            Real Estate Investing in {config.city}
          </h2>
          <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: '1.8', marginBottom: '24px' }}>
            {config.narrative}
          </p>
          {latest && (
            <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: '1.8' }}>
              In {periodLabel}, investors purchased {latest.investor_purchases?.toLocaleString()} homes in {config.city}, capturing {parseFloat(latest.investor_market_share).toFixed(1)}% of total home sales. That figure is {parseFloat(latest.investor_purchases_yoy) >= 0 ? `up ${parseFloat(latest.investor_purchases_yoy).toFixed(1)}%` : `down ${Math.abs(parseFloat(latest.investor_purchases_yoy)).toFixed(1)}%`} from the same quarter a year ago — useful context whether you are running flip numbers, building a wholesale buyers list, or evaluating rental properties in {config.region}.
            </p>
          )}
        </div>
      </div>

      {/* SEO CONTENT SECTION */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 0' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '22px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '20px' }}>
            Wholesalers, Flippers, and Rental Investors in {config.city}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '10px' }}>Wholesale Real Estate in {config.city}</h3>
              <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.8' }}>
                Wholesale real estate in {config.city} depends on consistent investor buyer demand to assign deals quickly. {latest ? `With investors capturing ${parseFloat(latest.investor_market_share).toFixed(1)}% of all home sales in ${periodLabel}, ${config.city} has ${parseFloat(latest.investor_market_share) >= 18 ? 'strong cash buyer activity' : 'moderate cash buyer activity'} for wholesalers building assignment pipelines.` : ''} Use Freddie to calculate maximum allowable offer and assignment fees on any {config.city} wholesale deal in seconds.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '10px' }}>Fix and Flip in {config.city}</h3>
              <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.8' }}>
                Fix and flip investors in {config.city} compete with both other investors and retail buyers for inventory. {latest && parseFloat(latest.investor_purchases_yoy) >= 0 ? `Rising investor activity (${formatPct(latest.investor_purchases_yoy)} YoY) signals confidence in the ${config.city} flip market.` : latest ? `Cooling investor activity (${formatPct(latest.investor_purchases_yoy)} YoY) means flippers should be conservative on ARV and budget extra hold time.` : ''} Run flip numbers free with Freddie — profit, ROI, and full deal score in minutes.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '10px' }}>Rental Property Investing in {config.city}</h3>
              <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.8' }}>
                Rental property investors evaluate {config.city} deals on cash flow, cap rate, and cash-on-cash return. {latest ? `Investor share of ${parseFloat(latest.investor_market_share).toFixed(1)}% suggests ${parseFloat(latest.investor_market_share) >= 18 ? 'strong demand for rental product, supporting rent levels and exit values' : 'a more retail-driven market where rental yields depend on neighborhood-level demand'}.` : ''} Analyze any {config.city} rental property free with Freddie — cash flow, cap rate, and BRRRR scenarios included.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '10px' }}>How Many Real Estate Investors Are Active in {config.city}?</h3>
            <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.8', marginBottom: '16px' }}>
              {latest ? `Investors purchased ${latest.investor_purchases?.toLocaleString()} homes in ${config.city} during ${periodLabel}, the most recent quarter with available data. That equals ${parseFloat(latest.investor_market_share).toFixed(1)}% of all home sales in the metro — a measure of how competitive the market is for wholesalers, flippers, and buy-and-hold investors.` : ''} Investor activity tracking helps you size up deal competition before you make offers, calibrate cash buyer outreach, and decide whether to scale into a market or pull back.
            </p>
            <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.8' }}>
              FreeDealCalc is a free AI-powered deal analyzer built for real estate investors. Whether you are evaluating a fix and flip, wholesale opportunity, rental property, or BRRRR deal in {config.city}, Freddie runs the full analysis in a real conversation — no spreadsheet, no subscription required. Get your deal score and Score Certificate free.
            </p>
          </div>
        </div>
      </div>

      {/* TOOLS GRID */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 0' }}>
        <h2 style={{ fontSize: '24px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '24px' }}>
          Free Tools for {config.city} Investors
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          {[
            ['/tools/free-ai-deal-analyzer', 'AI Deal Analyzer', 'Analyze any deal in this market with Freddie'],
            ['/tools/free-ai-flip-calculator', 'Fix and Flip Calculator', 'Calculate flip profit with local market data'],
            ['/tools/free-ai-wholesale-calculator', 'Wholesale Calculator', 'MAO and assignment fee for wholesale deals'],
            ['/tools/free-ai-brrrr-calculator', 'BRRRR Calculator', 'Model BRRRR returns in this market'],
            ['/tools/after-repair-value-calculator', 'ARV Calculator', 'Estimate after repair value with AI'],
            ['/tools/rehab-cost-estimator', 'Rehab Cost Estimator', 'Build your repair budget before you offer'],
          ].map(([href, title, desc]) => (
            <a key={href} href={href} style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', textDecoration: 'none', display: 'block', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '6px' }}>{title}</div>
              <div style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{desc}</div>
              <div style={{ fontSize: '13px', color: '#00C27C', fontWeight: '600', marginTop: '10px' }}>Use free →</div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#0f1c2d', margin: '64px 0 0', padding: '72px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontStyle: 'italic', color: '#fff', fontFamily: 'Instrument Serif, serif', marginBottom: '16px' }}>
          Ready to Analyze a {config.city} Deal?
        </h2>
        <p style={{ fontSize: '17px', color: '#94a3b8', maxWidth: '500px', margin: '0 auto 32px', lineHeight: '1.6' }}>
          Free forever. Live investor and market data. AI that knows real estate.
        </p>
        <button
          onClick={handleFreddie}
          style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: '12px', padding: '16px 40px', fontSize: '18px', fontWeight: '800', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}
        >
          Talk to Freddie →
        </button>
      </div>

      {/* FOOTER */}
      <footer style={{ background: '#0a1628', padding: '24px', textAlign: 'center' }}>
        <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 8px' }}>© 2025 FreeDealCalc. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <a href="/privacy" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/terms" style={{ color: '#64748b', fontSize: '13px', textDecoration: 'none' }}>Terms of Service</a>
        </div>
        <p style={{ fontSize: '11px', color: '#475569', marginTop: '12px', maxWidth: '720px', margin: '12px auto 0' }}>
          Investor data sourced from <a href="https://www.redfin.com/news/data-center/investor-data" style={{ color: '#94a3b8', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">Redfin Investor Data</a>. Updated quarterly. FreeDealCalc is for informational purposes only and does not constitute financial, legal, or investment advice. Always consult qualified professionals before making real estate investment decisions.
        </p>
      </footer>

    </div>
  );
}

// =====================================================
// SVG quarterly bar chart — pure inline, no chart libraries
// =====================================================
function QuarterlyChart({ data }) {
  if (!data || data.length === 0) return null;
  const max = Math.max(...data.map(d => d.investor_purchases || 0));
  const chartHeight = 220;
  const barWidth = 60;
  const gap = 40;
  const totalWidth = data.length * (barWidth + gap) + gap;

  return (
    <div style={{ overflowX: 'auto' }}>
      <svg width={totalWidth} height={chartHeight + 60} style={{ display: 'block', margin: '0 auto' }}>
        {data.map((d, i) => {
          const h = max > 0 ? (d.investor_purchases / max) * chartHeight : 0;
          const x = gap + i * (barWidth + gap);
          const y = chartHeight - h + 20;
          const yoy = parseFloat(d.investor_purchases_yoy);
          const barColor = yoy >= 0 ? '#00C27C' : '#ef4444';
          return (
            <g key={i}>
              {/* Value label on top of bar */}
              <text x={x + barWidth / 2} y={y - 6} textAnchor="middle" fontSize="13" fontWeight="700" fill="#0f1c2d">
                {d.investor_purchases?.toLocaleString()}
              </text>
              {/* Bar */}
              <rect x={x} y={y} width={barWidth} height={h} fill={barColor} rx="4" />
              {/* Quarter label */}
              <text x={x + barWidth / 2} y={chartHeight + 38} textAnchor="middle" fontSize="13" fontWeight="600" fill="#0f1c2d">
                {quarterLabel(d.period_begin)}
              </text>
              {/* Share label */}
              <text x={x + barWidth / 2} y={chartHeight + 54} textAnchor="middle" fontSize="11" fill="#64748b">
                {parseFloat(d.investor_market_share).toFixed(1)}% share
              </text>
            </g>
          );
        })}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '12px', fontSize: '12px', color: '#64748b' }}>
        <span><span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#00C27C', borderRadius: '2px', marginRight: '6px', verticalAlign: 'middle' }} />YoY positive</span>
        <span><span style={{ display: 'inline-block', width: '10px', height: '10px', background: '#ef4444', borderRadius: '2px', marginRight: '6px', verticalAlign: 'middle' }} />YoY negative</span>
      </div>
    </div>
  );
}
