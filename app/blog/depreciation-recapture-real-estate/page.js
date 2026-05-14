import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Depreciation Recapture on Real Estate: What Investors Must Know in 2026 | FreeDealCalc",
  description: "Depreciation recapture can create a surprise tax bill when you sell investment property. Learn how Section 1250 recapture works, how to calculate it, and strategies to minimize the impact.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/depreciation-recapture-real-estate' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (<div style={s.cta}><div style={s.ctaTitle}>Run any deal through Freddie — free analysis in 60 seconds.</div><div style={s.ctaText}>Flip, rental, BRRRR, or wholesale — Freddie handles all four strategies for any address.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>);
export default async function Page() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <div style={s.meta}><span style={s.metaText}>Tax Strategy</span><span style={s.dot}/><span style={s.metaText}>2026</span></div>
      <h1 style={s.h1}>Depreciation Recapture on Real Estate: What Every Investor Needs to Know</h1>
      <p style={s.intro}>Depreciation is one of the greatest tax benefits in real estate — until you sell. Depreciation recapture is the IRS's mechanism for recovering some of those deductions when you sell a property. Understanding how it works, how much it will cost you, and how to defer or minimize it is essential knowledge for any serious real estate investor.</p>
      <TopCTA />
      <h2 style={s.h2}>How Depreciation Recapture Works</h2>
      <p style={s.p}>When you sell investment property, the IRS requires you to recapture (and pay tax on) the depreciation deductions you claimed over your holding period. For residential real estate, this is called Section 1250 unrecaptured gain and is taxed at a maximum 25% federal rate — higher than long-term capital gains rates of 15–20%.</p>
      <h2 style={s.h2}>Calculating Depreciation Recapture</h2>
      <div style={s.formula}><div style={s.formulaText}>Recapture Amount = Total Depreciation Taken × 25% (federal max rate)</div></div>
      <p style={s.p}>If you owned a rental property for 10 years and claimed $100,000 in depreciation, selling triggers $25,000 in federal tax on the recapture — before any gain above your adjusted basis. State income taxes may apply on top of this. This is why knowing your adjusted basis at all times is important.</p>
      <h2 style={s.h2}>Depreciation Recapture vs. Capital Gains</h2>
      <p style={s.p}>Your total gain on sale is split into: (1) depreciation recapture taxed at max 25% federal and (2) capital appreciation taxed at long-term capital gains rates (0%, 15%, or 20% depending on income). Understanding this distinction is critical for accurate after-tax profit calculations.</p>
      <h2 style={s.h2}>Strategies to Defer Depreciation Recapture</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>1031 Exchange:</strong> Defer all gain (including recapture) by rolling proceeds into a like-kind property within the defined timelines</li>
        <li style={s.li}><strong>Installment sale:</strong> Spread recapture recognition across multiple tax years by seller-financing the buyer</li>
        <li style={s.li}><strong>Die with it:</strong> Depreciation recapture disappears at death — heirs receive a stepped-up basis</li>
        <li style={s.li}><strong>Opportunity Zone investment:</strong> Defer and reduce gains by investing in designated Opportunity Zones</li>
      </ul>
      <h2 style={s.h2}>Working with a CPA</h2>
      <p style={s.p}>Depreciation recapture calculations are complex, especially if you've done cost segregation or accelerated depreciation. A CPA specializing in real estate should review your adjusted basis and projected recapture before you sell any investment property. The tax impact on an incorrectly estimated deal can be significant.</p>
      <div style={s.cta}><div style={s.ctaTitle}>Run Your Deal Numbers Before You Close</div><div style={s.ctaText}>Freddie calculates ARV, deal score, and profit for any address — always free.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
