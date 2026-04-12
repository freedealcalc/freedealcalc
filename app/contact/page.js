'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  function set(key, val) {
    setForm(f => ({ ...f, [key]: val }));
  }

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch(e) {
      setError('Something went wrong. Please email us directly at info@freedealcalc.com');
    }
    setLoading(false);
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif' }}>
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
        <a href="/freddie" style={{ fontSize: '13px', color: '#94a8b8', textDecoration: 'none' }}>Analyze a Deal</a>
      </nav>

      <div style={{ maxWidth: '640px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Contact Us</h1>
        <p style={{ fontSize: '16px', color: '#5a7184', marginBottom: '48px' }}>Questions, feedback, or partnership inquiries — we read everything.</p>

        {submitted ? (
          <div style={{ background: 'white', borderRadius: '20px', padding: '48px', textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
            <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Message sent.</h2>
            <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '24px' }}>We'll get back to you within 1 business day.</p>
            <a href="/" style={{ padding: '12px 24px', background: '#00C27C', color: 'white', borderRadius: '10px', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }}>Back to Home</a>
          </div>
        ) : (
          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>

            {error && (
              <div style={{ background: 'rgba(255,80,80,0.1)', border: '1px solid #ff5050', borderRadius: '10px', padding: '12px 16px', fontSize: '14px', color: '#ff5050', marginBottom: '20px' }}>
                {error}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Name *</label>
                <input type="text" value={form.name} onChange={e => set('name', e.target.value)}
                  placeholder="Dan Smith"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Email *</label>
                <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
                  placeholder="dan@example.com"
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }} />
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Subject</label>
              <select value={form.subject} onChange={e => set('subject', e.target.value)}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', background: 'white' }}>
                <option value="">Select a topic...</option>
                <option value="General Question">General Question</option>
                <option value="Account / Billing">Account / Billing</option>
                <option value="Deal Blast">Deal Blast</option>
                <option value="Partnership">Partnership</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Press / Media">Press / Media</option>
              </select>
            </div>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Message *</label>
              <textarea value={form.message} onChange={e => set('message', e.target.value)}
                placeholder="Tell us what's on your mind..."
                rows={6}
                style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box', resize: 'vertical', lineHeight: '1.5' }} />
            </div>

            <button onClick={handleSubmit} disabled={loading}
              style={{ width: '100%', padding: '14px', background: '#00C27C', border: 'none', borderRadius: '10px', color: 'white', fontSize: '15px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
              {loading ? 'Sending...' : 'Send Message →'}
            </button>

            <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '13px', color: '#94a8b8' }}>
              Or email us directly at{' '}
              <a href="mailto:info@freedealcalc.com" style={{ color: '#00C27C', textDecoration: 'none' }}>info@freedealcalc.com</a>
            </div>
          </div>
        )}
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}