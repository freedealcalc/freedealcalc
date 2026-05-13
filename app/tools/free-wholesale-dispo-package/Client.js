'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is a wholesale dispo package?',
    a: 'A wholesale dispo package (short for disposition package) is the marketing document you send to your buyer list when you have a property under contract. It includes the address, asking price, ARV, rehab estimate, comparable sales, property condition notes, and a CTA for buyers to submit an offer or request a walkthrough. A professional dispo package gets deals sold faster because buyers can evaluate the deal without calling you for every detail.'
  },
  {
    q: 'How is FreeDealCalc\'s dispo package free?',
    a: "FreeDealCalc generates your wholesale dispo package at no cost. Free registered users get 3 dispo packages per month. There's no JV split, no percentage of your deal, no monthly fee. The platform monetizes through the surrounding ecosystem — agent referrals, lender matches, and premium subscriptions for power users who want white-label branding and unlimited packages."
  },
  {
    q: 'Does the package include comparable sales?',
    a: "Yes. FreeDealCalc integrates with Rentcast to pull verified comparable sales automatically. Rentcast is a third-party data source that independently verifies property values — buyers trust Rentcast numbers, which means your deal closes faster. You can also add your own comps, use Rentcast's, or combine both."
  },
  {
    q: 'How long does it take to generate a dispo package?',
    a: "About 60 seconds. Answer a few questions about the property — address, asking price, rehab estimate, condition — and FreeDealCalc builds a professional package you can send immediately. No templates to fill in manually, no designer required."
  },
  {
    q: 'Can I white-label the dispo package with my own branding?',
    a: "Pro tier subscribers get full white-label branding — your logo, your colors, your name on the package. Free and Investor tier packages include FreeDealCalc branding in the footer. The FreeDealCalc footer actually works in your favor: every package you send to 50–500 buyers is a brand impression for your sourcing reputation."
  },
  {
    q: 'What do other dispo tools charge?',
    a: "MaxDispo takes 50% of your assignment fee. InvestorLift starts at $400/month. DispoGenius runs $97–$297/month. XLeads charges up to $6,000/year. FreeDealCalc generates the same professional output for free. The only cost is the Pro upgrade if you want white-label branding and unlimited packages."
  },
];

