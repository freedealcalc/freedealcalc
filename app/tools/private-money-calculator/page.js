'use client';
import { useState } from 'react';

const FAQS = [
  { q: 'What is private money in real estate?', a: 'Private money is a short-term loan from an individual investor (not a bank, not a hard money lender) who lends their own capital secured against the property. Terms are negotiated directly. Typically 8-12% interest, 6-12 month terms, sometimes interest-only. Private money sits between hard money (institutional lender, 4 points + 12%) and conventional financing (slow, paperwork-heavy).' },
  { q: 'Is the private money calculator actually free?', a: 'Yes. Anyone can run unlimited deals with private money structures at no cost. Free registered users also unlock the Score Certificate PDF — useful for showing your private lender a clean deal summary before they wire funds.' },
  { q: 'How do I structure a private money deal?', a: 'Most private money deals follow one of three structures: (1) interest-only with balloon payment at exit, (2) fixed monthly payment for term, or (3) profit share with no monthly payments. Tell Freddie which structure your private lender prefers and he models the full cash flow, including total interest paid and impact on your net profit.' },
  { q: 'What return can private lenders expect?', a: "Most private lenders target 8-12% annual return on real estate-secured loans. Some accept 6-8% for first-position liens with strong borrowers. Friends-and-family deals often run 5-8%. Freddie shows the lender's annualized return so you can pitch the deal honestly." },
  { q: 'How does private money compare to hard money on the same deal?', a: 'On a $200K loan over 6 months: hard money (4 points + 12% interest) costs ~$20K total. Private money at 10% interest-only with no points costs ~$10K. Half the financing cost. The catch: private money requires a relationship and trust. Hard money is transactional. Freddie compares both side-by-side on every deal.' },
  { q: 'Do I need an account to use this calculator?', a: 'No account required to model your private money deal. A free account unlocks the Score Certificate PDF, saves your deals, and gives you 2 lifetime Rentcast lookups for verified ARV.' },
];

