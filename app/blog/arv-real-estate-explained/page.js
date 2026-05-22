export const revalidate = 2592000;
export const metadata = {
  title: "ARV in Real Estate: Complete Guide to After Repair Value | FreeDealCalc",
  description: "After Repair Value (ARV) is the cornerstone of every flip and wholesale deal. Learn how to calculate it accurately, what comps to use, and how to avoid the mistakes that cost investors money.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/arv-real-estate-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Get real-time ARV data on any address free — Freddie pulls live comps instantly.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Get My ARV Now →</a>
  </div>
);
export default function Page() {
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>ARV in Real Estate: Complete Guide to After Repair Value</h1>
      <div style={s.intro}>After Repair Value is the single most important number in real estate investing. Every other calculation — your offer price, your rehab budget, your profit projection — depends on getting ARV right. One bad ARV estimate can turn a profitable deal into a loss.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>What ARV Means</h2>
      <p style={s.p}>ARV is the estimated market value of a property after all planned renovations are complete and the property is in sellable condition. It's not current value, assessed value, or Zillow's estimate — it's what comparable renovated properties have actually sold for recently.</p>
      <div style={s.divider}/><h2 style={s.h2}>How to Pull Accurate Comps</h2>
      <p style={s.p}>Use MLS closed sales only. Filter: same property type, within 0.5 miles (1 mile rural), sold in last 90 days, similar square footage (±15%), same school district. Look for comps in updated/renovated condition. Adjust for bed/bath differences, garage, lot size.</p>
      <div style={s.divider}/><h2 style={s.h2}>The Adjustment Process</h2>
      <p style={s.p}>No two comps are identical. Adjust for differences: each bedroom ±$10k–$20k depending on market, garage ±$15k–$25k, square footage ±$50–$100/sqft, lot size varies. Weight your most similar comps most heavily.</p>
      <div style={s.divider}/><h2 style={s.h2}>ARV Mistakes That Kill Deals</h2>
      <p style={s.p}>Using listings instead of closed sales. Using comps more than 90 days old in a moving market. Ignoring school district lines. Comparing different property styles. Assuming your renovation matches the highest comp when scope doesn't support it.</p>
      <div style={s.divider}/><h2 style={s.h2}>ARV vs Appraised Value</h2>
      <p style={s.p}>Your ARV estimate and a formal appraisal can differ by 5–15%. Lenders use appraised value for financing purposes. Build in a buffer — if your ARV is $350k, underwrite to $325k–$335k to account for appraisal variance.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Free</div>
        <div style={s.ctaText}>Get real-time ARV data on any address free — Freddie pulls live comps instantly.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Get My ARV Now →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been calculating ARV on deals across Northern Virginia for over 20 years.</p>
    </div>
  );
}
