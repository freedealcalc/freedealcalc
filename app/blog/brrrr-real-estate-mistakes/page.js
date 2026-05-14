import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "BRRRR Real Estate Mistakes Investors Make | FreeDealCalc",
  description: "The most common BRRRR mistakes — overpaying, underestimating rehab, bad tenant selection, and refinance surprises. How to avoid each one.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/brrrr-real-estate-mistakes' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Model your BRRRR before you buy — Freddie shows refinance proceeds and cash flow free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Model My BRRRR Deal →</a>
  </div>
);
export default async function BRRRRMistakes() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>BRRRR Real Estate Mistakes That Kill Deals</h1>
      <div style={s.intro}>BRRRR is powerful but unforgiving. One mistake in the buy, the rehab, or the refinance can trap capital instead of recycle it. These are the failure modes that hurt BRRRR investors most — and how to protect against them.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Mistake 1: Overpaying at Acquisition</h2>
      <p style={s.p}>The BRRRR formula requires buying low enough that your refinance pulls out your full investment. If you pay too much at acquisition there is not enough equity for the refinance to recover your capital. Most experienced BRRRR investors target 60–70% of ARV at purchase. Paying 78% of ARV on a BRRRR makes the math very difficult unless your rehab adds exceptional value.</p>
      <h2 style={s.h2}>Mistake 2: Rehab Scope Creep</h2>
      <p style={s.p}>BRRRR rehab is a rental rehab, not a flip rehab. When investors start adding high-end finishes that tenants will not pay extra rent for, the rehab cost climbs without a corresponding rent increase. Stick to the scope that produces market-rate rent — nothing more. Every dollar over that number reduces your refinance return without improving your cash flow.</p>
      <h2 style={s.h2}>Mistake 3: Underestimating Refinance Requirements</h2>
      <p style={s.p}>DSCR refinances have stricter requirements than many investors expect. The property must appraise at the value you are modeling. The DSCR ratio (rent income divided by PITI) typically must be 1.20–1.25x. Some lenders require 12 months of seasoning. Know your refinance lender requirements before you buy — not after you complete the rehab.</p>
      <h2 style={s.h2}>Mistake 4: Bad Tenant Selection</h2>
      <p style={s.p}>A bad tenant in a BRRRR property creates multiple problems: missed rent hurts DSCR ratios needed for refinance, damage increases operating costs, and eviction delays create months of lost income. Screen every tenant rigorously — credit, income verification, landlord references. A two-week vacant period while you find the right tenant is better than a six-month eviction nightmare.</p>
      <h2 style={s.h2}>Mistake 5: Treating the Refinance as Guaranteed</h2>
      <p style={s.p}>Many BRRRR investors model the refinance as a certainty when it is actually a risk. Markets can soften between purchase and refinance. Appraisers can come in below expectations. Plan for the refinance to come in at 80–90% of what you modeled and make sure the deal still makes sense at that reduced level.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Model Your BRRRR Before You Buy</div>
        <div style={s.ctaText}>Freddie runs BRRRR scenarios including refinance proceeds and monthly cash flow. Avoid surprises — analyze free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Model My BRRRR Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
