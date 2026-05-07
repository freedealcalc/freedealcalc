'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is the 70% rule in real estate?',
    a: "The 70% rule is a quick-screen formula for fix-and-flip deals: never pay more than 70% of the after-repair value (ARV) minus rehab costs. Formula: Maximum offer = (ARV × 0.70) − Rehab. So a property with a $300,000 ARV and $40,000 rehab gives a max offer of $170,000. The 30% margin covers your closing costs, holding, financing, realtor fees, and profit."
  },
  {
    q: 'Is the 70% rule still relevant in today\'s market?',
    a: "Yes for screening, but it's a starting point, not gospel. In hot markets with strong appreciation, experienced flippers sometimes go to 75%. In slow or declining markets, smart investors tighten to 65%. Freddie's 70% rule check is the first filter — but the full deal score factors in financing costs, holding time, and current market conditions to give you a more accurate read."
  },
  {
    q: 'Is this 70% rule calculator actually free?',
    a: "Yes. Anyone can run unlimited 70% rule checks on any property at no cost. Free registered users also unlock the Score Certificate PDF, which formalizes the maximum offer math into a one-page document you can share with a seller, partner, or hard money lender. Most flip-focused tools charge $20-100/month for similar features."
  },
  {
    q: 'Does the 70% rule include rehab costs in the offer or separately?',
    a: 'Separately. The formula is (ARV × 0.70) − Rehab = Max Offer. Rehab is subtracted from the ARV-times-70%, not added to your offer. A common rookie mistake is calculating ARV × 0.70 and offering that, forgetting to subtract rehab. Freddie applies the formula correctly every time and shows you the math step-by-step.'
  },
  {
    q: 'What if my deal fails the 70% rule but I still want to do it?',
    a: 'Run the full deal score. The 70% rule is a screen, not the whole picture. A deal that fails the 70% rule by $5,000 might still pencil if rehab time is short, financing is cheap, or you have a guaranteed end buyer. Freddie computes both — the rule check AND the full ROI/profit math — so you can make an informed call instead of walking away from a deal that might still work.'
  },
  {
    q: 'Do I need an account to use this calculator?',
    a: 'No account required to run the 70% rule check and see your score. A free account unlocks the Score Certificate, saves your deals to a dashboard, and gives you 2 lifetime Rentcast lookups for verified ARV comp data.'
  },
];

