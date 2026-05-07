'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is a rehab calculator?',
    a: "A rehab calculator estimates the cost to renovate a property based on its size, condition, and the scope of work. FreeDealCalc's rehab calculator, powered by Freddie, walks through the scope in plain English and produces a defensible budget number you can use for offer math, lender conversations, or contractor scoping. It also drops that rehab number into the full deal score so you see whether the project pencils."
  },
  {
    q: 'Is the rehab calculator free?',
    a: "Yes. Freddie estimates rehab budgets at no cost. Free registered users also unlock the Score Certificate PDF — a one-page summary you can share with your contractor, lender, or partner. Most rehab software charges $40-100/month. Freddie does it free."
  },
  {
    q: 'How accurate is the rehab estimate?',
    a: 'Freddie produces a planning-grade rehab estimate based on national cost averages and the scope you describe. It is calibrated for fix-and-flip and BRRRR projects in the $20K-$150K rehab range. Use the number for offer math, deal screening, and lender pre-qualification. For binding contractor pricing, always get line-item bids from local trades — Freddie is a starting point, not a substitute.'
  },
  {
    q: 'What does "rehab ratio" mean and why does Freddie score it?',
    a: 'Rehab ratio is rehab budget divided by ARV. A ratio under 10% is light cosmetic work. 10-15% is standard fix-and-flip. 15-20% is heavy. Above 20% the math gets tight and your margin for surprises shrinks fast. Freddie weights rehab ratio into the deal score so you spot over-renovated deals before you commit.'
  },
  {
    q: 'Can I use this for a wholetail or as-is exit?',
    a: 'Yes. If your strategy is wholetail (clean it out and resell as-is), tell Freddie the cleanout cost rather than a full rehab. He will run the math without forcing renovation costs you are not actually spending. The scoring adapts to your actual exit strategy.'
  },
  {
    q: 'Do I need an account to use the rehab calculator?',
    a: 'No account is required to estimate a rehab and see your score. A free account unlocks the Score Certificate, Seller Proposal, and Disposition Package generators, and saves your projects to a dashboard.'
  },
];

