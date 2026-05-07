'use client';
import { useState } from 'react';

export default function AirbnbCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze an Airbnb short-term rental deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Airbnb Calculator",
        "url": "https://freedealcalc.com/tools/airbnb-calculator",
        "description": "Free AI Airbnb calculator for real estate investors. Analyze short-term rental revenue, occupancy, expenses, and deal score — free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do I calculate Airbnb rental income?", "acceptedAnswer": { "@type": "Answer", "text": "Airbnb revenue = (nightly rate × nights occupied). Net income = gross revenue minus cleaning fees, platform fees (~3%), property management (15–25% for STR), utilities, insurance, and maintenance. Freddie models it with realistic occupancy assumptions." } },
          { "@type": "Question", "name": "What occupancy rate should I use for Airbnb analysis?", "acceptedAnswer": { "@type": "Answer", "text": "Conservative analysis uses 60–65% occupancy. Optimistic uses 75–80%. Markets vary widely — tourist destinations see 70–85%, while suburban markets may struggle to hit 50%. Always model your specific market." } },
          { "@type": "Question", "name": "Is Airbnb better than long-term rental?", "acceptedAnswer": { "@type": "Answer", "text": "In tourist markets, STR can generate 2–3x long-term rental income. However, STR has higher operating costs, management complexity, regulatory risk, and seasonal variance. Freddie compares both for your specific property." } },
          { "@type": "Question", "name": "What are Airbnb regulations I should know about?", "acceptedAnswer": { "@type": "Answer", "text": "Many cities restrict or ban STR, require permits, limit nights per year, or mandate owner-occupancy. Always verify local zoning and HOA rules before buying for Airbnb. This is a major risk factor Freddie flags." } },
          { "@type": "Question", "name": "Can a distressed property work as an Airbnb?", "acceptedAnswer": { "@type": "Answer", "text": "Rarely without significant renovation. Airbnb guests expect turnkey condition — distressed properties need full renovation before listing. This makes the rehab-to-STR path capital-intensive compared to a clean wholetail exit." } },
          { "@type": "Question", "name": "What does Freddie analyze for short-term rentals?", "acceptedAnswer": { "@type": "Answer", "text": "Freddie analyzes estimated nightly rates, market occupancy, gross revenue, operating expenses, net cash flow, cap rate, cash-on-cash return, and deal score — then compares it against flip and long-term rental alternatives." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Airbnb Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate Airbnb revenue, occupancy rates, expenses, and ROI instantly with AI. Free short-term rental deal analysis — no sign-up required." />
        <link rel="canonical" href="https://freedealcalc.com/tools/airbnb-calculator" />
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
            Free Airbnb Calculator
          </h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>
            Model short-term rental revenue, occupancy, expenses, and net return — and compare it against a flip or long-term rental exit.
          </p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your STR deal:</p>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="e.g. 3BR near DC suburbs, purchase $320K, ARV $380K after $40K reno. Could rent nightly for $175. Is Airbnb better than a flip?"
              style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }}
            />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
              Analyze This STR Deal →
            </button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏡', title: 'STR Revenue Model', desc: 'Nightly rate × occupancy modeling with conservative, moderate, and optimistic scenarios.' },
              { icon: '📉', title: 'True Expense Breakdown', desc: 'Management fees, cleaning, platform cuts, utilities, insurance — Freddie includes them all.' },
              { icon: '⚖️', title: 'STR vs Long-Term Comparison', desc: 'See whether Airbnb or a standard tenant nets more cash flow in your market.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Freddie grades your STR deal A–F against all key metrics before you buy.' },
              { icon: '⚠️', title: 'Regulation Risk Flag', desc: 'Freddie flags STR regulatory risk in your market so you know what you\'re walking into.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core analysis always free. No credit card. No trial.' },
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
              Why this hoarder house wouldn't have worked as a short-term rental
            </h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
              Someone asked us about listing this Northern Virginia hoarder house on Airbnb. We ran the numbers. After $40–60K in renovation to make it STR-ready, the location (suburban, non-tourist corridor) would have supported maybe $120/night at 60% occupancy — roughly $26K gross, $16K net annually. Compare that to a wholetail exit at $349K for $115K profit in 30 days. There's no version of the Airbnb math that wins here. The market told us to flip — and Freddie confirmed it with a 100/100 score.
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
                Freddie scored the wholetail at <strong>100/100</strong>. The Airbnb path would have taken 7+ years to match the same return. Let the data choose your exit — not the hype.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
              "Airbnb calculator lesson: STR can be the right exit — but only if the location, numbers, and regulations all align. Run the comparison before you commit to renovation."
            </p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Airbnb Analysis FAQ</h2>
          {[
            ['How do I calculate Airbnb rental income?', 'Airbnb revenue = (nightly rate × nights occupied). Net income = gross revenue minus cleaning fees, platform fees (~3%), property management (15–25% for STR), utilities, insurance, and maintenance. Freddie models it with realistic occupancy assumptions.'],
            ['What occupancy rate should I use for Airbnb analysis?', 'Conservative analysis uses 60–65% occupancy. Optimistic uses 75–80%. Markets vary widely — tourist destinations see 70–85%, while suburban markets may struggle to hit 50%. Always model your specific market.'],
            ['Is Airbnb better than long-term rental?', 'In tourist markets, STR can generate 2–3x long-term rental income. However, STR has higher operating costs, management complexity, regulatory risk, and seasonal variance. Freddie compares both for your specific property.'],
            ['What are Airbnb regulations I should know about?', 'Many cities restrict or ban STR, require permits, limit nights per year, or mandate owner-occupancy. Always verify local zoning and HOA rules before buying for Airbnb. This is a major risk factor Freddie flags.'],
            ['Can a distressed property work as an Airbnb?', 'Rarely without significant renovation. Airbnb guests expect turnkey condition — distressed properties need full renovation before listing. This makes the rehab-to-STR path capital-intensive compared to a clean wholetail exit.'],
            ['What does Freddie analyze for short-term rentals?', 'Freddie analyzes estimated nightly rates, market occupancy, gross revenue, operating expenses, net cash flow, cap rate, cash-on-cash return, and deal score — then compares it against flip and long-term rental alternatives.'],
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
              <a href="/tools/free-ai-rental-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Rental Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Compare long-term rental vs your STR analysis</div>
              </a>
              <a href="/tools/wholetail-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Wholetail Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>When the flip beats the STR — model it here</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Run your Airbnb deal now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze an Airbnb short-term rental deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
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