export default function FreeWholesaleDispoPackagePage() {
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
    name: 'FreeDealCalc — Free Wholesale Dispo Package Generator',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description: 'Generate a free wholesale dispo package with Rentcast verified comps in 60 seconds. No JV split, no monthly fee.',
    url: 'https://www.freedealcalc.com/tools/free-wholesale-dispo-package',
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
          .two-col { grid-template-columns: 1fr !important; }
        }
        .btn-primary { display: inline-block; padding: 14px 24px; background: #00C27C; color: white; border-radius: 12px; font-size: 15px; font-weight: 600; cursor: pointer; border: none; font-family: inherit; transition: transform 0.1s; }
        .btn-primary:hover { transform: translateY(-1px); }
        .check { display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: rgba(0,194,124,0.12); color: #00C27C; flex-shrink: 0; }
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />

      {/* NAV */}
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

      {/* HERO */}
      <section style={{ background: '#0f1c2d', color: 'white', padding: '64px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(0,194,124,0.15)', border: '1px solid rgba(0,194,124,0.3)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '20px' }}>Stop Paying. Start Winning.</div>
          <h1 className="h1" style={{ color: 'white', marginBottom: '18px', maxWidth: '820px' }}>
            Free <span className="serif-italic" style={{ color: '#00C27C' }}>wholesale dispo package</span> — built in 60 seconds.
          </h1>
          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.55', marginBottom: '36px', maxWidth: '680px' }}>
            Other tools take 50% of your deal or charge $400/month. FreeDealCalc generates a professional disposition package with Rentcast verified comps for free. No JV split. No subscription required.
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
              Drop the address and I'll build your dispo package — with Rentcast comps if you want them.
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end', background: '#f0f2f5', borderRadius: '12px', padding: '10px 14px' }}>
              <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="e.g. 123 Main St, asking $175k, ARV $310k, needs $60k rehab" rows={2}
                style={{ flex: 1, border: 'none', background: 'transparent', resize: 'none', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', maxHeight: '120px' }} />
              <button onClick={handleBuild} aria-label="Build dispo package" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#00C27C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <button onClick={handleBuild} className="btn-primary" style={{ marginTop: '12px', width: '100%', padding: '13px' }}>Build My Free Dispo Package →</button>
            <div style={{ fontSize: '11px', color: '#94a8b8', textAlign: 'center', marginTop: '8px' }}>Free · No credit card · No JV split</div>
          </div>
        </div>
      </section>

      {/* VS COMPETITORS */}
      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>Why wholesalers are <span className="serif-italic" style={{ color: '#00C27C' }}>done paying</span> for dispo packages</h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '36px', maxWidth: '680px' }}>The dispo software market is built to extract money from wholesalers. Here's what the alternatives actually cost you.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              { name: 'MaxDispo', cost: '50% of assignment fee', problem: 'On a $20K assignment, you hand over $10K — every single deal.', badge: 'JV Split' },
              { name: 'InvestorLift', cost: '$400–$800/month', problem: 'Enterprise pricing for a feature most wholesalers only need once or twice a month.', badge: 'Monthly Fee' },
              { name: 'DispoGenius', cost: '$97–$297/month', problem: 'Recurring cost whether you close 1 deal or 10. Adds up fast.', badge: 'Monthly Fee' },
              { name: 'FreeDealCalc', cost: 'Free', problem: 'Three dispo packages per month at no cost. Rentcast verified comps included. No split, no subscription required.', badge: 'Free', highlight: true },
            ].map((c, i) => (
              <div key={i} style={{ background: c.highlight ? '#0f1c2d' : 'white', borderRadius: '14px', padding: '22px', border: c.highlight ? '2px solid #00C27C' : '1px solid #e4e8ed' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <div style={{ fontSize: '15px', fontWeight: '700', color: c.highlight ? 'white' : '#0f1c2d' }}>{c.name}</div>
                  <div style={{ padding: '3px 9px', background: c.highlight ? 'rgba(0,194,124,0.2)' : 'rgba(255,80,80,0.1)', borderRadius: '5px', fontSize: '10px', fontWeight: '700', color: c.highlight ? '#00C27C' : '#e05252', letterSpacing: '0.08em' }}>{c.badge}</div>
                </div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: c.highlight ? '#00C27C' : '#e05252', marginBottom: '8px' }}>{c.cost}</div>
                <div style={{ fontSize: '13px', color: c.highlight ? '#94a8b8' : '#5a7184', lineHeight: '1.5' }}>{c.problem}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>How it works — <span className="serif-italic" style={{ color: '#00C27C' }}>three steps</span></h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '640px' }}>No templates to fill. No design software. No spreadsheets to format. Tell Freddie about the deal and he builds the package.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Describe the deal', body: 'Tell Freddie the address, your asking price, ARV, rehab estimate, and property condition. Takes about 60 seconds.' },
              { step: '02', title: 'Pull Rentcast comps', body: 'Choose to pull Rentcast verified comps automatically, add your own, or combine both. Buyers trust third-party data — it closes deals faster.' },
              { step: '03', title: 'Send to your buyer list', body: 'Your professional dispo package is ready. Download or share it directly. Every package includes a CTA that drives buyers back to the deal.' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#f0f2f5', borderRadius: '14px', padding: '24px' }}>
                <div style={{ fontSize: '42px', fontWeight: '700', color: 'rgba(0,194,124,0.2)', lineHeight: 1, marginBottom: '12px', fontFamily: 'Georgia, serif' }}>{s.step}</div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>{s.title}</div>
                <div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.55' }}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ padding: '72px 0', background: '#f0f2f5' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '12px' }}>What's in your <span className="serif-italic" style={{ color: '#00C27C' }}>dispo package</span></h2>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '40px', maxWidth: '640px' }}>Every package is built to give buyers everything they need to move fast — without a phone call to you.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { t: 'Property Overview', d: 'Address, asking price, ARV, assignment fee breakdown, and close deadline — all on one clean page.' },
              { t: 'Rentcast Verified Badge', d: 'When comps are pulled via Rentcast, the package displays a verification badge. Buyers trust the numbers; deals close faster.' },
              { t: 'Comparable Sales', d: 'Up to 3 comps with address, sale price, and distance. Your own comps, Rentcast comps, or both.' },
              { t: 'Rehab Estimate', d: 'Toggle on or off. Include scope notes to help buyers assess their own budget.' },
              { t: 'Property Condition Notes', d: 'Describe the condition honestly. Builds trust and reduces tire-kickers who back out after walkthroughs.' },
              { t: 'Buyer CTA', d: 'A direct call-to-action button that drives buyers to submit an offer or schedule a walkthrough.' },
            ].map((f, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '14px', padding: '22px' }}>
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

      {/* FAQ */}
      <section style={{ padding: '72px 0', background: 'white' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '32px' }}>Common questions about free wholesale dispo packages</h2>
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

      {/* MORE TOOLS */}
      <section style={{ padding: '52px 0', background: '#f0f2f5' }}>
        <div className="container">
          <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a8b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '14px' }}>More free tools</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            <a href="/tools/wholesale-dispo-package-generator" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Wholesale Dispo Package Generator →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>Generate unlimited packages with Rentcast comps.</div>
            </a>
            <a href="/tools/free-wholesale-deal-flyer" style={{ background: 'white', borderRadius: '12px', padding: '18px 22px', display: 'block', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', borderLeft: '3px solid #00C27C' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Free Wholesale Deal Flyer →</div>
              <div style={{ fontSize: '12.5px', color: '#5a7184' }}>One-page deal flyer for your buyer list.</div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: '#0f1c2d', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2" style={{ color: 'white', marginBottom: '16px', maxWidth: '720px', margin: '0 auto 16px' }}>Stop sending ugly spreadsheets. Build a <span className="serif-italic" style={{ color: '#00C27C' }}>free dispo package</span> in 60 seconds.</h2>
          <p style={{ fontSize: '17px', color: '#94a8b8', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>No JV split. No monthly fee. Just a professional package your buyers will actually read.</p>
          <button onClick={handleBuild} className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>Build My Dispo Package →</button>
          <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>Or <a href="/signup" style={{ color: '#00C27C', textDecoration: 'underline' }}>create a free account</a> to save your packages.</div>
        </div>
      </section>

      {/* FOOTER */}
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
