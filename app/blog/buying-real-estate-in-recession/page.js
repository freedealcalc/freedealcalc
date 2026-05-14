import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Buying Real Estate in a Recession | FreeDealCalc",
  description: "How recessions affect real estate prices and what opportunities they create for investors. Strategy adjustments for buying in a down market.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/buying-real-estate-in-recession' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Distressed deals still need to pencil — Freddie confirms the numbers free before you offer.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Recession Deal Free →</a>
  </div>
);
export default async function RecessionInvesting() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Buying Real Estate in a Recession</h1>
      <div style={s.intro}>Recessions create distress — and distress creates the deepest discounts available in real estate. The investors who build their most important positions during recessions are the ones who prepared before the downturn and had both capital and conviction when others were retreating.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>How Recessions Affect Real Estate</h2>
      <p style={s.p}>Not all real estate responds to recessions the same way. Single-family homes in affordable markets tend to hold value better than luxury condos or commercial properties. Rental demand often increases during recessions as would-be buyers retreat to renting. Distressed inventory increases as overleveraged owners struggle with payments. The net effect for cash-flow-focused investors is often positive: more deals at lower prices with stable rental demand.</p>
      <h2 style={s.h2}>The Opportunity in Distress</h2>
      <p style={s.p}>Recessions produce motivated sellers who do not exist in hot markets: overleveraged flippers who cannot exit, landlords whose tenants stopped paying, developers who cannot secure construction financing, and homeowners who bought at the peak and cannot afford their payments. These sellers accept discounts that bull-market sellers refuse. The distressed inventory that emerges 12–24 months into a recession represents generational buying opportunities for investors with capital and patience.</p>
      <h2 style={s.h2}>Strategy Adjustments for Down Markets</h2>
      <p style={s.p}>In a recessionary environment: prioritize cash flow over appreciation — the appreciation thesis may take years to materialize. Use conservative ARV estimates — the market may have further to fall. Shorten your flip timelines and reduce your exposure per deal. Increase cash reserves — unexpected carrying costs in a slow market are more dangerous than in a hot one. Buy with lower leverage so payment obligations do not threaten your ability to hold.</p>
      <h2 style={s.h2}>The Biggest Mistake: Waiting Too Long</h2>
      <p style={s.p}>Most investors wait until the recession is obviously over before buying — which means they miss the best prices. The bottom of a real estate cycle is only visible in hindsight. Investors who bought in 2009–2011 made their most profitable purchases when sentiment was worst. Waiting for certainty means paying prices that already reflect the recovery.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Distressed Deals Before You Offer</div>
        <div style={s.ctaText}>Distressed deals still need to pencil. Run any recession opportunity through Freddie — ARV, MAO, and profit free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Recession Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
