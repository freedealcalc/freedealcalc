'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is a rental property calculator?',
    a: "A rental property calculator runs the numbers on a buy-and-hold investment — purchase price, down payment, financing, rent, expenses — and tells you whether the property will cash flow and what your return on investment will be. FreeDealCalc's rental calculator, powered by Freddie, walks you through it conversationally and produces a 0-100 score plus monthly cash flow, cash-on-cash return, and cap rate."
  },
  {
    q: 'Is the rental calculator actually free?',
    a: 'Yes. Anyone can run unlimited rental analyses at no cost. Free registered users also unlock the Score Certificate PDF and save deals to a dashboard. BiggerPockets locks their rental calculator behind a Pro subscription. DealCheck charges $20/month. Stessa charges for Pro features. Freddie does the math free, no paywall, no trial.'
  },
  {
    q: 'What is cash-on-cash return and why does it matter for rentals?',
    a: "Cash-on-cash return is your annual pre-tax cash flow divided by the cash you put into the deal. It's the cleanest measure of how hard your invested capital is working. A 10%+ cash-on-cash is the traditional target for buy-and-hold rentals. Freddie shows it alongside cap rate, monthly cash flow, and total ROI so you can compare deals apples-to-apples."
  },
  {
    q: 'Does Freddie use the 1% rule and the 50% rule?',
    a: 'Yes. The 1% rule says monthly rent should be at least 1% of purchase price (so a $200K property should rent for at least $2,000). The 50% rule says expenses will eat about 50% of gross rent over time. Freddie checks both rules automatically and flags whether your deal passes. Both are screening shortcuts, not gospel — Freddie shows the actual numbers alongside the rule checks.'
  },
  {
    q: 'How does Freddie calculate cap rate?',
    a: 'Cap rate is net operating income divided by purchase price, expressed as a percentage. Freddie computes NOI as rent minus operating expenses (taxes, insurance, vacancy, maintenance, management) — but excludes mortgage debt service, since cap rate is supposed to reflect the asset, not your specific financing. A cap rate of 6-8% is typical for stabilized rentals in most US markets. Higher in distressed areas, lower in premium ones.'
  },
  {
    q: 'What about Section 8 and short-term rentals?',
    a: "Tell Freddie if you're running Section 8 or short-term rental and he adjusts. Section 8 typically pays slightly above market rent with longer vacancy buffers and property-condition compliance costs. Short-term rentals (Airbnb, Vrbo) need higher gross revenue to offset 30-40% operating cost ratios — much heavier than long-term rentals. Freddie applies the right cost stack based on your strategy."
  },
  {
    q: 'Do I need an account to use the rental calculator?',
    a: 'No account is required to run a rental analysis and see your score. A free account unlocks the Score Certificate, saves your properties to a dashboard, and gives you 2 lifetime Rentcast lookups for verified rent comp data.'
  },
];

