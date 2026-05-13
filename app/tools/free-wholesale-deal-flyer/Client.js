'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is a wholesale deal flyer?',
    a: "A wholesale deal flyer is a one-page marketing document for a property you have under contract. It's designed to be blasted to your buyer list via email or text — a tight summary with the address, asking price, ARV, key deal metrics, and a buyer CTA. Think of it as the email preview that drives clicks to the full package. FreeDealCalc generates the complete flyer automatically."
  },
  {
    q: 'Is a deal flyer different from a dispo package?',
    a: "A deal flyer is the short-form version — a one-page summary designed for quick scanning and fast action. A full dispo package includes more detail: condition notes, full comp table, rehab scope, photo gallery link, and close deadline. FreeDealCalc generates both. The flyer is great for an initial blast; the full package is what serious buyers want before they commit."
  },
  {
    q: 'What\'s the best way to send a wholesale deal flyer?',
    a: "Email to your buyer list is the primary channel. Text blast to your top 20–30 active buyers is the fastest way to get eyes on it in the first hour. Some wholesalers post to their Facebook group or BiggerPockets community. The FreeDealCalc flyer includes a direct CTA link so wherever a buyer sees it, they can move immediately."
  },
  {
    q: 'Does the deal flyer include comps?',
    a: "Yes. FreeDealCalc integrates Rentcast to pull verified comparable sales. When you choose the Rentcast comp option, the flyer includes a Rentcast Verified badge and up to 3 comparable sales. Buyers who see Rentcast verification before they read the price are more likely to take the deal seriously."
  },
  {
    q: 'How do I make my deal flyer stand out in a crowded buyer inbox?',
    a: "Three things: a strong hook image (distressed interior, hoarder condition, or dramatic exterior beats a clean exterior every time), verified comps that establish credibility before the buyer does their own check, and a clear spread that shows buyers exactly how much room they have. FreeDealCalc handles all three automatically."
  },
  {
    q: 'How many deal flyers can I generate for free?',
    a: "Free registered users get 3 dispo packages per month — the flyer is generated as part of the dispo flow. Investor tier ($19/month) and Pro tier ($39/month) include more packages, logo upload, and white-label branding for Pro users."
  },
];

export default function FreeWholesaleDealFlyerPage() {
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
    name: 'FreeDealCalc — Free Wholesale Deal Flyer Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Free wholesale deal flyer generator with Rentcast verified comps. One-page deal summary ready to blast to your buyer list in 60 seconds.',
    url: 'https://www.freedealcalc.com/tools/free-wholesale-deal-flyer',
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
            Free <span className="serif-italic" style={{ color: '#00C27C' }}>wholesale deal flyer</span> — blast-ready in 60 seconds.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '680px' }}>
            Stop sending plain-text deal emails. FreeDealCalc generates a professional one-page wholesale deal flyer with Rentcast verified comps — ready to blast to your buyer list the moment you have a deal under contract.
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
              Address and numbers — I'll build the flyer and pull comps.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. 987 Birch Ln, asking $189k, ARV $320k, needs $55k" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleBuild} aria-label="Build deal flyer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleBuild} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Build My Free Deal Flyer →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · Rentcast comps auto-pulled · Blast-ready instantly</div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>What's in a <span className="serif-italic" style={{ color: '#00C27C' }}>deal flyer that converts</span>?</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '680px' }}>Most deal flyers get deleted. Here's what separates the ones buyers respond to from the ones they ignore.</p>
          <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              {[
                { label: 'Hook Image', icon: '📸', tip: 'Distressed interior beats clean exterior every time. Show the problem — buyers price it themselves.' },
                { label: 'Verified ARV', icon: '✓', tip: 'Rentcast badge kills the "where did you get that ARV?" question before it gets asked.' },
                { label: 'Buyer Spread', icon: '↔', tip: 'Show the math. ARV − rehab − asking = buyer spread. Buyers who can see the room move faster.' },
                { label: 'Hard Deadline', icon: '⏰', tip: 'A close date and EMD turns browsers into buyers. No deadline = no urgency.' },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', marginBottom: '10px' }}>{item.icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: 'white', marginBottom: '6px' }}>{item.label}</div>
                  <div style={{ fontSize: '12.5px', color: '#94a8b8', lineHeight: '1.5' }}>{item.tip}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '20px 24px', background: 'white', borderLeft: '4px solid #00C27C', borderRadius: '8px' }}>
            <div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.6' }}>
              <strong style={{ color: '#0f1c2d' }}>The viral loop:</strong> Every FreeDealCalc flyer sent to your buyer list includes FreeDealCalc.com in the footer. When your package reaches 50–500 buyer inboxes, every one of those buyers sees the brand. That's passive marketing for the platform — and the reason you can use it for free.
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Questions about wholesale deal flyers</h2>
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
            <a href="/tools/free-wholesale-dispo-package" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free Wholesale Dispo Package →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Full package with all 7 sections for serious buyers.</div>
            </a>
            <a href="/tools/free-wholesale-marketing-package" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free Wholesale Marketing Package →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Complete marketing package for your buyer outreach.</div>
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Build your <span className="serif-italic" style={{ color: '#00C27C' }}>deal flyer</span> free — blast it today.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>Rentcast comps, cover photo, buyer spread. Ready to send in 60 seconds.</p>
          <button onClick={handleBuild} className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Build My Free Deal Flyer →</button>
          <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> for 3 flyers per month.</div>
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
