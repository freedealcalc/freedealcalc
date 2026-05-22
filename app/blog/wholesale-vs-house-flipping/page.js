export const revalidate = 2592000;
export const metadata = {
  title: "Wholesaling vs House Flipping: Which Strategy Is Right for You? | FreeDealCalc",
  description: "Comparing wholesaling vs house flipping? Both strategies work — but they require different skills, capital, and risk tolerance. Here is how to decide which fits your situation.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/wholesale-vs-house-flipping' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal for both wholesale and flip scenarios free with Freddie.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My Deal →</a>
  </div>
);
export default function Page() {
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Wholesaling vs House Flipping: Which Is Right for You?</h1>
      <div style={s.intro}>Wholesaling and house flipping both generate income from distressed real estate — but they work completely differently. Understanding the tradeoffs helps you choose the right strategy for your capital, skills, and timeline.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>What Wholesaling Is</h2>
      <p style={s.p}>Wholesaling is finding a distressed property, getting it under contract below market value, and selling the contract to a cash buyer for an assignment fee — typically $10k–$30k per deal. You never own the property. No renovation, no financing, no holding period.</p>
      <div style={s.divider}/><h2 style={s.h2}>What House Flipping Is</h2>
      <p style={s.p}>Flipping is buying a distressed property, renovating it, and selling it at market value. You own the property during the rehab period, carry all the risk, and capture the full profit — typically $40k–$100k+ on a well-executed flip.</p>
      <div style={s.divider}/><h2 style={s.h2}>Capital Requirements</h2>
      <p style={s.p}>Wholesaling requires minimal capital — marketing costs ($2k–$5k/month), earnest money deposits ($1k–$5k per deal). Flipping requires significant capital — 20–30% down plus rehab costs, or hard money with its associated costs.</p>
      <div style={s.divider}/><h2 style={s.h2}>Risk Profile</h2>
      <p style={s.p}>Wholesaling risk is primarily time and marketing spend. If a deal doesn't close, you lose your earnest money and marketing investment. Flipping risk includes cost overruns, market softness, financing costs, and extended timelines — any of which can eliminate profit.</p>
      <div style={s.divider}/><h2 style={s.h2}>Which Generates More Income</h2>
      <p style={s.p}>Experienced flippers earn more per deal — $50k–$100k vs $10k–$25k for wholesale. But wholesalers can do more deals with less capital and close more often. A wholesaler doing 3–4 deals/month at $15k each ($540k–$720k/year) outearns a flipper doing 6 deals/year at $60k each ($360k).</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Free</div>
        <div style={s.ctaText}>Analyze any deal for both wholesale and flip scenarios free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has executed both strategies across Northern Virginia for over 20 years.</p>
    </div>
  );
}
