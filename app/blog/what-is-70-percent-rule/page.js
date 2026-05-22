export const revalidate = 2592000;
export const metadata = {
  title: "What Is the 70% Rule in Real Estate? | FreeDealCalc",
  description: "The 70% rule is the most widely used formula in house flipping. Learn what it means, how to calculate your maximum offer, and when experienced investors adjust the percentage.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-70-percent-rule' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Apply the 70% rule to any deal automatically — free analysis with Freddie.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Run the 70% Rule →</a>
  </div>
);
export default function Page() {
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>What Is the 70% Rule in Real Estate?</h1>
      <div style={s.intro}>The 70% rule is a quick formula real estate investors use to calculate the maximum they should pay for a fix-and-flip property. It exists to protect your profit margin against the costs and risks of renovation and resale.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>The Formula</h2>
      <p style={s.p}>Maximum Offer = (ARV × 0.70) − Rehab Costs. ARV is the after-repair value — what the property will sell for fully renovated. Rehab is your estimated renovation cost. The formula tells you the ceiling on your offer price.</p>
      <div style={s.divider}/><h2 style={s.h2}>Why the 30% Buffer Exists</h2>
      <p style={s.p}>The 30% buffer covers: closing costs on purchase (1–2%), closing costs and commissions on sale (7–9%), holding costs during rehab and listing (4–6%), and your profit margin (10–15%). These costs are real and unavoidable.</p>
      <div style={s.divider}/><h2 style={s.h2}>Example Calculation</h2>
      <p style={s.p}>ARV $350k, estimated rehab $55k. Max offer = ($350k × 0.70) − $55k = $245k − $55k = $190k. If the seller wants $210k, either negotiate down or walk. Never rationalize paying above your MAO.</p>
      <div style={s.divider}/><h2 style={s.h2}>When to Use 65% Instead</h2>
      <p style={s.p}>In slower markets, higher-risk rehabs, or when you're less experienced, use 65% to build a larger buffer. The rule is a guide, not a mandate — adjust based on deal-specific risk.</p>
      <div style={s.divider}/><h2 style={s.h2}>The 70% Rule Is Not Enough</h2>
      <p style={s.p}>The 70% rule is a screening tool, not a full deal analysis. Once a deal passes the 70% screen, run a complete profit model: full acquisition costs, itemized rehab, carrying costs by month, financing costs, and realistic sale price. The 70% rule gets you to the conversation; full analysis confirms it.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Free</div>
        <div style={s.ctaText}>Apply the 70% rule to any deal automatically — free analysis with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Run the 70% Rule →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has applied the 70% rule to hundreds of deals across Northern Virginia.</p>
    </div>
  );
}
