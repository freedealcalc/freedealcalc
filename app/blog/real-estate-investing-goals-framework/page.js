import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Real Estate Investing Goals Framework | FreeDealCalc",
  description: "How to set real estate investing goals that actually drive behavior.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-investing-goals-framework' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie helps you model any deal toward your portfolio goal — free analysis on any property.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Model My Path to Goal →</a>
  </div>
);
export default async function InvestingGoals() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate Investing Goals Framework</h1>
      <div style={s.intro}>Vague goals produce vague results. Real estate investors who build significant portfolios do it with specific, quantified goals that work backward from the end state to the next action. Here is the framework.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Start With the End State</h2>
      <p style={s.p}>Define what financial independence means for you specifically: a monthly income number that replaces your job. Then work backward. If your goal is $8,000/month in passive income and your average rental property produces $400/month net after all expenses, you need 20 properties. If you want to reach that in 10 years, you need 2 properties per year. That number drives your annual deal target.</p>
      <h2 style={s.h2}>The 90-Day Goal Layer</h2>
      <p style={s.p}>Ten-year goals are motivating but not actionable. Break them into 90-day targets that are specific and measurable. Examples: analyze 30 deals this quarter, make 10 offers, close 1 deal, add 20 cash buyers to your list, send direct mail to 500 absentee owners. Ninety-day goals create the urgency and accountability that long-term goals cannot provide.</p>
      <h2 style={s.h2}>Matching Strategy to Timeline</h2>
      <p style={s.p}>If your goal is to replace your income in 3 years, you need a high-velocity strategy — wholesaling or flipping generates income fastest but builds wealth more slowly. If your goal is 10-year retirement, BRRRR and rental buying build the portfolio that generates passive income. Most serious investors use active strategies (flipping, wholesaling) to generate capital, then deploy that capital into passive holdings.</p>
      <h2 style={s.h2}>Tracking and Adjusting</h2>
      <p style={s.p}>Review your goals quarterly. Track your leading indicators (deals analyzed, offers made, marketing spend, leads generated) as well as your lagging indicators (deals closed, properties owned, monthly cash flow). Leading indicators tell you whether you are on track months before the results show up. If your leading indicators are weak, adjust your activity — not your goals.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Model Any Deal Toward Your Goal</div>
        <div style={s.ctaText}>Freddie helps you analyze every potential deal against your return requirements. Know if it hits your criteria — free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Model My Path to Goal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
