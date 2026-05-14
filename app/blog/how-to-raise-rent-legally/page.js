import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'How to Raise Rent Legally: A Landlord's Guide | FreeDealCalc',
  description: 'How to raise rent legally — proper notice requirements, how much you can raise, what rent control means for your property, and how to handle tenant pushback.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-raise-rent-legally' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function RaiseRent() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Raise Rent Legally: A Landlord's Guide</h1>
      <div style={s.intro}>Rent increases are how rental portfolios keep pace with inflation and growing operating costs. Done correctly, they're a normal part of the landlord-tenant relationship. Done incorrectly, they create legal exposure.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Notice Requirements by Situation</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Month-to-month tenancy:</strong> Typically 30–60 days written notice required before the increase takes effect. Virginia requires 30 days minimum.</li>
        <li style={s.li}><strong>Fixed-term lease:</strong> Cannot raise rent during the lease term unless the lease explicitly allows it. Increases take effect at renewal.</li>
        <li style={s.li}><strong>At renewal:</strong> Provide written notice at least 30–60 days before the lease expiration date with the new rent amount.</li>
      </ul>
      <h2 style={s.h2}>How Much Can You Raise?</h2>
      <p style={s.p}>In markets without rent control: as much as the market will bear. Practical limits are set by local vacancy rates and comparable rents. Raise significantly above market and you risk vacancy — a month of vacancy typically costs more than a year of below-market rent.</p>
      <p style={s.p}>In rent-controlled markets: the increase is capped by local ordinance — typically CPI, a fixed percentage, or a formula. Know your local law before sending any notice.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Run Your Rental Numbers at New Rent</div>
        <div style={s.ctaText}>FreeDealCalc recalculates cash flow, cap rate, and DSCR at any rent level. See how a $200 rent increase affects your returns. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Recalculate My Returns Free →</a>
      </div>
      <h2 style={s.h2}>How to Handle Tenant Pushback</h2>
      <p style={s.p}>Be direct and matter-of-fact. "Operating costs have increased and I'm adjusting rent to $X effective [date]." Provide proper written notice. Don't apologize for a legal and reasonable increase. Offer to discuss concerns but hold firm on the number if it's justified by the market. Good tenants who've been properly cared for usually accept reasonable increases rather than move.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
