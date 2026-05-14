import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Calculate ARV in Real Estate | FreeDealCalc",
  description: "Step-by-step guide to calculating after-repair value. How to pull comps, adjust for differences, and arrive at a defensible ARV.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-calculate-arv-real-estate' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie pulls Rentcast comps and calculates ARV on any address — free in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Calculate My ARV Free →</a>
  </div>
);
export default async function CalcARV() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Calculate ARV in Real Estate</h1>
      <div style={s.intro}>ARV — after-repair value — is the single most important number in fix-and-flip and BRRRR investing. Get it right and your deal analysis is sound. Get it wrong and every other number is meaningless. Here is the step-by-step process.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Step 1: Define the Subject Property</h2>
      <p style={s.p}>Before pulling comps, document your subject property's key characteristics: square footage, bedroom and bathroom count, lot size, year built, garage or parking, and the finished condition you are projecting. Your comps need to match these characteristics as closely as possible. Comparing a 1,400 sqft 3BR/2BA to a 2,100 sqft 4BR/3BA produces a meaningless ARV.</p>
      <h2 style={s.h2}>Step 2: Pull Comparable Sales</h2>
      <p style={s.p}>Target comps that sold in the last 90 days (120 days maximum in slow markets), within half a mile (1 mile maximum in rural or low-density areas), with similar square footage (within 20%), and similar bedroom and bathroom count. You want at minimum 3 comps — ideally 5–6. Use the MLS, Zillow sold data, Redfin, or Rentcast for access to recent sales data.</p>
      <h2 style={s.h2}>Step 3: Adjust for Differences</h2>
      <p style={s.p}>No two properties are identical. Make adjustments for meaningful differences: square footage (typically $50–$150/sqft difference depending on market), bathrooms (typically $10k–$20k per extra bath), garage (typically $15k–$25k), finished basement (varies widely), and condition (a fully renovated comp vs your projected renovation level). Adjust each comp up or down to reflect what it would have sold for if it matched your subject property exactly.</p>
      <h2 style={s.h2}>Step 4: Reconcile to a Single Value</h2>
      <p style={s.p}>Average your adjusted comp values, then apply judgment. Weight recent sales and geographically close comps more heavily. If your comps cluster tightly (within 5–8% of each other), the midpoint is your ARV. If comps are widely dispersed, investigate why — there may be a neighborhood quality factor or condition issue you are missing. Use the conservative end of your range when your confidence is lower.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Get ARV Calculated Automatically</div>
        <div style={s.ctaText}>Freddie pulls Rentcast comps and calculates ARV on any address — no manual comp pulling required. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My ARV Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
