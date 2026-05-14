import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Wholesale Real Estate Contracts Explained | FreeDealCalc",
  description: "Everything you need to know about purchase agreements and assignment contracts in wholesaling. What clauses matter and what protects you.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/wholesale-real-estate-contracts-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze the deal before you sign any contract — Freddie confirms your MAO free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Run My Deal Free →</a>
  </div>
);
export default async function WholesaleContracts() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Wholesale Real Estate Contracts Explained</h1>
      <div style={s.intro}>Your wholesale contract is your entire position. Get it right and you control the deal. Get it wrong and you either lose the deal or face legal exposure. Here is what every wholesaler needs to understand about purchase and assignment agreements.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>The Two Contracts in Wholesaling</h2>
      <p style={s.p}>Wholesaling uses two documents: the purchase agreement between you and the seller, and the assignment agreement between you and your end buyer. The purchase agreement gives you equitable interest and the right to assign. The assignment agreement transfers that right to your buyer for a fee. Closing happens between the seller and your buyer — you collect your assignment fee at or before closing.</p>
      <h2 style={s.h2}>Critical Clauses in Your Purchase Agreement</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Assignability clause:</strong> "Buyer may assign this contract without seller consent." Without this, you cannot wholesale the deal.</li>
        <li style={s.li}><strong>Inspection contingency:</strong> Gives you time to find a buyer without going hard on the contract. Negotiate 7–14 days.</li>
        <li style={s.li}><strong>Earnest money:</strong> Keep it as low as the seller will accept — $500–$2,000 on wholesale deals. This is at-risk capital.</li>
        <li style={s.li}><strong>Closing timeline:</strong> 14–21 days is standard for cash wholesale closings. Leave enough time to market the deal.</li>
        <li style={s.li}><strong>AS-IS clause:</strong> Protects you from post-closing repair demands. Seller acknowledges buyer is purchasing in current condition.</li>
      </ul>
      <h2 style={s.h2}>The Assignment Agreement</h2>
      <p style={s.p}>The assignment agreement should specify: the original contract being assigned, the assignment fee amount, who pays it and when (typically at closing from the buyer's funds), and that the original contract terms remain in force. Keep it simple — a one-page assignment agreement is standard in most markets.</p>
      <h2 style={s.h2}>Double Closing vs Assignment</h2>
      <p style={s.p}>Some deals require a double closing (A-to-B, then B-to-C) instead of a direct assignment. This happens when the seller does not want to see your assignment fee, when the buyer's lender prohibits assignments, or when the spread is very large. Double closings require two sets of closing costs but offer more privacy. Work with a title company familiar with investment closings.</p>
      <h2 style={s.h2}>Work with an Investor-Friendly Title Company</h2>
      <p style={s.p}>Not every title company will handle wholesale assignments. Find a title company in your market that works regularly with investors — they will know your paperwork, process assignments cleanly, and not flag your fee as problematic. Build this relationship before you need it on a live deal.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Before You Contract</div>
        <div style={s.ctaText}>Know your MAO, assignment fee potential, and deal score before you sign any contract. Freddie is free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Run My Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
