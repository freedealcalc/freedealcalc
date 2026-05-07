'use client';
import { useState } from 'react';

export default function ExchangeCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a 1031 exchange deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free 1031 Exchange Calculator",
        "url": "https://freedealcalc.com/tools/1031-exchange-calculator",
        "description": "Free AI 1031 exchange calculator. Calculate capital gains tax deferral, boot, equity requirements, and replacement property analysis — free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is a 1031 exchange?", "acceptedAnswer": { "@type": "Answer", "text": "A 1031 exchange (like-kind exchange) allows real estate investors to defer capital gains taxes by reinvesting the proceeds from a sold property into a new like-kind property. Named after IRS Section 1031, it's one of the most powerful tax strategies in real estate investing." } },
          { "@type": "Question", "name": "How do I calculate capital gains on a 1031 exchange?", "acceptedAnswer": { "@type": "Answer", "text": "Capital gains = sale price minus adjusted basis (purchase price + improvements - depreciation). If you don't exchange, you pay federal capital gains tax (0%, 15%, or 20%) plus depreciation recapture at 25%. A 1031 defers both." } },
          { "@type": "Question", "name": "What are the 1031 exchange deadlines?", "acceptedAnswer": { "@type": "Answer", "text": "You have 45 days from closing the relinquished property to identify up to 3 replacement properties. You must close on the replacement property within 180 days. Both deadlines are hard — missing either disqualifies the exchange." } },
          { "@type": "Question", "name": "What is boot in a 1031 exchange?", "acceptedAnswer": { "@type": "Answer", "text": "Boot is any cash or non-like-kind property received in the exchange. Receiving boot triggers partial taxation on the amount received. To defer all taxes, your replacement property must be of equal or greater value and you must reinvest all proceeds." } },
          { "@type": "Question", "name": "Does a 1031 exchange work for fix and flip?", "acceptedAnswer": { "@type": "Answer", "text": "Generally no. The IRS requires the relinquished property to be held for investment or business use — not for resale. Flips are treated as inventory, not investment property. 1031 exchanges are designed for rental properties and long-term holds." } },
          { "@type": "Question", "name": "Should I do a 1031 exchange or just pay the tax?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on your situation. If you have a large gain (especially with significant depreciation recapture) and want to continue investing, a 1031 makes sense. If you're exiting real estate entirely or the exchange costs exceed the tax savings, paying the tax may be better. Always consult a tax advisor." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free 1031 Exchange Calculator | FreeDealCalc</title>
        <meta name="description" content="Calculate 1031 exchange tax deferral, capital gains, boot, and replacement property requirements with AI. Free forever — not financial advice." />
        <link rel="canonical" href="https://freedealcalc.com/tools/1031-exchange-calculator" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free 1031 Exchange Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>Calculate capital gains tax deferral, boot exposure, replacement property requirements, and whether a 1031 makes sense for your deal — AI-powered, free forever.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your exchange:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. Selling rental for $420K, purchased for $180K in 2015, took $45K depreciation. Capital gains tax vs 1031 — which makes more sense?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze My 1031 →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏛️', title: 'Tax Deferral Estimate', desc: 'See how much capital gains and depreciation recapture tax you could defer with a 1031.' },
              { icon: '💰', title: 'Boot Calculator', desc: 'Understand exactly how much boot you\'d receive and what tax liability it triggers.' },
              { icon: '📐', title: 'Replacement Property Math', desc: 'Calculate the minimum replacement property value to fully defer all taxes.' },
              { icon: '⚖️', title: 'Exchange vs Pay Tax', desc: 'Side-by-side comparison of 1031 deferral vs paying the tax now — which is actually better?' },
              { icon: '📅', title: 'Deadline Tracker', desc: '45-day ID and 180-day close deadlines explained in plain English for your specific timeline.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core 1031 analysis free. Always. Note: not tax advice — consult a qualified intermediary.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>Why this Northern Virginia deal was a wholetail — not a 1031</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>A 1031 exchange requires the relinquished property to be held as an investment — not purchased for resale. This hoarder house acquisition was always a short-term flip. We bought it, cleaned it out, and sold it on the MLS 30 days later for $115,050 profit. That's a wholetail, not a rental-to-exchange. The 1031 strategy applies when you've held a rental for years and want to roll the gains into a bigger property. For a 30-day wholetail, the right tax strategy is simply having a good CPA — not a qualified intermediary. Freddie scored the deal 100/100 regardless.</p>
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored the deal <strong>100/100</strong>. Know which tax strategy applies to your deal type — 1031 is for long-term holds, not fast flips.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"1031 exchange lesson: the exchange only works if the property qualifies. Know the rules before you structure the deal — not after you're already under contract on a replacement."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>1031 Exchange FAQ</h2>
          {[
            ['What is a 1031 exchange?', 'A 1031 exchange (like-kind exchange) allows real estate investors to defer capital gains taxes by reinvesting the proceeds from a sold property into a new like-kind property. Named after IRS Section 1031, it\'s one of the most powerful tax strategies in real estate investing.'],
            ['How do I calculate capital gains on a 1031 exchange?', 'Capital gains = sale price minus adjusted basis (purchase price + improvements - depreciation). If you don\'t exchange, you pay federal capital gains tax (0%, 15%, or 20%) plus depreciation recapture at 25%. A 1031 defers both.'],
            ['What are the 1031 exchange deadlines?', 'You have 45 days from closing the relinquished property to identify up to 3 replacement properties. You must close on the replacement property within 180 days. Both deadlines are hard — missing either disqualifies the exchange.'],
            ['What is boot in a 1031 exchange?', 'Boot is any cash or non-like-kind property received in the exchange. Receiving boot triggers partial taxation on the amount received. To defer all taxes, your replacement property must be of equal or greater value and you must reinvest all proceeds.'],
            ['Does a 1031 exchange work for fix and flip?', 'Generally no. The IRS requires the relinquished property to be held for investment or business use — not for resale. Flips are treated as inventory, not investment property. 1031 exchanges are designed for rental properties and long-term holds.'],
            ['Should I do a 1031 exchange or just pay the tax?', 'It depends on your situation. If you have a large gain (especially with significant depreciation recapture) and want to continue investing, a 1031 makes sense. If you\'re exiting real estate entirely or the exchange costs exceed the tax savings, paying the tax may be better. Always consult a tax advisor.'],
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
              <a href="/tools/investment-property-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Investment Property Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Analyze the replacement property before you identify it</div>
              </a>
              <a href="/tools/free-ai-rental-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Rental Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Model your replacement rental property cash flow</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Analyze your 1031 exchange now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. Not tax advice — consult a qualified intermediary for your specific situation.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a 1031 exchange deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
