import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Calculate Cap Rate by Address: Rental Property Guide 2026 | FreeDealCalc",
  description: "Cap rate is the most important metric for comparing rental property investments. Learn how to calculate net operating income, find the cap rate, and interpret what it means for any property.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-calculate-cap-rate-by-address' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (<div style={s.cta}><div style={s.ctaTitle}>Skip the math — Freddie calculates this for you free in 60 seconds.</div><div style={s.ctaText}>Enter any address and get a complete deal analysis including all the key metrics covered here.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>);
export default async function Page() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <div style={s.meta}><span style={s.metaText}>How to Calculate</span><span style={s.dot}/><span style={s.metaText}>Investor Math</span></div>
      <h1 style={s.h1}>How to Calculate Cap Rate by Address: A Rental Property Guide</h1>
      <p style={s.intro}>Cap rate (capitalization rate) is the primary metric used to compare income-producing real estate investments. It measures the property's income relative to its value independent of financing — making it a pure property performance metric. Understanding how to calculate and interpret cap rate is essential for any rental investor.</p>
      <TopCTA />
      <h2 style={s.h2}>The Cap Rate Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>Cap Rate = Net Operating Income (NOI) ÷ Property Value × 100</div></div>
      <h2 style={s.h2}>Step 1: Calculate Net Operating Income</h2>
      <p style={s.p}>NOI = Gross Potential Rent − Vacancy Allowance − Operating Expenses. Operating expenses include: property taxes, insurance, property management fees (8–12% of rent), maintenance and repairs, utilities paid by landlord, and capital expenditure reserves. Note: mortgage payments are NOT included in NOI — cap rate is a financing-neutral metric.</p>
      <h2 style={s.h2}>Example Cap Rate Calculation</h2>
      <p style={s.p}>Property price: $280,000. Monthly rent: $2,000 ($24,000/year). Vacancy (5%): −$1,200. Operating expenses: −$8,400 (35% of gross). NOI = $24,000 − $1,200 − $8,400 = $14,400. Cap Rate = $14,400 ÷ $280,000 × 100 = 5.1%.</p>
      <h2 style={s.h2}>What Is a Good Cap Rate?</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>4–5%:</strong> Institutional-grade assets in premium urban markets. Lower return but higher quality and appreciation</li>
        <li style={s.li}><strong>6–8%:</strong> Solid mid-market rental properties in most major metros. Most common target range for individual investors</li>
        <li style={s.li}><strong>9–12%+:</strong> Value-add or secondary market properties. Higher yield, higher risk, less appreciation</li>
      </ul>
      <h2 style={s.h2}>Cap Rate vs. Cash-on-Cash Return</h2>
      <p style={s.p}>Cap rate ignores financing. Cash-on-cash return measures your actual cash yield on invested capital (down payment + closing costs). A property with a 7% cap rate might produce a 10–12% cash-on-cash return if leveraged appropriately, or 4–5% if you paid cash. Both metrics matter — cap rate for property comparison, cash-on-cash for your actual return on investment.</p>
      <div style={s.cta}><div style={s.ctaTitle}>Get the Cap Rate for Any Address — Free</div><div style={s.ctaText}>Freddie calculates NOI, cap rate, and cash-on-cash return for any rental property address. Free, instant, no account.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Analyze My Rental</a></div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
