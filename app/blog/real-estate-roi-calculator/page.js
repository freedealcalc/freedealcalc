import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Real Estate ROI Calculator — Free Tool for Investors",
  description: "Calculate ROI on any real estate investment free — flip, rental, BRRRR, or wholesale. See your return on invested capital before you close.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-roi-calculator' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function REROICalc() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate ROI Calculator — Free Tool for Investors</h1>
      <div style={s.intro}>ROI tells you how efficiently your capital is working. A $40,000 profit on a $60,000 cash investment is a 67% ROI. The same profit on a $200,000 investment is 20%. Both are good — but knowing the difference tells you which deals to prioritize.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>ROI Formula for Real Estate</h2>
      <div style={s.formula}><div style={s.formulaText}>ROI = Net Profit ÷ Total Cash Invested × 100</div></div>
      <p style={s.p}>For a flip: net profit is ARV minus all costs. Total cash invested is your down payment, closing costs, rehab, and any out-of-pocket holding costs. For a rental: use annual cash flow as your "profit" and total cash invested as the denominator.</p>
      <h2 style={s.h2}>ROI by Strategy</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Fix and flip:</strong> Target 20–35% ROI minimum. Below 15% the risk/reward ratio is poor.</li>
        <li style={s.li}><strong>Rental (cash-on-cash):</strong> 4–8% annually is realistic in most markets. 10%+ is exceptional.</li>
        <li style={s.li}><strong>BRRRR:</strong> Infinite ROI if you get all your cash back at refinance — you own a cash-flowing asset with zero remaining cash invested.</li>
        <li style={s.li}><strong>Wholesale:</strong> Very high ROI — minimal capital at risk relative to assignment fee earned.</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Calculate Your Investment ROI Free</div>
        <div style={s.ctaText}>Freddie calculates ROI for flip, rental, BRRRR, or wholesale — whichever strategy fits your deal. Free in one conversation.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My ROI Free →</a>
      </div>
      <h2 style={s.h2}>Why ROI Alone Isn't the Full Picture</h2>
      <p style={s.p}>A 40% ROI on a $50,000 investment is $20,000. A 20% ROI on a $250,000 investment is $50,000. The higher-ROI deal made you less money. For flippers who want to maximize total earnings, absolute profit matters as much as percentage ROI. For investors scaling a portfolio, ROI per dollar deployed matters more. Know which metric you're optimizing for.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
