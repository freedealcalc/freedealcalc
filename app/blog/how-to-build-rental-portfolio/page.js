import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: \'How to Build a Rental Property Portfolio Step by Step | FreeDealCalc',
  description: \'How to build a rental portfolio — acquisition strategy, financing as you scale, managing multiple properties, and the milestones that define each stage.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-build-rental-portfolio' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function BuildRentalPortfolio() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>11 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Build a Rental Property Portfolio Step by Step</h1>
      <div style={s.intro}>A rental portfolio that replaces your income doesn't happen from one deal — it's built property by property with a consistent acquisition strategy and disciplined reinvestment. Here's the roadmap.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Stage 1: Properties 1–3 (Foundation)</h2>
      <p style={s.p}>Focus: learn landlording, establish your systems, prove the model works in your market. Use conventional financing (owner-occupant or investment loan) for properties 1–2. Property 3 often requires DSCR or portfolio lending as conventional loan limits tighten. Target: positive cash flow on every property.</p>
      <h2 style={s.h2}>Stage 2: Properties 4–10 (Scale)</h2>
      <p style={s.p}>DSCR loans become your primary tool — qualification is based on property income, not personal DTI. Consider moving acquisitions into an LLC for liability protection (consult an attorney on the due-on-sale implications). Hire a property manager if you haven't already. Focus shifts from individual deals to portfolio performance.</p>
      <h2 style={s.h2}>Stage 3: Properties 10+ (Portfolio)</h2>
      <p style={s.p}>Portfolio lenders (community banks, credit unions) offer relationship-based financing for large portfolios. Cash-out refinances become a key capital recycling tool. Professional property management is standard. Tax strategy becomes critical — cost segregation studies, 1031 exchanges, entity structure.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Every Acquisition Before You Buy</div>
        <div style={s.ctaText}>FreeDealCalc runs full rental analysis — cash flow, cap rate, DSCR — on every property in your portfolio strategy. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Next Rental Free →</a>
      </div>
      <h2 style={s.h2}>The BRRRR Acceleration Strategy</h2>
      <p style={s.p}>BRRRR compresses the portfolio building timeline. Instead of saving for a new down payment on every property, you recycle capital through the refinance. Done correctly — buy below ARV, renovate, refinance at 75% LTV — you own a cash-flowing rental with most or all of your capital returned to deploy again. This is how portfolios grow from 3 properties to 15 in 5 years.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
