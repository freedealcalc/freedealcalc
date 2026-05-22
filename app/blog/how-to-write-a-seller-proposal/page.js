export const revalidate = 2592000;
export const metadata = {
  title: "How to Write a Seller Proposal for Cash Offers | FreeDealCalc",
  description: "A seller proposal explains your cash offer to a motivated seller without getting into an argument about price. Learn the structure that gets sellers to say yes.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-write-a-seller-proposal' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Generate a professional seller proposal for any deal free with FreeDealCalc.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Build My Seller Proposal →</a>
  </div>
);
export default function Page() {
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Write a Seller Proposal for Cash Offers</h1>
      <div style={s.intro}>A seller proposal is how you present a cash offer to a motivated seller in a way that makes sense to them. Done right, it builds trust, explains the math without exposing your profit, and moves the conversation forward instead of killing it.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Why Most Cash Offers Get Rejected</h2>
      <p style={s.p}>Sellers reject cash offers when the number feels arbitrary. "I'll give you $180k" with no explanation feels like a lowball. The same $180k presented after showing ARV, repair costs, and transaction costs feels like a business calculation — and gets a very different response.</p>
      <div style={s.divider}/><h2 style={s.h2}>The Right Structure</h2>
      <p style={s.p}>Lead with who you are and why you buy houses. Present the ARV with a brief explanation. Show estimated repair and renovation costs. Show transaction costs (buying and selling). Present your offer last, after the math supports it. Never lead with the number.</p>
      <div style={s.divider}/><h2 style={s.h2}>What Not to Include</h2>
      <p style={s.p}>Don't itemize your profit. Don't mention hard money rates or carrying costs — those are your business costs, not the seller's concern. Keep it simple: ARV, repairs, costs, offer.</p>
      <div style={s.divider}/><h2 style={s.h2}>Delivering It Right</h2>
      <p style={s.p}>In person is best. Email as a follow-up after a call. Never send a cold proposal with no prior conversation — the seller needs context before the numbers mean anything.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Free</div>
        <div style={s.ctaText}>Generate a professional seller proposal for any deal free with FreeDealCalc.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Build My Seller Proposal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has presented cash offers to hundreds of sellers across Northern Virginia and uses FreeDealCalc to generate seller proposals on every deal.</p>
    </div>
  );
}
