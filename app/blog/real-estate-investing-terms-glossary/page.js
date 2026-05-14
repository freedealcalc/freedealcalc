import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Real Estate Investing Terms Glossary | FreeDealCalc",
  description: "Complete glossary of real estate investing terms. ARV, MAO, DSCR, cap rate, cash-on-cash, NOI, and every other term investors use explained simply.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-investing-terms-glossary' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Run any deal through Freddie and see all these metrics calculated automatically — free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Calculate My Deal Metrics Free →</a>
  </div>
);
export default async function REIGlossary() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate Investing Terms Glossary</h1>
      <div style={s.intro}>Real estate investing has its own language — and if you do not speak it fluently, you will misunderstand deals, miss red flags, and pay too much. Here is every term you need to know, explained simply.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Deal Analysis Terms</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>ARV (After-Repair Value):</strong> What the property will be worth after renovation, based on comparable sales. The foundation of every flip and BRRRR analysis.</li>
        <li style={s.li}><strong>MAO (Max Allowable Offer):</strong> The most you can pay and still profit: ARV times 0.70 minus rehab estimate. Going above this number compresses or eliminates margin.</li>
        <li style={s.li}><strong>Rehab estimate:</strong> Total cost to renovate the property to sellable or rentable condition. Must be verified by a contractor before going under contract.</li>
        <li style={s.li}><strong>Assignment fee:</strong> The profit a wholesaler collects by assigning a purchase contract to an end buyer. Buyer MAO minus wholesaler contract price.</li>
        <li style={s.li}><strong>Holding costs:</strong> Monthly cost of owning a property while not generating income — interest, insurance, utilities, and taxes during a flip or vacancy period.</li>
      </ul>
      <h2 style={s.h2}>Rental and Cash Flow Terms</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>NOI (Net Operating Income):</strong> Gross rent minus operating expenses, excluding debt service. The foundation of commercial and rental property valuation.</li>
        <li style={s.li}><strong>Cap rate:</strong> NOI divided by purchase price. A market-standard measure of investment yield. Higher cap rate equals higher yield and typically higher risk.</li>
        <li style={s.li}><strong>Cash-on-cash return (CoC):</strong> Annual cash flow divided by total cash invested. Measures actual return on your out-of-pocket capital.</li>
        <li style={s.li}><strong>DSCR (Debt Service Coverage Ratio):</strong> Monthly rent divided by PITI. Lenders require 1.20–1.25x to qualify for DSCR loans.</li>
        <li style={s.li}><strong>GRM (Gross Rent Multiplier):</strong> Purchase price divided by annual gross rent. A quick filter — lower is better. Most investors target below 10.</li>
      </ul>
      <h2 style={s.h2}>Financing Terms</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>LTV (Loan-to-Value):</strong> Loan amount divided by property value. Hard money typically lends at 65–75% LTV on ARV.</li>
        <li style={s.li}><strong>Points:</strong> Upfront loan fees equal to 1% of the loan amount each. Hard money lenders typically charge 2–3 points.</li>
        <li style={s.li}><strong>Seasoning:</strong> How long a lender requires you to own a property before allowing a cash-out refinance based on appraised value rather than purchase price.</li>
        <li style={s.li}><strong>Draw schedule:</strong> The process by which a hard money lender releases rehab funds in stages as work is completed and inspected.</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>See All These Metrics Calculated Automatically</div>
        <div style={s.ctaText}>Run any deal through Freddie and see ARV, MAO, cap rate, cash flow, and deal score calculated in 60 seconds — free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Deal Metrics Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