export default function FreeRehabCalculatorPage() {
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
    name: 'FreeDealCalc — Free Rehab Cost Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free rehab cost calculator for real estate flippers and BRRRR investors. Estimate your renovation budget and see whether the deal pencils.',
    url: 'https://freedealcalc.com/tools/free-rehab-calculator',
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
            Free <span className="serif-italic" style={{ color: '#00C27C' }}>rehab cost calculator</span>. Estimate your flip budget in 60 seconds.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '700px' }}>
            Tell Freddie what the property looks like and what you're planning — paint and flooring, full kitchen and baths, structural — and get a defensible rehab budget you can use for your offer, your lender, and your scope of work. Most rehab software charges $40-100/month. Freddie does it free.
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
              Hey, I'm Freddie. Tell me about the property — square footage, condition, and what you're planning to renovate.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. 1800 sqft Manassas flip, dated kitchen and 2 baths, paint and floors throughout" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleAnalyze} aria-label="Estimate rehab" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleAnalyze} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Estimate Rehab Free →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · No signup required to see your score</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>What you get — <span className="serif-italic" style={{ color: '#00C27C' }}>free</span></h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '640px' }}>Estimate the rehab, drop it into the full deal score, see whether the project pencils.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Rehab Budget Estimate', d: 'A defensible rehab number based on size, condition, and scope. Use it for your offer math, lender pre-qual, or contractor scoping conversations.' },
              { t: 'Rehab Ratio Score', d: 'Freddie automatically calculates rehab as a percent of ARV — the number experienced investors look at first to spot over-renovated deals.' },
              { t: 'Drops Into Full Deal Math', d: 'The rehab number flows directly into the deal score alongside purchase price, ARV, holding costs, and financing. One conversation, full picture.' },
              { t: 'Cleanout vs. Full Rehab', d: 'For wholetail strategies, tell Freddie cleanout cost instead. The scoring adapts to your actual exit, not a forced renovation assumption.' },
              { t: 'Score Certificate PDF', d: 'A printable one-pager you can share with your contractor, lender, or partner. Free with a registered account.' },
              { t: 'Built by Active Flipper', d: '20+ years of fix-and-flip experience in the Northern Virginia market. Freddie was built by someone who has signed thousands of contractor checks.' },
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
          <h2 className="h2" style={{ marginBottom: '12px' }}>Rehab ratio benchmarks</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '32px', maxWidth: '640px' }}>The single number experienced investors look at to spot over-rehabbed deals. Freddie scores against these thresholds.</p>
          <div style={{ background: '#f0f2f5', borderRadius: '14px', padding: '8px' }}>
            {[
              { range: 'Under 10%', label: 'Light cosmetic', detail: 'Paint, flooring, light fixtures. Wholetail and lipstick-flip territory.', color: '#00C27C' },
              { range: '10-15%', label: 'Standard flip', detail: 'Kitchen and bath updates, flooring throughout, paint, some appliances.', color: '#00C27C' },
              { range: '15-20%', label: 'Heavy renovation', detail: 'Major kitchens and baths, possibly some structural, mechanicals, layout changes.', color: '#ffb700' },
              { range: '20-25%', label: 'Tight margin', detail: 'Full gut, structural, additions. Math gets sensitive — small overruns kill the deal.', color: '#ff7043' },
              { range: 'Over 25%', label: 'Walk away', detail: 'Almost no margin for surprises. Better as a wholesale or wholetail than a flip.', color: '#ff5050' },
            ].map((r, i, arr) => (
              <div key={i} style={{ display: 'flex', gap: '16px', padding: '14px 16px', borderBottom: i < arr.length - 1 ? '1px solid white' : 'none', alignItems: 'center', background: 'white', borderRadius: i === 0 ? '10px 10px 0 0' : i === arr.length - 1 ? '0 0 10px 10px' : 0 }}>
                <div style={{ minWidth: '90px', fontSize: '13px', fontWeight: '700', color: r.color, textAlign: 'center', padding: '6px 8px', background: r.color + '15', borderRadius: '6px', border: `1px solid ${r.color}30` }}>{r.range}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14.5px', fontWeight: '700', color: '#0f1c2d', marginBottom: '2px' }}>{r.label}</div>
                  <div style={{ fontSize: '13px', color: '#5a7184', lineHeight: '1.5' }}>{r.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '5px 10px', background: 'rgba(0,194,124,0.1)', border: '1px solid rgba(0,194,124,0.2)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>Real deal · Real numbers</div>
          <h2 className="h2" style={{ marginBottom: '12px', maxWidth: '780px' }}>How a Northern Virginia <span className="serif-italic" style={{ color: '#00C27C' }}>hoarder house</span> used a $5K cleanout instead of a $80K rehab.</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', lineHeight: '1.6', marginBottom: '32px', maxWidth: '720px' }}>
            We bought a hoarder house for $210K. The full rehab estimate was around $80K — kitchen, baths, flooring, paint, mechanicals. Instead, we paid $5K for a cleanout and resold as-is for $349K. Freddie scored the wholetail at 100/100. The next investor — a flipper who bought it from us — did the full $80K renovation and made money on the other side. Sometimes the best rehab budget is the one you don't spend.
          </p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #1a2942 0%, #0f1c2d 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-before.jpg" alt="Hoarder house before cleanout — Northern Virginia rehab cost example" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Before · As-purchased</div>
            </div>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #00C27C 0%, #009d63 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="Same property after $80K renovation by next investor" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>After · Buyer's renovation</div>
            </div>
          </div>

          <p style={{ fontSize: '12.5px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '28px', fontStyle: 'italic' }}>We sold the property as-is for $349K with $5K of cleanout costs, no renovation. The renovation pictured was completed by the next investor who purchased it from us.</p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 220px', gap: '24px', alignItems: 'center', background: 'white', borderRadius: '16px', padding: '28px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '14px' }}>The Numbers</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                {[['Purchase', '$210,000'], ['Our "rehab"', '$5,000 cleanout'], ['Skipped rehab', '~$80,000'], ['Sale price', '$349,000'], ['Strategy', 'Wholetail'], ['Net profit', '$115,050']].map(([k, v], i) => (
                  <div key={i}>
                    <div style={{ fontSize: '11px', color: '#5a7184', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{k}</div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d' }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '160px', height: '160px', borderRadius: '50%', background: '#f0f2f5', border: '8px solid #00C27C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(0,194,124,0.18)' }}>
                <div style={{ fontSize: '52px', fontWeight: '700', color: '#00C27C', lineHeight: 1 }}>100</div>
                <div style={{ fontSize: '10px', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>Score</div>
              </div>
              <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '10px', textAlign: 'center' }}>Strong Deal</div>
            </div>
          </div>

          <div style={{ marginTop: '24px', padding: '20px 24px', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: '8px', color: 'white' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '8px' }}>Rehab lesson</div>
            <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#cfd9e3' }}>The right rehab budget depends on your exit. A buy-and-hold rental needs more than a wholetail. A retail flip needs more than a BRRRR. Freddie estimates rehab against your strategy, not against a one-size-fits-all national average.</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Common questions about the rehab calculator</h2>
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

      <section style={{ padding: '52px 0', background: '#f0f2f5' }}>
        <div className="container">
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>More free tools</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            <a href="/tools/free-ai-flip-calculator" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free Fix and Flip Calculator →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Run the full flip math with rehab, ARV, and holding costs.</div>
            </a>
            <a href="/tools/free-ai-deal-analyzer" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free AI Deal Analyzer →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Talk to Freddie about any deal — flip, BRRRR, rental, or wholesale.</div>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Estimate your rehab <span className="serif-italic" style={{ color: '#00C27C' }}>free</span>.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>No credit card. No paid tier required. Just type the scope and let Freddie do the math.</p>
          <a href="/freddie" className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Talk to Freddie →</a>
          <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> to save your projects.</div>
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