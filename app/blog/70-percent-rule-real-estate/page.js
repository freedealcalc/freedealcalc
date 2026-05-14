import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';

export const revalidate = 2592000;

export const metadata = {
  title: 'The 70% Rule in Real Estate: What It Is and When to Use It | FreeDealCalc',
  description: 'The 70% rule explained — the formula, what it covers, when to use it, and when to ignore it. From a 20+ year house flipper.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/70-percent-rule-real-estate' },
  openGraph: {
    title: 'The 70% Rule in Real Estate: What It Is and When to Use It',
    description: 'The 70% rule formula explained with real examples — and why it\'s a starting point, not a final answer.',
    url: 'https://www.freedealcalc.com/blog/70-percent-rule-real-estate',
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

export default async function SeventyPercentRule() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.75rem', color: '#059669', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: 32 }}>← Back to Blog</a>
      <div style={s.meta}>
        <span style={s.metaText}>May 2026</span>
        <span style={s.dot} />
        <span style={s.metaText}>10 min read</span>
        <span style={s.dot} />
        <span style={s.metaText}>Dan White</span>
      </div>
      <h1 style={s.h1}>The 70% Rule in Real Estate: What It Is and When to Use It</h1>
      <div style={s.intro}>
        The 70% rule is the most-quoted formula in house flipping. It's also the most-misapplied. Here's what it actually means, how to use it correctly, and when the full deal analysis matters more.
      </div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>

      <p style={s.p}>If you've spent five minutes in any real estate investing forum, you've seen the 70% rule mentioned. New investors treat it like gospel. Experienced investors use it as a quick screen. Here's the difference — and why it matters for your offers.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>The Northern Virginia Market Context</h2>
      <p style={s.p}>The 70% rule was developed when financing was cheaper and markets were slower. Understanding current market conditions helps you know whether to tighten or loosen the threshold.</p>
      <MarketPulse market={market} />

      <div style={s.divider} />
      <h2 style={s.h2}>The 70% Rule Formula</h2>
      <div style={s.formula}>
        <div style={s.formulaText}>Max Offer = (ARV × 0.70) − Rehab Costs</div>
      </div>
      <p style={s.p}>That's it. Multiply the after-repair value by 70%, then subtract your estimated renovation cost. The result is the maximum price you should pay for the property as a flip.</p>
      <h3 style={s.h3}>Example</h3>
      <ul style={s.ul}>
        <li style={s.li}>ARV: $350,000</li>
        <li style={s.li}>Rehab: $60,000</li>
        <li style={s.li}>Max offer: ($350,000 × 0.70) − $60,000 = <strong>$185,000</strong></li>
      </ul>
      <p style={s.p}>If you pay $185,000 or less, you're inside the rule. If the seller wants $220,000, the deal fails the screen.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>What the 30% Margin Is Supposed to Cover</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Buying closing costs:</strong> title, transfer taxes, lender fees — typically 1–3% of purchase price</li>
        <li style={s.li}><strong>Holding costs:</strong> hard money interest, insurance, utilities, property taxes during renovation — typically 6–12 months</li>
        <li style={s.li}><strong>Selling costs:</strong> agent commissions (5–6%), staging, closing costs — typically 8–10% of ARV</li>
        <li style={s.li}><strong>Profit:</strong> whatever's left after all of the above</li>
      </ul>
      <p style={s.p}>At 12% hard money and a 9-month hold, your financing cost alone can eat 9% of ARV. Add 8% in selling costs and you're already at 17% before you make a dollar. The 30% margin is tighter than it looks.</p>

      <div style={s.cta}>
        <div style={s.ctaTitle}>Run the Full Deal Score — Not Just the 70% Rule</div>
        <div style={s.ctaText}>FreeDealCalc runs the 70% rule check and the complete deal analysis — actual closing costs, financing, holding period, and projected profit — in one free conversation with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Run My Deal Analysis Free →</a>
      </div>

      <div style={s.divider} />
      <h2 style={s.h2}>When to Tighten to 65%</h2>
      <ul style={s.ul}>
        <li style={s.li}>High hard money rates (12%+) or long expected hold times (9+ months)</li>
        <li style={s.li}>Soft or declining market where ARV may slip before you sell</li>
        <li style={s.li}>High selling costs (6% agent commissions in competitive markets)</li>
        <li style={s.li}>Uncertain rehab scope — if you're not sure what's behind the walls, pad the margin</li>
      </ul>

      <h2 style={s.h2}>When 75% Can Work</h2>
      <ul style={s.ul}>
        <li style={s.li}>Private money at low rates (6–8%) significantly reduces holding costs</li>
        <li style={s.li}>Short renovation timeline (under 90 days) reduces total holding cost</li>
        <li style={s.li}>Strong appreciation market where ARV may increase during the hold</li>
        <li style={s.li}>Experienced operator with tight rehab estimates and proven contractor relationships</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>The Biggest Mistake New Investors Make</h2>
      <p style={s.p}>Applying the 70% rule to the wrong number. The rule applies to ARV — the post-renovation value — not the current value or list price. I've seen investors take a seller's stated ARV at face value and run the formula on it. If that ARV is inflated, every number downstream is wrong.</p>
      <p style={s.p}>Pull your own comps before you run the formula. Three comparable sales within one mile, similar size and condition, sold within 90 days. That's your ARV — not what the wholesaler tells you.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>The 70% Rule Is a Screen, Not a Decision</h2>
      <p style={s.p}>A deal that passes the 70% rule isn't automatically a good deal. A deal that fails it isn't automatically a bad one. I've walked away from deals that passed the 70% rule because the full analysis showed thin margins. I've done deals that failed the rule because the wholetail strategy made the math work differently.</p>
      <p style={s.p}>Use the rule to filter fast. Then run the full analysis before you make an offer.</p>

      <p style={s.byline}>
        <strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{ color: '#059669' }}>FreeDealCalc.com</a>. He has been fixing and flipping houses in Northern Virginia for 20+ years.
      </p>
    </div>
  );
}
