import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';

export const revalidate = 2592000;

export const metadata = {
  title: 'What is the BRRRR Method? Complete Guide for 2026',
  description: 'The BRRRR method explained — Buy, Rehab, Rent, Refinance, Repeat. How it works, the math, and when it makes sense in 2026.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-brrrr-method' },
  openGraph: {
    title: 'What is the BRRRR Method? Complete Guide for 2026',
    description: 'Buy, Rehab, Rent, Refinance, Repeat — the full BRRRR strategy explained with real numbers.',
    url: 'https://www.freedealcalc.com/blog/what-is-brrrr-method',
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

export default async function WhatIsBRRRR() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.75rem', color: '#059669', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: 32 }}>← Back to Blog</a>
      <div style={s.meta}>
        <span style={s.metaText}>May 2026</span>
        <span style={s.dot} />
        <span style={s.metaText}>12 min read</span>
        <span style={s.dot} />
        <span style={s.metaText}>Dan White</span>
      </div>
      <h1 style={s.h1}>What is the BRRRR Method? Complete Guide for 2026</h1>
      <div style={s.intro}>
        BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. It's the strategy that lets real estate investors recycle capital — instead of leaving equity locked in a rental, you pull it back out and deploy it on the next deal.
      </div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>

      <p style={s.p}>The BRRRR method is one of the most powerful wealth-building strategies in real estate investing — but it only works if the numbers are right at every step. I've used this strategy multiple times in Northern Virginia and I'll walk you through exactly how it works, when it makes sense, and where it breaks down.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>The Current Northern Virginia Market</h2>
      <p style={s.p}>BRRRR only works when the rental market supports your cash flow requirements and the refinance appraisal supports pulling equity back out. Here's the current state of the NoVA market:</p>
      <MarketPulse market={market} />

      <div style={s.divider} />
      <h2 style={s.h2}>How the BRRRR Method Works — Step by Step</h2>

      <h3 style={s.h3}>B — Buy</h3>
      <p style={s.p}>You buy a distressed property below market value. The discount is what makes the whole strategy work — you need to buy far enough below ARV that after renovation, a refinance will return most or all of your cash. Typical target: 65–70% of ARV minus rehab costs.</p>

      <h3 style={s.h3}>R — Rehab</h3>
      <p style={s.p}>Renovate to rental-ready condition. Not flip-quality — rental-quality. Durable materials, functional finishes, nothing that will need to be replaced in two years. The goal is a property that will appraise at ARV and attract quality tenants.</p>

      <h3 style={s.h3}>R — Rent</h3>
      <p style={s.p}>Lease the property. Most lenders require 6 months of seasoning — meaning the property needs to be rented and generating income before they'll do a cash-out refinance. Use this time to stabilize the rental and document your income.</p>

      <h3 style={s.h3}>R — Refinance</h3>
      <p style={s.p}>After seasoning, refinance with a DSCR loan or conventional investment loan at 75–80% LTV of the appraised value. If you bought and rehabbed correctly, this refinance returns most or all of your original cash investment.</p>

      <h3 style={s.h3}>R — Repeat</h3>
      <p style={s.p}>Use the returned capital to buy the next property and do it again. This is how investors scale a rental portfolio without needing fresh capital for every deal.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>The BRRRR Math — A Real Example</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Purchase price:</strong> $180,000</li>
        <li style={s.li}><strong>Rehab cost:</strong> $45,000</li>
        <li style={s.li}><strong>Total invested:</strong> $225,000</li>
        <li style={s.li}><strong>ARV (appraised after rehab):</strong> $320,000</li>
        <li style={s.li}><strong>Refinance at 75% LTV:</strong> $240,000</li>
        <li style={s.li}><strong>Cash returned:</strong> $240,000 − $225,000 = <strong>$15,000 returned</strong></li>
        <li style={s.li}><strong>Monthly rent:</strong> $2,400</li>
        <li style={s.li}><strong>DSCR mortgage (30yr, 7%):</strong> ~$1,598/month</li>
        <li style={s.li}><strong>Monthly cash flow (before expenses):</strong> ~$800</li>
      </ul>
      <p style={s.p}>In this example you ended the deal with $15,000 back in your pocket, a cash-flowing rental, and $80,000 in equity. That's the power of BRRRR done right.</p>

      <div style={s.cta}>
        <div style={s.ctaTitle}>Run Your BRRRR Numbers Free</div>
        <div style={s.ctaText}>FreeDealCalc's AI analyst Freddie runs the full BRRRR analysis — purchase price, rehab, rental income, refinance proceeds, and cash-on-cash return — in one conversation. Free, no account required.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze Your BRRRR Deal →</a>
      </div>

      <div style={s.divider} />
      <h2 style={s.h2}>When BRRRR Doesn't Work</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>You overpay for the property.</strong> If purchase + rehab exceeds 75% of ARV, the refinance won't return enough capital to repeat.</li>
        <li style={s.li}><strong>Rehab runs over budget.</strong> Every dollar of cost overrun is a dollar that doesn't come back in the refinance.</li>
        <li style={s.li}><strong>The appraisal comes in low.</strong> If the property doesn't appraise at your target ARV, the refinance numbers fall apart.</li>
        <li style={s.li}><strong>Interest rates are too high.</strong> At 8%+ DSCR rates, cash flow on many properties turns negative after refinancing.</li>
        <li style={s.li}><strong>The rental market is soft.</strong> If you can't get market rent, your DSCR ratios may not qualify for refinancing.</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>BRRRR vs. Fix and Flip</h2>
      <p style={s.p}>Both strategies start the same way — buy distressed, renovate, force appreciation. The difference is the exit. A flip exits with a lump-sum profit. BRRRR exits with a refinance, keeps the asset, and builds long-term wealth through rental income and appreciation. If your goal is monthly income and a growing portfolio, BRRRR wins. If your goal is maximum short-term capital, flipping wins.</p>
      <p style={s.p}>Many experienced investors do both — flip to generate operating capital, BRRRR to build long-term wealth.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Key Takeaways</h2>
      <ul style={s.ul}>
        <li style={s.li}>BRRRR only works if you buy right. The discount at purchase is where all the math starts.</li>
        <li style={s.li}>Plan your refinance before you buy — know what DSCR rates look like and what LTV you'll get.</li>
        <li style={s.li}>Budget conservatively on rehab. Cost overruns are the most common BRRRR killer.</li>
        <li style={s.li}>The 6-month seasoning requirement is real — plan your timeline accordingly.</li>
        <li style={s.li}>Run the full analysis — purchase, rehab, rent, refinance, and cash flow — before making any offer.</li>
      </ul>

      <p style={s.byline}>
        <strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{ color: '#059669' }}>FreeDealCalc.com</a>. He has been fixing, flipping, and building rental portfolios in Northern Virginia for 20+ years.
      </p>
    </div>
  );
}
