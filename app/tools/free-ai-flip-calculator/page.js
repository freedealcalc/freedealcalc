'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is a fix and flip calculator?',
    a: "A fix and flip calculator runs the numbers on a flip deal — purchase price, rehab budget, ARV, holding costs, financing — and tells you what your profit, ROI, and margin will look like before you close. FreeDealCalc's flip calculator, powered by Freddie, walks you through the inputs in plain English and produces a 0-100 deal score so you know whether to pull the trigger or walk away."
  },
  {
    q: 'Is the FreeDealCalc flip calculator actually free?',
    a: "Yes. Anyone can run unlimited flip deals through Freddie and see their score on screen at no cost. No credit card. Free registered users also unlock Score Certificates, Seller Proposals, and Disposition Packages — all included in the free tier. DealCheck charges $20/month for similar features. BiggerPockets locks their flip calculator behind their Pro tier."
  },
  {
    q: 'How does Freddie calculate flip profit?',
    a: 'Freddie computes net profit as ARV minus purchase price, rehab budget, buying closing costs (2% of purchase), selling closing costs (1.5% of ARV), realtor commission (2.5% of ARV), holding costs (0.5% of ARV per month), and loan costs if you are using hard money. The model is calibrated against thousands of real flips, including the founder\'s own 20+ years of fix-and-flip transactions in the Northern Virginia market.'
  },
  {
    q: 'What is the 70 percent rule and does Freddie check it?',
    a: 'The 70 percent rule is a quick screen that says you should pay no more than 70% of ARV minus rehab. So if ARV is $400,000 and rehab is $50,000, the most you should pay is $230,000. Freddie automatically runs the 70 percent rule check on every flip deal alongside the full margin and ROI math, so you see both views at once.'
  },
  {
    q: 'Does the calculator handle hard money loans?',
    a: 'Yes. Tell Freddie you are using hard money and he automatically adds 4 points origination plus 12% annualized interest into the cost stack. The score reflects the real cost of capital, not a cash-buyer fantasy. If you are using cash or conventional, Freddie skips the loan costs.'
  },
  {
    q: 'Do I need an account to use the flip calculator?',
    a: "No account is required to run a flip deal and see your score on screen. A free account unlocks the document generators (Score Certificate PDF, Seller Proposal letter, Disposition Package) and saves your deals to a dashboard so you can track your pipeline."
  },
];

