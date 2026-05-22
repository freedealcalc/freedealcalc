export const revalidate = 2592000;
export const metadata = {
  title: "What Is a Good Cap Rate for Real Estate? | FreeDealCalc",
  description: "Cap rate benchmarks by property type and market. Learn what a good cap rate looks like in 2026, how to calculate it, and what it tells you about an investment.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-a-good-cap-rate' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Calculate cap rate on any property free — enter the address and Freddie does the math.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Calculate My Cap Rate →</a>
  </div>
);
export default function Page() {
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>6 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>What Is a Good Cap Rate for Real Estate?</h1>
      <div style={s.intro}>Cap rate is the most widely used metric for evaluating income-producing real estate. It tells you the unleveraged yield on a property — what you'd earn if you paid all cash. Understanding what a good cap rate looks like in your market is essential for evaluating any rental deal.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Cap Rate Formula</h2>
      <p style={s.p}>Cap Rate = Net Operating Income / Property Value. NOI = Gross Rent − Operating Expenses (taxes, insurance, maintenance, management, vacancy). Does NOT include mortgage payments — cap rate is pre-financing.</p>
      <div style={s.divider}/><h2 style={s.h2}>What Is a Good Cap Rate in 2026</h2>
      <p style={s.p}>It depends heavily on market and property type. Single-family in high-cost markets (DC, NYC, LA): 3–5% is normal. Single-family in mid-tier markets: 5–7%. Multifamily in competitive markets: 4–6%. Multifamily in secondary markets: 6–9%. Commercial and industrial: 6–10%.</p>
      <div style={s.divider}/><h2 style={s.h2}>Cap Rate vs Cash-on-Cash Return</h2>
      <p style={s.p}>Cap rate ignores financing. Cash-on-cash return measures your actual return on invested capital after debt service. A 6% cap rate property with leverage might produce a 12% cash-on-cash return — or a 2% return if you overpay and over-leverage. Both metrics matter.</p>
      <div style={s.divider}/><h2 style={s.h2}>Using Cap Rate to Value Properties</h2>
      <p style={s.p}>Property Value = NOI / Cap Rate. If comparable properties in your market trade at 6% cap rates and your target property generates $24,000 NOI, its market value is $400k. Use this to quickly assess whether an asking price is reasonable.</p>
      <div style={s.divider}/><h2 style={s.h2}>Cap Rate Compression</h2>
      <p style={s.p}>When prices rise faster than rents, cap rates compress. In 2021–2023, aggressive buyers pushed cap rates below 4% in many markets. In 2024–2026, higher interest rates have forced cap rates higher as buyers require more yield to make deals work with financing.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Deal Free</div>
        <div style={s.ctaText}>Calculate cap rate on any property free — enter the address and Freddie does the math.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Cap Rate →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been analyzing rental property cap rates across Northern Virginia for over 20 years.</p>
    </div>
  );
}
