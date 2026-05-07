'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is an ARV calculator?',
    a: "ARV stands for After Repair Value — what a property will be worth once renovations are complete. An ARV calculator pulls comparable sales (comps) from the surrounding area and estimates the post-rehab market value. FreeDealCalc's ARV calculator, powered by Freddie and backed by Rentcast comp data, gives you a defensible ARV number you can use for offers, lender conversations, and your full deal score."
  },
  {
    q: 'Is the ARV calculator actually free?',
    a: "Yes. Anyone can run unlimited ARV checks at no cost. Free registered users get 2 lifetime Rentcast lookups for verified comp data. Investor and Pro subscribers get higher monthly Rentcast allowances. No competitor combines free AI deal analysis, comp-backed ARV, and document generation in one tool at no cost."
  },
  {
    q: 'Where does the comp data come from?',
    a: 'Freddie pulls comps from Rentcast, which aggregates active and sold listings from MLS feeds and county records nationwide. Rentcast is a paid data provider that we maintain a Foundation plan with — and we cache comp results for 30 days to keep the tool free for users while keeping our data costs sustainable. The comp logic prioritizes recent sales (last 90 days), similar square footage, similar bed/bath count, and proximity (within 1 mile when possible).'
  },
  {
    q: 'How is this different from Zillow Zestimate?',
    a: 'Zestimate is an automated valuation for the current condition of the property, not the post-renovation value. ARV is what the property will sell for AFTER you renovate. The two numbers can be 30-50% different on a distressed property. Freddie\'s ARV calculator estimates renovated value using comparable sold properties, which is the number that matters for flip and BRRRR math.'
  },
  {
    q: 'Can I override the ARV if I have my own number?',
    a: 'Yes. Tell Freddie your ARV number directly and he uses it. Many experienced flippers prefer their own market knowledge over algorithmic ARV — Freddie respects that. The Rentcast comp pull is there for users who want a third-party data point or who are looking at a market they don\'t know cold.'
  },
  {
    q: 'Do I need an account to use the ARV calculator?',
    a: 'No account is required to estimate ARV and see a deal score. A free account unlocks 2 Rentcast lookups for hard comp data, the Score Certificate generator, and saves your deals to a dashboard.'
  },
];

