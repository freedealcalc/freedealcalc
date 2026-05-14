import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'How to Sell a House in Foreclosure: Options Before You Lose It | FreeDealCalc',
  description: 'How to sell a house in foreclosure — short sale, cash sale to investor, or loan modification. What your options are and how fast you need to move.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-sell-house-in-foreclosure' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function SellInForeclosure() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>10 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Sell a House in Foreclosure: Options Before You Lose It</h1>
      <div style={s.intro}>If you're behind on your mortgage and facing foreclosure, you have more options than you think — but the window to act narrows every day. Here's what's available and how to evaluate each path.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>How Foreclosure Works</h2>
      <p style={s.p}>After 90–120 days of missed payments, your lender files a notice of default (lis pendens). This starts the foreclosure clock. Depending on your state, you have anywhere from 90 days to 18+ months before the sheriff's sale. Virginia is a non-judicial foreclosure state — the process can move in as little as 60–90 days after the notice of sale is filed.</p>
      <h2 style={s.h2}>Option 1: Sell to a Cash Investor</h2>
      <p style={s.p}>Fastest option. An investor buys your home as-is, pays off the mortgage at closing, and you walk away with whatever equity remains. If you owe $180,000 and an investor pays $210,000, you net $30,000 minus closing costs. Close in 14–21 days — well before a foreclosure sale date in most cases.</p>
      <h2 style={s.h2}>Option 2: Short Sale</h2>
      <p style={s.p}>If you owe more than the property is worth, a short sale lets you sell for less than the mortgage balance with lender approval. Slower (60–120 days for lender approval) but avoids foreclosure on your credit record. Credit impact is still significant but less severe than a completed foreclosure.</p>
      <h2 style={s.h2}>Option 3: Loan Modification</h2>
      <p style={s.p}>Contact your lender directly. Many have hardship programs — temporary payment reduction, forbearance, or permanent modification. This keeps you in the home but requires income to sustain the modified payment. Best if your hardship is temporary.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Know What an Investor Would Pay Before Deciding</div>
        <div style={s.ctaText}>FreeDealCalc runs a free analysis on any property — what an investor would offer, what equity you might walk away with, and your options. Free and confidential.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Get My Free Property Analysis →</a>
      </div>
      <h2 style={s.h2}>What Happens If You Do Nothing</h2>
      <p style={s.p}>The property goes to sheriff's sale. You receive no proceeds above the mortgage balance and fees. The foreclosure stays on your credit for 7 years. You lose all equity. Acting — even imperfectly — almost always beats waiting.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
