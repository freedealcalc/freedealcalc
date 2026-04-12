'use client';
import { useState } from 'react';

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const tiers = [
    {
      name: 'Free',
      monthly: 0,
      annual: 0,
      credits: 50,
      description: 'Analyze deals and get your score. No credit card required.',
      color: '#5a7184',
      cta: 'Get Started Free',
      ctaHref: '/signup?tier=free',
      highlight: false,
      features: [
        '50 AI credits / month',
        'Unlimited deal analysis',
        'Deal score + verdict',
        'Save deals to dashboard',
        'Deal status tracking',
        'Phone + name on reports',
        'Receive Deal Blast alerts',
      ],
      notIncluded: [
        'Logo on reports',
        'Public investor page',
        'Submit deals to Deal Blast',
      ]
    },
    {
      name: 'Investor',
      monthly: 49,
      annual: Math.round(49 * 12 * 0.8 / 12),
      credits: 400,
      description: 'For active investors who want professional AI outputs.',
      color: '#3badff',
      cta: 'Start Investing',
      ctaHref: '/signup?tier=investor',
      highlight: false,
      features: [
        '400 AI credits / month',
        'Unlimited deal analysis',
        'Deal score + verdict',
        'Save deals to dashboard',
        'Deal status tracking',
        'Phone + name on reports',
        'Score Certificate — 10 credits',
        'Seller Proposal — 25 credits',
        'Disposition Package — 50 credits',
        'Submit deals to Deal Blast',
        'Receive Deal Blast alerts',
      ],
      notIncluded: [
        'Logo on reports',
        'Public investor page',
      ]
    },
    {
      name: 'Pro',
      monthly: 99,
      annual: Math.round(99 * 12 * 0.8 / 12),
      credits: 1100,
      description: 'For power users who want their brand on everything.',
      color: '#00C27C',
      cta: 'Go Pro',
      ctaHref: '/signup?tier=pro',
      highlight: true,
      features: [
        '1,100 AI credits / month',
        'Unlimited deal analysis',
        'Deal score + verdict',
        'Save deals to dashboard',
        'Deal status tracking',
        'Phone + name on reports',
        'Score Certificate — 10 credits',
        'Seller Proposal — 25 credits',
        'Disposition Package — 50 credits',
        'Submit deals to Deal Blast',
        'Receive Deal Blast alerts',
        'Logo on all reports',
        'Public investor page',
        'Custom username URL',
      ],
      notIncluded: []
    },
    {
      name: 'Enterprise',
      monthly: null,
      annual: null,
      credits: null,
      description: 'For teams and high-volume operations. Custom everything.',
      color: '#0f1c2d',
      cta: 'Contact Us',
      ctaHref: 'mailto:dan@hssvirginia.com',
      highlight: false,
      features: [
        'Custom credit volume',
        'Team seats',
        'Dedicated support',
        'Custom integrations',
        'Volume Deal Blast pricing',
        'Everything in Pro',
      ],
      notIncluded: []
    }
  ];

  function getPrice(tier) {
    if (tier.monthly === null) return null;
    return annual ? tier.annual : tier.monthly;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif' }}>
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>Analyze a Deal</a>
          <a href="/login" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>Log In</a>
        </div>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '40px', fontWeight: '700', color: '#0f1c2d', marginBottom: '12px' }}>
            Simple, honest pricing
          </h1>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '32px' }}>
            The deal analyzer is always free. Pay only for AI-powered outputs.
          </p>

          {/* Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'white', borderRadius: '40px', padding: '6px 16px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            <span style={{ fontSize: '14px', color: annual ? '#94a8b8' : '#0f1c2d', fontWeight: annual ? '400' : '600' }}>Monthly</span>
            <div
              onClick={() => setAnnual(!annual)}
              style={{ width: '44px', height: '24px', borderRadius: '12px', background: annual ? '#00C27C' : '#e4e8ed', cursor: 'pointer', position: 'relative', transition: 'background 0.2s' }}
            >
              <div style={{ position: 'absolute', top: '3px', left: annual ? '23px' : '3px', width: '18px', height: '18px', borderRadius: '50%', background: 'white', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
            </div>
            <span style={{ fontSize: '14px', color: annual ? '#0f1c2d' : '#94a8b8', fontWeight: annual ? '600' : '400' }}>
              Annual <span style={{ background: 'rgba(0,194,124,0.12)', color: '#00C27C', fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '20px', marginLeft: '4px' }}>Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', alignItems: 'start' }}>
          {tiers.map((tier, i) => {
            const price = getPrice(tier);
            return (
              <div key={i} style={{ background: 'white', borderRadius: '20px', padding: '28px', boxShadow: tier.highlight ? `0 8px 40px rgba(0,194,124,0.15)` : '0 1px 4px rgba(0,0,0,0.06)', border: tier.highlight ? '2px solid #00C27C' : '2px solid transparent', position: 'relative' }}>

                {tier.highlight && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#00C27C', color: 'white', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    Most Popular
                  </div>
                )}

                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: tier.color, marginBottom: '8px' }}>{tier.name}</div>

                <div style={{ marginBottom: '8px' }}>
                  {price === null ? (
                    <div style={{ fontSize: '28px', fontWeight: '700', color: '#0f1c2d' }}>Custom</div>
                  ) : price === 0 ? (
                    <div style={{ fontSize: '36px', fontWeight: '700', color: '#0f1c2d' }}>Free</div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                      <div style={{ fontSize: '36px', fontWeight: '700', color: '#0f1c2d', lineHeight: 1 }}>${price}</div>
                      <div style={{ fontSize: '13px', color: '#94a8b8', marginBottom: '4px' }}>/month</div>
                    </div>
                  )}
                  {annual && price !== null && price !== 0 && (
                    <div style={{ fontSize: '12px', color: '#00C27C', marginTop: '2px' }}>Billed ${price * 12}/year</div>
                  )}
                </div>

                {tier.credits && (
                  <div style={{ fontSize: '12px', color: '#5a7184', marginBottom: '12px' }}>
                    {tier.credits.toLocaleString()} credits / month
                  </div>
                )}

                <div style={{ fontSize: '13px', color: '#5a7184', marginBottom: '20px', lineHeight: '1.5' }}>{tier.description}</div>

                <a href={tier.ctaHref} style={{ display: 'block', width: '100%', padding: '13px', background: tier.highlight ? '#00C27C' : tier.monthly === 0 ? '#f0f2f5' : '#0f1c2d', color: tier.highlight ? 'white' : tier.monthly === 0 ? '#0f1c2d' : 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', textAlign: 'center', marginBottom: '24px', boxSizing: 'border-box' }}>
                  {tier.cta}
                </a>

                <div style={{ borderTop: '1px solid #f0f2f5', paddingTop: '20px' }}>
                  {tier.features.map((f, j) => (
                    <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px', fontSize: '13px', color: '#0f1c2d' }}>
                      <span style={{ color: '#00C27C', flexShrink: 0, marginTop: '1px' }}>✓</span>
                      <span>{f}</span>
                    </div>
                  ))}
                  {tier.notIncluded.map((f, j) => (
                    <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px', fontSize: '13px', color: '#94a8b8' }}>
                      <span style={{ flexShrink: 0, marginTop: '1px' }}>—</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Deal Blast callout */}
        <div style={{ background: '#0f1c2d', borderRadius: '20px', padding: '32px', marginTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '6px' }}>Deal Blast — Reach Verified Investors</div>
            <div style={{ fontSize: '14px', color: '#94a8b8', maxWidth: '500px' }}>Submit your wholesale deal to our verified investor list. Dan reviews every deal before it goes out. Available on Investor and Pro plans.</div>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'white' }}>$499</div>
              <div style={{ fontSize: '11px', color: '#94a8b8' }}>Single List</div>
            </div>
            <div style={{ fontSize: '20px', color: '#94a8b8' }}>·</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '24px', fontWeight: '700', color: 'white' }}>$799</div>
              <div style={{ fontSize: '11px', color: '#94a8b8' }}>Dual List</div>
            </div>
            <a href="/signup?tier=investor" style={{ padding: '12px 24px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', whiteSpace: 'nowrap' }}>Get Access →</a>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Questions?</h2>
          <p style={{ fontSize: '14px', color: '#5a7184' }}>Email us at <a href="mailto:info@freedealcalc.com" style={{ color: '#00C27C', textDecoration: 'none' }}>info@freedealcalc.com</a></p>
        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}