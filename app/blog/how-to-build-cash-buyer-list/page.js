import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'How to Build a Cash Buyer List for Wholesale Real Estate | FreeDealCalc', description: 'How to build a reliable cash buyer list — the asset that lets you move wholesale deals in 48 hours. Where to find buyers and how to qualify them.', alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-build-cash-buyer-list' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function BuildBuyerList() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Build a Cash Buyer List for Wholesale Real Estate</h1>
      <div style={s.intro}>Your cash buyer list is the most valuable asset in your wholesale business. A strong list of 200–500 active, qualified buyers means you can move deals in 24–48 hours. Build it before you need it — not after you have a deal under contract with 21 days to close.</div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>
      <p style={s.p}>The investors who close deals consistently aren't necessarily finding the best properties. They have buyers who trust them and respond fast. That trust is built over dozens of interactions before a single deal is sent.</p>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Investor Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>Where to Find Cash Buyers</h2>
      <h3 style={s.h3}>Title Companies</h3>
      <p style={s.p}>Title companies see every cash transaction in your market. Build a relationship with a title rep and ask them to introduce you to investors who close deals regularly. This is the highest-quality source — these are verified, active buyers with a proven track record.</p>
      <h3 style={s.h3}>REIA Meetings</h3>
      <p style={s.p}>Real estate investor associations meet monthly in virtually every metro area. Attend consistently, introduce yourself as a wholesaler, and collect business cards. The investors in that room are exactly your target buyer profile.</p>
      <h3 style={s.h3}>BiggerPockets and Online Forums</h3>
      <p style={s.p}>Post in BiggerPockets forums for your market: "Looking to connect with active cash buyers in [city]. I bring 3–5 deals per month." Build relationships before you need them.</p>
      <h3 style={s.h3}>Public Records — Cash Transactions</h3>
      <p style={s.p}>County deed records show every cash sale. Filter for non-owner-occupant cash purchases in your target zip codes over the last 12 months. These are investors — skip-trace and reach out directly.</p>
      <h3 style={s.h3}>Craigslist</h3>
      <p style={s.p}>Post "off-market investment properties available" in the real estate section. Also respond to "we buy houses" ads — those buyers want deals. Old-school but still generates responses.</p>
      <h3 style={s.h3}>Bandit Signs</h3>
      <p style={s.p}>"Cash buyers wanted — investment properties available — [phone number]." Simple signs in active investment corridors attract serious buyers.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>How to Qualify and Organize Your List</h2>
      <p style={s.p}>A list of 500 names is worthless if half of them don't close. Qualify your buyers upfront: What markets do they buy in? What's their buy box (price range, condition, type)? How do they fund deals — cash or hard money? How many deals have they closed in the last 12 months?</p>
      <p style={s.p}>Tag buyers by criteria in your CRM. When a deal comes in, blast only the buyers whose criteria match. A targeted blast to 50 qualified buyers outperforms a spray-and-pray to 500 unqualified contacts every time.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Send Buyers a Professional Dispo Package</div>
        <div style={s.ctaText}>FreeDealCalc builds professional wholesale dispo packages with Rentcast verified comps — the kind serious buyers expect. Free with no JV split.</div>
        <a href="https://www.freedealcalc.com/dispo" style={s.ctaBtn}>Build My Dispo Package Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia for 20+ years.</p>
    </div>
  );
}
