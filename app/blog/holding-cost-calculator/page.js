import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Holding Cost Calculator — What Your Flip Really Costs Per Month | FreeDealCalc",
  description: "Calculate real estate holding costs free. Financing, taxes, insurance, utilities — see what your flip costs per month and for your full hold period.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/holding-cost-calculator' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function HoldingCostCalc() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Holding Cost Calculator — What Your Flip Really Costs Per Month</h1>
      <div style={s.intro}>Holding costs are the silent deal killer. Investors model the purchase and rehab perfectly and forget they're paying $3,000–$5,000 per month in carrying costs the entire time. Calculate them before you offer.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Monthly Holding Cost Breakdown</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Hard money interest:</strong> Loan amount × (rate ÷ 12). On $200K at 12%: $2,000/month</li>
        <li style={s.li}><strong>Property taxes:</strong> Annual bill ÷ 12. NoVA example: $4,800/year = $400/month</li>
        <li style={s.li}><strong>Insurance:</strong> Builder's risk policy, typically $100–$200/month</li>
        <li style={s.li}><strong>Utilities:</strong> Electric, gas, water — $150–$400/month depending on season and size</li>
        <li style={s.li}><strong>HOA (if applicable):</strong> $200–$600/month — often overlooked</li>
      </ul>
      <h2 style={s.h2}>Total Hold Cost by Timeline</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>3-month flip:</strong> ~$9,000–$15,000 in holding costs</li>
        <li style={s.li}><strong>6-month flip:</strong> ~$18,000–$30,000</li>
        <li style={s.li}><strong>9-month flip:</strong> ~$27,000–$45,000</li>
        <li style={s.li}><strong>12-month flip:</strong> ~$36,000–$60,000</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Calculate Your Holding Costs Free</div>
        <div style={s.ctaText}>Freddie calculates exact monthly and total holding costs for your deal — included in every free deal analysis. No spreadsheet needed.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Holding Costs →</a>
      </div>
      <h2 style={s.h2}>How to Reduce Holding Costs</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Move fast on rehab:</strong> Every week saved is $700–$1,200 in carrying costs on a typical project</li>
        <li style={s.li}><strong>Use private money:</strong> 6–8% private money vs. 12% hard money saves $1,000–$2,000/month</li>
        <li style={s.li}><strong>List before punch list is complete:</strong> Get the property under contract while finishing final items</li>
        <li style={s.li}><strong>Pre-market to agents:</strong> Having a buyer lined up before you list eliminates DOM carrying cost</li>
      </ul>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
