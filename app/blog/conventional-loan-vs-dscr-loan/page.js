import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'Conventional Investment Loan vs DSCR Loan: Which Is Better? | FreeDealCalc',
  description: 'Conventional loan vs DSCR loan for investment properties — rates, qualification requirements, LTV, and when each makes more sense for real estate investors.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/conventional-loan-vs-dscr-loan' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function ConvVsDSCR() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Conventional Investment Loan vs DSCR Loan: Which Is Better?</h1>
      <div style={s.intro}>Both conventional and DSCR loans are legitimate tools for rental property financing. The best choice depends on your income documentation, how many properties you own, and whether you're buying in an LLC. Here's how they compare.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Conventional Investment Loan</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Qualification:</strong> Your personal income, DTI (max 45%), credit score, and employment history</li>
        <li style={s.li}><strong>Rate:</strong> Typically 0.5–1.0% lower than DSCR</li>
        <li style={s.li}><strong>Down payment:</strong> 15–25% for investment properties</li>
        <li style={s.li}><strong>LTV:</strong> Up to 85% for SFR investment, 75–80% for multifamily</li>
        <li style={s.li}><strong>Fannie/Freddie limit:</strong> Maximum 10 financed properties under conventional guidelines</li>
        <li style={s.li}><strong>Entity:</strong> Must be in personal name — not LLC</li>
        <li style={s.li}><strong>Process:</strong> Full documentation — W-2s, tax returns, employment verification</li>
      </ul>
      <h2 style={s.h2}>DSCR Loan</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Qualification:</strong> Property income covers debt service (1.20–1.25 DSCR minimum)</li>
        <li style={s.li}><strong>Rate:</strong> 0.5–1.0% higher than conventional</li>
        <li style={s.li}><strong>Down payment:</strong> 20–25%</li>
        <li style={s.li}><strong>No property limit:</strong> Scale indefinitely without hitting DTI caps</li>
        <li style={s.li}><strong>Entity friendly:</strong> Can close in LLC</li>
        <li style={s.li}><strong>Process:</strong> Lease and rent schedule only — no personal income docs</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Run Your DSCR Ratio Before Applying</div>
        <div style={s.ctaText}>Freddie calculates your DSCR and tells you whether you qualify for financing — free before you talk to any lender.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Check My DSCR Free →</a>
      </div>
      <h2 style={s.h2}>Which to Use When</h2>
      <p style={s.p}>Properties 1–4: Use conventional for the lower rate. Properties 5+: DSCR becomes the primary tool as conventional DTI limits tighten. LLC purchases: DSCR is your only option. Self-employed investors with complex tax returns: DSCR avoids the income documentation challenge entirely.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
