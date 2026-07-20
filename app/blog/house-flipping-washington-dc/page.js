import { getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "House Flipping in Washington DC: 2026 Market Guide",
  description: "Guide to house flipping in the Washington DC metro area in 2026.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-flipping-washington-dc' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie analyzes any DC metro deal free — ARV, MAO, and profit estimate in seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My DC Deal →</a>
  </div>
);
export default async function Page() {
  const market = await getMarketData('washington-dc');
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>House Flipping in Washington DC: 2026 Market Guide</h1>
      <div style={s.intro}>The Washington DC metro is one of the strongest flip markets in the country. Stable government employment, consistent population density, and a deep inventory of aging rowhouses and colonials create reliable deal flow for investors who know the market.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/><h2 style={s.h2}>Why DC Works for Flippers</h2>
      <p style={s.p}>The DC metro combines high ARVs, stable buyer demand from government workers and contractors, and significant aging housing stock. Row homes in transitional neighborhoods, colonials in suburban Maryland, and townhouses in Northern Virginia all represent active flip inventory.</p>
      <div style={s.divider}/><h2 style={s.h2}>Best DC Metro Flip Markets</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>DC proper / Capitol Hill fringe</strong> — Premium tier, ARVs $700k–$1.1M, high rehab costs</li>
        <li style={s.li}><strong>Prince George's County MD</strong> — High volume, ARVs $350k–$520k, strong workforce demand</li>
        <li style={s.li}><strong>Montgomery County MD</strong> — Stable market, ARVs $500k–$750k, competitive</li>
        <li style={s.li}><strong>Alexandria / Arlington VA</strong> — Premium suburban, ARVs $600k–$900k, fast turnover</li>
        <li style={s.li}><strong>Prince William County VA</strong> — High volume entry tier, ARVs $380k–$520k, good inventory</li>
      </ul>
      <div style={s.divider}/><h2 style={s.h2}>Row Home Rehab Scope</h2>
      <p style={s.p}>DC and inner-suburb row homes follow a repeatable scope: foundation waterproofing ($5k–$15k), updated electrical (knob-and-tube is common in pre-1960 stock, $8k–$15k), new HVAC ($8k–$14k), kitchen and bath updates ($25k–$45k), flooring ($8k–$14k). Budget $80k–$130k for full gut rehabs.</p>
      <div style={s.divider}/><h2 style={s.h2}>Permit Reality</h2>
      <p style={s.p}>DC proper has strict permitting requirements and inspection timelines. Budget 30–45 extra days for permit approval on major renovations. Suburban Maryland (PG County, Montgomery) moves faster. Northern Virginia counties vary by jurisdiction.</p>
      <div style={s.divider}/><h2 style={s.h2}>Typical Numbers</h2>
      <p style={s.p}>Inner DC row homes: purchase $350k–$500k, rehab $80k–$130k, ARV $600k–$900k, net profit $60k–$120k on well-executed projects. Suburban Maryland and NoVA colonials run lower entry prices with proportionally lower ARVs.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Free</div>
        <div style={s.ctaText}>Freddie analyzes any DC metro deal free — ARV, MAO, and profit estimate in seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My DC Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He is an active investor in the Washington DC metro area with 20+ years of fix-and-flip experience.</p>
    </div>
  );
}
