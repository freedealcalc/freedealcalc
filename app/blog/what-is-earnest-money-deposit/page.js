import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'What is Earnest Money Deposit (EMD)? How It Works in Real Estate | FreeDealCalc', description: 'Earnest money deposit explained — how much to put down, when you get it back, when you lose it, and how investors use EMD strategy as a negotiation tool.', alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-earnest-money-deposit' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function EarnestMoney() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>What is Earnest Money Deposit (EMD)? How It Works in Real Estate</h1>
      <div style={s.intro}>Earnest money deposit is a good-faith payment made by a buyer when entering a purchase agreement. It signals commitment, goes toward your purchase price at closing, and is the amount you lose if you back out without a valid contract contingency. Understanding EMD protects both your money and your deals.</div>
      <p style={s.p}>EMD is often misunderstood — by buyers who don't realize when it's at risk, and by investors who use it strategically but incorrectly. Here's exactly how it works.</p>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>How Much Should EMD Be?</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Retail transactions:</strong> Typically 1–3% of purchase price. On a $500,000 purchase in Northern Virginia, $5,000–$15,000 is standard. In competitive markets, buyers offer higher EMD to signal seriousness.</li>
        <li style={s.li}><strong>Investor/wholesale transactions:</strong> Much lower — $500–$5,000 typically. Investors limit EMD to limit downside risk on deals that may not close.</li>
        <li style={s.li}><strong>What sellers want:</strong> More EMD signals commitment and reduces seller risk. In competitive offer situations, higher EMD can win the deal over a higher price with low EMD.</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>When You Get EMD Back</h2>
      <p style={s.p}>EMD is refundable if you back out for any reason covered by an active contract contingency. Common contingencies that protect your deposit:</p>
      <ul style={s.ul}>
        <li style={s.li}><strong>Home inspection contingency:</strong> Back out within the inspection period for any reason — full refund.</li>
        <li style={s.li}><strong>Financing contingency:</strong> If you can't obtain financing on the specified terms — full refund.</li>
        <li style={s.li}><strong>Appraisal contingency:</strong> If property appraises below purchase price — refund unless you waive.</li>
        <li style={s.li}><strong>Title contingency:</strong> If title has issues that can't be cleared — refund.</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>When You Lose EMD</h2>
      <p style={s.p}>You lose your earnest money deposit when you back out of a contract without a valid contingency cover. This means: inspection period has expired and you back out without a structural/defect cause, financing contingency has expired and you walk, or you simply change your mind with no contractual basis.</p>
      <p style={s.p}>Investors who use "inspection period" as a standard walk window need to understand that in some states, backing out during an inspection period without actually conducting an inspection can create legal exposure. Know your contract.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>EMD Strategy for Investors</h2>
      <h3 style={s.h3}>Keep It Low on Distressed Deals</h3>
      <p style={s.p}>On wholesale and distressed acquisitions, limit EMD to $500–$2,000. Maximize your inspection period. Your downside if the deal falls apart during due diligence is limited to your deposit. More sellers accept low EMD on distressed properties than on retail transactions.</p>
      <h3 style={s.h3}>Use EMD as a Negotiating Lever</h3>
      <p style={s.p}>On competitive deals, offering to increase EMD after the inspection period — once you've confirmed condition — can close a negotiation. You're offering to put up more money once you have confidence in the deal. Sellers respond to that.</p>
      <h3 style={s.h3}>Understand Release Terms</h3>
      <p style={s.p}>Some contracts release EMD directly to escrow (title company). Others require mutual release signatures. If a deal falls apart, know what's required to get your money back and how long the process takes.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Get Your Deal Analysis Before You Put Money Down</div>
        <div style={s.ctaText}>FreeDealCalc runs full deal analysis before you commit EMD — so you only deposit on deals where the numbers work. Free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been buying and selling real estate in Northern Virginia for 20+ years.</p>
    </div>
  );
}
