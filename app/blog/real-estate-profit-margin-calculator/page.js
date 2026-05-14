import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Real Estate Profit Margin Calculator | FreeDealCalc",
  description: "How to calculate profit margin on a house flip or wholesale deal. What margins to target and how Freddie calculates yours automatically.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-profit-margin-calculator' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie calculates your exact profit margin on any deal — free in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Calculate My Profit Margin Free →</a>
  </div>
);
export default async function ProfitMarginCalc() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate Profit Margin Calculator</h1>
      <div style={s.intro}>Profit margin tells you what percentage of the sale price you keep as net profit — it is the clearest measure of whether a deal was worth doing. Here is how to calculate it and what targets to shoot for.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>How to Calculate Flip Profit Margin</h2>
      <div style={s.formula}><div style={s.formulaText}>Profit Margin = Net Profit / Sale Price x 100</div></div>
      <p style={s.p}>If you sell a flip for $320,000 and net $48,000 after all costs (purchase, rehab, carrying, selling), your profit margin is 15%. Most experienced flippers target 15–25% gross profit margins before taxes. Below 10% and unexpected costs can turn your deal negative. Above 25% and you probably found an exceptional deal.</p>
      <h2 style={s.h2}>All Costs That Reduce Margin</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Acquisition costs:</strong> Purchase price plus closing costs (typically 2–3% of purchase)</li>
        <li style={s.li}><strong>Rehab costs:</strong> All materials, labor, and permits</li>
        <li style={s.li}><strong>Carrying costs:</strong> Hard money interest, insurance, utilities, and taxes during the hold period</li>
        <li style={s.li}><strong>Selling costs:</strong> Agent commission (5–6%), closing costs (1–2%), staging and marketing</li>
      </ul>
      <h2 style={s.h2}>Return on Investment vs Profit Margin</h2>
      <p style={s.p}>Profit margin measures profit as a percentage of sale price. ROI measures profit as a percentage of capital invested. Both matter. A deal with a 15% profit margin on a $400,000 sale produces $60,000 in profit. If you only invested $80,000 of your own capital, your ROI is 75%. High ROI with acceptable profit margin is the target — not just one or the other.</p>
      <h2 style={s.h2}>Wholesale Profit Margin</h2>
      <p style={s.p}>For wholesale deals, profit margin is simpler: assignment fee divided by the property's ARV. A $15,000 assignment fee on a $200,000 ARV property represents a 7.5% margin from the perspective of the end value. Most wholesalers target assignment fees that represent 5–15% of ARV — enough to attract motivated sellers without eliminating the buyer's margin.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Calculate Your Exact Profit Margin</div>
        <div style={s.ctaText}>Freddie calculates net profit, ROI, and profit margin on any deal — flip, wholesale, or rental. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Profit Margin Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
