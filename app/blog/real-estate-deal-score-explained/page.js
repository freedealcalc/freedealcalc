import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'Real Estate Deal Score: How FreeDealCalc Scores Deals | FreeDealCalc',
  description: 'How FreeDealCalc's deal score works — what factors it considers, what the numbers mean, and how to interpret your score when evaluating an investment.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-deal-score-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function DealScoreExplained() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate Deal Score: How FreeDealCalc Scores Deals</h1>
      <div style={s.intro}>The FreeDealCalc deal score is a 1–100 rating that synthesizes deal margin, market conditions, strategy fit, and risk factors into a single number. Here's exactly how it's calculated and what to do with it.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>What the Score Measures</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Profit margin:</strong> How much spread exists between your all-in cost and ARV</li>
        <li style={s.li}><strong>70% rule compliance:</strong> Are you within the standard acquisition threshold?</li>
        <li style={s.li}><strong>Market conditions:</strong> Current DOM and sale-to-list in your market — is the exit strong?</li>
        <li style={s.li}><strong>Strategy fit:</strong> Do the numbers work for your stated strategy (flip vs. rental vs. BRRRR)?</li>
        <li style={s.li}><strong>Risk factors:</strong> Rehab scope, holding period, financing cost</li>
      </ul>
      <h2 style={s.h2}>How to Read Your Score</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>80–100:</strong> Strong deal. Proceed with confidence — the numbers are solid.</li>
        <li style={s.li}><strong>65–79:</strong> Good deal with some caveats. Understand what's pulling the score down before committing.</li>
        <li style={s.li}><strong>50–64:</strong> Marginal. Only proceed if you understand and accept the specific risk factors.</li>
        <li style={s.li}><strong>Below 50:</strong> Thin deal. The numbers don't support the risk at this price. Walk away or renegotiate.</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Score Your Deal Free</div>
        <div style={s.ctaText}>Get your deal score in 60 seconds — Freddie runs the full analysis and tells you exactly what's driving the number. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Score My Deal Free →</a>
      </div>
      <h2 style={s.h2}>The Score Is a Starting Point, Not a Decision</h2>
      <p style={s.p}>A score of 75 doesn't mean buy. A score of 45 doesn't mean don't. The score tells you where to focus your attention. A 75 with a specific concern (uncertain rehab scope) might not be actionable until that concern is resolved. A 48 on a wholesale deal where your only risk is the EMD might be worth taking if the potential fee is large enough. Use the score as a framework, not a mandate.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
