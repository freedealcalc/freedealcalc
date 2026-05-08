'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Metro display config - city name, state, investor narrative
const METRO_CONFIG = {
  'atlanta-ga': { city: 'Atlanta', state: 'Georgia', nickname: 'ATL', investorBlurb: 'Atlanta is one of the most active wholesale and fix-and-flip markets in the Southeast, with strong cash buyer demand, diverse neighborhoods at every price point, and consistent investor activity across Fulton, DeKalb, and Clayton counties.' },
  'dallas-tx': { city: 'Dallas', state: 'Texas', nickname: 'DFW', investorBlurb: 'Dallas-Fort Worth is a top-5 investor market nationally, with high transaction volume, strong population growth, and a deep cash buyer pool across suburban submarkets.' },
  'houston-tx': { city: 'Houston', state: 'Texas', nickname: 'HTX', investorBlurb: 'Houston offers some of the best wholesale spreads in Texas, with no zoning laws creating unique flexibility, a massive geographic footprint, and strong rental demand driven by energy sector employment.' },
  'phoenix-az': { city: 'Phoenix', state: 'Arizona', nickname: 'PHX', investorBlurb: 'Phoenix has been one of the fastest-growing investor markets in the country, with strong appreciation history, active wholesaler networks, and high out-of-state investor demand.' },
  'charlotte-nc': { city: 'Charlotte', state: 'North Carolina', nickname: 'CLT', investorBlurb: 'Charlotte is a rising investor market with strong population growth, improving neighborhoods, and solid rent-to-price ratios that support both flip and rental strategies.' },
  'tampa-fl': { city: 'Tampa', state: 'Florida', nickname: 'TPA', investorBlurb: 'Tampa Bay offers strong investor fundamentals with no state income tax, active cash buyer networks, and diverse submarkets from Class A beach communities to affordable inland neighborhoods.' },
  'nashville-tn': { city: 'Nashville', state: 'Tennessee', nickname: 'BNA', investorBlurb: 'Nashville is one of the strongest appreciation markets in the Southeast, with premium ARVs in desirable neighborhoods and consistent demand from both investors and retail buyers.' },
  'denver-co': { city: 'Denver', state: 'Colorado', nickname: 'DEN', investorBlurb: 'Denver offers strong ARVs and an active investor community, though higher price points require careful deal analysis to protect margins on fix-and-flip projects.' },
  'chicago-il': { city: 'Chicago', state: 'Illinois', nickname: 'CHI', investorBlurb: 'Chicago is a deep, diverse investor market with significant spread between distressed and renovated values in established neighborhoods, strong rental demand, and active wholesale networks.' },
  'baltimore-md': { city: 'Baltimore', state: 'Maryland', nickname: 'BWI', investorBlurb: 'Baltimore is one of the top wholesale markets on the East Coast, with large ARV gaps in transitional neighborhoods, strong investor buyer pools, and consistent deal flow from distressed inventory.' },
  'washington-dc': { city: 'Washington', state: 'DC / Maryland / Virginia', nickname: 'DMV', investorBlurb: 'The DMV market offers premium ARVs, strong rental demand from government and tech employment, and active investor activity in surrounding Maryland and Virginia submarkets.' },
  'miami-fl': { city: 'Miami', state: 'Florida', nickname: 'MIA', investorBlurb: 'Miami is a high-value market with strong international buyer demand, premium coastal ARVs, and active investor activity in inland neighborhoods with significant value-add potential.' },
  'orlando-fl': { city: 'Orlando', state: 'Florida', nickname: 'MCO', investorBlurb: 'Orlando combines strong population growth, active rental demand, and accessible price points that support both flip and rental strategies across Orange and Osceola counties.' },
  'jacksonville-fl': { city: 'Jacksonville', state: 'Florida', nickname: 'JAX', investorBlurb: 'Jacksonville offers some of the best cash flow fundamentals in Florida, with affordable acquisition costs, strong rental demand, and significant spread between distressed and renovated values.' },
  'memphis-tn': { city: 'Memphis', state: 'Tennessee', nickname: 'MEM', investorBlurb: 'Memphis is one of the top cash flow rental markets in the country, with low acquisition costs, strong Section 8 demand, and consistent investor activity across suburban submarkets.' },
  'cleveland-oh': { city: 'Cleveland', state: 'Ohio', nickname: 'CLE', investorBlurb: 'Cleveland is a top-ranked cash flow market with some of the lowest acquisition costs for rental properties in any major metro, strong Section 8 demand, and significant wholesale opportunity.' },
  'indianapolis-in': { city: 'Indianapolis', state: 'Indiana', nickname: 'IND', investorBlurb: 'Indianapolis consistently ranks among the best cash flow markets in the Midwest, with low property taxes, strong rental demand, and active wholesale networks across Marion County.' },
  'kansas-city-mo': { city: 'Kansas City', state: 'Missouri', nickname: 'MCI', investorBlurb: 'Kansas City offers strong cash flow fundamentals, affordable price points, and a growing investor community with active wholesale deal flow in established urban neighborhoods.' },
  'columbus-oh': { city: 'Columbus', state: 'Ohio', nickname: 'CMH', investorBlurb: 'Columbus is a stable, growing market with strong university-driven rental demand, improving neighborhoods, and accessible price points for both wholesale and rental strategies.' },
  'raleigh-nc': { city: 'Raleigh', state: 'North Carolina', nickname: 'RDU', investorBlurb: 'Raleigh-Durham is a high-growth tech corridor market with rising ARVs, strong rental demand from Research Triangle employers, and significant appreciation potential.' },
  'pittsburgh-pa': { city: 'Pittsburgh', state: 'Pennsylvania', nickname: 'PIT', investorBlurb: 'Pittsburgh offers low acquisition costs, strong rental yields, and consistent deal flow from aging housing stock that provides significant value-add opportunity for renovation-focused investors.' },
  'richmond-va': { city: 'Richmond', state: 'Virginia', nickname: 'RIC', investorBlurb: 'Richmond is a steady investor market with strong state government and university employment driving rental demand, improving neighborhoods, and accessible entry price points.' },
  'virginia-beach-va': { city: 'Virginia Beach', state: 'Virginia', nickname: 'ORF', investorBlurb: 'Hampton Roads offers military-driven rental demand, stable employment base, and diverse submarkets across Virginia Beach, Norfolk, and Chesapeake with consistent investor activity.' },
  'san-antonio-tx': { city: 'San Antonio', state: 'Texas', nickname: 'SAT', investorBlurb: 'San Antonio combines strong military and healthcare employment, affordable price points relative to Texas peers, and growing rental demand that supports both flip and hold strategies.' },
  'las-vegas-nv': { city: 'Las Vegas', state: 'Nevada', nickname: 'LAS', investorBlurb: 'Las Vegas offers no state income tax, high rental demand from hospitality workers, and a historically active investor market with significant wholesale deal flow.' },
};

