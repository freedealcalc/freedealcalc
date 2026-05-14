import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';

export const revalidate = 2592000;

export const metadata = {
  title: 'How to Wholesale Real Estate: Step-by-Step Guide for 2026 | FreeDealCalc',
  description: 'How to start wholesaling real estate in 2026 — finding deals, analyzing numbers, building a buyer list, and closing your first assignment.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-wholesale-real-estate' },
  openGraph: {
    title: 'How to Wholesale Real Estate: Step-by-Step Guide for 2026',
    description: 'The practical guide to starting a wholesale real estate business — lead generation, deal analysis, and closing assignments.',
    url: 'https://www.freedealcalc.com/blog/how-to-wholesale-real-estate',
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

export default async function HowToWholesale() {
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
      <h1 style={s.h1}>How to Wholesale Real Estate: Step-by-Step Guide for 2026</h1>
      <div style={s.intro}>
        Wholesaling is a lead generation and negotiation business. The investors who succeed at it treat it like one — consistent marketing, disciplined deal analysis, and a reliable buyer network they've built before they need it.
      </div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>

      <p style={s.p}>I buy from wholesalers regularly. I've seen good packages and bad ones, fair deals and deals that shouldn't have been sent. This guide is written from the buyer side — which means it's actually useful for wholesalers who want to build a reputation for bringing real deals.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Current Market Conditions</h2>
      <MarketPulse market={market} />

      <div style={s.divider} />
      <h2 style={s.h2}>Step 1: Learn the Numbers Before You Talk to Any Seller</h2>
      <p style={s.p}>You cannot negotiate a purchase price you can't analyze. Before you make one call or knock one door, learn how to estimate ARV from comparable sales, estimate rehab costs by condition, and calculate a buyer's maximum offer. Your assignment fee lives inside that spread — you need to understand the math to know where it is.</p>
      <p style={s.p}>Formula: Buyer's Max Offer = (ARV × 0.70) − Rehab. Your contract price needs to be below that number with room for your fee.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Step 2: Choose One Lead Source and Go Deep</h2>
      <p style={s.p}>New wholesalers fail because they try everything at once and do nothing well. Pick one lead channel, master it, and stay with it for 90 days before adding another.</p>
      <h3 style={s.h3}>Best Starting Channels</h3>
      <ul style={s.ul}>
        <li style={s.li}><strong>Driving for dollars:</strong> Zero cost. Drive neighborhoods and document distressed properties — overgrown yards, boarded windows, fire damage, deferred maintenance. Then skip-trace the owner and reach out. Labor-intensive but highly targeted.</li>
        <li style={s.li}><strong>Direct mail:</strong> Send postcards to lists — pre-foreclosure, probate, tax delinquent, absentee owner. Plan for 0.5–2% response rate and 3+ mailings before judging results. Cost: $0.50–$1.00 per piece.</li>
        <li style={s.li}><strong>Cold calling:</strong> High volume, low conversion. Skip-trace distressed property lists and call. Requires thick skin but generates fast feedback.</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>Step 3: Build Your Buyer List Before You Need It</h2>
      <p style={s.p}>The single most common wholesaler mistake: finding a deal before having a buyer. When your contract period is 30 days, you don't have time to build a list from scratch.</p>
      <p style={s.p}>Build your list now: attend local REIA meetings, post in BiggerPockets forums for your market, network with title companies who see cash closings, and respond to "we buy houses" signs in your target area. Get 50–100 names with contact info before you need them.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Step 4: Send a Professional Dispo Package</h2>
      <p style={s.p}>Your dispo package is your product. A one-line email with an address and a price is not a dispo package — it's noise. A professional package includes verified comps, rehab estimate, condition notes, photos, close deadline, and EMD requirement.</p>
      <p style={s.p}>Buyers who receive professional packages respond faster and back out less. It signals that you're a serious operator who knows their numbers.</p>

      <div style={s.cta}>
        <div style={s.ctaTitle}>Build a Free Professional Dispo Package</div>
        <div style={s.ctaText}>FreeDealCalc generates a professional wholesale dispo package with Rentcast verified comps in 60 seconds. Free — no JV split, no monthly fee.</div>
        <a href="https://www.freedealcalc.com/dispo" style={s.ctaBtn}>Build My Dispo Package Free →</a>
      </div>

      <div style={s.divider} />
      <h2 style={s.h2}>Step 5: Negotiate, Contract, and Assign</h2>
      <p style={s.p}>When a seller agrees to your price, move fast. Get the purchase agreement signed within 24 hours. Use an assignment-friendly contract (standard in most markets — have a real estate attorney review your template before use). Collect a small EMD — $500–$2,000 — to show good faith.</p>
      <p style={s.p}>When your end buyer is identified, execute the assignment agreement. Your fee is typically paid at closing — though some buyers will pay a portion upon signing the assignment to lock in the deal.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>What Kills Wholesale Deals</h2>
      <ul style={s.ul}>
        <li style={s.li}>Overpaying — leaving no room for your fee after the buyer's max offer</li>
        <li style={s.li}>Inflated ARV — using the wholesaler's ARV instead of pulling your own comps</li>
        <li style={s.li}>No buyer before the contract expires — always have 2–3 backup buyers on your list</li>
        <li style={s.li}>Weak dispo package — buyers who can't evaluate the deal quickly move on</li>
        <li style={s.li}>Title issues — liens, unprobated estates, disputed ownership — discovered after contract, before close</li>
      </ul>

      <p style={s.byline}>
        <strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{ color: '#059669' }}>FreeDealCalc.com</a>. He buys wholesale deals in Northern Virginia and has been investing for 20+ years.
      </p>
    </div>
  );
}
