'use client';
import { useState } from 'react';

export default function RealEstateDealAnalyzerPage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a real estate deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Real Estate Deal Analyzer",
        "url": "https://freedealcalc.com/tools/real-estate-deal-analyzer",
        "description": "Free AI real estate deal analyzer. Score any deal 0-100, model all exit strategies, and generate proposals — free forever with Freddie AI.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What does a real estate deal analyzer do?", "acceptedAnswer": { "@type": "Answer", "text": "A real estate deal analyzer evaluates a property across multiple financial metrics — profit, ROI, cash flow, ARV cushion, rehab risk, and hold risk — then scores the deal so you can make fast, confident decisions. FreeDealCalc's Freddie AI does this through a natural language conversation." } },
          { "@type": "Question", "name": "How do I analyze a real estate deal quickly?", "acceptedAnswer": { "@type": "Answer", "text": "Describe your deal to Freddie in plain English: address or area, asking price, estimated rehab, and ARV. Freddie asks follow-up questions, pulls market data, and delivers a complete scored analysis in under 2 minutes — no spreadsheet required." } },
          { "@type": "Question", "name": "What makes a real estate deal good vs bad?", "acceptedAnswer": { "@type": "Answer", "text": "A good deal meets your target return for the strategy. For flips: 20%+ ROI and 25%+ ARV cushion. For rentals: 8%+ cash-on-cash return. For wholesale: $10K+ assignment fee. Freddie's 0-100 deal score benchmarks every deal against these thresholds automatically." } },
          { "@type": "Question", "name": "What is a deal score?", "acceptedAnswer": { "@type": "Answer", "text": "FreeDealCalc's deal score is a 0-100 numeric grade (A-F letter) calculated from ROI, profit margin, rehab risk, ARV cushion, and hold risk. It lets you compare deals instantly and know whether a deal clears your investment threshold." } },
          { "@type": "Question", "name": "Can one deal analyzer handle all strategies?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Freddie analyzes flip, rental, BRRRR, and wholesale on the same property simultaneously. You see all four exit strategies scored side-by-side so you can choose the best path before you commit." } },
          { "@type": "Question", "name": "Is FreeDealCalc's deal analyzer really free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Core deal analysis — Freddie AI, deal scoring, and Score Certificates — is permanently free. No credit card, no trial period, no expiration. Pro features like Seller Proposals start at $19/month." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Real Estate Deal Analyzer | FreeDealCalc</title>
        <meta name="description" content="Analyze any real estate deal with AI. Score 0-100, model all exit strategies, generate proposals — Freddie AI does it in plain English. Free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/real-estate-deal-analyzer" />
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
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Real Estate Deal Analyzer</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>Describe any deal in plain English. Freddie AI scores it 0–100, models all exit strategies, and tells you exactly what the numbers mean. Free forever.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Describe your deal to Freddie:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. Off-market 4BR in Manassas VA, asking $255K, needs kitchen and baths, ARV around $370K. Should I flip it, rent it, or wholesale it?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Analyze This Deal →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🤖', title: 'Freddie AI Analyst', desc: 'Plain English input, expert-level output. No forms, no formulas, no spreadsheets — just a conversation.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Every deal gets an A–F grade across ROI, profit, ARV cushion, rehab risk, and hold risk.' },
              { icon: '📊', title: 'All 4 Exit Strategies', desc: 'Flip, rental, BRRRR, and wholesale modeled simultaneously. Freddie recommends the best exit.' },
              { icon: '📄', title: 'Score Certificates', desc: 'Shareable PDF of your analysis — send to partners, lenders, and buyers to move faster.' },
              { icon: '🔨', title: 'Rehab Risk Grade', desc: 'Freddie scores scope complexity and estimates cost ranges. Know your rehab risk before you offer.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core deal analysis permanently free. No credit card. No trial. No catch.' },
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
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>The deal Freddie analyzed in 90 seconds — and we closed for $115,050</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>This Northern Virginia hoarder house came in on a Tuesday. We described it to Freddie: estate sale, severe hoarding condition, $210K asking, $349K ARV comps nearby. Freddie ran all four exits. Rental: 52/100. Full flip: 68/100. Wholesale: gap too wide at $210K. Wholetail: 100/100. The deal analyzer didn't just run numbers — it made the decision for us. We closed Wednesday, cleaned out Thursday, listed Friday. $349K resale, $115,050 net profit, 30 days total. That's what a real deal analyzer is supposed to do.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia real estate deal before" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
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
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored it <strong>100/100</strong>. A real deal analyzer eliminates the debate. Know the score. Make the offer. Close the deal.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Deal analyzer lesson: the best tool doesn't just confirm your instinct — it shows you the exit you hadn't considered yet. Run every strategy before you commit to one."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Real Estate Deal Analyzer FAQ</h2>
          {[
            ['What does a real estate deal analyzer do?', "A real estate deal analyzer evaluates a property across multiple financial metrics — profit, ROI, cash flow, ARV cushion, rehab risk, and hold risk — then scores the deal so you can make fast, confident decisions. FreeDealCalc's Freddie AI does this through a natural language conversation."],
            ['How do I analyze a real estate deal quickly?', 'Describe your deal to Freddie in plain English: address or area, asking price, estimated rehab, and ARV. Freddie asks follow-up questions, pulls market data, and delivers a complete scored analysis in under 2 minutes — no spreadsheet required.'],
            ['What makes a real estate deal good vs bad?', "A good deal meets your target return for the strategy. For flips: 20%+ ROI and 25%+ ARV cushion. For rentals: 8%+ cash-on-cash return. For wholesale: $10K+ assignment fee. Freddie's 0-100 deal score benchmarks every deal against these thresholds automatically."],
            ['What is a deal score?', "FreeDealCalc's deal score is a 0-100 numeric grade (A-F letter) calculated from ROI, profit margin, rehab risk, ARV cushion, and hold risk. It lets you compare deals instantly and know whether a deal clears your investment threshold."],
            ['Can one deal analyzer handle all strategies?', 'Yes. Freddie analyzes flip, rental, BRRRR, and wholesale on the same property simultaneously. You see all four exit strategies scored side-by-side so you can choose the best path before you commit.'],
            ["Is FreeDealCalc's deal analyzer really free?", "Yes. Core deal analysis — Freddie AI, deal scoring, and Score Certificates — is permanently free. No credit card, no trial period, no expiration. Pro features like Seller Proposals start at $19/month."],
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
                <div style={{ fontSize: 13, color: '#666' }}>Deep AI analysis with Rentcast market data</div>
              </a>
              <a href="/tools/real-estate-investing-software" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Investing Software →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full platform overview for serious investors</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Analyze your deal now — free</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>No credit card. No expiration. Just Freddie.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a real estate deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
