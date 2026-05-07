'use client';
import { useState } from 'react';

export default function WholesaleRealEstateSoftwarePage() {
  const [message, setMessage] = useState('');

  const handleFreddie = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('fdc_seed_message', message || 'I want to analyze a wholesale real estate deal');
      window.location.href = '/freddie';
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Free Wholesale Real Estate Software",
        "url": "https://freedealcalc.com/tools/wholesale-real-estate-software",
        "description": "Free AI wholesale real estate software. Calculate MAO, assignment fees, ARV, and deal score for wholesale deals — Disposition Packages included, free forever.",
        "applicationCategory": "FinanceApplication",
        "isAccessibleForFree": true,
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is wholesale real estate software?", "acceptedAnswer": { "@type": "Answer", "text": "Wholesale real estate software helps investors calculate MAO (Maximum Allowable Offer), estimate ARV, model assignment fees, and generate disposition packages to present deals to cash buyers. FreeDealCalc adds AI deal scoring and Disposition Package generation." } },
          { "@type": "Question", "name": "How do I calculate MAO for a wholesale deal?", "acceptedAnswer": { "@type": "Answer", "text": "MAO = (ARV × 70%) minus estimated rehab minus your desired assignment fee. If ARV is $300K, rehab is $40K, and you want $15K: MAO = ($300K × 0.70) - $40K - $15K = $155K maximum offer. Freddie calculates this instantly." } },
          { "@type": "Question", "name": "What is a good assignment fee for wholesale?", "acceptedAnswer": { "@type": "Answer", "text": "Most wholesalers target $10,000-$25,000 per deal. In high-value markets like Northern Virginia, assignment fees of $25,000-$50,000+ are achievable on the right acquisition. Freddie models your fee at different MAO scenarios." } },
          { "@type": "Question", "name": "What is a Disposition Package?", "acceptedAnswer": { "@type": "Answer", "text": "A Disposition Package is a professional PDF deal summary you send to cash buyers — including ARV, rehab estimate, MAO, photos, comps, and deal score. FreeDealCalc generates these automatically to help you move deals faster." } },
          { "@type": "Question", "name": "How do I find cash buyers for wholesale deals?", "acceptedAnswer": { "@type": "Answer", "text": "FreeDealCalc's Deal Blast distributes your deal to our verified cash buyer network. You can also build your own list through REI meetups, PropStream, and InvestorLift — all partners of FreeDealCalc." } },
          { "@type": "Question", "name": "What is the difference between wholesale and wholetail?", "acceptedAnswer": { "@type": "Answer", "text": "Wholesale is assigning a contract to a buyer before closing. Wholetail is buying the property, doing minimal cleanup, then listing on the MLS to sell to a retail buyer or investor. Wholetail captures more profit but requires you to close. Freddie models both." } }
        ]
      }
    ]
  };

  return (
    <>
      <head>
        <title>Free Wholesale Real Estate Software | FreeDealCalc</title>
        <meta name="description" content="Free AI wholesale real estate software. Calculate MAO, assignment fees, and deal score. Generate Disposition Packages instantly — free forever." />
        <link rel="canonical" href="https://freedealcalc.com/tools/wholesale-real-estate-software" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>

      <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#F0F2F5', minHeight: '100vh' }}>
        <nav style={{ background: '#0f1c2d', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 22, color: '#fff', textDecoration: 'none' }}>FreeDealCalc</a>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <a href="/freddie" style={{ color: '#ccc', textDecoration: 'none', fontSize: 14 }}>Try Freddie</a>
            <a href="/pricing" style={{ color: '#ccc', textDecoration: 'none', fontSize: 14 }}>Pricing</a>
            <a href="/signup" style={{ background: '#00C27C', color: '#fff', padding: '8px 16px', borderRadius: 6, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Sign Up Free</a>
          </div>
        </nav>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: '#00C27C', color: '#fff', fontSize: 12, fontWeight: 700, padding: '6px 14px', borderRadius: 4, marginBottom: 20, letterSpacing: 1 }}>STOP PAYING. START WINNING.</div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#00C27C', fontSize: 'clamp(32px, 5vw, 52px)', margin: '0 0 16px', lineHeight: 1.2 }}>Free Wholesale Real Estate Software</h1>
          <p style={{ color: '#a0aec0', fontSize: 18, maxWidth: 580, margin: '0 auto 36px' }}>Calculate MAO, assignment fees, and deal score in seconds. Generate Disposition Packages that move deals. Free forever.</p>
          <div style={{ maxWidth: 560, margin: '0 auto', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 24 }}>
            <p style={{ color: '#fff', fontWeight: 600, marginBottom: 12, textAlign: 'left', fontSize: 14 }}>Tell Freddie about your wholesale deal:</p>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="e.g. Off-market 4BR in Stafford VA, seller wants $195K, ARV around $320K, needs $55K rehab. What's my MAO for a $20K assignment fee?" style={{ width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: 14, color: '#fff', fontSize: 14, resize: 'vertical', minHeight: 80, boxSizing: 'border-box' }} />
            <button onClick={handleFreddie} style={{ marginTop: 12, width: '100%', background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '14px 0', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Calculate My MAO →</button>
          </div>
        </section>

        <section style={{ padding: '64px 24px', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 40 }}>What you get — free</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              { icon: '🧮', title: 'MAO Calculator', desc: 'Instant Maximum Allowable Offer at any assignment fee target — ARV-based, rehab-adjusted.' },
              { icon: '💼', title: 'Disposition Packages', desc: 'Professional buyer-ready PDF with ARV, rehab, deal score, and comps — generated in seconds.' },
              { icon: '📊', title: 'Wholesale vs Wholetail', desc: 'Freddie models both — know when buying and reselling yourself beats the assignment fee.' },
              { icon: '🏆', title: 'Deal Score 0–100', desc: 'Every wholesale deal gets an A–F grade. Send your best deals to buyers with a 90+ score.' },
              { icon: '📣', title: 'Deal Blast', desc: 'Submit your deal to FreeDealCalc\'s verified cash buyer network to move inventory faster.' },
              { icon: '🔒', title: 'Free Forever', desc: 'Core wholesale analysis permanently free. Disposition Packages on Pro ($39/mo).' },
            ].map((f, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: 8, color: '#0f1c2d' }}>{f.title}</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#fff', padding: '64px 24px' }}>
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 36, color: '#0f1c2d', marginBottom: 8 }}>When wholesale math said no — and wholetail said $115,050</h2>
            <p style={{ color: '#666', fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>On this Northern Virginia hoarder house, the wholesale MAO at a $20K assignment fee came out to $174K. The seller wanted $210K — a $36K gap. No wholesale deal. But we had the capital to close, so we ran the wholetail scenario: buy at $210K, $5K cleanout, list as-is. Freddie scored it 100/100 at $349K resale. That's the difference between wholesale software that only does MAO math and a platform that models every exit. We bought it, listed it, and closed for $115,050 profit in 30 days.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, marginBottom: 32 }}>
              <img src="/images/wholetail-before.jpg" alt="Northern Virginia wholesale deal before" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
              <img src="/images/wholetail-after-buyer-reno.jpg" alt="After buyer renovation" style={{ width: '100%', borderRadius: 10, objectFit: 'cover', height: 220 }} onError={e => { e.target.style.display = 'none'; }} />
            </div>
            <p style={{ fontStyle: 'italic', color: '#888', fontSize: 13, marginBottom: 32 }}>We sold the property as-is for $349K. The renovation pictured was completed by the buyer who purchased it from us. The $115,050 profit reflects our wholetail exit, not the renovation work.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 32 }}>
              {[['Purchase','$210,000'],['Cleanout','$5,000'],['Resale','$349,000'],['Hold Time','1 month'],['Strategy','Wholetail'],['Net Profit','$115,050']].map(([k,v],i) => (
                <div key={i} style={{ background: '#F0F2F5', borderRadius: 8, padding: '16px 20px', textAlign: 'center' }}>
                  <div style={{ fontSize: 12, color: '#888', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>{k}</div>
                  <div style={{ fontWeight: 700, fontSize: 20, color: '#0f1c2d' }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, background: '#F0F2F5', borderRadius: 12, padding: 24 }}>
              <div style={{ textAlign: 'center', flexShrink: 0 }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', border: '4px solid #00C27C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontWeight: 800, fontSize: 22, color: '#0f1c2d' }}>100</div>
                  <div style={{ fontSize: 10, color: '#888' }}>/100</div>
                </div>
                <div style={{ marginTop: 6, fontSize: 12, fontWeight: 700, color: '#00C27C' }}>Strong Deal</div>
              </div>
              <p style={{ color: '#555', fontSize: 14, lineHeight: 1.7, margin: 0 }}>Freddie scored the wholetail <strong>100/100</strong>. When the wholesale math doesn't work, the best software shows you the next best exit automatically.</p>
            </div>
          </div>
        </section>

        <section style={{ padding: '48px 24px' }}>
          <div style={{ maxWidth: 700, margin: '0 auto', background: '#0f1c2d', borderLeft: '4px solid #00C27C', borderRadius: 8, padding: '28px 32px' }}>
            <p style={{ color: '#fff', fontSize: 18, fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>"Wholesale software lesson: MAO math is the beginning, not the end. When the gap is too wide to wholesale, the best software shows you the next play."</p>
          </div>
        </section>

        <section style={{ padding: '48px 24px', maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 32, color: '#0f1c2d', marginBottom: 32 }}>Wholesale Real Estate Software FAQ</h2>
          {[
            ['What is wholesale real estate software?', "Wholesale real estate software helps investors calculate MAO (Maximum Allowable Offer), estimate ARV, model assignment fees, and generate disposition packages to present deals to cash buyers. FreeDealCalc adds AI deal scoring and Disposition Package generation."],
            ['How do I calculate MAO for a wholesale deal?', 'MAO = (ARV × 70%) minus estimated rehab minus your desired assignment fee. If ARV is $300K, rehab is $40K, and you want $15K: MAO = ($300K × 0.70) - $40K - $15K = $155K maximum offer. Freddie calculates this instantly.'],
            ['What is a good assignment fee for wholesale?', 'Most wholesalers target $10,000-$25,000 per deal. In high-value markets like Northern Virginia, assignment fees of $25,000-$50,000+ are achievable on the right acquisition. Freddie models your fee at different MAO scenarios.'],
            ['What is a Disposition Package?', 'A Disposition Package is a professional PDF deal summary you send to cash buyers — including ARV, rehab estimate, MAO, photos, comps, and deal score. FreeDealCalc generates these automatically to help you move deals faster.'],
            ['How do I find cash buyers for wholesale deals?', "FreeDealCalc's Deal Blast distributes your deal to our verified cash buyer network. You can also build your own list through REI meetups, PropStream, and InvestorLift — all partners of FreeDealCalc."],
            ['What is the difference between wholesale and wholetail?', 'Wholesale is assigning a contract to a buyer before closing. Wholetail is buying the property, doing minimal cleanup, then listing on the MLS to sell to a retail buyer or investor. Wholetail captures more profit but requires you to close. Freddie models both.'],
          ].map(([q, a], i) => (
            <details key={i} style={{ borderBottom: '1px solid #e0e0e0', padding: '16px 0' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', color: '#0f1c2d', fontSize: 15 }}>{q}</summary>
              <p style={{ color: '#555', marginTop: 10, lineHeight: 1.7, fontSize: 14 }}>{a}</p>
            </details>
          ))}
        </section>

        <section style={{ padding: '48px 24px', background: '#fff' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 28, color: '#0f1c2d', marginBottom: 20 }}>More free tools</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <a href="/tools/free-ai-wholesale-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>AI Wholesale Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>Full wholesale deal analysis with MAO and comps</div>
              </a>
              <a href="/tools/wholetail-calculator" style={{ background: '#F0F2F5', borderRadius: 8, padding: '20px', textDecoration: 'none', color: '#0f1c2d' }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Wholetail Calculator →</div>
                <div style={{ fontSize: 13, color: '#666' }}>When wholesale doesn't work, try wholetail</div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ background: '#0f1c2d', padding: '64px 24px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: 36, marginBottom: 16 }}>Try the free wholesale software now</h2>
          <p style={{ color: '#a0aec0', fontSize: 16, marginBottom: 32 }}>Free. No credit card. No expiration.</p>
          <button onClick={() => { sessionStorage.setItem('fdc_seed_message', 'I want to analyze a wholesale real estate deal'); window.location.href = '/freddie'; }} style={{ background: '#00C27C', color: '#fff', border: 'none', borderRadius: 8, padding: '16px 40px', fontSize: 18, fontWeight: 700, cursor: 'pointer' }}>Talk to Freddie →</button>
        </section>

        <footer style={{ background: '#0a1628', padding: '32px 24px', textAlign: 'center' }}>
          <p style={{ color: '#666', fontSize: 13, margin: 0 }}>© 2025 FreeDealCalc.com · <a href="/privacy" style={{ color: '#666' }}>Privacy</a> · <a href="/terms" style={{ color: '#666' }}>Terms</a> · Not financial advice. Always do your own due diligence.</p>
        </footer>
      </div>
    </>
  );
}
