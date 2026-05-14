import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "BRRRR Cash-Out Refinance Explained | FreeDealCalc",
  description: "How the cash-out refinance works in the BRRRR method. LTV, DSCR requirements, seasoning, and how to calculate your actual cash-out proceeds.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/brrrr-cash-out-refinance-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie calculates BRRRR refinance proceeds and monthly cash flow — free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Calculate My Cash-Out Free →</a>
  </div>
);
export default async function BRRRRRefinance() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>BRRRR Cash-Out Refinance Explained</h1>
      <div style={s.intro}>The refinance is the engine of the BRRRR method. Done right, it returns most or all of your capital from acquisition and rehab — leaving you with a cash-flowing rental and recycled capital for the next deal.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>The BRRRR Refinance Math</h2>
      <div style={s.formula}><div style={s.formulaText}>Cash Out = (ARV x 0.75) - Loan Costs - Existing Balance</div></div>
      <p style={s.p}>On a $200k ARV property with a 75% LTV DSCR loan: $200k x 0.75 = $150k loan amount. If you paid $120k purchase and $35k rehab ($155k total), a $150k refinance recovers $150k — getting you back to within $5k of your full investment. That is the power of buying at 60% ARV.</p>
      <h2 style={s.h2}>DSCR Requirements</h2>
      <p style={s.p}>Most DSCR lenders require a DSCR ratio of 1.20–1.25x. Monthly rent must be 1.20x the full PITI (principal, interest, taxes, insurance). On a $150k loan at 7.5% for 30 years, PITI runs approximately $1,400/month. You need rent of $1,680+ per month to meet a 1.20x DSCR requirement. Know this number before you buy so you can confirm the rent support.</p>
      <h2 style={s.h2}>Seasoning and Timing</h2>
      <p style={s.p}>Most DSCR lenders have a 6–12 month seasoning requirement after purchase. During this window, they use your purchase price rather than appraised value for the LTV calculation. After seasoning ends, they use the full appraised ARV. Plan your BRRRR timeline to target the refinance 6–12 months after purchase — with the tenant in place and the property stabilized.</p>
      <h2 style={s.h2}>Appraisal Preparation</h2>
      <p style={s.p}>The refinance appraisal determines your cash-out amount. Prepare for the appraiser: submit a list of all improvements made with costs, pull your own comps before the appraisal, and make sure the property is clean and all rehab is complete. Appraisers who see an unfinished scope will note it and reduce value. A $10k appraisal bump from proper preparation can return $7,500 in additional cash-out proceeds.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Model Your BRRRR Refinance Free</div>
        <div style={s.ctaText}>Enter ARV and loan parameters — Freddie calculates your DSCR refinance proceeds and monthly cash flow.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Cash-Out Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
