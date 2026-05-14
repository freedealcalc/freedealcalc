import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Wholesale Real Estate as a Beginner | FreeDealCalc",
  description: "Step-by-step guide to wholesaling real estate with no money and no license. How to find deals, get them under contract, and collect assignment fees.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-wholesale-real-estate-beginners' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Know your MAO before you negotiate — Freddie calculates it free in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Calculate My MAO Free →</a>
  </div>
);
export default async function WholesaleBeginners() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Wholesale Real Estate as a Beginner</h1>
      <div style={s.intro}>Wholesaling is the fastest path into real estate investing for beginners with limited capital. You do not need a license, a renovation crew, or a large bank account — you need the ability to find motivated sellers and connect them to cash buyers.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>What Wholesaling Actually Is</h2>
      <p style={s.p}>Wholesaling means getting a property under contract at a price low enough that you can sell (assign) that contract to a cash buyer for a fee. You never own the property. You control it briefly through a purchase agreement, then transfer that control to an end buyer before closing. The spread between your contract price and what the buyer pays is your profit.</p>
      <h2 style={s.h2}>The Wholesale Process Step by Step</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Step 1 — Find motivated sellers:</strong> Direct mail, cold calling, driving for dollars, probate lists, tax delinquent lists</li>
        <li style={s.li}><strong>Step 2 — Analyze the deal:</strong> Estimate ARV and rehab to calculate MAO and your assignment fee potential</li>
        <li style={s.li}><strong>Step 3 — Make an offer:</strong> Present your offer to the seller — must be below their MAO or there is no room for your fee</li>
        <li style={s.li}><strong>Step 4 — Get it under contract:</strong> Use a standard purchase agreement with an assignability clause</li>
        <li style={s.li}><strong>Step 5 — Market to buyers:</strong> Send to your buyers list, post in investor groups, use a dispo package</li>
        <li style={s.li}><strong>Step 6 — Assign the contract:</strong> Your buyer pays assignment fee, takes your position, closes</li>
      </ul>
      <h2 style={s.h2}>How to Calculate Your Assignment Fee</h2>
      <div style={s.formula}><div style={s.formulaText}>Assignment Fee = Buyer MAO − Your Contract Price</div></div>
      <p style={s.p}>If your buyer's MAO is $175,000 and you have the property under contract at $148,000, your potential assignment fee is $27,000. This is your negotiating spread — any price between your contract and the buyer's MAO is profit to you.</p>
      <h2 style={s.h2}>What Beginners Get Wrong</h2>
      <p style={s.p}>The most common beginner mistake is overestimating ARV and underestimating rehab — which compresses or eliminates the spread. Before you talk to any seller, run the deal numbers through FreeDealCalc so you know your ceiling before you negotiate. Going in blind is the fastest way to tie up a deal that nobody will buy.</p>
      <h2 style={s.h2}>Do You Need a License?</h2>
      <p style={s.p}>Wholesaling laws vary by state. Most states allow assignment of contracts without a license if you are selling your equitable interest in the contract — not acting as a broker marketing someone else's property. Some states have enacted wholesaling-specific regulations. Research your state's laws or consult a real estate attorney before starting.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Wholesale Deal Free</div>
        <div style={s.ctaText}>Know your MAO and assignment fee potential before you negotiate. Freddie runs the numbers free in 60 seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Assignment Fee →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
