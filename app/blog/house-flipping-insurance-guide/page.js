import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "House Flipping Insurance Guide | FreeDealCalc",
  description: "The insurance policies every house flipper needs — builder's risk, vacant property, liability, and what standard policies do not cover.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-flipping-insurance-guide' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Know your flip numbers before you insure — Freddie models profit and carrying costs free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Flip Free →</a>
  </div>
);
export default async function FlippingInsurance() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>House Flipping Insurance: What Every Investor Needs</h1>
      <div style={s.intro}>The wrong insurance on a flip property can leave you completely unprotected when something goes wrong — and something always goes wrong eventually. Here is the coverage every house flipper needs and the gaps most investors do not know they have.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Builder's Risk Insurance</h2>
      <p style={s.p}>Builder's risk insurance is the primary coverage for properties under active renovation. It covers damage during construction — fire, theft, vandalism, storm damage, and collapse. Standard homeowners insurance explicitly excludes vacant properties under renovation. Cost: $800–$2,000 per year or $100–$200 per month for a typical flip. Required by virtually all hard money lenders as a condition of the loan.</p>
      <h2 style={s.h2}>Vacant Property Insurance</h2>
      <p style={s.p}>Between acquisition and the start of renovation, and again between completion and closing, your property may be vacant and not technically under construction. Vacant property policies cover this gap. Many builder's risk policies cover vacancy periods — confirm with your carrier. Do not assume your coverage is continuous without verifying the specific policy terms.</p>
      <h2 style={s.h2}>General Liability</h2>
      <p style={s.p}>Anyone who enters your property — contractors, inspectors, potential buyers, neighbors — can sue you if they are injured. General liability coverage of $1M+ protects you against these claims. Your builder's risk policy may include general liability — verify the limit. If it does not, add a separate GL policy. The cost is minimal; the exposure without it is not.</p>
      <h2 style={s.h2}>Contractor Insurance Requirements</h2>
      <p style={s.p}>Require every contractor who works on your properties to carry their own general liability (minimum $1M) and workers compensation insurance. Get certificates of insurance before any contractor starts work. A contractor who injures themselves or their employee on your site may sue you if they lack their own coverage. This is a non-negotiable requirement on every flip.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Know Your Flip Numbers First</div>
        <div style={s.ctaText}>Model flip profit, carrying costs, and timeline on any deal. Freddie runs it free before you commit.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Flip Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
