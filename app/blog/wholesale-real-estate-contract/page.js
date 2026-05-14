import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';

export const revalidate = 2592000;

export const metadata = {
  title: 'Wholesale Real Estate Contract: What It Is and What It Needs | FreeDealCalc',
  description: 'What goes in a wholesale real estate contract — the purchase agreement, assignment clause, inspection period, and what to watch out for.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/wholesale-real-estate-contract' },
  openGraph: {
    title: 'Wholesale Real Estate Contract: What It Is and What It Needs',
    description: 'The key clauses every wholesale purchase agreement needs — written by an active investor who buys and sells wholesale deals.',
    url: 'https://www.freedealcalc.com/blog/wholesale-real-estate-contract',
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
  disclaimer: { background: '#fef9c3', border: '1px solid #fde047', borderRadius: 8, padding: '16px 20px', margin: '24px 0', fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.85rem', color: '#713f12', lineHeight: 1.6 },
};

export default async function WholesaleContract() {
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
      <h1 style={s.h1}>Wholesale Real Estate Contract: What It Is and What It Needs</h1>
      <div style={s.intro}>
        A wholesale real estate contract is a standard purchase agreement with one critical addition: an assignment clause that lets you transfer your buyer rights to a third party. Without it, you can't wholesale the deal.
      </div>

      <div style={s.disclaimer}>
        <strong>Note:</strong> This article is educational — not legal advice. Real estate contract law varies by state. Have a licensed real estate attorney in your state review any contract before you use it.
      </div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>

      <div style={s.divider} />
      <h2 style={s.h2}>Current Market Context</h2>
      <MarketPulse market={market} />

      <div style={s.divider} />
      <h2 style={s.h2}>The Two Contracts in a Wholesale Deal</h2>
      <p style={s.p}>Every wholesale transaction involves two separate agreements:</p>
      <ul style={s.ul}>
        <li style={s.li}><strong>Purchase and Sale Agreement:</strong> Between you (the wholesaler/buyer) and the motivated seller. Sets the purchase price, closing date, contingencies, and EMD.</li>
        <li style={s.li}><strong>Assignment Agreement:</strong> Between you and your end buyer. Transfers your rights in the Purchase and Sale Agreement to the end buyer in exchange for your assignment fee.</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>Key Clauses in Your Purchase Agreement</h2>

      <h3 style={s.h3}>1. Assignment Clause</h3>
      <p style={s.p}>The most important clause. Language typically reads: "Buyer reserves the right to assign this contract to any entity or individual without seller approval." Without this, you cannot legally assign your purchase rights. Some sellers push back on this — be prepared to explain that it's standard in investment transactions.</p>

      <h3 style={s.h3}>2. Inspection / Due Diligence Period</h3>
      <p style={s.p}>A defined window — typically 7–21 days — during which you can inspect the property and back out without losing your EMD. This is your protection period to verify condition, confirm ARV, and find your buyer. Don't sign a contract without one.</p>

      <h3 style={s.h3}>3. Closing Date</h3>
      <p style={s.p}>Set a realistic timeline. Most wholesale deals close in 14–30 days. If you need more time to find a buyer, negotiate 30–45 days upfront. Extending the closing date after the fact requires seller approval and can create friction.</p>

      <h3 style={s.h3}>4. Earnest Money Deposit</h3>
      <p style={s.p}>Typically $500–$2,000 on wholesale deals. Low enough to limit your downside if the deal falls apart, high enough to show the seller you're serious. Your EMD is at risk if you back out outside the inspection period.</p>

      <h3 style={s.h3}>5. As-Is Clause</h3>
      <p style={s.p}>Wholesalers buy as-is. Include language that the seller makes no representations about property condition and buyer accepts the property in its current state. This protects you from post-closing claims.</p>

      <h3 style={s.h3}>6. Purchase Price</h3>
      <p style={s.p}>Your negotiated price must leave room for your assignment fee AND your end buyer's profit. Buyer's max offer = (ARV × 0.70) − Rehab. Your contract price should be 5–15% below that number.</p>

      <div style={s.cta}>
        <div style={s.ctaTitle}>Calculate Your Max Offer Before Signing</div>
        <div style={s.ctaText}>FreeDealCalc runs the full wholesale deal analysis — ARV, buyer's max offer, and your potential assignment fee — free in 60 seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Run My Wholesale Analysis →</a>
      </div>

      <div style={s.divider} />
      <h2 style={s.h2}>The Assignment Agreement</h2>
      <p style={s.p}>Once you have an end buyer, the assignment agreement is a short document (1–2 pages) that includes:</p>
      <ul style={s.ul}>
        <li style={s.li}>Reference to the original purchase agreement (address, purchase price, closing date)</li>
        <li style={s.li}>The assignee's name (your end buyer)</li>
        <li style={s.li}>Your assignment fee amount</li>
        <li style={s.li}>When the fee is paid (at signing of assignment, or at closing)</li>
        <li style={s.li}>Assignee's acknowledgment that they've reviewed the original contract and accept all terms</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>Double Close vs. Assignment</h2>
      <p style={s.p}>An assignment is transparent — the seller sees your fee on the settlement statement. A double close uses transactional funding to close A→B (you buy from seller) and B→C (you sell to end buyer) in the same day. The seller doesn't see your profit. Double closes cost more (transactional funding fees) but are useful when your assignment fee is large and you want to keep it private.</p>

      <p style={s.byline}>
        <strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{ color: '#059669' }}>FreeDealCalc.com</a>. He has been buying and selling real estate in Northern Virginia for 20+ years.
      </p>
    </div>
  );
}
