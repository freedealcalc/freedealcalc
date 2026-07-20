import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'How to Find Motivated Sellers: 10 Proven Sources', description: 'How to find motivated sellers for off-market real estate deals — the 10 best lead sources ranked by cost, volume, and deal quality.', alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-find-motivated-sellers' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function MotivatedSellers() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>11 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Find Motivated Sellers: 10 Proven Sources</h1>
      <div style={s.intro}>A motivated seller is someone who needs to sell quickly and will accept below-market value in exchange for speed and certainty. They exist in every market at every price point. The investors who find them consistently are the ones who dominate their market.</div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>
      <p style={s.p}>After 20+ years buying in Northern Virginia, my best deals have come from the same reliable sources. Here are the 10 best motivated seller lead sources, ranked by my experience.</p>
      <div style={s.divider}/><h2 style={s.h2}>Current Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>The 10 Best Motivated Seller Sources</h2>
      <h3 style={s.h3}>1. Agent Relationships</h3>
      <p style={s.p}>Licensed agents regularly encounter properties that can't be listed in traditional condition — hoarder situations, active estate sales, liens, probate complications. Build relationships with agents who specialize in distressed listings and offer to close fast on referrals. This is my highest-quality source.</p>
      <h3 style={s.h3}>2. Probate Court Records</h3>
      <p style={s.p}>When someone dies, their estate goes through probate. The executor often needs to liquidate property quickly. Probate filings are public record — most counties publish them. Contact personal representatives directly or work with probate attorneys who refer investor buyers.</p>
      <h3 style={s.h3}>3. Pre-Foreclosure Lists</h3>
      <p style={s.p}>Lis pendens (notice of default) filings are public record. These are homeowners 90+ days behind on their mortgage — highly motivated because they're facing forced sale. Timing is everything: contact them early in the process when they still have options.</p>
      <h3 style={s.h3}>4. Driving for Dollars</h3>
      <p style={s.p}>Physically identify distressed properties in target neighborhoods. Skip-trace the owner. Direct outreach. Zero cost, highly targeted, extremely effective.</p>
      <h3 style={s.h3}>5. Direct Mail</h3>
      <p style={s.p}>Target lists: absentee owners, high equity owners, tax delinquent properties, owners of vacant properties. Plan for 0.5–2% response rate. Three to four mailings before judging results.</p>
      <h3 style={s.h3}>6. Wholesale Networks</h3>
      <p style={s.p}>Other wholesalers bring deals that don't fit their criteria. Build relationships and you'll get first call on deals in your buy box that don't fit theirs.</p>
      <h3 style={s.h3}>7. Code Violation Lists</h3>
      <p style={s.p}>Municipal code departments track properties with active violations. These owners often can't sell retail, can't afford repairs, and are highly motivated to exit. Contact your county code enforcement office for public records.</p>
      <h3 style={s.h3}>8. Divorce Attorneys</h3>
      <p style={s.p}>Divorcing couples frequently need to liquidate jointly held property fast. Family law attorneys who understand you close quickly become reliable referral sources.</p>
      <h3 style={s.h3}>9. Google Ads</h3>
      <p style={s.p}>"Sell my house fast [city]" and related searches. Motivated sellers are actively searching for solutions. Budget $2,000–$5,000/month minimum for consistent leads in competitive markets.</p>
      <h3 style={s.h3}>10. REIA Networking</h3>
      <p style={s.p}>Other investors encounter off-market properties constantly. Bird dogs who bring you leads, co-wholesalers, landlords looking to exit — all found at REIA meetings and investor events.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Deals as Your Pipeline Fills</div>
        <div style={s.ctaText}>FreeDealCalc runs instant deal analysis on any property your leads bring — ARV, max offer, and full cost model — free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Deals Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been finding and buying distressed properties in Northern Virginia for 20+ years.</p>
    </div>
  );
}
