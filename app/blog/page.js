import Link from 'next/link';

export const metadata = {
  title: 'Real Estate Investing Blog | FreeDealCalc',
  description: 'Expert guides on house flipping, wholesaling, BRRRR, rental property analysis, and deal strategies — written by an active Northern Virginia investor with 20+ years of experience.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog' },
};

const posts = [
  {
    slug: 'what-is-brrrr-method',
    title: 'What is the BRRRR Method? Complete Guide for 2026',
    description: 'Buy, Rehab, Rent, Refinance, Repeat — the full BRRRR strategy explained with real numbers, a worked example, and when it stops working.',
    date: 'May 2026',
    readTime: '12 min',
    category: 'Strategy',
  },
  {
    slug: '70-percent-rule-real-estate',
    title: 'The 70% Rule in Real Estate: What It Is and When to Use It',
    description: 'The 70% rule formula explained — what the 30% margin covers, when to tighten to 65%, and why it\'s a screen not a decision.',
    date: 'May 2026',
    readTime: '10 min',
    category: 'Analysis',
  },
  {
    slug: 'what-is-wholesaling-real-estate',
    title: 'What is Wholesaling Real Estate? How It Works in 2026',
    description: 'Wholesaling explained step by step — finding motivated sellers, getting under contract, finding buyers, and assigning for a fee.',
    date: 'May 2026',
    readTime: '10 min',
    category: 'Strategy',
  },
  {
    slug: 'how-to-wholesale-real-estate',
    title: 'How to Wholesale Real Estate: Step-by-Step Guide for 2026',
    description: 'The practical guide to starting a wholesale business — lead generation, deal analysis, dispo packages, and closing assignments.',
    date: 'May 2026',
    readTime: '12 min',
    category: 'Strategy',
  },
  {
    slug: 'wholesale-real-estate-contract',
    title: 'Wholesale Real Estate Contract: What It Is and What It Needs',
    description: 'The key clauses every wholesale purchase agreement needs — assignment clause, inspection period, as-is, and when to double close instead.',
    date: 'May 2026',
    readTime: '10 min',
    category: 'Contracts',
  },
  {
    slug: 'what-is-house-hacking',
    title: 'What is House Hacking? How to Live for Free with Real Estate',
    description: 'House hacking explained — buy a duplex, live in one unit, rent the other. FHA rules, the math, and how to exit into a full rental.',
    date: 'May 2026',
    readTime: '9 min',
    category: 'Strategy',
  },
  {
    slug: 'what-is-50-percent-rule',
    title: 'The 50% Rule in Real Estate: What It Is and How to Use It',
    description: 'The 50% rule estimates half your gross rent covers operating expenses. When it\'s accurate, when it\'s not, and when to run a real analysis.',
    date: 'May 2026',
    readTime: '8 min',
    category: 'Analysis',
  },
  {
    slug: 'cash-for-keys-explained',
    title: 'Cash for Keys: What It Is and How to Use It',
    description: 'Cash for keys explained — how to structure the offer, how much to pay, what the agreement needs, and when it\'s better than eviction.',
    date: 'May 2026',
    readTime: '8 min',
    category: 'Operations',
  },
  {
    slug: 'driving-for-dollars',
    title: 'Driving for Dollars: How to Find Off-Market Deals',
    description: 'What to look for, how to track properties, how to skip-trace owners, and how to make contact. The free lead source that serious investors use.',
    date: 'May 2026',
    readTime: '9 min',
    category: 'Lead Generation',
  },
  {
    slug: 'hard-money-loans-real-estate',
    title: 'Hard Money Loans for Real Estate: How They Work in 2026',
    description: 'Current hard money rates, terms, LTVs, and the draw system — plus the lenders active in Northern Virginia.',
    date: 'May 2026',
    readTime: '10 min',
    category: 'Financing',
  },
  {
    slug: 'after-repair-value-calculator-guide',
    title: 'How to Calculate After Repair Value (ARV) for Any Property',
    description: 'How to pull comps, what makes a good comparable sale, and how to adjust for differences — from a 20-year flipper who runs comps before every offer.',
    date: 'May 2026',
    readTime: '10 min',
    category: 'Analysis',
  },
  {
    slug: 'what-is-cap-rate',
    title: 'What is Cap Rate? How to Calculate It for Investment Properties',
    description: 'Cap rate formula, what it actually tells you, what\'s a good cap rate in 2026 by market tier, and how it differs from cash-on-cash return.',
    date: 'May 2026',
    readTime: '9 min',
    category: 'Analysis',
  },
  {
    slug: 'cash-on-cash-return-explained',
    title: 'Cash-on-Cash Return: What It Is and How to Calculate It',
    description: 'Cash-on-cash return formula, a worked example, what counts as good in Northern Virginia, and how it differs from cap rate and total ROI.',
    date: 'May 2026',
    readTime: '8 min',
    category: 'Analysis',
  },
  {
    slug: 'subject-to-real-estate',
    title: 'Subject-To Real Estate: Buying Subject to Existing Financing',
    description: 'How buying subject-to works, the due-on-sale risk, when it makes sense, and what to watch out for.',
    date: 'May 2026',
    readTime: '10 min',
    category: 'Strategy',
  },
  {
    slug: 'what-is-wholetail',
    title: 'What is Wholetailing? The Middle Path Between Wholesale and Flip',
    description: 'Wholetailing explained with a real $130K Northern Virginia deal — why it outperforms wholesale on equity-rich properties.',
    date: 'May 2026',
    readTime: '9 min',
    category: 'Strategy',
  },
  {
    slug: 'real-estate-deal-analyzer-guide',
    title: 'How to Analyze a Real Estate Deal: Step-by-Step Guide',
    description: 'The exact 5-step deal analysis framework — ARV, rehab, max offer, cost modeling, and profit — used on every deal before making an offer.',
    date: 'May 2026',
    readTime: '12 min',
    category: 'Analysis',
  },
  {
    slug: 'how-to-find-motivated-sellers',
    title: 'How to Find Motivated Sellers: 10 Proven Sources',
    description: 'The 10 best motivated seller lead sources ranked by cost, volume, and deal quality — from an active Northern Virginia investor.',
    date: 'May 2026',
    readTime: '11 min',
    category: 'Lead Generation',
  },
  {
    slug: 'what-is-assignment-of-contract',
    title: 'What is Assignment of Contract in Real Estate?',
    description: 'How assignment works, what the agreement contains, fee ranges, and when to double close instead of assign.',
    date: 'May 2026',
    readTime: '8 min',
    category: 'Contracts',
  },
  {
    slug: 'real-estate-holding-costs',
    title: 'Real Estate Holding Costs: What They Are and How to Calculate Them',
    description: 'Every holding cost explained — financing, property taxes, insurance, utilities — with a full 9-month example that shows why they kill deals.',
    date: 'May 2026',
    readTime: '9 min',
    category: 'Analysis',
  },
  {
    slug: 'how-to-build-cash-buyer-list',
    title: 'How to Build a Cash Buyer List for Wholesale Real Estate',
    description: 'Where to find buyers, how to qualify them, and how to organize a list that lets you move deals in 24–48 hours.',
    date: 'May 2026',
    readTime: '9 min',
    category: 'Lead Generation',
  },
  {
    slug: 'what-is-seller-financing',
    title: 'What is Seller Financing in Real Estate? How It Works',
    description: 'Owner financing explained — how it\'s structured, why sellers agree to it, and when it makes sense for investors.',
    date: 'May 2026',
    readTime: '10 min',
    category: 'Financing',
  },
  {
    slug: 'fix-and-flip-checklist',
    title: 'Fix and Flip Checklist: Every Step from Acquisition to Close',
    description: 'The complete fix-and-flip checklist — deal analysis, due diligence, renovation, listing, and sale. Nothing gets missed.',
    date: 'May 2026',
    readTime: '12 min',
    category: 'Operations',
  },
  {
    slug: 'real-estate-investing-beginners',
    title: 'Real Estate Investing for Beginners: Where to Actually Start',
    description: 'The honest beginner guide — which strategy to start with, what skills matter most, and the mistakes that cost new investors the most.',
    date: 'May 2026',
    readTime: '13 min',
    category: 'Beginner',
  },
  {
    slug: 'how-to-analyze-rental-property',
    title: 'How to Analyze a Rental Property: Step-by-Step Guide',
    description: 'Gross rent, operating expenses, NOI, financing, cash flow, and returns — the complete rental property analysis framework.',
    date: 'May 2026',
    readTime: '11 min',
    category: 'Analysis',
  },
  {
    slug: 'what-is-dscr-loan',
    title: 'What is a DSCR Loan? How to Use It for Investment Properties',
    description: 'DSCR loans explained — the formula, 2026 rates, qualification requirements, and when they beat conventional investment loans.',
    date: 'May 2026',
    readTime: '9 min',
    category: 'Financing',
  },
  {
    slug: 'how-to-make-offer-distressed-property',
    title: 'How to Make an Offer on a Distressed Property',
    description: 'Price, terms, the justification, and how to protect yourself when condition is worse than expected. Written by an investor who\'s made hundreds of these offers.',
    date: 'May 2026',
    readTime: '10 min',
    category: 'Operations',
  },
  {
    slug: 'real-estate-exit-strategies',
    title: 'Real Estate Exit Strategies: How to Choose Before You Buy',
    description: 'Flip, wholesale, wholetail, BRRRR, hold — how to choose your exit before closing and how to pivot when the market shifts.',
    date: 'May 2026',
    readTime: '10 min',
    category: 'Strategy',
  },
  {
    slug: 'best-real-estate-markets-flipping-2026',
    title: 'Best Real Estate Markets for House Flipping in 2026',
    description: 'What to look for in a flip market, how Northern Virginia compares nationally, and where conditions favor investors in 2026.',
    date: 'May 2026',
    readTime: '11 min',
    category: 'Markets',
  },
  {
    slug: 'hoarder-house-flip',
    title: 'How to Flip a Hoarder House: The Complete Guide',
    description: 'Acquisition, cleanout, condition assessment, and exit strategy for hoarder houses — including a real $130K Northern Virginia deal.',
    date: 'May 2026',
    readTime: '11 min',
    category: 'Operations',
  },
  {
    slug: 'what-is-earnest-money-deposit',
    title: 'What is Earnest Money Deposit (EMD)? How It Works in Real Estate',
    description: 'How much to put down, when you get it back, when you lose it, and how investors use EMD as a negotiation tool.',
    date: 'May 2026',
    readTime: '8 min',
    category: 'Contracts',
  },
  // Earlier post from previous build session
  {
    slug: 'how-to-flip-houses-2026',
    title: 'How to Flip Houses in 2026: A Complete Guide',
    description: 'The step-by-step house flipping guide for 2026 — finding deals, financing, renovating, and selling for maximum profit in the current market.',
    date: 'April 2026',
    readTime: '14 min',
    category: 'Strategy',
  },
];

