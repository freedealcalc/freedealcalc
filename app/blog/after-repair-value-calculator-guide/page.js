import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'How to Calculate After Repair Value (ARV) for Any Property',
  description: 'How to find ARV — the after-repair value — using comparable sales. Step-by-step from a 20-year flipper who runs comps before every offer.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/after-repair-value-calculator-guide' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function ARVGuide() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>10 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Calculate After Repair Value (ARV) for Any Property</h1>
      <div style={s.intro}>ARV is what a property will sell for after renovation. It's the most important number in any flip or BRRRR deal — and it's only as good as the comps you pull. Here's how to find it accurately.</div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>
      <p style={s.p}>Every number in a fix-and-flip deal flows from ARV. Your max offer, your 70% rule check, your profit projection — all of it starts with an accurate after-repair value. Get ARV wrong and everything downstream is wrong.</p>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>What Makes a Good Comparable Sale</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Location:</strong> Within 0.5 miles in urban areas, 1 mile in suburban, up to 3 miles in rural. Same neighborhood or subdivision is ideal.</li>
        <li style={s.li}><strong>Recency:</strong> Sold within 90 days. Use 6 months max in slow markets. Older comps may not reflect current conditions.</li>
        <li style={s.li}><strong>Size:</strong> Within 15–20% of your property's square footage.</li>
        <li style={s.li}><strong>Condition:</strong> Fully renovated or move-in ready — you're selling a renovated product, so comp against renovated properties.</li>
        <li style={s.li}><strong>Bed/bath count:</strong> Match as closely as possible. A 3/2 doesn't comp well against a 4/3.</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>Where to Pull Comps</h2>
      <h3 style={s.h3}>MLS (Best Source)</h3>
      <p style={s.p}>If you're a licensed agent or have a relationship with one, MLS comps are the most accurate and detailed. You can filter by all the criteria above and see actual sold prices, not asking prices.</p>
      <h3 style={s.h3}>Rentcast (Third-Party Verification)</h3>
      <p style={s.p}>Rentcast pulls comparable sales automatically by address. Useful for quick estimates and — critically — as third-party verified data you can include in your dispo package to build buyer confidence. FreeDealCalc integrates Rentcast directly.</p>
      <h3 style={s.h3}>Zillow/Redfin (Free Approximation)</h3>
      <p style={s.p}>Public comp data. Less accurate than MLS but useful for quick sanity checks. Always verify against MLS before making an offer.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>How to Adjust Comps</h2>
      <p style={s.p}>No two properties are identical. Adjust your comp prices for differences in size, beds/baths, lot size, garage, and condition. Rule of thumb: $15–$25/sq ft for size adjustments in moderate markets; $50–$75/sq ft in high-cost markets like Northern Virginia.</p>
      <p style={s.p}>If your three comps sell at $380,000, $395,000, and $410,000, and your property is slightly smaller than the middle comp, your adjusted ARV might be $370,000–$385,000. Use the conservative end for your offer math.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Get Rentcast Verified ARV in Seconds</div>
        <div style={s.ctaText}>FreeDealCalc pulls Rentcast comps automatically by address — ARV with third-party verification, included in your free deal analysis.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Get My ARV Free →</a>
      </div>
      <div style={s.divider}/>
      <h2 style={s.h2}>Common ARV Mistakes</h2>
      <ul style={s.ul}>
        <li style={s.li}>Using active listings (asking prices) instead of sold comps</li>
        <li style={s.li}>Accepting the wholesaler's ARV without pulling your own comps</li>
        <li style={s.li}>Using distressed sales as comps for a renovated product</li>
        <li style={s.li}>Ignoring condition — a 2023 renovation comps differently than a 2015 renovation</li>
        <li style={s.li}>Not adjusting for significant size differences between the subject and comps</li>
      </ul>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He pulls comps on every deal before making an offer.</p>
    </div>
  );
}
