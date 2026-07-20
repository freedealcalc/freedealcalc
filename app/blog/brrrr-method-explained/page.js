export const revalidate = 2592000;
export const metadata = {
  title: "The BRRRR Method Explained: Real Estate Strategy",
  description: "The BRRRR method — Buy, Rehab, Rent, Refinance, Repeat — is the most capital-efficient path to building a rental portfolio.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/brrrr-method-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any BRRRR deal free — model your cash-out refi and leftover equity in seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My BRRRR Deal →</a>
  </div>
);
export default function Page() {
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>The BRRRR Method Explained</h1>
      <div style={s.intro}>BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. It's the strategy that lets real estate investors build a rental portfolio without continuously adding new capital — you recycle the same dollars across multiple deals by pulling equity out in a cash-out refinance after each project.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>How BRRRR Works Step by Step</h2>
      <p style={s.p}>Buy distressed below market. Rehab to rentable condition. Rent to establish income. Refinance at the new appraised value to pull out your invested capital. Repeat with the recycled capital on the next deal.</p>
      <div style={s.divider}/><h2 style={s.h2}>The Math That Makes It Work</h2>
      <p style={s.p}>Buy $120k + Rehab $40k = $160k all-in. After-repair value $220k. Cash-out refi at 75% LTV = $165k. You pull out $165k on a $160k investment — recovering 100%+ of your capital while keeping the property and its cash flow.</p>
      <div style={s.divider}/><h2 style={s.h2}>When BRRRR Works Best</h2>
      <p style={s.p}>BRRRR works best in markets where you can buy significantly below ARV, where rental demand is strong enough to satisfy DSCR requirements for the refi, and where appreciation supports the post-rehab appraisal. Thin margin markets make the refi math difficult.</p>
      <div style={s.divider}/><h2 style={s.h2}>The DSCR Refi Requirement</h2>
      <p style={s.p}>Most cash-out refis on investment properties require 1.25x DSCR — the property's monthly rent must be 125% of PITI. Run this calculation before you buy. If the rental income won't support the refinanced loan amount, the BRRRR math breaks.</p>
      <div style={s.divider}/><h2 style={s.h2}>BRRRR Risks</h2>
      <p style={s.p}>Over-rehab that doesn't appraise. Appraisals coming in below expectations. Rental market softness reducing DSCR. Refinance rates moving against you between purchase and refi. Model conservative scenarios before you commit to the strategy.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Free</div>
        <div style={s.ctaText}>Analyze any BRRRR deal free — model your cash-out refi and leftover equity in seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My BRRRR Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has executed BRRRR deals across Northern Virginia and the Shenandoah Valley.</p>
    </div>
  );
}
