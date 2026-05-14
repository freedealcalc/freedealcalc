import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'Self-Managing vs Property Manager: Which Is Right for You? | FreeDealCalc',
  description: 'Landlord vs property manager — what a PM actually does, what it costs, when to hire one, and when self-managing makes more sense.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/landlord-vs-property-manager' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function LandlordVsPM() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Self-Managing vs Property Manager: Which Is Right for You?</h1>
      <div style={s.intro}>Property management costs 8–12% of collected rent. On a $2,200/month rental, that's $2,100–$3,200/year. Is it worth it? The answer depends on your time, your distance from the property, and your tolerance for tenant calls at 11pm.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>What a Property Manager Actually Does</h2>
      <ul style={s.ul}>
        <li style={s.li}>Marketing and leasing — listings, showings, screening, lease execution</li>
        <li style={s.li}>Rent collection and enforcement</li>
        <li style={s.li}>Maintenance coordination — 24/7 emergency response</li>
        <li style={s.li}>Vendor management — maintenance and repair scheduling</li>
        <li style={s.li}>Legal compliance — notices, lease renewals, eviction management</li>
        <li style={s.li}>Monthly owner statements and annual tax documents</li>
      </ul>
      <h2 style={s.h2}>PM Cost Structure</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Monthly management fee:</strong> 8–12% of collected rent</li>
        <li style={s.li}><strong>Leasing fee:</strong> 50–100% of one month's rent for new tenant placement</li>
        <li style={s.li}><strong>Lease renewal fee:</strong> $150–$300</li>
        <li style={s.li}><strong>Maintenance markup:</strong> 10–15% on repairs above a threshold</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Factor PM Costs Into Your Rental Analysis</div>
        <div style={s.ctaText}>FreeDealCalc includes property management fees in the cash flow analysis — see your real return with or without a PM. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Run My Rental Analysis Free →</a>
      </div>
      <h2 style={s.h2}>When to Hire a PM</h2>
      <ul style={s.ul}>
        <li style={s.li}>Property is more than 30 minutes from your home or office</li>
        <li style={s.li}>You have multiple properties and can't manage the volume</li>
        <li style={s.li}>You have a demanding day job and can't respond quickly to tenant issues</li>
        <li style={s.li}>You're out of state</li>
        <li style={s.li}>You don't want to handle tenant conflict directly</li>
      </ul>
      <h2 style={s.h2}>When Self-Managing Makes Sense</h2>
      <p style={s.p}>Local property, one or two units, quality tenants you've vetted carefully, and the discipline to enforce lease terms consistently. Self-management saves $2,000–$4,000 per unit per year. With two properties that's $8,000/year — meaningful money that compounds over time.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
