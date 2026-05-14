import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Lease Options in Real Estate Explained | FreeDealCalc",
  description: "How lease option agreements work in real estate. Sandwich lease options, rent credits, option fees, and who they benefit most.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/lease-option-real-estate-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Know the market value on any lease option property — Freddie pulls the data free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Deal Free →</a>
  </div>
);
export default async function LeaseOption() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Lease Options in Real Estate Explained</h1>
      <div style={s.intro}>A lease option combines a rental agreement with an option to purchase — giving the tenant-buyer the right to buy the property at a predetermined price within a set time period. For investors, lease options create multiple income streams and flexible exit paths that standard transactions do not offer.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>How a Lease Option Works</h2>
      <p style={s.p}>The tenant-buyer pays an upfront option fee (typically 2–5% of purchase price) for the right to buy. They pay above-market monthly rent, with a portion credited toward the purchase price. At the end of the option period (typically 1–3 years), they can exercise the option to buy at the predetermined price, or walk away — forfeiting their option fee and rent credits.</p>
      <h2 style={s.h2}>The Sandwich Lease Option</h2>
      <p style={s.p}>The sandwich lease option is an investor structure where you lease a property from a seller with an option to buy, then sublease it to a tenant-buyer at higher rent with their own purchase option. You profit on the monthly spread (higher rent collected vs lower rent paid) and on the price spread (your option price from the seller vs the higher option price to your tenant-buyer). This requires no purchase capital if structured correctly.</p>
      <h2 style={s.h2}>Benefits for Tenant-Buyers</h2>
      <p style={s.p}>Tenant-buyers who cannot currently qualify for a mortgage — due to credit issues, self-employment income documentation, or recent financial events — use lease options to lock in a purchase price now and build toward qualification during the option period. They get time to improve their financial picture while living in the home they intend to buy.</p>
      <h2 style={s.h2}>Risks to Manage</h2>
      <p style={s.p}>Tenant-buyers who do not exercise their option leave you with a property you need to re-lease or sell. If market prices drop below the option price, tenant-buyers are unlikely to exercise. Legal structure varies by state — some states treat lease options similarly to installment sales with additional disclosure requirements. Work with a real estate attorney familiar with your state's laws before executing lease option structures.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Lease Option Properties</div>
        <div style={s.ctaText}>Know the current market value and rental income on any lease option candidate. Freddie pulls the data free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
