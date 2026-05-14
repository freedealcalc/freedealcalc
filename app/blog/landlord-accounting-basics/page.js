import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Landlord Accounting Basics | FreeDealCalc",
  description: "Simple accounting system for landlords. How to track income and expenses, what to save for taxes, and tools that make rental property accounting easy.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/landlord-accounting-basics' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Know your real numbers before you buy more — Freddie models rental returns free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Next Rental Free →</a>
  </div>
);
export default async function LandlordAccounting() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Landlord Accounting Basics for Real Estate Investors</h1>
      <div style={s.intro}>Simple landlord accounting separates profitable investors from ones who think they are profitable. Track every dollar in and out of each property — not because the IRS requires it (though they do), but because you cannot make good decisions about your portfolio without accurate property-level data.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>The Core System: One Account Per Property</h2>
      <p style={s.p}>Open a separate bank account for each rental property (or at minimum one dedicated account for all rentals). Every rent payment goes in. Every expense comes out. Never co-mingle rental cash with personal funds. This single practice makes tax preparation trivial and gives you clear per-property performance data.</p>
      <h2 style={s.h2}>Key Categories to Track</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Income:</strong> Rent, late fees, pet fees, parking, laundry, application fees</li>
        <li style={s.li}><strong>Repairs and maintenance:</strong> Keep every receipt — fully deductible and often audited</li>
        <li style={s.li}><strong>Management fees:</strong> If you use a property manager</li>
        <li style={s.li}><strong>Mortgage interest:</strong> The interest portion of your payment is deductible</li>
        <li style={s.li}><strong>Insurance:</strong> Landlord insurance premium fully deductible</li>
        <li style={s.li}><strong>Property taxes:</strong> Fully deductible for investment properties</li>
        <li style={s.li}><strong>Depreciation:</strong> Work with your CPA to capture this — it is a major tax benefit most landlords underutilize</li>
      </ul>
      <h2 style={s.h2}>Tools</h2>
      <p style={s.p}>Stessa is purpose-built for rental property accounting and is free for most investors. QuickBooks and Buildium are more comprehensive but more expensive. At minimum, a well-organized spreadsheet with one tab per property and monthly income and expense entries is sufficient for a portfolio under five properties. Whatever you use, the discipline of updating it monthly is more important than the software.</p>
      <h2 style={s.h2}>Tax Prep Checklist</h2>
      <p style={s.p}>Give your CPA at end of year: total rent collected, all repair and maintenance receipts, property management fees paid, mortgage interest statements from your lender (Form 1098), property tax bills paid, insurance premiums, and any capital improvements (not repairs — improvements are depreciated, not expensed). Being organized saves you money every tax season.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Know Your Real Numbers Before You Buy More</div>
        <div style={s.ctaText}>Model actual cash flow on any potential rental purchase. Freddie runs the numbers — free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Next Rental Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
