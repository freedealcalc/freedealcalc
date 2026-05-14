import { getNOVAMarketData, getMarketData } from '../../../lib/blog/marketData';
import MarketPulse from '../MarketPulse';
export const revalidate = 2592000;
export const metadata = {
  title: "How to Talk to Motivated Sellers in Real Estate | FreeDealCalc",
  description: "A practical guide to motivated seller conversations — what to say, what to ask, and how to build enough rapport to get a deal under contract.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog/how-to-talk-to-motivated-sellers' },
};
const s = {page:{maxWidth:760,margin:'0 auto',padding:'80px 24px'},meta:{display:'flex',alignItems:'center',gap:16,marginBottom:32},metaText:{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.72rem',color:'#71717a',textTransform:'uppercase',letterSpacing:'0.08em'},dot:{width:3,height:3,background:'#d4d4d8',borderRadius:'50%',display:'inline-block'},h1:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(2rem, 4vw, 2.8rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.02em',lineHeight:1.15,marginBottom:20},intro:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'1.05rem',color:'#3f3f46',lineHeight:1.8,marginBottom:48,padding:'20px 24px',background:'#f4f4f5',borderRadius:8,borderLeft:'3px solid #059669'},h2:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.4rem, 2.5vw, 1.9rem)',fontWeight:700,color:'#18181b',letterSpacing:'-0.01em',lineHeight:1.2,marginTop:48,marginBottom:16},p:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20},ul:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.975rem',color:'#3f3f46',lineHeight:1.85,marginBottom:20,paddingLeft:24},li:{marginBottom:8},cta:{background:'linear-gradient(135deg, #059669, #047857)',borderRadius:12,padding:'36px 40px',margin:'48px 0',color:'#ffffff'},ctaTitle:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'1.5rem',fontWeight:700,marginBottom:10,lineHeight:1.2},ctaText:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.95rem',color:'rgba(255,255,255,0.85)',lineHeight:1.7,marginBottom:20},ctaBtn:{display:'inline-block',background:'#ffffff',color:'#059669',padding:'12px 24px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.9rem',textDecoration:'none'},divider:{height:1,background:'#e4e4e7',margin:'40px 0'},byline:{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.85rem',color:'#71717a',lineHeight:1.7,marginTop:48,padding:'24px 0',borderTop:'1px solid #e4e4e7'},formula:{background:'#0f172a',borderRadius:10,padding:'24px 28px',margin:'24px 0',textAlign:'center'},formulaText:{fontFamily:'var(--font-cormorant, Georgia, serif)',fontSize:'clamp(1.2rem, 2.5vw, 1.6rem)',color:'#34d399',fontWeight:700}};
const TopCTA = () => (
  <div style={{background:'#f0fdf4',border:'1px solid #bbf7d0',borderRadius:8,padding:'16px 20px',margin:'24px 0',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
    <span style={{fontFamily:'var(--font-sora, sans-serif)',fontSize:'0.9rem',color:'#065f46',fontWeight:600}}>Know your offer ceiling before you call — Freddie gives you MAO free in 60 seconds.</span>
    <a href="https://www.freedealcalc.com/freddie" style={{display:'inline-block',background:'#059669',color:'#ffffff',padding:'9px 18px',borderRadius:6,fontFamily:'var(--font-sora, sans-serif)',fontWeight:700,fontSize:'0.85rem',textDecoration:'none',whiteSpace:'nowrap'}}>Get My MAO Free →</a>
  </div>
);
export default async function TalkMotivatedSellers() {
  const market = await getNOVAMarketData();
  return (
    <div style={s.page}>
      <a href="/blog" style={{fontFamily:'var(--font-dm-mono, monospace)',fontSize:'0.75rem',color:'#059669',textDecoration:'none',textTransform:'uppercase',letterSpacing:'0.08em',display:'inline-block',marginBottom:32}}>← Back to Blog</a>
      <div style={s.meta}><span style={s.metaText}>May 2026</span><span style={s.dot}/><span style={s.metaText}>7 min</span><span style={s.dot}/><span style={s.metaText}>Dan White</span></div>
      <h1 style={s.h1}>How to Talk to Motivated Sellers</h1>
      <div style={s.intro}>The conversation with a motivated seller is the most important skill in wholesaling and off-market investing. You are not selling anything — you are listening for the real problem and presenting your offer as the solution. Pressure and scripts do not work. Genuine curiosity does.</div>
      <TopCTA />
      <div style={s.divider}/><h2 style={s.h2}>Market Context</h2><MarketPulse market={market}/>
      <div style={s.divider}/>
            <h2 style={s.h2}>The Framework: Four Questions</h2>
      <p style={s.p}>Every motivated seller conversation boils down to four things you need to understand: Why are they selling? What is their timeline? What do they owe on the property? What number do they have in their head? You do not need to ask these as direct questions — skilled investors get this information through conversation. But if you leave a call without knowing these four things, you do not have enough to make a decision.</p>
      <h2 style={s.h2}>Opening the Conversation</h2>
      <p style={s.p}>Start with genuine curiosity about their situation. "Can you tell me a little about the property and what you are looking to do?" gives the seller space to talk. Most motivated sellers want to tell their story — let them. You learn more from listening than from any question you could ask. Take notes. The details they share in the first two minutes are your roadmap to the offer.</p>
      <h2 style={s.h2}>How to Handle the Price Question</h2>
      <p style={s.p}>Sellers often ask what you would pay before you know enough to answer. The right response is more questions. "I want to make sure I give you a realistic number — can I ask a couple of questions first?" Nobody argues with that. Ask about condition, repairs needed, and timeline before you discuss price. This anchors the conversation in reality before you negotiate.</p>
      <h2 style={s.h2}>Addressing Common Objections</h2>
      <ul style={s.ul}>
        <li style={s.li}><strong>"I need more than that":</strong> "I understand. Help me understand what you need and we can see if there is a way to make it work."</li>
        <li style={s.li}><strong>"My neighbor got more":</strong> "That makes sense — when did they sell? Condition matters a lot in what investors can pay."</li>
        <li style={s.li}><strong>"I want to list it":</strong> "That is absolutely an option. What I offer is speed and certainty — no repairs, no showings, no waiting."</li>
        <li style={s.li}><strong>"Let me think about it":</strong> Schedule a follow-up call. Most wholesale deals close on the second or third contact.</li>
      </ul>
      <h2 style={s.h2}>Know Your Numbers Before You Call</h2>
      <p style={s.p}>The worst thing you can do is have a great seller conversation and then quote a number you cannot defend. Run the deal through FreeDealCalc before you pick up the phone. Know your MAO, your target purchase price, and your assignment fee potential. When you know the numbers, you negotiate with confidence instead of guessing.</p>
      <div style={s.cta}>
        <div style={s.ctaTitle}>Know Your Numbers Before You Negotiate</div>
        <div style={s.ctaText}>Run the deal through Freddie first — ARV, MAO, and assignment fee potential in 60 seconds. Then call the seller.</div>
        <a href="https://www.freedealcalc.com/freddie" style={s.ctaBtn}>Get My MAO Free →</a>
      </div>
      <p style={s.byline}><strong>Dan White</strong> is a licensed Virginia real estate agent at Pearson Smith Realty and founder of <a href="https://www.freedealcalc.com" style={{color:'#059669'}}>FreeDealCalc.com</a>. He has been investing in Northern Virginia real estate for 20+ years.</p>
    </div>
  );
}
