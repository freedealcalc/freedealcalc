import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'House Flipping Mistakes Beginners Make (And How to Avoid Them) | FreeDealCalc',
  description: 'The most common house flipping mistakes new investors make — overpaying, bad contractors, poor budgeting — and exactly how to avoid each one.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-flipping-mistakes-beginners' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function FlipMistakes() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>11 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>House Flipping Mistakes Beginners Make (And How to Avoid Them)</h1>
      <div style={s.intro}>The mistakes that cost new flippers money are predictable and preventable. They're made repeatedly not because investors are careless but because nobody told them what to watch for. Here's the full list.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Mistake 1: Trusting Someone Else's Numbers</h2>
      <p style={s.p}>Wholesaler ARV, agent's CMA, your lender's appraisal — none of these replace your own comp analysis. Pull your own comparable sales before every offer. Every time. This is non-negotiable.</p>
      <h2 style={s.h2}>Mistake 2: Skipping the Contractor Estimate</h2>
      <p style={s.p}>Making an offer before getting a contractor walkthrough on a heavy rehab. Your $40,000 estimate becomes a $75,000 actual once the walls open. Rule: no offer on any renovation over $30,000 without a contractor estimate.</p>
      <h2 style={s.h2}>Mistake 3: Not Budgeting Holding Costs</h2>
      <p style={s.p}>New investors calculate purchase + rehab and forget everything in between. Hard money interest, taxes, insurance, utilities — on a 7-month hold these can easily total $25,000–$40,000. Model them before you offer.</p>
      <h2 style={s.h2}>Mistake 4: Paying Contractors Too Much Upfront</h2>
      <p style={s.p}>Never pay more than 10–15% upfront for mobilization and materials. The rest pays out on completion milestones. Contractors who need large upfront draws before work begins are a red flag.</p>
      <h2 style={s.h2}>Mistake 5: Over-Improving</h2>
      <p style={s.p}>$80,000 kitchens in $280,000 neighborhoods. The comps don't support it and retail buyers won't pay for it. Match your finish level to what's selling in the immediate area — not what you'd personally want in a kitchen.</p>
      <h2 style={s.h2}>Mistake 6: No Exit Strategy B</h2>
      <p style={s.p}>Assuming the flip will work and never modeling an alternative. Before you close, run the BRRRR numbers — does it work as a rental if the flip market softens? Having a backup exit prevents panic decisions mid-project.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Avoid These Mistakes With Better Analysis</div>
        <div style={s.ctaText}>FreeDealCalc flags thin margins, models holding costs, and scores every deal before you commit. Free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Score My Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
