'use client';
import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    display_name: '',
    phone: '',
    company_name: '',
    website: '',
    markets: '',
    investor_type: '',
    deal_count_range: '',
  });

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { window.location.href = '/login'; return; }
    setUser(user);

    const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    if (profile) {
      setProfile(profile);
      setForm({
        display_name: profile.display_name || '',
        phone: profile.phone || '',
        company_name: profile.company_name || '',
        website: profile.website || '',
        markets: profile.markets || '',
        investor_type: profile.investor_type || '',
        deal_count_range: profile.deal_count_range || '',
      });
    }
    setLoading(false);
  }

  function set(key, val) {
    setForm(f => ({ ...f, [key]: val }));
  }

  async function handleSave() {
    setSaving(true);
    await supabase.from('profiles').upsert({ id: user.id, ...form });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    setSaving(false);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = '/';
  }

  const investorTypes = ['Flipper', 'Wholesaler', 'Newbie', 'Agent', 'Lender'];

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ color: '#5a7184' }}>Loading...</div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif' }}>
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <a href="/dashboard" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>Dashboard</a>
          <button onClick={handleSignOut} style={{ fontSize: '13px', color: '#94a8b8', background: 'none', border: 'none', cursor: 'pointer' }}>Sign Out</button>
        </div>
      </nav>

      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '40px 24px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#0f1c2d', marginBottom: '4px' }}>Your Account</h1>
        <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '40px' }}>{user?.email}</p>

        {/* Tier Card */}
        <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '24px 28px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Current Plan</div>
            <div style={{ fontSize: '22px', fontWeight: '700', color: 'white', textTransform: 'capitalize' }}>{profile?.tier || 'Free'}</div>
          </div>
          {(!profile?.tier || profile?.tier === 'free') && (
            <a href="/pricing" style={{ padding: '10px 20px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>
              Upgrade →
            </a>
          )}
        </div>

        {/* Profile Form */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '28px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d', marginBottom: '20px' }}>Profile</div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Full Name</label>
            <input type="text" value={form.display_name} onChange={e => set('display_name', e.target.value)}
              placeholder="Dan Smith"
              style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Phone</label>
            <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
              placeholder="(703) 555-0100"
              style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Company Name</label>
            <input type="text" value={form.company_name} onChange={e => set('company_name', e.target.value)}
              placeholder="HSS Home Sale Solutions"
              style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Website</label>
            <input type="text" value={form.website} onChange={e => set('website', e.target.value)}
              placeholder="hssvirginia.com"
              style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Markets</label>
            <input type="text" value={form.markets} onChange={e => set('markets', e.target.value)}
              placeholder="Northern Virginia, DC, Maryland..."
              style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '10px' }}>I am a...</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {investorTypes.map(type => (
                <button key={type} onClick={() => set('investor_type', type)}
                  style={{ padding: '8px 16px', borderRadius: '20px', border: `2px solid ${form.investor_type === type ? '#00C27C' : '#e4e8ed'}`, background: form.investor_type === type ? 'rgba(0,194,124,0.08)' : 'white', color: form.investor_type === type ? '#00C27C' : '#5a7184', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>
                  {type}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleSave} disabled={saving}
            style={{ width: '100%', padding: '14px', background: saved ? '#0f1c2d' : '#00C27C', color: 'white', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: saving ? 'not-allowed' : 'pointer', opacity: saving ? 0.7 : 1, transition: 'background 0.2s' }}>
            {saved ? '✓ Saved' : saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>

        {/* Logo — Pro only */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '28px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d' }}>Logo on Reports</div>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#00C27C', background: 'rgba(0,194,124,0.1)', padding: '3px 10px', borderRadius: '20px' }}>Pro</span>
          </div>
          <div style={{ fontSize: '13px', color: '#5a7184', marginBottom: '16px' }}>Your logo appears on every deal report, proposal, and disposition package you generate.</div>
          {profile?.tier === 'pro' ? (
            <div style={{ border: '2px dashed #e4e8ed', borderRadius: '10px', padding: '24px', textAlign: 'center', color: '#94a8b8', fontSize: '13px' }}>
              Logo upload coming soon
            </div>
          ) : (
            <a href="/pricing" style={{ display: 'block', padding: '12px', background: '#f0f2f5', color: '#0f1c2d', borderRadius: '10px', textDecoration: 'none', fontSize: '13px', fontWeight: '600', textAlign: 'center' }}>
              Upgrade to Pro to add your logo →
            </a>
          )}
        </div>

        {/* Danger Zone */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f1c2d', marginBottom: '8px' }}>Sign Out</div>
          <div style={{ fontSize: '13px', color: '#5a7184', marginBottom: '16px' }}>You'll need to log back in to access your deals.</div>
          <button onClick={handleSignOut}
            style={{ padding: '10px 20px', background: 'none', border: '1.5px solid #e4e8ed', borderRadius: '10px', fontSize: '13px', fontWeight: '600', color: '#5a7184', cursor: 'pointer' }}>
            Sign Out
          </button>
        </div>

      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}