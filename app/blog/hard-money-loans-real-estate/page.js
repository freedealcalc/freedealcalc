import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: 'Hard Money Loans for Real Estate: How They Work in 2026',
  description: 'Hard money loans explained — rates, terms, points, LTV limits, and when to use them.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog/hard-money-loans-real-estate' },
};
const s = {
  page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},
};
export default async function HardMoneyLoans() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>10 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Hard Money Loans for Real Estate: How They Work in 2026</h1>
      <div style={s.intro}>Hard money loans are short-term, asset-based loans used primarily for fix-and-flip and value-add real estate investments. Unlike conventional mortgages, they're approved based on the property's value — not your income or credit score. Speed and flexibility are the trade-off for higher rates.</div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>
      <p style={s.p}>I've used hard money on dozens of deals in Northern Virginia. It's the standard financing vehicle for distressed acquisitions because conventional lenders won't touch properties that need significant renovation. Here's exactly how it works.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>Northern Virginia Market</h2>
      <MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>Current Hard Money Terms (2026)</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Interest rates:</strong> 10–13% annually in most markets. Northern Virginia: 11–12.5% typical.</li>
        <li style={s.li}><strong>Points:</strong> 1–3 points origination fee (1 point = 1% of loan amount). Paid at closing.</li>
        <li style={s.li}><strong>LTV:</strong> 65–75% of ARV. Some lenders go to 80% for experienced borrowers.</li>
        <li style={s.li}><strong>Term:</strong> 6–18 months. Most flips target 6–9 month terms.</li>
        <li style={s.li}><strong>Interest only:</strong> Most hard money loans are interest-only — no principal paydown during the term.</li>
        <li style={s.li}><strong>Closing speed:</strong> 5–15 business days. Some lenders close in 3–5 days.</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>How Hard Money Works</h2>
      <p style={s.p}>You find a distressed property worth $200,000 after renovation. A hard money lender will lend up to 70% of ARV = $140,000. If the property costs $120,000 to purchase and needs $50,000 in rehab, the lender may structure the loan as $120,000 purchase + $50,000 rehab draw — total $170,000, which is 85% of ARV (too high for most lenders). You'd need to bring cash to close to get under the LTV limit.</p>
      <h3 style={s.h3}>Rehab Draws</h3>
      <p style={s.p}>Most lenders fund rehab costs through a draw system — you complete work, submit draw request with photos and receipts, lender inspects, then releases funds. Draws happen every 2–4 weeks. You typically need to float costs between draws.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>Hard Money vs. Private Money</h2>
      <p style={s.p}>Hard money comes from professional lending companies with standardized terms and processes. Private money comes from individual investors — friends, family, or private lenders you've built relationships with. Private money is typically cheaper (6–10%) but requires trust and relationship. Hard money is available to anyone with a deal.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Factor Your Hard Money Costs Into Every Deal</div>
        <div style={s.ctaText}>FreeDealCalc calculates your exact hard money carrying costs — interest, points, and holding period — as part of your full deal analysis. Free with Freddie.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Run My Deal Analysis Free →</a>
      </div>
      <div style={s.divider}/>
      <h2 style={s.h2}>Lenders I've Used in Northern Virginia</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Hard Money Bankers</strong> — active in the DC/NoVA market, investor-friendly terms</li>
        <li style={s.li}><strong>WCP Loans</strong> — strong local presence, fast closings</li>
        <li style={s.li}><strong>Kiavi</strong> — national lender with competitive rates for experienced investors</li>
        <li style={s.li}><strong>New Silver</strong> — tech-forward lender, good for borrowers who want online process</li>
      </ul>
      <div style={s.divider}/>
      <h2 style={s.h2}>What Hard Money Lenders Look At</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>The property:</strong> ARV, current condition, location — this is the primary underwriting factor</li>
        <li style={s.li}><strong>Your experience:</strong> First-deal borrowers pay more and get lower LTVs than experienced flippers</li>
        <li style={s.li}><strong>Your exit strategy:</strong> How are you selling or refinancing out of this loan?</li>
        <li style={s.li}><strong>Credit score:</strong> Less important than in conventional lending but most lenders want 620+</li>
        <li style={s.li}><strong>Liquidity:</strong> Do you have reserves to cover overruns and carry costs?</li>
      </ul>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He uses hard money regularly on fix-and-flip deals in Northern Virginia.</p>
    </div>
  );
}
