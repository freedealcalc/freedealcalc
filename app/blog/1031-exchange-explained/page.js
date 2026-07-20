import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "1031 Exchange Explained for Real Estate Investors",
  description: "Complete guide to 1031 exchanges — how to defer capital gains taxes when selling investment property, timeline rules, and common mistakes.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/1031-exchange-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Know ARV and returns on any 1031 replacement property before your 45-day window closes.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Analyze My 1031 Target Free →</a>
  </div>
);
export default async function Exchange1031() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>&#x2190; Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>1031 Exchange Explained for Real Estate Investors</h1>
      <div style={s.intro}>A 1031 exchange allows you to sell an investment property and defer all capital gains taxes by reinvesting the proceeds into a like-kind property. For investors who have built significant equity, the 1031 is one of the most powerful tax strategies available — potentially worth hundreds of thousands of dollars in deferred taxes.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>The Basic Rules</h2>
      <p style={s.p}>To qualify for a 1031 exchange, you must: sell an investment property (not a primary residence or personal property), identify the replacement property within 45 days of closing the sale, close on the replacement property within 180 days of closing the sale, and reinvest all proceeds through a qualified intermediary. Missing any of these deadlines invalidates the exchange and triggers the taxes.</p>
      <h2 style={s.h2}>The Role of the Qualified Intermediary</h2>
      <p style={s.p}>You cannot receive the sale proceeds during a 1031 exchange — even for a single day. A qualified intermediary holds the funds from your sale and transfers them to the replacement property closing. The QI fee typically runs $800–$1,500 and is a required cost of any exchange. Establish the QI relationship before you close your sale — not after. A delayed QI setup invalidates the exchange.</p>
      <h2 style={s.h2}>Like-Kind Requirement</h2>
      <p style={s.p}>For real estate, like-kind is broadly defined: you can exchange a single-family rental for a commercial property, a duplex for raw land, a vacation rental for an apartment building. The only requirement is that both properties are held for investment or business use. Primary residences and personal property do not qualify.</p>
      <h2 style={s.h2}>Boot and Partial Exchanges</h2>
      <p style={s.p}>If you reinvest less than the full sale proceeds, the uninvested portion called boot is taxable. If you exchange a $500k property and only reinvest $420k, the $80k of boot is subject to capital gains tax. Many investors use 1031s to trade up — exchanging a smaller property for a larger one, increasing their basis and deferring all gains indefinitely.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Analyze Your Next 1031 Exchange Target</div>
        <div style={s.ctaText}>Know ARV, deal score, and cash flow on any 1031 replacement property before your 45-day identification window closes.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Analyze My 1031 Target Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
