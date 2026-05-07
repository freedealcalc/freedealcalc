'use client';
import { useState } from 'react';

export default function CashOnCashReturnCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to calculate cash-on-cash return for my deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Cash-on-Cash Return Calculator",
        "url": "https://freedealcalc.com/tools/cash-on-cash-return-calculator",
        "description": "Free AI cash-on-cash return calculator for real estate investors. Calculate CoC return on flips, rentals, and BRRRR deals instantly.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is cash-on-cash return in real estate?", "acceptedAnswer": { "@type": "Answer", "text": "Cash-on-cash return (CoC) is your annual pre-tax cash flow divided by your total cash invested. It measures the actual return on the dollars you put in — not the full property value — making it the most honest metric for leveraged investments." } },
          { "@type": "Question", "name": "What is a good cash-on-cash return?", "acceptedAnswer": { "@type": "Answer", "text": "Most investors target 8–12% CoC for rental properties. For flips, CoC can exceed 100% when deals close fast with low out-of-pocket. On our $115K wholetail deal, CoC exceeded 4,000% because we exited in 30 days." } },
          { "@type": "Question", "name": "How do I calculate cash-on-cash return?", "acceptedAnswer": { "@type": "Answer", "text": "Divide annual net cash flow by total cash invested. For a flip: (net profit / cash invested) × (12 / hold months) = annualized CoC. Freddie calculates this automatically from your deal inputs." } },
          { "@type": "Question", "name": "What is included in cash invested for CoC?", "acceptedAnswer": { "@type": "Answer", "text": "Cash invested includes your down payment, closing costs, rehab costs paid out of pocket, and any carry costs paid in cash. Financed amounts are excluded — that's what makes CoC the leverage-adjusted metric." } },
          { "@type": "Question", "name": "Does cash-on-cash work for wholesale deals?", "acceptedAnswer": { "@type": "Answer", "text": "For assignment wholesale, CoC is less relevant since there's no property acquisition. For wholetail deals where you buy and resell as-is, CoC is extremely powerful and often astronomical on short holds." } },
          { "@type": "Question", "name": "How does CoC differ from ROI?", "acceptedAnswer": { "@type": "Answer", "text": "ROI uses total profit / total investment including financed amounts. CoC uses annual cash flow / cash actually invested. For leveraged deals, CoC gives a more accurate picture of how hard your personal capital is working." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Cash-on-Cash Return Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate cash-on-cash return for real estate deals instantly. AI-powered CoC analysis for flips, rentals, BRRRR, and wholetail — free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/cash-on-cash-return-calculator" />
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
            Free Cash-on-Cash Return Calculator
          </h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>
            See exactly how hard your capital is working — annualized CoC return on any strategy, calculated by AI in seconds.
          </p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your deal:</p>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="e.g. Bought for $210K cash, sold for $349K in 30 days. What's my cash-on-cash return?"
              style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }}
            />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
              Calculate CoC Return →
            </button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '📈', title: 'Annualized CoC Return', desc: 'True annualized cash-on-cash return accounting for your actual hold time — not just a raw number.' },
              { icon: '💵', title: 'Cash Deployed Tracker', desc: 'Freddie identifies exactly what counts as "cash invested" so your CoC is accurate, not inflated.' },
              { icon: '⚖️', title: 'Strategy Comparison', desc: 'See CoC side-by-side across flip, wholetail, rental, and BRRRR — choose the best exit.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'CoC feeds directly into your overall deal score. High CoC = higher score.' },
              { icon: '📄', title: 'Score Certificate', desc: 'Get a shareable PDF of your deal analysis and CoC return to send to partners or lenders.' },
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
              The 4,109% cash-on-cash return on a 30-day wholetail flip
            </h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
              On this Northern Virginia hoarder house, we deployed $215,000 in cash (purchase + cleanout). We exited at $349,000 thirty days later, netting $115,050. Annualized, that's a cash-on-cash return of over 4,100%. That's not a typo — it's what happens when you close fast on a correctly priced distressed property and execute a clean wholetail. Freddie scored the deal 100/100 and the CoC was off the charts.
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
                Freddie scored this deal <strong>100/100</strong>. The 4,109% annualized CoC is a function of short hold time and clean execution. This is what wholetail is designed to do.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
              "Cash-on-cash return lesson: it's not about how much you made — it's about how hard your capital worked. A $50K profit in 30 days beats a $100K profit in 18 months every time."
            </p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Cash-on-Cash Return FAQ</h2>
          {[
            ['What is cash-on-cash return in real estate?', 'Cash-on-cash return (CoC) is your annual pre-tax cash flow divided by your total cash invested. It measures the actual return on the dollars you put in — not the full property value — making it the most honest metric for leveraged investments.'],
            ['What is a good cash-on-cash return?', 'Most investors target 8–12% CoC for rental properties. For flips, CoC can exceed 100% when deals close fast with low out-of-pocket. On our $115K wholetail deal, CoC exceeded 4,000% because we exited in 30 days.'],
            ['How do I calculate cash-on-cash return?', 'Divide annual net cash flow by total cash invested. For a flip: (net profit / cash invested) × (12 / hold months) = annualized CoC. Freddie calculates this automatically from your deal inputs.'],
            ['What is included in cash invested for CoC?', 'Cash invested includes your down payment, closing costs, rehab costs paid out of pocket, and any carry costs paid in cash. Financed amounts are excluded — that\'s what makes CoC the leverage-adjusted metric.'],
            ['Does cash-on-cash work for wholesale deals?', 'For assignment wholesale, CoC is less relevant since there\'s no property acquisition. For wholetail deals where you buy and resell as-is, CoC is extremely powerful and often astronomical on short holds.'],
            ['How does CoC differ from ROI?', 'ROI uses total profit / total investment including financed amounts. CoC uses annual cash flow / cash actually invested. For leveraged deals, CoC gives a more accurate picture of how hard your personal capital is working.'],
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
              <a href="/tools/wholetail-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Wholetail Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>The strategy that generated our 4,109% CoC</div>
              </a>
              <a href="/tools/free-ai-rental-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Rental Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Calculate CoC for buy-and-hold rentals</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Calculate your CoC return now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to calculate cash-on-cash return for my deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
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