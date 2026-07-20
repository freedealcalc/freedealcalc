import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "House Flipping With a Partner: 2026 Guide to | FreeDealCalc",
  description: "Flipping houses with a partner can accelerate your investing but creates risks if not structured correctly.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-flipping-with-partner' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (<div style={s.cta}><div style={s.ctaTitle}>Run any deal through Freddie — free analysis in 60 seconds.</div><div style={s.ctaText}>Flip, rental, BRRRR, or wholesale — Freddie handles all four strategies for any address.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>);
export default async function Page() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <div style={s.meta}><span style={s.metaText}>JV Strategy</span><span style={s.dot}/><span style={s.metaText}>2026</span></div>
      <h1 style={s.h1}>House Flipping With a Partner: How to Structure a Real Estate Joint Venture</h1>
      <p style={s.intro}>Flipping houses with a partner is one of the most common ways new investors get started — and one of the most common sources of investor disasters. Done right, a partnership multiplies your capabilities: one partner brings capital, another brings time and expertise. Done wrong, a handshake deal turns into a lawsuit. This guide covers how to structure flip partnerships that actually work.</p>
      <TopCTA />
      <h2 style={s.h2}>Why Flip Partnerships Work</h2>
      <p style={s.p}>The most common and functional flip partnership combines a money partner with an operator partner. The money partner provides the acquisition capital and rehab funding. The operator partner finds the deals, manages the renovation, and handles the sale. Both contribute something essential; neither can succeed without the other.</p>
      <h2 style={s.h2}>How to Split Profits in a Flip JV</h2>
      <div style={s.formula}><div style={s.formulaText}>Common Split: 50/50 net profit after all costs, or 70/30 (operator/capital) depending on contribution</div></div>
      <p style={s.p}>The most common flip JV split is 50/50 of net profit after all expenses — hard money interest, carrying costs, rehab, and selling costs. If the money partner is providing all capital at risk, a 60/40 or even 70/30 in their favor is not unusual. There is no universal right answer — negotiate based on each party's contribution to the deal.</p>
      <h2 style={s.h2}>What Must Be in Your JV Agreement</h2>
      <ul style={s.ul}>
        <li style={s.li}>Decision-making authority — who has final say on purchase, rehab scope, and sale price?</li>
        <li style={s.li}>Capital contributions — how much, when, and what happens if more is needed?</li>
        <li style={s.li}>Profit distribution timing — when does each partner get paid?</li>
        <li style={s.li}>Default provisions — what happens if one partner can't fulfill their role?</li>
        <li style={s.li}>Exit provisions — what if one partner wants out mid-project?</li>
        <li style={s.li}>Tax treatment — how will profits and losses be reported?</li>
      </ul>
      <h2 style={s.h2}>Common Partnership Mistakes</h2>
      <ul style={s.ul}>
        <li style={s.li}>Handshake deals with no written agreement</li>
        <li style={s.li}>Unclear decision-making authority leading to paralysis on key decisions</li>
        <li style={s.li}>Not defining what 'expenses' are deducted before profit split</li>
        <li style={s.li}>Partnering with someone whose commitment level doesn't match yours</li>
        <li style={s.li}>Failing to define what happens when a partner wants to exit</li>
      </ul>
      <h2 style={s.h2}>Structuring Through an LLC</h2>
      <p style={s.p}>Most flip JVs should be structured through a separate LLC for each project or a joint venture LLC for ongoing partnerships. This provides liability protection, clear ownership documentation, and cleaner accounting. The operating agreement is your JV agreement — have a real estate attorney draft it before the first deal.</p>
      <div style={s.cta}><div style={s.ctaTitle}>Analyze Your Next Flip Deal Free</div><div style={s.ctaText}>Before you find a partner, know if the deal works. Freddie gives you ARV, MAO, and profit for any property — free.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Analyze My Flip Deal</a></div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
