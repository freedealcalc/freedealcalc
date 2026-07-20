import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "Wholesale Real Estate Scripts That Actually Work",
  description: "Real cold call and follow-up scripts for wholesale real estate. What to say to motivated sellers and how to move conversations toward contracts.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/wholesale-real-estate-scripts' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Know your MAO before every call — Freddie gives you the number free in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Get My Numbers First →</a>
  </div>
);
export default async function WholesaleScripts() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>Wholesale Real Estate Scripts That Actually Work</h1>
      <div style={s.intro}>Scripts are training wheels — they give you structure until the conversation becomes natural. The goal is not to recite a script, it is to internalize the framework well enough that you can have a real conversation. Here are the frameworks that work.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>The Cold Call Opening</h2>
      <p style={s.p}>Keep your opening short and disarming. "Hi, my name is [Name] — I am a local real estate investor and I came across your property at [Address]. I am not sure if you have considered selling, but I buy houses in the area and wanted to reach out. Is this something you would be open to talking about?" The key is low pressure — you are asking if they are open to a conversation, not pitching a sale.</p>
      <h2 style={s.h2}>The Condition Question</h2>
      <p style={s.p}>"I know every house is different — can you walk me through the condition? Anything that has been updated recently, and anything that needs work?" This gets you the rehab picture without interrogating. Sellers who are motivated will tell you about the leaky roof, the HVAC that has not worked in two years, and the foundation crack in the corner. Listen carefully — those are your negotiating points.</p>
      <h2 style={s.h2}>The Motivation Question</h2>
      <p style={s.p}>"What is the situation that is making you think about selling?" Simple and open-ended. The answer tells you everything about urgency, timeline, and flexibility. An inherited house with three out-of-state heirs is very different from a landlord who is tired of tenants. Tailor your approach to the actual situation.</p>
      <h2 style={s.h2}>Anchoring Price in Reality</h2>
      <p style={s.p}>"The properties I buy need to make sense as investments — which means I typically pay below what it could sell for on the market, but I can close fast in cash with no repairs or commissions. If that kind of offer is something you would consider, I would love to take a look and give you a real number." Sets expectations without quoting a price you cannot defend yet.</p>
      <h2 style={s.h2}>The Follow-Up Call</h2>
      <p style={s.p}>"Hi [Name], this is [Name] — we spoke last week about your property on [Street]. I wanted to follow up and see if you had a chance to think about it. I am still interested if you are." Short, no pressure. Most deals close on the second or third call. Be the investor who follows up — most of your competition stops after the first no.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Know Your MAO Before Every Call</div>
        <div style={s.ctaText}>Run the deal before you call the seller. Freddie gives you ARV, MAO, and deal score in 60 seconds — free.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Get My Numbers First →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
