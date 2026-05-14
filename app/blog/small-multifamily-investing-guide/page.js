import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Small Multifamily Real Estate Investing Guide | FreeDealCalc",
  description: "Complete guide to investing in duplexes, triplexes, and quadplexes. Financing advantages, deal analysis, and management compared to SFR.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/small-multifamily-investing-guide' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Run any duplex or triplex through Freddie — gross income, cash flow, and returns modeled free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Multifamily Deal →</a>
  </div>
);
export default async function SmallMultifamily() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Small Multifamily Real Estate Investing Guide</h1>
      <div style={s.intro}>Small multifamily — duplexes, triplexes, and quadplexes — is the sweet spot for most beginning real estate investors. You can use residential financing including FHA for owner-occupants, multiple units reduce vacancy risk, and the management learning curve is steeper than SFR but manageable without professional help.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Advantages of Small Multifamily</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Residential financing:</strong> 1–4 unit properties qualify for conventional and FHA loans — the best rates available</li>
        <li style={s.li}><strong>Reduced vacancy risk:</strong> A vacant unit on a duplex means 50% vacancy — a vacant SFR means 100% vacancy</li>
        <li style={s.li}><strong>Higher gross income per dollar invested:</strong> Multiple units typically produce stronger cash-on-cash returns than equivalent SFR investments</li>
        <li style={s.li}><strong>House hacking potential:</strong> Live in one unit, rent the others with owner-occupant financing and 3.5% down</li>
      </ul>
      <h2 style={s.h2}>How to Analyze a Small Multifamily</h2>
      <p style={s.p}>Calculate gross scheduled income (all units at full market rent). Subtract vacancy allowance (5–8% in tight markets, 8–12% in softer markets). Subtract operating expenses (taxes, insurance, maintenance — target 35–45% of gross). Subtract debt service. The result is monthly cash flow. Divide annual cash flow by total cash invested for cash-on-cash return.</p>
      <h2 style={s.h2}>Finding Small Multifamily Deals</h2>
      <p style={s.p}>Small multifamily properties are listed on the MLS more frequently than larger apartment buildings. Filter for 2–4 units in your target market. Many owners of older duplexes and triplexes are small landlords who have owned for decades — motivated by age, maintenance fatigue, or tax planning. These sellers often prefer clean, fast offers to maximizing price through extended market exposure.</p>
      <h2 style={s.h2}>Management Considerations</h2>
      <p style={s.p}>Managing two to four units yourself is manageable if you live nearby. Key differences from SFR: more tenant interactions, shared utilities require careful lease drafting to allocate costs, and maintenance is proportionally more frequent. Budget $100–$200 per unit per month for maintenance and repairs as a reserve fund — actual expenses vary by property age and condition.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Multifamily Deal Free</div>
        <div style={s.ctaText}>Run any duplex, triplex, or quad through Freddie — gross income, cash flow, and returns modeled in 60 seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Multifamily Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
