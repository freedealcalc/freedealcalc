import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Pre-Foreclosure Real Estate Investing Guide | FreeDealCalc",
  description: "How to find and buy pre-foreclosure properties. The NOD-to-auction timeline, how to approach distressed homeowners, and what deals actually look like.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/pre-foreclosure-investing-guide' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Before you call a homeowner in distress, run the property through Freddie — know your offer ceiling first.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Get My Offer Ceiling Free →</a>
  </div>
);
export default async function PreForeclosure() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Pre-Foreclosure Investing: A Complete Guide</h1>
      <div style={s.intro}>Pre-foreclosure investing means buying from homeowners before the bank forecloses — when they still own the property and still have the ability to negotiate. These sellers have the highest motivation and the shortest window to act, which creates genuine deal opportunities for investors who can move quickly and handle the situation with care.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>The Pre-Foreclosure Timeline</h2>
      <p style={s.p}>After a homeowner misses 3–6 mortgage payments, the lender files a Notice of Default or lis pendens — a public record that the property is in default. This begins a redemption period of 90 days to 12 months depending on state, during which the owner can cure the default or sell the property. After this period, the property goes to foreclosure auction. The sweet spot for investors is the 60–90 days after NOD filing and before the auction date.</p>
      <h2 style={s.h2}>Finding Pre-Foreclosure Leads</h2>
      <p style={s.p}>NOD filings are public records available from the county courthouse or clerk of court. Services like PropStream, ATTOM, and REDX aggregate these filings and make them searchable. Filter for recent filings (last 30–60 days) in your target zip codes, then skip trace owner contact information and reach out immediately — the window is short.</p>
      <h2 style={s.h2}>How to Approach Distressed Homeowners</h2>
      <p style={s.p}>Pre-foreclosure sellers are in a difficult situation — approach with empathy, not a sales pitch. Acknowledge you understand the situation is stressful. Present your purchase as one of several options they have, not the only one. Be transparent about what you do: you buy at below market value in exchange for speed, cash, and no repairs. Do not pressure — sellers who feel pressured will call an attorney or housing counselor instead of accepting your offer.</p>
      <h2 style={s.h2}>Short Sales</h2>
      <p style={s.p}>When a property is worth less than the mortgage balance, a short sale may be needed. The lender must approve the below-payoff purchase price. Short sales take 60–180 days to close and require substantial paperwork. They are not a quick-flip strategy — but they can produce deals in high-equity-loss markets. Partner with a short sale-experienced agent if you pursue this path.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Pre-Foreclosure Leads Fast</div>
        <div style={s.ctaText}>Before you call a homeowner in distress, run the property through Freddie — know your offer ceiling before the conversation.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Get My Offer Ceiling Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
