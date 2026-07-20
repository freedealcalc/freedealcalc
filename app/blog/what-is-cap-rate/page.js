import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'What is Cap Rate? How to Calculate It for | FreeDealCalc',
  description: 'Cap rate explained — the formula, what it means, how to use it to compare investment properties, and when it matters less than cash-on-cash return.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-cap-rate' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
export default async function CapRate() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>What is Cap Rate? How to Calculate It for Investment Properties</h1>
      <div style={s.intro}>Cap rate (capitalization rate) measures a property's income relative to its value, assuming an all-cash purchase. It's the standard comparison metric for income-producing real estate — but it tells you less than most investors think.</div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>The Cap Rate Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>Cap Rate = NOI ÷ Property Value</div></div>
      <p style={s.p}>NOI (Net Operating Income) is annual gross rent minus all operating expenses, before debt service. If a property generates $24,000/year in rent and has $10,000 in operating expenses, NOI = $14,000. At a $280,000 purchase price: Cap Rate = $14,000 / $280,000 = 5.0%.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>What Cap Rate Actually Tells You</h2>
      <p style={s.p}>Cap rate is a property yield metric — it tells you what return you'd earn on an all-cash purchase. It's most useful for comparing similar properties in the same market. A 6% cap rate building is more expensive relative to its income than an 8% cap rate building next door.</p>
      <p style={s.p}>What cap rate does NOT tell you: your actual cash-on-cash return (which depends on your financing), your total return (which includes appreciation), or whether the deal works for your specific investment goals.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>What's a Good Cap Rate in 2026?</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Class A markets</strong> (NYC, SF, DC core): 3–4% cap rates are normal. Low yield, high appreciation expectation.</li>
        <li style={s.li}><strong>Northern Virginia suburban:</strong> 4–6% for stabilized rentals in good condition.</li>
        <li style={s.li}><strong>Secondary markets</strong> (Midwest, Southeast): 6–9% cap rates common. Higher yield, lower appreciation.</li>
        <li style={s.li}><strong>Value-add / distressed:</strong> 8–12%+ going-in cap rates, with stabilized cap rates lower after renovation.</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>Cap Rate vs. Cash-on-Cash Return</h2>
      <p style={s.p}>Cash-on-cash return measures actual cash flow relative to cash invested — it accounts for your financing. A property with a 5% cap rate purchased with a 7% mortgage might generate negative cash flow. The same property bought with cash generates a 5% return. Leveraged investors should focus on cash-on-cash return, not just cap rate.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Calculate Cap Rate and Cash-on-Cash Return Free</div>
        <div style={s.ctaText}>FreeDealCalc runs cap rate, cash-on-cash, DSCR, and full rental property analysis in one free conversation with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Rental Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia for 20+ years.</p>
    </div>
  );
}
