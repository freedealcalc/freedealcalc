import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: \'House Flipping Taxes Explained: What You Owe and How to Reduce It | FreeDealCalc',
  description: \'House flipping tax guide — how flip profits are taxed, why you\'re a dealer not an investor, what costs reduce your taxable gain, and strategies to lower your bill.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-flipping-taxes-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function FlipTaxes() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>11 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>House Flipping Taxes Explained: What You Owe and How to Reduce It</h1>
      <div style={s.intro}>House flipping is taxed like a business, not an investment. Your profits are ordinary income — not capital gains — and self-employment tax applies on top of that. Understanding this before you start saves expensive surprises at tax time.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>You Are a Dealer, Not an Investor</h2>
      <p style={s.p}>The IRS classifies active house flippers as dealers in real estate. This means your flip profits are treated as ordinary business income — taxed at your marginal rate (up to 37% federal) plus self-employment tax (15.3% on the first $168,600 in 2026). Long-term capital gains rates (0–20%) do not apply to flips held less than one year, and even properties held longer are often still dealer property if flipping is your primary business.</p>
      <h2 style={s.h2}>What Your Taxable Gain Includes</h2>
      <p style={s.p}>Sale price minus your cost basis. Cost basis includes: purchase price, buying closing costs, all renovation costs (materials and labor), permit fees, inspection fees, and any capital improvements. Track every dollar — it all reduces your taxable gain.</p>
      <h2 style={s.h2}>What's Deductible as a Business Expense</h2>
      <ul style={s.ul}>
        <li style={s.li}>Hard money interest and points (period you held the property)</li>
        <li style={s.li}>Property taxes during holding period</li>
        <li style={s.li}>Insurance during holding period</li>
        <li style={s.li}>Business operating costs: phone, software, mileage, office</li>
        <li style={s.li}>Professional fees: attorney, CPA, title</li>
        <li style={s.li}>Marketing and lead generation costs</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Factor Tax Into Your Deal Analysis</div>
        <div style={s.ctaText}>FreeDealCalc runs after-tax profit projections so you see your real net, not just gross profit. Free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Run My After-Tax Analysis Free →</a>
      </div>
      <h2 style={s.h2}>Tax Reduction Strategies</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Operate as an S-Corp:</strong> Can reduce self-employment tax on profits above a reasonable salary</li>
        <li style={s.li}><strong>Maximize deductible business expenses:</strong> Every legitimate business cost reduces taxable income</li>
        <li style={s.li}><strong>Hold one property as a rental:</strong> Rental income is not subject to SE tax; long-term holds qualify for capital gains rates</li>
        <li style={s.li}><strong>Work with a CPA who specializes in real estate investors:</strong> The tax code has legitimate strategies that generalist CPAs miss</li>
      </ul>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
