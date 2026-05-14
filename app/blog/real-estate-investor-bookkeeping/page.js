import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Real Estate Investor Bookkeeping Guide | FreeDealCalc",
  description: "How to track income and expenses across multiple deals and properties. The bookkeeping system that keeps your taxes simple and your profits clear.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-investor-bookkeeping' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Know your actual profit on every deal — Freddie tracks deal-level numbers free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Deal Profit Free →</a>
  </div>
);
export default async function InvestorBookkeeping() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate Investor Bookkeeping: Keep It Simple</h1>
      <div style={s.intro}>Bad bookkeeping costs real estate investors thousands of dollars every year — missed deductions, unexpected tax bills, and the inability to accurately measure which deals and strategies are actually profitable. Here is the simple system that works.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Separate Everything</h2>
      <p style={s.p}>The foundation of investor bookkeeping is separation: a dedicated business checking account, a dedicated business credit card, and separate tracking for each property or deal. When you co-mingle personal and business funds, your books become a forensic exercise at tax time. When you keep them separate from day one, monthly reconciliation takes 30 minutes instead of 30 hours.</p>
      <h2 style={s.h2}>Deal-Level Tracking for Flips</h2>
      <p style={s.p}>For each flip, track: purchase price, closing costs, all rehab receipts by category (materials, labor, permits), carrying costs (interest, insurance, utilities), selling costs (agent commission, closing costs, staging), and final sale price. The difference is your net profit. This deal-level P&L tells you your actual return — not the estimate you made before you bought.</p>
      <h2 style={s.h2}>Property-Level Tracking for Rentals</h2>
      <p style={s.p}>For each rental property, track monthly income (rent and other fees) and monthly expenses (mortgage interest, taxes, insurance, repairs, management fees). Run a year-end P&L for each property. You will quickly see which properties are performing and which are underperforming — information that drives better decisions about where to invest next.</p>
      <h2 style={s.h2}>Tools That Work</h2>
      <p style={s.p}>Stessa is purpose-built for rental investors and is free for basic use. QuickBooks Self-Employed works well for flippers who want simple income and expense tracking. For a portfolio of 5+ properties or 10+ flips per year, a bookkeeper who understands real estate investing is worth $300–$600 per month — they will save you more than that in missed deductions alone.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Track Deal Profits with Freddie</div>
        <div style={s.ctaText}>Analyze every deal before you buy — then compare your actual results to Freddie's projections.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Deal Profit Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
