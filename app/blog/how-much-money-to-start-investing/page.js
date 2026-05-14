import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How Much Money Do You Need to Start Investing in Real Estate? | FreeDealCalc",
  description: "Realistic capital requirements for every real estate investing strategy. How much you actually need to get started and how to start with less.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-much-money-to-start-investing' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie analyzes deals at any price point — run your first candidate free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My First Deal Free →</a>
  </div>
);
export default async function HowMuchMoney() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How Much Money Do You Need to Start Investing in Real Estate?</h1>
      <div style={s.intro}>The most common question from new investors — and the answer is more nuanced than any YouTube title suggests. How much you need depends entirely on which strategy you pursue.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Wholesaling: Lowest Capital Requirement</h2>
      <p style={s.p}>Wholesaling requires the least capital of any real estate strategy. You need: $500–$2,000 for earnest money deposits, $300–$500/month for marketing (direct mail or cold calling), skip tracing costs of $100–$300/month, and basic tools like a phone and CRM. Total startup budget: $2,000–$5,000. Many investors have done their first wholesale deal for under $1,000 out of pocket.</p>
      <h2 style={s.h2}>House Flipping: Mid-Range Capital</h2>
      <p style={s.p}>Flipping typically requires $30k–$80k of your own capital even when using hard money financing. Hard money lenders cover 70–75% of ARV but you need the gap between loan amount and total project cost, plus reserves. On a $200k ARV deal with $120k purchase and $40k rehab, a hard money loan at 70% ARV ($140k) covers most of the purchase — but you still need $20k+ for closing costs, gap funding, and carrying cost reserves.</p>
      <h2 style={s.h2}>BRRRR: Recycled Capital Model</h2>
      <p style={s.p}>BRRRR requires $50k–$100k of upfront capital that ideally gets returned through the refinance. The beauty of BRRRR is that the same $75k can theoretically fund 5–10 properties over several years if each refinance fully recycles the capital. The reality is that most BRRRR deals leave $10k–$20k of permanent capital in the deal — plan for this.</p>
      <h2 style={s.h2}>Rental Buying: Highest Steady Capital Requirement</h2>
      <p style={s.p}>Buying conventional rentals requires 20–25% down plus closing costs — typically $40k–$60k per property on a $200k purchase. The house hacking strategy reduces this dramatically: FHA at 3.5% down on a duplex means you need $15k–$20k to buy a $400k two-unit property. House hacking is the most capital-efficient entry point for rental investors.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Deals at Any Price Point</div>
        <div style={s.ctaText}>Freddie runs deal analysis at any price range. Find what works for your capital level — free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My First Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
