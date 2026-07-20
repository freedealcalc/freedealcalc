import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "House Hacking Guide: Live Free While Building Wealth",
  description: "Everything you need to know about house hacking. Strategies, financing, property types, and how to reduce or eliminate your housing cost while building",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-hacking-guide' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>See if the rental income covers your mortgage — Freddie models it free before you buy.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My House Hack Deal →</a>
  </div>
);
export default async function HouseHacking() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>House Hacking: The Complete Guide to Living for Free</h1>
      <div style={s.intro}>House hacking means buying a property, living in one unit, and renting out the other units or rooms to offset or eliminate your mortgage payment. It is the most accessible path into real estate investing because you use owner-occupant financing — the best rates and lowest down payments available.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Why House Hacking Works</h2>
      <p style={s.p}>Owner-occupant financing — FHA at 3.5% down, conventional at 3–5% down — gives you access to loan terms that investment property buyers cannot get. A duplex, triplex, or quadplex purchased with an FHA loan lets you put 3.5% down on a multi-unit building, live in one unit, and collect rent from the others. In many markets, the rental income from adjacent units covers most or all of the mortgage.</p>
      <h2 style={s.h2}>Best Property Types for House Hacking</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Duplex:</strong> Most common, easiest to finance, tenant-in-one-unit situation is manageable</li>
        <li style={s.li}><strong>Triplex or quadplex:</strong> More rental income, still FHA-eligible up to 4 units, more management complexity</li>
        <li style={s.li}><strong>Single-family with ADU:</strong> Live in main house, rent the ADU — more private than sharing a multi-unit building</li>
        <li style={s.li}><strong>Single-family with room rentals:</strong> Rent individual rooms to roommates — highest income per dollar, lowest privacy</li>
      </ul>
      <h2 style={s.h2}>The Financial Case</h2>
      <p style={s.p}>Consider a $400k duplex with 5% down ($20k). Monthly payment: $2,800. Rent from the other unit: $1,600. Net housing cost: $1,200 — well below renting a comparable unit. Meanwhile, you are building equity through appreciation and principal paydown. After one year, you can move out, convert to a full rental, and repeat with a new house hack.</p>
      <h2 style={s.h2}>The House Hacking Exit</h2>
      <p style={s.p}>After 12 months of owner-occupancy (required by most loans), you can move out and rent both units at market rate. Repeat the process with a new house hack purchase. Over 5–7 years, a disciplined house hacker can accumulate 5+ rental units with minimal capital deployment. Each property was purchased with owner-occupant terms and converted to investment use after the occupancy requirement.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your House Hack Deal</div>
        <div style={s.ctaText}>Run any duplex or multi-unit through Freddie — see if the rental income covers your mortgage before you buy.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My House Hack Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
