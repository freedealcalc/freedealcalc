import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Calculate Cash Flow on a Rental Property",
  description: "Step-by-step guide to calculating rental property cash flow. Every income and expense line item, with a worked example and free calculator.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-calculate-cash-flow-rental-property' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie calculates rental cash flow automatically on any address — free in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Calculate My Rental Cash Flow →</a>
  </div>
);
export default async function CalcCashFlow() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Calculate Cash Flow on a Rental Property</h1>
      <div style={s.intro}>Cash flow is the lifeblood of rental property investing — but most new investors calculate it wrong, leaving out expense categories that turn positive cash flow projections into negative reality. Here is the complete calculation.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Step 1: Gross Scheduled Income</h2>
      <p style={s.p}>Start with annual gross scheduled income (GSI) — what the property would earn if fully rented at market rates all year. For a single-family home renting at $1,800/month: GSI equals $1,800 times 12 equals $21,600. This is the starting point, not the finish line.</p>
      <h2 style={s.h2}>Step 2: Subtract Vacancy</h2>
      <p style={s.p}>Multiply GSI by your vacancy rate. In tight markets, 5% (0.5 months vacant per year) is reasonable. In softer markets, use 8–10%. On our $21,600 GSI at 5% vacancy: $21,600 minus $1,080 equals $20,520 effective gross income.</p>
      <h2 style={s.h2}>Step 3: Subtract Operating Expenses</h2>
      <p style={s.p}>Operating expenses typically run 35–50% of effective gross income. Line items include: property taxes, insurance, repairs and maintenance (budget 1% of property value annually), property management (8–12% of collected rent if outsourced), CapEx reserve (budget 5–10% of gross for major system replacements), and utilities paid by landlord. On our example at 40% expenses: $20,520 times 0.40 equals $8,208 in operating expenses.</p>
      <div style={s.formula}><div style={s.formulaText}>NOI = Effective Gross Income - Operating Expenses</div></div>
      <p style={s.p}>NOI: $20,520 minus $8,208 equals $12,312 per year.</p>
      <h2 style={s.h2}>Step 4: Subtract Debt Service</h2>
      <p style={s.p}>Subtract your annual mortgage payment (principal and interest only — taxes and insurance are already in operating expenses). On a $140k loan at 7% for 30 years: annual P&I is approximately $11,172. Cash flow: $12,312 minus $11,172 equals $1,140 per year ($95/month). Positive but thin — typical for current rate environments in mid-tier markets.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Calculate Rental Cash Flow Automatically</div>
        <div style={s.ctaText}>Freddie calculates rental cash flow on any address — all income and expense lines, free in 60 seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Rental Cash Flow →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
