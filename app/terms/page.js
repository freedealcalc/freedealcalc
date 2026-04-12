export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5', fontFamily: 'DM Sans, sans-serif' }}>
      <nav style={{ background: '#0f1c2d', height: '56px', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
        <a href="/" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: '20px', color: 'white', textDecoration: 'none' }}>
          FreeDeal<span style={{ color: '#00C27C' }}>Calc</span>
        </a>
      </nav>
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '60px 24px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#0f1c2d', marginBottom: '8px' }}>Terms of Service</h1>
        <p style={{ fontSize: '13px', color: '#94a8b8', marginBottom: '40px' }}>Last updated: April 12, 2026</p>

        {[
          { title: 'Acceptance of Terms', body: 'By creating an account or using FreeDealCalc.com, you agree to these Terms of Service. If you do not agree, please do not use our service.' },
          { title: 'Description of Service', body: 'FreeDealCalc provides a free real estate deal analysis platform powered by AI. Our tools are designed to help investors evaluate potential deals. All analysis is for informational purposes only and does not constitute financial, legal, or investment advice.' },
          { title: 'Not Financial Advice', body: 'The deal scores, profit estimates, ROI calculations, and other outputs provided by FreeDealCalc are estimates based on the information you provide. They are not guarantees of actual returns. Always conduct your own due diligence and consult with qualified professionals before making any investment decisions.' },
          { title: 'User Accounts', body: 'You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate information when creating your account. We reserve the right to suspend or terminate accounts that violate these terms.' },
          { title: 'Deal Blast Service', body: 'By registering on FreeDealCalc, you acknowledge that your contact information may be used to receive Deal Blast notifications about wholesale deals available in your market. You may opt out at any time from your account settings.' },
          { title: 'Partner Referrals', body: 'FreeDealCalc may receive compensation when you connect with lending, title, or agent partners through our platform. This does not affect the objectivity of our deal analysis tools.' },
          { title: 'Intellectual Property', body: 'All content, features, and functionality of FreeDealCalc — including but not limited to the Freddie AI system, deal scoring algorithm, and platform design — are owned by FreeDealCalc and protected by applicable intellectual property laws.' },
          { title: 'Limitation of Liability', body: 'FreeDealCalc shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use of the platform or reliance on any deal analysis provided.' },
          { title: 'Changes to Terms', body: 'We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the new terms.' },
          { title: 'Contact', body: 'For questions about these Terms of Service, contact us at info@freedealcalc.com.' },
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