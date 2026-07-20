import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Calculate Gross Rent Multiplier (GRM) | FreeDealCalc",
  description: "GRM is a quick rental property screening tool. Learn the formula, how to calculate it, how to interpret it, and when to use GRM versus cap rate.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-calculate-gross-rent-multiplier' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (<div style={s.cta}><div style={s.ctaTitle}>Skip the math — Freddie calculates this for you free in 60 seconds.</div><div style={s.ctaText}>Enter any address and get a complete deal analysis including all the key metrics covered here.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>);
export default async function Page() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <div style={s.meta}><span style={s.metaText}>How to Calculate</span><span style={s.dot}/><span style={s.metaText}>Investor Math</span></div>
      <h1 style={s.h1}>How to Calculate Gross Rent Multiplier (GRM) for Investment Property</h1>
      <p style={s.intro}>Gross Rent Multiplier (GRM) is the quickest screening tool for rental property investors — it gives you a rough valuation multiple based on annual gross rent without requiring detailed expense data. While not as precise as cap rate analysis, GRM lets you quickly filter deals worth analyzing further versus ones that clearly don't work.</p>
      <TopCTA />
      <h2 style={s.h2}>The GRM Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>GRM = Property Price ÷ Annual Gross Rent</div></div>
      <h2 style={s.h2}>Example GRM Calculation</h2>
      <p style={s.p}>Property price: $300,000. Monthly rent: $2,200 ($26,400/year). GRM = $300,000 ÷ $26,400 = 11.4.</p>
      <h2 style={s.h2}>How to Interpret GRM</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>GRM under 8:</strong> Potentially strong cash flow — worth detailed analysis</li>
        <li style={s.li}><strong>GRM 8–12:</strong> Typical range for most mid-market rental markets</li>
        <li style={s.li}><strong>GRM 13–16:</strong> Lower yield — depends on appreciation thesis</li>
        <li style={s.li}><strong>GRM 17+:</strong> Very low yield — typically only justified by high-appreciation markets</li>
      </ul>
      <h2 style={s.h2}>Calculating Market GRM</h2>
      <p style={s.p}>To find the market GRM in your target area, collect recent rental property sales and divide each sale price by annual gross rent. The resulting range tells you what investors are paying per dollar of gross rent. If you find a property with a GRM significantly below the market range, it warrants deeper analysis.</p>
      <h2 style={s.h2}>GRM Limitations</h2>
      <p style={s.p}>GRM uses gross rent, not net income — it ignores expenses, vacancy, and property condition. A property with a low GRM might have very high taxes, significant deferred maintenance, or other issues that make the economics less favorable than the GRM suggests. Always follow GRM screening with full NOI and cap rate analysis on properties that pass the initial filter.</p>
      <div style={s.cta}><div style={s.ctaTitle}>Screen Rental Deals in Seconds — Free</div><div style={s.ctaText}>Freddie calculates GRM, cap rate, cash flow, and deal score for any rental property address. Free.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Analyze My Rental</a></div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
