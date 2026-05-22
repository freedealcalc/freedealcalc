export const revalidate = 2592000;
export const metadata = {
  title: "How to Analyze a Real Estate Deal: Step by Step | FreeDealCalc",
  description: "Learn how to analyze any real estate deal from scratch — ARV, rehab estimate, MAO calculation, and profit projection. The process experienced investors use on every deal.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-analyze-a-deal' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie walks through every step of deal analysis free — any address, any strategy.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Deal Free →</a>
  </div>
);
export default function Page() {
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Analyze a Real Estate Deal: Step by Step</h1>
      <div style={s.intro}>Every profitable real estate deal starts with accurate analysis. The process is the same whether you're flipping, wholesaling, or buying a rental: establish ARV, estimate costs, calculate your maximum offer, and project your net profit. Here's how to do it right.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Step 1: Establish ARV</h2>
      <p style={s.p}>Pull 3–5 closed comps within 0.5 miles, same property type, sold within 90 days, in renovated condition. Weight the most similar comps most heavily. This is your ceiling — everything else works backward from here.</p>
      <div style={s.divider}/><h2 style={s.h2}>Step 2: Estimate Rehab Costs</h2>
      <p style={s.p}>Walk the property before you analyze the numbers. Get a scope of work: roof, HVAC, electrical, plumbing, kitchen, baths, flooring, paint, exterior. Price each category. Add 10–15% contingency. Never rely on a seller's estimate.</p>
      <div style={s.divider}/><h2 style={s.h2}>Step 3: Calculate MAO</h2>
      <p style={s.p}>Maximum Allowable Offer = (ARV × 0.70) − Rehab Costs. This is your ceiling on the offer. You can offer less — you should never offer more.</p>
      <div style={s.divider}/><h2 style={s.h2}>Step 4: Project Net Profit</h2>
      <p style={s.p}>Net Profit = ARV − Purchase Price − Rehab − Closing Costs (buy + sell) − Holding Costs − Financing Costs. A deal that shows $40k+ net profit on a full analysis is worth pursuing. Under $25k on a typical flip means the risk/reward is marginal.</p>
      <div style={s.divider}/><h2 style={s.h2}>Step 5: Check Exit Strategy</h2>
      <p style={s.p}>Can you wholesale it if the flip doesn't pencil? Can you rent it if the market softens? Deals with multiple viable exits are lower risk than single-exit plays.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Free</div>
        <div style={s.ctaText}>Freddie walks through every step of deal analysis free — any address, any strategy.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has analyzed thousands of deals across Northern Virginia and built FreeDealCalc to systematize the process.</p>
    </div>
  );
}
