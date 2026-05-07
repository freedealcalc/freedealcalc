'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is a BRRRR calculator?',
    a: "BRRRR stands for Buy, Rehab, Rent, Refinance, Repeat. A BRRRR calculator runs the numbers on the full strategy — purchase price, rehab budget, ARV, rent, refinance loan amount, and the cash you pull out at refi. FreeDealCalc's BRRRR calculator, powered by Freddie, walks you through it in plain English and tells you whether you'll get all your capital back at refinance or leave money in the deal."
  },
  {
    q: 'Is the BRRRR calculator actually free?',
    a: "Yes. Anyone can run unlimited BRRRR deals at no cost. Free registered users also unlock the Score Certificate PDF — a one-page deal summary you can send to your refi lender to support the appraisal. DealCheck charges $20/month for similar BRRRR features. BiggerPockets locks their BRRRR calculator behind their Pro tier."
  },
  {
    q: 'How does Freddie calculate the BRRRR refinance?',
    a: "Freddie computes the cash-out refinance based on your post-rehab ARV and your lender's typical loan-to-value ratio (75% LTV is the common BRRRR target). The calculator shows your total invested capital (purchase + rehab + closing + holding), the refi loan proceeds, and the cash left in the deal. The goal of an infinite-return BRRRR is to pull back 100% of your invested capital at refi. Freddie tells you how close you are."
  },
  {
    q: 'What is a good BRRRR deal?',
    a: 'A strong BRRRR deal has three things at once: post-refi positive cash flow, all or most of your capital recovered at refinance, and rent that covers PITI plus reserves. Freddie scores BRRRR deals on a 100-point scale weighted across these three factors. Strong BRRRRs score 75+. If a deal scores under 50, you are likely leaving capital trapped in the property.'
  },
  {
    q: 'Does the BRRRR calculator handle hard money during the rehab phase?',
    a: 'Yes. Tell Freddie you are using hard money for the buy-and-rehab phase and he factors in 4 points origination plus 12% annualized interest until refinance. The calculator shows your true capital cost, not a cash-buyer fantasy — which matters for BRRRR because hard money costs eat into the cash you pull at refi.'
  },
  {
    q: 'Do I need an account to use the BRRRR calculator?',
    a: 'No account is required to run a BRRRR deal and see your score. A free account unlocks the Score Certificate and Seller Proposal generators, and saves your deals to a dashboard so you can compare BRRRRs across markets.'
  },
];

