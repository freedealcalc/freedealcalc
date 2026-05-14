import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';

export const revalidate = 2592000;

export const metadata = {
  title: 'What is Wholesaling Real Estate? How It Works in 2026 | FreeDealCalc',
  description: 'Wholesaling real estate explained — how wholesalers find deals, get them under contract, and assign them to buyers for a fee. No renovation required.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-wholesaling-real-estate' },
  openGraph: {
    title: 'What is Wholesaling Real Estate? How It Works in 2026',
    description: 'The complete guide to real estate wholesaling — finding deals, contracts, assignment fees, and building a buyer list.',
    url: 'https://www.freedealcalc.com/blog/what-is-wholesaling-real-estate',
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

export default async function WhatIsWholesaling() {
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
      <h1 style={s.h1}>What is Wholesaling Real Estate? How It Works in 2026</h1>
      <div style={s.intro}>
        Wholesaling is finding a distressed property, getting it under contract below market value, and then selling that contract to an end buyer — a flipper or landlord — for an assignment fee. You never own the property. No renovation, no financing, no holding costs.
      </div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>

      <p style={s.p}>Wholesaling is often pitched as the "easy entry point" into real estate investing. The reality is more nuanced — it requires strong marketing, deal analysis skills, and a reliable buyer network. But when it works, it works fast. Assignment fees in active markets range from $5,000 to $50,000+ per deal.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>The Northern Virginia Wholesale Market</h2>
      <p style={s.p}>Understanding the end buyer's market is critical — you're finding deals for flippers and landlords, so you need to know what they need to pay to make the numbers work.</p>
      <MarketPulse market={market} />

      <div style={s.divider} />
      <h2 style={s.h2}>How Wholesaling Works — Step by Step</h2>

      <h3 style={s.h3}>1. Find a Motivated Seller</h3>
      <p style={s.p}>Motivated sellers are people who need to sell fast and will accept below-market offers in exchange for speed and certainty. Common situations: pre-foreclosure, inherited property, divorce, code violations, job relocation, deferred maintenance, or simply a landlord tired of dealing with tenants.</p>
      <p style={s.p}>Lead sources: driving for dollars, direct mail, Google Ads, bandit signs, probate lists, code violation lists, and networking with attorneys and agents who work with distressed sellers.</p>

      <h3 style={s.h3}>2. Analyze the Deal</h3>
      <p style={s.p}>Your end buyer is a flipper. You need to know what a flipper can pay — typically (ARV × 0.70) − Rehab. Your assignment fee comes out of that spread. If the flipper's max offer is $180,000 and you can get the seller to $155,000, your assignment fee is up to $25,000.</p>

      <h3 style={s.h3}>3. Get It Under Contract</h3>
      <p style={s.p}>Sign a purchase agreement with the seller at your negotiated price. The contract must include an assignment clause — language that allows you to assign your buyer rights to a third party. Most wholesale contracts include this by default.</p>

      <h3 style={s.h3}>4. Find Your End Buyer</h3>
      <p style={s.p}>Blast the deal to your cash buyer list with a professional dispo package — address, asking price, ARV, comps, rehab estimate, condition notes, and a deadline. The faster you move, the less time you spend paying for the contract period.</p>

      <h3 style={s.h3}>5. Assign the Contract</h3>
      <p style={s.p}>Your buyer signs an assignment agreement, pays your assignment fee (typically at closing or upon signing), and takes your place in the original purchase contract. You're done. The buyer closes with the seller directly.</p>

      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Wholesale Deal Free</div>
        <div style={s.ctaText}>FreeDealCalc's AI analyst Freddie runs wholesale deal analysis — ARV, max allowable offer, assignment fee calculation, and a free dispo package with Rentcast verified comps.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Wholesale Deal →</a>
      </div>

      <div style={s.divider} />
      <h2 style={s.h2}>Wholesaling vs. Flipping</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Capital required:</strong> Wholesaling requires minimal capital (earnest money deposit only). Flipping requires purchase + renovation financing.</li>
        <li style={s.li}><strong>Risk:</strong> Wholesalers risk losing their EMD if they can't find a buyer. Flippers risk the full project cost.</li>
        <li style={s.li}><strong>Income:</strong> Wholesalers earn one-time assignment fees. Flippers earn renovation profit on exit.</li>
        <li style={s.li}><strong>Timeline:</strong> Wholesale deals close in days to weeks. Flips take 3–9 months.</li>
        <li style={s.li}><strong>Skill set:</strong> Wholesaling requires strong marketing and negotiation. Flipping requires construction management and market timing.</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>Is Wholesaling Legal?</h2>
      <p style={s.p}>Yes — with important caveats. Assigning a contract is legal in all 50 states. However, some states have regulations around wholesaling that require a real estate license if you're marketing properties you don't own. Virginia, for example, has specific rules about how wholesalers can advertise. Consult a real estate attorney in your state before starting.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Building Your Buyer List</h2>
      <p style={s.p}>Your buyer list is your most valuable wholesaling asset. A strong list of 200–500 active cash buyers means you can move deals in 24–48 hours. Build it through: REIA meetings, BiggerPockets, LinkedIn, Craigslist ads, and by networking with title companies who see cash transactions regularly.</p>

      <p style={s.byline}>
        <strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{ color: '#059669' }}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.
      </p>
    </div>
  );
}
