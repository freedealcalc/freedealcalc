import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'How to Sell an Inherited House: Your Options Explained | FreeDealCalc',
  description: 'How to sell an inherited house — cash sale, list on MLS, or rent it. What to do first, how to handle probate, and how to split proceeds with heirs.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-sell-inherited-house' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function SellInheritedHouse() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>10 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Sell an Inherited House: Your Options Explained</h1>
      <div style={s.intro}>Inheriting a house is overwhelming. There are decisions to make while you're grieving, family dynamics to navigate, and a property that may need work before it can be sold. Here's a clear framework for thinking through your options.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 1: Understand the Probate Situation</h2>
      <p style={s.p}>Before you can sell, the estate usually needs to go through probate — the legal process that transfers ownership from the deceased to the heirs. Timeline: 3–12 months depending on state and complexity. If there's a living trust, probate may be avoided entirely. Consult a probate attorney in your state before taking any action on the property.</p>
      <h2 style={s.h2}>Your Three Options</h2>
      <h3 style={s.h3}>Option 1: Sell to a Cash Investor</h3>
      <p style={s.p}>Fastest option — close in 14–21 days, sell as-is, no repairs, no showings. You'll accept below market value in exchange for speed and certainty. Best when the property needs significant work, when heirs need cash quickly, or when you want to avoid the hassle of a traditional sale.</p>
      <h3 style={s.h3}>Option 2: List on the MLS</h3>
      <p style={s.p}>Maximum price but more time and work. Property may need cleanout, repairs, and staging before it's ready to list. Best when the property is in good condition and heirs aren't in a rush.</p>
      <h3 style={s.h3}>Option 3: Keep and Rent</h3>
      <p style={s.p}>If the property cash flows, keeping it as a rental builds long-term wealth. Requires agreement among all heirs and someone willing to manage it or hire a property manager.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Get a Free Deal Analysis on an Inherited Property</div>
        <div style={s.ctaText}>FreeDealCalc runs the numbers on any inherited property — as-is value, what an investor would pay, and rental analysis — free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Inherited Property →</a>
      </div>
      <h2 style={s.h2}>Tax Considerations</h2>
      <p style={s.p}>Inherited property receives a stepped-up cost basis — meaning your basis is the fair market value on the date of death, not the original purchase price. If you sell quickly, capital gains are typically minimal. Consult a CPA before selling — the tax implications can be significant depending on how much the property has appreciated.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
