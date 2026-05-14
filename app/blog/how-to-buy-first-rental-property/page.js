import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Buy Your First Rental Property | FreeDealCalc",
  description: "Step-by-step guide to buying your first rental property. Financing options, property selection, screening tenants, and what to expect in year one.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-buy-first-rental-property' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Model cash flow and returns on any rental before you buy — Freddie runs it free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Rental Deal Free →</a>
  </div>
);
export default async function FirstRentalProperty() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Buy Your First Rental Property</h1>
      <div style={s.intro}>Buying your first rental property is the hardest step in building a real estate portfolio — not because the process is complicated, but because the mental shift from homebuyer to investor requires thinking in numbers rather than emotions. Here is the step-by-step process to do it right.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Step 1 — Define Your Investment Criteria</h2>
      <p style={s.p}>Before you look at a single property, define your buy box: target price range, required cash-on-cash return, acceptable neighborhoods, property types, and distance from your home. Investors without defined criteria buy emotionally and wonder why the numbers do not work. Your criteria are your filter — and they will eliminate 90% of properties before you ever visit them.</p>
      <h2 style={s.h2}>Step 2 — Understand Financing</h2>
      <p style={s.p}>Investment property conventional loans require 20–25% down and carry rates 0.5–1% above primary residence rates. FHA loans are available for owner-occupants buying 2–4 unit properties — if you are willing to house-hack, this is the most powerful financing tool available. DSCR loans require no income verification but typically need 20–25% down and base qualification on rent income vs payment.</p>
      <h2 style={s.h2}>Step 3 — Run the Numbers on Every Deal</h2>
      <p style={s.p}>Every property you consider needs a full financial analysis before you make an offer. Calculate gross rent, subtract vacancy (5–10%), subtract operating expenses (30–40% of gross rent as a rule of thumb), and subtract mortgage payment. The result is monthly cash flow. Divide annual net income by total cash invested — that is your cash-on-cash return. Most investors target 6–10% CoC on first rentals.</p>
      <h2 style={s.h2}>Step 4 — Make Your Offer and Close</h2>
      <p style={s.p}>Once you have found a property that meets your criteria, move quickly. Your inspection focuses on major systems — HVAC, roof, electrical, plumbing — and potential deal-killers. Negotiate repair credits rather than seller repairs when possible — you want control of the scope.</p>
      <h2 style={s.h2}>Year One Expectations</h2>
      <p style={s.p}>Year one is the hardest. You will have unexpected maintenance, potential vacancy, and the learning curve of being a landlord. Budget a 10% operating expense buffer above your model. Most landlords are cash-flow positive by month 12 once the property is stabilized and initial deferred maintenance is addressed.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Rental Property Deals Free</div>
        <div style={s.ctaText}>Model cash flow, cap rate, and cash-on-cash return on any rental before you buy. Freddie runs it free in 60 seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Rental Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
