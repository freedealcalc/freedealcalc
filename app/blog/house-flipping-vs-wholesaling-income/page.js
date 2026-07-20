import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "House Flipping vs Wholesaling: Which Makes More Money?",
  description: "A real comparison of income potential between house flipping and wholesaling. Per-deal profit, deals per year, capital requirements, and risk profiles.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-flipping-vs-wholesaling-income' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie analyzes both flip and wholesale deals free — compare returns on any property.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Compare My Deal Returns Free →</a>
  </div>
);
export default async function FlipVsWholesaleIncome() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>House Flipping vs Wholesaling Income</h1>
      <div style={s.intro}>Both house flipping and wholesaling can generate significant income — but they do it in very different ways. Here is an honest comparison of the income potential, capital requirements, and risk profiles of each strategy.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Per-Deal Income Comparison</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>House flipping:</strong> $30k–$80k net profit per deal in mid-tier markets. Higher per-deal income but longer cycle (4–8 months per deal).</li>
        <li style={s.li}><strong>Wholesaling:</strong> $5k–$25k assignment fee per deal in mid-tier markets. Lower per-deal income but much faster cycle (days to weeks per deal).</li>
      </ul>
      <h2 style={s.h2}>Annual Income Potential</h2>
      <p style={s.p}>A full-time flipper doing 6 deals per year at $45k average net profit earns $270k annually — but requires $300k–$600k in active capital to support that volume. A full-time wholesaler closing 4 deals per month at $12k average fee earns $576k annually — with minimal capital requirements. At scale, wholesaling can actually produce higher gross income than flipping, with significantly less capital at risk.</p>
      <h2 style={s.h2}>Capital Requirements</h2>
      <p style={s.p}>Flipping requires significant capital: $50k–$150k per deal in active deployment. A 6-flip-per-year operation needs $300k–$600k in working capital. Wholesaling requires almost no capital: $500–$2,000 in earnest money deposits per deal, plus marketing costs. Capital constraint is the most common reason active flippers cap their volume — wholesalers do not have this constraint.</p>
      <h2 style={s.h2}>Risk Comparison</h2>
      <p style={s.p}>Flipping carries market risk (ARV changes between buy and sell), execution risk (rehab cost overruns and timeline delays), and financing risk (hard money carries cost mounts if deals extend). Wholesaling carries reputational risk (falling out of deals damages seller and buyer relationships) but almost no financial risk beyond earnest money and marketing spend. Wholesaling is the lower-risk strategy by a significant margin.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Compare Flip vs Wholesale Returns on Any Deal</div>
        <div style={s.ctaText}>Freddie analyzes both flip and wholesale scenarios on any property. See which strategy pencils better — free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Compare My Deal Returns Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