export default function FreeAIRentalCalculatorPage() {
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
    name: 'FreeDealCalc — Free AI Rental Property Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free AI-powered rental property calculator. Cash flow, cap rate, cash-on-cash return, and a 0-100 score for buy-and-hold investors.',
    url: 'https://freedealcalc.com/tools/free-ai-rental-calculator',
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
            Free AI <span className="serif-italic" style={{ color: '#00C27C' }}>rental property calculator</span>. Cash flow & ROI in seconds.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '700px' }}>
            Tell Freddie about your rental — purchase, rent, financing — and see monthly cash flow, cash-on-cash return, cap rate, and a 0-100 deal score. The 1% rule and 50% rule checks are built in. Conversational, fast, and genuinely free.
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
              Hey, I'm Freddie. Walk me through your rental — purchase, expected rent, down payment and financing.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. Rental in Manassas VA, $250k purchase, 25% down, $2,300 rent, conventional 30-year" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleAnalyze} aria-label="Analyze rental property" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleAnalyze} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Run My Rental Free →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · No signup required to see your score</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>The four numbers that decide a rental</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '720px' }}>Most rental calculators bury you in 30 fields. Freddie focuses on the four numbers experienced landlords actually look at.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {[
              { label: 'Monthly Cash Flow', d: 'Rent minus PITI, vacancy, maintenance, and management. The number that pays for itself every month.' },
              { label: 'Cash-on-Cash Return', d: 'Annual cash flow divided by total cash invested. The cleanest measure of capital efficiency. 10%+ is the traditional target.' },
              { label: 'Cap Rate', d: 'NOI divided by purchase price. Reflects the asset, not your financing. Useful for comparing properties across financing structures.' },
              { label: '1% & 50% Rule Checks', d: 'Quick screens to spot rentals that probably won\'t cash flow. Freddie auto-checks both on every deal.' },
            ].map((m, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '14px', padding: '22px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div className="check" style={{ marginBottom: '12px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>{m.label}</div>
                <div style={{ fontSize: '13px', color: '#5a7184', lineHeight: '1.5' }}>{m.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>Every rental cost — <span className="serif-italic" style={{ color: '#00C27C' }}>factored in</span></h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '32px', maxWidth: '720px' }}>Most rental calculators forget half of the real expenses. Here's what Freddie includes by default — and what you can override.</p>
          <div style={{ background: '#f0f2f5', borderRadius: '14px', padding: '28px' }}>
            {[
              { label: 'PITI', detail: 'Principal, interest, taxes, insurance — your full monthly mortgage including escrow.' },
              { label: 'Vacancy reserve', detail: 'Default 5% of rent. Higher in transient markets, lower in stabilized ones.' },
              { label: 'Maintenance reserve', detail: 'Default 8% of rent for cap-ex and repairs. Adjustable based on property age and condition.' },
              { label: 'Property management', detail: 'Default 8-10% if you tell Freddie you are using a PM. Set to 0% if self-managing.' },
              { label: 'HOA / condo fees', detail: 'If applicable. Often the deal-killer on suburban townhouses and condos that look cash flow-positive on the surface.' },
              { label: 'Utilities (if landlord-paid)', detail: 'Most single-family rentals push utilities to the tenant. Multi-family and Section 8 sometimes don\'t. Freddie asks.' },
            ].map((c, i, arr) => (
              <div key={i} style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: i < arr.length - 1 ? '1px solid white' : 'none', alignItems: 'flex-start' }}>
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
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>FreeDealCalc vs. the other rental calculators</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '32px', maxWidth: '640px' }}>Most rental calculators are gated behind paid tiers. Freddie is conversational, free, and built by an active investor.</p>
          <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px' }}>
                <thead>
                  <tr style={{ background: '#0f1c2d', color: 'white' }}>
                    <th style={{ textAlign: 'left', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>Feature</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '700', color: '#00C27C' }}>FreeDealCalc</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>BiggerPockets</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>DealCheck</th>
                    <th style={{ textAlign: 'center', padding: '16px 20px', fontSize: '13px', fontWeight: '600' }}>Stessa</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '13.5px' }}>
                  {[
                    ['Free rental calculator', '✓', 'Pro tier', '$20/mo', '$13/mo Pro'],
                    ['Conversational AI analyst', '✓', '—', '—', '—'],
                    ['Cash flow + cap rate + CoC', '✓', '✓', '✓', '✓'],
                    ['1% and 50% rule checks', '✓', '✓', '✓', '—'],
                    ['Section 8 / STR strategy support', '✓', 'Limited', '—', '—'],
                    ['Score Certificate PDF', '✓', '—', '—', '—'],
                    ['Built by active investor', '✓', '✓', '—', '—'],
                  ].map(([feature, fdc, bp, dc, st], i) => (
                    <tr key={i} style={{ borderTop: '1px solid #f0f2f5' }}>
                      <td style={{ padding: '12px 20px', color: '#0f1c2d', fontWeight: '500' }}>{feature}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: fdc === '✓' ? '#00C27C' : '#0f1c2d', fontWeight: fdc === '✓' ? '700' : '500' }}>{fdc}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: '#5a7184' }}>{bp}</td>
                      <td style={{ padding: '12px 20px', textAlign: 'center', color: '#5a7184' }}>{dc}</td>
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
          <h2 className="h2" style={{ marginBottom: '12px', maxWidth: '780px' }}>Why a Northern Virginia <span className="serif-italic" style={{ color: '#00C27C' }}>hoarder house</span> wouldn't have worked as a rental — and what it teaches.</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', lineHeight: '1.6', marginBottom: '32px', maxWidth: '720px' }}>
            We bought a hoarder house for $210K and resold it as-is for $349K one month later. Strong wholetail flip. But what if we'd renovated and held it as a rental? At a $400K post-rehab ARV with $2,500 monthly rent, cash-on-cash return drops below 5% and the 1% rule fails (rent would need to be $4,000+). The same property is a phenomenal flip and a mediocre rental. Freddie shows you both numbers so you pick the right strategy for the property.
          </p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #1a2942 0%, #0f1c2d 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-before.jpg" alt="Hoarder house before cleanout — Northern Virginia rental analysis comparison" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Before · As-purchased</div>
            </div>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #00C27C 0%, #009d63 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="Same property after renovation by buyer who purchased it from us" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>After · Buyer's renovation</div>
            </div>
          </div>

          <p style={{ fontSize: '12.5px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '28px', fontStyle: 'italic' }}>We sold this property as-is for $349K (a wholetail flip). The renovation pictured was completed by the buyer who purchased it from us. We share it here because Freddie's rental score helps you avoid forcing a buy-and-hold strategy onto a property that flips better.</p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 220px', gap: '24px', alignItems: 'center', background: '#f0f2f5', borderRadius: '16px', padding: '28px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '14px' }}>What We Did (Wholetail)</div>
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
                <div style={{ fontSize: '10px', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>Score</div>
              </div>
              <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '10px', textAlign: 'center' }}>Strong Deal</div>
            </div>
          </div>

          <div style={{ marginTop: '24px', padding: '20px 24px', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: '8px', color: 'white' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '8px' }}>Rental lesson</div>
            <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#cfd9e3' }}>The best rental properties usually aren't the best flip properties. Northern Virginia in particular has a structural problem for buy-and-hold: high purchase prices relative to rents make the 1% rule almost impossible to hit. Out-of-state markets with $150K-$200K purchase prices and $1,500+ rents tend to cash flow much better. Freddie shows you the actual numbers so you can spot strong rental markets quickly.</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Common questions about the rental calculator</h2>
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
            <a href="/tools/free-ai-brrrr-calculator" style={{ background: '#f0f2f5', borderRadius: '12px', padding: '18px 22px', display: 'block', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free BRRRR Calculator →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>For rental investors who want to recycle their capital with cash-out refinance.</div>
            </a>
            <a href="/tools/free-ai-deal-analyzer" style={{ background: '#f0f2f5', borderRadius: '12px', padding: '18px 22px', display: 'block', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free AI Deal Analyzer →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Compare rental, flip, BRRRR, and wholesale strategies on the same property.</div>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Run your rental <span className="serif-italic" style={{ color: '#00C27C' }}>free</span>.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>No credit card. No paid tier required. Tell Freddie about your rental and see whether it cash flows.</p>
          <a href="/freddie" className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Talk to Freddie →</a>
          <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> to save your properties.</div>
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