import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: \'Section 8 Housing for Landlords: Pros, Cons, and How It Works | FreeDealCalc',
  description: \'Section 8 landlord guide — guaranteed rent, inspection requirements, tenant screening, and whether HUD voucher tenants are right for your rental strategy.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/section-8-housing-pros-cons' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function Section8() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Section 8 Housing for Landlords: Pros, Cons, and How It Works</h1>
      <div style={s.intro}>Section 8 (Housing Choice Voucher) tenants have a government-guaranteed portion of their rent. The program has genuine advantages for landlords — and real complications. Here's the honest picture.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>How Section 8 Works</h2>
      <p style={s.p}>HUD voucher holders pay 30% of their income toward rent. The Housing Authority pays the remainder directly to the landlord — typically via ACH on the 1st of each month. The total rent must fall within the Housing Authority's payment standard for the area.</p>
      <h2 style={s.h2}>Pros for Landlords</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Guaranteed partial payment:</strong> The HA portion arrives reliably regardless of tenant financial situation</li>
        <li style={s.li}><strong>Reduced vacancy in softer markets:</strong> Voucher holders have strong motivation to maintain their housing</li>
        <li style={s.li}><strong>Long-term tenancy:</strong> Voucher holders tend to stay — moving means a new inspection and approval process</li>
        <li style={s.li}><strong>Consistent demand:</strong> Waitlists are long — vacancies fill quickly when you accept vouchers</li>
      </ul>
      <h2 style={s.h2}>Cons for Landlords</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>HQS Inspection:</strong> Property must pass Housing Quality Standards inspection before and periodically during tenancy. Failures require repairs before HA will approve.</li>
        <li style={s.li}><strong>Limited rent increases:</strong> HA must approve rent increases; they compare to local market</li>
        <li style={s.li}><strong>Administrative burden:</strong> HA paperwork, inspections, approval process adds complexity</li>
        <li style={s.li}><strong>Property wear:</strong> Long-term occupancy without mobility can mean deferred maintenance issues at turnover</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Run Your Section 8 Cash Flow Analysis</div>
        <div style={s.ctaText}>FreeDealCalc calculates cash flow at any rent level — enter the HA payment standard for your area and see the returns. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Rental Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
