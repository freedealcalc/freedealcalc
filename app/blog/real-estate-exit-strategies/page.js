import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = { title: 'Real Estate Exit Strategies: How to Choose Before You Buy | FreeDealCalc', description: 'The main real estate exit strategies — flip, wholesale, wholetail, BRRRR, long-term hold — how to choose the right one before you close, and how to pivot when the market shifts.', alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-exit-strategies' } };
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
export default async function ExitStrategies() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>10 min read</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Real Estate Exit Strategies: How to Choose Before You Buy</h1>
      <div style={s.intro}>Your exit strategy determines your entire deal analysis. A property that works as a wholesale deal may not work as a flip. A property that fails the flip rule may be a great BRRRR candidate. Know your exit before you make an offer — and have a backup exit ready.</div>

      {/* Top CTA */}
      <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 8, padding: '16px 20px', margin: '24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#065f46', fontWeight: 600 }}>Analyze any deal free — Freddie runs the numbers in 60 seconds.</span>
        <a href="https://www.freedealcalc.com/freddie" style={{ display: 'inline-block', background: '#059669', color: '#ffffff', padding: '9px 18px', borderRadius: 6, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>Try Freddie Free →</a>
      </div>
      <p style={s.p}>The investors who get stuck are the ones who bought with one exit in mind and couldn't pivot when conditions changed. The investors who thrive have analyzed at least two viable exits on every acquisition.</p>
      <div style={s.divider}/><h2 style={s.h2}>Current Market Conditions</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
      <h2 style={s.h2}>The Main Exit Strategies</h2>
      <h3 style={s.h3}>1. Wholesale / Assignment</h3>
      <p style={s.p}>Assign the contract before closing. Profit = assignment fee. Fastest exit, no capital required at closing, smallest profit. Best when you have a deal with thin margins that won't justify a full renovation, or when you need capital fast.</p>
      <h3 style={s.h3}>2. Wholetail</h3>
      <p style={s.p}>Buy, minimal cleanup, MLS listing to retail buyers at as-is price. Profit = spread between purchase plus minimal costs and MLS sale price. Best when the property has strong equity, cosmetic-only issues, and demand for as-is product on MLS.</p>
      <h3 style={s.h3}>3. Fix and Flip</h3>
      <p style={s.p}>Full renovation, retail MLS listing at ARV. Highest profit potential, longest timeline, most risk. Best when spread is large enough to justify renovation investment and you have reliable contractor relationships and financing.</p>
      <h3 style={s.h3}>4. BRRRR</h3>
      <p style={s.p}>Renovate to rental standard, lease, refinance at ARV, repeat. Builds long-term wealth and passive income while recycling capital. Best when market rents support DSCR at refinance LTV and DSCR rates make cash flow work.</p>
      <h3 style={s.h3}>5. Long-Term Hold</h3>
      <p style={s.p}>Buy, rent, hold for appreciation. No refinance required. Best when financing is favorable, cash flow is positive, and the market has strong long-term appreciation fundamentals. Northern Virginia fits this model well.</p>
      <div style={s.divider}/>
      <h2 style={s.h2}>How to Choose Your Exit</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Run the flip analysis first.</strong> If flip profit exceeds your minimum threshold, flip is the primary exit.</li>
        <li style={s.li}><strong>If flip margins are thin, check wholetail.</strong> Can you clear your minimum on MLS as-is? If yes, wholetail may be lower risk.</li>
        <li style={s.li}><strong>If retail doesn't work, check BRRRR/hold.</strong> Does the rental income support DSCR financing at this price? If yes, consider holding.</li>
        <li style={s.li}><strong>If nothing else works, check wholesale.</strong> Is there enough spread for an assignment fee? If yes, assign and move on.</li>
      </ul>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Run All Four Exit Strategies on Every Deal</div>
        <div style={s.ctaText}>FreeDealCalc analyzes flip, wholesale, wholetail, and BRRRR on every deal — free — so you always know your best exit before making an offer.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Run My Exit Analysis Free →</a>
      </div>
      <h2 style={s.h2}>When the Market Shifts Mid-Deal</h2>
      <p style={s.p}>Markets move during renovation. If your flip profit shrinks due to rate increases or a softer market, run the BRRRR numbers — does the rental income now make more sense than selling? If you're months into a renovation and the market has dropped, a wholetail to a cash buyer may be less risky than finishing and waiting for retail buyers. Always know your alternatives.</p>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been executing multiple exit strategies in Northern Virginia for 20+ years.</p>
    </div>
  );
}
