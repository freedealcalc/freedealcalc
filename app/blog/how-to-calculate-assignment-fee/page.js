import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Calculate Your Assignment Fee in Wholesale Real Estate | FreeDealCalc",
  description: "Learn exactly how to calculate a wholesale assignment fee that leaves profit for the investor buyer while compensating you fairly. Includes formula, examples, and common mistakes.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-calculate-assignment-fee' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (<div style={s.cta}><div style={s.ctaTitle}>Skip the math — Freddie calculates this for you free in 60 seconds.</div><div style={s.ctaText}>Enter any address and get a complete deal analysis including all the key metrics covered here.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>);
export default async function Page() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <div style={s.meta}><span style={s.metaText}>How to Calculate</span><span style={s.dot}/><span style={s.metaText}>Investor Math</span></div>
      <h1 style={s.h1}>How to Calculate Your Assignment Fee in Wholesale Real Estate</h1>
      <p style={s.intro}>The assignment fee is the wholesale investor's profit — the spread between what you put the property under contract for and what you assign it to a buyer for. Calculating it correctly requires understanding what your investor buyer needs to make (the 70% rule) and working backward to your maximum contract price.</p>
      <TopCTA />
      <h2 style={s.h2}>The Wholesale Assignment Fee Formula</h2>
      <div style={s.formula}><div style={s.formulaText}>Assignment Fee = Buyer's Price − Your Contract Price</div></div>
      <p style={s.p}>Your buyer needs to buy at 70% of ARV minus rehab. You need to acquire at a price low enough to leave room for your fee. The math works backward from what the investor buyer will pay.</p>
      <h2 style={s.h2}>Step-by-Step Assignment Fee Calculation</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Step 1:</strong> Determine ARV from recent comparable sales</li>
        <li style={s.li}><strong>Step 2:</strong> Apply buyer's 70% rule: ARV × 0.70 = Buyer's Max Price Before Rehab</li>
        <li style={s.li}><strong>Step 3:</strong> Subtract estimated rehab: Buyer's Max Price Before Rehab − Rehab = Buyer's Maximum Offer (MAO)</li>
        <li style={s.li}><strong>Step 4:</strong> Subtract your target assignment fee from the Buyer's MAO = Your Maximum Contract Price</li>
        <li style={s.li}><strong>Step 5:</strong> Negotiate with seller to get under contract at or below your max contract price</li>
      </ul>
      <h2 style={s.h2}>Example Calculation</h2>
      <p style={s.p}>ARV: $220,000. Buyer's 70% price: $154,000. Rehab: $40,000. Buyer's MAO: $114,000. Your target assignment fee: $10,000. Your maximum contract price: $104,000.</p>
      <h2 style={s.h2}>How Much Assignment Fee Is Too Much?</h2>
      <p style={s.p}>Assignment fees that leave an investor buyer with a thin margin or eliminate their profit will kill your reputation quickly. Ensure your buyer has a realistic chance to profit. Fees of $5,000–$15,000 on residential deals are common. Fees above $25,000 are possible on higher-value properties but require that the buyer's margins are genuinely preserved.</p>
      <h2 style={s.h2}>Common Mistakes in Calculating Assignment Fees</h2>
      <ul style={s.ul}>
        <li style={s.li}>Using an optimistic ARV that doesn't hold up to comparable sales scrutiny</li>
        <li style={s.li}>Underestimating rehab costs — give buyers a conservative estimate, not an optimistic one</li>
        <li style={s.li}>Adding your assignment fee on top of the buyer's MAO rather than within it</li>
        <li style={s.li}>Failing to disclose your assignment fee to the buyer</li>
      </ul>
      <div style={s.cta}><div style={s.ctaTitle}>Calculate Wholesale Deals in Seconds — Free</div><div style={s.ctaText}>Freddie calculates ARV and MAO for any property. Know your numbers before you contract. Free.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Run My Wholesale Numbers</a></div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