export default function FreeAIARVCalculatorPage() {
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
    name: 'FreeDealCalc — Free AI ARV Calculator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free AI-powered ARV calculator for real estate investors. Backed by Rentcast comp data. Estimate after-repair value for flips, BRRRRs, and wholesale deals.',
    url: 'https://freedealcalc.com/tools/free-ai-arv-calculator',
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
            Free AI <span className="serif-italic" style={{ color: '#00C27C' }}>ARV calculator</span>. Real comp data, no subscription.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '700px' }}>
            Tell Freddie the address and he pulls Rentcast comparable sales to estimate after-repair value. The number you need to size your offer, defend your ARV to a hard money lender, and run flip or BRRRR math that actually pencils.
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
              Hey, I'm Freddie. Drop the address and your strategy and I'll pull comps to estimate ARV.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. 123 Main St, Manassas VA 20109 — flip ARV check" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleAnalyze} aria-label="Estimate ARV" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleAnalyze} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Estimate ARV Free →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · Rentcast comp data for registered users</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>Backed by <span className="serif-italic" style={{ color: '#00C27C' }}>Rentcast</span> comp data</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '32px', maxWidth: '720px' }}>Most free ARV calculators use generic AVM models like Zestimate. Freddie pulls actual sold comps from Rentcast — the same data MLS-connected investors use. We pay for the data so you don't have to.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
            {[
              { t: 'Recent sales prioritized', d: 'Last 90 days when available — fresh comps reflect current market conditions, not 2022 prices.' },
              { t: 'Similar size and beds/baths', d: 'Comps within 20% of subject square footage and matching bed/bath count get more weight.' },
              { t: 'Proximity weighted', d: 'Within 1 mile preferred. Same school district. Same neighborhood patterns where possible.' },
              { t: '30-day cache', d: 'We cache comp results for 30 days to keep the tool free for users while keeping data costs sustainable.' },
            ].map((c, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '18px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <div className="check" style={{ marginBottom: '10px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>{c.t}</div>
                <div style={{ fontSize: '12.5px', color: '#5a7184', lineHeight: '1.5' }}>{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '40px' }}>How the ARV calculator works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { n: '01', t: 'Drop the address', d: 'Tell Freddie the property address and what strategy you\'re running. He routes the request to Rentcast and pulls the comp set.' },
              { n: '02', t: 'Freddie builds the ARV', d: 'Rentcast returns recent sales filtered by size, beds/baths, and proximity. Freddie weights the set and produces a defensible ARV number.' },
              { n: '03', t: 'Drop into deal math', d: 'The ARV flows into the deal score alongside your purchase price, rehab budget, and holding costs. One conversation, full picture.' },
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
          <div style={{ display: 'inline-block', padding: '5px 10px', background: 'rgba(0,194,124,0.1)', border: '1px solid rgba(0,194,124,0.2)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>Real deal · Real numbers</div>
          <h2 className="h2" style={{ marginBottom: '12px', maxWidth: '780px' }}>How an ARV check killed a bad wholesale offer — and saved a $115K wholetail deal.</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', lineHeight: '1.6', marginBottom: '32px', maxWidth: '720px' }}>
            A Northern Virginia hoarder house came across our desk. The wholesaler claimed a $400K ARV. Rentcast comps came back at $349K — a $51K gap. With a real ARV in hand, the wholesale assignment didn't work, but a wholetail exit did. We bought it for $210K, paid $5K to clean it out, and resold as-is for the actual ARV — netting $115K. Freddie scored it 100/100. Without comp-backed ARV data, this deal looks completely different.
          </p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #1a2942 0%, #0f1c2d 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-before.jpg" alt="Hoarder house before cleanout — Northern Virginia ARV check example" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Before · As-purchased</div>
            </div>
            <div style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden', aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #00C27C 0%, #009d63 100%)', border: '1px solid #e4e8ed' }}>
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="Same property after renovation by buyer who purchased from us at the comp-backed ARV" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={e => { e.target.style.display = 'none'; }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px', padding: '5px 10px', background: 'rgba(255,255,255,0.95)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#0f1c2d', letterSpacing: '0.1em', textTransform: 'uppercase' }}>After · Buyer's renovation</div>
            </div>
          </div>

          <p style={{ fontSize: '12.5px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '28px', fontStyle: 'italic' }}>We sold the property at the comp-backed ARV of $349K, not the wholesaler's $400K claim. The renovation pictured was completed by the buyer who purchased it from us.</p>

          <div className="deal-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 220px', gap: '24px', alignItems: 'center', background: 'white', borderRadius: '16px', padding: '28px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '14px' }}>The ARV Story</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                {[['Wholesaler ARV', '$400,000'], ['Rentcast ARV', '$349,000'], ['Gap', '$51,000'], ['Actual sale', '$349,000'], ['Strategy', 'Wholetail'], ['Net profit', '$115,050']].map(([k, v], i) => (
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
                <div style={{ fontSize: '10px', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>Score</div>
              </div>
              <div style={{ fontSize: '13px', color: '#5a7184', marginTop: '10px', textAlign: 'center' }}>Strong Deal</div>
            </div>
          </div>

          <div style={{ marginTop: '24px', padding: '20px 24px', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: '8px', color: 'white' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '700', marginBottom: '8px' }}>ARV lesson</div>
            <div style={{ fontSize: '14px', lineHeight: '1.6', color: '#cfd9e3' }}>The ARV the wholesaler tells you is rarely the ARV the market pays. Real comp data turns "trust me, bro" into "here are the numbers." Investors who run the comps before they make the offer make money. Investors who don't, don't.</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Common questions about the ARV calculator</h2>
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
            <a href="/tools/free-ai-deal-analyzer" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free AI Deal Analyzer →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Talk to Freddie about any deal — flip, BRRRR, rental, or wholesale.</div>
            </a>
            <a href="/tools/free-ai-flip-calculator" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free Fix and Flip Calculator →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Once you have your ARV, run the full flip math.</div>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Estimate ARV <span className="serif-italic" style={{ color: '#00C27C' }}>free</span>.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>No credit card. Drop the address, get the comps, run the math.</p>
          <a href="/freddie" className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Talk to Freddie →</a>
          <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> to unlock Rentcast comp lookups.</div>
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