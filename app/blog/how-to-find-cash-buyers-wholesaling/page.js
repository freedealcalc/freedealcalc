import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Find Cash Buyers for Wholesaling Real Estate | FreeDealCalc",
  description: "Proven strategies to build a cash buyers list for real estate wholesaling. Where to find active investors and how to qualify them fast.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-find-cash-buyers-wholesaling' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Your buyers need deals that pencil — Freddie confirms the math before you blast.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Check My Deal Math Free →</a>
  </div>
);
export default async function FindCashBuyers() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Find Cash Buyers for Wholesaling</h1>
      <div style={s.intro}>Your buyers list is your wholesale business. A deal without buyers is just a contract that expires. Build your buyers list before you find your first deal — so when you get a property under contract, you have a room full of people ready to buy it.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Where Cash Buyers Come From</h2>
      <p style={s.p}>Active cash buyers in your market leave a trail. Every cash transaction recorded at the county courthouse is a data point — the buyer's name, the property they bought, the price they paid, and when they closed. Pull cash sales from the past 12 months in your target zip codes. Sort by recency and frequency. Investors who have bought three or more properties in cash in the past year are your A-list buyers.</p>
      <h2 style={s.h2}>Where to Find Cash Buyers Fast</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Public records / county assessor:</strong> Cash sales have no mortgage recorded. Pull and organize monthly.</li>
        <li style={s.li}><strong>Local REIA meetings:</strong> Every serious investor in your market attends. Show up, collect cards, follow up.</li>
        <li style={s.li}><strong>BiggerPockets:</strong> Filter your metro — active posters who flip or wholesale are looking for deals.</li>
        <li style={s.li}><strong>Facebook investor groups:</strong> Every major metro has active real estate investor groups. Join them all.</li>
        <li style={s.li}><strong>Hard money lenders:</strong> They know every active flipper borrowing in your market. Build the relationship.</li>
        <li style={s.li}><strong>Title companies:</strong> Investor-friendly title agents see every cash transaction. Ask for introductions.</li>
        <li style={s.li}><strong>Your own marketing:</strong> Post bandit signs and run cheap Facebook ads saying you have off-market deals. Buyers will call you.</li>
      </ul>
      <h2 style={s.h2}>How to Qualify a Buyer</h2>
      <p style={s.p}>Not every cash buyer is a good fit. Before you add someone to your list, ask: What price range do you buy in? What neighborhoods? Do you buy as-is? How quickly can you close? What does your typical rehab scope look like? The answers tell you exactly which deals to send them.</p>
      <h2 style={s.h2}>Managing Your List</h2>
      <p style={s.p}>Keep your buyers list in a simple CRM or spreadsheet: name, phone, email, buy box (neighborhoods, price range, condition), last contact date, and deals purchased from you. Segment by buy box and blast only relevant deals to each segment. Sending every deal to your entire list trains buyers to ignore your emails.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Send Your Buyers Deals That Pencil</div>
        <div style={s.ctaText}>Use Freddie to confirm ARV, MAO, and spread before you blast any deal to your list. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Check My Deal Math Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
