'use client';
import { useState } from 'react';

export default function MultifamilyCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a multifamily property deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Multifamily Calculator",
        "url": "https://freedealcalc.com/tools/multifamily-calculator",
        "description": "Free AI multifamily calculator for real estate investors. Analyze 2–10 unit properties with NOI, cap rate, cash flow, and deal score — free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do I analyze a multifamily property?", "acceptedAnswer": { "@type": "Answer", "text": "Key inputs include number of units, rent per unit, vacancy rate, operating expenses (taxes, insurance, management, maintenance), and purchase price. Freddie AI calculates NOI, cap rate, cash-on-cash return, and debt service coverage ratio automatically." } },
          { "@type": "Question", "name": "What is a good cap rate for multifamily?", "acceptedAnswer": { "@type": "Answer", "text": "Multifamily cap rates typically run 5–8% in suburban markets and 4–6% in high-cost metros like Northern Virginia. Small multifamily (2–4 units) often trades at rates similar to single-family in the same market." } },
          { "@type": "Question", "name": "What is DSCR for multifamily loans?", "acceptedAnswer": { "@type": "Answer", "text": "Debt Service Coverage Ratio (DSCR) is NOI divided by annual debt payments. Lenders typically require 1.20–1.25 DSCR, meaning the property generates 20–25% more income than its loan payments. Freddie calculates DSCR automatically." } },
          { "@type": "Question", "name": "Is multifamily better than single-family for investors?", "acceptedAnswer": { "@type": "Answer", "text": "Multifamily spreads vacancy risk across units, often generates higher NOI per dollar invested, and can be valued on income (not just comps). Single-family is simpler to manage and easier to finance. Both have merit — Freddie models both." } },
          { "@type": "Question", "name": "Can I wholesale a multifamily property?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Multifamily wholesale works similarly to single-family — find a motivated seller, get it under contract below market, assign to a cash buyer. The buyer pool is smaller, so marketing to multifamily-specific investors via Deal Blast is key." } },
          { "@type": "Question", "name": "What expenses should I include in multifamily analysis?", "acceptedAnswer": { "@type": "Answer", "text": "Include property taxes, insurance, property management (8–10%), maintenance and repairs (5–10% of gross rent), vacancy allowance (5–10%), capital expenditure reserves, and any utilities paid by the landlord." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Multifamily Calculator | FreeDealCalc</title>
        <meta name="description" content="Analyze multifamily property deals with AI. Calculate NOI, cap rate, DSCR, cash flow, and deal score for 2–10 unit properties — free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/multifamily-calculator" />
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
            Free Multifamily Calculator
          </h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>
            Analyze 2–10 unit properties with AI. NOI, cap rate, DSCR, cash flow, and deal score — all in one free analysis.
          </p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your multifamily deal:</p>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="e.g. 4-unit building asking $525K. Units rent for $1,600/mo each. Taxes $9K, insurance $5K, 10% management. Should I buy it?"
              style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }}
            />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
              Analyze This Multifamily →
            </button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏢', title: 'Per-Unit Analysis', desc: 'Break down rent, vacancy, and expenses at the unit level for true operating clarity.' },
              { icon: '📊', title: 'NOI & Cap Rate', desc: 'Real NOI with all expenses included. Cap rate benchmarked against your market.' },
              { icon: '🏦', title: 'DSCR Calculator', desc: 'Debt service coverage ratio calculated automatically — know before you talk to a lender.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Freddie grades your multifamily deal A–F so you know instantly if it pencils.' },
              { icon: '📄', title: 'Disposition Package', desc: 'Generate a pro-quality package to market your multifamily deal to cash buyers.' },
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
              Single-family wholetail vs the 4-unit deal we passed on next door
            </h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
              When we closed on the hoarder house in Northern Virginia, there was a 4-unit property two doors down listed at $540K — roughly $7.5K/unit in monthly rents. The cap rate penciled to about 5.8%. Not bad. But we ran it through Freddie anyway. With the interest rate environment, DSCR was 1.08 — below what most lenders want. We'd have needed a bigger down payment or creative financing to make it work. The single-family wholetail at $210K closed in 30 days for $115K profit. The multifamily would have tied up $130K+ for years. We took the clean exit. Freddie made the comparison easy.
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
                Freddie scored the wholetail <strong>100/100</strong>. The multifamily comparison reinforced the decision. Run both sides — then decide with data.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
              "Multifamily calculator lesson: more units doesn't automatically mean better returns. Run DSCR, cap rate, and cash-on-cash before you assume the apartment beats the single-family."
            </p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Multifamily Analysis FAQ</h2>
          {[
            ['How do I analyze a multifamily property?', 'Key inputs include number of units, rent per unit, vacancy rate, operating expenses (taxes, insurance, management, maintenance), and purchase price. Freddie AI calculates NOI, cap rate, cash-on-cash return, and debt service coverage ratio automatically.'],
            ['What is a good cap rate for multifamily?', 'Multifamily cap rates typically run 5–8% in suburban markets and 4–6% in high-cost metros like Northern Virginia. Small multifamily (2–4 units) often trades at rates similar to single-family in the same market.'],
            ['What is DSCR for multifamily loans?', 'Debt Service Coverage Ratio (DSCR) is NOI divided by annual debt payments. Lenders typically require 1.20–1.25 DSCR, meaning the property generates 20–25% more income than its loan payments. Freddie calculates DSCR automatically.'],
            ['Is multifamily better than single-family for investors?', 'Multifamily spreads vacancy risk across units, often generates higher NOI per dollar invested, and can be valued on income (not just comps). Single-family is simpler to manage and easier to finance. Both have merit — Freddie models both.'],
            ['Can I wholesale a multifamily property?', 'Yes. Multifamily wholesale works similarly to single-family — find a motivated seller, get it under contract below market, assign to a cash buyer. The buyer pool is smaller, so marketing to multifamily-specific investors via Deal Blast is key.'],
            ['What expenses should I include in multifamily analysis?', 'Include property taxes, insurance, property management (8–10%), maintenance and repairs (5–10% of gross rent), vacancy allowance (5–10%), capital expenditure reserves, and any utilities paid by the landlord.'],
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
              <a href="/tools/cap-rate-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Cap Rate Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Calculate cap rate and NOI for any property</div>
              </a>
              <a href="/tools/free-ai-brrrr-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI BRRRR Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Model BRRRR strategy on multifamily deals</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Analyze your multifamily deal now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a multifamily property deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
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