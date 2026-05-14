import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Calculate Net Operating Income (NOI) for Rental Property | FreeDealCalc",
  description: "Net operating income is the foundation of all income property valuation. Learn how to calculate NOI correctly, what to include and exclude, and how it drives cap rate and property value.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-calculate-net-operating-income' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (<div style={s.cta}><div style={s.ctaTitle}>Skip the math — Freddie calculates this for you free in 60 seconds.</div><div style={s.ctaText}>Enter any address and get a complete deal analysis including all the key metrics covered here.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>);
export default async function Page() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <div style={s.meta}><span style={s.metaText}>How to Calculate</span><span style={s.dot}/><span style={s.metaText}>Investor Math</span></div>
      <h1 style={s.h1}>How to Calculate Net Operating Income (NOI) for Rental Property</h1>
      <p style={s.intro}>Net operating income is the starting point for all income property analysis. Lenders use it for DSCR qualification, investors use it for cap rate valuation, and property managers use it to track performance. Getting NOI right is the foundation of everything else in rental property investing.</p>
      <TopCTA />
      <h2 style={s.h2}>The NOI Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>NOI = Gross Potential Income − Vacancy Allowance − Operating Expenses</div></div>
      <h2 style={s.h2}>Gross Potential Income</h2>
      <p style={s.p}>All rent revenue if 100% occupied at market rents. Include base rent, pet fees, parking income, laundry income, and any other recurring property revenue. Do not include security deposits (not income) or reimbursed expenses.</p>
      <h2 style={s.h2}>Vacancy and Credit Loss</h2>
      <p style={s.p}>Standard vacancy allowance is 5% for stable markets, 8–10% for transitional or high-turnover properties. Apply as: Gross Potential Income × Vacancy Rate = Vacancy Allowance. NOI analysis typically uses an economic vacancy rate — even if your property is currently 100% occupied, assume some vacancy in your long-term analysis.</p>
      <h2 style={s.h2}>Operating Expenses — What to Include</h2>
      <ul style={s.ul}>
        <li style={s.li}>Property taxes</li>
        <li style={s.li}>Insurance (landlord policy, not renter's)</li>
        <li style={s.li}>Property management fees (8–12% of collected rent if using a manager)</li>
        <li style={s.li}>Repairs and maintenance (typically 1% of property value annually)</li>
        <li style={s.li}>Capital expenditure reserve (1–2% of property value annually for major systems)</li>
        <li style={s.li}>Utilities paid by landlord</li>
        <li style={s.li}>HOA fees</li>
        <li style={s.li}>Administrative costs (accounting, legal)</li>
      </ul>
      <h2 style={s.h2}>What NOT to Include in NOI</h2>
      <ul style={s.ul}>
        <li style={s.li}>Mortgage payments (debt service) — NOI is pre-financing</li>
        <li style={s.li}>Depreciation — non-cash item, not an operating expense</li>
        <li style={s.li}>Income taxes — NOI is pre-tax</li>
        <li style={s.li}>Capital improvements — these go on the balance sheet, not the P&L</li>
      </ul>
      <h2 style={s.h2}>Using NOI to Determine Value</h2>
      <p style={s.p}>Property value = NOI ÷ Cap Rate. A property with $25,000 NOI in a 6.5% cap rate market has a value of $384,615. This is how commercial brokers price income property — and why NOI accuracy is critical if you're buying based on income.</p>
      <div style={s.cta}><div style={s.ctaTitle}>Calculate NOI and Cap Rate Free</div><div style={s.ctaText}>Freddie calculates NOI, cap rate, and cash flow for any rental property address — free, instant, no account.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Analyze My Rental Property</a></div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
