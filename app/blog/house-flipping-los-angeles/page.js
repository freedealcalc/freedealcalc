import { getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "House Flipping in Los Angeles: 2026 Market Guide",
  description: "How to flip houses in Los Angeles in 2026. High ARVs, high competition, best submarkets, and how to make the numbers work in an expensive market.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-flipping-los-angeles' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>High ARVs demand precise math — Freddie gives you ARV, MAO, and profit in seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze Free →</a>
  </div>
);
export default async function HouseFlippingLosAngeles() {
  const market = await getMarketData('los-angeles-ca');
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>House Flipping in Los Angeles: 2026 Market Guide</h1>
      <div style={s.intro}>Los Angeles is the highest-ARV flip market in the continental US. The deals exist — they are just buried under layers of competition, entitlement risk, and carrying costs that punish slow execution.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>The LA Flip Equation</h2>
      <p style={s.p}>Los Angeles flipping is a high-leverage, high-stakes game. ARVs in desirable submarkets run $800k–$2M+, which means a 70% rule MAO can still be a $600k+ purchase price. The math works — but only if you buy right, execute fast, and do not let carrying costs erode your margin. At $5k–$8k per month in carrying costs, a 10-month flip eats $50k–$80k before you sell.</p>
      <h2 style={s.h2}>Best LA Submarkets for Flippers</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>East Los Angeles / Boyle Heights</strong> — lower entry, ARVs $600k–$800k, rising demand</li>
        <li style={s.li}><strong>Inglewood</strong> — stadium effect driving appreciation, ARVs $700k–$950k</li>
        <li style={s.li}><strong>Koreatown</strong> — dense, walkable, ARVs $700k–$1.1M, strong condo and SFR demand</li>
        <li style={s.li}><strong>Highland Park / Eagle Rock</strong> — established flip corridor, ARVs $900k–$1.3M</li>
        <li style={s.li}><strong>Compton / Paramount</strong> — highest upside per dollar in, ARVs $550k–$750k</li>
      </ul>
      <h2 style={s.h2}>ADU Strategy</h2>
      <p style={s.p}>California ADU laws are among the most permissive in the country. Adding a permitted ADU can boost ARV by $150k–$300k in many LA submarkets. Buyers pay a premium for turnkey ADUs with kitchens and separate entrances. If the lot and setbacks allow it, an ADU addition is often the highest-return scope item available in LA flips.</p>
      <h2 style={s.h2}>Permitting Reality</h2>
      <p style={s.p}>LA building and safety permitting is notoriously slow. Simple permits take 4–8 weeks. Complex structural work or ADU additions can take 3–6 months. Unpermitted work is rampant in older LA housing stock — budget for legalization or disclosure. Buyers are sophisticated and will flag unpermitted square footage in appraisals.</p>
      <h2 style={s.h2}>Financing in LA</h2>
      <p style={s.p}>Hard money is widely available in LA at 9–12% with 65–75% ARV LTV. Many national platforms lend here. On $1M+ purchases you may need 25–35% down even with hard money. Proof of reserves and experience history matter more at this price tier — prepare your track record documentation before approaching lenders.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your LA Deal Free</div>
        <div style={s.ctaText}>High ARVs demand precise math. Run your LA deal through Freddie — ARV, MAO, deal score, and profit estimate in 60 seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My LA Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
