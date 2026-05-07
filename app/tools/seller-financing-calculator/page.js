'use client';
import { useState } from 'react';
import Head from 'next/head';

export default function SellerFinancingCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a deal using seller financing');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Seller Financing Calculator",
        "url": "https://freedealcalc.com/tools/seller-financing-calculator",
        "description": "Free AI-powered seller financing calculator for real estate investors. Analyze creative finance deals instantly.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is seller financing in real estate?", "acceptedAnswer": { "@type": "Answer", "text": "Seller financing (owner financing) is when the property seller acts as the lender, allowing the buyer to make payments directly to them instead of getting a traditional bank loan. The seller holds the note and deed of trust." } },
          { "@type": "Question", "name": "How do I calculate a seller financing deal?", "acceptedAnswer": { "@type": "Answer", "text": "Key inputs include purchase price, down payment, interest rate, amortization period, and balloon payment date. Freddie AI calculates monthly payments, total interest paid, cash-on-cash return, and deal score instantly." } },
          { "@type": "Question", "name": "What interest rate is typical for seller financing?", "acceptedAnswer": { "@type": "Answer", "text": "Seller financing rates typically range from 4–8%, often below hard money but above conventional rates. The rate is negotiable between buyer and seller, making it flexible for creative deals." } },
          { "@type": "Question", "name": "Is seller financing better than hard money?", "acceptedAnswer": { "@type": "Answer", "text": "For buy-and-hold investors, seller financing often beats hard money because rates are lower, terms are flexible, and there are no origination points. For short flips, hard money may be faster and simpler." } },
          { "@type": "Question", "name": "What is a balloon payment in seller financing?", "acceptedAnswer": { "@type": "Answer", "text": "A balloon payment is a lump-sum due at the end of the seller financing term (often 3–7 years). At that point, the buyer typically refinances with a conventional lender. Freddie models balloon scenarios automatically." } },
          { "@type": "Question", "name": "Can seller financing work for wholesale deals?", "acceptedAnswer": { "@type": "Answer", "text": "Rarely — wholesale deals are fast cash closes. Seller financing works better for buy-and-hold, BRRRR, or subject-to hybrids where the investor plans to hold the property long enough to justify the note structure." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Seller Financing Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate seller financing deals instantly with AI. Analyze monthly payments, balloon terms, cash-on-cash return, and deal score — free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/seller-financing-calculator" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>

      <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#F0F2F5', minHeight: '100vh' }}>
        {/* NAV */}
        <nav style={{ background: '#0f1c2d', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 22, color: '#fff', textDecoration: 'none' }}>FreeDealCalc</a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="/freddie" style={{ color: '#ccc', textDecoration: 'none', fontSize: 14 }}>Try Freddie</a>
            <a href="/pricing" style={{ color: '#ccc', textDecoration: 'none', fontSize: 14 }}>Pricing</a>
            <a href="/signup" style={{ background: '#00C27C', color: '#fff', padding: '8px 16px', borderRadius: 6, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Sign Up Free</a>
          </div>
        </nav>

        {/* HERO */}
        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: '#00C27C', color: '#fff', fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 4, marginBottom: 20, letterSpacing: 1 }}>
            STOP PAYING. START WINNING.
          </div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>
            Free Seller Financing Calculator
          </h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>
            Analyze owner-financing terms, monthly payments, balloon dates, and deal score — in seconds, with AI, completely free.
          </p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your seller financing deal:</p>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="e.g. Seller wants $280K, willing to carry 80% at 6% for 5 years with balloon. ARV is $340K."
              style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }}
            />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>
              Analyze This Deal →
            </button>
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '💳', title: 'Payment Modeling', desc: 'Monthly payment calculation for any seller carry scenario — P&I, interest-only, or hybrid.' },
              { icon: '📅', title: 'Balloon Planner', desc: 'Model 3, 5, and 7-year balloon terms side by side. Know exactly when you need to refi.' },
              { icon: '📈', title: 'Cash-on-Cash Return', desc: 'True CoC return based on your actual down payment — not full purchase price.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Freddie scores every deal A–F so you know at a glance whether the terms pencil.' },
              { icon: '📄', title: 'Seller Proposals', desc: 'Generate a professional proposal PDF to present your offer to the seller.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core analysis is always free. No credit card. No trial. No catch.' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: 8, color: '#0f1c2d' }}>{f.title}</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROOF STORY */}
        <section style={{ background: '#fff', padding: '64px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>
              Why the seller wouldn't carry — and how we paid cash for $210K instead
            </h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>
              When we found a hoarder house in Northern Virginia, the seller's attorney flat out said no to carrying a note. The property was too distressed, the seller too motivated — they needed clean cash to settle an estate. So we brought hard money, closed fast, and exited via wholetail 30 days later at $349K. No seller financing. No renovation. Just a fast cash acquisition and a clean resale. Here's exactly how it scored.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia hoarder house before cleanup" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
                Freddie scored this deal <strong>100/100</strong>. Even without seller financing, the cash acquisition at $210K with a 30-day hold and $349K resale is about as clean as a Northern Virginia deal gets. The lesson: when seller financing isn't available, speed and cash still win.
              </p>
            </div>
          </div>
        </section>

        {/* PULL QUOTE */}
        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>
              "Seller financing lesson: the best terms in the world don't matter if the seller won't carry. Know when to pivot to cash — and have the tool to model both options instantly."
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Seller Financing FAQ</h2>
          {[
            ['What is seller financing in real estate?', 'Seller financing (owner financing) is when the property seller acts as the lender, allowing the buyer to make payments directly to them instead of getting a traditional bank loan. The seller holds the note and deed of trust.'],
            ['How do I calculate a seller financing deal?', "Key inputs include purchase price, down payment, interest rate, amortization period, and balloon payment date. Freddie AI calculates monthly payments, total interest paid, cash-on-cash return, and deal score instantly."],
            ['What interest rate is typical for seller financing?', 'Seller financing rates typically range from 4–8%, often below hard money but above conventional rates. The rate is negotiable between buyer and seller, making it flexible for creative deals.'],
            ['Is seller financing better than hard money?', 'For buy-and-hold investors, seller financing often beats hard money because rates are lower, terms are flexible, and there are no origination points. For short flips, hard money may be faster and simpler.'],
            ['What is a balloon payment in seller financing?', 'A balloon payment is a lump-sum due at the end of the seller financing term (often 3–7 years). At that point, the buyer typically refinances with a conventional lender. Freddie models balloon scenarios automatically.'],
            ['Can seller financing work for wholesale deals?', 'Rarely — wholesale deals are fast cash closes. Seller financing works better for buy-and-hold, BRRRR, or subject-to hybrids where the investor plans to hold the property long enough to justify the note structure.'],
          ].map(([q, a], i) => (
            <details key={i} style={{ borderBottom: '1px solid #e0e0e0', padding: '16px 0' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', color: '#0f1c2d', fontSize: 15 }}>{q}</summary>
              <p style={{ color: '#555', marginTop: 10, lineHeight: 1.7, fontSize: 14 }}>{a}</p>
            </details>
          ))}
        </section>

        {/* MORE TOOLS */}
        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 28, color: '#0f1c2d', marginBottom: 20 }}>More free tools</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <a href="/tools/subject-to-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Subject-To Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Compare sub-to vs seller carry on the same deal</div>
              </a>
              <a href="/tools/hard-money-loan-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Hard Money Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Model hard money when seller won't carry</div>
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Run your seller financing deal now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a seller financing deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>
            Talk to Freddie →
          </button>
        </section>

        {/* FOOTER */}
        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}