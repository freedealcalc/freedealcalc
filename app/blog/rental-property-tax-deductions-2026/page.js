import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Rental Property Tax Deductions in 2026 | FreeDealCalc",
  description: "Rental property tax deductions for 2026 — depreciation, mortgage interest, repairs, property management, and all the deductions landlords miss.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/rental-property-tax-deductions-2026' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function RentalTaxDeductions() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>11 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Rental Property Tax Deductions in 2026: Complete Landlord Guide</h1>
      <div style={s.intro}>Rental property has some of the best tax treatment of any investment. Depreciation alone can shelter significant income. But landlords consistently miss deductions they're legally entitled to. Here's the complete list.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>The Big One: Depreciation</h2>
      <p style={s.p}>Residential rental property depreciates over 27.5 years. On a $350,000 property (land value excluded, say $290,000 building), that's $10,545/year in depreciation deduction — reducing your taxable income without affecting cash flow. This is the most powerful tax advantage in rental real estate.</p>
      <h2 style={s.h2}>Deductible Operating Expenses</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Mortgage interest:</strong> Full amount deductible on Schedule E</li>
        <li style={s.li}><strong>Property taxes:</strong> Fully deductible against rental income</li>
        <li style={s.li}><strong>Insurance premiums:</strong> Landlord policy, liability, umbrella</li>
        <li style={s.li}><strong>Property management fees:</strong> 100% deductible</li>
        <li style={s.li}><strong>Repairs and maintenance:</strong> Current-year deduction (not improvements)</li>
        <li style={s.li}><strong>Professional fees:</strong> CPA, attorney, eviction costs</li>
        <li style={s.li}><strong>Advertising and leasing:</strong> Listing fees, showing costs</li>
        <li style={s.li}><strong>Travel:</strong> Mileage to and from property for management purposes</li>
        <li style={s.li}><strong>Home office:</strong> If managing from a dedicated space</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Pre-Tax and After-Tax Rental Returns</div>
        <div style={s.ctaText}>FreeDealCalc models rental returns including your estimated tax position — free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Model My After-Tax Returns →</a>
      </div>
      <h2 style={s.h2}>Repairs vs. Improvements</h2>
      <p style={s.p}>Critical distinction: repairs are current-year deductions. Improvements must be capitalized and depreciated. Fixing a broken window is a repair. Replacing all windows is an improvement. The line matters — work with a CPA who knows rental property to ensure you're classifying correctly.</p>
      <h2 style={s.h2}>Passive Activity Loss Rules</h2>
      <p style={s.p}>Rental losses are generally passive losses, deductible only against passive income. Exception: if your AGI is under $100,000 and you actively participate in management, up to $25,000 in losses can be deducted against ordinary income. Phase-out between $100K–$150K AGI. Real estate professionals with 750+ hours/year can deduct losses against any income.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
