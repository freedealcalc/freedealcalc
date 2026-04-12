'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    investor_type: '',
    markets: '',
    deal_count_range: '',
    phone: '',
    company_name: '',
    website: '',
  });

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) window.location.href = '/login';
      else setUser(data.user);
    });
  }, []);

  function set(key, val) {
    setForm(f => ({ ...f, [key]: val }));
  }

  async function finish() {
    setLoading(true);
    await supabase.from('profiles').upsert({
      id: user.id,
      display_name: user.user_metadata?.display_name || '',
      ...form,
    });
    window.location.href = '/dashboard';
  }

  const investorTypes = ['Flipper', 'Wholesaler', 'Newbie', 'Agent', 'Lender'];
  const dealCounts = ['0', '1–5', '6–20', '20+'];

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif', display: 'flex', flexDirection: 'column' }}>
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px', alignItems: 'center' }}>
          {[1, 2, 3].map(s => (
            <div key={s} style={{ width: '8px', height: '8px', borderRadius: '50%', background: s <= step ? '#00C27C' : 'rgba(255,255,255,0.2)', transition: 'background 0.2s' }} />
          ))}
        </div>
      </nav>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <div style={{ background: 'white', borderRadius: '20px', padding: '40px', width: '100%', maxWidth: '480px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>

          {step === 1 && (
            <>
              <div style={{ fontSize: '11px', color: '#94a8b8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Step 1 of 3</div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>How do you invest?</h2>
              <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '28px' }}>This helps us personalize your experience.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}>
                {investorTypes.map(type => (
                  <button key={type} onClick={() => set('investor_type', type)}
                    style={{ padding: '14px', borderRadius: '12px', border: `2px solid ${form.investor_type === type ? '#00C27C' : '#e4e8ed'}`, background: form.investor_type === type ? 'rgba(0,194,124,0.08)' : 'white', color: form.investor_type === type ? '#00C27C' : '#0f1c2d', fontSize: '14px', fontWeight: '600', cursor: 'pointer', transition: 'all 0.15s' }}>
                    {type}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(2)} disabled={!form.investor_type}
                style={{ width: '100%', padding: '14px', background: form.investor_type ? '#00C27C' : '#e4e8ed', color: form.investor_type ? 'white' : '#94a8b8', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: form.investor_type ? 'pointer' : 'not-allowed' }}>
                Continue →
              </button>
              <button onClick={() => setStep(2)} style={{ width: '100%', padding: '10px', background: 'none', border: 'none', fontSize: '13px', color: '#94a8b8', cursor: 'pointer', marginTop: '8px' }}>
                Skip for now
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div style={{ fontSize: '11px', color: '#94a8b8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Step 2 of 3</div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Where do you invest?</h2>
              <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '28px' }}>We use this to match you with relevant deals and partners.</p>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Markets</label>
                <input type="text" value={form.markets} onChange={e => set('markets', e.target.value)}
                  placeholder="e.g. Northern Virginia, DC, Maryland or Nationwide"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '10px' }}>How many deals have you done?</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {dealCounts.map(count => (
                    <button key={count} onClick={() => set('deal_count_range', count)}
                      style={{ padding: '12px 8px', borderRadius: '10px', border: `2px solid ${form.deal_count_range === count ? '#00C27C' : '#e4e8ed'}`, background: form.deal_count_range === count ? 'rgba(0,194,124,0.08)' : 'white', color: form.deal_count_range === count ? '#00C27C' : '#0f1c2d', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
                      {count}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={() => setStep(3)}
                style={{ width: '100%', padding: '14px', background: '#00C27C', color: 'white', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
                Continue →
              </button>
              <button onClick={() => setStep(3)} style={{ width: '100%', padding: '10px', background: 'none', border: 'none', fontSize: '13px', color: '#94a8b8', cursor: 'pointer', marginTop: '8px' }}>
                Skip for now
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <div style={{ fontSize: '11px', color: '#94a8b8', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Step 3 of 3</div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Your brand</h2>
              <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '28px' }}>Your phone number and name appear on every deal report you generate — free.</p>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Phone Number</label>
                <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
                  placeholder="(703) 555-0100"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Company Name <span style={{ color: '#94a8b8', fontWeight: '400' }}>(optional)</span></label>
                <input type="text" value={form.company_name} onChange={e => set('company_name', e.target.value)}
                  placeholder="HSS Home Sale Solutions"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Website <span style={{ color: '#94a8b8', fontWeight: '400' }}>(optional)</span></label>
                <input type="text" value={form.website} onChange={e => set('website', e.target.value)}
                  placeholder="hssvirginia.com"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              </div>

              <div style={{ background: '#f0f2f5', borderRadius: '12px', padding: '16px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#e4e8ed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>🔒</div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d' }}>Logo on reports — Pro feature</div>
                  <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '2px' }}>Upgrade to Pro to add your logo to every deal report and proposal.</div>
                </div>
                <a href="/pricing" style={{ marginLeft: 'auto', fontSize: '12px', color: '#00C27C', textDecoration: 'none', fontWeight: '600', whiteSpace: 'nowrap', flexShrink: 0 }}>Upgrade →</a>
              </div>

              <button onClick={finish} disabled={loading}
                style={{ width: '100%', padding: '14px', background: '#00C27C', color: 'white', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Saving...' : 'Go to My Dashboard →'}
              </button>
            </>
          )}

        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}