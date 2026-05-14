import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Find BRRRR Deals | FreeDealCalc",
  description: "Where to find distressed properties that work for the BRRRR method. Lead sources, off-market strategies, and how to identify BRRRR candidates quickly.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-find-brrrr-deals' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Freddie checks BRRRR viability on any address — ARV, refinance proceeds, and cash flow free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Check BRRRR Viability Free →</a>
  </div>
);
export default async function FindBRRRRDeals() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Find BRRRR Deals</h1>
      <div style={s.intro}>A BRRRR deal needs three things: a purchase price well below ARV, a clear path to market-rate rent after rehab, and enough post-renovation equity to support a 75% LTV cash-out refinance. These deals exist — they just do not sit on the MLS for long.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Best Sources for BRRRR Deals</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Wholesalers:</strong> The most efficient source — a good wholesale deal already fits BRRRR math. Build relationships with active wholesalers in your target market.</li>
        <li style={s.li}><strong>Direct mail to absentee owners:</strong> Landlords who have owned for 10+ years often have equity and motivation. Skip trace the list and mail a simple yellow letter.</li>
        <li style={s.li}><strong>Tax delinquent lists:</strong> Properties with delinquent taxes often have distressed owners who want out. Pull county records monthly.</li>
        <li style={s.li}><strong>Probate:</strong> Inherited properties often sit vacant and deteriorate. Probate attorneys are excellent referral sources.</li>
        <li style={s.li}><strong>MLS days-on-market:</strong> Properties sitting 60+ days were priced above market. Offer significantly below ask — sellers are often more motivated than their listing suggests.</li>
        <li style={s.li}><strong>REO and bank-owned:</strong> Foreclosure properties can be priced at or below 70% ARV, especially in slower markets.</li>
      </ul>
      <h2 style={s.h2}>How to Quickly Screen for BRRRR Viability</h2>
      <p style={s.p}>Before spending time on a full analysis, run a quick three-part screen: (1) Is the asking price at or below 70% of estimated ARV? (2) Does the neighborhood support market-rate rent that would pass DSCR requirements on a 75% LTV loan? (3) Is the rehab scope defined enough to estimate? If yes to all three, do a full analysis. If no to any, move on.</p>
      <h2 style={s.h2}>The BRRRR Sweet Spot</h2>
      <p style={s.p}>Properties that need cosmetic-to-moderate rehab (new kitchen, bathrooms, flooring, paint) rather than full structural work hit the BRRRR sweet spot. Full gut rehabs can work but increase execution risk and time. Properties that need structural, foundation, or environmental remediation work have unpredictable cost floors that can destroy your refinance math.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze BRRRR Candidates Free</div>
        <div style={s.ctaText}>Enter any address and Freddie tells you if the BRRRR math works — ARV, refinance proceeds, and monthly cash flow.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Check BRRRR Viability Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
