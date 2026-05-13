'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What should a wholesale dispo template include?',
    a: "A solid wholesale dispo template needs: property address and overview, asking price with assignment fee breakdown, ARV with supporting comps, rehab estimate and scope, property condition notes, close deadline and EMD requirement, and a clear buyer CTA. FreeDealCalc's template includes all of these with toggles to turn each section on or off per deal."
  },
  {
    q: 'Is a static template better or a generator?',
    a: "A generator beats a static template every time for active wholesalers. A static Word or PDF template requires you to manually update every field every deal — and comp research is a separate task. A generator like FreeDealCalc pulls Rentcast comps automatically, formats everything around your deal details, and produces a ready-to-send package in about 60 seconds."
  },
  {
    q: 'How do I get Rentcast comps in my template?',
    a: "FreeDealCalc integrates Rentcast directly. When you're building your package, just choose the Rentcast comp option. FreeDealCalc pulls recent comparable sales near your property address, verifies them, and includes them in your package with a Rentcast Verified badge. No separate Rentcast account required."
  },
  {
    q: 'Can I reuse the same template for every deal?',
    a: "Yes. FreeDealCalc remembers your preferences — toggle settings, branding, and format selections persist across deals. For Pro users, your logo and white-label settings are saved so every package you generate looks consistent. You fill in the deal-specific details (address, price, ARV, rehab) and the template handles the rest."
  },
  {
    q: 'What\'s the difference between a dispo template and a seller proposal?',
    a: "A dispo template is for your buyers — it markets the deal to investors who will close on it. A seller proposal is for the motivated seller — it explains your offer and why they should sell to you. FreeDealCalc generates both. The dispo template routes to /dispo; the seller proposal is generated through Freddie's deal analysis flow."
  },
  {
    q: 'Do I need to pay for a dispo template tool?',
    a: "Not with FreeDealCalc. The dispo template generator is free for registered users — 3 packages per month at no cost. No JV split on your assignment fee. Other tools charge $97–$800/month or take 50% of your deal. The only paid tier is Pro at $39/month, which unlocks unlimited packages and white-label branding."
  },
];

export default function FreeDispoTemplateWholesalersPage() {
  const [input, setInput] = useState('');

  function handleBuild() {
    if (typeof window !== 'undefined') {
      try {
        const msg = input.trim();
        if (msg) sessionStorage.setItem('fdc_seed_message', msg);
        else sessionStorage.removeItem('fdc_seed_message');
      } catch (e) {}
    }
    window.location.href = '/dispo';
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleBuild();
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
    name: 'FreeDealCalc — Free Dispo Template for Wholesalers',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free wholesale dispo template with Rentcast verified comps. Better than a static Word or PDF template — generates a professional package per deal in 60 seconds.',
    url: 'https://www.freedealcalc.com/tools/free-dispo-template-wholesalers',
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
        @media (max-width: 720px) { .h1 { font-size: 32px; } .h2 { font-size: 24px; } }
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
            Free <span className="serif-italic" style={{ color: '#00C27C' }}>dispo template for wholesalers</span> — smarter than a Word doc.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '680px' }}>
            A static dispo template makes you do all the work. FreeDealCalc's generator fills in Rentcast verified comps automatically and builds a professional package around your deal in 60 seconds. Free for wholesalers. No JV split.
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
              What's the deal? Give me the basics and I'll build your dispo template around it.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. 321 Pine Rd, asking $165k, ARV $295k, needs $50k rehab" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleBuild} aria-label="Build dispo template" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleBuild} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Build My Free Dispo Template →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · No JV split · Saves preferences for next deal</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>Generator vs. static template — <span className="serif-italic" style={{ color: '#00C27C' }}>what's the difference?</span></h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '36px', maxWidth: '680px' }}>Most wholesalers start with a Word doc or PDF they found online. Here's why a generator produces better packages faster.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {[
              {
                label: 'Static Word/PDF Template',
                color: '#e05252',
                items: [
                  'Copy-paste address, price, ARV manually every deal',
                  'Run comps separately — different tool, different tab',
                  'Format your own comp table in the doc',
                  'Update every field — easy to miss one',
                  'Looks like every other wholesaler\'s email',
                  'No Rentcast verification badge',
                ],
                bg: 'rgba(224,82,82,0.05)',
                border: '1px solid rgba(224,82,82,0.15)',
              },
              {
                label: 'FreeDealCalc Generator',
                color: '#00C27C',
                items: [
                  'Fill in deal details once — package formats automatically',
                  'Rentcast pulls comps automatically in the same flow',
                  'Comp table built and formatted for you',
                  '7 toggles — nothing to miss, everything intentional',
                  'Professional consistent format every time',
                  'Rentcast Verified badge builds buyer trust',
                ],
                bg: 'rgba(0,194,124,0.05)',
                border: '1px solid rgba(0,194,124,0.2)',
                highlight: true,
              },
            ].map((col, i) => (
              <div key={i} style={{ background: col.bg, border: col.border, borderRadius: '14px', padding: '24px' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', color: col.color, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{col.label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.items.map((item, j) => (
                    <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: col.highlight ? 'rgba(0,194,124,0.15)' : 'rgba(224,82,82,0.1)', color: col.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                        {col.highlight
                          ? <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          : <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                        }
                      </div>
                      <div style={{ fontSize: '13.5px', color: '#0f1c2d', lineHeight: '1.45' }}>{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Questions about wholesale dispo templates</h2>
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
            <a href="/tools/wholesale-dispo-package-generator" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Wholesale Dispo Package Generator →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Full generator with 7 customization toggles.</div>
            </a>
            <a href="/tools/wholesale-deal-package-creator" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Wholesale Deal Package Creator →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Build your full deal package from scratch.</div>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Ditch the static template. Build a <span className="serif-italic" style={{ color: '#00C27C' }}>real dispo package</span> in 60 seconds.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>Free for wholesalers. Rentcast comps auto-pulled. No Word doc required.</p>
          <button onClick={handleBuild} className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Build My Free Dispo Package →</button>
          <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> to save your packages.</div>
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
