import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Real Estate Investing for Beginners | FreeDealCalc",
  description: "Complete beginner's guide to real estate investing. The four main strategies, how to pick one, how to get started, and what to expect in year one.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-investing-for-beginners' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze your first deal free — Freddie runs flip, rental, BRRRR, and wholesale numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My First Deal Free →</a>
  </div>
);
export default async function REIBeginners() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate Investing for Beginners</h1>
      <div style={s.intro}>Real estate investing is one of the most reliable paths to financial independence — but only if you start with the right strategy for your situation, understand what the numbers actually mean, and avoid the most expensive beginner mistakes.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>The Four Main Strategies</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>House flipping:</strong> Buy distressed, renovate, sell for profit. Best for: hands-on investors with time to manage projects. Capital requirement: $50k–$150k+.</li>
        <li style={s.li}><strong>Rental properties:</strong> Buy, rent, hold for cash flow and appreciation. Best for: investors who want passive income and long-term wealth. Capital requirement: 20–25% down.</li>
        <li style={s.li}><strong>BRRRR:</strong> Buy distressed, rehab, rent, refinance, repeat. Best for: investors with limited capital who want to build a rental portfolio. Capital requirement: $50k–$100k recycled repeatedly.</li>
        <li style={s.li}><strong>Wholesaling:</strong> Find motivated sellers, assign contracts for a fee. Best for: investors with no capital who want to learn the market first. Capital requirement: minimal.</li>
      </ul>
      <h2 style={s.h2}>How to Pick Your First Strategy</h2>
      <p style={s.p}>Match the strategy to your situation. If you have $50k–$100k and 20+ hours per week available, flipping or BRRRR both work. If you have capital but limited time, buy a rental with a property manager. If you have almost no capital, wholesaling builds deal-finding skills while generating income. Do not pick the most exciting strategy — pick the one that fits your actual constraints.</p>
      <h2 style={s.h2}>The Numbers Every Beginner Must Understand</h2>
      <p style={s.p}>ARV (after-repair value) — what the property is worth fixed up. MAO (max allowable offer) — the most you can pay and still profit: ARV times 0.70 minus rehab. Cash-on-cash return — annual cash flow divided by cash invested. Cap rate — NOI divided by purchase price. These four numbers govern every investment decision. Learn them before you make any offer.</p>
      <h2 style={s.h2}>Your First Deal Checklist</h2>
      <p style={s.p}>Before closing your first deal: verify ARV with at least 3 comparable sales from the last 90 days; get a contractor estimate before going under contract; confirm your financing is in place; know your exit (flip buyer or tenant) before you close; and have 10% contingency above your rehab estimate. Most first deals take longer and cost more than planned — build that into your model.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your First Deal Free</div>
        <div style={s.ctaText}>Freddie runs flip, rental, BRRRR, and wholesale scenarios on any address. Know the numbers before you commit — free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My First Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
