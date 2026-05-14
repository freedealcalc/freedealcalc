import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Calculate Depreciation on Rental Property: 2026 Guide | FreeDealCalc",
  description: "Step-by-step guide to calculating depreciation on rental property. Learn straight-line depreciation, how to find your depreciable basis, and how to maximize this tax deduction.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-calculate-depreciation-rental-property' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (<div style={s.cta}><div style={s.ctaTitle}>Skip the math — Freddie calculates this for you free in 60 seconds.</div><div style={s.ctaText}>Enter any address and get a complete deal analysis including all the key metrics covered here.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>);
export default async function Page() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <div style={s.meta}><span style={s.metaText}>How to Calculate</span><span style={s.dot}/><span style={s.metaText}>Investor Math</span></div>
      <h1 style={s.h1}>How to Calculate Depreciation on Rental Property</h1>
      <p style={s.intro}>Depreciation is one of the most powerful tax benefits of owning rental property — it reduces your taxable income without requiring any cash outlay. Understanding how to calculate it correctly ensures you're claiming every dollar you're entitled to and not leaving money on the table at tax time.</p>
      <TopCTA />
      <h2 style={s.h2}>What Is Rental Property Depreciation?</h2>
      <p style={s.p}>The IRS allows you to deduct the cost of rental property over its useful life. For residential rental property, that's 27.5 years. For commercial property, it's 39 years. You spread the building value (not land) across those years in equal annual deductions. This is called straight-line depreciation.</p>
      <h2 style={s.h2}>The Depreciation Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>Annual Depreciation = Depreciable Basis ÷ 27.5 (residential) or 39 (commercial)</div></div>
      <h2 style={s.h2}>Step 1: Determine Your Depreciable Basis</h2>
      <p style={s.p}>Your depreciable basis is the building value only — land is not depreciable. Start with your purchase price, then subtract land value. County tax records typically show the split between land and improvement value. For example: $300,000 purchase price, $40,000 land value = $260,000 depreciable basis.</p>
      <p style={s.p}>Add to your basis: closing costs attributable to the property, any capital improvements made before placing the property in service. Subtract: any seller-paid points or credits that reduce your basis.</p>
      <h2 style={s.h2}>Step 2: Calculate Annual Depreciation</h2>
      <p style={s.p}>Divide your depreciable basis by 27.5 years. Example: $260,000 ÷ 27.5 = $9,454.55 per year in depreciation deductions. This reduces your taxable rental income by $9,454 annually — at a 32% tax bracket, that's a $3,025 annual tax saving from depreciation alone.</p>
      <h2 style={s.h2}>Partial Year Depreciation</h2>
      <p style={s.p}>In the year you place property in service, you only get a partial year of depreciation based on the month you started renting. The IRS uses the mid-month convention — property placed in service in March earns depreciation for 9.5 months of the first year.</p>
      <h2 style={s.h2}>Tracking Depreciation Over Time</h2>
      <p style={s.p}>Keep a depreciation schedule that tracks the original basis, annual deductions taken, and accumulated depreciation. This is critical for calculating depreciation recapture when you eventually sell. Your tax software or CPA should maintain this schedule for you.</p>
      <div style={s.cta}><div style={s.ctaTitle}>Calculate Your Rental Property Numbers Free</div><div style={s.ctaText}>Freddie analyzes rental properties for cash flow, cap rate, and deal score — free for any address.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Analyze My Rental</a></div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