export default function FreeAIFlipCalculatorPage() {
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
    name: 'FreeDealCalc — Free AI Fix and Flip Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free AI-powered fix and flip calculator. Talk to Freddie, get profit, ROI, margin, and a 0-100 deal score in under 60 seconds. Includes 70% rule check, hard money costs, and free Score Certificate.',
    url: 'https://freedealcalc.com/tools/free-ai-flip-calculator',
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
          <h1 className="h1" style={{ color: 'white', marginBottom: '18px', maxWidth: '820px' }}>
            Free AI <span className="serif-italic" style={{ color: '#00C27C' }}>fix and flip calculator</span>. Real investor numbers, in seconds.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '700px' }}>
            Tell Freddie about your flip — purchase, rehab, ARV, hard money or cash — and get profit, ROI, margin, and a 0-100 deal score. Every flip cost factored in: closing both ways, realtor commission, holding costs, hard money points and interest. The 70 percent rule check is built in.
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
              Hey, I'm Freddie. Got a flip you're looking at? Tell me purchase, rehab, ARV, and how you're financing it.
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="e.g. Flip in Manassas VA, $295k purchase, $39k rehab, $500k ARV, hard money"
                rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }}
              />
              <button onClick={handleAnalyze} aria-label="Analyze flip deal" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>

            <button onClick={handleAnalyze} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>
              Run My Flip Free →
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
            Most flip calculators charge $20-100 per month. Freddie does it all free, with deeper math and document generation no other tool offers.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Profit, ROI, Margin', d: 'Three numbers that tell you whether the flip works. Freddie shows them side by side with color-coded thresholds — green if it pencils, red if it doesn\'t.' },
              { t: '0-100 Flip Score', d: 'A single number weighted across margin, ROI, and rehab ratio. Strong flips score 75+. Marginal flips score 40-60. Walk-away flips score under 40.' },
              { t: '70% Rule Check', d: 'Freddie automatically calculates the 70 percent rule maximum offer for every deal. You see whether your purchase price is above or below the line.' },
              { t: 'Hard Money Math', d: 'Tell Freddie hard money and he factors in 4 points origination plus 12% annualized interest. The score reflects the real cost of capital.' },
              { t: 'Score Certificate PDF', d: 'A shareable, printable Score Certificate to send to lenders, partners, or buyers. Free for registered users.' },
              { t: 'Seller Proposal Letter', d: 'Turn any analyzed flip into a professional offer letter you can send to a homeowner. Most platforms charge for this. Freddie does it free.' },
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
          <h2 className="h2" style={{ marginBottom: '40px' }}>How the flip calculator works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { n: '01', t: 'Tell Freddie about the flip', d: 'Purchase price, rehab budget, ARV, hold time, financing. Type it however you want — Freddie pulls the numbers out of plain English.' },
              { n: '02', t: 'Freddie runs the full cost stack', d: 'Closing costs both ways, realtor commission, holding costs by month, hard money points and interest if applicable. The 70% rule check happens automatically.' },
              { n: '03', t: 'Get your score and your numbers', d: 'Profit, ROI, margin, and a 0-100 deal score. Save the flip, generate documents, send to your lender or your buyer.' },
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

      {/* WHAT FREDDIE FACTORS IN — flip-specific cost breakdown */}
      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>Every flip cost — <span className="serif-italic" style={{ color: '#00C27C' }}>factored in</span></h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '32px', maxWidth: '720px' }}>
            Most calculators show you a profit number that ignores half your real costs. Freddie doesn't. Here's the full cost stack on every flip.
          </p>

          <div style={{ background: 'white', borderRadius: '14px', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            {[
              { label: 'Purchase price', detail: 'Your acquisition cost, the starting line.' },
              { label: 'Rehab budget', detail: 'Materials, labor, permits, contingency. Whatever you tell Freddie.' },
              { label: 'Buying closing costs', detail: 'Calculated at 2% of purchase price — title, transfer tax, recording fees, lender fees.' },
              { label: 'Selling closing costs', detail: 'Calculated at 1.5% of ARV — your share of the sale-side fees and concessions.' },
              { label: 'Realtor commission', detail: 'Calculated at 2.5% of ARV — buyer-side commission paid by seller (you).' },
              { label: 'Holding costs', detail: 'Calculated at 0.5% of ARV per month — taxes, insurance, utilities, lawn, vacancy.' },
              { label: 'Hard money costs', detail: 'If you are using hard money: 4 points origination plus 12% annualized interest on the purchase amount, prorated to your hold time.' },
            ].map((c, i, arr) => (
              <div key={i} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: i < arr.length - 1 ? '1px solid #f0f2f5' : 'none', alignItems: 'flex-start' }}>
                <div className="check" style={{ marginTop: '2px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#0f1c2d', marginBottom: '2px' }}>{c.label}</div>
                  <div style={{ fontSize: '13.5px', color: '#5a7184', lineHeight: '1.5' }}>{c.detail}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ fontSize: '12px', color: '#94a8b8', marginTop: '14px', fontStyle: 'italic' }}>
            Defaults are based on national averages. You can override any percentage when you talk to Freddie.
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>FreeDealCalc vs. the other flip calculators</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '32px', maxWidth: '640px' }}>
            Most house flipping calculators are paid form-fillers. Freddie is conversational, free, and built by an active flipper.
          </p>

          <div style={{ background: '#f0f2f5', borderRadius: '14px', overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px', background: 'white' }}>
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
                    ['Free flip calculator', '✓', '$20/mo', 'Pro tier', '$97/mo'],
                    ['Conversational AI analyst', '✓', '—', '—', '—'],
                    ['70% rule check built in', '✓', '✓', '✓', '—'],
                    ['Hard money cost modeling', '✓', '✓', '✓', '—'],
                    ['Score Certificate PDF', '✓', '—', '—', '—'],
                    ['Seller Proposal generator', '✓', '—', '—', '—'],
                    ['Built by active flipper', '✓', '—', '✓', '—'],
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

      {/* REAL DEAL EXAMPLE — Wholetail (reused) */}
      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '5px 10px', background: 'rgba(0,194,124,0.1)', border: '1px solid rgba(0,194,124,0.2)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>
            Real flip · Real numbers
          </div>
          <h2 className="h2" style={{ marginBottom: '12px', maxWidth: '780px' }}>
            A Northern Virginia <span className="serif-italic" style={{ color: '#00C27C' }}>$115K flip</span> — Freddie scored it 100/100 before we closed.
          </h2>
          <p style={{ fontSize: '16px', color: '#5a7184', lineHeight: '1.6', marginBottom: '32px', maxWidth: '720px' }}>
            Most flippers chase the renovation. We chased the math. Bought a hoarder house for $210K, paid $5K for a cleanout, sold it as-is one month later for $349K. The $115,050 profit came from buying right, not from the renovation. The next investor — a flipper who bought it from us — did the full renovation you see in the after photo and made money on the other side. That's the wholetail flip strategy.
          </p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #1a2942 0%, #0f1c2d 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-before.jpg" alt="Hoarder house kitchen before cleanout, Northern Virginia fix and flip deal — purchased $210,000" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Before · As-purchased</div>
            </div>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #00C27C 0%, #009d63 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="Same Northern Virginia property after renovation — completed by the next flipper who purchased it from us as-is" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>After · Buyer's renovation</div>
            </div>
          </div>

          <p style={{ fontSize: '12.5px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '28px', fontStyle: 'italic' }}>
            We sold the property in as-is condition after the cleanout for $349K. The renovation pictured was completed by the buyer who purchased it from us. The $115,050 profit reflects our wholetail flip exit, not the renovation work.
          </p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 220px', gap: '24px', alignItems: 'center', background: 'white', borderRadius: '16px', padding: '28px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '14px' }}>The Flip Numbers</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                {[
                  ['Purchase', '$210,000'],
                  ['Cleanout cost', '$5,000'],
                  ['Sale price', '$349,000'],
                  ['Hold time', '1 month'],
                  ['Strategy', 'Wholetail flip'],
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
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: '#f0f2f5', border: '8px solid #00C27C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(0,194,124,0.18)' }}>
                <div style={{ fontSize: '52px', fontWeight: '700', color: '#00C27C', lineHeight: 1 }}>100</div>
                <div style={{ fontSize: '10px', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>Flip Score</div>
              </div>
              <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '10px', textAlign: 'center' }}>Strong Flip</div>
            </div>
          </div>

          <div style={{ marginTop: '24px', padding: '20px 24px', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: '8px', color: 'white' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '8px' }}>The Flip Lesson</div>
            <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#cfd9e3' }}>
              Most new flippers think the money is in the renovation. It isn't. The money is in the buy. If you buy right, almost any exit works — full reno, light cosmetics, wholetail, or assignment. If you buy wrong, no renovation will save you. Freddie's flip score is calibrated around that lesson.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Common questions about the flip calculator</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQS.map((f, i) => (
              <details key={i} style={{ background: '#f0f2f5', borderRadius: '12px', padding: '18px 22px' }}>
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

      {/* RELATED TOOLS — internal linking for SEO */}
      <section style={{ padding: '52px 0', background: '#f0f2f5' }}>
        <div className="container">
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>More free tools</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            <a href="/tools/free-ai-deal-analyzer" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free AI Deal Analyzer →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Talk to Freddie about any deal — flip, BRRRR, rental, or wholesale.</div>
            </a>
            <a href="/freddie" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #0f1c2d' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Talk to Freddie Direct →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Skip the page, go straight to the AI analyst.</div>
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>
            Run your flip <span className="serif-italic" style={{ color: '#00C27C' }}>free</span>.
          </h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>
            No credit card. No signup wall to see your score. Tell Freddie about your flip and get the math in 60 seconds.
          </p>
          <a href="/freddie" className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>
            Talk to Freddie →
          </a>
          <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>
            Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> to save your flips.
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