export const revalidate = 2592000;
export const metadata = {
  title: "What Is a Disposition Package? Wholesale Real Estate",
  description: "A disposition package is how wholesalers present deals to cash buyers.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-a-disposition-package' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Generate a professional dispo package for any deal free with FreeDealCalc.</span>
    <a href="https://www.freedealcalc.com/dispo" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Build My Dispo Package →</a>
  </div>
);
export default function Page() {
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>What Is a Disposition Package?</h1>
      <div style={s.intro}>A disposition package is the presentation wholesalers use to market deals to their cash buyer list. It's the difference between sending a text with an address and presenting a deal professionally. Strong dispo packages close faster and attract higher offers.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>What Goes in a Dispo Package</h2>
      <p style={s.p}>Every strong dispo package includes: property address and photos, ARV with comp support, estimated rehab scope and cost, your asking price, net profit estimate for the buyer, title company contact, and timeline. The more complete the package, the fewer questions buyers ask and the faster it closes.</p>
      <div style={s.divider}/><h2 style={s.h2}>Why Most Wholesale Deals Fall Apart</h2>
      <p style={s.p}>Buyers back out when they don't trust the numbers. A deal sent as "3/2 in [city], asking $120k, ARV $210k" with no comps, no rehab estimate, and no photos fails because the buyer has to do all the work to verify it. A full package does that work for them.</p>
      <div style={s.divider}/><h2 style={s.h2}>ARV Documentation Is Everything</h2>
      <p style={s.p}>Include 3–5 closed comps within 0.5 miles, same property type, sold within 90 days. Show the comp addresses, sale prices, and square footage. Buyers who trust your ARV trust your deal.</p>
      <div style={s.divider}/><h2 style={s.h2}>How to Build One Fast</h2>
      <p style={s.p}>FreeDealCalc's disposition package generator builds a complete, professional dispo package in under 60 seconds. Enter the deal details, add comps, and download a formatted package ready to send to your buyer list.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Free</div>
        <div style={s.ctaText}>Generate a professional dispo package for any deal free with FreeDealCalc.</div>
        <a href="https://www.freedealcalc.com/dispo" style={s.ctaBtn}>Build My Dispo Package →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He is the founder of FreeDealCalc.com, which includes a free disposition package generator.</p>
    </div>
  );
}
