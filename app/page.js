'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

export default function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
    });
  }, []);

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; }
        .nav-inner { max-width: 1100px; margin: 0 auto; width: 100%; display: flex; align-items: center; justify-content: space-between; }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #00C27C;
          color: white;
          font-size: 18px;
          font-weight: 700;
          padding: 18px 38px;
          border-radius: 14px;
          text-decoration: none;
          transition: background 0.15s, transform 0.1s;
          box-shadow: 0 4px 20px rgba(0,194,124,0.35);
        }
        .hero-btn:hover { background: #00a368; transform: translateY(-1px); }
        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.06);
          color: white;
          font-size: 18px;
          font-weight: 700;
          padding: 18px 38px;
          border-radius: 14px;
          text-decoration: none;
          transition: background 0.15s, border 0.15s, transform 0.1s;
          border: 1px solid rgba(255,255,255,0.18);
        }
        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.3);
          transform: translateY(-1px);
        }
        .hero-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .nav-link { font-size: 13px; color: #94a8b8; text-decoration: none; transition: color 0.15s; }
        .nav-link:hover { color: white; }
        .feature-card {
          background: white;
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
          transition: transform 0.15s;
        }
        .feature-card:hover { transform: translateY(-2px); }
        .big-free-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          transition: background 0.15s, border 0.15s;
        }
        .big-free-row:hover {
          background: rgba(0,194,124,0.06);
          border: 1px solid rgba(0,194,124,0.2);
        }
        .big-free-check {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #00C27C;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .free-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .free-check-sm {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(0,194,124,0.12);
          color: #00C27C;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 700;
          flex-shrink: 0;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-grid { flex-direction: column !important; text-align: left; }
          .hero-list { max-width: 100% !important; }
          .features-grid { grid-template-columns: 1fr !important; }
          .free-grid { grid-template-columns: 1fr !important; }
          .hero-headline { font-size: 38px !important; }
          .stat-row { flex-direction: column !important; gap: 16px !important; }
          .nav-links { display: none !important; }
          .nav-mobile-cta { display: flex !important; }
          .hero-cta-row { flex-direction: column !important; align-items: stretch !important; }
          .hero-cta-row a { justify-content: center; text-align: center; }
        }
      `}</style>

      {/* Nav */}
      <nav style={{ background: '#0f1c2d', padding: '0 32px', height: '60px', display: 'flex', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="nav-inner">
          <a href="/" style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '22px', color: 'white', textDecoration: 'none' }}>
            FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
          </a>
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <a href="/freddie" className="nav-link">Analyze a Deal</a>
            <a href="/freedoku" className="nav-link">FreeDoku</a>
            <a href="/pricing" className="nav-link">Pricing</a>
            <a href="/partners" className="nav-link">Partners</a>
            <a href="/tools" className="nav-link">Tools</a>
            {user ? (
              <>
                <a href="/dashboard" className="nav-link">Dashboard</a>
                <a href="/account" className="nav-link">Account</a>
                <button onClick={signOut} style={{ fontSize: '13px', color: '#94a8b8', background: 'none', border: 'none', cursor: 'pointer' }}>Sign Out</button>
              </>
            ) : (
              <>
                <a href="/login" className="nav-link">Log In</a>
                <a href="/signup" style={{ fontSize: '13px', fontWeight: '600', color: 'white', textDecoration: 'none', background: '#00C27C', padding: '7px 16px', borderRadius: '8px' }}>Sign Up Free →</a>
              </>
            )}
          </div>
          {/* Mobile CTA */}
          <div className="nav-mobile-cta" style={{ display: 'none', alignItems: 'center', gap: '10px' }}>
            {user ? (
              <a href="/dashboard" style={{ fontSize: '13px', fontWeight: '600', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '7px 14px', borderRadius: '8px' }}>Dashboard</a>
            ) : (
              <a href="/login" style={{ fontSize: '13px', fontWeight: '600', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '7px 14px', borderRadius: '8px' }}>Log In</a>
            )}
            <a href="/signup" style={{ fontSize: '13px', fontWeight: '600', color: 'white', textDecoration: 'none', background: '#00C27C', padding: '7px 14px', borderRadius: '8px' }}>Sign Up Free →</a>
          </div>
        </div>
      </nav>

      {/* Hero — free list IS the hero */}
      <section style={{ background: '#0f1c2d', padding: '40px 24px 60px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,194,124,0.12)', border: '1px solid rgba(0,194,124,0.25)', borderRadius: '20px', padding: '6px 14px', marginBottom: '20px' }}>
            <div style={{ width: '6px', height: '6px', background: '#00C27C', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
            <span style={{ fontSize: '12px', color: '#00C27C', fontWeight: '600', letterSpacing: '0.5px' }}>100% FREE · NO CREDIT CARD</span>
          </div>

          <h1 className="hero-headline" style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontSize: '52px', fontStyle: 'italic', color: 'white', lineHeight: '1.05', letterSpacing: '-1px', marginBottom: '14px' }}>
            Real deals. Real numbers. <span style={{ color: '#00C27C' }}>Free</span>.
          </h1>

          <p style={{ fontSize: '17px', color: '#94a8b8', lineHeight: '1.5', marginBottom: '32px', maxWidth: '560px' }}>
            No trial. No credit card. No tricks. Run real deals, generate real documents, send real offers — free.
          </p>

          {/* The free list — big, bold, scannable */}
          <div className="hero-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
            {[
              { title: 'Unlimited deal analysis with Freddie', sub: 'Flips, rentals, BRRRR, wholesale — talk to him about as many as you want' },
              { title: 'Unlimited Score Certificates', sub: 'Branded PDFs for every deal. Share anywhere.' },
              { title: 'Free Seller Proposals', sub: 'AI-written offer letters ready to send. 3 per month.' },
              { title: 'Free Disposition Packages', sub: 'Full buyer packages for your wholesale deals. 3 per month.' },
              { title: 'Free ARV lookups', sub: 'Real comp data. 2 lifetime on Free — unlimited on paid.' },
              { title: 'Dashboard + deal history', sub: 'Every deal you run saved forever. Build a real pipeline.' },
            ].map((item, i) => (
              <div key={i} className="big-free-row">
                <div className="big-free-check">✓</div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '600', color: 'white', marginBottom: '2px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: '#94a8b8' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-cta-row">
            <a href="/freddie" className="hero-btn">
              Try Freddie Free →
            </a>
            <a href="/signup" className="hero-btn-secondary">
              Sign Up — 10 Seconds →
            </a>
          </div>
          <p style={{ fontSize: '12px', color: '#5a7184', marginTop: '14px' }}>
            Already have an account? <a href="/login" style={{ color: '#94a8b8' }}>Log in</a>
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: '#00C27C', padding: '28px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} className="stat-row">
          {[
            { num: '30+', label: 'Years Investor Experience' },
            { num: '4', label: 'Deal Strategies Covered' },
            { num: 'Free', label: 'To Analyze Every Deal' },
            { num: '60s', label: 'To Your First Score' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>{s.num}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ background: '#f0f2f5', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '38px', color: '#0f1c2d', letterSpacing: '-0.5px' }}>From First Look to Closed Deal</h2>
            <p style={{ fontSize: '16px', color: '#5a7184', marginTop: '12px' }}>FreeDealCalc runs with you every step of the way.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="features-grid">
            {[
              { icon: '🤖', title: 'AI Deal Interview', desc: 'Freddie asks the right questions. You just answer. No confusing forms, no missed inputs — just a conversation that builds your analysis.' },
              { icon: '📊', title: 'Pro Score & Report', desc: 'Get a deal score backed on real investor methodology. Share a professional PDF report with partners, lenders, and sellers.' },
              { icon: '🔗', title: 'Lender & Agent Match', desc: 'Connected to investor-friendly lenders, agents, and title companies who know how to close deals fast.' },
              { icon: '📣', title: 'Deal Blast', desc: 'Wholesalers — submit your deal and we push it to a verified list of active buyers. Move deals faster.' },
              { icon: '📁', title: 'Deal Dashboard', desc: 'Every deal you run is saved, scored, and ready to revisit. Track your pipeline and never lose a number again.' },
              { icon: '💰', title: 'Free That Actually Works', desc: 'Run unlimited deal scores, unlimited Certificates, plus monthly Seller Proposals and Dispo Packages — all free. No credit card.' },
            ].map((f, i) => (
              <div key={i} className="feature-card">
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{f.icon}</div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#0f1c2d', marginBottom: '8px' }}>{f.title}</div>
                <div style={{ fontSize: '13.5px', color: '#5a7184', lineHeight: '1.6' }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'white', padding: '80px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '38px', color: '#0f1c2d', letterSpacing: '-0.5px', marginBottom: '48px' }}>How It Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { step: '1', title: 'Tell Freddie About Your Deal', desc: 'Drop your numbers — address, purchase price, ARV, rehab budget. Freddie asks for exactly what he needs.' },
              { step: '2', title: 'Get Your Score in Seconds', desc: 'A deal score built on real investor methodology. Not a generic algorithm — 30 years of experience baked in.' },
              { step: '3', title: 'Take Action', desc: 'Download your report, connect with lenders and agents, blast your deal to buyers. Everything in one place.' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', padding: '28px 0', borderBottom: i < 2 ? '1px solid #f0f2f5' : 'none', textAlign: 'left' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#00C27C', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '700', color: 'white', flexShrink: 0 }}>{s.step}</div>
                <div>
                  <div style={{ fontSize: '17px', fontWeight: '600', color: '#0f1c2d', marginBottom: '6px' }}>{s.title}</div>
                  <div style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.6' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: '#0f1c2d', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <Image src="/Freddie the real estate investor.png" alt="Freddie" width={120} height={120} style={{ borderRadius: '50%', marginBottom: '24px' }} />
          <h2 style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '38px', color: 'white', letterSpacing: '-0.5px', marginBottom: '16px' }}>
            Stop reading. Start analyzing.
          </h2>
          <p style={{ fontSize: '16px', color: '#94a8b8', marginBottom: '32px', lineHeight: '1.7' }}>
            It's free. Takes 10 seconds. No credit card.
          </p>
          <a href="/signup" className="hero-btn" style={{ fontSize: '18px', padding: '18px 40px' }}>
            Sign Up Free →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0a1520', padding: '32px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '18px', color: 'white', marginBottom: '8px' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </div>
        <div style={{ fontSize: '12px', color: '#5a7184' }}>
          <a href="/privacy" style={{ color: '#5a7184', textDecoration: 'none', marginRight: '16px' }}>Privacy</a>
          <a href="/terms" style={{ color: '#5a7184', textDecoration: 'none', marginRight: '16px' }}>Terms</a>
          <a href="/contact" style={{ color: '#5a7184', textDecoration: 'none' }}>Contact</a>
        </div>
        <div style={{ fontSize: '11px', color: '#3a4a5a', marginTop: '12px' }}>© 2026 FreeDealCalc. Analyze. Report. Win.</div>
      </footer>
    </>
  );
}