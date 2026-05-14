import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Self-Directed IRA Real Estate Investing | FreeDealCalc",
  description: "How to invest in real estate through a self-directed IRA. The rules, prohibited transactions, UBIT tax, and when this strategy makes sense.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/self-directed-ira-real-estate' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>SDIRA deals often require all-cash — Freddie confirms deal quality before you commit IRA funds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My SDIRA Deal Free →</a>
  </div>
);
export default async function SelfDirectedIRA() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Self-Directed IRA Real Estate Investing</h1>
      <div style={s.intro}>A self-directed IRA allows you to hold real estate inside your retirement account — potentially generating tax-deferred or tax-free returns on rental income and appreciation. The strategy has powerful benefits and complicated rules that most investors do not fully understand before diving in.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>How Self-Directed IRAs Work</h2>
      <p style={s.p}>A self-directed IRA is a standard IRA held with a custodian that allows alternative assets — including real estate, notes, and private equity — rather than only stocks and mutual funds. All income from IRA-owned real estate flows back into the IRA tax-deferred (Traditional IRA) or tax-free (Roth IRA). You do not pay capital gains tax when you sell, as long as the money stays in the IRA.</p>
      <h2 style={s.h2}>The Rules You Must Follow</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>No self-dealing:</strong> You cannot live in, use, or personally benefit from the IRA-owned property</li>
        <li style={s.li}><strong>No disqualified persons:</strong> Family members cannot live in or use the property either</li>
        <li style={s.li}><strong>All expenses paid by the IRA:</strong> Repairs, taxes, insurance — all must come from IRA funds, not your personal account</li>
        <li style={s.li}><strong>All income to the IRA:</strong> Rent checks go to the IRA, not to you personally</li>
      </ul>
      <h2 style={s.h2}>UBIT — The Hidden Tax</h2>
      <p style={s.p}>If your SDIRA uses debt financing to buy real estate, the leveraged portion of income may be subject to Unrelated Business Income Tax at trust tax rates — potentially 37%+. Many investors use SDIRAs only for all-cash real estate purchases to avoid UBIT. Consult a CPA familiar with SDIRA regulations before using leverage inside a retirement account.</p>
      <h2 style={s.h2}>When SDIRA Real Estate Makes Sense</h2>
      <p style={s.p}>SDIRA investing makes the most sense for Roth IRA holders with large balances, long time horizons, and access to all-cash deals in stable markets. The tax-free compounding of a Roth IRA on real estate returns over 20+ years can produce substantial wealth. The complexity and illiquidity mean this strategy is best suited to experienced investors who understand the rules thoroughly.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Cash-Only IRA Deal Candidates</div>
        <div style={s.ctaText}>SDIRA deals typically require all-cash. Know ARV and deal quality on any candidate before committing IRA funds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My SDIRA Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
