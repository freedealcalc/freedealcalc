import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "The BRRRR Method Step by Step | FreeDealCalc",
  description: "A complete step-by-step guide to executing the BRRRR strategy — from buying distressed to refinancing and repeating. Real numbers and timelines.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/brrrr-method-step-by-step' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie calculates BRRRR returns — ARV, refinance proceeds, and cash flow free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Run My BRRRR Numbers →</a>
  </div>
);
export default async function BRRRRStepByStep() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>The BRRRR Method Step by Step</h1>
      <div style={s.intro}>BRRRR — Buy, Rehab, Rent, Refinance, Repeat — is the most powerful wealth-building strategy in real estate investing. Done correctly, it lets you recycle the same capital into multiple properties. Done wrong, it traps capital and leaves you with a property that still requires cash infusions.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Step 1 — Buy Below Market Value</h2>
      <p style={s.p}>The BRRRR strategy starts with acquisition. You must buy significantly below ARV to create the equity that the refinance will pull out. Target properties at 60–70% of ARV before rehab. If a property is worth $200k renovated, your maximum purchase price is $120k–$140k. At 75% LTV refinance, you can pull out $150k — covering your purchase and most of your rehab if you bought right.</p>
      <h2 style={s.h2}>Step 2 — Rehab to Rent-Ready Standard</h2>
      <p style={s.p}>BRRRR rehab is not a flip rehab. You do not need quartz countertops and designer fixtures — you need a clean, functional, durable rental-grade renovation. Focus on mechanicals, LVP flooring, functional kitchen and baths, and curb appeal. Average BRRRR rehab runs $25k–$60k depending on property size and condition.</p>
      <h2 style={s.h2}>Step 3 — Rent for Market Rate</h2>
      <p style={s.p}>Find a tenant before you finish the rehab. List the property 30 days before your projected completion date and accept applications. A vacant property during the refinance process costs you carrying costs and weakens your refinance case — lenders want to see a lease in place. Target rent that covers PITI plus 20% for repairs and vacancy.</p>
      <h2 style={s.h2}>Step 4 — Refinance to Pull Capital</h2>
      <p style={s.p}>After 6–12 months of seasoning (most DSCR lenders require 6 months of rental history), refinance into a DSCR loan at 70–75% LTV. Use the appraised ARV — which should now reflect your completed renovation. The cash out from the refinance replenishes your capital for the next deal.</p>
      <div style={s.formula}><div style={s.formulaText}>Cash-Out = ARV x 0.75 - Existing Loan Balance</div></div>
      <h2 style={s.h2}>Step 5 — Repeat</h2>
      <p style={s.p}>With capital recycled, find the next property and repeat. Each completed BRRRR leaves behind a cash-flowing rental with equity. Over 5–10 years of consistent execution, a BRRRR investor can build a portfolio of 10–20 properties starting from a single $50k–$100k capital base.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your BRRRR Deal Free</div>
        <div style={s.ctaText}>Freddie calculates BRRRR strategy returns — ARV, refinance proceeds, monthly cash flow, and total ROI. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Run My BRRRR Numbers →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
