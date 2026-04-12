export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif' }}>
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
      </nav>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '13px', color: '#94a8b8', marginBottom: '40px' }}>Last updated: April 12, 2026</p>

        {[
          { title: 'Information We Collect', body: 'We collect information you provide when creating an account, including your name, email address, phone number, and company information. We also collect data about the real estate deals you analyze through our platform, including property addresses, financial figures, and deal scores.' },
          { title: 'How We Use Your Information', body: 'We use your information to provide and improve our services, personalize your experience, send you relevant deal opportunities through our Deal Blast service (if you opt in), and connect you with relevant partners such as lenders and agents. We do not sell your personal information to third parties.' },
          { title: 'Deal Data', body: 'Deal data you enter — including property addresses, purchase prices, and ARV estimates — is stored securely in our database. Registered users\' deal history is private and only accessible to you unless you choose to make your investor profile public.' },
          { title: 'Cookies and Analytics', body: 'We use Google Analytics to understand how users interact with our platform. This may involve the use of cookies. You can opt out of Google Analytics tracking by using the Google Analytics Opt-out Browser Add-on.' },
          { title: 'Data Security', body: 'We use industry-standard security measures including encrypted connections (HTTPS) and secure database storage via Supabase. However, no method of transmission over the internet is 100% secure.' },
          { title: 'Third-Party Services', body: 'Our platform integrates with third-party services including Supabase (database), SendGrid (email), and Stripe (payments). These services have their own privacy policies and data handling practices.' },
          { title: 'Your Rights', body: 'You may request access to, correction of, or deletion of your personal data at any time by contacting us at info@freedealcalc.com. You may also delete your account at any time from your account settings.' },
          { title: 'Contact', body: 'If you have questions about this Privacy Policy, please contact us at info@freedealcalc.com.' },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>{s.title}</h2>
            <p style={{ fontSize: '14px', color: '#5a7184', lineHeight: '1.7' }}>{s.body}</p>
          </div>
        ))}
      </div>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');`}</style>
    </div>
  );
}