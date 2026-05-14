import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "FHA Loans for Investment Property | FreeDealCalc",
  description: "Can you use an FHA loan for investment property? The rules, owner-occupancy requirements, house hacking strategy, and multi-unit FHA lending.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/fha-loan-investment-property' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Run your duplex or triplex through Freddie — model the house hack math before you buy.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My House Hack Deal →</a>
  </div>
);
export default async function FHAInvestment() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>FHA Loans for Investment Property: What You Need to Know</h1>
      <div style={s.intro}>FHA loans are not technically investment property loans — but they can be used to buy investment properties if you play by the rules. The owner-occupancy requirement is the key: live in one unit of a 2–4 unit property and FHA financing is available for the entire building at 3.5% down.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>The FHA Multi-Unit Strategy</h2>
      <p style={s.p}>FHA loans are available for properties with 1–4 residential units, as long as the buyer occupies one unit as their primary residence. A duplex, triplex, or quadplex purchased with FHA financing at 3.5% down, with the owner living in one unit, is the most powerful entry point in real estate investing. You access the best loan rates with the smallest down payment while immediately generating rental income from adjacent units.</p>
      <h2 style={s.h2}>FHA Loan Limits</h2>
      <p style={s.p}>FHA loan limits vary by county and property type. Multi-unit limits are higher than single-unit limits. In high-cost areas, FHA limits for 4-unit properties can exceed $2M. Check current limits at the HUD website for your specific county — limits update annually and vary significantly by market.</p>
      <h2 style={s.h2}>Owner-Occupancy Requirements</h2>
      <p style={s.p}>FHA requires you to occupy the property as your primary residence for at least 12 months. After 12 months, you can move out and retain the FHA loan while renting all units. Many investors cycle through multiple properties using this strategy — buy with FHA, occupy for 12 months, move out, repeat with a new FHA purchase. You can generally have one FHA loan at a time.</p>
      <h2 style={s.h2}>Property Condition Requirements</h2>
      <p style={s.p}>FHA appraisals include property condition assessment. Properties with peeling paint, broken windows, non-functional HVAC, roof leaks, or other safety and habitability issues will not pass FHA appraisal. If you are using FHA on a distressed property, condition issues must be corrected before closing — which complicates using FHA on as-is acquisitions.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your FHA Multi-Unit Deal</div>
        <div style={s.ctaText}>Run your duplex or triplex through Freddie — model rental income vs mortgage payment to confirm the house hack math works.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My House Hack Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
