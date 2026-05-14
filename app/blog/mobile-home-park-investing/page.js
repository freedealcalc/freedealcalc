import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Mobile Home Park Investing Guide | FreeDealCalc",
  description: "Introduction to mobile home park investing. Why MHPs outperform traditional rentals, how to analyze deals, and the unique risks of this asset class.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/mobile-home-park-investing' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Run your MHP or rental investment numbers through Freddie — cash flow and returns free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Rental Deal Free →</a>
  </div>
);
export default async function MobileHomePark() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Mobile Home Park Investing: A Beginner's Guide</h1>
      <div style={s.intro}>Mobile home parks have delivered some of the strongest risk-adjusted returns in real estate over the past decade. The combination of low tenant turnover, affordable housing demand, and inability to reproduce supply in most markets creates durable cash flow that attracts institutional capital — and still offers opportunities for individual investors who know the asset class.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Why MHPs Outperform</h2>
      <p style={s.p}>Mobile home parks have structural advantages that apartment buildings and SFR rentals do not. Tenants own their homes and rent only the land — which means they almost never move (average MHP tenant stays 10+ years vs 18 months in apartments). Moving a mobile home costs $3,000–$10,000 and often destroys the home. This captive tenant base produces extremely low vacancy and turnover costs.</p>
      <h2 style={s.h2}>Key Metrics for MHP Analysis</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Lot rent:</strong> Revenue per pad. Compare to market lot rents — below-market rents represent upside through rent increases</li>
        <li style={s.li}><strong>Occupancy:</strong> Filled pads divided by total pads. Below 75% requires analysis of why</li>
        <li style={s.li}><strong>Park-owned vs tenant-owned homes:</strong> Tenant-owned is better — lower maintenance exposure for the park owner</li>
        <li style={s.li}><strong>Infrastructure ownership:</strong> Are water and sewer city-connected or park-maintained wells and septic? Park-maintained is higher risk and cost</li>
        <li style={s.li}><strong>Cap rate:</strong> MHPs typically trade at 5–7% cap. Above 8% suggests problems; investigate carefully</li>
      </ul>
      <h2 style={s.h2}>How to Find MHP Deals</h2>
      <p style={s.p}>Most MHP transactions are off-market — owner-operators who have held for decades and want a quiet exit. Direct mail to park owners using county assessor data, calling parks directly, and networking with commercial brokers who specialize in manufactured housing are the primary sourcing channels. MHPBrokers.com and LoopNet list some available parks.</p>
      <h2 style={s.h2}>Risks to Understand</h2>
      <p style={s.p}>Infrastructure issues — aging water lines, failing septic systems, outdated electrical — are the most common value-destroyers in MHP investing. A full infrastructure assessment before closing is non-negotiable. Zoning is also a risk: many municipalities zone MHPs as conditional uses that cannot be rebuilt if destroyed. Confirm the zoning allows continued MHP use before buying.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your MHP Investment</div>
        <div style={s.ctaText}>Run your mobile home park or rental numbers through Freddie — cash flow, cap rate, and deal score free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Rental Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
