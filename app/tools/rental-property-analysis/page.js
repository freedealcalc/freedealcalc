'use client';
import { useState } from 'react';

export default function RentalPropertyAnalysisPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to run a rental property analysis');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Rental Property Analysis",
        "url": "https://freedealcalc.com/tools/rental-property-analysis",
        "description": "Free AI rental property analysis. Cash flow, cap rate, ROI, DSCR, and deal score for any rental — Rentcast data integrated, free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is a rental property analysis?", "acceptedAnswer": { "@type": "Answer", "text": "A rental property analysis evaluates whether a property makes financial sense as a long-term rental. It calculates gross rent, net operating income, cash flow, cap rate, cash-on-cash return, and deal score — giving you a complete picture before you commit." } },
          { "@type": "Question", "name": "What metrics matter most in rental property analysis?", "acceptedAnswer": { "@type": "Answer", "text": "The four most important metrics are: monthly cash flow, cash-on-cash return, cap rate, and DSCR. Cash flow tells you the monthly number, CoC tells you how hard your capital is working, cap rate measures property yield independent of financing, and DSCR determines loan qualification." } },
          { "@type": "Question", "name": "How do I analyze a rental property from scratch?", "acceptedAnswer": { "@type": "Answer", "text": "Start with purchase price and market rent. Subtract vacancy (5-10%), operating expenses (taxes, insurance, management, maintenance), and debt service. What remains is cash flow. Freddie does this automatically from a plain-English description of your property." } },
          { "@type": "Question", "name": "How accurate are Rentcast rent estimates?", "acceptedAnswer": { "@type": "Answer", "text": "Rentcast pulls comparable rental data from active listings and recent leases in your specific zip code. It's directionally accurate for most markets. Always verify against actual current listings in your target neighborhood." } },
          { "@type": "Question", "name": "Should I buy a rental property in a high-cost market?", "acceptedAnswer": { "@type": "Answer", "text": "High-cost markets like Northern Virginia rarely cash flow well on leverage. The play is usually appreciation and equity capture — not monthly income. Freddie models both the cash flow reality and the long-term equity scenario so you can make an informed decision." } },
          { "@type": "Question", "name": "What is a good cap rate for a rental property?", "acceptedAnswer": { "@type": "Answer", "text": "Cap rate = NOI divided by purchase price. A 5-7% cap rate is common for suburban rentals. In high-cost markets, 4-5% is realistic. Freddie benchmarks your property cap rate against your local market automatically." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Rental Property Analysis | FreeDealCalc</title>
        <meta name="description" content="Run a complete rental property analysis with AI. Cash flow, cap rate, COC return, DSCR, and deal score — Rentcast data integrated, free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/rental-property-analysis" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Rental Property Analysis</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>Complete rental analysis in seconds — cash flow, cap rate, DSCR, deal score, and Rentcast rent data. Know before you buy.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your rental:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. 3BR in Fredericksburg VA, asking $285K, rent estimate $2,100/mo, taxes $3,800/yr. 20% down. Does this cash flow?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze This Rental →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏘️', title: 'Rentcast Rent Data', desc: 'Real comparable rent data for your specific address — not a national average.' },
              { icon: '💵', title: 'True Cash Flow', desc: 'Net monthly cash flow after every expense — mortgage, vacancy, management, maintenance, taxes, insurance.' },
              { icon: '📊', title: 'Cap Rate & CoC', desc: 'Both metrics calculated and benchmarked against your local market norms.' },
              { icon: '🏦', title: 'DSCR Analysis', desc: 'Know if your rental qualifies for investor financing before you talk to a lender.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Freddie grades your rental A–F across all key performance metrics.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Complete rental analysis permanently free. No credit card required.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>The rental analysis that told us to sell — and made us $115K</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>We ran a full rental property analysis on this Northern Virginia hoarder house the same day we got the lead. Rentcast showed $2,100–$2,300/month for the market. At $210K acquisition with conventional financing, the cash flow came out to $195/month — a 2.2% cash-on-cash return. Freddie scored it 52/100 as a rental. Then we ran the wholetail: 100/100. $115,050 net profit in 30 days. The rental analysis didn't just tell us the rental numbers — it confirmed the flip. That's a complete analysis.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia rental property analysis" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored the wholetail <strong>100/100</strong>. A rental property analysis that only runs rental numbers is half an analysis. Run every exit.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Rental property analysis lesson: a complete analysis tells you what the property is worth as a rental AND as a flip. Don't answer just one question."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Rental Property Analysis FAQ</h2>
          {[
            ['What is a rental property analysis?', 'A rental property analysis evaluates whether a property makes financial sense as a long-term rental. It calculates gross rent, net operating income, cash flow, cap rate, cash-on-cash return, and deal score — giving you a complete picture before you commit.'],
            ['What metrics matter most in rental property analysis?', 'The four most important metrics are: monthly cash flow, cash-on-cash return, cap rate, and DSCR. Cash flow tells you the monthly number, CoC tells you how hard your capital is working, cap rate measures property yield independent of financing, and DSCR determines loan qualification.'],
            ['How do I analyze a rental property from scratch?', 'Start with purchase price and market rent. Subtract vacancy (5-10%), operating expenses (taxes, insurance, management, maintenance), and debt service. What remains is cash flow. Freddie does this automatically from a plain-English description of your property.'],
            ['How accurate are Rentcast rent estimates?', "Rentcast pulls comparable rental data from active listings and recent leases in your specific zip code. It's directionally accurate for most markets. Always verify against actual current listings in your target neighborhood."],
            ['Should I buy a rental property in a high-cost market?', "High-cost markets like Northern Virginia rarely cash flow well on leverage. The play is usually appreciation and equity capture — not monthly income. Freddie models both the cash flow reality and the long-term equity scenario so you can make an informed decision."],
            ['What is a good cap rate for a rental property?', 'Cap rate = NOI divided by purchase price. A 5-7% cap rate is common for suburban rentals. In high-cost markets, 4-5% is realistic. Freddie benchmarks your property cap rate against your local market automatically.'],
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
              <a href="/tools/rental-cash-flow-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Rental Cash Flow Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Monthly and annual cash flow breakdown</div>
              </a>
              <a href="/tools/dscr-loan-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>DSCR Loan Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Check investor financing qualification</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Run your rental property analysis now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to run a rental property analysis'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
