import { getNOVAMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Real Estate Note Investing Explained: 2026 Beginner's Guide",
  description: "Note investing lets you become the bank. Learn how to buy performing and non-performing mortgage notes, evaluate risk, and generate passive income through",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/real-estate-note-investing-explained' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},h3:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1rem',fontWeight:700,color:'#18181b',marginTop:32,marginBottom:12},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'}};
const TopCTA = () => (<div style={s.cta}><div style={s.ctaTitle}>Run any deal through Freddie — free analysis in 60 seconds.</div><div style={s.ctaText}>Flip, rental, BRRRR, or wholesale — Freddie handles all four strategies for any address.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>);
export default async function Page() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <div style={s.meta}><span style={s.metaText}>Investor Guide</span><span style={s.dot}/><span style={s.metaText}>2026</span></div>
      <h1 style={s.h1}>Real Estate Note Investing Explained: How to Invest in Mortgage Notes</h1>
      <p style={s.intro}>Note investing flips the traditional real estate model — instead of owning property, you own the debt secured by property. When you buy a mortgage note, the borrower sends payments to you. It's passive, scalable, and doesn't require property management, contractors, or tenants. This guide explains how note investing works and how to get started.</p>
      <TopCTA />
      <h2 style={s.h2}>How Mortgage Notes Work</h2>
      <p style={s.p}>When a borrower takes out a mortgage, they sign two documents: the promissory note (the promise to pay) and the deed of trust or mortgage (which secures the note against the property). Banks originate millions of these notes every year. They bundle and sell them in the secondary market — and that's where note investors buy them, often at a discount.</p>
      <h2 style={s.h2}>Performing vs. Non-Performing Notes</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>Performing notes:</strong> The borrower is current on payments. You buy a yield — typically 8–14% annualized returns are common at today's purchase discounts</li>
        <li style={s.li}><strong>Non-performing notes (NPNs):</strong> The borrower has stopped paying. You buy the debt at a steep discount and pursue one of several exit strategies: loan modification to re-perform, deed-in-lieu, short sale, or foreclosure</li>
      </ul>
      <h2 style={s.h2}>How to Buy Mortgage Notes</h2>
      <ul style={s.ul}>
        <li style={s.li}>Banks and credit unions sell note pools through brokers and note exchanges</li>
        <li style={s.li}>Hedge funds and loan servicers sell individual notes and small pools</li>
        <li style={s.li}>Private sellers — individuals who seller-financed a property and want liquidity</li>
        <li style={s.li}>Note trading platforms and marketplaces</li>
      </ul>
      <h2 style={s.h2}>Note Investing Due Diligence</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>BPO (Broker Price Opinion):</strong> Get a current value estimate on the collateral property</li>
        <li style={s.li}><strong>Lien position:</strong> Always verify you're buying a 1st lien — 2nd lien notes carry much higher risk</li>
        <li style={s.li}><strong>Title search:</strong> Check for superior liens, tax delinquencies, and encumbrances</li>
        <li style={s.li}><strong>Payment history:</strong> How long has the loan been non-performing? Longer non-performance = more equity erosion</li>
        <li style={s.li}><strong>Loan documents:</strong> Verify the note and mortgage/deed of trust are properly executed and recorded</li>
      </ul>
      <h2 style={s.h2}>Note Investing Returns</h2>
      <p style={s.p}>Performing note investors targeting 10–14% annual returns is achievable buying at appropriate discounts. Non-performing note investors who successfully rehabilitate or foreclose can earn 25–50%+ returns on successful exits, but these require more work and carry more risk than performing notes.</p>
      <div style={s.cta}><div style={s.ctaTitle}>Analyze Real Estate Deals Alongside Notes</div><div style={s.ctaText}>Freddie handles all four real estate strategies — flip, rental, BRRRR, wholesale — free for any address.</div><a href="https://www.freedealcalc.com" style={s.ctaBtn}>Try Freddie Free</a></div>
      <div style={s.divider}/>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