// Slugs that have a corresponding /investors/[slug] page
const INVESTOR_PAGE_SLUGS = new Set([
  'anaheim-ca','atlanta-ga','baltimore-md','charlotte-nc','chicago-il','cincinnati-oh','cleveland-oh','columbus-oh','denver-co','detroit-mi','fort-lauderdale-fl','jacksonville-fl','las-vegas-nv','los-angeles-ca','miami-fl','milwaukee-wi','minneapolis-mn','montgomery-county-pa','nashville-tn','new-brunswick-nj','new-york-ny','newark-nj','oakland-ca','orlando-fl','philadelphia-pa','phoenix-az','portland-or','providence-ri','riverside-ca','sacramento-ca','san-diego-ca','san-francisco-ca','san-jose-ca','seattle-wa','tampa-fl','virginia-beach-va','warren-mi','washington-dc','west-palm-beach-fl'
]);

function getConfig(slug) {
  if (METRO_CONFIG[slug]) return METRO_CONFIG[slug];
  // Fallback for metros not in config
  const parts = slug.split('-');
  const state = parts[parts.length - 1].toUpperCase();
  const city = parts.slice(0, -1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return { city, state, nickname: state, investorBlurb: `${city} is an active real estate investment market. Analyze deals, track market conditions, and connect with local resources through FreeDealCalc.` };
}

function formatPrice(n) {
  if (!n) return 'N/A';
  return '$' + n.toLocaleString();
}

function formatPct(n, suffix = '%') {
  if (n === null || n === undefined) return 'N/A';
  const val = parseFloat(n);
  return (val > 0 ? '+' : '') + val.toFixed(1) + suffix;
}

function yoyColor(n) {
  if (n === null || n === undefined) return '#94a3b8';
  return parseFloat(n) >= 0 ? '#00C27C' : '#ef4444';
}

function tempLabel(temp) {
  const map = { hot: '🔥 Hot Market', warm: '📈 Warm Market', cool: '📊 Cool Market', cold: '❄️ Buyer Market' };
  return map[temp] || '📊 Stable Market';
}

function tempColor(temp) {
  const map = { hot: '#ef4444', warm: '#f59e0b', cool: '#3b82f6', cold: '#6366f1' };
  return map[temp] || '#64748b';
}

export default function MetroPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params['metro-slug'];
  const config = getConfig(slug);
  const hasInvestorPage = INVESTOR_PAGE_SLUGS.has(slug);

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from('metro_stats')
      .select('*')
      .eq('metro_slug', slug)
      .order('period_begin', { ascending: false })
      .limit(1)
      .single()
      .then(({ data, error }) => {
        if (!error && data) setStats(data);
        setLoading(false);
      });
  }, [slug]);

  const handleFreddie = () => {
    setClicked(true);
    sessionStorage.setItem('fdc_seed_message', `I want to analyze a real estate deal in ${config.city}. Can you help me run the numbers for this market?`);
    router.push('/freddie');
  };

  const periodLabel = stats
    ? new Date(stats.period_begin + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : '';

  return (
    <div style={{ minHeight: '100vh', background: '#F0F2F5', fontFamily: 'DM Sans, sans-serif' }}>

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
          FREE MARKET INTELLIGENCE
        </div>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontStyle: 'italic', color: '#00C27C', fontFamily: 'Instrument Serif, serif', lineHeight: '1.1', margin: '0 0 16px' }}>
          {config.city} Real Estate<br />Investment Market
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 12px', lineHeight: '1.6' }}>
          Live market data updated monthly. Analyze deals with AI built for {config.city} investors.
        </p>
        {stats && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '32px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00C27C' }} />
            <span style={{ fontSize: '13px', color: '#64748b' }}>Data current as of {periodLabel} · Source: Redfin</span>
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

      {/* LIVE MARKET DATA */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 0' }}>
        <h2 style={{ fontSize: '26px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '8px' }}>
          {config.city} Market Snapshot
        </h2>
        {stats && (
          <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
            {periodLabel} data · {tempLabel(stats.market_temp)}
          </p>
        )}

        {loading ? (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '48px', textAlign: 'center', color: '#64748b' }}>Loading market data…</div>
        ) : !stats ? (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '48px', textAlign: 'center', color: '#64748b' }}>Market data loading shortly.</div>
        ) : (
          <>
            {/* Market temp banner */}
            <div style={{ background: tempColor(stats.market_temp), borderRadius: '12px', padding: '16px 24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '16px', fontWeight: '700', color: '#fff' }}>{tempLabel(stats.market_temp)}</span>
              <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>
                {stats.market_temp === 'hot' && 'High competition — move fast on deals, buyers are aggressive.'}
                {stats.market_temp === 'warm' && 'Active market — good deal flow but competition is real.'}
                {stats.market_temp === 'cool' && 'Balanced conditions — more negotiating room for investors.'}
                {stats.market_temp === 'cold' && 'Buyer advantage — motivated sellers, room to negotiate.'}
              </span>
            </div>

            {/* Key metrics grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
              {[
                { label: 'Median Sale Price', value: formatPrice(stats.median_sale_price), yoy: stats.median_sale_price_yoy, yoyLabel: 'YoY' },
                { label: 'Days on Market', value: stats.median_days_on_market ? `${stats.median_days_on_market} days` : 'N/A', yoy: stats.median_dom_yoy, yoyLabel: 'YoY', invertColor: true },
                { label: 'Homes Sold', value: stats.homes_sold ? stats.homes_sold.toLocaleString() : 'N/A', yoy: stats.homes_sold_yoy, yoyLabel: 'YoY' },
                { label: 'Active Listings', value: stats.active_listings ? stats.active_listings.toLocaleString() : 'N/A', yoy: stats.active_listings_yoy, yoyLabel: 'YoY', invertColor: true },
                { label: 'Sale-to-List Ratio', value: stats.sale_to_list_ratio ? `${parseFloat(stats.sale_to_list_ratio).toFixed(1)}%` : 'N/A', yoy: stats.sale_to_list_yoy, yoyLabel: 'pts YoY' },
                { label: 'Sold Above List', value: stats.pct_sold_above_list ? `${parseFloat(stats.pct_sold_above_list).toFixed(1)}%` : 'N/A', yoy: stats.pct_sold_above_list_yoy, yoyLabel: 'pts YoY' },
                { label: 'New Listings', value: stats.new_listings ? stats.new_listings.toLocaleString() : 'N/A', yoy: stats.new_listings_yoy, yoyLabel: 'YoY' },
                { label: 'Pending Sales', value: stats.pending_sales ? stats.pending_sales.toLocaleString() : 'N/A', yoy: stats.pending_sales_yoy, yoyLabel: 'YoY' },
              ].map(({ label, value, yoy, yoyLabel, invertColor }) => (
                <div key={label} style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>{label}</div>
                  <div style={{ fontSize: '22px', fontWeight: '800', color: '#0f1c2d', marginBottom: '4px' }}>{value}</div>
                  {yoy !== null && yoy !== undefined && (
                    <div style={{ fontSize: '13px', fontWeight: '600', color: invertColor ? (parseFloat(yoy) <= 0 ? '#00C27C' : '#ef4444') : yoyColor(yoy) }}>
                      {formatPct(yoy)} {yoyLabel}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CROSS-LINK to investor activity page */}
            {hasInvestorPage && (
              <div style={{ background: '#fff', borderRadius: '12px', padding: '20px 24px', marginBottom: '24px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>How competitive is {config.city} for investors?</div>
                  <div style={{ fontSize: '13px', color: '#64748b' }}>See investor purchase volume, market share, and YoY trends.</div>
                </div>
                <a href={`/investors/${slug}`} style={{ background: '#00C27C', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: '700', padding: '10px 20px', borderRadius: '8px' }}>
                  See {config.city} Investor Activity →
                </a>
              </div>
            )}

            {/* Investor intelligence callout */}
            <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '32px', marginBottom: '24px', borderLeft: '5px solid #00C27C' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#00C27C', marginBottom: '12px', fontFamily: 'DM Sans, sans-serif' }}>
                What This Means for {config.city} Investors
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>DEAL VELOCITY</div>
                  <div style={{ fontSize: '15px', color: '#fff', lineHeight: '1.5' }}>
                    At {stats.median_days_on_market} days on market, {stats.median_days_on_market < 30 ? 'properties are moving fast — have your financing ready before you make offers.' : stats.median_days_on_market < 60 ? 'there is moderate time to conduct due diligence without losing deals.' : 'you have more time for thorough due diligence and negotiation.'}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>COMPETITION LEVEL</div>
                  <div style={{ fontSize: '15px', color: '#fff', lineHeight: '1.5' }}>
                    {parseFloat(stats.pct_sold_above_list || 0).toFixed(1)}% of homes selling above list price indicates {parseFloat(stats.pct_sold_above_list || 0) > 30 ? 'strong buyer competition — retail buyers are aggressive, which supports your ARV.' : parseFloat(stats.pct_sold_above_list || 0) > 15 ? 'moderate competition — good exit environment for renovated flips.' : 'a softer market — price your ARV conservatively and plan for longer hold times.'}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>INVENTORY TREND</div>
                  <div style={{ fontSize: '15px', color: '#fff', lineHeight: '1.5' }}>
                    Active listings {parseFloat(stats.active_listings_yoy || 0) > 0 ? `up ${parseFloat(stats.active_listings_yoy).toFixed(1)}% year-over-year — more seller options and potentially more motivated sellers entering the market.` : `down ${Math.abs(parseFloat(stats.active_listings_yoy || 0)).toFixed(1)}% year-over-year — tighter inventory may support ARV but reduces deal flow.`}
                  </div>
                </div>
              </div>
            </div>

            {/* Behavioral data - your Supabase deals */}
            {stats.deals_analyzed > 10 && (
              <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '16px' }}>FreeDealCalc Activity in {config.city}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', fontWeight: '900', color: '#00C27C' }}>{stats.deals_analyzed}</div>
                    <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Deals Analyzed</div>
                  </div>
                  {stats.avg_deal_score && (
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '28px', fontWeight: '900', color: '#00C27C' }}>{Math.round(stats.avg_deal_score)}</div>
                      <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Avg Deal Score</div>
                    </div>
                  )}
                  {stats.top_strategy && (
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '22px', fontWeight: '900', color: '#00C27C', textTransform: 'capitalize' }}>{stats.top_strategy}</div>
                      <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Top Strategy</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* INVESTOR NARRATIVE */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 0' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '24px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '16px' }}>
            Investing in {config.city}
          </h2>
          <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: '1.8', marginBottom: '24px' }}>
            {config.investorBlurb}
          </p>
          <p style={{ fontSize: '16px', color: '#4a5568', lineHeight: '1.8' }}>
            Use the live market data above to calibrate your deal analysis. A median sale price of {stats ? formatPrice(stats.median_sale_price) : 'N/A'} and {stats ? stats.median_days_on_market : '—'} days on market tells you what the exit environment looks like right now — factor both into your ARV assumptions and hold time projections before making an offer.
          </p>
        </div>
      </div>

      {/* SEO CONTENT SECTION */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 0' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '22px', fontStyle: 'italic', color: '#0f1c2d', fontFamily: 'Instrument Serif, serif', marginBottom: '20px' }}>
            Fix and Flip, Wholesale, and Rental Investing in {config.city}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '10px' }}>Fix and Flip in {config.city}</h3>
              <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.8' }}>
                Fix and flip investing in {config.city} requires a precise understanding of ARV by neighborhood, accurate rehab budgets, and realistic hold time assumptions. With a current median sale price of {stats ? formatPrice(stats.median_sale_price) : 'N/A'} and {stats ? stats.median_days_on_market : '—'} average days on market, flippers need to build adequate hold cost into every deal. Use our free fix and flip calculator to model profit and ROI before you make an offer on any {config.city} property.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '10px' }}>Wholesale Real Estate in {config.city}</h3>
              <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.8' }}>
                Wholesale real estate in {config.city} depends on finding motivated sellers, calculating an accurate maximum allowable offer, and having a strong cash buyer list to assign deals quickly. The {config.city} market currently shows {stats ? stats.active_listings?.toLocaleString() : '—'} active listings — inventory levels that directly affect your ability to find distressed properties at wholesale prices. Freddie calculates your MAO and assignment fee on any {config.city} wholesale deal instantly.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '10px' }}>Rental Property Investing in {config.city}</h3>
              <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.8' }}>
                Rental property investors in {config.city} evaluate deals based on cash flow, cap rate, and cash-on-cash return. With median sale prices at {stats ? formatPrice(stats.median_sale_price) : 'N/A'}, the rent-to-price ratio in {config.city} determines whether buy-and-hold or BRRRR makes sense as your primary strategy. Analyze any {config.city} rental property free with Freddie — cash flow, ROI, and deal score in minutes.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '10px' }}>How to Analyze a Real Estate Deal in {config.city}</h3>
            <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.8', marginBottom: '16px' }}>
              Analyzing investment property in {config.city} starts with establishing a reliable ARV from comparable sales, estimating rehab costs accurately, and modeling exit strategy returns based on current market conditions. The {config.city} market data above — updated monthly from Redfin — gives you the context you need to calibrate your assumptions before running deal numbers.
            </p>
            <p style={{ fontSize: '15px', color: '#4a5568', lineHeight: '1.8' }}>
              FreeDealCalc is a free AI-powered deal analyzer built specifically for real estate investors. Whether you are evaluating a fix and flip, wholesale opportunity, rental property, or BRRRR deal in {config.city}, Freddie runs the full analysis in a real conversation — no spreadsheet, no subscription required. Get your deal score and Score Certificate free.
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
          Free forever. Live market data. AI that knows real estate.
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
        <p style={{ fontSize: '11px', color: '#475569', marginTop: '12px', maxWidth: '700px', margin: '12px auto 0' }}>
          Market data sourced from Redfin Data Center. FreeDealCalc is for informational purposes only and does not constitute financial, legal, or investment advice. Always consult qualified professionals before making real estate investment decisions.
        </p>
      </footer>

    </div>
  );
}
