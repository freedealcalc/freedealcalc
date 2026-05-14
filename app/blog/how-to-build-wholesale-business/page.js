import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Build a Wholesale Real Estate Business | FreeDealCalc",
  description: "How to scale from your first wholesale deal to a consistent business. Systems, team, marketing, and deal flow strategies for serious wholesalers.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-build-wholesale-business' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie analyzes wholesale deals free — know your numbers on every lead in your pipeline.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Run My Pipeline Deal Free →</a>
  </div>
);
export default async function BuildWholesaleBusiness() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Build a Wholesale Real Estate Business</h1>
      <div style={s.intro}>Your first wholesale deal is a transaction. A wholesale business is a system — consistent lead flow, a reliable buyers list, documented processes, and a small team that keeps deals moving while you focus on finding more.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>The Five Components of a Wholesale Business</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Lead generation:</strong> Consistent inbound from direct mail, cold calling, PPC, and referrals</li>
        <li style={s.li}><strong>Lead management:</strong> CRM to track every contact from first touch to contract</li>
        <li style={s.li}><strong>Disposition:</strong> Buyers list and dispo process that moves deals within 48–72 hours of signing</li>
        <li style={s.li}><strong>Operations:</strong> Title company, attorney, and transaction coordinator relationships</li>
        <li style={s.li}><strong>Finance tracking:</strong> Every deal analyzed before and after — know your actual profit per deal</li>
      </ul>
      <h2 style={s.h2}>Your First Hire</h2>
      <p style={s.p}>The first hire for most wholesalers is a cold caller or virtual assistant who handles outbound calls from your lead list. This frees you to handle the motivated conversations that cold callers set up. A good cold caller can generate 3–5 qualified lead conversations per day. At $15–$25/hour or 1–2% of closed deals, this is the highest-leverage hire in the business.</p>
      <h2 style={s.h2}>Marketing Math</h2>
      <p style={s.p}>Track your marketing cost per deal. Direct mail typically costs $2,000–$5,000 per closed deal depending on list quality and market. Cold calling is lower cost per deal but time-intensive to manage. PPC can deliver motivated sellers but at $150–$400 per lead in competitive markets. Know your cost per deal for each channel and invest in what produces the best return.</p>
      <h2 style={s.h2}>When to Add a Second Market</h2>
      <p style={s.p}>Do not expand to a second market until you have at least 3–5 deals per month consistently in your first market. Systems have to be proven locally before you apply them remotely. Virtual wholesaling works — but it requires that your process is already documented and your team is already executing without you managing every call.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Every Deal in Your Pipeline</div>
        <div style={s.ctaText}>Freddie analyzes wholesale, flip, rental, and BRRRR deals free. Know your numbers on every lead before you commit.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Run My Pipeline Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
