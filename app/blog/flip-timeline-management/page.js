import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "House Flip Timeline Management | FreeDealCalc",
  description: "How to manage a house flip timeline from acquisition to close. Common delays, schedule templates, and how every extra week costs you money.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/flip-timeline-management' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Know your carrying cost per month on any flip — Freddie models it free before you start.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Model My Flip Timeline Free →</a>
  </div>
);
export default async function FlipTimeline() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Flip Timeline Management: Every Week Costs Money</h1>
      <div style={s.intro}>Most house flippers underestimate how much time costs. A flip that takes 6 months instead of 4 does not just run late — it eats $8,000–$15,000 in additional carrying costs, hard money interest, and insurance. Timeline discipline is profit discipline.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>The Standard Flip Timeline</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Week 1–2:</strong> Close acquisition, pull permits, order materials, mobilize contractor</li>
        <li style={s.li}><strong>Week 3–6:</strong> Demo and rough work — framing, rough plumbing, rough electrical, HVAC rough</li>
        <li style={s.li}><strong>Week 7–8:</strong> Inspections, insulation, drywall</li>
        <li style={s.li}><strong>Week 9–12:</strong> Finish work — trim, cabinets, flooring, tile, paint</li>
        <li style={s.li}><strong>Week 13–14:</strong> Final fixtures, appliances, punch list, professional photos</li>
        <li style={s.li}><strong>Week 15+:</strong> List, go under contract, close</li>
      </ul>
      <h2 style={s.h2}>The Most Common Delay Points</h2>
      <p style={s.p}>Permit delays: plan for 2–4 weeks minimum, longer in complex jurisdictions. Material lead times: cabinets, windows, and specialty items often take 3–6 weeks. Inspection backlogs: in busy markets, scheduling rough and final inspections takes 1–2 weeks each. Change orders: scope additions mid-project are the single biggest timeline killer. Lock your scope before demo starts.</p>
      <h2 style={s.h2}>Carrying Cost Math</h2>
      <p style={s.p}>On a $300k flip financed with hard money at 11%, you pay $2,750 per month in interest alone. Add $400/month insurance and $500/month in utilities and maintenance, and your carrying cost is $3,650/month. A 2-month delay costs $7,300. A 4-month delay costs $14,600. These numbers should motivate daily attention to timeline management — not weekly.</p>
      <h2 style={s.h2}>Weekly Site Visits</h2>
      <p style={s.p}>Visit every active flip at least once per week. Walk the property with your GC, review what was completed vs what was planned, identify any delays early, and make decisions that are holding up progress. Contractors who know their client visits weekly stay more accountable than those who go unvisited for two weeks at a stretch.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Know Your Carrying Costs Before You Start</div>
        <div style={s.ctaText}>Model carrying costs and timeline on any flip — Freddie shows your profit at different exit timelines, free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Model My Flip Timeline Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
