import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'Transactional Funding for Real Estate: How Double Closes Work | FreeDealCalc',
  description: 'Transactional funding explained — how same-day double close funding works for wholesalers, what it costs, and when you need it.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/transactional-funding-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function TransactionalFunding() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Transactional Funding for Real Estate: How Double Closes Work</h1>
      <div style={s.intro}>Transactional funding lets wholesalers execute a double close — buying from the seller and selling to the end buyer on the same day — without using their own capital. The funder provides the money for the A-to-B leg, you repay it from the B-to-C proceeds hours later.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Why Wholesalers Use Double Closes</h2>
      <p style={s.p}>Assignment is simpler — but the seller sees your profit on the HUD statement. A double close keeps your spread private. For large assignment fees ($50,000+) or in states where assignment is restricted, a double close is the cleaner option.</p>
      <h2 style={s.h2}>How Transactional Funding Works</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>You set up two closings:</strong> A-to-B (you buy from seller) and B-to-C (you sell to end buyer), same day</li>
        <li style={s.li}><strong>Transactional funder provides</strong> the A-to-B purchase funds at closing</li>
        <li style={s.li}><strong>B-to-C closing funds</strong> repay the transactional lender plus their fee</li>
        <li style={s.li}><strong>You keep the spread</strong> between A-to-B and B-to-C prices</li>
      </ul>
      <h2 style={s.h2}>Cost of Transactional Funding</h2>
      <p style={s.p}>Typically 1–2% of the A-to-B purchase price, or a flat fee of $1,500–$3,000. On a $200,000 A-to-B transaction, that's $2,000–$4,000 to keep your spread private. Worth it for large fees; add it to your cost analysis for smaller deals.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Calculate Your Net on a Double Close</div>
        <div style={s.ctaText}>FreeDealCalc models wholesale net proceeds including transactional funding costs — see your actual take-home. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Model My Wholesale Deal Free →</a>
      </div>
      <h2 style={s.h2}>Requirements</h2>
      <p style={s.p}>Both closings must happen the same day, typically at the same title company. Title company must be comfortable with back-to-back closings — not all are. Confirm with your title company before structuring the deal this way. The end buyer typically can't use conventional financing (they need to see clear title).</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
