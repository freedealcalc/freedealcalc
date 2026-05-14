import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Flip Multi-Family Real Estate | FreeDealCalc",
  description: "How small multi-family house flipping differs from SFR flips. Buyer pool, valuation approach, rehab scope, and where the profit comes from.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-flip-multi-family' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Run any multi-family address through Freddie — ARV, deal score, and profit estimate free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Multi-Family Deal →</a>
  </div>
);
export default async function FlipMultiFamily() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Flip Multi-Family Properties</h1>
      <div style={s.intro}>Flipping small multifamily properties — duplexes, triplexes, and small apartment buildings — produces larger dollar profits per transaction than SFR flips but requires a different analysis framework, a different buyer pool, and a more complex renovation scope.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>How Multi-Family is Valued</h2>
      <p style={s.p}>Small multi-family properties (2–4 units) are primarily valued by comparable sales — similar to SFR. As you move to 5+ unit buildings, income-based valuation (NOI divided by cap rate) becomes the dominant method. Understanding which method applies to your specific property is critical for ARV calculation. A 4-unit building in an area with strong investor sales comps may be valued differently than the income approach would suggest.</p>
      <h2 style={s.h2}>The Multi-Family Flip Buyer</h2>
      <p style={s.p}>Your buyer pool for a renovated duplex or triplex is different from SFR. Investors and house hackers dominate. Investors underwrite deals on cap rate and cash flow — your property must pencil as a rental to get a buyer offer. House hackers are motivated by the ability to offset their mortgage with rental income — show the actual rent potential clearly in your listing materials.</p>
      <h2 style={s.h2}>Rehab Scope Differences</h2>
      <p style={s.p}>Multi-family rehabs involve the same unit-by-unit scope as SFR — kitchen, bath, flooring, paint — but multiplied by each unit. Common building-level items add to scope: shared laundry rooms, exterior common areas, shared HVAC or boiler systems, parking areas, and hallways. Budget $15k–$25k per unit for a cosmetic renovation and $40k–$65k per unit for a full gut.</p>
      <h2 style={s.h2}>Profit Potential</h2>
      <p style={s.p}>A renovated 4-unit building acquired at $350k with $120k rehab and ARV of $600k produces $130k gross profit before selling costs — significantly more than a typical SFR flip. The larger dollar amounts require more capital but also more expertise. Stick to 2–4 unit buildings until you have the experience base for larger transactions.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Multi-Family Flip</div>
        <div style={s.ctaText}>Run any multi-family address through Freddie — ARV, deal score, and profit estimate in 60 seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Multi-Family Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
