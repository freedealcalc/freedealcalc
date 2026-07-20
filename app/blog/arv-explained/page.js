export const revalidate = 2592000;
export const metadata = {
  title: "ARV Explained: After Repair Value in Real Estate",
  description: "ARV (After Repair Value) is the most important number in real estate investing.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/arv-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Let Freddie pull ARV comps for any address — free real-time market data.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Get My ARV Free →</a>
  </div>
);
export default function Page() {
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>ARV Explained: After Repair Value in Real Estate</h1>
      <div style={s.intro}>ARV — After Repair Value — is the estimated market value of a property after all planned renovations are complete. It's the foundation of every flip calculation, wholesale deal, and BRRRR analysis. Get it right and deals work. Get it wrong and you lose money regardless of everything else.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>How ARV Is Calculated</h2>
      <p style={s.p}>ARV is estimated by pulling comparable sales (comps) — recently sold properties similar in size, style, age, and condition to your subject property after renovation. Adjust for differences: square footage, bed/bath count, garage, lot size, condition. The weighted average of your best comps is your ARV.</p>
      <div style={s.divider}/><h2 style={s.h2}>The Right Comp Criteria</h2>
      <p style={s.p}>Same property type (colonial to colonial, ranch to ranch). Within 0.5 miles in urban/suburban areas, 1 mile in rural. Sold within 90 days. Similar square footage (within 15%). Same school district. Post-renovation condition — use comps that sold as fully updated, not distressed.</p>
      <div style={s.divider}/><h2 style={s.h2}>Common ARV Mistakes</h2>
      <p style={s.p}>Using comps that are too far away. Using comps that sold too long ago in a moving market. Comparing a ranch to a two-story colonial. Ignoring school district lines. Assuming your renovation will match the highest comps when it won't.</p>
      <div style={s.divider}/><h2 style={s.h2}>ARV vs List Price vs Assessed Value</h2>
      <p style={s.p}>ARV is not the seller's asking price, the tax assessed value, or what Zillow shows. It's what comparable renovated properties have actually sold for. Only closed sales count.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Free</div>
        <div style={s.ctaText}>Let Freddie pull ARV comps for any address — free real-time market data.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Get My ARV Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been calculating ARVs across Northern Virginia and the Shenandoah Valley for 20+ years.</p>
    </div>
  );
}
