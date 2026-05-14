import { getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "House Flipping in Salt Lake City: 2026 Market Guide | FreeDealCalc",
  description: "Guide to house flipping in Salt Lake City in 2026. Tech job growth, limited land supply, best neighborhoods, and realistic flip profit numbers.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-flipping-salt-lake-city' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie runs SLC deal analysis free — ARV, MAO, and profit before you offer.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My SLC Deal →</a>
  </div>
);
export default async function HouseFlippingSaltLakeCity() {
  const market = await getMarketData('salt-lake-city-ut');
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>House Flipping in Salt Lake City: 2026 Market Guide</h1>
      <div style={s.intro}>Salt Lake City has one of the most constrained housing supplies in the West. Hemmed in by the Wasatch Range and Great Salt Lake, the valley has limited room for new construction — and that geographic constraint supports ARVs that reward investors who add value through renovation.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Why Salt Lake City Works for Flippers</h2>
      <p style={s.p}>Utah has led the nation in population and job growth for years. The tech sector — driven by companies in the Silicon Slopes corridor from Provo to Ogden — generates consistent buyer demand from high-income young professionals. The finite buildable land keeps resale inventory tight, meaning renovated homes sell quickly to buyers who have been outcompeted on new construction.</p>
      <h2 style={s.h2}>Best Neighborhoods for Flippers</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Rose Park</strong> — northwest SLC, transitional, ARVs $380k–$500k</li>
        <li style={s.li}><strong>Glendale / Poplar Grove</strong> — affordable entry, ARVs $360k–$460k, improving</li>
        <li style={s.li}><strong>Millcreek</strong> — suburban demand, ARVs $480k–$620k, family buyers</li>
        <li style={s.li}><strong>South Salt Lake</strong> — dense rental market, ARVs $360k–$480k</li>
        <li style={s.li}><strong>Sugar House</strong> — premium buyer market, ARVs $550k–$750k, walkability premium</li>
      </ul>
      <h2 style={s.h2}>Typical Flip Numbers</h2>
      <p style={s.p}>Mid-tier SLC flips run $320k–$400k purchase, $55k–$85k rehab, with ARVs of $500k–$620k. Execution speed matters — the market moves fast and your listing will compete with new construction in many submarkets. High-end finishes in kitchens and master baths are expected by buyers at this price tier.</p>
      <h2 style={s.h2}>Rate Sensitivity</h2>
      <p style={s.p}>Utah buyers are more rate-sensitive than many other Western markets because the buyer base skews younger with smaller down payments. Rate movements affect days on market meaningfully. Time your listing to align with rate windows — buyer activity spikes on any rate improvement. Have your marketing ready to launch immediately upon completion.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Salt Lake City Deal Free</div>
        <div style={s.ctaText}>Run your SLC flip through Freddie — ARV, MAO, deal score, and profit estimate before you make your offer.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My SLC Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
