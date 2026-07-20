import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Get a Hard Money Loan for Your First Deal",
  description: "How to qualify for hard money on your first flip — what lenders look for, how to present your deal, and what to expect if you have no track record.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-get-hard-money-loan-first-deal' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function FirstHardMoney() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Get a Hard Money Loan for Your First Deal</h1>
      <div style={s.intro}>Hard money lenders say they lend on the deal, not the borrower. That's mostly true — but first-time borrowers face higher rates, lower LTVs, and more scrutiny. Here's how to present yourself and your deal to get approved.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>What Hard Money Lenders Actually Look At</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>The deal:</strong> ARV, current condition, purchase price relative to ARV. This is primary.</li>
        <li style={s.li}><strong>Your experience:</strong> Zero track record = lower LTV, higher rate, sometimes a required mentor or partner with experience</li>
        <li style={s.li}><strong>Credit score:</strong> Most want 620+. Not as critical as conventional, but under 600 creates problems.</li>
        <li style={s.li}><strong>Liquidity:</strong> Do you have reserves to cover overruns and carry costs? Most want 6 months of payments in liquid reserves.</li>
        <li style={s.li}><strong>Exit strategy:</strong> How will you repay the loan? Sell or refinance — be specific.</li>
      </ul>
      <h2 style={s.h2}>How to Compensate for No Track Record</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Bring a stronger deal:</strong> A deal at 60% of ARV is easier to approve than one at 72%</li>
        <li style={s.li}><strong>Put more down:</strong> Lower LTV reduces lender risk</li>
        <li style={s.li}><strong>Partner with an experienced flipper:</strong> Their track record supplements yours</li>
        <li style={s.li}><strong>Show your preparation:</strong> A professional deal analysis, comp package, and contractor estimate demonstrates you understand the business</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Build a Professional Deal Package for Your Lender</div>
        <div style={s.ctaText}>FreeDealCalc generates a complete deal analysis with ARV, comps, and cost breakdown — the same package lenders want to see. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Build My Deal Package Free →</a>
      </div>
      <h2 style={s.h2}>Northern Virginia Hard Money Lenders</h2>
      <p style={s.p}>Active in the NoVA/DC market: Hard Money Bankers, WCP Loans, Kiavi, and New Silver (nationwide with strong online process). Get quotes from 2–3 lenders — terms vary meaningfully and the rate difference on a $250,000 loan over 8 months is real money.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
