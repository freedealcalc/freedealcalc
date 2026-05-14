import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';

export const revalidate = 2592000;

export const metadata = {
  title: 'Cash for Keys: What It Is and How to Use It | FreeDealCalc',
  description: 'Cash for keys explained — paying a tenant or occupant to vacate voluntarily. When to use it, how much to offer, and how to structure the agreement.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/cash-for-keys-explained' },
  openGraph: {
    title: 'Cash for Keys: What It Is and How to Use It',
    description: 'Cash for keys is often faster and cheaper than eviction. Here\'s how to structure the offer and protect yourself.',
    url: 'https://www.freedealcalc.com/blog/cash-for-keys-explained',
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

export default async function CashForKeys() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.75rem', color: '#059669', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: 32 }}>← Back to Blog</a>
      <div style={s.meta}>
        <span style={s.metaText}>May 2026</span>
        <span style={s.dot} />
        <span style={s.metaText}>8 min read</span>
        <span style={s.dot} />
        <span style={s.metaText}>Dan White</span>
      </div>
      <h1 style={s.h1}>Cash for Keys: What It Is and How to Use It</h1>
      <div style={s.intro}>
        Cash for keys is an agreement where you pay an occupant — a tenant, a former owner, or an unauthorized occupant — a cash payment in exchange for voluntarily vacating the property by a set date and leaving it in broom-clean condition. In most markets, it's faster and cheaper than eviction.
      </div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>

      <p style={s.p}>I've used cash for keys dozens of times on distressed acquisitions. Inherited properties with occupants, foreclosures with holdover tenants, and hoarded properties where the owner needed help relocating. Every situation is different but the framework is the same.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Northern Virginia Market</h2>
      <MarketPulse market={market} />

      <div style={s.divider} />
      <h2 style={s.h2}>When Cash for Keys Makes Sense</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Foreclosure acquisitions</strong> with holdover former owners or tenants</li>
        <li style={s.li}><strong>Inherited properties</strong> where family members or tenants are still occupying</li>
        <li style={s.li}><strong>Distressed seller situations</strong> where the seller needs help moving</li>
        <li style={s.li}><strong>Problem tenants</strong> where eviction would take 60–120 days and cost $3,000–$8,000 in legal fees</li>
        <li style={s.li}><strong>Any situation</strong> where vacancy is needed faster than the legal process allows</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>How Much to Offer</h2>
      <p style={s.p}>The offer needs to be meaningful enough to motivate action but not more than the eviction alternative would cost. Calculate your eviction costs: attorney fees, court costs, time delays (1–3 months of carrying costs), and potential property damage from a hostile occupant. That's your ceiling.</p>
      <p style={s.p}>Starting offers: $500–$1,500 for easy situations. $2,000–$5,000 for tenants with long tenure or families with children. $5,000–$10,000+ for complex situations with legal entanglements or significant moving burdens.</p>
      <p style={s.p}>Always start low and negotiate up. Most occupants will accept a reasonable offer when they understand the alternative is a court process they'll lose anyway.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>The Cash for Keys Agreement</h2>
      <p style={s.p}>Get it in writing. The agreement should include:</p>
      <ul style={s.ul}>
        <li style={s.li}>Vacate date — specific calendar date, not "within X days"</li>
        <li style={s.li}>Condition requirements — broom-clean, no damage beyond normal wear</li>
        <li style={s.li}>Key handover — all keys, garage openers, and access devices</li>
        <li style={s.li}>Payment terms — typically half on signing, half on successful vacate and inspection</li>
        <li style={s.li}>Release of claims — occupant waives any claims against the property or owner</li>
        <li style={s.li}>Consequence clause — if they don't vacate, the agreement is void and eviction proceeds</li>
      </ul>

      <div style={s.cta}>
        <div style={s.ctaTitle}>Factor Vacancy Costs Into Your Deal Analysis</div>
        <div style={s.ctaText}>FreeDealCalc accounts for cash for keys costs, holding costs during vacancy, and all rehab expenses in your deal score. Free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Deal Free →</a>
      </div>

      <div style={s.divider} />
      <h2 style={s.h2}>Cash for Keys vs. Eviction</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Speed:</strong> Cash for keys can clear a property in 1–2 weeks. Eviction takes 1–6 months depending on state.</li>
        <li style={s.li}><strong>Cost:</strong> Cash for keys costs $500–$5,000 typically. Eviction costs $2,000–$10,000 in legal fees plus carrying costs.</li>
        <li style={s.li}><strong>Property condition:</strong> Voluntary departures leave cleaner properties. Hostile evictions often result in damage.</li>
        <li style={s.li}><strong>Certainty:</strong> A signed agreement gives you a date. Eviction timelines slip.</li>
      </ul>
      <p style={s.p}>In most situations, cash for keys is the better business decision. The math almost always favors paying a motivated departure over a contested legal process.</p>

      <p style={s.byline}>
        <strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{ color: '#059669' }}>FreeDealCalc.com</a>. He has been investing in Northern Virginia for 20+ years.
      </p>
    </div>
  );
}
