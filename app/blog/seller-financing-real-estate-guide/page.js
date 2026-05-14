import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Seller Financing Real Estate Guide | FreeDealCalc",
  description: "How seller financing works in real estate. When sellers carry notes, how to structure the deal, interest rates, and the advantages for buyers and sellers.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/seller-financing-real-estate-guide' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Know ARV and cash flow on any seller-financed property before you negotiate terms — Freddie is free.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Deal Free →</a>
  </div>
);
export default async function SellerFinancing() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Seller Financing Real Estate: A Complete Guide</h1>
      <div style={s.intro}>Seller financing — where the seller acts as the bank — can make deals possible that conventional lending cannot touch. The flexibility of direct negotiation with the owner creates structures unavailable from institutional lenders, and the seller benefits from installment sale tax advantages and ongoing income.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>How Seller Financing Works</h2>
      <p style={s.p}>Instead of getting a bank loan, you negotiate terms directly with the seller. They carry a promissory note secured by the property. You make monthly payments to them — including principal and interest — for an agreed term. The seller holds a first or second mortgage as security. Upon a balloon payment or your sale of the property, the seller is paid in full.</p>
      <h2 style={s.h2}>When Sellers Will Carry</h2>
      <p style={s.p}>Sellers who own properties free and clear are the primary candidates — they have no underlying mortgage to pay off at closing. Sellers motivated by installment sale tax advantages — spreading capital gains over multiple years rather than taking a lump sum — are actively interested in carrying notes. Sellers who trust you and want ongoing income from a reliable borrower sometimes prefer a note to a one-time payout.</p>
      <h2 style={s.h2}>Typical Seller Financing Terms</h2>
      <p style={s.p}>Interest rates typically run 5–8% — above what the seller would earn in a savings account, below what you would pay for hard money. Down payments are negotiable — 5–20% is common. Terms range from 5-year balloons to 30-year fully amortizing notes. Negotiate every element — there is no standard structure in seller financing.</p>
      <h2 style={s.h2}>Protecting Both Parties</h2>
      <p style={s.p}>Use a real estate attorney to draft the promissory note and mortgage documents. Ensure the note includes: interest rate, payment schedule, balloon date if applicable, default provisions, and remedies. The seller needs title insurance and should record the mortgage. The buyer should get title insurance protecting their ownership interest. Do not use a handshake agreement on seller financing — the stakes are too high.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Seller-Financed Deals</div>
        <div style={s.ctaText}>Know ARV, cash flow, and deal score on any seller-financed property before you negotiate terms. Freddie is free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
