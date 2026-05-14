import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Calculate NOI in Real Estate | FreeDealCalc",
  description: "What net operating income is, how to calculate it, and how it drives property valuation and cap rate analysis.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-calculate-noi-real-estate' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie calculates NOI, cap rate, and cash flow on any rental property — free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Calculate My NOI Free →</a>
  </div>
);
export default async function CalcNOI() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Calculate NOI in Real Estate</h1>
      <div style={s.intro}>Net operating income is the foundation of commercial real estate valuation and a critical metric in rental property analysis. Understanding how to calculate it — and what it tells you — is essential for any serious investor.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>What NOI Is</h2>
      <p style={s.p}>Net operating income equals gross income minus operating expenses, before debt service (mortgage payments). NOI measures the income a property generates from operations alone — independent of how it is financed. Two identical properties with different financing structures have the same NOI but different cash flows after debt service. NOI is the property's operating performance; cash flow is the investor's return after financing.</p>
      <div style={s.formula}><div style={s.formulaText}>NOI = Gross Income - Operating Expenses</div></div>
      <h2 style={s.h2}>What Goes Into Operating Expenses</h2>
      <ul style={s.ul}>
        <li style={s.li}>Property taxes</li>
        <li style={s.li}>Insurance (landlord policy)</li>
        <li style={s.li}>Property management fees (if applicable)</li>
        <li style={s.li}>Repairs and maintenance</li>
        <li style={s.li}>Utilities paid by landlord (water, trash, common area electric)</li>
        <li style={s.li}>CapEx reserves (major system replacements — roof, HVAC, etc.)</li>
        <li style={s.li}>Vacancy allowance (lost rent from vacant periods)</li>
      </ul>
      <p style={s.p}>Note: mortgage principal and interest are NOT operating expenses — they are debt service, which is subtracted after NOI to get cash flow.</p>
      <h2 style={s.h2}>How NOI Drives Valuation</h2>
      <p style={s.p}>Commercial properties are valued using the cap rate formula: Value equals NOI divided by cap rate. If a property generates $60,000 NOI annually and the market cap rate is 6%, the property is worth $1,000,000. This means increasing NOI — through rent increases, expense reduction, or adding income streams — directly increases property value. Every $1,000 of added annual NOI at a 6% cap rate adds $16,667 of property value.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Calculate NOI and Cap Rate Automatically</div>
        <div style={s.ctaText}>Freddie calculates NOI, cap rate, and cash flow on any rental property — free in 60 seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My NOI Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
