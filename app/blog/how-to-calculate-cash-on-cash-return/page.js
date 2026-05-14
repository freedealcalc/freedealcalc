import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Calculate Cash-on-Cash Return for Rental Property | FreeDealCalc",
  description: "Cash-on-cash return measures your actual cash yield on invested capital. Learn the formula, what counts as cash in and cash out, and how to compare rental properties accurately.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-calculate-cash-on-cash-return' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (<div style={s.cta}><div style={s.ctaTitle}>Skip the math — Freddie calculates this for you free in 60 seconds.</div><div style={s.ctaText}>Enter any address and get a complete deal analysis including all the key metrics covered here.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>);
export default async function Page() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <div style={s.meta}><span style={s.metaText}>How to Calculate</span><span style={s.dot}/><span style={s.metaText}>Investor Math</span></div>
      <h1 style={s.h1}>How to Calculate Cash-on-Cash Return for Rental Property</h1>
      <p style={s.intro}>Cash-on-cash return (CoC) is one of the most important metrics for rental property investors because it measures your actual cash yield on the money you invested — not the total property value. It's the metric that answers the question every investor actually cares about: what am I getting back on my dollars invested?</p>
      <TopCTA />
      <h2 style={s.h2}>The Cash-on-Cash Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>Cash-on-Cash Return = Annual Pre-Tax Cash Flow ÷ Total Cash Invested × 100</div></div>
      <h2 style={s.h2}>What Goes in the Numerator: Annual Cash Flow</h2>
      <p style={s.p}>Annual pre-tax cash flow = Gross Rental Income − Vacancy Allowance − Operating Expenses − Annual Mortgage Payments. Include all cash out: property management, taxes, insurance, maintenance, capex reserves, utilities, HOA. Do NOT include depreciation (non-cash), principal paydown (equity, not cash flow), or income taxes.</p>
      <h2 style={s.h2}>What Goes in the Denominator: Total Cash Invested</h2>
      <p style={s.p}>Total cash invested = Down payment + Closing costs + Rehab costs + Holding costs during renovation. This is ALL the cash you actually deployed to acquire and prepare the property.</p>
      <h2 style={s.h2}>Example Cash-on-Cash Calculation</h2>
      <p style={s.p}>Down payment: $60,000. Closing costs: $3,000. Rehab: $12,000. Total cash invested: $75,000. Annual gross rent: $22,800. Vacancy (5%): −$1,140. Operating expenses: −$7,980. Annual mortgage P&I: −$10,320. Annual cash flow: $3,360. CoC = $3,360 ÷ $75,000 = 4.5%.</p>
      <h2 style={s.h2}>What Is a Good Cash-on-Cash Return?</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>4–6%:</strong> Below average in most markets — acceptable only in high-appreciation areas</li>
        <li style={s.li}><strong>7–10%:</strong> Target range for most buy-and-hold investors</li>
        <li style={s.li}><strong>10–15%+:</strong> Strong cash-on-cash — typical in secondary markets with lower acquisition prices</li>
        <li style={s.li}><strong>20%+:</strong> Excellent returns, usually from BRRRR strategy or significant value-add</li>
      </ul>
      <div style={s.cta}><div style={s.ctaTitle}>Calculate Cash-on-Cash Return Free for Any Property</div><div style={s.ctaText}>Freddie calculates cash-on-cash, cap rate, GRM, and deal score for any rental address — free, no account.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Analyze My Rental</a></div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
