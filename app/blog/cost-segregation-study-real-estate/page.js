import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Cost Segregation Study for Real Estate: How | FreeDealCalc",
  description: "A cost segregation study can generate massive first-year tax deductions on investment property.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/cost-segregation-study-real-estate' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (<div style={s.cta}><div style={s.ctaTitle}>Run any deal through Freddie — free analysis in 60 seconds.</div><div style={s.ctaText}>Flip, rental, BRRRR, or wholesale — Freddie handles all four strategies for any address.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>);
export default async function Page() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <div style={s.meta}><span style={s.metaText}>Tax Strategy</span><span style={s.dot}/><span style={s.metaText}>2026</span></div>
      <h1 style={s.h1}>Cost Segregation Study for Real Estate: How to Accelerate Depreciation</h1>
      <p style={s.intro}>A cost segregation study can transform your real estate investment from a passive income stream into a tax-offsetting machine. By reclassifying building components into shorter depreciation schedules — 5, 7, and 15 years instead of 27.5 or 39 — investors can take massive front-loaded depreciation deductions that offset active income and supercharge after-tax returns.</p>
      <TopCTA />
      <h2 style={s.h2}>How Depreciation Works in Real Estate</h2>
      <p style={s.p}>The IRS allows real estate investors to deduct depreciation on investment properties: residential property over 27.5 years, commercial over 39 years. On a $300,000 building, that's about $10,909/year in depreciation for residential. While valuable, this slow depreciation schedule understates the actual economic wear and tear on specific components that depreciate much faster.</p>
      <h2 style={s.h2}>What a Cost Segregation Study Does</h2>
      <p style={s.p}>A cost segregation study, performed by an engineering firm, breaks the property down into its individual components and reclassifies them into appropriate depreciation categories. Carpet, appliances, and certain fixtures: 5-year property. Landscaping, parking lots, certain site improvements: 15-year property. Only the structural building shell remains at 27.5/39 years.</p>
      <h2 style={s.h2}>The Impact: An Example</h2>
      <div style={s.formula}><div style={s.formulaText}>$400K property → $120K reclassified to 5/15-year → Year 1 deduction: $24,000–$120,000 (with bonus depreciation)</div></div>
      <p style={s.p}>With 60% bonus depreciation available in 2026, the reclassified 5 and 15-year property can be deducted in Year 1. On a $400K acquisition with $120K reclassified, that's potentially $72,000 in additional Year 1 depreciation — a $25,000–$35,000 tax benefit at typical investor tax rates.</p>
      <h2 style={s.h2}>When Cost Segregation Makes Sense</h2>
      <ul style={s.ul}>
        <li style={s.li}>Properties with acquisition price of $250,000+ (cost segregation cost is not worth it on cheaper properties)</li>
        <li style={s.li}>Investors with real estate professional status or passive income to offset</li>
        <li style={s.li}>Commercial properties with significant tenant improvements</li>
        <li style={s.li}>New construction where component costs are well-documented</li>
        <li style={s.li}>Properties with high personal property content: hotels, medical offices, retail</li>
      </ul>
      <h2 style={s.h2}>Cost of a Cost Segregation Study</h2>
      <p style={s.p}>Cost segregation studies typically run $3,000–$15,000 depending on property size, type, and complexity. The ROI is almost always positive on investment properties above $300,000 in value — a $5,000 study that generates $30,000 in additional Year 1 deductions is a clear winner.</p>
      <div style={s.cta}><div style={s.ctaTitle}>Analyze Your Real Estate Investment Free</div><div style={s.ctaText}>Freddie helps you run the deal numbers before you close — ARV, deal score, cash flow, and more. Free.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
