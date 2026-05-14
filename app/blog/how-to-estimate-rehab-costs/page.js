import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Estimate Rehab Costs for House Flippers | FreeDealCalc",
  description: "How to estimate renovation costs for a flip — room by room, major systems, and how experienced investors walk a property and build a budget before making an offer.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-estimate-rehab-costs' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function EstimateRehab() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>12 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Estimate Rehab Costs for House Flippers</h1>
      <div style={s.intro}>Rehab cost estimation is the skill that separates profitable flippers from investors who break even or lose money. Walk a property wrong and every number downstream is wrong. Here's the systematic approach I've used on hundreds of Northern Virginia deals.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Walk the Property in the Right Order</h2>
      <p style={s.p}>Always assess major systems before cosmetics. A beautiful kitchen estimate is worthless if you missed a $15,000 roof. Walk in this order: exterior first (roof, foundation, siding, windows), then mechanical systems (HVAC, electrical, plumbing), then cosmetics (kitchen, baths, flooring, paint).</p>
      <h2 style={s.h2}>Major Systems — 2026 Cost Ranges</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Roof replacement:</strong> $9,000–$18,000 for average SFR. Architectural shingles are the standard for flip quality.</li>
        <li style={s.li}><strong>HVAC full replacement:</strong> $5,000–$12,000. Gas furnace + AC unit. Budget more in larger homes.</li>
        <li style={s.li}><strong>Electrical panel upgrade:</strong> $3,000–$6,000 for 200-amp service. Full rewire adds $8,000–$20,000.</li>
        <li style={s.li}><strong>Plumbing re-pipe:</strong> $5,000–$15,000 for full copper or PEX replacement.</li>
        <li style={s.li}><strong>Water heater:</strong> $1,200–$2,500 installed. Replace anything over 10 years old on a flip.</li>
        <li style={s.li}><strong>Foundation repair:</strong> Minor cracks $500–$3,000. Major issues $15,000–$50,000+.</li>
      </ul>
      <h2 style={s.h2}>Cosmetic Renovation Ranges</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Kitchen (mid-grade flip):</strong> $20,000–$40,000. New RTA cabinets, quartz counters, stainless appliances, LVP flooring.</li>
        <li style={s.li}><strong>Primary bath:</strong> $10,000–$20,000. Full tile, new vanity, frameless shower, fixtures.</li>
        <li style={s.li}><strong>Secondary bath:</strong> $6,000–$12,000.</li>
        <li style={s.li}><strong>Flooring (whole house LVP):</strong> $7,000–$16,000 installed.</li>
        <li style={s.li}><strong>Interior paint:</strong> $4,000–$8,000 for whole house.</li>
        <li style={s.li}><strong>Exterior paint:</strong> $5,000–$12,000.</li>
        <li style={s.li}><strong>Landscaping:</strong> $1,500–$5,000 for basic curb appeal.</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Get a Rehab Estimate Built Into Your Deal Analysis</div>
        <div style={s.ctaText}>Tell Freddie the property condition and what needs work — get a scope-based rehab estimate as part of your full free deal analysis.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Estimate My Rehab Free →</a>
      </div>
      <h2 style={s.h2}>The Contingency Rule</h2>
      <p style={s.p}>Add 10% contingency on cosmetic-only projects. Add 15% on heavier rehabs. Add 20%+ on anything with unknown condition behind walls. The contingency isn't pessimism — it's what separates investors who hit their profit targets from investors who wonder what happened.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
