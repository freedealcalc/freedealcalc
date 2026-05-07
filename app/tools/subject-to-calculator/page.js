'use client';
import { useState } from 'react';

export default function SubjectToCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a subject-to real estate deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Subject-To Calculator",
        "url": "https://freedealcalc.com/tools/subject-to-calculator",
        "description": "Free AI subject-to calculator. Analyze sub-to real estate deals — existing mortgage payment, equity position, due-on-sale risk, and deal score — free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is a subject-to deal in real estate?", "acceptedAnswer": { "@type": "Answer", "text": "Subject-to (sub-to) means you purchase a property while leaving the seller's existing mortgage in place. The deed transfers to you, but the loan stays in the seller's name. You make their mortgage payments. It's a creative finance strategy for taking over distressed properties without new financing." } },
          { "@type": "Question", "name": "How do I calculate a subject-to deal?", "acceptedAnswer": { "@type": "Answer", "text": "Key inputs: existing mortgage balance, interest rate, monthly payment, remaining term, and your intended exit (rent, flip, or refinance). Freddie calculates equity position, monthly cash flow, and break-even timeline automatically." } },
          { "@type": "Question", "name": "What is due-on-sale risk in subject-to deals?", "acceptedAnswer": { "@type": "Answer", "text": "Most mortgages have a due-on-sale clause requiring full payoff when ownership transfers. In practice, lenders rarely call loans current on payments. However, this risk exists and should be factored into any sub-to deal analysis." } },
          { "@type": "Question", "name": "When is subject-to a better strategy than cash purchase?", "acceptedAnswer": { "@type": "Answer", "text": "Sub-to wins when the existing mortgage has a low interest rate (pre-2022 loans), when you want to conserve capital, or when the seller has zero equity and is facing foreclosure. It doesn't work when sellers have significant equity expectations." } },
          { "@type": "Question", "name": "Can I wholetail a property purchased subject-to?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, if your resale price covers the existing mortgage payoff plus profit. Sub-to wholetail works when you acquire at a distressed price via creative finance, then resell as-is on the MLS. The key is ensuring there's enough spread." } },
          { "@type": "Question", "name": "What are the risks of subject-to real estate?", "acceptedAnswer": { "@type": "Answer", "text": "Risks include: due-on-sale clause triggered, seller's credit damaged if you miss payments, title complications, and seller's inability to get new financing while their loan is still active. These should be disclosed and documented in the purchase agreement." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Subject-To Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate subject-to real estate deals with AI. Analyze existing mortgage payments, equity position, due-on-sale risk, and deal score — free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/subject-to-calculator" />
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
          <div style={{ display: 'inline-block', background: '#00C27C', color: '#fff', fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 4, marginBottom: 20, letterSpacing: 1 }}>
            STOP PAYING. START WINNING.
          </div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>
            Free Subject-To Calculator
          </h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>
            Model existing mortgage assumptions, equity positions, cash flow, and exit strategy for sub-to deals — AI-powered, completely free.
          </p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your sub-to deal:</p>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="e.g. Seller has $190K left on a 3.5% mortgage, $1,100/mo payment. ARV is $310K. They want $10K to walk. Is this a good sub-to?"
              style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }}
            />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
              Analyze This Sub-To →
            </button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏦', title: 'Mortgage Assumption Analysis', desc: 'Freddie models the existing loan terms — payment, rate, remaining balance — against your exit strategy.' },
              { icon: '📐', title: 'Equity Position Calculator', desc: 'See your equity at acquisition, at refinance, and at resale under each exit scenario.' },
              { icon: '⚠️', title: 'Due-on-Sale Risk Assessment', desc: 'Freddie flags loan characteristics that increase due-on-sale risk so you know what you\'re taking on.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Sub-to deals scored against all key metrics — A–F letter grade included.' },
              { icon: '⚖️', title: 'Sub-To vs Cash Comparison', desc: 'See whether assuming the mortgage or a clean cash purchase produces a better risk-adjusted return.' },
              { icon: '🔒', title: 'Free Forever', desc: 'No credit card. No trial. Core analysis permanently free.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>
              Why we didn't take this one sub-to — and what we did instead
            </h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
              When this Northern Virginia hoarder house came across our desk, the first question was always: is there a sub-to angle? We checked. The seller had refinanced in 2022 — the existing mortgage was at 6.8%, balance of $195K. There was no rate advantage. Taking over a 6.8% note on a distressed property that needed $40–60K in rehab made no sense when we could just buy it cash, do a cleanout, and flip it clean. We offered $210K cash, closed in two weeks, spent $5K on cleanout, and sold for $349K. Sub-to would have tied up the same capital for years. Freddie scored the wholetail exit 100/100.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia hoarder house before" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="After buyer renovation" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
            </div>
            <p style={{ fontStyle: 'italic', color: '#888', fontSize: 13, marginBottom: 32 }}>
              We sold the property as-is for $349K. The renovation pictured was completed by the buyer who purchased it from us. The $115,050 profit reflects our wholetail exit, not the renovation work.
            </p>
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Freddie scored the wholetail exit <strong>100/100</strong>. Sub-to is powerful — but only when the existing mortgage rate actually creates an advantage. Always compare both paths.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
              "Subject-to lesson: the most creative deal isn't always the best deal. When a low-rate mortgage isn't available, a clean cash close and fast exit often beats years of loan assumption complexity."
            </p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Subject-To FAQ</h2>
          {[
            ['What is a subject-to deal in real estate?', "Subject-to (sub-to) means you purchase a property while leaving the seller's existing mortgage in place. The deed transfers to you, but the loan stays in the seller's name. You make their mortgage payments. It's a creative finance strategy for taking over distressed properties without new financing."],
            ['How do I calculate a subject-to deal?', "Key inputs: existing mortgage balance, interest rate, monthly payment, remaining term, and your intended exit (rent, flip, or refinance). Freddie calculates equity position, monthly cash flow, and break-even timeline automatically."],
            ['What is due-on-sale risk in subject-to deals?', 'Most mortgages have a due-on-sale clause requiring full payoff when ownership transfers. In practice, lenders rarely call loans current on payments. However, this risk exists and should be factored into any sub-to deal analysis.'],
            ['When is subject-to a better strategy than cash purchase?', "Sub-to wins when the existing mortgage has a low interest rate (pre-2022 loans), when you want to conserve capital, or when the seller has zero equity and is facing foreclosure. It doesn't work when sellers have significant equity expectations."],
            ['Can I wholetail a property purchased subject-to?', "Yes, if your resale price covers the existing mortgage payoff plus profit. Sub-to wholetail works when you acquire at a distressed price via creative finance, then resell as-is on the MLS. The key is ensuring there's enough spread."],
            ['What are the risks of subject-to real estate?', "Risks include: due-on-sale clause triggered, seller's credit damaged if you miss payments, title complications, and seller's inability to get new financing while their loan is still active. These should be disclosed and documented in the purchase agreement."],
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
              <a href="/tools/seller-financing-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Seller Financing Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Compare seller carry vs subject-to structure</div>
              </a>
              <a href="/tools/wholetail-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Wholetail Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>When cash beats creative finance — model it here</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Analyze your sub-to deal now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a subject-to real estate deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
            Talk to Freddie →
          </button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}