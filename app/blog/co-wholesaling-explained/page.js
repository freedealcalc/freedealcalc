import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Co-Wholesaling Real Estate Explained | FreeDealCalc",
  description: "How co-wholesaling works — splitting the assignment fee with another wholesaler who brings the deal or the buyer. A guide to partnerships that close.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/co-wholesaling-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Verify the deal math before you co-wholesale — Freddie confirms ARV and fee potential free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Check the Numbers Free →</a>
  </div>
);
export default async function CoWholesaling() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Co-Wholesaling Real Estate Explained</h1>
      <div style={s.intro}>Co-wholesaling is a partnership model where two wholesalers split an assignment fee — one brings the deal, the other brings the buyer. Done right, both sides win. Done carelessly, it creates disputes and damaged relationships.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>How Co-Wholesaling Works</h2>
      <p style={s.p}>Two common structures: (1) You have a deal under contract and another wholesaler has a buyer you cannot reach. They introduce the buyer, the deal closes, and you split the fee. (2) Another wholesaler has a deal they cannot move and you have a buyer who fits — same split. The fee split is typically 50/50 but can vary based on which side is harder to find and what both parties agree to in writing.</p>
      <h2 style={s.h2}>Why Co-Wholesaling Matters for Beginners</h2>
      <p style={s.p}>When you are building your buyers list, co-wholesaling lets you close deals before your list is deep enough to move them alone. When you are building your deal flow, co-wholesaling gives you transactions to build your buyer relationships while your marketing ramps up. A smaller cut of a closed deal is more valuable than 100% of a deal that never closes.</p>
      <h2 style={s.h2}>Always Get the Split in Writing</h2>
      <p style={s.p}>A verbal agreement on a co-wholesale split is a recipe for conflict. Use a simple one-page co-wholesaling agreement that specifies: the property address, the assignment fee amount, each party's split percentage, and who gets paid and when. Title will often pay both parties directly from closing proceeds if the agreement is submitted in advance.</p>
      <h2 style={s.h2}>Red Flags to Avoid</h2>
      <ul style={s.ul}>
        <li style={s.li}>Wholesalers who go direct to your seller or buyer after seeing your deal — always keep contact info protected until contract is signed</li>
        <li style={s.li}>Vague agreements on fee splits — get specifics in writing before marketing the deal</li>
        <li style={s.li}>Partners who have not verified the deal math — confirm ARV and rehab independently before co-wholesaling</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Verify the Deal Math Before You Co-Wholesale</div>
        <div style={s.ctaText}>Run any co-wholesale deal through Freddie first — confirm ARV, MAO, and fee potential before bringing in a partner.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Check the Numbers Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
