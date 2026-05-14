import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';

export const revalidate = 2592000;

export const metadata = {
  title: 'The 50% Rule in Real Estate: What It Is and How to Use It | FreeDealCalc',
  description: 'The 50% rule for rental properties explained — what it covers, when it works, and when to run a real cash flow analysis instead.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-50-percent-rule' },
  openGraph: {
    title: 'The 50% Rule in Real Estate: What It Is and How to Use It',
    description: 'The 50% rule estimates that 50% of gross rent covers operating expenses. Here\'s when that\'s accurate — and when it\'s not.',
    url: 'https://www.freedealcalc.com/blog/what-is-50-percent-rule',
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
  formula: { background: '#0f172a', borderRadius: 10, padding: '24px 28px', margin: '24px 0', textAlign: 'center' },
  formulaText: { fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: '#34d399', fontWeight: 700 },
};

export default async function FiftyPercentRule() {
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
      <h1 style={s.h1}>The 50% Rule in Real Estate: What It Is and How to Use It</h1>
      <div style={s.intro}>
        The 50% rule says that roughly 50% of a rental property's gross income will be consumed by operating expenses — not including the mortgage. It's a quick screening tool for rental property analysis, not a substitute for real numbers.
      </div>

      <div style={s.divider} />
      <h2 style={s.h2}>Northern Virginia Rental Market</h2>
      <MarketPulse market={market} />

      <div style={s.divider} />
      <h2 style={s.h2}>The 50% Rule Formula</h2>
      <div style={s.formula}>
        <div style={s.formulaText}>NOI ≈ Gross Rent × 0.50</div>
      </div>
      <p style={s.p}>Net Operating Income (NOI) is what's left after operating expenses but before debt service. The 50% rule estimates that half your rent goes to expenses, and the other half is available to cover your mortgage and produce cash flow.</p>
      <h3 style={s.h3}>Example</h3>
      <ul style={s.ul}>
        <li style={s.li}>Monthly rent: $2,200</li>
        <li style={s.li}>Estimated NOI (50% rule): $1,100/month</li>
        <li style={s.li}>Monthly mortgage (PITI): $1,400</li>
        <li style={s.li}>Estimated cash flow: −$300/month (deal doesn't cash flow)</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>What the 50% Covers</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Property taxes</strong> — varies widely by market and property value</li>
        <li style={s.li}><strong>Insurance</strong> — landlord policy, typically $800–$2,000/year</li>
        <li style={s.li}><strong>Property management</strong> — 8–12% of gross rent if you use a PM company</li>
        <li style={s.li}><strong>Vacancy</strong> — typically estimated at 5–10% of gross rent</li>
        <li style={s.li}><strong>Repairs and maintenance</strong> — typically 5–15% of rent depending on property age</li>
        <li style={s.li}><strong>CapEx reserves</strong> — saving for major replacements (roof, HVAC, water heater)</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>When the 50% Rule Is Accurate</h2>
      <p style={s.p}>The rule tends to be accurate for older single-family homes and small multifamily properties in average markets where taxes are moderate and property management is used. It's a reasonable starting estimate for properties with deferred maintenance that will need ongoing repairs.</p>

      <h2 style={s.h2}>When the 50% Rule Overstates Expenses</h2>
      <ul style={s.ul}>
        <li style={s.li}>New construction or recently renovated properties with low maintenance needs</li>
        <li style={s.li}>Self-managed properties in low-tax states (no PM fee)</li>
        <li style={s.li}>Properties in low-property-tax markets where taxes are 0.5% or less of value</li>
      </ul>

      <h2 style={s.h2}>When the 50% Rule Understates Expenses</h2>
      <ul style={s.ul}>
        <li style={s.li}>High-tax markets like New Jersey, Illinois, or parts of California</li>
        <li style={s.li}>Older properties with aging systems and high CapEx exposure</li>
        <li style={s.li}>High-turnover rentals with frequent vacancy and leasing costs</li>
      </ul>

      <div style={s.cta}>
        <div style={s.ctaTitle}>Run a Real Rental Analysis — Not Just an Estimate</div>
        <div style={s.ctaText}>FreeDealCalc runs actual cash flow analysis with your real numbers — taxes, insurance, vacancy, CapEx, and financing — free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Rental Free →</a>
      </div>

      <div style={s.divider} />
      <h2 style={s.h2}>50% Rule vs. Full Cash Flow Analysis</h2>
      <p style={s.p}>Use the 50% rule to screen deals in 30 seconds. If a deal barely works under the rule, it won't work with real numbers — move on. If it looks good under the rule, run a full analysis before making an offer. The full analysis uses your actual tax bill, insurance quote, PM rate, and realistic vacancy and maintenance estimates for that specific property.</p>

      <p style={s.byline}>
        <strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{ color: '#059669' }}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.
      </p>
    </div>
  );
}