import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';

export const revalidate = 2592000;

export const metadata = {
  title: 'What is House Hacking? How to Live for Free with Real Estate | FreeDealCalc',
  description: 'House hacking explained — buying a small multifamily or single family with extra units, living in one, and having tenants pay your mortgage.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-house-hacking' },
  openGraph: {
    title: 'What is House Hacking? How to Live for Free with Real Estate',
    description: 'House hacking is the fastest path to free housing — buy a duplex, live in one unit, rent the other, and eliminate your housing cost.',
    url: 'https://www.freedealcalc.com/blog/what-is-house-hacking',
  },
};

const s = {
  page: { maxWidth: 760, margin: '0 auto', padding: '80px 24px' },
  meta: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 },
  metaText: { fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.72rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.08em' },
  dot: { width: 3, height: 3, background: '#d4d4d8', borderRadius: '50%', display: 'inline-block' },
  h1: { fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: '#18181b', letterSpacing: '-0.02em', lineHeight: 1.15, marginBottom: 20 },
  intro: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '1.05rem', color: '#3f3f46', lineHeight: 1.8, marginBottom: 48, padding: '20px 24px', background: '#f4f4f5', borderRadius: 8, borderLeft: '3px solid #059669' },
  h2: { fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, color: '#18181b', letterSpacing: '-0.01em', lineHeight: 1.2, marginTop: 48, marginBottom: 16 },
  h3: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '1rem', fontWeight: 700, color: '#18181b', marginTop: 32, marginBottom: 12 },
  p: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.975rem', color: '#3f3f46', lineHeight: 1.85, marginBottom: 20 },
  ul: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.975rem', color: '#3f3f46', lineHeight: 1.85, marginBottom: 20, paddingLeft: 24 },
  li: { marginBottom: 8 },
  cta: { background: 'linear-gradient(135deg, #059669, #047857)', borderRadius: 12, padding: '36px 40px', margin: '48px 0', color: '#ffffff' },
  ctaTitle: { fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 10, lineHeight: 1.2 },
  ctaText: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 20 },
  ctaBtn: { display: 'inline-block', background: '#ffffff', color: '#059669', padding: '12px 24px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' },
  divider: { height: 1, background: '#e4e4e7', margin: '40px 0' },
  byline: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.85rem', color: '#71717a', lineHeight: 1.7, marginTop: 48, padding: '24px 0', borderTop: '1px solid #e4e4e7' },
};

export default async function WhatIsHouseHacking() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.75rem', color: '#059669', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: 32 }}>← Back to Blog</a>
      <div style={s.meta}>
        <span style={s.metaText}>May 2026</span>
        <span style={s.dot} />
        <span style={s.metaText}>9 min read</span>
        <span style={s.dot} />
        <span style={s.metaText}>Dan White</span>
      </div>
      <h1 style={s.h1}>What is House Hacking? How to Live for Free with Real Estate</h1>
      <div style={s.intro}>
        House hacking is buying a property with multiple units — or extra rentable space — living in one unit, and collecting rent from the others to offset or eliminate your housing cost. It's one of the most accessible entry points into real estate investing.
      </div>

      <p style={s.p}>The classic house hack: buy a duplex with an FHA loan at 3.5% down, live in one unit, rent the other. In many markets, the rental income covers most or all of the mortgage. You build equity, learn landlording, and slash your cost of living simultaneously.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Northern Virginia Market Context</h2>
      <MarketPulse market={market} />

      <div style={s.divider} />
      <h2 style={s.h2}>House Hacking Options</h2>
      <h3 style={s.h3}>Classic Multifamily Hack (Duplex, Triplex, Fourplex)</h3>
      <p style={s.p}>Buy a 2–4 unit property, live in one unit, rent the rest. FHA loans allow owner-occupant financing on 2–4 unit properties at 3.5% down. This is the most powerful version — rental income from 1–3 units can fully cover your PITI (principal, interest, taxes, insurance).</p>

      <h3 style={s.h3}>Single Family with ADU</h3>
      <p style={s.p}>Buy a single family with a basement apartment, in-law suite, or detached ADU. Rent the extra space. Less cash flow than multifamily but easier to find, easier to finance, and easier to exit (larger buyer pool when you sell).</p>

      <h3 style={s.h3}>Single Family Room Rental</h3>
      <p style={s.p}>Buy a larger single family and rent individual bedrooms. Higher management intensity but highest gross income per square foot. Works especially well near universities or in high-cost urban markets where renters can't afford full apartments.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>The House Hacking Math</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Purchase price (duplex):</strong> $480,000</li>
        <li style={s.li}><strong>FHA loan at 3.5% down:</strong> $16,800 down</li>
        <li style={s.li}><strong>Monthly PITI:</strong> ~$3,200</li>
        <li style={s.li}><strong>Rental unit income:</strong> $1,800/month</li>
        <li style={s.li}><strong>Your effective housing cost:</strong> $1,400/month vs. $2,800+ for comparable rent</li>
      </ul>
      <p style={s.p}>You're building equity, getting a tax-advantaged asset, and paying $1,400/month for housing instead of $2,800. After 1–2 years, move out and convert to a full rental — now you have a cash-flowing duplex with a low-rate owner-occupant loan.</p>

      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your House Hack Free</div>
        <div style={s.ctaText}>FreeDealCalc runs rental property analysis — cash flow, cap rate, cash-on-cash return, and DSCR — free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My House Hack →</a>
      </div>

      <div style={s.divider} />
      <h2 style={s.h2}>FHA Loan Rules for House Hacking</h2>
      <ul style={s.ul}>
        <li style={s.li}>Must be your primary residence — you must move in within 60 days of closing</li>
        <li style={s.li}>FHA allows 2–4 unit properties at 3.5% down (3.5% requires 580+ credit score; 10% down for 500–579)</li>
        <li style={s.li}>Rental income from other units can be used to qualify — lenders typically count 75% of market rent</li>
        <li style={s.li}>One-year owner-occupancy requirement before converting to investment property</li>
        <li style={s.li}>MIP (mortgage insurance premium) applies — factor into your cash flow analysis</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>House Hacking Risks</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Vacancy:</strong> If your rental unit sits empty, you cover the full mortgage</li>
        <li style={s.li}><strong>Tenant issues:</strong> You're living next to your tenant — vetting is critical</li>
        <li style={s.li}><strong>Maintenance:</strong> As landlord and owner, repairs are your responsibility</li>
        <li style={s.li}><strong>Lifestyle:</strong> Less privacy than a single family home</li>
      </ul>

      <p style={s.byline}>
        <strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{ color: '#059669' }}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.
      </p>
    </div>
  );
}
