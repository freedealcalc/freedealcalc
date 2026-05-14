import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'What Happens When You Inherit a House? Complete Guide | FreeDealCalc',
  description: 'What happens when you inherit a house — probate process, tax implications, your options, and how to decide whether to sell, rent, or keep it.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/what-happens-when-you-inherit-a-house' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function InheritHouse() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>10 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>What Happens When You Inherit a House? Complete Guide</h1>
      <div style={s.intro}>Inheriting a house triggers a series of legal, financial, and practical decisions that most people have never had to make before. Here's a clear walkthrough of what happens and what your options are.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 1: The Probate Process</h2>
      <p style={s.p}>Most inherited properties must pass through probate — the court-supervised process of transferring assets from the deceased to heirs. Timeline: 3–18 months depending on state, complexity, and whether the will is contested. A living trust bypasses probate. An estate attorney handles this process — don't try to navigate it alone.</p>
      <h2 style={s.h2}>Step 2: The Stepped-Up Basis</h2>
      <p style={s.p}>Inherited property receives a stepped-up cost basis — your tax basis is the fair market value on the date of death, not the original purchase price. If grandma bought the house for $40,000 in 1975 and it's worth $380,000 today, your basis is $380,000. Sell it for $380,000 and you owe zero capital gains. This is one of the most valuable tax benefits in the tax code.</p>
      <h2 style={s.h2}>Step 3: Your Options</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Sell immediately:</strong> Capture the stepped-up basis, receive cash, close the estate. Simple and clean.</li>
        <li style={s.li}><strong>Rent it:</strong> Keep the asset, generate income, let it appreciate further. Requires managing a rental or hiring a PM.</li>
        <li style={s.li}><strong>Move in:</strong> Use as primary residence. Preserves the asset and eliminates your housing cost.</li>
        <li style={s.li}><strong>Renovate and sell:</strong> If the property needs work, a full renovation before listing can significantly increase your net proceeds.</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Inherited Property Free</div>
        <div style={s.ctaText}>FreeDealCalc runs the numbers on any inherited property — what it's worth as-is, what an investor would pay, and what a renovation could return. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Inherited Property →</a>
      </div>
      <h2 style={s.h2}>When Multiple Heirs Are Involved</h2>
      <p style={s.p}>If the property passes to multiple heirs, all must agree on the disposition. One heir can force a sale through a partition action if the others won't cooperate — but this is slow and expensive. Agreement among heirs early on, even if imperfect, is almost always better than litigation.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
