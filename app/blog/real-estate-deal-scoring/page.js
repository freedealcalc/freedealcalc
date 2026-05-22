export const revalidate = 2592000;
export const metadata = {
  title: "Real Estate Deal Scoring: How to Grade Any Investment | FreeDealCalc",
  description: "Learn how real estate deal scoring works, what metrics matter most, and how FreeDealCalc grades deals from A to F so you can make faster, smarter decisions.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-deal-scoring' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Score any deal free with Freddie — instant A–F grade with full breakdown.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Score My Deal Free →</a>
  </div>
);
export default function Page() {
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate Deal Scoring: How to Grade Any Investment</h1>
      <div style={s.intro}>Deal scoring takes the subjectivity out of investment decisions. Instead of relying on gut feel, a scoring system grades each deal across multiple metrics — profit margin, ARV confidence, rehab risk, market strength — and produces a single grade you can act on.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>What Goes Into a Deal Score</h2>
      <p style={s.p}>A strong scoring model evaluates: profit margin as a percentage of ARV, confidence in the ARV estimate, rehab risk (scope complexity and contractor availability), market velocity (days on market for comparable properties), and exit strategy flexibility. FreeDealCalc weights these into a 0–100 score with letter grade.</p>
      <div style={s.divider}/><h2 style={s.h2}>What the Grades Mean</h2>
      <p style={s.p}>A (90–100): Strong deal, execute. B (75–89): Good deal with minor concerns, review flagged items. C (60–74): Marginal deal, negotiate harder or walk. D (45–59): Weak deal, significant risk. F (below 45): Pass.</p>
      <div style={s.divider}/><h2 style={s.h2}>Why Scoring Beats Gut Feel</h2>
      <p style={s.p}>Experienced investors develop intuition over dozens of deals. Beginners don't have that library yet. A scoring system forces you to evaluate every dimension of the deal, not just the ones that feel good. It catches the deals that look great on one metric but fail on another.</p>
      <div style={s.divider}/><h2 style={s.h2}>Using Scores to Negotiate</h2>
      <p style={s.p}>A C-grade deal that scores low on profit margin but high on ARV confidence means the purchase price is the problem — negotiate harder. A C-grade deal scoring low on rehab confidence means the scope is uncertain — get a second contractor estimate before you offer.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Free</div>
        <div style={s.ctaText}>Score any deal free with Freddie — instant A–F grade with full breakdown.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Score My Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has analyzed hundreds of deals across Northern Virginia and the Shenandoah Valley.</p>
    </div>
  );
}
