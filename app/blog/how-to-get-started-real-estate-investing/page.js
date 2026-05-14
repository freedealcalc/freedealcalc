import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Get Started in Real Estate Investing | FreeDealCalc",
  description: "Step-by-step guide to getting started in real estate investing. Education, market research, finding your first deal, and making your first offer.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-get-started-real-estate-investing' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie analyzes any deal free — analyze your first candidate before you make any offer.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My First Deal Free →</a>
  </div>
);
export default async function GetStartedREI() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Get Started in Real Estate Investing</h1>
      <div style={s.intro}>Getting started in real estate investing is simpler than most people think — and harder than most courses make it sound. Here is an honest, step-by-step guide to moving from curious beginner to first deal closed.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Step 1 — Pick One Strategy and Learn It Deeply</h2>
      <p style={s.p}>The biggest mistake new investors make is trying to learn wholesaling, flipping, BRRRR, and rentals simultaneously. Pick one strategy based on your capital and time constraints. Spend 60–90 days learning only that strategy: read every resource available, analyze 50+ deals even if you do not buy them, and talk to investors who are actively executing it. Depth over breadth in the beginning.</p>
      <h2 style={s.h2}>Step 2 — Learn Your Local Market</h2>
      <p style={s.p}>Drive your target neighborhoods every week for 60 days. Note which streets have the most investor activity. Look at sold prices on Zillow and Redfin obsessively — you need to develop ARV intuition before you can negotiate with confidence. Talk to agents who work with investors. Attend your local REIA. Market knowledge is the unfair advantage that experienced investors have over beginners.</p>
      <h2 style={s.h2}>Step 3 — Build Your Team Before You Need It</h2>
      <p style={s.p}>You need a contractor, a hard money lender, an investor-friendly agent, and a title company before you make your first offer. These relationships take time to build — do not wait until you have a deal under contract to start. Meet your hard money lender before you need them. Get a contractor walkthrough on a hypothetical property. Have your title company lined up. When a deal moves fast, your team is already in place.</p>
      <h2 style={s.h2}>Step 4 — Analyze Deals Until You Find One That Works</h2>
      <p style={s.p}>Most deals do not work. That is normal — not every property is an investment opportunity. Analyze 20–30 deals before you expect to find one that hits your criteria. Use FreeDealCalc to run the numbers on every potential deal. The discipline of analyzing consistently builds your market intuition and makes you faster and more confident when a real opportunity appears.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your First Deal Free</div>
        <div style={s.ctaText}>Freddie runs the numbers on any deal — flip, rental, BRRRR, or wholesale. Know the math before you make any offer.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My First Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