export default function FreeAIBRRRRCalculatorPage() {
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
    name: 'FreeDealCalc — Free AI BRRRR Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free AI-powered BRRRR calculator for real estate investors. Talk through your buy-rehab-rent-refinance-repeat deal with Freddie and see whether you pull all your capital back at refi.',
    url: 'https://freedealcalc.com/tools/free-ai-brrrr-calculator',
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
            Free AI <span className="serif-italic" style={{ color: '#00C27C' }}>BRRRR calculator</span>. Will you pull your capital back?
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '700px' }}>
            Tell Freddie about your BRRRR — purchase, rehab, rent, refi loan amount — and see whether the cash-out refinance returns all your capital or leaves money trapped in the deal. The whole BRRRR strategy lives or dies on this number. Freddie tells you straight.
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
              Hey, I'm Freddie. Walk me through your BRRRR — purchase, rehab budget, expected rent, and what you think the place will appraise for.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. BRRRR in Manassas VA, $180k purchase, $40k rehab, $2,200 rent, $290k ARV" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleAnalyze} aria-label="Analyze BRRRR deal" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleAnalyze} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Run My BRRRR Free →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · No signup required to see your score</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '40px' }}>The 5 BRRRR steps Freddie scores</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
            {[
              { letter: 'B', name: 'Buy', detail: 'Purchase below market' },
              { letter: 'R', name: 'Rehab', detail: 'Force appreciation through renovation' },
              { letter: 'R', name: 'Rent', detail: 'Stabilize with cash flow' },
              { letter: 'R', name: 'Refinance', detail: 'Cash out at 75% LTV of new ARV' },
              { letter: 'R', name: 'Repeat', detail: 'Recycle capital into the next deal' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '18px', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div className="serif-italic" style={{ fontSize: '40px', color: '#00C27C', lineHeight: 1, marginBottom: '4px' }}>{s.letter}</div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>{s.name}</div>
                <div style={{ fontSize: '12px', color: '#5a7184', lineHeight: '1.4' }}>{s.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>What you get — <span className="serif-italic" style={{ color: '#00C27C' }}>free</span></h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '640px' }}>Free for registered users. No credit card. No paid tier required.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Cash-Back-At-Refi Math', d: 'See how much of your invested capital you pull at refinance. The point of BRRRR is infinite return — Freddie tells you how close you actually get.' },
              { t: '0-100 BRRRR Score', d: 'A single number weighted across cash flow, capital recovery, and post-refi DSCR. Strong BRRRRs score 75+. Below 50 means you are leaving capital trapped.' },
              { t: 'Cash Flow Projection', d: 'Post-refi monthly cash flow after PITI, vacancy, maintenance, and management. The number that decides whether you actually want to keep the property.' },
              { t: 'Hard Money to Refi Bridge', d: 'Tell Freddie you are using hard money for the rehab phase and he models the full cost from acquisition through refinance.' },
              { t: 'Score Certificate PDF', d: 'A one-page deal summary you can send to your refi lender or partner. Helps support your appraisal value.' },
              { t: 'Built by Active Investor', d: '20+ years of fix-and-flip and rental experience in the Northern Virginia market. Freddie was built by someone who runs the strategy.' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#f0f2f5', borderRadius: '14px', padding: '22px' }}>
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

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>FreeDealCalc vs. the other BRRRR calculators</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '32px', maxWidth: '640px' }}>Most BRRRR calculators are paid form-fillers. Freddie is conversational, free, and built by an active investor.</p>
          <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px' }}>
                <thead>
                  <tr style={{ background: '#0f1c2d', color: 'white' }}>
                    <th style={{ textAlign: 'left', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>Feature</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '700', color: '#00C27C' }}>FreeDealCalc</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>DealCheck</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>BiggerPockets</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>Stessa</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '13.5px' }}>
                  {[
                    ['Free BRRRR calculator', '✓', '$20/mo', 'Pro tier', '$13/mo Pro'],
                    ['Conversational AI analyst', '✓', '—', '—', '—'],
                    ['Cash-back-at-refi math', '✓', '✓', '✓', '—'],
                    ['Hard-money-to-refi bridge', '✓', 'Limited', '—', '—'],
                    ['Score Certificate PDF', '✓', '—', '—', '—'],
                    ['BRRRR-specific score', '✓', '—', '—', '—'],
                    ['Built by active investor', '✓', '—', '✓', '—'],
                  ].map(([feature, fdc, dc, bp, st], i) => (
                    <tr key={i} style={{ borderTop: '1px solid #f0f2f5' }}>
                      <td style={{ padding: '12px 20px', color: '#0f1c2d', fontWeight: '500' }}>{feature}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: fdc === '✓' ? '#00C27C' : '#0f1c2d', fontWeight: fdc === '✓' ? '700' : '500' }}>{fdc}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: '#5a7184' }}>{dc}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: '#5a7184' }}>{bp}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: '#5a7184' }}>{st}</td>
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
          <h2 className="h2" style={{ marginBottom: '12px', maxWidth: '780px' }}>Why a Northern Virginia <span className="serif-italic" style={{ color: '#00C27C' }}>hoarder house</span> didn't become a BRRRR — and what it teaches.</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', lineHeight: '1.6', marginBottom: '32px', maxWidth: '720px' }}>
            We bought a hoarder house for $210K, paid $5K for a cleanout, and resold it as-is for $349K one month later. Freddie scored that as a 100/100 wholetail. But what if we'd run it as a BRRRR instead? The math says no. After full renovation costs of $80K and refi at 75% LTV of an $400K ARV, the cash-back-at-refi number would have been weak. Sometimes the right play isn't BRRRR. Freddie tells you which strategy fits the deal.
          </p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #1a2942 0%, #0f1c2d 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-before.jpg" alt="Hoarder house before cleanout, Northern Virginia BRRRR analysis — $210,000 purchase" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Before · As-purchased</div>
            </div>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #00C27C 0%, #009d63 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="Same property after renovation by buyer who purchased it from us" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>After · Buyer's renovation</div>
            </div>
          </div>

          <p style={{ fontSize: '12.5px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '28px', fontStyle: 'italic' }}>We sold this property as-is for $349K (a wholetail flip). The renovation pictured was completed by the buyer who purchased it from us. We share the deal here because Freddie's BRRRR score helps you avoid forcing the wrong strategy onto a deal — even on properties you could renovate.</p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 220px', gap: '24px', alignItems: 'center', background: '#f0f2f5', borderRadius: '16px', padding: '28px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '14px' }}>The Wholetail Exit (What We Did)</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                {[['Purchase', '$210,000'], ['Cleanout', '$5,000'], ['Resale', '$349,000'], ['Hold time', '1 month'], ['Strategy', 'Wholetail'], ['Net profit', '$115,050']].map(([k, v], i) => (
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
                <div style={{ fontSize: '10px', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>Wholetail Score</div>
              </div>
              <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '10px', textAlign: 'center' }}>Strong Deal</div>
            </div>
          </div>

          <div style={{ marginTop: '24px', padding: '20px 24px', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: '8px', color: 'white' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '8px' }}>BRRRR lesson</div>
            <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#cfd9e3' }}>BRRRR is the right strategy when post-refi cash flow is strong AND you pull most of your capital back. When either of those breaks down, a flip or wholetail exit usually wins. Freddie shows you all four scenarios — flip, BRRRR, rental, wholesale — for every deal you analyze, so you pick the strategy that fits the math, not the other way around.</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Common questions about the BRRRR calculator</h2>
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
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>For when the BRRRR doesn't pencil and you flip instead.</div>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Run your BRRRR <span className="serif-italic" style={{ color: '#00C27C' }}>free</span>.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>No credit card. No paid tier required. Tell Freddie about your deal and see whether the refi pulls your capital back.</p>
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