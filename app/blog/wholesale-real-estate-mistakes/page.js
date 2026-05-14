import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Wholesale Real Estate Mistakes Beginners Make | FreeDealCalc",
  description: "The most common wholesale real estate mistakes that kill deals and damage reputations — and how to avoid every one of them.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/wholesale-real-estate-mistakes' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Avoid bad deals with accurate numbers — Freddie gives you real ARV and MAO free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze Before I Contract →</a>
  </div>
);
export default async function WholesaleMistakes() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Wholesale Real Estate Mistakes to Avoid</h1>
      <div style={s.intro}>Wholesaling looks simple from the outside. Find a deal, assign the contract, collect a fee. But every step has failure modes that kill deals and damage your reputation with sellers and buyers you need for long-term success.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Mistake 1: Overestimating ARV</h2>
      <p style={s.p}>Inflated ARV is the root cause of most failed wholesale deals. You get excited about the potential, stretch your comp selection to justify a higher number, and set your contract price accordingly. Then you market to buyers who pull their own comps, see a different number, and pass. Always use conservative comps — sold in the last 90 days, within half a mile, similar size and condition. Use AI tools to cross-check your estimate before you go under contract.</p>
      <h2 style={s.h2}>Mistake 2: Underestimating Rehab</h2>
      <p style={s.p}>The flip side of ARV inflation is rehab deflation. Buyers are experienced and their rehab estimates will be higher than yours if you are not thorough. Budget $25–$35/sqft for cosmetic rehab and $50–$75/sqft for full gut. Add 15% contingency to your estimate and use that number when you calculate MAO.</p>
      <h2 style={s.h2}>Mistake 3: Calling It a Deal Before You Have a Buyer</h2>
      <p style={s.p}>Getting under contract is not the hard part. Getting a buyer to close is. Do not celebrate until you have a signed assignment agreement and non-refundable earnest money from your buyer. Until then, you have a contract obligation and no buyer — and every day it sits is money out of your pocket.</p>
      <h2 style={s.h2}>Mistake 4: Burning Sellers and Buyers</h2>
      <p style={s.p}>Falling out of deals repeatedly destroys your reputation. If you consistently tie up properties and fail to close, sellers talk. If you send your buyers bad deals that do not pencil, they stop taking your calls. Your reputation in a local market is your most valuable asset — every deal should close or be released promptly with a clear explanation.</p>
      <h2 style={s.h2}>Mistake 5: No Written Agreement on Co-Wholesaling Splits</h2>
      <p style={s.p}>Verbal fee split agreements become disputes at closing. Get every co-wholesale arrangement in writing — property address, fee amount, split percentage, payment terms. A simple one-page agreement prevents 100% of co-wholesale payment disputes.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Avoid Bad Deals with Freddie</div>
        <div style={s.ctaText}>Freddie gives you accurate ARV and deal scoring before you go under contract. Avoid expensive mistakes — analyze free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze Before I Contract →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
