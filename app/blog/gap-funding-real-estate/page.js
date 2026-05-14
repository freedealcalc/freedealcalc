import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Gap Funding in Real Estate: What It Is and How to Use It | FreeDealCalc",
  description: "Gap funding explained — how investors cover the gap between hard money LTV and purchase price. Sources, structure, and when it makes sense.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/gap-funding-real-estate' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function GapFunding() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Gap Funding in Real Estate: What It Is and How to Use It</h1>
      <div style={s.intro}>Hard money lenders typically fund 65–75% of ARV. If your purchase price plus rehab exceeds that ceiling, you have a gap. Gap funding covers that shortfall using a second loan or equity partner. Here's how it works.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>When Gap Funding Is Needed</h2>
      <p style={s.p}>Example: ARV = $350,000. Hard money lends 70% = $245,000. Your total project cost (purchase + rehab) = $265,000. Gap = $20,000. You need gap funding to cover the $20,000 the hard money doesn't provide.</p>
      <h2 style={s.h2}>Gap Funding Sources</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Private lender second position:</strong> A private lender takes a second lien position behind the hard money first. Higher rate (12–18%) because of subordinate position. Often called a "mezzanine" loan.</li>
        <li style={s.li}><strong>Equity partner:</strong> Partner contributes gap capital in exchange for a profit share. No interest — profit split instead.</li>
        <li style={s.li}><strong>Your own capital:</strong> Simplest option if you have reserves. No interest, no partner, full profit.</li>
        <li style={s.li}><strong>Seller financing for the gap:</strong> Seller carries a small second mortgage for the gap amount. Requires seller cooperation.</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Model Your Full Capital Stack Free</div>
        <div style={s.ctaText}>Freddie calculates returns at any financing structure — first position, gap funding, equity partner. See your real ROI before committing. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Model My Capital Stack Free →</a>
      </div>
      <h2 style={s.h2}>Gap Funding Economics</h2>
      <p style={s.p}>Gap funding at 15% on $20,000 for 8 months = $2,000. If the deal produces $50,000 profit, that $2,000 cost is worth paying to close a deal you couldn't otherwise fund. If the deal produces $25,000 profit, think more carefully about whether the return justifies the additional complexity and cost.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