export default function FreePrivateMoneyCalculatorPage() {
  const [input, setInput] = useState('');
  function handleAnalyze() { const trimmed = input.trim(); if (typeof window !== 'undefined') { try { if (trimmed) sessionStorage.setItem('fdc_seed_message', trimmed); else sessionStorage.removeItem('fdc_seed_message'); } catch (e) {} } window.location.href = '/freddie'; }
  function handleKey(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleAnalyze(); } }
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQS.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  const appSchema = { '@context': 'https://schema.org', '@type': 'WebApplication', name: 'FreeDealCalc — Free Private Money Calculator', applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, description: 'Free private money calculator for real estate investors. Model interest, points, and total cost on private money deals.', url: 'https://freedealcalc.com/tools/private-money-calculator' };

  return (<>
    <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital@1&display=swap'); * { box-sizing: border-box; margin: 0; padding: 0; } body { font-family: 'DM Sans', sans-serif; color: #0f1c2d; background: #f0f2f5; } a { color: inherit; text-decoration: none; } .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; } .h1 { font-size: 44px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; } .h2 { font-size: 30px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; } .serif-italic { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-weight: 400; } @media (max-width: 720px) { .h1 { font-size: 32px; } .h2 { font-size: 24px; } .deal-grid { grid-template-columns: 1fr !important; } } .btn-primary { display: inline-block; padding: 14px 24px; background: #00C27C; color: white; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; border: none; font-family: inherit; transition: transform 0.1s; } .btn-primary:hover { transform: translateY(-1px); } .check { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: rgba(0,194,124,0.12); color: #00C27C; flex-shrink: 0; }`}</style>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
    <nav style={{ background: '#0f1c2d', height: '60px', display: 'flex', alignItems: 'center' }}><div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}><a href="/" className="serif-italic" style={{ fontSize: '22px', color: 'white' }}>FreeDeal<span style={{ color: '#00C27C' }}>Calc</span></a><div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}><a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8' }}>Try Freddie</a><a href="/pricing" style={{ fontSize: '13px', color: '#94a8b8' }}>Pricing</a><a href="/signup" style={{ fontSize: '13px', color: 'white', padding: '8px 16px', background: '#00C27C', borderRadius: '8px', fontWeight: '600' }}>Sign Up Free</a></div></div></nav>

    <section style={{ background: '#0f1c2d', color: 'white', padding: '64px 0 80px' }}>
      <div className="container">
        <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(0,194,124,0.15)', border: '1px solid rgba(0,194,124,0.3)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>Stop Paying. Start Winning.</div>
        <h1 className="h1" style={{ color: 'white', marginBottom: '18px', maxWidth: '820px' }}>Free <span className="serif-italic" style={{ color: '#00C27C' }}>private money calculator</span>. Real terms, real returns.</h1>
        <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '700px' }}>Tell Freddie about your private money deal — loan amount, interest rate, structure, term — and see total cost, your private lender's return, and your net profit after financing. Built for investors structuring deals with friends, family, or local capital partners.</p>
        <div style={{ background: 'white', borderRadius: '16px', padding: '20px', maxWidth: '720px', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}><div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#0f1c2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontSize: '16px', color: '#00C27C', fontFamily: 'Georgia, serif' }}>F</div><div><div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d' }}>Freddie</div><div style={{ fontSize: '12px', color: '#5a7184' }}>AI Deal Analyst · Online</div></div></div>
          <div style={{ background: '#f0f2f5', borderRadius: '12px', padding: '12px 14px', marginBottom: '12px', fontSize: '14px', color: '#0f1c2d' }}>Hey, I'm Freddie. Tell me about your private money deal — amount, rate, and term.</div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
            <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. $200k private money at 10% interest-only, 6 month term, $349k ARV" rows={2} style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
            <button onClick={handleAnalyze} aria-label="Analyze private money deal" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>
          </div>
          <button onClick={handleAnalyze} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Run Private Money Free →</button>
          <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · No signup required to see your score</div>
        </div>
      </div>
    </section>

    <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
      <div className="container">
        <h2 className="h2" style={{ marginBottom: '12px' }}>What you get — <span className="serif-italic" style={{ color: '#00C27C' }}>free</span></h2>
        <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '640px' }}>The math your private lender wants to see before they wire funds.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            { t: 'Three Loan Structures', d: 'Interest-only with balloon, fixed monthly, or profit share. Tell Freddie which structure your private lender wants and he models the full picture.' },
            { t: "Lender's Annualized Return", d: 'See exactly what return your private lender earns. Pitch deals honestly — no surprises after closing.' },
            { t: 'Total Financing Cost', d: 'Interest paid + any points + any fees, all rolled into one number. The financing cost that comes out of your profit.' },
            { t: 'Compared vs. Hard Money', d: 'Same deal, modeled side-by-side with hard money terms (4 points + 12%). See how much private money saves you.' },
            { t: 'Score Certificate PDF', d: 'A one-page deal summary you can hand to your private lender before they fund. Looks professional. Closes faster.' },
            { t: 'Built by Active Investor', d: 'Freddie was built by someone who has structured private money deals with friends, family, and capital partners for 20+ years.' },
          ].map((f, i) => (
            <div key={i} style={{ background: 'white', borderRadius: '14px', padding: '22px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
              <div className="check" style={{ marginBottom: '12px' }}><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '6px' }}>{f.t}</div>
              <div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.55' }}>{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section style={{ padding: '72px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'inline-block', padding: '5px 10px', background: 'rgba(0,194,124,0.1)', border: '1px solid rgba(0,194,124,0.2)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>Real deal · Real numbers</div>
        <h2 className="h2" style={{ marginBottom: '12px', maxWidth: '780px' }}>How a Northern Virginia <span className="serif-italic" style={{ color: '#00C27C' }}>hoarder house</span> closed with private money in 5 days.</h2>
        <p style={{ fontSize: '16px', color: '#5a7184', lineHeight: '1.6', marginBottom: '32px', maxWidth: '720px' }}>The seller wanted out fast. We had a private money source ready at 10% interest-only, no points, 6 month term. Closed in 5 days for $210K. Held for one month, sold as-is for $349K. Total private money cost: ~$1,750. The speed of private money is what made the deal possible — a bank would have taken 30+ days and the seller would have walked.</p>

        <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
          <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #1a2942 0%, #0f1c2d 100%)', border: '1px solid #e4e8ed' }}><img src="/images/wholetail-before.jpg" alt="Hoarder house before cleanout — closed with private money" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} /><div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Before · As-purchased</div></div>
          <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #00C27C 0%, #009d63 100%)', border: '1px solid #e4e8ed' }}><img src="/images/wholetail-after-buyer-reno.jpg" alt="Same property after buyer's renovation" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} /><div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>After · Buyer's renovation</div></div>
        </div>
        <p style={{ fontSize: '12.5px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '28px', fontStyle: 'italic' }}>We sold the property as-is for $349K. The renovation pictured was completed by the buyer who purchased it from us. The $115,050 profit reflects our wholetail exit, not the renovation work.</p>

        <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 220px', gap: '24px', alignItems: 'center', background: '#f0f2f5', borderRadius: '16px', padding: '28px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '14px' }}>The Private Money Deal</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
              {[['Loan amount', '$200,000'], ['Rate', '10% IO'], ['Term', '6 months'], ['Cost', '~$1,750'], ['Vs. hard money', 'Saved $18K'], ['Net profit', '$115,050']].map(([k, v], i) => (<div key={i}><div style={{ fontSize: '11px', color: '#5a7184', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{k}</div><div style={{ fontSize: '17px', fontWeight: '700', color: '#0f1c2d' }}>{v}</div></div>))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'white', border: '8px solid #00C27C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(0,194,124,0.18)' }}><div style={{ fontSize: '52px', fontWeight: '700', color: '#00C27C', lineHeight: 1 }}>100</div><div style={{ fontSize: '10px', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>Score</div></div>
            <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '10px', textAlign: 'center' }}>Strong Deal</div>
          </div>
        </div>
        <div style={{ marginTop: '24px', padding: '20px 24px', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: '8px', color: 'white' }}><div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '8px' }}>Private money lesson</div><div style={{ fontSize: '14px', lineHeight: '1.6', color: '#cfd9e3' }}>Private money's biggest advantage isn't price — it's speed. A 5-day close on a motivated seller deal makes the deal possible. Hard money is faster than banks but still 10-14 days. Private money with a trusted lender closes in days. That's the alpha.</div></div>
      </div>
    </section>

    <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
      <div className="container">
        <h2 className="h2" style={{ marginBottom: '32px' }}>Common questions about private money</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQS.map((f, i) => (<details key={i} style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}><summary style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}><span>{f.q}</span><span style={{ color: '#00C27C', fontSize: '20px', fontWeight: '300', flexShrink: 0 }}>+</span></summary><div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.65', marginTop: '12px' }}>{f.a}</div></details>))}
        </div>
      </div>
    </section>

    <section style={{ padding: '52px 0', background: 'white' }}>
      <div className="container">
        <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>More free tools</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
          <a href="/tools/hard-money-loan-calculator" style={{ background: '#f0f2f5', borderRadius: '12px', padding: '18px 22px', display: 'block', borderLeft: '3px solid #00C27C' }}><div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Hard Money Loan Calculator →</div><div style={{ fontSize: '12.5px', color: '#5a7184' }}>Compare private money vs. hard money side-by-side.</div></a>
          <a href="/tools/free-ai-flip-calculator" style={{ background: '#f0f2f5', borderRadius: '12px', padding: '18px 22px', display: 'block', borderLeft: '3px solid #00C27C' }}><div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free Fix and Flip Calculator →</div><div style={{ fontSize: '12.5px', color: '#5a7184' }}>Run the full flip math with private money baked in.</div></a>
        </div>
      </div>
    </section>

    <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}><div className="container" style={{ textAlign: 'center' }}><h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Run your private money deal <span className="serif-italic" style={{ color: '#00C27C' }}>free</span>.</h2><p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>No credit card. Tell Freddie the terms, see the math, close the deal.</p><a href="/freddie" className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Talk to Freddie →</a><div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> to save your deals.</div></div></section>
    <footer style={{ background: '#0f1c2d', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '32px 0', color: '#94a8b8', fontSize: '13px' }}><div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}><div className="serif-italic" style={{ fontSize: '18px', color: 'white' }}>FreeDeal<span style={{ color: '#00C27C' }}>Calc</span></div><div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}><a href="/freddie">Freddie</a><a href="/pricing">Pricing</a><a href="/partners">Partners</a><a href="/terms">Terms</a><a href="/privacy">Privacy</a></div></div></footer>
  </>);
}