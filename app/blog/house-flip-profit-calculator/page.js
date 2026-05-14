import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: \'House Flip Profit Calculator — See Your Net Before You Buy | FreeDealCalc',
  description: \'Calculate house flip profit before you make an offer. Full cost breakdown — purchase, rehab, financing, holding, selling — and your net in seconds.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-flip-profit-calculator' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function FlipProfitCalc() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>House Flip Profit Calculator — See Your Net Before You Buy</h1>
      <div style={s.intro}>Knowing your projected profit before you make an offer is not optional — it is the entire analysis. FreeDealCalc builds the full profit projection for any flip deal free, with every cost category accounted for.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>The Full Profit Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>Net Profit = ARV − (Purchase + Rehab + Holding + Selling)</div></div>
      <p style={s.p}>Every one of those cost buckets matters. Investors who lose money on flips almost always underestimated one: usually rehab, sometimes holding, occasionally both.</p>
      <h2 style={s.h2}>Real Example — Northern Virginia</h2>
      <ul style={s.ul}>
        <li style={s.li}>ARV: $420,000</li>
        <li style={s.li}>Purchase price: $225,000</li>
        <li style={s.li}>Buying closing costs: $5,500</li>
        <li style={s.li}>Rehab: $65,000</li>
        <li style={s.li}>Holding costs (7 months): $21,000</li>
        <li style={s.li}>Selling costs (5.5% + closing): $27,000</li>
        <li style={s.li}><strong>Net profit: $76,500</strong></li>
        <li style={s.li}><strong>ROI: 26%</strong></li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Run Your Flip Profit Projection Free</div>
        <div style={s.ctaText}>Give Freddie your numbers — address, purchase price, rehab estimate — and get the full profit breakdown including ROI and deal score. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Flip Profit →</a>
      </div>
      <h2 style={s.h2}>The Biggest Profit Killers</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Rehab overruns:</strong> Every $10K over budget is $10K less profit</li>
        <li style={s.li}><strong>Extended hold time:</strong> Each extra month adds $2,000–$4,000 in carrying costs</li>
        <li style={s.li}><strong>Soft market on exit:</strong> Price reductions and buyer concessions erode margin fast</li>
        <li style={s.li}><strong>Over-improving:</strong> $80K kitchens in $300K neighborhoods don't comp</li>
      </ul>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
