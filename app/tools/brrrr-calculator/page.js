'use client';
import { useState } from 'react';

export default function BrrrrCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a BRRRR strategy deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free BRRRR Calculator",
        "url": "https://freedealcalc.com/tools/brrrr-calculator",
        "description": "Free AI BRRRR calculator. Model Buy, Rehab, Rent, Refinance, Repeat deals — cash left in, equity captured, cash flow, and deal score. Free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the BRRRR strategy?", "acceptedAnswer": { "@type": "Answer", "text": "BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. You buy a distressed property, renovate it, rent it out, then do a cash-out refinance based on the new appraised value — ideally pulling out most or all of your initial investment to deploy on the next deal." } },
          { "@type": "Question", "name": "How do I calculate a BRRRR deal?", "acceptedAnswer": { "@type": "Answer", "text": "BRRRR analysis has two phases. Phase 1: total investment = purchase + rehab + closing costs. Phase 2: refinance at 70-75% of ARV. Cash left in = total investment minus refinance proceeds. Then run cash flow on the refinanced rental. Freddie models both phases automatically." } },
          { "@type": "Question", "name": "What is a good BRRRR deal?", "acceptedAnswer": { "@type": "Answer", "text": "The ideal BRRRR leaves zero or minimal cash in the deal after refinancing while producing positive monthly cash flow. If you invest $60K all-in and the refi returns $55K, you've built a rental with $5K net capital deployed. Freddie scores this as a strong deal." } },
          { "@type": "Question", "name": "What LTV can I get on a BRRRR refinance?", "acceptedAnswer": { "@type": "Answer", "text": "Most lenders offer 70-75% LTV on investment property cash-out refinances. Some DSCR lenders go to 80% on strong cash-flowing properties. The refinance LTV directly determines how much cash you pull back out — the core math of BRRRR." } },
          { "@type": "Question", "name": "What are the risks of the BRRRR strategy?", "acceptedAnswer": { "@type": "Answer", "text": "Key risks: ARV comes in lower than projected (less cash out), rehab runs over budget (more cash in), rental market weakens (cash flow negative after refi), or rates rise between purchase and refinance (higher payment reduces cash flow). Freddie stress-tests all of these." } },
          { "@type": "Question", "name": "Is BRRRR better than a traditional rental?", "acceptedAnswer": { "@type": "Answer", "text": "BRRRR can produce higher returns on invested capital by recycling your down payment into the next deal. However, it requires rehab execution risk and refinance qualification. For investors who can manage rehab and qualify for DSCR loans, BRRRR dramatically accelerates portfolio growth." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free BRRRR Calculator | Buy Rehab Rent Refinance Repeat | FreeDealCalc</title>
        <meta name="description" content="Calculate BRRRR deals with AI. Cash left in, equity captured, cash flow after refinance, and deal score — full BRRRR analysis free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/brrrr-calculator" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>

      <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#F0F2F5', minHeight: '100vh' }}>
        <nav style={{ background: '#0f1c2d', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 22, color: '#fff', textDecoration: 'none' }}>FreeDealCalc</a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="/freddie" style={{ color: '#ccc', textDecoration: 'none', fontSize: 14 }}>Try Freddie</a>
            <a href="/pricing" style={{ color: '#ccc', textDecoration: 'none', fontSize: 14 }}>Pricing</a>
            <a href="/signup" style={{ background: '#00C27C', color: '#fff', padding: '8px 16px', borderRadius: 6, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Sign Up Free</a>
          </div>
        </nav>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: '#00C27C', color: '#fff', fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 4, marginBottom: 20, letterSpacing: 1 }}>STOP PAYING. START WINNING.</div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free BRRRR Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>Model your Buy, Rehab, Rent, Refinance, Repeat deal — cash left in, equity captured, post-refi cash flow, and deal score. Free forever.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your BRRRR:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. Buy at $175K, rehab $35K, ARV $280K, rent $1,900/mo. Refi at 75% LTV. How much cash do I pull back out and does it cash flow?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze My BRRRR →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🔄', title: 'Full BRRRR Model', desc: 'Both phases: acquisition/rehab investment and post-refinance cash flow — modeled together.' },
              { icon: '💰', title: 'Cash Left In', desc: 'See exactly how much of your capital comes back out at refinance — the core BRRRR metric.' },
              { icon: '🏦', title: 'Refi Scenario Modeling', desc: 'Model 70%, 75%, and 80% LTV refinance scenarios to find your target deal structure.' },
              { icon: '📊', title: 'Post-Refi Cash Flow', desc: 'Cash flow based on the actual refinanced loan payment — not the acquisition hard money rate.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Freddie scores your BRRRR on equity capture, cash flow, rehab risk, and overall return.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Full BRRRR analysis permanently free. No credit card required.' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: 8, color: '#0f1c2d' }}>{f.title}</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#fff', padding: '64px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>Why we skipped the BRRRR and took $115K instead</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>This Northern Virginia hoarder house was a candidate for BRRRR on paper. Buy at $210K, rehab $45-55K, ARV $349K, refi at 75% = $261,750 back out. Total investment ~$270K, cash left in ~$8,250. Post-refi cash flow at 7.5% on $261,750: approximately $150/month. Freddie scored the BRRRR at 71/100 — viable, but thin on cash flow with significant rehab execution risk. The wholetail scored 100/100: $5K, 30 days, $115,050 profit with zero rehab risk. The BRRRR math worked. The wholetail math was better. Freddie showed us both.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia BRRRR deal before" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="After buyer renovation" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
            </div>
            <p style={{ fontStyle: 'italic', color: '#888', fontSize: 13, marginBottom: 32 }}>We sold the property as-is for $349K. The renovation pictured was completed by the buyer who purchased it from us. The $115,050 profit reflects our wholetail exit, not the renovation work.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
              {[['Purchase','$210,000'],['Cleanout','$5,000'],['Resale','$349,000'],['Hold Time','1 month'],['Strategy','Wholetail'],['Net Profit','$115,050']].map(([k,v],i) => (
                <div key={i} style={{ background: '#F0F2F5', borderRadius: 8, padding: '16px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 12, color: '#888', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>{k}</div>
                  <div style={{ fontWeight: 700, fontSize: 20, color: '#0f1c2d' }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, background: '#F0F2F5', borderRadius: 12, padding: 24 }}>
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', border: '4px solid #00C27C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontWeight: 800, fontSize: 22, color: '#0f1c2d' }}>100</div>
                  <div style={{ fontSize: 10, color: '#888' }}>/100</div>
                </div>
                <div style={{ marginTop: 6, fontSize: 12, fontWeight: 700, color: '#00C27C' }}>Strong Deal</div>
              </div>
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored the wholetail <strong>100/100</strong>. The BRRRR was a 71. Run both — then take the better number.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"BRRRR lesson: the strategy works best when the post-refi cash flow clears your threshold AND the rehab risk is manageable. If either condition fails, the exit beats the hold."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>BRRRR Calculator FAQ</h2>
          {[
            ['What is the BRRRR strategy?', 'BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. You buy a distressed property, renovate it, rent it out, then do a cash-out refinance based on the new appraised value — ideally pulling out most or all of your initial investment to deploy on the next deal.'],
            ['How do I calculate a BRRRR deal?', 'BRRRR analysis has two phases. Phase 1: total investment = purchase + rehab + closing costs. Phase 2: refinance at 70-75% of ARV. Cash left in = total investment minus refinance proceeds. Then run cash flow on the refinanced rental. Freddie models both phases automatically.'],
            ['What is a good BRRRR deal?', 'The ideal BRRRR leaves zero or minimal cash in the deal after refinancing while producing positive monthly cash flow. If you invest $60K all-in and the refi returns $55K, you\'ve built a rental with $5K net capital deployed. Freddie scores this as a strong deal.'],
            ['What LTV can I get on a BRRRR refinance?', 'Most lenders offer 70-75% LTV on investment property cash-out refinances. Some DSCR lenders go to 80% on strong cash-flowing properties. The refinance LTV directly determines how much cash you pull back out — the core math of BRRRR.'],
            ['What are the risks of the BRRRR strategy?', 'Key risks: ARV comes in lower than projected (less cash out), rehab runs over budget (more cash in), rental market weakens (cash flow negative after refi), or rates rise between purchase and refinance (higher payment reduces cash flow). Freddie stress-tests all of these.'],
            ['Is BRRRR better than a traditional rental?', 'BRRRR can produce higher returns on invested capital by recycling your down payment into the next deal. However, it requires rehab execution risk and refinance qualification. For investors who can manage rehab and qualify for DSCR loans, BRRRR dramatically accelerates portfolio growth.'],
          ].map(([q, a], i) => (
            <details key={i} style={{ borderBottom: '1px solid #e0e0e0', padding: '16px 0' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', color: '#0f1c2d', fontSize: 15 }}>{q}</summary>
              <p style={{ color: '#555', marginTop: 10, lineHeight: 1.7, fontSize: 14 }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 28, color: '#0f1c2d', marginBottom: 20 }}>More free tools</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <a href="/tools/free-ai-brrrr-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI BRRRR Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Deep BRRRR analysis with Rentcast rent data</div>
              </a>
              <a href="/tools/dscr-loan-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>DSCR Loan Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Model your BRRRR refinance qualification</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Analyze your BRRRR deal now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a BRRRR strategy deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
