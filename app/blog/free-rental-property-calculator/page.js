import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Free Rental Property Calculator — Cash Flow, Cap Rate, Cash-on-Cash | FreeDealCalc",
  description: "Calculate rental property cash flow, cap rate, and cash-on-cash return free. Enter your numbers — get the full rental analysis instantly.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/free-rental-property-calculator' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function FreeRentalCalculator() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Free Rental Property Calculator — Cash Flow, Cap Rate, Cash-on-Cash</h1>
      <div style={s.intro}>A rental property calculator answers one question: does this property produce a return worth the capital and risk? FreeDealCalc runs the full rental analysis free — gross rent, operating expenses, NOI, financing, cash flow, cap rate, and cash-on-cash return in one conversation.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>What the Rental Calculator Computes</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Gross rental income:</strong> Monthly rent × 12</li>
        <li style={s.li}><strong>Vacancy allowance:</strong> Typically 5–8% of gross rent</li>
        <li style={s.li}><strong>Operating expenses:</strong> Taxes, insurance, PM fee, maintenance, CapEx reserves</li>
        <li style={s.li}><strong>Net Operating Income (NOI):</strong> Gross income minus vacancy and operating expenses</li>
        <li style={s.li}><strong>Debt service:</strong> Monthly mortgage payment (PITI)</li>
        <li style={s.li}><strong>Monthly cash flow:</strong> NOI/12 minus mortgage</li>
        <li style={s.li}><strong>Cap rate:</strong> NOI divided by purchase price</li>
        <li style={s.li}><strong>Cash-on-cash return:</strong> Annual cash flow divided by total cash invested</li>
        <li style={s.li}><strong>DSCR:</strong> NOI divided by annual debt service — lenders need 1.20+</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Rental Property Free</div>
        <div style={s.ctaText}>Freddie runs the full rental analysis — cash flow, cap rate, cash-on-cash, and DSCR — in one free conversation. No spreadsheet needed.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Rental Returns Free →</a>
      </div>
      <h2 style={s.h2}>What Good Numbers Look Like in 2026</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Cash flow:</strong> Positive — even $100/month matters</li>
        <li style={s.li}><strong>Cash-on-cash return:</strong> 4%+ minimum, 6%+ target</li>
        <li style={s.li}><strong>Cap rate:</strong> At or above local market cap rate</li>
        <li style={s.li}><strong>DSCR:</strong> 1.25+ for most lenders</li>
      </ul>
      <p style={s.p}>In Northern Virginia and other high-cost markets, 3–5% cash-on-cash is common on stabilized rentals. Investors accept thinner cash flow because appreciation and principal paydown compensate over time. In secondary markets, 6–10% is achievable with the right buy.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
