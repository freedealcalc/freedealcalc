import { getNOVAMarketData } from '../marketData';
import MarketPulse from '../MarketPulse';

export const revalidate = 2592000; // refresh monthly

export const metadata = {
  title: 'How to Flip Houses in 2026: A Real Guide | FreeDealCalc',
  description: 'The complete step-by-step guide to flipping houses in 2026 — building your team, sourcing deals, analyzing offers, and closing.',
  alternates: { canonical: 'https://freedealcalc.com/blog/how-to-flip-houses-2026' },
  openGraph: {
    title: 'How to Flip Houses in 2026: A Real Guide from a Full-Time Flipper',
    description: 'Complete step-by-step guide from a 20+ year Northern Virginia house flipper.',
    url: 'https://freedealcalc.com/blog/how-to-flip-houses-2026',
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

export default async function HowToFlipHouses2026() {
  const market = await getNOVAMarketData();

  return (
    <div style={s.page}>
      <a href="/blog" style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.75rem', color: '#059669', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'inline-block', marginBottom: 32 }}>← Back to Blog</a>

      <div style={s.meta}>
        <span style={s.metaText}>May 2026</span>
        <span style={s.dot} />
        <span style={s.metaText}>15 min read</span>
        <span style={s.dot} />
        <span style={s.metaText}>Dan White</span>
      </div>

      <h1 style={s.h1}>How to Flip Houses in 2026: A Real Guide from a Full-Time Flipper</h1>

      <div style={s.intro}>
        I'm a licensed Virginia real estate agent and active house flipper with 20+ years in the DC metro area. Everything in this article comes from real experience — not theory.
      </div>

      <p style={s.p}>There's no shortage of house flipping content online. Most of it is written by people who have never actually flipped a house. This article is different — I'm going to tell you exactly how it works based on 20+ years doing it in one of the most competitive markets in the country.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>What the Current Market Looks Like</h2>
      <p style={s.p}>Before getting into the how, here's the current state of the Northern Virginia market — the data below updates automatically every month so you're always looking at current conditions, not stale statistics.</p>

      <MarketPulse market={market} />

      <p style={s.p}>These numbers matter because they tell you how competitive the post-renovation market is. A high sale-to-list ratio means your finished flip will move fast at the right price. Strong days-on-market means buyers are active. Understanding the market you're selling into is as important as buying right.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>What House Flipping Actually Is</h2>
      <p style={s.p}>House flipping is buying a distressed or undervalued property, renovating it to current market standards, and selling it for a profit. Simple concept. Challenging execution.</p>
      <p style={s.p}>TV shows make it look like a weekend project. Real house flipping is a business — with lead generation, deal analysis, contractor management, financing costs, and market timing all running simultaneously. Treat it like a business from day one.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>The 5 Steps to Your First Flip</h2>
      <ol style={s.ul}>
        <li style={s.li}>Build your team</li>
        <li style={s.li}>Source deals</li>
        <li style={s.li}>Analyze and make offers</li>
        <li style={s.li}>Close, renovate, and list</li>
        <li style={s.li}>Sell and review</li>
      </ol>

      <h2 style={s.h2}>Step 1: Build Your Team</h2>
      <h3 style={s.h3}>Your Lender</h3>
      <p style={s.p}>For distressed properties, traditional financing usually isn't an option — the properties are in too rough of shape to qualify. That means hard money. Current 2026 Northern Virginia terms: 11–13% interest, 1–2 points, 6–12 month term, 65–75% LTV. Good lenders: Hard Money Bankers, WCP Loans, and Kiavi for a national option.</p>

      <h3 style={s.h3}>Your Contractor</h3>
      <p style={s.p}>A good contractor who communicates, shows up, and delivers quality work is worth more than a cheap one who disappears mid-project. Find contractors through your local REIA network, BiggerPockets forums, or by building relationships at supply houses.</p>

      <h3 style={s.h3}>Your Title Company</h3>
      <p style={s.p}>You want a title company that moves fast, offers remote settlement, and knows investment deals. Ask other investors who they use — a title company experienced with investment transactions makes everything smoother.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Step 2: Source Deals</h2>
      <p style={s.p}>The MLS is not going to give you deals at prices that work. Finding flip-worthy properties requires off-market lead generation.</p>

      <h3 style={s.h3}>Free Lead Sources</h3>
      <ul style={s.ul}>
        <li style={s.li}><strong>REIA meetings</strong> — rooms full of investors who know about deals. Search "REIA [your city]" to find meetings.</li>
        <li style={s.li}><strong>Investment-focused agents</strong> — they encounter unlístable properties regularly. Build relationships and offer to list the finished product.</li>
        <li style={s.li}><strong>Direct outreach</strong> — driving for dollars, door knocking. Time-intensive but effective because almost nobody does it.</li>
        <li style={s.li}><strong>Investor network</strong> — wholesalers, bird dogs, and other investors often come across deals that don't fit their criteria. Build relationships across the community.</li>
      </ul>

      <h3 style={s.h3}>Paid Lead Sources</h3>
      <ul style={s.ul}>
        <li style={s.li}><strong>Google Ads</strong> — pay-per-click targeting motivated seller searches. Takes $2–4k/month to see results, but once it works it's consistent.</li>
        <li style={s.li}><strong>Direct mail</strong> — targeted mailers to distressed property lists. Plan for 3–4 rounds before judging results.</li>
      </ul>

      <div style={s.divider} />
      <h2 style={s.h2}>Step 3: Analyze Deals and Make Offers</h2>
      <p style={s.p}>The only number that matters is your profit after all costs: ARV, rehab budget, holding costs, closing costs on both ends. Skip the 70% rule — it's an oversimplification that doesn't account for carrying costs or financing terms.</p>

      <div style={s.cta}>
        <div style={s.ctaTitle}>Run the Numbers Before You Make an Offer</div>
        <div style={s.ctaText}>FreeDealCalc runs your full deal analysis in minutes — ARV, rehab costs, financing terms, closing costs, and projected after-tax profit. Free to use, no account required.</div>
        <a href="https://freedealcalc.com" style={s.ctaBtn}>Analyze Your Deal Free →</a>
      </div>

      <p style={s.p}>When presenting an offer, show your work. A breakdown showing exactly how you arrived at the number — ARV, renovation costs, closing costs, your profit — helps sellers understand it's math, not a lowball. I've had sellers accept our offer over a higher competing offer because we explained our reasoning clearly.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Step 4: Close, Renovate, and List</h2>
      <p style={s.p}>Hard money is expensive — every extra week costs real money. Move with urgency. Highest-ROI renovations in order: kitchen, bathrooms, mechanicals (HVAC, water heater, roof), then paint and flooring.</p>
      <p style={s.p}>Price the finished property right from day one. Overpricing and chasing the market down with price cuts signals desperation and costs money. A well-priced property attracts multiple offers fast — especially in the current NoVA market.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Step 5: Sell and Review</h2>
      <p style={s.p}>After you close, compare actual numbers to your original projections. Where did you estimate accurately? Where did costs run over? Would you use the same contractor again? The gap between projected and actual tightens with every deal. New flippers who skip this step keep making the same mistakes.</p>

      <div style={s.divider} />
      <h2 style={s.h2}>Key Takeaways</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Treat it like a business from day one.</strong> Track everything, build your team before you need them.</li>
        <li style={s.li}><strong>The deal is made when you buy, not when you sell.</strong> Overpaying is almost impossible to overcome on the back end.</li>
        <li style={s.li}><strong>Leads are the constraint.</strong> The flippers who scale solve the lead problem — everything else follows.</li>
        <li style={s.li}><strong>Estimate conservatively.</strong> Surprises in renovation always cost money, never save it.</li>
        <li style={s.li}><strong>Review every deal.</strong> The fastest path to improvement is honest post-mortem analysis.</li>
      </ul>

      <p style={s.byline}>
        <strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://freedealcalc.com" style={{ color: '#059669' }}>FreeDealCalc.com</a> — a free AI-powered deal analyzer built for real estate investors. He has been fixing and flipping houses in Northern Virginia for 20+ years.
      </p>
    </div>
  );
}