const categoryColors = {
  'Strategy': '#059669',
  'Analysis': '#0891b2',
  'Financing': '#7c3aed',
  'Operations': '#b45309',
  'Contracts': '#be123c',
  'Lead Generation': '#15803d',
  'Markets': '#1d4ed8',
  'Beginner': '#6d28d9',
};

export default function BlogIndex() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
      {/* Header */}
      <div style={{ marginBottom: 64 }}>
        <div style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.72rem', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
          FreeDealCalc Blog
        </div>
        <h1 style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, color: '#18181b', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 20 }}>
          Real Estate Investing Guides
        </h1>
        <p style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '1.05rem', color: '#52525b', lineHeight: 1.7, maxWidth: 600 }}>
          Practical guides written by an active Northern Virginia investor with 20+ years of fix-and-flip, wholesale, and rental experience. Every deal concept explained with real numbers.
        </p>
      </div>

      {/* Post grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 28 }}>
        {posts.map((post) => {
          const catColor = categoryColors[post.category] || '#059669';
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div style={{
                background: '#ffffff',
                border: '1px solid #e4e4e7',
                borderRadius: 12,
                padding: '24px',
                height: '100%',
                cursor: 'pointer',
              }}>
                {/* Category tag */}
                <div style={{ marginBottom: 14 }}>
                  <span style={{
                    fontFamily: 'var(--font-dm-mono, monospace)',
                    fontSize: '0.62rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: catColor,
                    background: `${catColor}14`,
                    padding: '3px 8px',
                    borderRadius: 4,
                    fontWeight: 600,
                  }}>
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 style={{
                  fontFamily: 'var(--font-cormorant, Georgia, serif)',
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#18181b',
                  lineHeight: 1.3,
                  marginBottom: 10,
                  letterSpacing: '-0.01em',
                }}>
                  {post.title}
                </h2>

                {/* Description */}
                <p style={{
                  fontFamily: 'var(--font-sora, sans-serif)',
                  fontSize: '0.875rem',
                  color: '#52525b',
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}>
                  {post.description}
                </p>

                {/* Meta row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.68rem', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {post.date}
                  </span>
                  <span style={{ width: 3, height: 3, background: '#d4d4d8', borderRadius: '50%', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.68rem', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {post.readTime} read
                  </span>
                  <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.8rem', color: '#059669', fontWeight: 600 }}>
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div style={{
        background: 'linear-gradient(135deg, #059669, #047857)',
        borderRadius: 16,
        padding: '48px 40px',
        marginTop: 80,
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: 14 }}>
          Stop Reading. Start Analyzing.
        </div>
        <p style={{ fontFamily: 'var(--font-sora, sans-serif)', fontSize: '1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: 28, maxWidth: 480, margin: '0 auto 28px' }}>
          FreeDealCalc's AI analyst Freddie runs full deal analysis — flip, rental, BRRRR, or wholesale — free. No account required to get started.
        </p>
        <a
          href="https://www.freedealcalc.com/freddie"
          style={{
            display: 'inline-block',
            background: '#ffffff',
            color: '#059669',
            padding: '14px 32px',
            borderRadius: 8,
            fontFamily: 'var(--font-sora, sans-serif)',
            fontWeight: 700,
            fontSize: '0.95rem',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          Analyze My Deal Free →
        </a>
      </div>
    </div>
  );
}