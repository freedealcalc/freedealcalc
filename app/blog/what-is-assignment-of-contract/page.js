import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'What is Assignment of Contract in Real Estate?', description: 'Assignment of contract explained — how wholesalers transfer purchase rights to end buyers, what an assignment agreement contains, and how assignment fees', alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-assignment-of-contract' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function AssignmentOfContract() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>8 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>What is Assignment of Contract in Real Estate?</h1>
      <div style={s.intro}>An assignment of contract transfers your rights as a buyer in a purchase agreement to a third party — your end buyer. The end buyer steps into your shoes, closes with the seller, and pays you an assignment fee for finding and negotiating the deal.</div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>
      <p style={s.p}>Assignment is the mechanism that makes real estate wholesaling work. Without it, you would have to actually buy every property you put under contract. With it, you can earn a profit by finding the deal and connecting buyer and seller — no closing required on your part.</p>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>How Assignment Works</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Step 1:</strong> You sign a purchase agreement with the seller at a below-market price. The agreement includes an assignment clause.</li>
        <li style={s.li}><strong>Step 2:</strong> You find an end buyer who wants to close on the property at a higher price.</li>
        <li style={s.li}><strong>Step 3:</strong> You and your end buyer sign an assignment agreement. They pay your fee and assume your rights in the original purchase contract.</li>
        <li style={s.li}><strong>Step 4:</strong> The end buyer closes with the seller. Your fee is typically paid at closing through the title company.</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>What the Assignment Agreement Contains</h2>
      <ul style={s.ul}>
        <li style={s.li}>Reference to the original purchase agreement (address, seller, purchase price, closing date)</li>
        <li style={s.li}>Assignee name and entity</li>
        <li style={s.li}>Assignment fee amount and payment terms</li>
        <li style={s.li}>Confirmation that assignee has reviewed the original contract and accepts all terms</li>
        <li style={s.li}>Signatures of assignor (you) and assignee (end buyer)</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>Assignment Fee Ranges</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Light deals (low equity, easy find):</strong> $3,000–$8,000</li>
        <li style={s.li}><strong>Typical wholesale assignment:</strong> $8,000–$20,000</li>
        <li style={s.li}><strong>Strong deals with significant spread:</strong> $20,000–$50,000+</li>
        <li style={s.li}><strong>Record assignments in hot markets:</strong> $75,000–$100,000+ on major equity deals</li>
      </ul>
      <p style={s.p}>Your fee is the spread between your contract price and what the end buyer agreed to pay. There is no cap — you earn whatever the market bears given the deal quality and your buyer's perceived value.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>When to Double Close Instead of Assign</h2>
      <p style={s.p}>Assignment is transparent — the seller sees your fee on the HUD. A double close uses transactional funding to buy and sell the same day, keeping your profit private. Use a double close when your fee is very large and seller awareness might create friction, or in states with regulations around large assignment fees.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Calculate Your Assignment Fee Before You Make an Offer</div>
        <div style={s.ctaText}>FreeDealCalc shows you the buyer's max offer, your contract price, and your potential assignment fee — free with Freddie in 60 seconds.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Calculate My Assignment Fee →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He buys wholesale assignments in Northern Virginia regularly.</p>
    </div>
  );
}
