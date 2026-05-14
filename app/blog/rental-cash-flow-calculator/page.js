import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: \'Rental Cash Flow Calculator — Free Tool for Investors | FreeDealCalc',
  description: \'Calculate rental property cash flow free. Monthly income, expenses, NOI, and net cash flow — see if your rental actually makes money.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/rental-cash-flow-calculator' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function RentalCashFlow() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Rental Cash Flow Calculator — Free Tool for Investors</h1>
      <div style={s.intro}>Positive cash flow means the property pays you every month. Negative cash flow means you pay it. The only way to know which side you are on is to run the actual numbers — not gut feelings, not the seller's projections.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Cash Flow Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>Monthly Cash Flow = (Gross Rent − Vacancy − Expenses) − Mortgage</div></div>
      <h2 style={s.h2}>Every Expense That Reduces Cash Flow</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Vacancy allowance:</strong> 5–8% of gross rent — budget it even in tight markets</li>
        <li style={s.li}><strong>Property taxes:</strong> Use the actual annual bill divided by 12</li>
        <li style={s.li}><strong>Insurance:</strong> Landlord policy, typically $80–$180/month</li>
        <li style={s.li}><strong>Property management:</strong> 8–12% of collected rent if not self-managing</li>
        <li style={s.li}><strong>Maintenance:</strong> 5–10% of gross rent annually for average-age property</li>
        <li style={s.li}><strong>CapEx reserves:</strong> 5–8% of gross rent for major replacements</li>
        <li style={s.li}><strong>HOA:</strong> If applicable — often overlooked</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Calculate Your Rental Cash Flow Free</div>
        <div style={s.ctaText}>Freddie runs monthly and annual cash flow projections with every expense category included — free in one conversation.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Cash Flow Free →</a>
      </div>
      <h2 style={s.h2}>Why the 50% Rule Isn't Enough</h2>
      <p style={s.p}>The 50% rule estimates half your gross rent covers operating expenses. It's useful for a 30-second screen. But a real cash flow analysis uses your actual tax bill, an insurance quote, your specific PM rate, and a realistic vacancy assumption for that market. The 50% rule will get you close — a real analysis tells you if you actually make money.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
