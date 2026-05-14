import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'Real Estate Investing for Beginners: Where to Actually Start | FreeDealCalc', description: 'Real estate investing for beginners — the honest guide. Which strategy to start with, what to learn first, and the mistakes that cost new investors the most.', alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-investing-beginners' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function REBeginners() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>13 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate Investing for Beginners: Where to Actually Start</h1>
      <div style={s.intro}>Everyone tells you to invest in real estate. Fewer people tell you what to actually do first, what skills matter most, and what kills first deals. This is the guide I wish I had 20+ years ago when I started in Northern Virginia.</div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>
      <p style={s.p}>Real estate investing is not complicated, but it requires discipline — learning the market, analyzing deals with real numbers, and avoiding the expensive mistakes that most beginners make in the first 12 months.</p>
      <div style={s.divider}/><h2 style={s.h2}>Your Market Right Now</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>The Honest Beginner Advice</h2>
      <p style={s.p}>Most beginner real estate content tells you to "take action" and "get your first deal." That's incomplete. The investors who succeed long-term are the ones who analyze correctly before taking action — not the ones who just move fast and figure it out after closing.</p>
      <p style={s.p}>The #1 beginner mistake: overpaying for a first deal because they were too excited, too impatient, or too trusting of the wholesaler's numbers. The first deal sets the pattern. Get it right.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>Which Strategy to Start With</h2>
      <h3 style={s.h3}>If You Have Time But Not Capital: Wholesaling</h3>
      <p style={s.p}>Wholesaling requires minimal capital and teaches lead generation, negotiation, and deal analysis simultaneously. The income is inconsistent, the learning curve is steep, and most people quit before their first deal. But if you stick with it for 6–12 months, you'll understand deal flow better than most.</p>
      <h3 style={s.h3}>If You Have Capital and Want Long-Term Wealth: BRRRR or Rental</h3>
      <p style={s.p}>Buy below market, renovate, hold and rent. BRRRR recycles your capital. Straight buy-and-hold requires more capital but less active management. Either builds long-term wealth through cash flow, appreciation, and principal paydown.</p>
      <h3 style={s.h3}>If You Want Active Income: Fix-and-Flip</h3>
      <p style={s.p}>Flipping generates the highest active income per deal but requires capital, construction management skills, and market timing. Start with a simple cosmetic flip — no structural work, no additions, no major systems replacements — and learn the process before taking on complex rehabs.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>The Core Skills to Develop First</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Market knowledge:</strong> Spend 90 days analyzing sold properties in your target area before making an offer. Know what things sell for at what price per square foot.</li>
        <li style={s.li}><strong>Deal analysis:</strong> Learn to calculate ARV, rehab cost, max offer, holding costs, and projected profit before any offer goes out. Every deal gets modeled before negotiation.</li>
        <li style={s.li}><strong>Contractor relationships:</strong> Build relationships with 2–3 general contractors before you need them. Getting bids on a deal with no contractor relationship wastes everyone's time.</li>
        <li style={s.li}><strong>Financing relationships:</strong> Know your hard money lender, your private money contacts, and what you qualify for before you make offers contingent on financing.</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Learn Deal Analysis by Doing It</div>
        <div style={s.ctaText}>FreeDealCalc's AI analyst Freddie walks you through deal analysis on any property — free. Run 10 deals before you make your first offer and you'll know your numbers cold.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Start Analyzing Deals Free →</a>
      </div>
      <div style={s.divider}/>
      <h2 style={s.h2}>Mistakes That Cost Beginners the Most</h2>
      <ul style={s.ul}>
        <li style={s.li}>Trusting the wholesaler's ARV — always pull your own comps</li>
        <li style={s.li}>No contractor estimate before closing — the rehab number is always higher than you think</li>
        <li style={s.li}>Skipping holding costs — they can equal 10–15% of the loan amount over 9 months</li>
        <li style={s.li}>Buying in a market you don't know — you'll miss comps and misjudge condition</li>
        <li style={s.li}>Over-improving for the neighborhood — $80,000 kitchens don't comp in $280,000 neighborhoods</li>
        <li style={s.li}>No clear exit strategy before you close</li>
      </ul>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia for 20+ years.</p>
    </div>
  );
}
