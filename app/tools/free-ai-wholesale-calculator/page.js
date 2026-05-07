'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is a wholesale real estate calculator?',
    a: "A wholesale calculator runs the numbers on an assignment deal — purchase contract price, your assignment fee, the end buyer's all-in cost, and the cash buyer's likely flip profit. FreeDealCalc's wholesale calculator, powered by Freddie, walks you through it in plain English and produces a 0-100 deal score plus a Disposition Package you can send straight to your buyer list."
  },
  {
    q: 'Is the wholesale calculator actually free?',
    a: "Yes. Anyone can run unlimited wholesale deals through Freddie at no cost. Free registered users also unlock the Disposition Package builder — a buyer-ready PDF with score, ARV, rehab, and assignment math baked in. No other free tool in this category produces a Disposition Package."
  },
  {
    q: 'How much should I assign for?',
    a: "Freddie helps you back into a defensible assignment fee. The deal has to leave enough meat on the bone for the cash buyer to make money on the flip — typically a minimum 15% margin or 20% ROI for the end buyer. If your assignment fee pushes the buyer's margin below that, the deal won't move. Freddie shows you both sides so you can price the assignment correctly."
  },
  {
    q: 'What is a Disposition Package and why do wholesalers need one?',
    a: "A Disposition Package is the buyer-facing document that closes the deal. It includes the property details, your numbers, ARV evidence, rehab estimate, and the score. Sending a polished package separates serious wholesalers from the spray-and-pray crowd. Cash buyers open them. Most platforms charge $50-200 per package. Freddie generates one free with every analyzed wholesale deal."
  },
  {
    q: 'Does this work for novation and creative finance deals?',
    a: 'Yes. Run novation, sub-to, and seller finance deals through the wholesale or flip flow depending on the exit. For novations, use the wholesale flow and tell Freddie about the spread. For sub-to, run it as a flip with the seller-finance terms baked into the loan cost. Freddie handles creative structures by understanding the cash flow, not by needing a special form.'
  },
  {
    q: 'Do I need an account to use the wholesale calculator?',
    a: 'No account is required to run a wholesale deal and see your score. A free account unlocks the Disposition Package builder and the Score Certificate, and saves your deals to a dashboard so you can track which assignments are still active.'
  },
];

