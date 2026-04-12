'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function PaymentSuccessPage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      if (data?.user) {
        const { data: profile } = await supabase.from('profiles').select('*').eq('id', data.user.id).single();
        setProfile(profile);
      }
    });
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
      </nav>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ background: 'white', borderRadius: '20px', padding: '48px 40px', width: '100%', maxWidth: '480px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', textAlign: 'center' }}>
          <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>You're in.</h1>
          <p style={{ fontSize: '15px', color: '#5a7184', marginBottom: '32px' }}>
            Welcome to {profile?.tier === 'pro' ? 'Pro' : 'Investor'}. Your credits are loaded and ready to use.
          </p>

          <div style={{ background: '#f0f2f5', borderRadius: '12px', padding: '20px', marginBottom: '32px' }}>
            <div style={{ fontSize: '13px', color: '#5a7184', marginBottom: '4px' }}>Credits added to your account</div>
            <div style={{ fontSize: '36px', fontWeight: '700', color: '#00C27C' }}>
              {profile?.tier === 'pro' ? '1,100' : '400'}
            </div>
          </div>

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
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}