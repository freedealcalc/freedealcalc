import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'Fix and Flip Checklist: Every Step from Acquisition to Close | FreeDealCalc', description: 'The complete fix-and-flip checklist — acquisition, renovation, listing, and sale. Every step an experienced flipper checks before moving to the next phase.', alternates: { canonical: 'https://www.freedealcalc.com/blog/fix-and-flip-checklist' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function FixAndFlipChecklist() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>12 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Fix and Flip Checklist: Every Step from Acquisition to Close</h1>
      <div style={s.intro}>Fix-and-flip projects fail when investors skip steps. This checklist covers every phase — deal analysis, due diligence, renovation, listing, and sale — so nothing gets missed on the way from acquisition to profit.</div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>
      <p style={s.p}>After 20+ years and dozens of flips in Northern Virginia, I still use a checklist. Not because I forget — because deals move fast and a missed step on a $400,000 project is expensive. Here's what I check at every phase.</p>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>Phase 1: Deal Analysis (Before Offer)</h2>
      <ul style={s.ul}>
        <li style={s.li}>Pull 3 comparable sales within 0.5 mi, sold within 90 days, similar size and condition</li>
        <li style={s.li}>Establish conservative ARV from comps — your number, not the wholesaler's</li>
        <li style={s.li}>Walk property with contractor to establish rehab budget</li>
        <li style={s.li}>Apply 10–15% contingency to rehab estimate</li>
        <li style={s.li}>Calculate max offer: (ARV × 0.70) − Rehab</li>
        <li style={s.li}>Model all costs: acquisition, rehab, holding, selling</li>
        <li style={s.li}>Project profit and ROI — confirm minimum thresholds are met</li>
        <li style={s.li}>Check title for liens, back taxes, code violations before offer</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>Phase 2: Due Diligence (Under Contract)</h2>
      <ul style={s.ul}>
        <li style={s.li}>Order home inspection and specialist inspections (structural, roof, HVAC, electrical)</li>
        <li style={s.li}>Check permit history — unpermitted work creates liability and appraisal issues</li>
        <li style={s.li}>Order title search — confirm no liens beyond what was disclosed</li>
        <li style={s.li}>Confirm zoning allows intended use</li>
        <li style={s.li}>Get contractor bids to confirm rehab budget</li>
        <li style={s.li}>Verify financing is in place and ready to close</li>
        <li style={s.li}>Lock in insurance</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>Phase 3: Renovation</h2>
      <ul style={s.ul}>
        <li style={s.li}>Signed contract with contractor — scope, schedule, draw schedule, lien waiver requirement</li>
        <li style={s.li}>Pull all required permits before work starts</li>
        <li style={s.li}>Establish weekly site visit schedule</li>
        <li style={s.li}>Document progress with dated photos at every draw request</li>
        <li style={s.li}>Track actual spend vs. budget — flag overruns early</li>
        <li style={s.li}>Get lien waivers from all subs before final payment</li>
        <li style={s.li}>Schedule inspections as required by permit</li>
        <li style={s.li}>Final walkthrough with contractor — punch list before release of final payment</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>Phase 4: Listing and Sale</h2>
      <ul style={s.ul}>
        <li style={s.li}>Professional photography — non-negotiable on any property over $300K</li>
        <li style={s.li}>Staging consultation or full staging depending on price point</li>
        <li style={s.li}>Confirm permits are closed and certificate of occupancy obtained</li>
        <li style={s.li}>List at competitive price based on fresh comps — not your cost basis</li>
        <li style={s.li}>Review every offer for financing contingency, inspection contingency, closing timeline</li>
        <li style={s.li}>Confirm buyer's financing with lender letter before ratifying</li>
        <li style={s.li}>Track closing timeline — follow up on appraisal and clear-to-close milestones</li>
        <li style={s.li}>Confirm wire instructions for settlement proceeds</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Next Flip Before You Make an Offer</div>
        <div style={s.ctaText}>FreeDealCalc runs the full flip analysis — ARV, rehab, holding costs, and projected profit — free with Freddie before you sign anything.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Flip Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been fixing and flipping in Northern Virginia for 20+ years.</p>
    </div>
  );
}
