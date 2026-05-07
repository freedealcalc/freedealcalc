'use client';
import { useState } from 'react';

export default function InvestmentPropertyCalculatorPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze an investment property');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Investment Property Calculator",
        "url": "https://freedealcalc.com/tools/investment-property-calculator",
        "description": "Free AI investment property calculator. Analyze flip, rental, BRRRR, and wholesale deals with deal score, ROI, and cash flow — free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is an investment property calculator?", "acceptedAnswer": { "@type": "Answer", "text": "An investment property calculator analyzes the financial performance of a real estate deal. It takes inputs like purchase price, rehab costs, ARV, rent, and expenses — then outputs profit, ROI, cash flow, and deal score so you can decide before you buy." } },
          { "@type": "Question", "name": "What metrics should I calculate for an investment property?", "acceptedAnswer": { "@type": "Answer", "text": "Key metrics include: net profit, ROI, cash-on-cash return, cap rate, monthly cash flow, ARV cushion, and deal score. The right metrics depend on your exit strategy — flip, rental, BRRRR, or wholesale." } },
          { "@type": "Question", "name": "How do I know if an investment property is a good deal?", "acceptedAnswer": { "@type": "Answer", "text": "A good deal meets your target return threshold for the strategy. For flips: 20%+ ROI. For rentals: 8%+ cash-on-cash. For wholesale: minimum $10-15K assignment fee. Freddie scores every deal 0-100 so you know instantly." } },
          { "@type": "Question", "name": "What is ARV and why does it matter?", "acceptedAnswer": { "@type": "Answer", "text": "ARV (After Repair Value) is the estimated market value of the property after all renovations are complete. It's the foundation of every investment property analysis — your purchase price, rehab budget, and exit strategy all anchor to ARV." } },
          { "@type": "Question", "name": "Can I analyze multiple exit strategies on the same property?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Freddie models flip, rental, BRRRR, and wholesale on the same property simultaneously. You see which exit produces the best return before committing to a strategy." } },
          { "@type": "Question", "name": "Is FreeDealCalc really free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Core deal analysis — including Freddie AI chat, deal scoring, and Score Certificates — is permanently free. No credit card, no trial period, no expiration." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Investment Property Calculator | FreeDealCalc</title>
        <meta name="description" content="Analyze any investment property with AI. Flip, rental, BRRRR, wholesale — get profit, ROI, cash flow, and deal score instantly. Free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/investment-property-calculator" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Investment Property Calculator</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 560, margin: '0 auto 36px' }}>Analyze any deal — flip, rental, BRRRR, or wholesale. AI-powered profit, ROI, cash flow, and deal score in seconds.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your investment property:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. 3BR in Northern Virginia, asking $275K, needs $35K rehab, ARV $380K. Is this a good flip or should I rent it?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze This Property →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏠', title: 'All 4 Exit Strategies', desc: 'Flip, rental, BRRRR, and wholesale analyzed on the same property — pick the exit that wins.' },
              { icon: '📊', title: 'Full Financial Model', desc: 'Profit, ROI, cash-on-cash, cap rate, ARV cushion, and monthly cash flow in one analysis.' },
              { icon: '🤖', title: 'Freddie AI Analyst', desc: 'Ask questions in plain English. Freddie runs the numbers and explains what they mean.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Every property gets an A–F grade so you know at a glance whether it\'s worth pursuing.' },
              { icon: '📄', title: 'Score Certificates', desc: 'Shareable PDF of your deal analysis to send to partners, lenders, or buyers.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core analysis permanently free. No credit card. No expiration.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>The investment property that scored 100/100 — and why the numbers made the decision easy</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Every investor faces the same question on a distressed property: flip, rent, or wholesale? On this Northern Virginia hoarder house, Freddie modeled all three. Rental cash flow was thin at the $210K acquisition price. A full flip would have required $50-60K in rehab and 4-6 months. Wholetail — buy, clean out, sell as-is — returned $115,050 in 30 days. The investment property calculator made the decision obvious before we ever closed.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Investment property before — Northern Virginia hoarder house" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored this investment property <strong>100/100</strong>. The best investment property calculator doesn't just crunch numbers — it tells you which exit strategy wins before you commit.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Investment property lesson: the right calculator doesn't just tell you the numbers — it tells you which strategy wins on that specific property in that specific market."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Investment Property FAQ</h2>
          {[
            ['What is an investment property calculator?', 'An investment property calculator analyzes the financial performance of a real estate deal. It takes inputs like purchase price, rehab costs, ARV, rent, and expenses — then outputs profit, ROI, cash flow, and deal score so you can decide before you buy.'],
            ['What metrics should I calculate for an investment property?', 'Key metrics include: net profit, ROI, cash-on-cash return, cap rate, monthly cash flow, ARV cushion, and deal score. The right metrics depend on your exit strategy — flip, rental, BRRRR, or wholesale.'],
            ['How do I know if an investment property is a good deal?', 'A good deal meets your target return threshold for the strategy. For flips: 20%+ ROI. For rentals: 8%+ cash-on-cash. For wholesale: minimum $10-15K assignment fee. Freddie scores every deal 0-100 so you know instantly.'],
            ['What is ARV and why does it matter?', 'ARV (After Repair Value) is the estimated market value of the property after all renovations are complete. It\'s the foundation of every investment property analysis — your purchase price, rehab budget, and exit strategy all anchor to ARV.'],
            ['Can I analyze multiple exit strategies on the same property?', 'Yes. Freddie models flip, rental, BRRRR, and wholesale on the same property simultaneously. You see which exit produces the best return before committing to a strategy.'],
            ['Is FreeDealCalc really free?', 'Yes. Core deal analysis — including Freddie AI chat, deal scoring, and Score Certificates — is permanently free. No credit card, no trial period, no expiration.'],
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
              <a href="/tools/free-ai-deal-analyzer" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Deal Analyzer →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full AI analysis on any investment property</div>
              </a>
              <a href="/tools/real-estate-roi-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>ROI Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Calculate true ROI across all exit strategies</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Analyze your investment property now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze an investment property'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
