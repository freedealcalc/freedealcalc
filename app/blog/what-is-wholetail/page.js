import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'What is Wholetailing? The Middle Path Between Wholesale and Flip | FreeDealCalc', description: 'Wholetailing explained — buying a distressed property, doing minimal cleanup, and selling on the MLS to retail buyers. Higher profit than wholesale, less risk than a full flip.', alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-wholetail' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function WhatIsWholetail() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>What is Wholetailing? The Middle Path Between Wholesale and Flip</h1>
      <div style={s.intro}>Wholetailing is buying a distressed property, doing minimal work — cleanout, basic repairs, maybe paint and carpet — and listing it on the MLS at or near as-is market value. You capture more profit than a wholesale assignment without taking on the full renovation risk of a flip.</div>
      <p style={s.p}>I wholetailed a hoarder house in Northern Virginia that failed the 70% rule as a flip. We paid $210,000, spent $5,000 on cleanout and basic work, listed on the MLS, and sold for $349,000. The buyer did the renovation. We cleared $115,000 in net profit without touching a hammer. That is wholetailing at its best.</p>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>Wholetail vs. Wholesale vs. Flip</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Wholesale:</strong> Assign the contract before closing. No renovation. Profit = assignment fee ($5K–$30K typical). Fastest exit, lowest profit.</li>
        <li style={s.li}><strong>Wholetail:</strong> Buy, minimal work, MLS listing. Profit = spread between purchase + minimal costs and MLS sale price. Medium timeline, medium profit.</li>
        <li style={s.li}><strong>Flip:</strong> Buy, full renovation, MLS listing at ARV. Highest profit potential, most time, most risk.</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>When Wholetailing Works Best</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Strong demand for as-is properties</strong> — buyers willing to take on renovation in tight inventory markets</li>
        <li style={s.li}><strong>Deal fails the 70% flip rule</strong> but has significant equity at purchase price</li>
        <li style={s.li}><strong>Property condition is better than it looks</strong> — hoarder cleanup reveals a structurally sound home</li>
        <li style={s.li}><strong>Renovation risk is high</strong> — unknown condition, older systems, permit-heavy work needed</li>
        <li style={s.li}><strong>Speed matters</strong> — you want to exit in 30–60 days, not 6–9 months</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>The Wholetail Math</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Purchase price:</strong> $210,000</li>
        <li style={s.li}><strong>Cleanout + minimal work:</strong> $5,000</li>
        <li style={s.li}><strong>Holding costs (60 days):</strong> $4,200</li>
        <li style={s.li}><strong>Selling costs (5.5% + closing):</strong> $21,000</li>
        <li style={s.li}><strong>Total cost:</strong> $240,200</li>
        <li style={s.li}><strong>MLS sale price:</strong> $349,000</li>
        <li style={s.li}><strong>Net profit:</strong> $108,800</li>
      </ul>
      <p style={s.p}>Compare to wholesale: same deal assigned for a $20,000 fee. Wholetail captured nearly $90,000 more profit in exchange for 60 more days of holding and $30,000 in costs. The math almost always favors wholetailing in a tight MLS market.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Run Your Wholetail Analysis Free</div>
        <div style={s.ctaText}>FreeDealCalc runs wholesale, wholetail, and flip analysis side-by-side so you pick the right exit for every deal. Free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Wholetail Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has closed multiple wholetail deals in Northern Virginia.</p>
    </div>
  );
}
