import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Sell a House As-Is Without Making Repairs | FreeDealCalc",
  description: "How to sell a house as-is — what it means, what buyers expect, how pricing works, and whether cash investor or MLS is the right path for your situation.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/sell-house-as-is-without-repairs' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function SellAsIs() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Sell a House As-Is Without Making Repairs</h1>
      <div style={s.intro}>Selling as-is means you're not making repairs before closing. The buyer takes the property in its current condition. It's a legitimate option — and often the right one — when you don't have the time, money, or desire to renovate before selling.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>What As-Is Actually Means</h2>
      <p style={s.p}>As-is doesn't mean you can hide defects. In most states you still have disclosure obligations — known material defects must be disclosed. What as-is means is that you won't be making repairs in response to a buyer's inspection findings. The buyer accepts the property in its current state.</p>
      <h2 style={s.h2}>Two Paths for Selling As-Is</h2>
      <h3 style={s.h3}>Cash Investor Sale</h3>
      <p style={s.p}>Investors buy as-is by design. No inspection contingency renegotiations, no repair requests, no financing falling through at the appraisal. Close in 14–21 days. You accept a discount — typically 20–35% below retail — in exchange for certainty and speed.</p>
      <h3 style={s.h3}>MLS Listing as As-Is</h3>
      <p style={s.p}>List on MLS priced to reflect the condition. Attract retail buyers who want a project or investors looking for MLS deals. Wider buyer pool than a direct investor sale, potentially higher price, but slower and with more friction. Buyers can still do inspections — they just can't demand repairs.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Get an Investor Offer Estimate Free</div>
        <div style={s.ctaText}>FreeDealCalc estimates what a cash investor would pay for your property in as-is condition — free, no obligation, instant analysis.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Get My As-Is Offer Estimate →</a>
      </div>
      <h2 style={s.h2}>How As-Is Properties Are Priced</h2>
      <p style={s.p}>Investor pricing formula: (ARV × 0.65–0.70) − Estimated Rehab. If a property in good condition would sell for $350,000 and needs $60,000 in work, an investor might pay $175,000–$185,000. MLS as-is pricing is typically higher — $240,000–$270,000 — because retail buyers with renovation loans (203k, renovation mortgage) can pay more.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