export default function FreeAIWholesaleCalculatorPage() {
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
    name: 'FreeDealCalc — Free AI Wholesale Real Estate Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free AI-powered wholesale real estate calculator. Score, assignment fee math, and a free Disposition Package for your buyer list. Built for active wholesalers.',
    url: 'https://freedealcalc.com/tools/free-ai-wholesale-calculator',
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
        .check { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: rgba(0,194,124,0.12); color: #00C27C; flex-shrink: 0; }
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      <nav style={{ background: '#0f1c2d', height: '60px', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <a href="/" className="serif-italic" style={{ fontSize: '22px', color: 'white' }}>FreeDeal<span style={{ color: '#00C27C' }}>Calc</span></a>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8' }}>Try Freddie</a>
            <a href="/pricing" style={{ fontSize: '13px', color: '#94a8b8' }}>Pricing</a>
            <a href="/signup" style={{ fontSize: '13px', color: 'white', padding: '8px 16px', background: '#00C27C', borderRadius: '8px', fontWeight: '600' }}>Sign Up Free</a>
          </div>
        </div>
      </nav>

      <section style={{ background: '#0f1c2d', color: 'white', padding: '64px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(0,194,124,0.15)', border: '1px solid rgba(0,194,124,0.3)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>Stop Paying. Start Winning.</div>
          <h1 className="h1" style={{ color: 'white', marginBottom: '18px', maxWidth: '820px' }}>
            Free AI <span className="serif-italic" style={{ color: '#00C27C' }}>wholesale calculator</span>. Score, offer, & buyer package.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '700px' }}>
            Tell Freddie about your wholesale deal — purchase contract, ARV, rehab, your assignment fee — and get a 0-100 score plus a free Disposition Package you can send straight to your buyer list. Most platforms charge $50-200 per package. Freddie does it free.
          </p>

          <div style={{ background: 'white', borderRadius: '16px', padding: '20px', maxWidth: '720px', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#0f1c2d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontStyle: 'italic', fontSize: '16px', color: '#00C27C', fontFamily: 'Georgia, serif' }}>F</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d' }}>Freddie</div>
                <div style={{ fontSize: '12px', color: '#5a7184' }}>AI Deal Analyst · Online</div>
              </div>
            </div>
            <div style={{ background: '#f0f2f5', borderRadius: '12px', padding: '12px 14px', marginBottom: '12px', fontSize: '14px', color: '#0f1c2d' }}>
              Hey, I'm Freddie. Got a wholesale deal? Tell me your contract price, your assignment fee, and the buyer's exit numbers.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. Wholesale in Manassas VA, $210k contract, $15k assignment, $349k ARV" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleAnalyze} aria-label="Analyze wholesale deal" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleAnalyze} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Run My Wholesale Free →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · No signup required to see your score</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>What you get — <span className="serif-italic" style={{ color: '#00C27C' }}>free</span></h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '640px' }}>The Disposition Package alone is worth a paid subscription. Freddie gives it to wholesalers free.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Disposition Package PDF', d: 'A buyer-ready package with score, ARV, rehab estimate, your contact info, and the assignment math. Send it to cash buyers the moment you go under contract.' },
              { t: 'Assignment Fee Math', d: 'Freddie shows both sides of the deal — yours and the cash buyer\'s. You see whether your fee leaves enough meat on the bone for the deal to actually close.' },
              { t: '0-100 Wholesale Score', d: 'A single number telling you whether the deal will move. Strong wholesales score 75+. If Freddie gives it a 40, your buyers will pass too.' },
              { t: 'Buyer-Side Profit Check', d: 'Freddie runs the flip math from the cash buyer\'s perspective and shows you their estimated profit. Wholesalers who price assignments without this lose deals.' },
              { t: 'Score Certificate PDF', d: 'A separate one-pager that proves the deal is real. Send it to skeptical buyers who think every wholesaler is full of it.' },
              { t: 'Built by an Active Investor', d: '20+ years buying houses in Northern Virginia. Freddie was built by someone who has been on both sides of the wholesale table.' },
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

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '40px' }}>How the wholesale calculator works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { n: '01', t: 'Tell Freddie the contract', d: 'Your purchase contract price, your assignment fee target, the property\'s ARV and rehab estimate. Plain English works.' },
              { n: '02', t: 'Freddie scores both sides', d: 'You see your fee, the buyer\'s all-in cost, and the buyer\'s estimated flip profit. If the buyer\'s margin is too thin, you\'ll know before you start blasting.' },
              { n: '03', t: 'Send the package', d: 'Disposition Package PDF generates instantly. Forward to your buyer list, post in your Discord, drop in a Facebook group. Done.' },
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

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>FreeDealCalc vs. the other wholesale tools</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '32px', maxWidth: '640px' }}>Most wholesale tools charge for the dispo package. Freddie includes it free.</p>
          <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px' }}>
                <thead>
                  <tr style={{ background: '#0f1c2d', color: 'white' }}>
                    <th style={{ textAlign: 'left', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>Feature</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '700', color: '#00C27C' }}>FreeDealCalc</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>InvestorLift</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>Dispo Genius</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>DealCheck</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '13.5px' }}>
                  {[
                    ['Free wholesale calculator', '✓', '$2,000/qtr', '$646/mo', '$20/mo'],
                    ['Disposition Package PDF', '✓', '✓', '✓', '—'],
                    ['Conversational AI analyst', '✓', '—', '—', '—'],
                    ['Buyer-side profit check', '✓', '—', '—', '—'],
                    ['Assignment fee math', '✓', '✓', '✓', '✓'],
                    ['Score Certificate PDF', '✓', '—', '—', '—'],
                    ['Built by active investor', '✓', '✓', '—', '—'],
                  ].map(([feature, fdc, il, dg, dc], i) => (
                    <tr key={i} style={{ borderTop: '1px solid #f0f2f5' }}>
                      <td style={{ padding: '12px 20px', color: '#0f1c2d', fontWeight: '500' }}>{feature}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: fdc === '✓' ? '#00C27C' : '#0f1c2d', fontWeight: fdc === '✓' ? '700' : '500' }}>{fdc}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: '#5a7184' }}>{il}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: '#5a7184' }}>{dg}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: '#5a7184' }}>{dc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div style={{ fontSize: '11px', color: '#94a8b8', marginTop: '12px' }}>Pricing reflects publicly listed plans at time of publication. Always check the source for current pricing.</div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '5px 10px', background: 'rgba(0,194,124,0.1)', border: '1px solid rgba(0,194,124,0.2)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>Real deal · Real numbers</div>
          <h2 className="h2" style={{ marginBottom: '12px', maxWidth: '780px' }}>
            How a Northern Virginia <span className="serif-italic" style={{ color: '#00C27C' }}>hoarder house</span> moved as a wholetail — Freddie scored it 100/100.
          </h2>
          <p style={{ fontSize: '16px', color: '#5a7184', lineHeight: '1.6', marginBottom: '32px', maxWidth: '720px' }}>
            We bought a hoarder house for $210K and resold it as-is for $349K one month later — to a flipper from our buyer list. The wholetail strategy sits between wholesaling and full flipping: you take title for a quick beat, then resell as-is to the next operator. Freddie scored it 100/100 before we closed. The same logic applies to a straight assignment — only difference is whether you take title or not.
          </p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #1a2942 0%, #0f1c2d 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-before.jpg" alt="Hoarder house before cleanout, Northern Virginia wholesale deal — purchased $210,000" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Before · As-purchased</div>
            </div>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #00C27C 0%, #009d63 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="Same property after renovation by the cash buyer who purchased it from us" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>After · Buyer's renovation</div>
            </div>
          </div>

          <p style={{ fontSize: '12.5px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '28px', fontStyle: 'italic' }}>We sold the property in as-is condition for $349K. The renovation pictured was completed by the buyer who purchased it from us. The $115,050 profit reflects our wholetail exit, not the renovation work.</p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 220px', gap: '24px', alignItems: 'center', background: '#f0f2f5', borderRadius: '16px', padding: '28px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '14px' }}>The Wholetail Numbers</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                {[['Contract', '$210,000'], ['Cleanout', '$5,000'], ['Resale', '$349,000'], ['Hold time', '1 month'], ['Strategy', 'Wholetail'], ['Net profit', '$115,050']].map(([k, v], i) => (
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
                <div style={{ fontSize: '10px', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>Wholesale Score</div>
              </div>
              <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '10px', textAlign: 'center' }}>Strong Deal</div>
            </div>
          </div>

          <div style={{ marginTop: '24px', padding: '20px 24px', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: '8px', color: 'white' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '8px' }}>Wholesale lesson</div>
            <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#cfd9e3' }}>
              Wholesalers who win send polished packages to qualified buyer lists. The math has to work for both sides — yours and the cash buyer's. Freddie shows both. The Disposition Package puts your deal in front of buyers in a format they actually open.
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Common questions about the wholesale calculator</h2>
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

      <section style={{ padding: '52px 0', background: 'white' }}>
        <div className="container">
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>More free tools</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            <a href="/tools/free-ai-deal-analyzer" style={{ background: '#f0f2f5', borderRadius: '12px', padding: '18px 22px', display: 'block', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free AI Deal Analyzer →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Talk to Freddie about any deal — flip, BRRRR, rental, or wholesale.</div>
            </a>
            <a href="/tools/free-ai-flip-calculator" style={{ background: '#f0f2f5', borderRadius: '12px', padding: '18px 22px', display: 'block', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free Fix and Flip Calculator →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>For when your wholesale buyer wants to run their own flip math.</div>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Move your deal <span className="serif-italic" style={{ color: '#00C27C' }}>free</span>.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>No credit card. No paid tier required. Run the deal, generate the package, send to your buyers.</p>
          <a href="/freddie" className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Talk to Freddie →</a>
          <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> to save your deals.</div>
        </div>
      </section>

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