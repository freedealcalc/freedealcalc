export const metadata = {
  title: 'House Flipping Blog | FreeDealCalc',
  description: 'Real-world house flipping guides from a 20+ year NoVA investor. Rehab costs, taxes, deal analysis, and how to flip houses in 2026.',
  alternates: { canonical: 'https://freedealcalc.com/blog' },
};

const posts = [
  {
    slug: 'how-to-flip-houses-2026',
    title: 'How to Flip Houses in 2026: A Real Guide from a Full-Time Flipper',
    description: 'The complete step-by-step guide — building your team, sourcing deals, analyzing offers, and closing. Written by a 20+ year NoVA flipper.',
    date: 'May 2026',
    readTime: '15 min read',
  },
  {
    slug: 'how-to-estimate-rehab-costs-2026',
    title: 'How to Estimate Rehab Costs for House Flippers in 2026',
    description: 'A room-by-room breakdown of renovation costs with specific 2026 Northern Virginia pricing for every component.',
    date: 'May 2026',
    readTime: '12 min read',
  },
  {
    slug: 'house-flip-taxes-2026',
    title: 'House Flip Taxes in 2026: What Every Flipper Needs to Know',
    description: 'How house flip income is taxed — dealer vs investor status, cost basis, self-employment tax, and what you can actually deduct.',
    date: 'May 2026',
    readTime: '10 min read',
  },
];

export default function BlogIndex() {
  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '80px 24px' }}>
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#059669', marginBottom: 12 }}>From the field</div>
        <h1 style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#18181b', letterSpacing: '-0.02em', marginBottom: 16, lineHeight: 1.1 }}>House Flipping Guides</h1>
        <p style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '1.05rem', color: '#71717a', lineHeight: 1.8, maxWidth: 560 }}>
          Real-world guides written by Dan White — licensed Virginia agent and full-time house flipper with 20+ years in the DC metro area.
        </p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        {posts.map((post) => (
          <a key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
            <div style={{ background: '#ffffff', border: '1px solid #e4e4e7', borderRadius: 12, padding: '32px 36px', transition: 'box-shadow 0.2s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                <span style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.72rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{post.date}</span>
                <span style={{ width: 3, height: 3, background: '#d4d4d8', borderRadius: '50%', display: 'inline-block' }} />
                <span style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.72rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{post.readTime}</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontWeight: 700, color: '#18181b', marginBottom: 10, lineHeight: 1.3 }}>{post.title}</h2>
              <p style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', color: '#71717a', lineHeight: 1.7, margin: 0 }}>{post.description}</p>
              <div style={{ marginTop: 16, fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.85rem', fontWeight: 600, color: '#059669' }}>Read article →</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
