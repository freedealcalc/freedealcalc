'use client';
import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '../../lib/supabase';

const CREDIT_MAP = {
  credits_starter: 100,
  credits_standard: 300,
  credits_value: 750,
  investor_monthly: 400,
  investor_annual: 400,
  pro_monthly: 1100,
  pro_annual: 1100,
};

const LABEL_MAP = {
  credits_starter: 'Credit Pack',
  credits_standard: 'Credit Pack',
  credits_value: 'Credit Pack',
  investor_monthly: 'Investor Plan',
  investor_annual: 'Investor Plan',
  pro_monthly: 'Pro Plan',
  pro_annual: 'Pro Plan',
};

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const sessionId = searchParams.get('session_id');
  const [credits, setCredits] = useState(null);
  const [label, setLabel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/stripe/session?session_id=${sessionId}`);
        const data = await res.json();
        const priceKey = data.priceKey;
        if (priceKey && CREDIT_MAP[priceKey]) {
          setCredits(CREDIT_MAP[priceKey].toLocaleString());
          setLabel(LABEL_MAP[priceKey]);
        } else {
          setCredits(type === 'credits' ? '100' : '400');
          setLabel(type === 'credits' ? 'Credit Pack' : 'Subscription');
        }
      } catch (e) {
        setCredits(type === 'credits' ? '100' : '400');
        setLabel(type === 'credits' ? 'Credit Pack' : 'Subscription');
      }
      setLoading(false);
    }
    if (sessionId) {
      load();
    } else {
      setLoading(false);
    }
  }, [sessionId, type]);

  return (
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '48px 40px', width: '100%', maxWidth: '480px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', textAlign: 'center' }}>
        <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>You're in.</h1>
        <p style={{ fontSize: '15px', color: '#5a7184', marginBottom: '32px' }}>
          {loading ? 'Loading your purchase...' : `${label} activated. Your credits are loaded and ready to use.`}
        </p>
        {!loading && credits && (
          <div style={{ background: '#f0f2f5', borderRadius: '12px', padding: '20px', marginBottom: '32px' }}>
            <div style={{ fontSize: '13px', color: '#5a7184', marginBottom: '4px' }}>Credits added to your account</div>
            <div style={{ fontSize: '36px', fontWeight: '700', color: '#00C27C' }}>{credits}</div>
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a href="/freddie" style={{ display: 'block', padding: '14px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600' }}>
            Analyze a Deal →
          </a>
          <a href="/dashboard" style={{ display: 'block', padding: '14px', background: '#f0f2f5', color: '#0f1c2d', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600' }}>
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
      </nav>
      <Suspense fallback={<div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>}>
        <PaymentSuccessContent />
      </Suspense>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}