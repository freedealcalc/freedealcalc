import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How Long Does It Take to Flip a House? Real Timelines | FreeDealCalc",
  description: "How long does a house flip take? Acquisition, renovation, and sale timelines — what's realistic, what causes delays, and how to stay on schedule.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-long-does-it-take-to-flip-a-house' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function FlipTimeline() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How Long Does It Take to Flip a House? Real Timelines</h1>
      <div style={s.intro}>Most house flips take 4–9 months from purchase to sale. The range is wide because timelines depend on rehab scope, contractor availability, permit processing, and market conditions. Here's what actually drives the clock.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Phase Breakdown</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Acquisition (1–3 weeks):</strong> From ratified contract to closing. Hard money closes faster than conventional.</li>
        <li style={s.li}><strong>Pre-renovation (1–2 weeks):</strong> Permits pulled, contractor mobilized, materials ordered.</li>
        <li style={s.li}><strong>Renovation (6–16 weeks):</strong> The biggest variable. Cosmetic flip: 6–8 weeks. Full gut rehab: 12–20 weeks.</li>
        <li style={s.li}><strong>Listing to contract (1–4 weeks):</strong> Depends heavily on market conditions. Hot markets: days. Softer markets: 3–6 weeks.</li>
        <li style={s.li}><strong>Contract to close (3–5 weeks):</strong> Buyer financing, appraisal, inspection period, title work.</li>
      </ul>
      <h2 style={s.h2}>Total Timeline by Project Type</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Cosmetic flip (paint, carpet, kitchen refresh):</strong> 3–5 months</li>
        <li style={s.li}><strong>Medium rehab (kitchen/bath gut, flooring, systems):</strong> 5–7 months</li>
        <li style={s.li}><strong>Heavy rehab (full renovation, all systems):</strong> 7–10 months</li>
        <li style={s.li}><strong>Major addition or structural work:</strong> 10–18 months</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Model Your Hold Period Before You Offer</div>
        <div style={s.ctaText}>Freddie calculates holding costs for your expected timeline — every month matters. Free deal analysis including time-based carrying costs.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Model My Flip Timeline Free →</a>
      </div>
      <h2 style={s.h2}>The Biggest Timeline Killers</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Permit delays:</strong> Some jurisdictions take 4–8 weeks for permit approval. Pull permits on day one.</li>
        <li style={s.li}><strong>Contractor no-shows:</strong> The most common delay. Have a backup contractor relationship.</li>
        <li style={s.li}><strong>Material lead times:</strong> Custom cabinets, windows, and appliances can take 4–8 weeks to deliver.</li>
        <li style={s.li}><strong>Scope creep:</strong> Discovering additional work mid-project. Avoid by doing a thorough pre-offer inspection.</li>
      </ul>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
