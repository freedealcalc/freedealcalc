import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: \'Cap Rate Calculator — Free Tool for Real Estate Investors | FreeDealCalc',
  description: \'Calculate cap rate free for any investment property. Enter NOI and purchase price — get cap rate, what it means, and how your property compares to market.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/cap-rate-calculator-free' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function CapRateCalc() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Cap Rate Calculator — Free Tool for Real Estate Investors</h1>
      <div style={s.intro}>Cap rate tells you what a property yields as if you paid cash. It's the standard metric for comparing investment properties and evaluating whether you're paying a fair price relative to income. FreeDealCalc calculates it free as part of every rental analysis.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Cap Rate Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>Cap Rate = NOI ÷ Purchase Price</div></div>
      <p style={s.p}>NOI is gross rent minus operating expenses — before debt service. A property generating $18,000/year NOI purchased for $300,000 has a cap rate of 6%.</p>
      <h2 style={s.h2}>2026 Cap Rate Benchmarks by Market Type</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Class A gateway markets (NYC, DC, SF):</strong> 3–4.5% — high appreciation expectation, low yield</li>
        <li style={s.li}><strong>Strong suburban markets:</strong> 4.5–6% — balanced yield and appreciation</li>
        <li style={s.li}><strong>Secondary markets (Indianapolis, Columbus, Memphis):</strong> 6–9% — higher yield, lower appreciation</li>
        <li style={s.li}><strong>Value-add distressed:</strong> 8–12%+ going-in, stabilized cap rate lower post-rehab</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Calculate Cap Rate Free</div>
        <div style={s.ctaText}>Freddie calculates cap rate, cash-on-cash, and DSCR for any property in one free conversation — no spreadsheet needed.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Cap Rate Free →</a>
      </div>
      <h2 style={s.h2}>Cap Rate vs. Cash-on-Cash</h2>
      <p style={s.p}>Cap rate ignores financing. Cash-on-cash measures your actual return on invested capital with your specific loan terms. A property with a 5.5% cap rate financed at 7.5% may produce negative cash-on-cash — you're earning less on the property than you're paying to borrow. Always run both metrics before making an offer.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
