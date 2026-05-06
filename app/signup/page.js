'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '../../lib/supabase';

function SignupForm() {
  const searchParams = useSearchParams();
  const intent = searchParams.get('intent') || null;
  const dealId = searchParams.get('deal_id') || '';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [dealBlastOptin, setDealBlastOptin] = useState(true); // default true per handoff
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Intent-aware headline + subcopy so signup page matches what the user came for
  const intentMap = {
    certificate: {
      headline: 'Unlock your Score Certificate',
      sub: 'Free account — get your AI-generated deal analysis PDF, save this deal to your dashboard, and run unlimited future analyses.',
      cta: 'Unlock Certificate →',
    },
    proposal: {
      headline: 'Unlock your Seller Proposal',
      sub: 'Free account — generate a professional offer letter, save this deal to your dashboard, and run unlimited future analyses.',
      cta: 'Unlock Proposal →',
    },
    dispo: {
      headline: 'Unlock your Disposition Package',
      sub: 'Free account — generate a buyer-ready package, save this deal to your dashboard, and run unlimited future analyses.',
      cta: 'Unlock Package →',
    },
    save: {
      headline: 'Save this deal to your dashboard',
      sub: 'Free account — keep all your deals in one place and run unlimited future analyses.',
      cta: 'Create Free Account →',
    },
    score: {
      headline: 'Unlock your deal score',
      sub: 'Free account — see your full score, save your deals, and run unlimited future analyses.',
      cta: 'See My Score →',
    },
  };
  const copy = intentMap[intent] || {
    headline: 'Create your account',
    sub: 'Free forever. Save your deals and track your pipeline.',
    cta: 'Create Free Account',
  };

  // After email confirmation + login, route based on intent
  function getPostLoginRoute() {
    if (intent === 'certificate' && dealId) return `/certificate?deal_id=${dealId}`;
    if (intent === 'proposal' && dealId) return `/proposal?deal_id=${dealId}`;
    if (intent === 'dispo' && dealId) return `/dispo?deal_id=${dealId}`;
    if (intent === 'save' || intent === 'score') return '/dashboard';
    return '/dashboard';
  }

  async function handleSignup() {
    if (!email || !password || !name) {
      setError('Please fill in all fields.');
      return;
    }
    if (!agreed) {
      setError('Please agree to the Terms of Service and Privacy Policy.');
      return;
    }
    setLoading(true);
    setError(null);

    const postLoginRoute = getPostLoginRoute();

    // Stash intent + deal_id in sessionStorage so post-confirmation login can route them back
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem('fdc_post_signup_intent', JSON.stringify({
          intent,
          deal_id: dealId,
          route: postLoginRoute,
        }));
      } catch (e) {}
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: name,
          deal_blast_optin: dealBlastOptin,
          signup_intent: intent || null,
        }
      }
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    // Persist deal_blast_optin to profiles row if the row exists at this point
    // (Some Supabase setups create the profile via trigger after email confirmation —
    // we attempt the update but don't fail signup if the profile doesn't exist yet.
    // The auth metadata above is the durable record that a trigger or
    // post-confirmation handler can read from when it creates the profile.)
    try {
      if (data?.user?.id) {
        await supabase
          .from('profiles')
          .update({ deal_blast_optin: dealBlastOptin })
          .eq('id', data.user.id);
      }
    } catch (e) {
      // Non-fatal — auth metadata still has the opt-in value
    }

    // Clear anonymous deal counter and dismissed-prompt flag — they're registered now
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('fdc_anon_deal_count');
        localStorage.removeItem('fdc_soft_prompt_dismissed');
      } catch (e) {}
    }

    setMessage('Check your email to confirm your account, then log in to continue.');
    setLoading(false);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
      </nav>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ background: 'white', borderRadius: '20px', padding: '36px 32px', width: '100%', maxWidth: '440px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>

          {intent && intent !== 'save' && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 10px', background: 'rgba(0,194,124,0.1)', border: '1px solid rgba(0,194,124,0.2)', borderRadius: '6px', fontSize: '11px', fontWeight: '700', color: '#00C27C', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              One step away
            </div>
          )}

          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px', lineHeight: '1.25' }}>{copy.headline}</h1>
          <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '26px', lineHeight: '1.55' }}>{copy.sub}</p>

          {message && (
            <div style={{ background: 'rgba(0,194,124,0.1)', border: '1px solid #00C27C', borderRadius: '10px', padding: '12px 16px', fontSize: '14px', color: '#00a368', marginBottom: '20px' }}>
              {message}
            </div>
          )}

          {error && (
            <div style={{ background: 'rgba(255,80,80,0.1)', border: '1px solid #ff5050', borderRadius: '10px', padding: '12px 16px', fontSize: '14px', color: '#ff5050', marginBottom: '20px' }}>
              {error}
            </div>
          )}

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Dan Smith"
              style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="dan@example.com"
              style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="8+ characters"
              style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }}
            />
          </div>

          {/* Deal Blast opt-in — default checked */}
          <div style={{ background: 'rgba(0,194,124,0.05)', border: '1px solid rgba(0,194,124,0.2)', borderRadius: '10px', padding: '12px 14px', marginBottom: '18px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <input
              type="checkbox"
              id="dealblast"
              checked={dealBlastOptin}
              onChange={e => setDealBlastOptin(e.target.checked)}
              style={{ marginTop: '2px', width: '16px', height: '16px', accentColor: '#00C27C', flexShrink: 0, cursor: 'pointer' }}
            />
            <label htmlFor="dealblast" style={{ fontSize: '13px', color: '#0f1c2d', lineHeight: '1.5', cursor: 'pointer' }}>
              <strong style={{ fontWeight: '600' }}>Notify me about deal opportunities in my market</strong>
              <span style={{ display: 'block', color: '#5a7184', fontSize: '12px', marginTop: '2px' }}>Get Deal Blast emails when wholesalers post scored deals near you. Unsubscribe anytime.</span>
            </label>
          </div>

          {/* Terms checkbox */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '22px' }}>
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={e => setAgreed(e.target.checked)}
              style={{ marginTop: '2px', width: '16px', height: '16px', accentColor: '#00C27C', flexShrink: 0, cursor: 'pointer' }}
            />
            <label htmlFor="agree" style={{ fontSize: '13px', color: '#5a7184', lineHeight: '1.5', cursor: 'pointer' }}>
              I agree to the{' '}
              <a href="/terms" target="_blank" style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '500' }}>Terms of Service</a>
              {' '}and{' '}
              <a href="/privacy" target="_blank" style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '500' }}>Privacy Policy</a>
            </label>
          </div>

          <button
            onClick={handleSignup}
            disabled={loading || !agreed}
            style={{ width: '100%', padding: '14px', background: agreed ? '#00C27C' : '#e4e8ed', border: 'none', borderRadius: '10px', color: agreed ? 'white' : '#94a8b8', fontSize: '15px', fontWeight: '600', cursor: loading || !agreed ? 'not-allowed' : 'pointer' }}
          >
            {loading ? 'Creating account...' : copy.cta}
          </button>

          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#5a7184' }}>
            Already have an account?{' '}
            <a href={`/login${intent ? `?intent=${intent}${dealId ? `&deal_id=${dealId}` : ''}` : ''}`} style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '500' }}>Log in</a>
          </div>
        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif', color: '#5a7184' }}>Loading...</div>}>
      <SignupForm />
    </Suspense>
  );
}