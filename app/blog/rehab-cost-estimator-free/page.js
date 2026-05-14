import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'Free Rehab Cost Estimator for House Flippers | FreeDealCalc',
  description: 'Estimate renovation costs free for any flip or rental property. Room-by-room breakdown, major systems, and contingency — from a 20-year flipper.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/rehab-cost-estimator-free' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function RehabCostEstimator() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>10 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Free Rehab Cost Estimator for House Flippers</h1>
      <div style={s.intro}>Rehab cost estimation is where most new investors get burned. They underestimate, they miss systems, they forget contingency. A realistic rehab budget before you make an offer is what separates profitable flips from expensive lessons.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Major Systems — Estimate These First</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Roof:</strong> $8,000–$18,000 for full replacement on average SFR. Partial repairs $2,000–$6,000.</li>
        <li style={s.li}><strong>HVAC:</strong> $4,000–$12,000 for full replacement. Furnace only: $2,500–$5,000.</li>
        <li style={s.li}><strong>Electrical panel:</strong> $2,500–$5,000 for 200-amp upgrade. Full rewire: $8,000–$20,000.</li>
        <li style={s.li}><strong>Plumbing:</strong> Re-pipe $4,000–$15,000. Water heater: $1,200–$2,500.</li>
        <li style={s.li}><strong>Foundation:</strong> Minor crack repair $500–$3,000. Serious issues $10,000–$50,000+.</li>
      </ul>
      <h2 style={s.h2}>Cosmetic Renovation Ranges</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Kitchen (mid-grade):</strong> $15,000–$35,000. New cabinets, counters, appliances, flooring.</li>
        <li style={s.li}><strong>Bathroom (primary):</strong> $8,000–$18,000. Full tile, vanity, fixtures.</li>
        <li style={s.li}><strong>Bathroom (secondary):</strong> $5,000–$10,000.</li>
        <li style={s.li}><strong>Flooring (whole house):</strong> $6,000–$15,000 for LVP. Hardwood refinish: $3,000–$7,000.</li>
        <li style={s.li}><strong>Paint (interior, whole house):</strong> $3,500–$7,000.</li>
        <li style={s.li}><strong>Exterior paint:</strong> $4,000–$10,000.</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Get a Rehab Estimate for Your Property Free</div>
        <div style={s.ctaText}>Tell Freddie the property condition and what needs work — get a room-by-room rehab estimate as part of your full deal analysis. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Estimate My Rehab Cost Free →</a>
      </div>
      <h2 style={s.h2}>Always Add 10–15% Contingency</h2>
      <p style={s.p}>Every rehab has surprises. You open walls and find mold. You pull permits and discover unpermitted work that has to be corrected. The HVAC quote comes in higher than expected. Budget 10% contingency on lighter cosmetic projects, 15% on heavier rehabs with unknown condition behind walls. This isn't pessimism — it's how experienced investors protect their profit.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
