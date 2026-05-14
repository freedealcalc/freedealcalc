import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'Real Estate Holding Costs: What They Are and How to Calculate Them | FreeDealCalc', description: 'Holding costs explained — every cost you pay from closing to sale on a fix-and-flip. How to estimate them and why they kill deals investors think will work.', alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-holding-costs' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function HoldingCosts() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>9 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate Holding Costs: What They Are and How to Calculate Them</h1>
      <div style={s.intro}>Holding costs are every dollar you spend from the day you close to the day you sell. New investors consistently underestimate them — and it's the single most common reason a deal that looked profitable on paper delivers thin or negative returns in practice.</div>
      <p style={s.p}>On a 9-month hold with 12% hard money, your financing cost alone is 9% of the loan amount. Add insurance, taxes, and utilities, and you're easily looking at 12–15% of purchase price in holding costs before you turn a screwdriver. Model these before you make an offer.</p>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>Complete Holding Cost Breakdown</h2>
      <h3 style={s.h3}>Financing Costs</h3>
      <ul style={s.ul}>
        <li style={s.li}><strong>Hard money interest:</strong> 10–13% annually. On a $200,000 loan at 12% for 9 months = $18,000</li>
        <li style={s.li}><strong>Origination points:</strong> 1–3 points paid at closing. 2 points on $200K = $4,000</li>
        <li style={s.li}><strong>Extension fees:</strong> Most lenders charge 0.5–1 point per 30-day extension if you go over term</li>
      </ul>
      <h3 style={s.h3}>Property Costs</h3>
      <ul style={s.ul}>
        <li style={s.li}><strong>Property taxes:</strong> Prorated for your hold period. In Northern Virginia, budget 0.8–1.1% of value annually.</li>
        <li style={s.li}><strong>Insurance:</strong> Builder's risk or landlord policy, $800–$2,500/year for most properties</li>
        <li style={s.li}><strong>Utilities:</strong> Electric, gas, water — budget $150–$400/month depending on property size and season</li>
        <li style={s.li}><strong>HOA dues:</strong> If applicable — often overlooked, can be $200–$600/month</li>
        <li style={s.li}><strong>Lawn/snow maintenance:</strong> $100–$300/month depending on season and property</li>
      </ul>
      <h3 style={s.h3}>Administrative Costs</h3>
      <ul style={s.ul}>
        <li style={s.li}><strong>Property management (if used):</strong> Rare on flips but occasional on longer holds</li>
        <li style={s.li}><strong>Security/cameras:</strong> Vacant property theft is real — budget $200–$500 for basic security</li>
        <li style={s.li}><strong>Miscellaneous permits and inspections:</strong> Ongoing costs during renovation</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>Holding Cost Example — 9 Month Hold, $250K Loan</h2>
      <ul style={s.ul}>
        <li style={s.li}>Hard money interest (12%, 9 mo): $22,500</li>
        <li style={s.li}>Points (2): $5,000</li>
        <li style={s.li}>Insurance (9 mo): $1,500</li>
        <li style={s.li}>Taxes (9 mo): $2,250</li>
        <li style={s.li}>Utilities (9 mo × $250): $2,250</li>
        <li style={s.li}><strong>Total holding cost: $33,500</strong></li>
      </ul>
      <p style={s.p}>That's $33,500 that doesn't show up in rehab estimates but absolutely comes out of your profit. Model it before you make an offer, not after you close.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Include Holding Costs in Every Deal Analysis</div>
        <div style={s.ctaText}>FreeDealCalc calculates holding costs automatically based on your loan terms and expected hold period — included in every free deal analysis with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Run My Deal Analysis Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been fixing and flipping in Northern Virginia for 20+ years.</p>
    </div>
  );
}
