import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'What is Seller Financing in Real Estate? How It Works', description: 'Seller financing explained — when the seller acts as the bank. Terms, structure, benefits for buyers and sellers, and when to use it.', alternates: { canonical: 'https://www.freedealcalc.com/blog/what-is-seller-financing' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function SellerFinancing() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>10 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>What is Seller Financing in Real Estate? How It Works</h1>
      <div style={s.intro}>Seller financing (also called owner financing) is when the seller acts as the lender — instead of you getting a bank mortgage, the seller carries a note and you make payments directly to them. No bank qualifying, no conventional loan process, fully negotiable terms.</div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>
      <p style={s.p}>Seller financing is most common when: the property has issues that disqualify it for conventional financing, the seller owns the property free-and-clear and wants passive income, or the buyer can't qualify for a traditional loan. In high-rate environments, sellers willing to carry financing at below-market rates become highly motivated sellers.</p>
      <div style={s.divider}/><h2 style={s.h2}>Northern Virginia Market</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>How Seller Financing is Structured</h2>
      <h3 style={s.h3}>The Promissory Note</h3>
      <p style={s.p}>The legal document that defines the loan terms: principal amount, interest rate, payment schedule, maturity date, and default provisions. This is the seller's evidence of the debt you owe them.</p>
      <h3 style={s.h3}>The Deed of Trust or Mortgage</h3>
      <p style={s.p}>The security instrument that gives the seller a lien on the property. If you stop paying, the seller can foreclose just like a conventional lender. This is recorded in public records.</p>
      <h3 style={s.h3}>Common Terms</h3>
      <ul style={s.ul}>
        <li style={s.li}><strong>Interest rate:</strong> Negotiable — often 5–8%, below current hard money or DSCR rates</li>
        <li style={s.li}><strong>Down payment:</strong> Negotiable — 5–20% typical, sometimes zero</li>
        <li style={s.li}><strong>Amortization:</strong> 20–30 years typical</li>
        <li style={s.li}><strong>Balloon payment:</strong> Many seller-financed deals have a 3–7 year balloon — the full remaining balance becomes due</li>
        <li style={s.li}><strong>Due-on-sale:</strong> Seller may include this clause to prevent you from assigning the note</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>Why Sellers Agree to Finance</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Tax deferral:</strong> Installment sale treatment spreads capital gains over the payment period</li>
        <li style={s.li}><strong>Passive income:</strong> Monthly payments at a reliable rate of return</li>
        <li style={s.li}><strong>Faster sale:</strong> Eliminates buyer's financing contingency and appraisal risk</li>
        <li style={s.li}><strong>Higher price:</strong> Sellers often accept a higher purchase price in exchange for carrying the note</li>
        <li style={s.li}><strong>Can't sell retail:</strong> Property condition precludes conventional financing</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>Seller Financing for Investors</h2>
      <p style={s.p}>Seller financing is a powerful tool for acquiring rental properties or value-add deals without going through a conventional lender. You preserve cash (low down payment), get better terms than hard money, and create a deal structure the seller might prefer. The best seller-financed deals come from free-and-clear property owners who want income, not a lump sum.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Seller-Financed Deals Free</div>
        <div style={s.ctaText}>FreeDealCalc runs cash flow and ROI analysis for any financing structure — seller carry, hard money, DSCR, or conventional. Free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My Deal Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia for 20+ years.</p>
    </div>
  );
}
