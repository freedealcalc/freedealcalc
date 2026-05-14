import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'What is a DSCR Loan? How to Use It for Investment Properties | FreeDealCalc', description: 'DSCR loans explained — how Debt Service Coverage Ratio loans work, current 2026 rates, qualification requirements, and when to use them for rental property.', alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-dscr-loan' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
export default async function DSCRLoan() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>What is a DSCR Loan? How to Use It for Investment Properties</h1>
      <div style={s.intro}>A DSCR loan qualifies you based on the property's rental income, not your personal income. If the property's rent covers the mortgage payment at the required ratio, you qualify — no tax returns, no W-2s, no personal DTI calculation.</div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>
      <p style={s.p}>DSCR loans have become the dominant financing vehicle for investment rental properties over the last several years. They let investors scale a portfolio without the income documentation constraints of conventional financing. Here's exactly how they work.</p>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Rental Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>The DSCR Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>DSCR = Monthly Rent ÷ Monthly PITIA</div></div>
      <p style={s.p}>PITIA = Principal + Interest + Taxes + Insurance + Association dues. If monthly rent is $2,400 and PITIA is $1,800: DSCR = 2400 / 1800 = 1.33. Most lenders require a minimum of 1.20–1.25.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>2026 DSCR Loan Terms</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Interest rates:</strong> 6.5–8.5% depending on credit score, LTV, and DSCR ratio</li>
        <li style={s.li}><strong>Down payment:</strong> 20–25% standard; some lenders at 15% with higher rates</li>
        <li style={s.li}><strong>Minimum DSCR:</strong> 1.20 most lenders; 1.25 is more common</li>
        <li style={s.li}><strong>No-ratio DSCR:</strong> Some lenders allow DSCR below 1.0 with lower LTV (0.80–0.90)</li>
        <li style={s.li}><strong>Credit score:</strong> 620 minimum; 700+ gets significantly better rates</li>
        <li style={s.li}><strong>Loan amounts:</strong> $100K–$5M+ depending on lender</li>
        <li style={s.li}><strong>Property types:</strong> SFR, 2–8 units, condos, short-term rentals at some lenders</li>
        <li style={s.li}><strong>Prepayment penalty:</strong> Common on DSCR loans — 3, 2, 1 step-down or 5-year penalty structures</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>DSCR vs. Conventional Investment Loan</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Qualification:</strong> DSCR uses property income. Conventional uses your personal DTI (max 45%).</li>
        <li style={s.li}><strong>Rate:</strong> DSCR typically 0.5–1.0% higher than conventional investment loans</li>
        <li style={s.li}><strong>Scalability:</strong> DSCR doesn't count against your personal debt load — conventional investment loans do</li>
        <li style={s.li}><strong>Documentation:</strong> DSCR is much faster and simpler — no tax returns, no employment verification</li>
        <li style={s.li}><strong>Entity:</strong> DSCR loans can often close in an LLC. Conventional investment loans typically require individual ownership.</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Check If Your Rental Qualifies for DSCR</div>
        <div style={s.ctaText}>FreeDealCalc calculates your DSCR ratio automatically — rent, PITIA, and whether you hit the 1.25 threshold — free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My DSCR Free →</a>
      </div>
      <h2 style={s.h2}>When DSCR Doesn't Work</h2>
      <ul style={s.ul}>
        <li style={s.li}>Rental income doesn't cover PITIA at 1.20+ (negative leverage situation)</li>
        <li style={s.li}>Short-term rental markets where lenders won't use projected STR income for qualification</li>
        <li style={s.li}>Properties that need significant rehab before they can generate market rent</li>
      </ul>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has financed rental properties in Northern Virginia for 20+ years.</p>
    </div>
  );
}
