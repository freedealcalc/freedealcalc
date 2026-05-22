export const revalidate = 2592000;
export const metadata = {
  title: "The 70% Rule Explained: House Flipping Formula | FreeDealCalc",
  description: "The 70% rule is the foundation of house flip deal analysis. Learn how it works, when to adjust it, and how to calculate your maximum allowable offer on any flip.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/70-percent-rule-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Run the 70% rule on any deal automatically with Freddie — free deal analysis in seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Run the 70% Rule Free →</a>
  </div>
);
export default function Page() {
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>The 70% Rule Explained: House Flipping Formula</h1>
      <div style={s.intro}>The 70% rule is the most widely used formula in house flipping. It tells you the maximum you should pay for a property before factoring in rehab costs. Master it and you'll never overpay for a flip.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>The Formula</h2>
      <p style={s.p}>Maximum Offer = (ARV × 0.70) − Estimated Rehab Costs. Example: $300k ARV, $40k rehab → ($300k × 0.70) − $40k = $170k max offer. Everything above $170k eats into your profit margin.</p>
      <div style={s.divider}/><h2 style={s.h2}>Why 70%?</h2>
      <p style={s.p}>The 30% buffer accounts for: closing costs on purchase and sale (6–8%), holding costs during rehab and listing (4–6%), realtor commissions (5–6%), and profit margin (10–15%). Miss any of these and the deal stops working.</p>
      <div style={s.divider}/><h2 style={s.h2}>When to Adjust the Percentage</h2>
      <p style={s.p}>In high-cost markets with very high ARVs, experienced investors sometimes use 65% to add more buffer. In strong seller's markets with fast turnover and low carrying costs, 72–75% can work. Beginners should stay at 70% or lower until they have 5+ completed flips.</p>
      <div style={s.divider}/><h2 style={s.h2}>ARV Is the Critical Variable</h2>
      <p style={s.p}>The formula is only as good as your ARV estimate. Pull comps within 0.5 miles, same property type, sold within 90 days, similar condition after renovation. One bad ARV estimate blows up the entire calculation.</p>
      <div style={s.divider}/><h2 style={s.h2}>The 70% Rule vs MAO Calculator</h2>
      <p style={s.p}>The MAO (Maximum Allowable Offer) calculator adds more line items — financing costs, specific closing costs, desired profit. It's more precise than the quick 70% rule. Use the 70% rule to quickly screen deals, then run a full MAO calculation on anything that passes.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Free</div>
        <div style={s.ctaText}>Run the 70% rule on any deal automatically with Freddie — free deal analysis in seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Run the 70% Rule Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. Dan White is a fix-and-flip investor with 20+ years of experience and founder of FreeDealCalc.com.</p>
    </div>
  );
}
