import { getNOVAMarketData } from '../marketData';
import MarketPulse from '../MarketPulse';

export const revalidate = 2592000;

export const metadata = {
  title: 'House Flip Taxes in 2026: What Every Flipper Needs to Know',
  description: 'How house flip income is taxed in 2026 — dealer vs investor status, cost basis, self-employment tax, deductions, and when taxes are due.',
  alternates: { canonical: 'https://freedealcalc.com/blog/house-flip-taxes-2026' },
  openGraph: {
    title: 'House Flip Taxes in 2026: What Every Flipper Needs to Know',
    description: 'Complete guide to house flipping taxes — dealer status, cost basis, SE tax, and what you can deduct.',
    url: 'https://freedealcalc.com/blog/house-flip-taxes-2026',
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
  callout: { background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 8, padding: '16px 20px', margin: '24px 0', fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#92400e', lineHeight: 1.7 },
  codeBlock: { background: '#f4f4f5', border: '1px solid #e4e4e7', borderRadius: 8, padding: '20px 24px', margin: '20px 0', fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.875rem', color: '#18181b', lineHeight: 1.8 },
  cta: { background: 'linear-gradient(135deg, #059669, #047857)', borderRadius: 12, padding: '36px 40px', margin: '48px 0', color: '#ffffff' },
  ctaTitle: { fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 10, lineHeight: 1.2 },
  ctaText: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 20 },
  ctaBtn: { display: 'inline-block', background: '#ffffff', color: '#059669', padding: '12px 24px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' },
  divider: { height: 1, background: '#e4e4e7', margin: '40px 0' },
  byline: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.85rem', color: '#71717a', lineHeight: 1.7, marginTop: 48, padding: '24px 0', borderTop: '1px solid #e4e4e7' },
};

export default async function HouseFlipTaxes2026() {
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

      <h1 style={s.h1}>House Flip Taxes in 2026: What Every Flipper Needs to Know</h1>

      <div style={s.intro}>
        Disclaimer: I'm a licensed Virginia real estate agent and active house flipper — not a CPA or attorney. This article reflects what I've learned doing this for 20+ years. Run everything by your own tax professional.
      </div>

      <p style={s.p}>The most important thing most new flippers never hear upfront: <strong>house flipping is not real estate investing. It's a business. The IRS treats it completely differently.</strong></p>

      <div style={s.divider} />
      <h2 style={s.h2}>Why the Current Market Affects Your Tax Planning</h2>
      <p style={s.p}>Tax planning for flips starts with understanding your profit potential — which means understanding the market you're selling into. The data below updates automatically each month.</p>

      <MarketPulse market={market} />

      <p style={s.p}>Higher median prices mean larger taxable gains. A strong sale-to-list ratio means your rehab investment is being rewarded by buyers. Both factors directly affect what you'll owe — which is why running after-tax deal analysis before you buy matters more than most flippers realize.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Investor vs. Dealer: The Core Distinction</h2>
      <p style={s.p}><strong>Real estate investor:</strong> Buys and holds for more than a year. Pays long-term capital gains. Can use depreciation, 1031 exchanges, opportunity zones.</p>
      <p style={s.p}><strong>Real estate dealer (house flipper):</strong> Buys and sells with intent to profit quickly. The IRS treats your properties as inventory — like a furniture restorer's stock or a car dealer's lot.</p>
      <p style={s.p}>As a dealer you lose: depreciation, 1031 exchanges, long-term capital gains rates, opportunity zone benefits.</p>

      <div style={s.callout}>
        <strong>The combined federal + state + self-employment tax on a profitable flip can easily exceed 40–45% of your net profit.</strong> Plan for this before you make your offer — not after you close.
      </div>

      <div style={s.divider} />
      <h2 style={s.h2}>How Flip Income Is Taxed in 2026</h2>
      <p style={s.p}>Flip profit is taxed as <strong>ordinary income</strong> — same rates as W-2 wages. Federal rates run 10%–37% depending on your total income.</p>
      <ul style={s.ul}>
        <li style={s.li}><strong>State income tax</strong> — up to 5.75% in Virginia</li>
        <li style={s.li}><strong>Self-employment tax</strong> — 15.3% on net SE income up to the SS wage base, then 2.9% above. This is the one that shocks most new flippers.</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>Building Your Cost Basis</h2>
      <p style={s.p}>You're taxed on your <em>profit</em>, not your revenue. Every dollar added to your cost basis is a dollar that doesn't get taxed.</p>
      <p style={s.p}><strong>Your cost basis includes:</strong> purchase price, closing costs when you bought, all renovation costs, carrying costs (taxes, insurance, utilities), financing costs (interest and fees — not principal), and closing costs when you sell.</p>

      <div style={s.codeBlock}>
        Example — Recent NoVA Flip:{'\n\n'}
        Purchase price:              $285,000{'\n'}
        Purchase closing costs:       $4,200{'\n'}
        Renovation costs:            $67,000{'\n'}
        Carrying costs:               $8,400{'\n'}
        Financing costs (interest):  $11,200{'\n'}
        Sale closing costs:          $21,000{'\n'}
        ─────────────────────────────────────{'\n'}
        Total cost basis:           $396,800{'\n\n'}
        Sale price:                 $485,000{'\n'}
        Taxable gain:                $88,200
      </div>

      <div style={s.divider} />
      <h2 style={s.h2}>What's Deductible</h2>
      <h3 style={s.h3}>Property Costs — NOT Immediately Deductible</h3>
      <p style={s.p}>Renovation costs, property taxes, utilities, insurance while holding — all go into your cost basis. You get the benefit when you sell, as a lower taxable gain. No immediate deduction.</p>

      <h3 style={s.h3}>Business Operating Expenses — Immediately Deductible</h3>
      <ul style={s.ul}>
        <li style={s.li}>Software subscriptions (deal analyzers, CRMs)</li>
        <li style={s.li}>Marketing and advertising</li>
        <li style={s.li}>Vehicle mileage for business</li>
        <li style={s.li}>Professional fees (CPA, attorney)</li>
        <li style={s.li}>Business insurance, phone, office expenses</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>When Taxes Are Due</h2>
      <p style={s.p}>Taxes are due in the <strong>tax year the property sells</strong>. Buy in December 2025, sell in March 2026 — all profit is 2026 income. If you're generating consistent flip income, you likely owe quarterly estimated taxes. Talk to your CPA.</p>

      <div style={s.cta}>
        <div style={s.ctaTitle}>Run the After-Tax Numbers Before You Offer</div>
        <div style={s.ctaText}>FreeDealCalc builds tax estimates into the deal analysis so you see after-tax profit from the start. Enter your tax rate and see your real net. Free to use.</div>
        <a href="https://freedealcalc.com" style={s.ctaBtn}>Analyze Your Deal Free →</a>
      </div>

      <h2 style={s.h2}>Summary</h2>
      <ul style={s.ul}>
        <li style={s.li}>House flippers are <strong>dealers</strong> — no investor tax benefits</li>
        <li style={s.li}>Flip profit taxed as <strong>ordinary income</strong> — federal + state + SE tax</li>
        <li style={s.li}><strong>Cost basis</strong> includes everything put into the property — track every dollar</li>
        <li style={s.li}>Property costs <strong>not immediately deductible</strong> — they reduce gain when you sell</li>
        <li style={s.li}>Business operating costs <strong>are</strong> immediately deductible</li>
        <li style={s.li}>Taxes due in the <strong>year the property sells</strong></li>
        <li style={s.li}>Run after-tax analysis <strong>before</strong> you make your offer</li>
      </ul>

      <p style={s.byline}>
        <strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://freedealcalc.com" style={{ color: '#059669' }}>FreeDealCalc.com</a> — a free AI-powered deal analyzer built for real estate investors. He has been fixing and flipping houses in Northern Virginia for 20+ years.
      </p>
    </div>
  );
}
