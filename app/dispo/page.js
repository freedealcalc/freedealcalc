'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { supabase } from '../../lib/supabase';

function DispoPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState('form');
  const [dealData, setDealData] = useState(null);
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [pitch, setPitch] = useState(null);
  const [scopeSummary, setScopeSummary] = useState(null);
  const [form, setForm] = useState({
    askingPrice: '',
    emd: '',
    closeBy: '',
    condition: '',
    rehabScope: '',
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

    const id = searchParams.get('deal_id');
    if (id) {
      const { data } = await supabase.from('deals').select('*').eq('id', id).single();
      if (data) {
        setDealData({
          address: data.address,
          strategy: data.strategy,
          purchasePrice: data.purchase_price,
          arv: data.arv,
          rehabBudget: data.rehab_budget,
          holdMonths: data.hold_months,
          financing: data.financing,
        });
        setForm(f => ({ ...f, askingPrice: data.purchase_price?.toString() || '' }));
        return;
      }
    }

    const stored = sessionStorage.getItem('freddie_deal');
    if (stored) {
      const d = JSON.parse(stored);
      setDealData(d);
      setForm(f => ({ ...f, askingPrice: d.purchasePrice?.toString() || '' }));
    }
  }

  function setField(key, val) {
    setForm(f => ({ ...f, [key]: val }));
  }

  function handlePhoto(e) {
    const file = e.target.files[0];
    if (!file) return;
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  }

  async function handleGenerate() {
    if (!form.askingPrice || !form.condition || !form.closeBy) return;
    setStep('generating');
    try {
      const res = await fetch('/api/dispo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          dealData,
          userId: user?.id,
          askingPrice: parseFloat(form.askingPrice.replace(/,/g, '')),
          emd: form.emd,
          closeBy: form.closeBy,
          condition: form.condition,
          rehabScope: form.rehabScope,
          extras: form.extras,
        }),
      });
      const data = await res.json();
      if (data.error === 'insufficient_credits') {
        setStep('error_credits');
      } else {
        setPitch(data.pitch);
        setScopeSummary(data.scopeSummary);
        setStep('package');
      }
    } catch(e) {
      setStep('error_credits');
    }
  }

  function fmt(n) { return '$' + Math.abs(n || 0).toLocaleString(); }

  const buyerProfit = dealData ? (dealData.arv || 0) - (parseFloat(form.askingPrice?.replace(/,/g, '') || 0) + (dealData.rehabBudget || 0)) : 0;
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  if (step === 'error_credits') return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '420px', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
        <div style={{ fontSize: '40px', marginBottom: '16px' }}>💳</div>
        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Not enough credits</h2>
        <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '24px' }}>Disposition Packages cost 50 credits. Top up or upgrade your plan.</p>
        <a href="/pricing" style={{ display: 'block', padding: '12px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600', marginBottom: '10px' }}>See Plans →</a>
        <a href="/dashboard" style={{ display: 'block', padding: '12px', background: '#f0f2f5', color: '#0f1c2d', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Back to Dashboard</a>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@1&display=swap');
        * { box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; background: #f0f2f5; }
        @media print {
          .no-print { display: none !important; }
          body { background: white; }
          .dispo { box-shadow: none !important; margin: 0 !important; border-radius: 0 !important; }
        }
      `}</style>

      {/* Nav */}
      <div className="no-print" style={{ background: '#0f1c2d', padding: '0 24px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="/dashboard" style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.08)', color: 'white', borderRadius: '8px', textDecoration: 'none', fontSize: '13px' }}>← Dashboard</a>
          {step === 'package' && (
            <button onClick={() => window.print()} style={{ padding: '8px 20px', background: '#00C27C', color: 'white', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
              ⬇ Download PDF
            </button>
          )}
        </div>
      </div>

      {/* Form */}
      {step === 'form' && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 24px' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '560px', width: '100%', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>Disposition Package</div>
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Tell us about this deal</h1>
            <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '32px' }}>We'll build a buyer-ready deal package that sells itself. Costs 50 credits.</p>

            {dealData?.address && (
              <div style={{ background: '#f0f2f5', borderRadius: '10px', padding: '12px 16px', marginBottom: '24px', fontSize: '13px', color: '#5a7184' }}>
                📍 {dealData.address}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Buy It Now Price *</label>
                <input type="text" value={form.askingPrice} onChange={e => setField('askingPrice', e.target.value)}
                  placeholder="250000"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>EMD Required</label>
                <input type="text" value={form.emd} onChange={e => setField('emd', e.target.value)}
                  placeholder="5000"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Close By Date *</label>
              <input type="text" value={form.closeBy} onChange={e => setField('closeBy', e.target.value)}
                placeholder="May 15, 2026"
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Property Condition *</label>
              <input type="text" value={form.condition} onChange={e => setField('condition', e.target.value)}
                placeholder="Needs full gut renovation, roof is 2 years old, foundation is solid"
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Rehab Scope Highlights</label>
              <textarea value={form.rehabScope} onChange={e => setField('rehabScope', e.target.value)}
                placeholder="Kitchen full gut, 2 bathrooms, new flooring throughout, paint, landscaping"
                rows={3}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box', resize: 'vertical' }} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Anything else buyers should know?</label>
              <textarea value={form.extras} onChange={e => setField('extras', e.target.value)}
                placeholder="Motivated seller, title is clear, vacant and lockboxed, showing available anytime"
                rows={3}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box', resize: 'vertical' }} />
            </div>

            {/* Photo upload */}
            <div style={{ marginBottom: '32px' }}>
              <label style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>
                Front of House Photo <span style={{ color: '#94a8b8', fontWeight: '400' }}>(optional)</span>
              </label>
              <div style={{ border: '2px dashed #e4e8ed', borderRadius: '10px', padding: '20px', textAlign: 'center', cursor: 'pointer', position: 'relative' }}
                onClick={() => document.getElementById('photoInput').click()}>
                {photoPreview ? (
                  <img src={photoPreview} alt="Property" style={{ maxHeight: '160px', borderRadius: '8px', objectFit: 'cover', width: '100%' }} />
                ) : (
                  <div>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>📷</div>
                    <div style={{ fontSize: '13px', color: '#94a8b8' }}>Click to upload photo</div>
                  </div>
                )}
                <input id="photoInput" type="file" accept="image/*" onChange={handlePhoto} style={{ display: 'none' }} />
              </div>
            </div>

            <button onClick={handleGenerate}
              disabled={!form.askingPrice || !form.condition || !form.closeBy}
              style={{ width: '100%', padding: '14px', background: form.askingPrice && form.condition && form.closeBy ? '#00C27C' : '#e4e8ed', color: form.askingPrice && form.condition && form.closeBy ? 'white' : '#94a8b8', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: '600', cursor: form.askingPrice && form.condition && form.closeBy ? 'pointer' : 'not-allowed' }}>
              Generate Package · 50 credits →
            </button>
          </div>
        </div>
      )}

      {/* Generating */}
      {step === 'generating' && (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>🔥</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#0f1c2d', marginBottom: '8px' }}>Building your deal package...</div>
            <div style={{ fontSize: '14px', color: '#5a7184' }}>This takes about 10 seconds.</div>
          </div>
        </div>
      )}

      {/* Package */}
      {step === 'package' && dealData && (
        <div style={{ padding: '40px 24px', display: 'flex', justifyContent: 'center' }}>
          <div className="dispo" style={{ background: 'white', borderRadius: '20px', maxWidth: '680px', width: '100%', boxShadow: '0 4px 40px rgba(0,0,0,0.1)', overflow: 'hidden' }}>

            {/* Photo header */}
            {photoPreview ? (
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img src={photoPreview} alt="Property" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,28,45,0.3), rgba(15,28,45,0.85))' }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '32px', right: '32px' }}>
                  <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>🔥 Deal Alert</div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: 'white' }}>{dealData.address}</div>
                </div>
              </div>
            ) : (
              <div style={{ background: '#0f1c2d', padding: '32px', textAlign: 'left' }}>
                <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '6px' }}>🔥 Deal Alert</div>
                <div style={{ fontSize: '24px', fontWeight: '700', color: 'white' }}>{dealData.address}</div>
              </div>
            )}

            <div style={{ padding: '40px 48px' }}>

              {/* Header info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', paddingBottom: '24px', borderBottom: '2px solid #f0f2f5' }}>
                <div>
                  <div style={{ fontFamily: 'Instrument Serif, Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: '#0f1c2d' }}>
                    FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
                  </div>
                  <div style={{ fontSize: '11px', color: '#94a8b8', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>Disposition Package</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '12px', color: '#94a8b8' }}>{today}</div>
                  {profile?.display_name && <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d', marginTop: '4px' }}>{profile.display_name}</div>}
                  {profile?.phone && <div style={{ fontSize: '12px', color: '#5a7184' }}>{profile.phone}</div>}
                  {profile?.company_name && <div style={{ fontSize: '12px', color: '#5a7184' }}>{profile.company_name}</div>}
                </div>
              </div>

              {/* Buy It Now */}
              <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '28px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '6px' }}>Buy It Now</div>
                  <div style={{ fontSize: '40px', fontWeight: '700', color: 'white', lineHeight: 1 }}>{fmt(parseFloat(form.askingPrice.replace(/,/g, '')))}</div>
                  <div style={{ fontSize: '13px', color: '#94a8b8', marginTop: '6px' }}>
                    {form.emd && `EMD: ${fmt(parseFloat(form.emd.replace(/,/g, '')))} · `}
                    Close by {form.closeBy}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', color: '#94a8b8', marginBottom: '4px' }}>First EMD locks it</div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#00C27C' }}>First Come, First Served</div>
                </div>
              </div>

              {/* The Numbers */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '32px' }}>
                {[
                  { label: 'Buy It Now', value: fmt(parseFloat(form.askingPrice.replace(/,/g, ''))), color: '#0f1c2d' },
                  { label: 'Est. Rehab', value: fmt(dealData.rehabBudget), color: '#0f1c2d' },
                  { label: 'ARV', value: fmt(dealData.arv), color: '#0f1c2d' },
                ].map((m, i) => (
                  <div key={i} style={{ padding: '16px', background: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', color: '#94a8b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>{m.label}</div>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: m.color }}>{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Buyer Profit Potential */}
              <div style={{ background: 'rgba(0,194,124,0.08)', border: '2px solid #00C27C', borderRadius: '16px', padding: '20px 24px', marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: '#0f1c2d' }}>Your Profit Potential</div>
                  <div style={{ fontSize: '12px', color: '#5a7184', marginTop: '2px' }}>ARV minus buy price and rehab</div>
                </div>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#00C27C' }}>{fmt(buyerProfit)}+</div>
              </div>

              {/* Deal Pitch */}
              <div style={{ marginBottom: '32px' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '12px' }}>Why This Deal Works</div>
                <p style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.7' }}>{pitch}</p>
              </div>

              {/* Property Condition */}
              <div style={{ marginBottom: '32px', padding: '20px 24px', background: '#f8f9fa', borderRadius: '16px' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '12px' }}>Property Condition & Scope</div>
                <p style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.7' }}>{scopeSummary}</p>
              </div>

              {/* Extras */}
              {form.extras && (
                <div style={{ marginBottom: '32px', padding: '20px 24px', background: '#f8f9fa', borderRadius: '16px' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Additional Notes</div>
                  <p style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.7' }}>{form.extras}</p>
                </div>
              )}

              {/* CTA */}
              <div style={{ background: '#0f1c2d', borderRadius: '16px', padding: '28px', marginBottom: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '18px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>Ready to Lock This Deal?</div>
                <div style={{ fontSize: '13px', color: '#94a8b8', marginBottom: '20px' }}>First earnest money deposit secures the contract. Don't wait.</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                  {profile?.phone && <div style={{ fontSize: '16px', fontWeight: '700', color: '#00C27C' }}>📞 {profile.phone}</div>}
                  {profile?.website && <div style={{ fontSize: '16px', fontWeight: '700', color: '#00C27C' }}>🌐 {profile.website}</div>}
                </div>
              </div>

              {/* Footer */}
              <div style={{ borderTop: '1px solid #f0f2f5', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '11px', color: '#94a8b8', maxWidth: '400px', lineHeight: '1.5' }}>
                  This document is for informational purposes only. All figures are estimates. Buyers are encouraged to conduct their own due diligence prior to purchase.
                </div>
                <div style={{ fontSize: '11px', color: '#00C27C', fontWeight: '600' }}>FreeDealCalc.com</div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function DispoPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DispoPage />
    </Suspense>
  );
}