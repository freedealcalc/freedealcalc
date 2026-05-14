import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Find Off-Market Properties | FreeDealCalc",
  description: "The best strategies for finding off-market real estate deals in 2026 — direct mail, cold calling, driving for dollars, and digital methods.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-find-off-market-properties' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>When you find an off-market lead, run it through Freddie before you call — know your offer ceiling.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Off-Market Deal →</a>
  </div>
);
export default async function OffMarketProperties() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Find Off-Market Properties</h1>
      <div style={s.intro}>Off-market properties are the holy grail of real estate investing — motivated sellers, no competing buyers, and prices that reflect urgency rather than market demand. Here are the most effective ways to find them in 2026.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Why Off-Market Matters</h2>
      <p style={s.p}>On-MLS deals in competitive markets rarely offer the 25–40% below-market pricing that profitable investing requires. Sellers working with agents are coached to maximize price. Off-market sellers — motivated by divorce, inheritance, financial distress, or wanting a quiet sale — are often willing to accept below-market offers in exchange for speed, certainty, and convenience.</p>
      <h2 style={s.h2}>Direct Mail</h2>
      <p style={s.p}>Direct mail to targeted lists remains one of the highest-ROI lead generation channels. Effective lists: absentee owners, tax delinquent properties, probate filings, vacant properties, and pre-foreclosures. Send a simple yellow letter or postcard every 30–60 days to the same list — most responses come after the third or fourth touch. Budget $1,500–$3,000/month for a consistent campaign.</p>
      <h2 style={s.h2}>Cold Calling</h2>
      <p style={s.p}>Cold calling produces faster responses than mail but requires more time investment. Pull the same lists as direct mail and call before mailing — or call the non-responders from your mail campaign. A good cold caller can qualify 10–20 leads per day. Offshore VAs at $5–$8/hour are commonly used for volume dialing, with US-based callers at $15–$25/hour for higher conversion rates.</p>
      <h2 style={s.h2}>Driving for Dollars</h2>
      <p style={s.p}>Drive neighborhoods where you want to buy. Note properties with overgrown yards, boarded windows, piled mail, deferred maintenance, or for-rent signs that have been up for months. Pull the owner's contact information from county records, skip trace if needed, and add them to your marketing list. DealMachine, PropStream, and BatchLeads all have mobile apps that streamline this process.</p>
      <h2 style={s.h2}>Digital Methods</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Facebook Marketplace:</strong> FSBO listings often price below market — check daily for new additions</li>
        <li style={s.li}><strong>Craigslist:</strong> Still active for FSBO and distressed property listings in many markets</li>
        <li style={s.li}><strong>Google PPC:</strong> "Sell my house fast [city]" traffic converts well — expensive but scalable</li>
        <li style={s.li}><strong>SEO content:</strong> Long-term play but lowest cost per lead at scale</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Every Off-Market Deal</div>
        <div style={s.ctaText}>When you find an off-market lead, run it through Freddie before you call. Know your offer ceiling going in.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Off-Market Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
