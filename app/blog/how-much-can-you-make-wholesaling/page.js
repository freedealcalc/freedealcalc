import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How Much Can You Make Wholesaling Real Estate? | FreeDealCalc",
  description: "Real income numbers from wholesaling real estate — average assignment fees, deals per year, and what separates low earners from high earners.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-much-can-you-make-wholesaling' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Calculate your assignment fee potential on any deal — Freddie runs it free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Calculate My Assignment Fee →</a>
  </div>
);
export default async function WholesaleIncome() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How Much Can You Make Wholesaling Real Estate?</h1>
      <div style={s.intro}>Wholesaling income varies from a few thousand dollars per deal to over $50,000 — and from one deal a year to 50+. The range is wide because wholesaling is a business, not a job. Your income is a direct function of your deal flow, market selection, and execution.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Average Assignment Fees by Market Type</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Affordable markets (Cleveland, Memphis, Detroit):</strong> $5,000–$15,000 per deal</li>
        <li style={s.li}><strong>Mid-tier markets (Atlanta, Indianapolis, Kansas City):</strong> $10,000–$25,000 per deal</li>
        <li style={s.li}><strong>Premium markets (DC, LA, Seattle):</strong> $20,000–$60,000+ per deal</li>
      </ul>
      <p style={s.p}>These are typical deal ranges — outlier deals exist in every market. A premium commercial strip or deeply distressed property in any market can generate a much larger fee. But for planning purposes, use the ranges above for your market.</p>
      <h2 style={s.h2}>Income Model at Different Activity Levels</h2>
      <p style={s.p}>Part-time wholesaler closing 2 deals/month in a mid-tier market: $20k–$50k/month gross, less marketing costs of $4k–$8k/month. Full-time solo wholesaler closing 4–6 deals/month: $40k–$150k/month gross depending on deal size and market. Team-based operation with cold callers and a dispo specialist: $100k–$400k/month gross revenue possible, with higher overhead.</p>
      <h2 style={s.h2}>What Separates High Earners</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Lead volume:</strong> High earners make more calls, send more mail, run more campaigns — consistently</li>
        <li style={s.li}><strong>Deal discipline:</strong> They pass on marginal deals instead of chasing small fees</li>
        <li style={s.li}><strong>Buyer relationships:</strong> Deep lists of qualified buyers who close fast on good deals</li>
        <li style={s.li}><strong>Accurate underwriting:</strong> They know ARV and rehab before they negotiate, not after</li>
      </ul>
      <h2 style={s.h2}>The Real First-Year Expectation</h2>
      <p style={s.p}>Most new wholesalers close their first deal in months 3–6. Year one income for a serious part-time wholesaler is typically $30k–$80k. Year two, with systems and a buyers list in place, often doubles year one. The growth curve is steep once you have deal flow — the hard part is surviving the first six months of ramp.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Know Your Fee Before You Negotiate</div>
        <div style={s.ctaText}>Calculate your MAO and assignment fee potential on any deal before you talk to the seller. Freddie is free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Assignment Fee →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
