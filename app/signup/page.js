'use client';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleSignup() {
    if (!email || !password || !name) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { display_name: name }
      }
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage('Check your email to confirm your account, then log in to complete your profile.');
    }
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
        <div style={{ background: 'white', borderRadius: '20px', padding: '40px', width: '100%', maxWidth: '420px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Create your account</h1>
          <p style={{ fontSize: '14px', color: '#5a7184', marginBottom: '28px' }}>Free forever. Save your deals and track your pipeline.</p>

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

          <div style={{ marginBottom: '24px' }}>
            <label style={{ fontSize: '13px', fontWeight: '500', color: '#0f1c2d', display: 'block', marginBottom: '6px' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="8+ characters"
              style={{ width: '100%', padding: '12px 14px', borderRadius: '10px', border: '1.5px solid #e4e8ed', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', outline: 'none', color: '#0f1c2d', boxSizing: 'border-box' }}
            />
          </div>

          <button
            onClick={handleSignup}
            disabled={loading}
            style={{ width: '100%', padding: '14px', background: '#00C27C', border: 'none', borderRadius: '10px', color: 'white', fontSize: '15px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Creating account...' : 'Create Free Account'}
          </button>

          <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#5a7184' }}>
            Already have an account?{' '}
            <a href="/login" style={{ color: '#00C27C', textDecoration: 'none', fontWeight: '500' }}>Log in</a>
          </div>
        </div>
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}