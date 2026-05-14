import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'How to Make an Offer on a Distressed Property | FreeDealCalc', description: 'How to make offers on distressed properties — how to price them, what terms matter, how to negotiate, and how to protect yourself if condition is worse than expected.', alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-make-offer-distressed-property' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function OfferDistressed() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>10 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Make an Offer on a Distressed Property</h1>
      <div style={s.intro}>Making an offer on a distressed property is different from buying a turnkey home. You're solving a seller's problem. The price matters less than the terms — speed, certainty, and simplicity are what motivate distressed sellers to accept below-market offers.</div>
      <p style={s.p}>After hundreds of offers on distressed properties in Northern Virginia, I've learned that the number matters but the story around the number matters just as much. Here's the full process.</p>
      <div style={s.divider}/><h2 style={s.h2}>Current Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 1: Know Your Number Before You Make Contact</h2>
      <p style={s.p}>Never walk into a negotiation without a clear max price. Pull comps, estimate rehab, apply the 70% rule. Know your max offer. Know the number at which the deal stops working. Sellers can feel hesitation — going in with conviction and a clear rationale closes deals.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>Step 2: Understand the Seller's Motivation</h2>
      <p style={s.p}>Ask questions before you make an offer. Why are they selling? What's their timeline? Do they need cash at closing or could they consider terms? The answers determine your offer strategy. A seller facing foreclosure in 60 days needs certainty and speed. An estate executor prioritizes simplicity. A landlord who is tired needs to feel respected.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>Structuring the Offer</h2>
      <h3 style={s.h3}>Price</h3>
      <p style={s.p}>Lead with a number that has room to move up slightly. Your initial offer should be 5–10% below your max. This gives you room to negotiate without exceeding your ceiling. Never lead with your best number — even motivated sellers often counter.</p>
      <h3 style={s.h3}>Terms That Win Over Price</h3>
      <ul style={s.ul}>
        <li style={s.li}><strong>Fast close:</strong> 14–21 day close beats a higher offer with 45-day financing contingency</li>
        <li style={s.li}><strong>As-is purchase:</strong> No repair requests, no inspection contingency for renegotiation purposes</li>
        <li style={s.li}><strong>Cash or hard money:</strong> No loan contingency gives the seller certainty</li>
        <li style={s.li}><strong>Flexible possession:</strong> Offer a post-closing occupancy period if the seller needs time to move</li>
        <li style={s.li}><strong>Small earnest money but quick release:</strong> Low EMD limits your risk; quick release signals commitment</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>The Justification</h2>
      <p style={s.p}>When you present a below-market offer, bring the math. Show the comparable sales, show the estimated renovation costs, show what you project to spend to make the property sellable. Sellers who see a logical rationale accept lower prices than sellers who only hear a number with no context. You're not lowballing — you're showing them why the property is worth what it's worth in its current condition.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Build a Seller Proposal to Support Your Offer</div>
        <div style={s.ctaText}>FreeDealCalc generates a professional Seller Proposal with comps and deal rationale — the tool that helps sellers understand your number. Free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Build My Seller Proposal Free →</a>
      </div>
      <h2 style={s.h2}>Protecting Yourself If Condition Is Worse Than Expected</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Inspection period:</strong> Always include a due diligence period. Even as-is buyers need time to confirm scope.</li>
        <li style={s.li}><strong>Rehab contingency:</strong> On heavily distressed properties, you may include a clause allowing price adjustment if inspection reveals costs above a threshold</li>
        <li style={s.li}><strong>Keep your EMD low</strong> until you've confirmed the scope of work</li>
      </ul>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has made hundreds of offers on distressed properties in Northern Virginia.</p>
    </div>
  );
}
