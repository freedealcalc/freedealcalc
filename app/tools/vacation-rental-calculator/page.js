'use client';
import { useState } from 'react';

export default function VacationRentalCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a vacation rental property deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Vacation Rental Calculator",
        "url": "https://freedealcalc.com/tools/vacation-rental-calculator",
        "description": "Free AI vacation rental calculator. Analyze STR revenue, occupancy, expenses, and ROI for vacation rental properties — free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "How do I calculate vacation rental income?", "acceptedAnswer": { "@type": "Answer", "text": "Vacation rental revenue = average nightly rate × occupied nights. Net income = gross revenue minus platform fees (3%), property management (15-25%), cleaning fees collected vs paid, utilities, insurance, maintenance, and supplies. Freddie models all of it." } },
          { "@type": "Question", "name": "What occupancy rate should I assume for a vacation rental?", "acceptedAnswer": { "@type": "Answer", "text": "Occupancy varies dramatically by location and season. Coastal and mountain markets with strong tourism see 65-80%+ in peak season but may drop to 30-40% off-peak. Annual average of 55-65% is realistic for most established vacation markets." } },
          { "@type": "Question", "name": "Is vacation rental better than long-term rental?", "acceptedAnswer": { "@type": "Answer", "text": "In tourist markets, vacation rental can generate 2-3x long-term rental income. However, STR has higher management complexity, more wear and tear, seasonal cash flow variance, and significant regulatory risk. Always model both." } },
          { "@type": "Question", "name": "What regulations affect vacation rentals?", "acceptedAnswer": { "@type": "Answer", "text": "Many markets require STR permits, impose night caps, mandate owner-occupancy, or restrict rentals in residential zones. HOAs often ban STR entirely. Regulatory risk is the #1 reason vacation rental projections fail — Freddie flags it." } },
          { "@type": "Question", "name": "How much does vacation rental management cost?", "acceptedAnswer": { "@type": "Answer", "text": "Full-service vacation rental management runs 20-30% of gross revenue. Self-management with a cleaning service runs 8-12%. Factor in both scenarios — Freddie models the difference in net returns." } },
          { "@type": "Question", "name": "Can I flip a property and then use it as a vacation rental?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — a flip-to-STR strategy can work in strong vacation markets. Renovate to vacation rental standards, list immediately after completion. Freddie models the flip ROI and ongoing STR cash flow together." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Vacation Rental Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate vacation rental revenue, occupancy, expenses, and ROI with AI. Free STR analysis — compare against long-term rental and flip exits." />
        <link rel="canonical" href="https://freedealcalc.com/tools/vacation-rental-calculator" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Vacation Rental Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>Model vacation rental revenue, occupancy, and net return — then compare it against a flip or long-term rental to find your best exit.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your vacation rental:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. Beach cottage in OBX, purchase $480K, nightly rate $275, 65% occupancy, 20% management. Better than long-term rental?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze This Vacation Rental →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏖️', title: 'STR Revenue Model', desc: 'Nightly rate × occupancy with conservative, moderate, and peak-season scenarios.' },
              { icon: '📉', title: 'True Expense Breakdown', desc: 'Platform fees, management, cleaning, utilities, insurance, and maintenance — all included.' },
              { icon: '⚖️', title: 'STR vs Long-Term Compare', desc: 'Side-by-side comparison so you know whether vacation rental beats a standard tenant in your market.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Freddie grades your vacation rental deal A–F before you put money down.' },
              { icon: '⚠️', title: 'Regulatory Risk Flag', desc: 'Freddie flags STR regulatory risk in your market — the #1 reason vacation rental projections fail.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core analysis permanently free. No credit card.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>Why a suburban hoarder house isn't a vacation rental — and what we did instead</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Location is everything for vacation rentals. This Northern Virginia hoarder house was in a suburban residential neighborhood with zero tourism draw. No waterfront, no mountains, no destination appeal. Even after a full renovation, nightly rates would have been $110–$130 at 55% occupancy — roughly $22K gross annually. Operating costs would have eaten half. Compare that to our wholetail exit: $115,050 in 30 days. Some properties are vacation rentals. This one was a flip. Freddie scored it 100/100 and the vacation rental math confirmed the decision.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia hoarder house before" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored the wholetail <strong>100/100</strong>. The vacation rental analysis ruled out that exit in seconds — freeing us to focus on the strategy that actually won.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Vacation rental lesson: the best vacation rental calculator tells you no just as quickly as it tells you yes. Know when the location doesn't support STR before you buy."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Vacation Rental FAQ</h2>
          {[
            ['How do I calculate vacation rental income?', 'Vacation rental revenue = average nightly rate × occupied nights. Net income = gross revenue minus platform fees (3%), property management (15-25%), cleaning fees collected vs paid, utilities, insurance, maintenance, and supplies. Freddie models all of it.'],
            ['What occupancy rate should I assume for a vacation rental?', 'Occupancy varies dramatically by location and season. Coastal and mountain markets with strong tourism see 65-80%+ in peak season but may drop to 30-40% off-peak. Annual average of 55-65% is realistic for most established vacation markets.'],
            ['Is vacation rental better than long-term rental?', 'In tourist markets, vacation rental can generate 2-3x long-term rental income. However, STR has higher management complexity, more wear and tear, seasonal cash flow variance, and significant regulatory risk. Always model both.'],
            ['What regulations affect vacation rentals?', 'Many markets require STR permits, impose night caps, mandate owner-occupancy, or restrict rentals in residential zones. HOAs often ban STR entirely. Regulatory risk is the #1 reason vacation rental projections fail — Freddie flags it.'],
            ['How much does vacation rental management cost?', 'Full-service vacation rental management runs 20-30% of gross revenue. Self-management with a cleaning service runs 8-12%. Factor in both scenarios — Freddie models the difference in net returns.'],
            ['Can I flip a property and then use it as a vacation rental?', 'Yes — a flip-to-STR strategy can work in strong vacation markets. Renovate to vacation rental standards, list immediately after completion. Freddie models the flip ROI and ongoing STR cash flow together.'],
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
              <a href="/tools/airbnb-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Airbnb Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Platform-specific STR analysis for Airbnb listings</div>
              </a>
              <a href="/tools/rental-income-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Rental Income Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Compare long-term rental against your STR numbers</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Analyze your vacation rental now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a vacation rental property deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
