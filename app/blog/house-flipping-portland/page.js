import { getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "House Flipping in Portland: 2026 Market Guide | FreeDealCalc",
  description: "Guide to flipping houses in Portland Oregon in 2026. Market trends, best neighborhoods, Craftsman rehab tips, and realistic profit numbers.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-flipping-portland' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie analyzes Portland deals free — ARV from Rentcast comps, deal score, and profit.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Portland Deal →</a>
  </div>
);
export default async function HouseFlippingPortland() {
  const market = await getMarketData('portland-or');
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>House Flipping in Portland: 2026 Market Guide</h1>
      <div style={s.intro}>Portland offers a strong Craftsman and bungalow inventory ripe for modernization, a young buyer pool that pays premiums for renovated homes, and ARVs that support the 70% rule in transitional corridors east of 82nd Avenue.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Portland Flip Market Overview</h2>
      <p style={s.p}>Portland cooled in 2022–2023 after years of rapid appreciation, which actually improved conditions for flippers — purchase prices came down while the exit buyer pool remains healthy. The city's urban growth boundary limits new construction, creating durable demand for renovated existing housing. East Portland offers the best current value for flippers.</p>
      <h2 style={s.h2}>Target Neighborhoods</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Montavilla</strong> — east side, ARVs $380k–$500k, strong millennial buyer demand</li>
        <li style={s.li}><strong>St. Johns</strong> — north Portland, ARVs $340k–$460k, rising rapidly</li>
        <li style={s.li}><strong>Lents / Foster-Powell</strong> — southeast, ARVs $360k–$480k, light rail access drives demand</li>
        <li style={s.li}><strong>Cully</strong> — northeast, ARVs $380k–$500k, diverse buyer pool</li>
        <li style={s.li}><strong>Kenton</strong> — north Portland, affordable entry, ARVs $320k–$420k</li>
      </ul>
      <h2 style={s.h2}>Craftsman Rehab Strategy</h2>
      <p style={s.p}>Portland buyers love original Craftsman details. Preserving or restoring built-ins, original hardwood floors, and period millwork adds significant value and reduces scope. Strip vinyl siding to find original cedar siding worth restoring. A $5k restoration of original hardwood often delivers more value than $15k of new LVP. Know your buyer — they are paying for authenticity.</p>
      <h2 style={s.h2}>ADU Opportunities</h2>
      <p style={s.p}>Portland has permissive ADU regulations. A detached or attached ADU in the backyard can add $120k–$200k to ARV in desirable eastside neighborhoods. Portland ADU permits move faster than many other cities. If the lot allows it, scoping an ADU addition can be the difference between a single and a double on your return.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Portland Deal Free</div>
        <div style={s.ctaText}>Run your Portland address through Freddie — ARV from Rentcast comps, deal score, and profit estimate in seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Portland Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
