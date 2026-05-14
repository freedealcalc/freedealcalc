import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "First Real Estate Deal Checklist | FreeDealCalc",
  description: "A complete checklist for closing your first real estate investment deal. Every step from finding the deal to closing day.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/first-real-estate-deal-checklist' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Run your first deal through Freddie before you make any offer — free deal analysis.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My First Deal Free →</a>
  </div>
);
export default async function FirstDealChecklist() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>First Real Estate Deal Checklist</h1>
      <div style={s.intro}>Your first real estate deal is the hardest. Not because the process is complicated — it is not — but because every step is unfamiliar and every decision feels high-stakes. This checklist removes the uncertainty.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>Before You Make an Offer</h2>
      <ul style={s.ul}>
        <li style={s.li}>Verify ARV using at least 3 comparable sales from the last 90 days within half a mile</li>
        <li style={s.li}>Get a contractor walkthrough and written estimate before going under contract</li>
        <li style={s.li}>Calculate MAO: ARV times 0.70 minus rehab estimate</li>
        <li style={s.li}>Confirm your financing is pre-approved and ready to close</li>
        <li style={s.li}>Identify your exit buyer (flip) or verify rent comps (rental or BRRRR)</li>
        <li style={s.li}>Run the full deal analysis through FreeDealCalc — score, MAO, and projected profit</li>
      </ul>
      <h2 style={s.h2}>Under Contract</h2>
      <ul style={s.ul}>
        <li style={s.li}>Complete a full property inspection — hire a licensed inspector even if you have walked the property yourself</li>
        <li style={s.li}>Pull title search and confirm no unexpected liens or encumbrances</li>
        <li style={s.li}>Verify insurance coverage is in place before closing</li>
        <li style={s.li}>Confirm your hard money lender or financing has the property appraised and approved</li>
        <li style={s.li}>Lock your contractor start date for within 48 hours of closing</li>
      </ul>
      <h2 style={s.h2}>After Closing</h2>
      <ul style={s.ul}>
        <li style={s.li}>Change all locks immediately on closing day</li>
        <li style={s.li}>Install security camera or lockbox so you can monitor access remotely</li>
        <li style={s.li}>Open a dedicated bank account for this property — all expenses and income flow through it</li>
        <li style={s.li}>Start a weekly site visit cadence — you need to see progress to catch problems early</li>
        <li style={s.li}>Track every expense from day one — you will thank yourself at tax time</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your First Deal Before You Offer</div>
        <div style={s.ctaText}>Run any deal through Freddie before you sign anything — ARV, MAO, deal score, and projected profit free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My First Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
