import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "House Flipping Business Plan Template | FreeDealCalc",
  description: "What a house flipping business plan needs to include. Deal criteria, capital plan, marketing strategy, and how to use it to raise private money.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/house-flipping-business-plan' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Score deals against your plan criteria — Freddie tells you if any deal hits your standards free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Score My Deal Free →</a>
  </div>
);
export default async function FlippingBusinessPlan() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Write a House Flipping Business Plan</h1>
      <div style={s.intro}>A house flipping business plan is not just for impressing lenders. It forces you to define your strategy, quantify your capital needs, and establish the deal criteria that will guide every offer you make.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Executive Summary</h2>
      <p style={s.p}>One page. Your name, your market focus, your target deal criteria, your annual volume goal, and your capital requirements. If you are presenting to private money lenders, this is the page they read first — it must be specific, credible, and grounded in real market data. Vague statements about opportunities in real estate belong in infomercials, not business plans.</p>
      <h2 style={s.h2}>Deal Criteria Section</h2>
      <p style={s.p}>Document your specific buy box: target purchase price range, maximum ARV threshold, minimum required spread above MAO before you sign a contract, acceptable neighborhoods and zip codes, maximum rehab scope you will take on, and required minimum net profit per deal. This section is your decision framework — when a deal meets all criteria, you move. When it does not, you pass.</p>
      <h2 style={s.h2}>Capital Plan</h2>
      <p style={s.p}>Show exactly how you will fund your deals: current liquid capital, existing credit lines, private money relationships confirmed and potential, and hard money lender relationships. Show the math for your first 3 deals — purchase, rehab, carrying costs, selling costs, and projected net return. Private money lenders want to see that you have thought through the capital cycle, not just the profit potential.</p>
      <h2 style={s.h2}>Marketing and Deal Flow Strategy</h2>
      <p style={s.p}>Describe how you will find deals: wholesaler relationships, direct mail campaigns, MLS monitoring, agent relationships, and online lead channels. Show monthly marketing budget and expected deals per source. Lenders who see a documented lead generation strategy feel more confident than those who see a plan that depends entirely on deals showing up on their own.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Deals Against Your Plan Criteria</div>
        <div style={s.ctaText}>Freddie scores deals against ARV, rehab, and return criteria. Know if a deal hits your standards before you commit.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Score My Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
