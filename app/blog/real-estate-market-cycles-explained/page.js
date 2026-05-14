import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Real Estate Market Cycles Explained | FreeDealCalc",
  description: "How real estate market cycles work — the four phases, what drives them, and how investors use cycle awareness to improve returns.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-market-cycles-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie pulls live market data on any address — see where your market stands today, free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Check My Market Data Free →</a>
  </div>
);
export default async function MarketCycles() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate Market Cycles Explained</h1>
      <div style={s.intro}>Real estate markets do not move in straight lines. They move in cycles — periods of expansion, peak, contraction, and recovery that repeat over 7–18 year periods. Understanding where a market is in its cycle dramatically improves your investment decisions.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>The Four Phases</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Recovery:</strong> Vacancy rates declining, rents stabilizing, prices below replacement cost, investor activity increasing. Best time to buy — maximum upside ahead.</li>
        <li style={s.li}><strong>Expansion:</strong> Vacancy low, rents rising, new construction increasing, prices above replacement cost. Still good buying conditions but competition is rising.</li>
        <li style={s.li}><strong>Peak:</strong> Oversupply emerging, days on market lengthening, price appreciation slowing, speculative buying accelerating. Dangerous buying conditions — exit strategies must be conservative.</li>
        <li style={s.li}><strong>Contraction:</strong> Vacancy rising, rents declining, prices falling, distressed inventory increasing. Painful to hold, but distressed acquisition opportunities begin to emerge for patient investors.</li>
      </ul>
      <h2 style={s.h2}>Indicators That Reveal Cycle Position</h2>
      <p style={s.p}>Vacancy rates: falling means recovery or expansion; rising means peak or contraction. Days on market: declining means expansion; rising means peak or contraction. New permits: accelerating construction signals late expansion or peak. Price-to-rent ratios: above historical averages signals overheating; below signals opportunity.</p>
      <h2 style={s.h2}>How Investors Use Cycle Awareness</h2>
      <p style={s.p}>Cycle-aware investors shift strategy based on where the market sits. In recovery and expansion: buy aggressively, hold inventory, take longer-term positions. In peak: tighten underwriting, shorten flip timelines, reduce leverage exposure. In contraction: focus on cash flow over appreciation, accumulate distressed inventory at deep discounts for the next recovery. The cycle repeats — being in the right position for each phase compounds returns significantly over a career.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Check Live Market Data on Any Address</div>
        <div style={s.ctaText}>Freddie pulls live Rentcast data for any market — see current conditions before you commit capital.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Check My Market Data Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
