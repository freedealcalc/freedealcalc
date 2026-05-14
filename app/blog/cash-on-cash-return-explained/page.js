import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'Cash-on-Cash Return: What It Is and How to Calculate It | FreeDealCalc',
  description: 'Cash-on-cash return explained — the formula, what counts as good, and how it differs from cap rate and total ROI for rental property investors.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/cash-on-cash-return-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
export default async function CashOnCash() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Cash-on-Cash Return: What It Is and How to Calculate It</h1>
      <div style={s.intro}>Cash-on-cash return measures the annual pre-tax cash flow you receive relative to the total cash you invested. It's the most useful metric for leveraged rental property investors because it accounts for your financing — unlike cap rate, which assumes an all-cash purchase.</div>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Rental Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>The Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>CoC Return = Annual Pre-Tax Cash Flow ÷ Total Cash Invested</div></div>
      <h3 style={s.h3}>Example</h3>
      <ul style={s.ul}>
        <li style={s.li}><strong>Purchase price:</strong> $350,000</li>
        <li style={s.li}><strong>Down payment (25%):</strong> $87,500</li>
        <li style={s.li}><strong>Closing costs:</strong> $6,000</li>
        <li style={s.li}><strong>Rehab to rent-ready:</strong> $12,000</li>
        <li style={s.li}><strong>Total cash invested:</strong> $105,500</li>
        <li style={s.li}><strong>Monthly rent:</strong> $2,400</li>
        <li style={s.li}><strong>Monthly expenses (mortgage + operating):</strong> $2,050</li>
        <li style={s.li}><strong>Monthly cash flow:</strong> $350</li>
        <li style={s.li}><strong>Annual cash flow:</strong> $4,200</li>
        <li style={s.li}><strong>Cash-on-cash return:</strong> $4,200 / $105,500 = <strong>3.98%</strong></li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>What Is a Good Cash-on-Cash Return?</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Below 4%:</strong> Thin — relying heavily on appreciation. Common in high-cost markets like Northern Virginia.</li>
        <li style={s.li}><strong>4–8%:</strong> Acceptable in most markets. Reasonable blend of cash flow and appreciation potential.</li>
        <li style={s.li}><strong>8–12%:</strong> Strong cash flow. Typically found in secondary markets or value-add acquisitions.</li>
        <li style={s.li}><strong>12%+:</strong> Exceptional. Usually distressed markets, high risk, or exceptional buying.</li>
      </ul>
      <p style={s.p}>In Northern Virginia, 3–6% cash-on-cash is realistic on stabilized single-family rentals. Investors accept thin cash flow because appreciation and equity build over time compensate. If you need cash flow today, look in secondary markets. If you want long-term wealth preservation, Northern Virginia works.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>Cash-on-Cash vs. Cap Rate vs. Total ROI</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Cap rate:</strong> Income yield assuming no financing. Used to compare properties independent of how they're financed.</li>
        <li style={s.li}><strong>Cash-on-cash:</strong> Actual cash yield on your invested capital, accounting for your specific loan terms. Most useful for leveraged investors.</li>
        <li style={s.li}><strong>Total ROI:</strong> Includes appreciation, principal paydown, tax benefits, and cash flow. The complete picture but requires assumptions about future value.</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Calculate Cash-on-Cash Return Free</div>
        <div style={s.ctaText}>FreeDealCalc runs cash-on-cash, cap rate, and full rental property analysis — including your actual financing terms — free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Rental Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia for 20+ years.</p>
    </div>
  );
}
