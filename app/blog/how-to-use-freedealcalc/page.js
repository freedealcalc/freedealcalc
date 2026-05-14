import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: \'How to Use FreeDealCalc: Complete Guide | FreeDealCalc',
  description: \'How to use FreeDealCalc — Freddie the AI analyst, deal scoring, Score Certificate, Seller Proposal, Disposition Package, and all free features explained.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-use-freedealcalc' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function HowToUseFDC() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Use FreeDealCalc: Complete Guide</h1>
      <div style={s.intro}>FreeDealCalc is a free AI-powered deal analyzer for real estate investors. Here's everything the platform does, how to get the most out of each feature, and why it's built around being free where it matters most.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Start With Freddie</h2>
      <p style={s.p}>Freddie is FreeDealCalc's AI deal analyst. Start a conversation, tell Freddie your strategy (flip, rental, BRRRR, or wholesale), and give it the property details. Freddie runs through the analysis conversationally — ARV, rehab estimate, max offer, holding costs, projected profit — and generates a deal score at the end.</p>
      <h2 style={s.h2}>The Deal Score</h2>
      <p style={s.p}>Every analysis produces a deal score from 1–100. The score reflects margin, risk, market conditions, and strategy fit. A score above 70 is a strong deal. 50–70 is worth a second look. Below 50 means the numbers are thin and you should understand why before proceeding.</p>
      <h2 style={s.h2}>Free Documents</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Score Certificate:</strong> A shareable one-page deal summary with your score, key metrics, and Rentcast-verified ARV. Free for all users.</li>
        <li style={s.li}><strong>Seller Proposal:</strong> A professional presentation showing the seller the market data behind your offer. Free (3/month on free tier).</li>
        <li style={s.li}><strong>Disposition Package:</strong> A complete wholesale dispo package with comps, deal details, and professional formatting. Free (3/month on free tier).</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Start Analyzing Deals Free Now</div>
        <div style={s.ctaText}>No account required to run your first deal analysis. Talk to Freddie — it takes 60 seconds to get your deal score and ARV estimate.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Start Free →</a>
      </div>
      <h2 style={s.h2}>Pricing</h2>
      <p style={s.p}>Free forever: unlimited Freddie conversations, unlimited deal scores, unlimited Score Certificates, 3 Seller Proposals and 3 Dispo Packages per month, 2 Rentcast lookups lifetime. Investor ($19/month): more proposals, dispos, and Rentcast lookups. Pro ($39/month): unlimited everything plus advanced features.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
