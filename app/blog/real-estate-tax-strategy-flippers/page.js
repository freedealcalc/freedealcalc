import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Real Estate Tax Strategy for House Flippers: 2026 Guide | FreeDealCalc",
  description: "House flipping creates ordinary income tax — not capital gains rates. Learn how to structure your flip business, minimize self-employment taxes, and legally reduce your tax burden.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-tax-strategy-flippers' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (<div style={s.cta}><div style={s.ctaTitle}>Run any deal through Freddie — free analysis in 60 seconds.</div><div style={s.ctaText}>Flip, rental, BRRRR, or wholesale — Freddie handles all four strategies for any address.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>);
export default async function Page() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <div style={s.meta}><span style={s.metaText}>Tax Strategy</span><span style={s.dot}/><span style={s.metaText}>2026</span></div>
      <h1 style={s.h1}>Real Estate Tax Strategy for House Flippers: 2026 Guide</h1>
      <p style={s.intro}>Most new house flippers are shocked when they see their first flip tax bill. That $50,000 profit doesn't get taxed at favorable capital gains rates — it's taxed as ordinary income, and if you flip regularly, the IRS may consider you a dealer subject to self-employment taxes too. Understanding flip taxation before you start is essential to knowing your real after-tax profit.</p>
      <TopCTA />
      <h2 style={s.h2}>How House Flip Profits Are Taxed</h2>
      <p style={s.p}>If you buy and sell property with the intent to profit quickly, the IRS classifies you as a dealer in real estate. Dealer property is inventory, not a capital asset. Profits are taxed as ordinary income at your marginal tax rate — up to 37% federal plus state income taxes. Active dealers also owe self-employment tax (15.3% on net earnings up to the SS wage base, 2.9% above) on top of income taxes.</p>
      <h2 style={s.h2}>The Flip vs. Investment Distinction</h2>
      <p style={s.p}>The key factor is intent. Properties held for investment (rental income or long-term appreciation) are capital assets. Properties held primarily for sale to customers (flipping) are dealer inventory. Factors the IRS examines include: frequency of sales, purpose of acquisition, marketing activity, improvements made, and holding period. One flip per year is unlikely to trigger dealer status; five or more may.</p>
      <h2 style={s.h2}>S-Corp Strategy for Flippers</h2>
      <p style={s.p}>Many active flippers structure their business as an S-Corporation to reduce self-employment taxes. In an S-Corp, you pay yourself a reasonable salary (subject to FICA) and take additional profits as distributions (not subject to SE tax). The savings can be significant: a flipper making $200,000 in profits who saves 15% SE tax on $100,000 of that by S-Corp election saves $15,000 per year.</p>
      <h2 style={s.h2}>Deductible Business Expenses for Flippers</h2>
      <ul style={s.ul}>
        <li style={s.li}>Business vehicle mileage (IRS standard rate or actual expenses)</li>
        <li style={s.li}>Home office deduction if you work from home</li>
        <li style={s.li}>Tools, equipment, and supplies</li>
        <li style={s.li}>Professional services (accounting, legal, inspection fees)</li>
        <li style={s.li}>Marketing costs (direct mail, digital advertising)</li>
        <li style={s.li}>Education and training expenses</li>
        <li style={s.li}>Interest on business credit cards and lines of credit</li>
      </ul>
      <h2 style={s.h2}>Estimated Tax Payments</h2>
      <p style={s.p}>Flippers with expected tax liability over $1,000 must make quarterly estimated tax payments (typically April 15, June 15, September 15, and January 15). Failure to make estimated payments results in underpayment penalties. Work with your CPA to calculate quarterly payment amounts based on projected flip activity.</p>
      <div style={s.cta}><div style={s.ctaTitle}>Calculate Your Deal Profit Before Tax</div><div style={s.ctaText}>Freddie gives you pre-tax profit estimates for any deal — free, instant, no account.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Run My Deal</a></div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
