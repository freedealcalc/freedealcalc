'use client';
import { useState } from 'react';

export default function WholetailCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a wholetail deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Wholetail Calculator",
        "url": "https://freedealcalc.com/tools/wholetail-calculator",
        "description": "Free AI wholetail calculator. Analyze buy-as-is, sell-as-is deals with profit, margin, ARV cushion, and deal score — Freddie scored our $115K deal 100/100.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is wholetailing in real estate?", "acceptedAnswer": { "@type": "Answer", "text": "Wholetailing is buying a distressed property, doing minimal cleanup (no full renovation), then reselling it on the open MLS at a discount to its full ARV. It bridges the gap between wholesale and traditional flipping — faster than a flip, higher margin than wholesale assignment." } },
          { "@type": "Question", "name": "How do I calculate a wholetail deal?", "acceptedAnswer": { "@type": "Answer", "text": "Wholetail profit = Resale price minus purchase price minus acquisition costs minus cleanout costs minus holding costs minus closing costs. Freddie AI calculates all of this from your inputs and scores the deal 0–100." } },
          { "@type": "Question", "name": "What is the difference between wholesale and wholetail?", "acceptedAnswer": { "@type": "Answer", "text": "Wholesale: you assign your contract without closing — no money required, but lower spread. Wholetail: you actually close on the property, do light cleanup, and resell on the MLS for a higher price. More capital required but significantly higher profit potential." } },
          { "@type": "Question", "name": "What ARV cushion do I need for a wholetail deal?", "acceptedAnswer": { "@type": "Answer", "text": "Most investors target at least 15–20% below ARV as their resale price to attract cash buyers or rehabbers quickly. On our $115K Northern Virginia deal, we resold at about 75% of stabilized ARV — creating enough cushion for the buyer to renovate profitably." } },
          { "@type": "Question", "name": "How long does a wholetail typically take?", "acceptedAnswer": { "@type": "Answer", "text": "Well-priced wholetail deals in active markets typically close within 30–60 days. Our Northern Virginia deal closed in 30 days. Pricing right is the variable — too close to ARV and it sits." } },
          { "@type": "Question", "name": "Is wholetail better than a full flip?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on the deal. Wholetail wins when renovation is too complex, capital is limited, speed matters, or the profit margin is strong enough as-is. Full flip wins when ARV supports a larger profit after rehab. Freddie compares both scenarios." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Wholetail Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate wholetail deal profit, ARV cushion, and deal score with AI. See the exact $115K Northern Virginia deal Freddie scored 100/100 — free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/wholetail-calculator" />
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
            Free Wholetail Calculator
          </h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 600, margin: '0 auto 36px' }}>
            The exact strategy behind our $115,050 Northern Virginia deal. Analyze your wholetail — profit, ARV cushion, hold time, and deal score — free with AI.
          </p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your wholetail deal:</p>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="e.g. Distressed house, purchase $185K, cleanout $3K, ARV $290K. Plan to sell as-is for $240K. Is this a good wholetail?"
              style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }}
            />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
              Score This Wholetail →
            </button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🎯', title: 'Wholetail Profit Analysis', desc: 'Purchase + cleanout + closing costs vs resale price. True net profit in seconds.' },
              { icon: '📐', title: 'ARV Cushion Calculator', desc: 'See exactly how much below ARV your resale price lands — the #1 factor in how fast the deal moves.' },
              { icon: '⚡', title: 'Hold Time Modeling', desc: 'Model 15, 30, 45, and 60-day hold scenarios. Holding longer always costs more.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Freddie grades your wholetail A–F on profit margin, ARV cushion, and exit speed.' },
              { icon: '📄', title: 'Disposition Package', desc: 'Generate a full buyer-ready package to market your as-is property to your cash buyer list.' },
              { icon: '🔒', title: 'Free Forever', desc: 'No credit card. No trial. No catch.' },
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
              The exact $115K wholetail deal — Freddie scored it 100/100
            </h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
              A hoarder house in Northern Virginia. Estate sale. Motivated executor. The property was un-showable — years of accumulation, no updates, no renovations. We bought it for $210K, spent $5K on professional cleanout, staged it for MLS, and listed it at $349K as-is. Thirty days later we were at the closing table. No renovation. No contractors. No permits. Just a clean acquisition, a cleanout, and a disciplined resale to a buyer who wanted the renovation upside for themselves. We ran it through Freddie at every step. It scored 100/100. This is what the wholetail strategy is built for.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia hoarder house before cleanout" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
                Freddie scored this deal <strong>100/100</strong> — maximum ARV cushion, strong profit margin, and a 30-day exit. This is the template. Run your deal against it.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
              "Wholetail calculator lesson: the deal that scores 100/100 isn't magic — it's math. Buy right, price right, exit fast. Freddie shows you whether your numbers hit the standard."
            </p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Wholetail FAQ</h2>
          {[
            ['What is wholetailing in real estate?', 'Wholetailing is buying a distressed property, doing minimal cleanup (no full renovation), then reselling it on the open MLS at a discount to its full ARV. It bridges the gap between wholesale and traditional flipping — faster than a flip, higher margin than wholesale assignment.'],
            ['How do I calculate a wholetail deal?', 'Wholetail profit = Resale price minus purchase price minus acquisition costs minus cleanout costs minus holding costs minus closing costs. Freddie AI calculates all of this from your inputs and scores the deal 0–100.'],
            ['What is the difference between wholesale and wholetail?', 'Wholesale: you assign your contract without closing — no money required, but lower spread. Wholetail: you actually close on the property, do light cleanup, and resell on the MLS for a higher price. More capital required but significantly higher profit potential.'],
            ['What ARV cushion do I need for a wholetail deal?', 'Most investors target at least 15–20% below ARV as their resale price to attract cash buyers or rehabbers quickly. On our $115K Northern Virginia deal, we resold at about 75% of stabilized ARV — creating enough cushion for the buyer to renovate profitably.'],
            ['How long does a wholetail typically take?', 'Well-priced wholetail deals in active markets typically close within 30–60 days. Our Northern Virginia deal closed in 30 days. Pricing right is the variable — too close to ARV and it sits.'],
            ['Is wholetail better than a full flip?', 'It depends on the deal. Wholetail wins when renovation is too complex, capital is limited, speed matters, or the profit margin is strong enough as-is. Full flip wins when ARV supports a larger profit after rehab. Freddie compares both scenarios.'],
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
              <a href="/tools/free-ai-wholesale-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Wholesale Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Compare assignment wholesale vs wholetail profit</div>
              </a>
              <a href="/tools/cash-on-cash-return-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>CoC Return Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>See the annualized return on your wholetail capital</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Score your wholetail deal now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a wholetail deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
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