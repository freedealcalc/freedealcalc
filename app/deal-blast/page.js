'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { supabase } from '../../lib/supabase';

function DealBlastPage() {
  const searchParams = useSearchParams();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [form, setForm] = useState({
    address: '',
    askingPrice: '',
    arv: '',
    rehabEstimate: '',
    closeBy: '',
    emd: '',
    condition: '',
    description: '',
    extras: '',
  });

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { window.location.href = '/login'; return; }
    setUser(user);

    const { data: p } = await supabase.from('profiles').select('*').eq('id', user.id).single();
    setProfile(p);

    // Pre-fill from deal if coming from dashboard
    const id = searchParams.get('deal_id');
    if (id) {
      const { data } = await supabase.from('deals').select('*').eq('id', id).single();
      if (data) {
        setForm(f => ({
          ...f,
          address: data.address || '',
          askingPrice: data.purchase_price?.toString() || '',
          arv: data.arv?.toString() || '',
          rehabEstimate: data.rehab_budget?.toString() || '',
        }));
      }
    }
  }

  function set(key, val) {
    setForm(f => ({ ...f, [key]: val }));
  }

  function handlePhoto(e) {
    const file = e.target.files[0];
    if (!file) return;
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  async function handleSubmit() {
    if (!form.address || !form.askingPrice || !form.arv || !form.closeBy) return;
    setLoading(true);
    try {
      await fetch('/api/deal-blast-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          userId: user.id,
          userName: profile?.display_name,
          userPhone: profile?.phone,
          userCompany: profile?.company_name,
          userEmail: user.email,
        }),
      });
      setSubmitted(true);
    } catch(e) {}
    setLoading(false);
  }

  function fmt(n) {
    const num = parseFloat(n?.toString().replace(/,/g, '') || 0);
    return num ? '$' + num.toLocaleString() : '—';
  }

  const buyerProfit = () => {
    const arv = parseFloat(form.arv.replace(/,/g, '') || 0);
    const ask = parseFloat(form.askingPrice.replace(/,/g, '') || 0);
    const rehab = parseFloat(form.rehabEstimate.replace(/,/g, '') || 0);
    return arv - ask - rehab;
  };

  if (submitted) return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '48px 40px', maxWidth: '480px', width: '90%', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎯</div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Deal submitted.</h2>
        <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '8px' }}>We'll review your deal within 1 business day. If it qualifies, we'll blast it to our verified investor list.</p>
        <p style={{ fontSize: '13px', color: '#94a8b8', marginBottom: '32px' }}>Payment will be collected upon approval.</p>
        <a href="/dashboard" style={{ display: 'block', padding: '14px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: '600', marginBottom: '10px' }}>Back to Dashboard</a>
        <a href="/freddie" style={{ display: 'block', padding: '14px', background: '#f0f2f5', color: '#0f1c2d', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Analyze Another Deal</a>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; background: #f0f2f5; }
      `}</style>

      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
        <a href="/dashboard" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>← Dashboard</a>
      </nav>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Deal Blast</div>
          <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Submit Your Deal</h1>
          <p style={{ fontSize: '15px', color: '#5a7184', lineHeight: '1.6' }}>
            We review every deal before it goes out. If it qualifies, we blast it to our verified list of active cash buyers and flippers.
            <strong style={{ color: '#0f1c2d' }}> $499 per blast.</strong> Payment collected upon approval.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>

          {/* Form */}
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ background: 'white', borderRadius: '16px', padding: '28px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)', marginBottom: '20px' }}>
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f1c2d', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Deal Details</div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Property Address *</label>
                <input type="text" value={form.address} onChange={e => set('address', e.target.value)}
                  placeholder="123 Main St, Manassas, VA"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Asking Price *</label>
                  <input type="text" value={form.askingPrice} onChange={e => set('askingPrice', e.target.value)}
                    placeholder="250000"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d' }} />
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>ARV *</label>
                  <input type="text" value={form.arv} onChange={e => set('arv', e.target.value)}
                    placeholder="400000"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Rehab Estimate</label>
                  <input type="text" value={form.rehabEstimate} onChange={e => set('rehabEstimate', e.target.value)}
                    placeholder="25000"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d' }} />
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>EMD Required</label>
                  <input type="text" value={form.emd} onChange={e => set('emd', e.target.value)}
                    placeholder="5000"
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d' }} />
                </div>
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Close By Date *</label>
                <input type="text" value={form.closeBy} onChange={e => set('closeBy', e.target.value)}
                  placeholder="June 1, 2026"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d' }} />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Property Condition</label>
                <input type="text" value={form.condition} onChange={e => set('condition', e.target.value)}
                  placeholder="Needs full rehab, roof 2 years old, foundation solid"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d' }} />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Deal Description</label>
                <textarea value={form.description} onChange={e => set('description', e.target.value)}
                  placeholder="Describe what makes this deal attractive to buyers..."
                  rows={4}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', resize: 'vertical', lineHeight: '1.5' }} />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>
                  Anything else buyers should know?
                </label>
                <textarea value={form.extras} onChange={e => set('extras', e.target.value)}
                  placeholder="Vacant, lockboxed, motivated seller, title is clear..."
                  rows={3}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', resize: 'vertical', lineHeight: '1.5' }} />
              </div>

              {/* Photo */}
              <div style={{ marginBottom: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>
                  Front of House Photo <span style={{ color: '#94a8b8', fontWeight: '400' }}>(optional but recommended)</span>
                </label>
                <div style={{ border: '2px dashed #e4e8ed', borderRadius: '10px', padding: '20px', textAlign: 'center', cursor: 'pointer' }}
                  onClick={() => document.getElementById('blastPhoto').click()}>
                  {photoPreview ? (
                    <img src={photoPreview} alt="Property" style={{ maxHeight: '160px', borderRadius: '8px', objectFit: 'cover', width: '100%' }} />
                  ) : (
                    <div>
                      <div style={{ fontSize: '24px', marginBottom: '8px' }}>📷</div>
                      <div style={{ fontSize: '13px', color: '#94a8b8' }}>Click to upload — photos get more clicks</div>
                    </div>
                  )}
                  <input id="blastPhoto" type="file" accept="image/*" onChange={handlePhoto} style={{ display: 'none' }} />
                </div>
              </div>
            </div>

            {/* Deal Preview */}
            {form.address && form.askingPrice && form.arv && (
              <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '24px', marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px' }}>Deal Preview — What Buyers Will See</div>

                {photoPreview && (
                  <img src={photoPreview} alt="Property" style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '10px', marginBottom: '16px' }} />
                )}

                <div style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '4px' }}>🔥 {form.address}</div>
                <div style={{ fontSize: '13px', color: '#94a8b8', marginBottom: '20px' }}>
                  {form.closeBy && `Close by ${form.closeBy}`}
                  {form.emd && ` · EMD: ${fmt(form.emd)}`}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
                  {[
                    { label: 'Asking', value: fmt(form.askingPrice) },
                    { label: 'Rehab', value: fmt(form.rehabEstimate) || '—' },
                    { label: 'ARV', value: fmt(form.arv) },
                  ].map((m, i) => (
                    <div key={i} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                      <div style={{ fontSize: '10px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{m.label}</div>
                      <div style={{ fontSize: '16px', fontWeight: '700', color: 'white' }}>{m.value}</div>
                    </div>
                  ))}
                </div>

                {buyerProfit() > 0 && (
                  <div style={{ background: 'rgba(0,194,124,0.12)', border: '1px solid rgba(0,194,124,0.3)', borderRadius: '10px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '13px', color: '#94a8b8' }}>Buyer Profit Potential</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#00C27C' }}>{fmt(buyerProfit())}+</div>
                  </div>
                )}

                {form.description && (
                  <p style={{ fontSize: '13px', color: '#94a8b8', lineHeight: '1.6', marginTop: '16px' }}>{form.description}</p>
                )}

                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    {profile?.display_name && <div style={{ fontSize: '13px', fontWeight: '600', color: 'white' }}>{profile.display_name}</div>}
                    {profile?.company_name && <div style={{ fontSize: '12px', color: '#94a8b8' }}>{profile.company_name}</div>}
                  </div>
                  {profile?.phone && <div style={{ fontSize: '13px', color: '#00C27C', fontWeight: '600' }}>📞 {profile.phone}</div>}
                </div>
              </div>
            )}

            {/* Submit */}
            <button onClick={handleSubmit}
              disabled={!form.address || !form.askingPrice || !form.arv || !form.closeBy || loading}
              style={{ width: '100%', padding: '16px', background: form.address && form.askingPrice && form.arv && form.closeBy ? '#00C27C' : '#e4e8ed', color: form.address && form.askingPrice && form.arv && form.closeBy ? 'white' : '#94a8b8', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: '700', cursor: form.address && form.askingPrice && form.arv && form.closeBy ? 'pointer' : 'not-allowed', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Submitting...' : 'Submit for Review →'}
            </button>

            <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '12px', color: '#94a8b8' }}>
              $499 per blast · Payment collected upon approval · We review within 1 business day
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function DealBlastPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DealBlastPage />
    </Suspense>
  );
}