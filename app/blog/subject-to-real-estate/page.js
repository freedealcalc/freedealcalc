import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'Subject-To Real Estate: Buying Properties Subject to Existing Financing | FreeDealCalc', description: 'Subject-to explained — buying a property while leaving the seller\'s existing mortgage in place. How it works, the risks, and when to use it.', alternates: { canonical: 'https://www.freedealcalc.com/blog/subject-to-real-estate' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function SubjectTo() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>10 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Subject-To Real Estate: Buying Properties Subject to Existing Financing</h1>
      <div style={s.intro}>Buying subject-to means you take ownership of a property while the seller's existing mortgage stays in place — in their name. You take title, you make the payments, but the loan never transfers to you. It's a creative financing strategy that can get you into deals without qualifying for a new loan.</div>
      <p style={s.p}>Subject-to deals are most common in pre-foreclosure situations — a seller who is behind on payments and needs out fast. They deed you the property, you take over the payments, they avoid foreclosure. You get a deal potentially below market with existing financing already in place.</p>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>How Subject-To Works</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Seller deeds property to you</strong> — title transfers via warranty or quitclaim deed</li>
        <li style={s.li}><strong>Existing mortgage stays in seller's name</strong> — the lender is not notified, the loan does not transfer</li>
        <li style={s.li}><strong>You make the payments</strong> — directly or through a servicing company</li>
        <li style={s.li}><strong>Seller's credit is at risk</strong> — if you stop paying, their credit suffers</li>
        <li style={s.li}><strong>You own the property</strong> — you can rent it, flip it, or refinance later</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>The Due-on-Sale Clause Risk</h2>
      <p style={s.p}>Almost every mortgage contains a due-on-sale clause — the lender can call the full loan due immediately if the property changes ownership. In practice, lenders rarely exercise this right as long as payments are being made. But it's a real risk. If rates have risen significantly since the seller's loan originated, a lender has incentive to call the note and force a refinance at current rates.</p>
      <p style={s.p}>This is why subject-to works best on older loans with low rates — the lender has no incentive to call a 3% note when market rates are 7%.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>When Subject-To Makes Sense</h2>
      <ul style={s.ul}>
        <li style={s.li}>Seller has a low-rate loan you want to preserve in a high-rate environment</li>
        <li style={s.li}>Pre-foreclosure seller who needs to exit immediately — no time for traditional sale</li>
        <li style={s.li}>Investor without sufficient credit or reserves to qualify for new financing</li>
        <li style={s.li}>Deal with minimal equity — not worth a traditional purchase but worth taking over payments</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Subject-To Deals Free</div>
        <div style={s.ctaText}>FreeDealCalc runs subject-to analysis — existing loan terms, cash flow with inherited financing, and exit strategy math — free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Subject-To Deal →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia for 20+ years.</p>
    </div>
  );
}
