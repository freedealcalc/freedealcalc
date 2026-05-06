'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is a real estate deal analyzer?',
    a: "A real estate deal analyzer is a tool that runs the numbers on a potential investment property — purchase price, rehab budget, ARV, holding costs, financing, and exit strategy — and tells you whether the deal is worth pursuing. FreeDealCalc's AI deal analyzer, Freddie, walks you through the inputs in plain English and produces a 0-100 score along with profit, ROI, and margin estimates."
  },
  {
    q: 'Is FreeDealCalc actually free?',
    a: "Yes. Anyone can run unlimited deals through Freddie and see their score on screen at no cost. Free registered users also get monthly Seller Proposals, Disposition Packages, and Score Certificates. There's no credit card required to start."
  },
  {
    q: 'How is this different from DealCheck or BiggerPockets calculators?',
    a: "DealCheck is a paid form-based calculator. BiggerPockets calculators are member-only and require a Pro subscription for full access. FreeDealCalc is the only conversational AI deal analyzer — you describe the deal in plain language and Freddie asks the right follow-up questions. It's also free, generates Seller Proposals and Disposition Packages no other tool produces, and was built by an active investor and licensed agent with 20+ years in the field."
  },
  {
    q: 'What deal strategies does Freddie support?',
    a: 'Fix and flip, BRRRR, traditional rental, and wholesale. Freddie adapts the questions and the scoring based on which strategy you tell him you are running. You can also analyze wholetail and creative finance deals through the flip and wholesale flows.'
  },
  {
    q: 'Do I need to create an account?',
    a: "No account is required to run a deal and see your score. A free account is needed to save deals to your dashboard and unlock the document generators (Score Certificate, Seller Proposal, and Disposition Package)."
  },
  {
    q: 'How accurate is the deal score?',
    a: "Freddie scores deals on a 100-point scale weighted across margin, ROI, and rehab ratio. The model is calibrated against thousands of real flip and rental deals, including the founder's own 20+ years of fix-and-flip transactions. The score is a starting point — investor judgment, market knowledge, and due diligence still matter, and the platform is designed to help you make a faster, more informed first decision."
  },
];