export default function Free70PercentRuleCalculatorPage() {
  const [input, setInput] = useState('');

  function handleAnalyze() {
    const trimmed = input.trim();
    if (typeof window !== 'undefined') {
      try {
        if (trimmed) sessionStorage.setItem('fdc_seed_message', trimmed);
        else sessionStorage.removeItem('fdc_seed_message');
      } catch (e) {}
    }
    window.location.href = '/freddie';
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAnalyze();
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'FreeDealCalc — Free 70% Rule Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free 70 percent rule calculator for real estate flippers. Run the rule check + full deal score in one conversation with Freddie.',
    url: 'https://freedealcalc.com/tools/70-percent-rule-calculator',
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital@1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; color: #0f1c2d; background: #f0f2f5; }
        a { color: inherit; text-decoration: none; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .h1 { font-size: 44px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
        .h2 { font-size: 30px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; }
        .serif-italic { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-weight: 400; }
        @media (max-width: 720px) {
          .h1 { font-size: 32px; }
          .h2 { font-size: 24px; }
          .deal-grid { grid-template-columns: 1fr !important; }
        }
        .btn-primary { display: inline-block; padding: 14px 24px; background: #00C27C; color: white; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; border: none; font-family: inherit; transition: transform 0.1s; }
        .btn-primary:hover { transform: translateY(-1px); }
        .check { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: rgba(0,194,124,0.12); color: #00C27C; flex-shrink: 0; }
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <nav style={{ background: '#0f1c2d', height: '60px', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <a href="/" className="serif-italic" style={{ fontSize: '22px', color: 'white' }}>FreeDeal<span style={{ color: '#00C27C' }}>Calc</span></a>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8' }}>Try Freddie</a>
            <a href="/pricing" style={{ fontSize: '13px', color: '#94a8b8' }}>Pricing</a>
            <a href="/signup" style={{ fontSize: '13px', color: 'white', padding: '8px 16px', background: '#00C27C', borderRadius: '8px', fontWeight: '600' }}>Sign Up Free</a>
          </div>
        </div>
      </nav>

      <section style={{ background: '#0f1c2d', color: 'white', padding: '64px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(0,194,124,0.15)', border: '1px solid rgba(0,194,124,0.3)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>Stop Paying. Start Winning.</div>
          <h1 className="h1" style={{ color: 'white', marginBottom: '18px', maxWidth: '820px' }}>
            Free <span className="serif-italic" style={{ color: '#00C27C' }}>70% rule calculator</span>. Maximum offer in 60 seconds.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '700px' }}>
            Tell Freddie the ARV and your rehab estimate. He runs the 70% rule formula — (ARV × 0.70) − Rehab — and tells you the maximum you should offer. Then he runs the full deal score so you know whether the deal actually pencils, not just whether it passes the rule.
          </p>

          <div style={{ background: 'white', borderRadius: '16px', padding: '20px', maxWidth: '720px', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#0f1c2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontSize: '16px', color: '#00C27C', fontFamily: 'Georgia, serif' }}>F</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d' }}>Freddie</div>
                <div style={{ fontSize: '12px', color: '#5a7184' }}>AI Deal Analyst · Online</div>
              </div>
            </div>
            <div style={{ background: '#f0f2f5', borderRadius: '12px', padding: '12px 14px', marginBottom: '12px', fontSize: '14px', color: '#0f1c2d' }}>
              Hey, I'm Freddie. Tell me the ARV and rehab budget and I'll run the 70% rule check.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. ARV $349k, rehab $40k, what's my max offer?" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleAnalyze} aria-label="Run 70 percent rule check" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleAnalyze} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Run 70% Rule Check Free →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · No signup required to see your score</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>The <span className="serif-italic" style={{ color: '#00C27C' }}>70% rule formula</span> — explained</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '32px', maxWidth: '720px' }}>One of the most-quoted, most-misapplied rules in real estate flipping. Here's the formula and what each piece means.</p>
          <div style={{ background: 'white', borderRadius: '14px', padding: '32px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ textAlign: 'center', padding: '20px', background: '#0f1c2d', color: 'white', borderRadius: '12px', marginBottom: '24px' }}>
              <div className="serif-italic" style={{ fontSize: '28px', color: '#00C27C', lineHeight: 1.3 }}>Max Offer = (ARV × 0.70) − Rehab</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '6px' }}>ARV</div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>After Repair Value</div>
                <div style={{ fontSize: '13.5px', color: '#5a7184', lineHeight: '1.5' }}>What the property will sell for after renovation. Pull from comps, not the wholesaler's claim.</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '6px' }}>× 0.70</div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>The 30% Margin</div>
                <div style={{ fontSize: '13.5px', color: '#5a7184', lineHeight: '1.5' }}>Covers closing costs, holding, financing, realtor fees, and profit. The buffer that keeps you safe.</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '6px' }}>− Rehab</div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Renovation Cost</div>
                <div style={{ fontSize: '13.5px', color: '#5a7184', lineHeight: '1.5' }}>Subtracted SEPARATELY from the 70% — not included in your offer. Common rookie mistake.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>What you get — <span className="serif-italic" style={{ color: '#00C27C' }}>free</span></h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '640px' }}>The 70% rule is a screen. Freddie runs the screen AND the full deal math, so you don't pass on deals that work or do deals that don't.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Instant 70% Rule Check', d: 'Tell Freddie ARV and rehab. He runs the formula and tells you your maximum offer in seconds. No spreadsheet, no manual math.' },
              { t: 'Full Deal Score Beyond the Rule', d: 'A 70% rule pass doesn\'t mean the deal works. Freddie also runs ROI, profit margin, and risk scoring so you see the complete picture.' },
              { t: 'Adjustable Rule Threshold', d: 'Tighter market? Run a 65% check. Hot market with appreciation? Try 75%. Freddie adjusts the rule percentage to your strategy.' },
              { t: 'Score Certificate PDF', d: 'A one-page summary with your max offer math and the deal score. Send it to the seller, your partner, or your lender.' },
              { t: 'Saved to Your Dashboard', d: 'Free registered users save every 70% rule check. Compare deals across markets, track which sellers passed on your max offer.' },
              { t: 'Built by 20-Year Flipper', d: 'Freddie was built by an active investor who has run thousands of 70% rule checks the manual way. Every shortcut is in here.' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#f0f2f5', borderRadius: '14px', padding: '22px' }}>
                <div className="check" style={{ marginBottom: '12px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '6px' }}>{f.t}</div>
                <div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.55' }}>{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '5px 10px', background: 'rgba(0,194,124,0.1)', border: '1px solid rgba(0,194,124,0.2)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>Real deal · Real numbers</div>
          <h2 className="h2" style={{ marginBottom: '12px', maxWidth: '780px' }}>How a Northern Virginia <span className="serif-italic" style={{ color: '#00C27C' }}>hoarder house</span> passed the 70% rule with room to spare.</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', lineHeight: '1.6', marginBottom: '32px', maxWidth: '720px' }}>
            Property had a $349K ARV. The full rehab estimate was $80K. 70% rule says: max offer = ($349K × 0.70) − $80K = $164,300. We bought it for $210K — too high for a flip. But we exited as a wholetail (sold as-is, $5K cleanout instead of $80K rehab). The 70% rule said no to the flip strategy. The math worked perfectly for the wholetail.
          </p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #1a2942 0%, #0f1c2d 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-before.jpg" alt="Hoarder house before cleanout — Northern Virginia 70 percent rule example" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Before · As-purchased</div>
            </div>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #00C27C 0%, #009d63 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="Same property after renovation by next investor" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>After · Buyer's renovation</div>
            </div>
          </div>

          <p style={{ fontSize: '12.5px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '28px', fontStyle: 'italic' }}>We sold the property as-is for $349K. The renovation pictured was completed by the buyer who purchased it from us. The $115,050 profit reflects our wholetail exit, not the renovation work.</p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 220px', gap: '24px', alignItems: 'center', background: 'white', borderRadius: '16px', padding: '28px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '14px' }}>The 70% Rule Math</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                {[['ARV', '$349,000'], ['× 0.70', '$244,300'], ['− Rehab', '−$80,000'], ['Max offer', '$164,300'], ['We paid', '$210,000'], ['Strategy fit', 'Wholetail']].map(([k, v], i) => (
                  <div key={i}>
                    <div style={{ fontSize: '11px', color: '#5a7184', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{k}</div>
                    <div style={{ fontSize: '17px', fontWeight: '700', color: '#0f1c2d' }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: '#f0f2f5', border: '8px solid #00C27C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(0,194,124,0.18)' }}>
                <div style={{ fontSize: '52px', fontWeight: '700', color: '#00C27C', lineHeight: 1 }}>100</div>
                <div style={{ fontSize: '10px', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>Score</div>
              </div>
              <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '10px', textAlign: 'center' }}>Strong Deal</div>
            </div>
          </div>

          <div style={{ marginTop: '24px', padding: '20px 24px', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: '8px', color: 'white' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '8px' }}>70% rule lesson</div>
            <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#cfd9e3' }}>The 70% rule tells you when a deal doesn't work as a flip. It does NOT tell you when a deal doesn't work — period. We "failed" the 70% rule at $210K. We made $115K because the right strategy was wholetail, not flip. Freddie runs the rule check AND the full strategy comparison so you don't walk away from money-makers.</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Common questions about the 70% rule calculator</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((f, i) => (
              <details key={i} style={{ background: '#f0f2f5', borderRadius: '12px', padding: '18px 22px' }}>
                <summary style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}>
                  <span>{f.q}</span>
                  <span style={{ color: '#00C27C', fontSize: '20px', fontWeight: '300', flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.65', marginTop: '12px' }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '52px 0', background: '#f0f2f5' }}>
        <div className="container">
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>More free tools</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            <a href="/tools/free-ai-flip-calculator" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free Fix and Flip Calculator →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Run the full flip math after the 70% rule check.</div>
            </a>
            <a href="/tools/free-ai-arv-calculator" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free ARV Calculator →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Get a real ARV from comp data before running the rule.</div>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Run the 70% rule check <span className="serif-italic" style={{ color: '#00C27C' }}>free</span>.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>No credit card. Tell Freddie ARV and rehab — get your max offer in 60 seconds.</p>
          <a href="/freddie" className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Talk to Freddie →</a>
          <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> to save your deals.</div>
        </div>
      </section>

      <footer style={{ background: '#0f1c2d', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '32px 0', color: '#94a8b8', fontSize: '13px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div className="serif-italic" style={{ fontSize: '18px', color: 'white' }}>FreeDeal<span style={{ color: '#00C27C' }}>Calc</span></div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="/freddie">Freddie</a>
            <a href="/pricing">Pricing</a>
            <a href="/partners">Partners</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}