import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Find Reliable Contractors for House Flipping | FreeDealCalc",
  description: "How to find, vet, and manage contractors for a house flip — where to look, what to ask, contract terms that protect you, and red flags to avoid.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-find-contractors-house-flip' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Try Freddie Free →</a>
  </div>
);
export default async function FindContractors() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>10 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Find Reliable Contractors for House Flipping</h1>
      <div style={s.intro}>The right contractor relationship is worth more than any deal. The wrong one destroys profit, timelines, and your sanity. Here's how to build a contractor network before you need it and vet every new relationship carefully.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      
      <div style={s.divider}/>
      <h2 style={s.h2}>Where to Find Contractors</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Other investors:</strong> Ask at REIA meetings who they use. Investor-friendly contractors know what flip quality looks like and work at the right pace.</li>
        <li style={s.li}><strong>Title company referrals:</strong> Title reps see dozens of flips close. They know who delivers and who doesn't.</li>
        <li style={s.li}><strong>Supply houses:</strong> Contractors buying at the lumber yard are active. Ask the counter staff who the good operators are.</li>
        <li style={s.li}><strong>Craigslist:</strong> Look for contractors posting work photos and referrals. Requires more vetting but finds active operators.</li>
        <li style={s.li}><strong>Nextdoor/neighborhood apps:</strong> Homeowners share contractor experiences. Look for repeated names with positive reviews.</li>
      </ul>
      <h2 style={s.h2}>How to Vet a New Contractor</h2>
      <ul style={s.ul}>
        <li style={s.li}>Verify license and insurance — ask for certificates, verify with state licensing board</li>
        <li style={s.li}>Check references — call at least 2–3 recent clients, ask specifically about timeline and quality</li>
        <li style={s.li}>Visit a current job site if possible — organization and cleanliness signal professionalism</li>
        <li style={s.li}>Start with a small scope — test with one room or one trade before awarding full project</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Build Your Budget Before the Contractor Conversation</div>
        <div style={s.ctaText}>Know your target rehab budget before getting bids — Freddie helps you build a scope-based estimate free so you negotiate from knowledge.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Build My Rehab Budget Free →</a>
      </div>
      <h2 style={s.h2}>Contract Terms That Protect You</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Scope of work in writing:</strong> Every item specified — no "general renovation" contracts</li>
        <li style={s.li}><strong>Draw schedule tied to completion milestones:</strong> Never pay ahead of work completed</li>
        <li style={s.li}><strong>Lien waivers with each draw:</strong> Protects you from sub-contractor liens</li>
        <li style={s.li}><strong>Completion date with penalty clause:</strong> Incentivizes timely delivery</li>
        <li style={s.li}><strong>Change order requirement:</strong> All scope changes in writing with agreed pricing before work begins</li>
      </ul>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in real estate for 20+ years.</p>
    </div>
  );
}
