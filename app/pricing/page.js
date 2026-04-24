'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
    });
  }, []);

  async function handleCheckout(priceKey) {
    if (!user) {
      window.location.href = '/signup?tier=' + priceKey;
      return;
    }
    setLoading(priceKey);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceKey,
          userId: user.id,
          email: user.email,
        }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch(e) {
      console.error('Checkout error:', e);
    }
    setLoading(null);
  }

  const tiers = [
    {
      name: 'Free',
      monthly: 0,
      annual: 0,
      description: 'Analyze deals, get scores, build real documents. No credit card required.',
      color: '#5a7184',
      cta: 'Get Started Free',
      priceKey: null,
      ctaHref: '/signup?tier=free',
      highlight: false,
      features: [
        'Unlimited deal analysis with Freddie',
        'Unlimited Score Certificates',
        '3 Seller Proposals / month',
        '3 Disposition Packages / month',
        '2 Rentcast ARV lookups (lifetime)',
        'Save deals to dashboard',
        'Deal status tracking',
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
      monthly: 19,
      annual: 190,
      description: 'For active investors running real deals.',
      color: '#3badff',
      cta: 'Start Investing',
      priceKey: annual ? 'investor_annual' : 'investor_monthly',
      highlight: false,
      features: [
        'Everything in Free',
        'Unlimited Seller Proposals',
        'Unlimited Disposition Packages',
        'Unlimited Rentcast ARV lookups',
        'Submit deals to Deal Blast',
        'Priority email support',
      ],
      notIncluded: [
        'Logo on reports',
        'Public investor page',
      ]
    },
    {
      name: 'Pro',
      monthly: 39,
      annual: 390,
      description: 'For power users who want their brand on everything.',
      color: '#00C27C',
      cta: 'Go Pro',
      priceKey: annual ? 'pro_annual' : 'pro_monthly',
      highlight: true,
      features: [
        'Everything in Investor',
        'Logo on all reports',
        'Public investor page',
        'Custom username URL',
        'Priority Deal Blast queue',
        'Early access to new features',
      ],
      notIncluded: []
    }
  ];

  function getPrice(tier) {
    if (tier.monthly === null) return null;
    if (annual) {
      // annual price shown as monthly equivalent
      return Math.round(tier.annual / 12);
    }
    return tier.monthly;
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

        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '40px', fontWeight: '700', color: '#0f1c2d', marginBottom: '12px' }}>Free for real. Paid when you want more.</h1>
          <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '32px', maxWidth: '640px', margin: '0 auto 32px' }}>Run unlimited deals with Freddie, generate Score Certificates, and send Proposals — all free. Upgrade only when you need more volume.</p>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'white', borderRadius: '40px', padding: '6px 16px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            <span style={{ fontSize: '14px', color: annual ? '#94a8b8' : '#0f1c2d', fontWeight: annual ? '400' : '600' }}>Monthly</span>
            <div onClick={() => setAnnual(!annual)}
              style={{ width: '44px', height: '24px', borderRadius: '12px', background: annual ? '#00C27C' : '#e4e8ed', cursor: 'pointer', position: 'relative', transition: 'background 0.2s' }}>
              <div style={{ position: 'absolute', top: '3px', left: annual ? '23px' : '3px', width: '18px', height: '18px', borderRadius: '50%', background: 'white', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
            </div>
            <span style={{ fontSize: '14px', color: annual ? '#0f1c2d' : '#94a8b8', fontWeight: annual ? '600' : '400' }}>
              Annual <span style={{ background: 'rgba(0,194,124,0.12)', color: '#00C27C', fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '20px', marginLeft: '4px' }}>2 months free</span>
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', alignItems: 'start', maxWidth: '960px', margin: '0 auto' }}>
          {tiers.map((tier, i) => {
            const price = getPrice(tier);
            const isLoading = loading === tier.priceKey;
            return (
              <div key={i} style={{ background: 'white', borderRadius: '20px', padding: '28px', boxShadow: tier.highlight ? '0 8px 40px rgba(0,194,124,0.15)' : '0 1px 4px rgba(0,0,0,0.06)', border: tier.highlight ? '2px solid #00C27C' : '2px solid transparent', position: 'relative' }}>

                {tier.highlight && (
                  <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#00C27C', color: 'white', fontSize: '11px', fontWeight: '700', padding: '4px 14px', borderRadius: '20px', letterSpacing: '1px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                    Most Popular
                  </div>
                )}

                <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: tier.color, marginBottom: '8px' }}>{tier.name}</div>

                <div style={{ marginBottom: '8px' }}>
                  {price === 0 ? (
                    <div style={{ fontSize: '36px', fontWeight: '700', color: '#0f1c2d' }}>Free</div>
                  ) : (
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                      <div style={{ fontSize: '36px', fontWeight: '700', color: '#0f1c2d', lineHeight: 1 }}>${price}</div>
                      <div style={{ fontSize: '13px', color: '#94a8b8', marginBottom: '4px' }}>/month</div>
                    </div>
                  )}
                  {annual && price !== 0 && (
                    <div style={{ fontSize: '12px', color: '#00C27C', marginTop: '2px' }}>Billed ${tier.annual}/year</div>
                  )}
                </div>

                <div style={{ fontSize: '13px', color: '#5a7184', marginBottom: '20px', lineHeight: '1.5', minHeight: '40px' }}>{tier.description}</div>

                {tier.priceKey ? (
                  <button
                    onClick={() => handleCheckout(tier.priceKey)}
                    disabled={isLoading}
                    style={{ display: 'block', width: '100%', padding: '13px', background: tier.highlight ? '#00C27C' : '#0f1c2d', color: 'white', borderRadius: '10px', border: 'none', fontSize: '14px', fontWeight: '600', cursor: isLoading ? 'not-allowed' : 'pointer', opacity: isLoading ? 0.7 : 1, marginBottom: '24px', boxSizing: 'border-box' }}>
                    {isLoading ? 'Loading...' : tier.cta}
                  </button>
                ) : (
                  <a href={tier.ctaHref}
                    style={{ display: 'block', width: '100%', padding: '13px', background: '#f0f2f5', color: '#0f1c2d', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', textAlign: 'center', marginBottom: '24px', boxSizing: 'border-box' }}>
                    {tier.cta}
                  </a>
                )}

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

        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Questions?</h2>
          <p style={{ fontSize: '14px', color: '#5a7184' }}>Email us at <a href="mailto:info@freedealcalc.com" style={{ color: '#00C27C', textDecoration: 'none' }}>info@freedealcalc.com</a></p>
        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}