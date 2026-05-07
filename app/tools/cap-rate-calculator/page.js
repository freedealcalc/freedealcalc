'use client';
import { useState } from 'react';

export default function CapRateCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to calculate cap rate for a property');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Cap Rate Calculator",
        "url": "https://freedealcalc.com/tools/cap-rate-calculator",
        "description": "Free AI cap rate calculator for real estate investors. Calculate NOI, cap rate, and property value instantly.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is cap rate in real estate?", "acceptedAnswer": { "@type": "Answer", "text": "Cap rate (capitalization rate) is Net Operating Income divided by property value, expressed as a percentage. It measures a property's income-generating potential independent of financing. Higher cap rates indicate higher yield but often higher risk." } },
          { "@type": "Question", "name": "What is a good cap rate?", "acceptedAnswer": { "@type": "Answer", "text": "Cap rates vary by market and property type. In high-cost metros like Northern Virginia or DC, 4–6% is common for single-family rentals. In secondary markets, 7–10%+ is achievable. Multi-family typically runs 5–8%." } },
          { "@type": "Question", "name": "How do I calculate cap rate?", "acceptedAnswer": { "@type": "Answer", "text": "Cap Rate = NOI / Property Value. NOI is gross rent minus vacancy, management, taxes, insurance, maintenance, and other expenses — before mortgage payments. Freddie calculates it automatically." } },
          { "@type": "Question", "name": "Does cap rate work for distressed properties?", "acceptedAnswer": { "@type": "Answer", "text": "Not well. Cap rate requires stabilized rental income. A hoarder house or heavily distressed property often has zero income and high vacancy risk — making cap rate useless until after renovation and stabilization." } },
          { "@type": "Question", "name": "When should I use cap rate vs cash-on-cash?", "acceptedAnswer": { "@type": "Answer", "text": "Use cap rate to compare properties without financing. Use cash-on-cash to evaluate your personal returns with leverage. Both metrics together give you a complete picture of a buy-and-hold investment." } },
          { "@type": "Question", "name": "Can I use cap rate to decide between flip and rental?", "acceptedAnswer": { "@type": "Answer", "text": "Indirectly, yes. If the cap rate at ARV is low (below 5%), the market doesn't value that property as a rental — it's a flip or wholetail market. High cap rates suggest strong rental demand. Freddie models both exit paths and shows which pencils better." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Cap Rate Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate cap rate, NOI, and property value instantly with AI. Free cap rate calculator for rental, multifamily, and investment property analysis." />
        <link rel="canonical" href="https://freedealcalc.com/tools/cap-rate-calculator" />
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
            Free Cap Rate Calculator
          </h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>
            Calculate NOI, cap rate, and property value in seconds. AI-powered analysis for single-family, multifamily, and commercial deals.
          </p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your property:</p>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="e.g. 4-unit building, $1,800/unit rent, asking $650K, taxes $8K/yr, insurance $4K/yr, 10% management."
              style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }}
            />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
              Calculate Cap Rate →
            </button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '📊', title: 'NOI Calculator', desc: 'Gross rent minus vacancy, management, taxes, insurance, and maintenance — real NOI, not inflated estimates.' },
              { icon: '🏗️', title: 'Cap Rate by Market', desc: 'Freddie benchmarks your cap rate against Northern Virginia and national comps so you know where you stand.' },
              { icon: '💰', title: 'Value from Cap Rate', desc: 'Work backwards: enter your target cap rate and NOI to see what you should pay for the property.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Cap rate feeds your overall deal score. Know instantly if this is an A or F deal.' },
              { icon: '⚖️', title: 'Flip vs Hold Comparison', desc: 'Freddie models both exits. If the cap rate is too low, the flip analysis may be the better angle.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core analysis always free. No credit card. No expiration.' },
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
              Why this Northern Virginia hoarder house wasn't a cap rate play
            </h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
              When we found this heavily distressed hoarder house, someone asked us about the cap rate. The answer was simple: there is no cap rate when a property generates zero rent and has years of deferred maintenance. Cap rate is a stabilized rental metric — and this property was nowhere near stabilized. The play here was wholetail: buy fast, clean out, resell as-is to a renovator. We purchased at $210K, spent $5K on cleanout, and sold for $349K in 30 days. No cap rate math required. Freddie scored it 100/100.
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
                Freddie scored this deal <strong>100/100</strong> — not because of cap rate, but because of ARV cushion, quick exit, and clean profit margin. Know which metric to apply to each deal type.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
              "Cap rate lesson: applying the wrong metric to the wrong deal type will make a great deal look terrible. Know when cap rate matters — and when it doesn't."
            </p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Cap Rate FAQ</h2>
          {[
            ['What is cap rate in real estate?', 'Cap rate (capitalization rate) is Net Operating Income divided by property value, expressed as a percentage. It measures a property\'s income-generating potential independent of financing. Higher cap rates indicate higher yield but often higher risk.'],
            ['What is a good cap rate?', 'Cap rates vary by market and property type. In high-cost metros like Northern Virginia or DC, 4–6% is common for single-family rentals. In secondary markets, 7–10%+ is achievable. Multi-family typically runs 5–8%.'],
            ['How do I calculate cap rate?', 'Cap Rate = NOI / Property Value. NOI is gross rent minus vacancy, management, taxes, insurance, maintenance, and other expenses — before mortgage payments. Freddie calculates it automatically.'],
            ['Does cap rate work for distressed properties?', 'Not well. Cap rate requires stabilized rental income. A hoarder house or heavily distressed property often has zero income and high vacancy risk — making cap rate useless until after renovation and stabilization.'],
            ['When should I use cap rate vs cash-on-cash?', 'Use cap rate to compare properties without financing. Use cash-on-cash to evaluate your personal returns with leverage. Both metrics together give you a complete picture of a buy-and-hold investment.'],
            ['Can I use cap rate to decide between flip and rental?', 'Indirectly, yes. If the cap rate at ARV is low (below 5%), the market doesn\'t value that property as a rental — it\'s a flip or wholetail market. High cap rates suggest strong rental demand. Freddie models both exit paths and shows which pencils better.'],
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
              <a href="/tools/multifamily-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Multifamily Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Cap rate analysis for 2–10 unit properties</div>
              </a>
              <a href="/tools/free-ai-rental-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Rental Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full buy-and-hold analysis with cap rate + CoC</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Calculate your cap rate now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to calculate cap rate for a property'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
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