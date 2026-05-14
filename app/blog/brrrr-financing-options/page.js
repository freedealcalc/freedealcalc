import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "BRRRR Financing Options: How to Fund Each Phase | FreeDealCalc",
  description: "A complete guide to financing the BRRRR method — hard money for acquisition and rehab, DSCR loans for refinance, and alternative options.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/brrrr-financing-options' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Model your BRRRR financing free — Freddie shows Phase 1 costs and Phase 2 refinance proceeds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Model My BRRRR Financing →</a>
  </div>
);
export default async function BRRRRFinancing() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>BRRRR Financing Options: How to Fund Each Phase</h1>
      <div style={s.intro}>BRRRR uses two financing events: one to acquire and rehab, and one to refinance into a long-term hold. Getting both right is critical — use the wrong acquisition financing and the deal costs too much to hold. Use the wrong refinance product and you cannot pull enough capital to recycle.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Phase 1: Acquisition and Rehab Financing</h2>
      <p style={s.p}>Hard money loans are the most common tool for BRRRR acquisition and rehab. They lend against ARV — typically 70–75% LTV based on after-repair value — which means they fund both the purchase and rehab in a single draw loan. Rates run 10–13%, plus 2–3 points, on 12–18 month terms. The high cost is the price of speed and flexibility — hard money closes in days, not weeks.</p>
      <h2 style={s.h2}>Phase 1 Alternatives</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Private money:</strong> A private lender lends at lower rates than hard money with more flexible terms. Best for investors who have built a track record.</li>
        <li style={s.li}><strong>HELOC on existing property:</strong> If you own a home with equity, a HELOC can fund a BRRRR purchase cheaply. Rates track prime.</li>
        <li style={s.li}><strong>Cash:</strong> The cheapest acquisition tool. Frees you from hard money carry costs during rehab.</li>
      </ul>
      <h2 style={s.h2}>Phase 2: Refinance into Long-Term Hold</h2>
      <p style={s.p}>DSCR loans are the preferred refinance vehicle for BRRRR investors. They do not verify personal income — they lend based on the property's debt service coverage ratio (rent income vs loan payment). At 70–75% LTV, a DSCR refinance can pull back most or all of your acquisition and rehab capital if you bought right. Rates run 1–2% above conventional, with 30-year terms available.</p>
      <h2 style={s.h2}>Seasoning Requirements</h2>
      <p style={s.p}>Most DSCR lenders require 6–12 months of seasoning after a purchase — meaning they use your purchase price in their LTV calculation for the first 6–12 months, not the appraised value. This is the most common surprise in BRRRR refinances. Find a lender with a 6-month or less seasoning period, or be prepared to wait 12 months before pulling capital out.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Model Your BRRRR Financing Free</div>
        <div style={s.ctaText}>Freddie runs BRRRR scenarios including Phase 1 costs and Phase 2 refinance proceeds. Know your numbers before you close.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Model My BRRRR Financing →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