export default function FreeAIDealAnalyzerPage() {
  const [input, setInput] = useState('');

  function handleAnalyze() {
    const trimmed = input.trim();
    if (typeof window !== 'undefined') {
      try {
        if (trimmed) sessionStorage.setItem('fdc_seed_message', trimmed);
        else sessionStorage.removeItem('fdc_seed_message');
      } catch (e) {}
    }
    window.location.href = '/freddie';
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAnalyze();
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'FreeDealCalc — Free AI Real Estate Deal Analyzer',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free AI-powered real estate deal analyzer for fix and flip, BRRRR, rental, and wholesale investors. Talk to Freddie, get a 0-100 score, and unlock Seller Proposals and Disposition Packages.',
    url: 'https://freedealcalc.com/tools/free-ai-deal-analyzer',
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Instrument+Serif:ital@1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; color: #0f1c2d; background: #f0f2f5; }
        a { color: inherit; text-decoration: none; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .h1 { font-size: 44px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; }
        .h2 { font-size: 30px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; }
        .serif-italic { font-family: 'Instrument Serif', Georgia, serif; font-style: italic; font-weight: 400; }
        @media (max-width: 720px) {
          .h1 { font-size: 32px; }
          .h2 { font-size: 24px; }
          .deal-grid { grid-template-columns: 1fr !important; }
        }
        .btn-primary { display: inline-block; padding: 14px 24px; background: #00C27C; color: white; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; border: none; font-family: inherit; transition: transform 0.1s; }
        .btn-primary:hover { transform: translateY(-1px); }
        .btn-ghost { display: inline-block; padding: 12px 22px; background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.15); color: white; border-radius: 11px; font-size: 14px; font-weight: 600; }
        .check { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: rgba(0,194,124,0.12); color: #00C27C; flex-shrink: 0; }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      {/* Top Nav */}
      <nav style={{ background: '#0f1c2d', height: '60px', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <a href="/" className="serif-italic" style={{ fontSize: '22px', color: 'white' }}>
            FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
          </a>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8' }}>Try Freddie</a>
            <a href="/pricing" style={{ fontSize: '13px', color: '#94a8b8' }}>Pricing</a>
            <a href="/signup" style={{ fontSize: '13px', color: 'white', padding: '8px 16px', background: '#00C27C', borderRadius: '8px', fontWeight: '600' }}>Sign Up Free</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: '#0f1c2d', color: 'white', padding: '64px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(0,194,124,0.15)', border: '1px solid rgba(0,194,124,0.3)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Stop Paying. Start Winning.
          </div>
          <h1 className="h1" style={{ color: 'white', marginBottom: '18px', maxWidth: '780px' }}>
            Free AI <span className="serif-italic" style={{ color: '#00C27C' }}>real estate deal analyzer</span>. Talk to Freddie. Get a score.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '680px' }}>
            Describe your deal in plain English. Freddie asks the right questions, runs the numbers, and gives you a 0-100 score with profit, ROI, and margin in under 60 seconds. No credit card. No signup wall to see your score.
          </p>

          {/* Mini Freddie input */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '20px', maxWidth: '720px', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#0f1c2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontSize: '16px', color: '#00C27C', fontFamily: 'Georgia, serif' }}>F</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d' }}>Freddie</div>
                <div style={{ fontSize: '12px', color: '#5a7184' }}>AI Deal Analyst · Online</div>
              </div>
            </div>

            <div style={{ background: '#f0f2f5', borderRadius: '12px', padding: '12px 14px', marginBottom: '12px', fontSize: '14px', color: '#0f1c2d' }}>
              Hey, I'm Freddie. Tell me about your deal — what strategy, what numbers, where is it?
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="e.g. Flip in Manassas VA, $295k purchase, $39k rehab, $500k ARV"
                rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }}
              />
              <button onClick={handleAnalyze} aria-label="Analyze deal" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>

            <button onClick={handleAnalyze} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>
              Analyze My Deal Free →
            </button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · No signup required to see your score</div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>What you get — <span className="serif-italic" style={{ color: '#00C27C' }}>free</span></h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '640px' }}>
            Every tool below is free for registered users. No paid tier required. No credit card.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Conversational AI Analyst', d: 'Talk to Freddie like you would talk to a partner. He pulls the numbers out and runs the math while you describe the deal.' },
              { t: '0-100 Deal Score', d: 'A single number that captures margin, ROI, and rehab ratio. Strong deals score 75+. Weak deals tell you to walk.' },
              { t: 'Score Certificate PDF', d: 'A shareable, printable Score Certificate to send to lenders, partners, or buyers. Built into the free tier.' },
              { t: 'Seller Proposal Generator', d: 'Turn any analyzed deal into a professional offer letter you can send to a homeowner. Most platforms charge for this. Freddie does it free.' },
              { t: 'Disposition Package Builder', d: 'Wholesalers — generate a buyer-ready dispo package with the score, ARV, and rehab built in. Send it the moment you go under contract.' },
              { t: 'Four Strategies Supported', d: 'Fix and flip, BRRRR, rental, wholesale. Freddie adapts to your strategy and asks the right questions for each.' },
            ].map((f, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '14px', padding: '22px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div className="check" style={{ marginBottom: '12px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '6px' }}>{f.t}</div>
                <div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.55' }}>{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '40px' }}>How it works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { n: '01', t: 'Describe your deal', d: 'Tell Freddie what you have. Address, strategy, purchase price, rehab — type it however you want. He pulls the numbers out.' },
              { n: '02', t: 'Freddie does the math', d: 'Margin, ROI, holding costs, loan costs if hard money, the 70% rule check — all of it. Calibrated against thousands of real deals.' },
              { n: '03', t: 'Get your score', d: 'A single 0-100 number plus profit, ROI, and margin. Save the deal, generate documents, send to buyers or lenders.' },
            ].map((s, i) => (
              <div key={i} style={{ borderTop: '3px solid #00C27C', paddingTop: '18px' }}>
                <div className="serif-italic" style={{ fontSize: '32px', color: '#00C27C', marginBottom: '6px' }}>{s.n}</div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>{s.t}</div>
                <div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.55' }}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>FreeDealCalc vs. the others</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '32px', maxWidth: '640px' }}>
            Most deal analyzers are paid form-fillers. Freddie is conversational, free, and built by an active investor.
          </p>

          <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px' }}>
                <thead>
                  <tr style={{ background: '#0f1c2d', color: 'white' }}>
                    <th style={{ textAlign: 'left', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>Feature</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '700', color: '#00C27C' }}>FreeDealCalc</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>DealCheck</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>BiggerPockets</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>Privy</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '13.5px' }}>
                  {[
                    ['Free to use', '✓', '$20/mo', 'Pro tier', '$97/mo'],
                    ['Conversational AI analyst', '✓', '—', '—', '—'],
                    ['Flip / BRRRR / Rental / Wholesale', '✓', '✓', 'Flip & Rental', 'Flip'],
                    ['Score Certificate PDF', '✓', '—', '—', '—'],
                    ['Seller Proposal generator', '✓', '—', '—', '—'],
                    ['Disposition Package builder', '✓', '—', '—', '—'],
                    ['Built by active investor', '✓', '—', '✓', '—'],
                  ].map(([feature, fdc, dc, bp, p], i) => (
                    <tr key={i} style={{ borderTop: '1px solid #f0f2f5' }}>
                      <td style={{ padding: '12px 20px', color: '#0f1c2d', fontWeight: '500' }}>{feature}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: fdc === '✓' ? '#00C27C' : '#0f1c2d', fontWeight: fdc === '✓' ? '700' : '500' }}>{fdc}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: '#5a7184' }}>{dc}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: '#5a7184' }}>{bp}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: '#5a7184' }}>{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ fontSize: '11px', color: '#94a8b8', marginTop: '12px' }}>
            Pricing reflects publicly listed plans at time of publication. Always check the source for current pricing.
          </div>
        </div>
      </section>

      {/* REAL DEAL EXAMPLE — Wholetail */}
      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '5px 10px', background: 'rgba(0,194,124,0.1)', border: '1px solid rgba(0,194,124,0.2)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>
            Real deal · Real numbers
          </div>
          <h2 className="h2" style={{ marginBottom: '12px', maxWidth: '760px' }}>
            How a Northern Virginia <span className="serif-italic" style={{ color: '#00C27C' }}>hoarder house</span> became a $115K wholetail flip — without renovating a thing.
          </h2>
          <p style={{ fontSize: '16px', color: '#5a7184', lineHeight: '1.6', marginBottom: '32px', maxWidth: '720px' }}>
            Most investors would walk past a hoarder house. The numbers told a different story. We bought it for $210K, paid $5K for a cleanout, and sold it as-is one month later for $349K. Freddie scored it 100/100. The next investor — a flipper who bought it from us — did the full renovation you see in the after photo and made money on the other side. That's the wholetail play.
          </p>

          {/* Before / After image grid */}
          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #1a2942 0%, #0f1c2d 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-before.jpg" alt="Hoarder house kitchen before cleanout, Northern Virginia wholetail deal — purchased $210,000" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Before · As-purchased</div>
            </div>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #00C27C 0%, #009d63 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="Same Northern Virginia property after renovation — completed by the next investor who purchased it from us as-is" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>After · Buyer's renovation</div>
            </div>
          </div>

          {/* Attribution caption — under both images */}
          <p style={{ fontSize: '12.5px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '28px', fontStyle: 'italic' }}>
            We sold the property in as-is condition after the cleanout for $349K. The renovation pictured was completed by the buyer who purchased it from us. The $115,050 profit reflects our wholetail exit, not the renovation work.
          </p>

          {/* Numbers + score circle */}
          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 220px', gap: '24px', alignItems: 'center', background: '#f0f2f5', borderRadius: '16px', padding: '28px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '14px' }}>The Numbers (Wholetail Exit)</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                {[
                  ['Purchase', '$210,000'],
                  ['Cleanout cost', '$5,000'],
                  ['Sale price', '$349,000'],
                  ['Hold time', '1 month'],
                  ['Strategy', 'Wholetail'],
                  ['Net profit', '$115,050'],
                ].map(([k, v], i) => (
                  <div key={i}>
                    <div style={{ fontSize: '11px', color: '#5a7184', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{k}</div>
                    <div style={{ fontSize: '17px', fontWeight: '700', color: '#0f1c2d' }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: 'white', border: '8px solid #00C27C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(0,194,124,0.18)' }}>
                <div style={{ fontSize: '52px', fontWeight: '700', color: '#00C27C', lineHeight: 1 }}>100</div>
                <div style={{ fontSize: '10px', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>Freddie Score</div>
              </div>
              <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '10px', textAlign: 'center' }}>Strong Deal</div>
            </div>
          </div>

          {/* Wholetail explainer pull-quote */}
          <div style={{ marginTop: '24px', padding: '20px 24px', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: '8px', color: 'white' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '8px' }}>What is wholetail?</div>
            <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#cfd9e3' }}>
              Wholetail is the play between wholesaling and full flipping. You buy distressed, do little or no renovation, and resell as-is to a flipper or owner-occupant who wants the project. Less risk, less time, less capital tied up. The next operator gets a real project to work. Both sides win.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Common questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((f, i) => (
              <details key={i} style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <summary style={{ fontSize: '15px', fontWeight: '600', color: '#0f1c2d', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '14px' }}>
                  <span>{f.q}</span>
                  <span style={{ color: '#00C27C', fontSize: '20px', fontWeight: '300', flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.65', marginTop: '12px' }}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>
            Run your first deal <span className="serif-italic" style={{ color: '#00C27C' }}>free</span>.
          </h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>
            No credit card. No signup wall to see your score. Just type your deal and let Freddie do the math.
          </p>
          <a href="/freddie" className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>
            Talk to Freddie →
          </a>
          <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>
            Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> to save your deals.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0f1c2d', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '32px 0', color: '#94a8b8', fontSize: '13px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div className="serif-italic" style={{ fontSize: '18px', color: 'white' }}>FreeDeal<span style={{ color: '#00C27C' }}>Calc</span></div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <a href="/freddie">Freddie</a>
            <a href="/pricing">Pricing</a>
            <a href="/partners">Partners</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}