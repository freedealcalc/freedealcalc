export const revalidate = 2592000;
export const metadata = {
  title: "Real Estate Investing Blog | FreeDealCalc",
  description: "Expert guides on house flipping, rental investing, BRRRR, wholesaling, deal analysis, and real estate tax strategy — from an active Northern Virginia investor with 20+ years experience.",
  alternates: { canonical: 'https://www.freedealcalc.com/blog' },
};

const s = {
  page: { maxWidth: 1080, margin: '0 auto', padding: '80px 24px' },
  hero: { marginBottom: 56 },
  heroLabel: { fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.72rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 },
  heroTitle: { fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#18181b', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 16 },
  heroSub: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '1rem', color: '#71717a', lineHeight: 1.7, maxWidth: 560 },
  sectionLabel: { fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.68rem', color: '#059669', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20, marginTop: 56, paddingBottom: 10, borderBottom: '1px solid #e4e4e7' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 },
  card: { background: '#fafafa', border: '1px solid #e4e4e7', borderRadius: 10, padding: '20px 22px', textDecoration: 'none', display: 'block', transition: 'border-color 0.15s' },
  cardTitle: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.9rem', fontWeight: 700, color: '#18181b', lineHeight: 1.4, marginBottom: 6 },
  cardMeta: { fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.68rem', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.06em' },
};

const Section = ({ label, posts }) => (
  <>
    <div style={s.sectionLabel}>{label}</div>
    <div style={s.grid}>
      {posts.map(p => (
        <a key={p.slug} href={`/blog/${p.slug}`} style={s.card}>
          <div style={s.cardTitle}>{p.title}</div>
          <div style={s.cardMeta}>{p.tag || label}</div>
        </a>
      ))}
    </div>
  </>
);

const cityFlips = [
  { slug: 'house-flipping-northern-virginia', title: 'House Flipping in Northern Virginia' },
  { slug: 'house-flipping-washington-dc', title: 'House Flipping in Washington DC' },
  { slug: 'house-flipping-atlanta', title: 'House Flipping in Atlanta, GA' },
  { slug: 'house-flipping-charlotte', title: 'House Flipping in Charlotte, NC' },
  { slug: 'house-flipping-nashville', title: 'House Flipping in Nashville, TN' },
  { slug: 'house-flipping-dallas', title: 'House Flipping in Dallas, TX' },
  { slug: 'house-flipping-houston', title: 'House Flipping in Houston, TX' },
  { slug: 'house-flipping-phoenix', title: 'House Flipping in Phoenix, AZ' },
  { slug: 'house-flipping-denver', title: 'House Flipping in Denver, CO' },
  { slug: 'house-flipping-indianapolis', title: 'House Flipping in Indianapolis, IN' },
  { slug: 'house-flipping-detroit', title: 'House Flipping in Detroit, MI' },
  { slug: 'house-flipping-kansas-city', title: 'House Flipping in Kansas City, MO' },
  { slug: 'house-flipping-columbus', title: 'House Flipping in Columbus, OH' },
  { slug: 'house-flipping-cleveland', title: 'House Flipping in Cleveland, OH' },
  { slug: 'house-flipping-pittsburgh', title: 'House Flipping in Pittsburgh, PA' },
  { slug: 'house-flipping-philadelphia', title: 'House Flipping in Philadelphia, PA' },
  { slug: 'house-flipping-baltimore', title: 'House Flipping in Baltimore, MD' },
  { slug: 'house-flipping-jacksonville', title: 'House Flipping in Jacksonville, FL' },
  { slug: 'house-flipping-tampa', title: 'House Flipping in Tampa, FL' },
  { slug: 'house-flipping-orlando', title: 'House Flipping in Orlando, FL' },
  { slug: 'house-flipping-memphis', title: 'House Flipping in Memphis, TN' },
  { slug: 'house-flipping-st-louis', title: 'House Flipping in St. Louis, MO' },
  { slug: 'house-flipping-minneapolis', title: 'House Flipping in Minneapolis, MN' },
  { slug: 'house-flipping-portland', title: 'House Flipping in Portland, OR' },
  { slug: 'house-flipping-seattle', title: 'House Flipping in Seattle, WA' },
  { slug: 'house-flipping-chicago', title: 'House Flipping in Chicago, IL' },
  { slug: 'house-flipping-los-angeles', title: 'House Flipping in Los Angeles, CA' },
  { slug: 'house-flipping-las-vegas', title: 'House Flipping in Las Vegas, NV' },
  { slug: 'house-flipping-salt-lake-city', title: 'House Flipping in Salt Lake City, UT' },
  { slug: 'house-flipping-raleigh', title: 'House Flipping in Raleigh, NC' },
  // Batch 4
  { slug: 'house-flipping-austin', title: 'House Flipping in Austin, TX' },
  { slug: 'house-flipping-boston', title: 'House Flipping in Boston, MA' },
  { slug: 'house-flipping-cincinnati', title: 'House Flipping in Cincinnati, OH' },
  { slug: 'house-flipping-richmond', title: 'House Flipping in Richmond, VA' },
  { slug: 'house-flipping-milwaukee', title: 'House Flipping in Milwaukee, WI' },
  { slug: 'house-flipping-albuquerque', title: 'House Flipping in Albuquerque, NM' },
  { slug: 'house-flipping-birmingham', title: 'House Flipping in Birmingham, AL' },
  { slug: 'house-flipping-louisville', title: 'House Flipping in Louisville, KY' },
  { slug: 'house-flipping-buffalo', title: 'House Flipping in Buffalo, NY' },
  { slug: 'house-flipping-hartford', title: 'House Flipping in Hartford, CT' },
  { slug: 'house-flipping-akron', title: 'House Flipping in Akron, OH' },
  { slug: 'house-flipping-rochester', title: 'House Flipping in Rochester, NY' },
  { slug: 'house-flipping-worcester', title: 'House Flipping in Worcester, MA' },
  { slug: 'house-flipping-providence', title: 'House Flipping in Providence, RI' },
  { slug: 'house-flipping-albany', title: 'House Flipping in Albany, NY' },
  { slug: 'house-flipping-riverside', title: 'House Flipping in Riverside, CA' },
  { slug: 'house-flipping-san-diego', title: 'House Flipping in San Diego, CA' },
  { slug: 'house-flipping-san-jose', title: 'House Flipping in San Jose, CA' },
  { slug: 'house-flipping-san-francisco', title: 'House Flipping in San Francisco, CA' },
  { slug: 'house-flipping-new-york', title: 'House Flipping in New York City' },
];

const stateGuides = [
  { slug: 'real-estate-investing-texas', title: 'Real Estate Investing in Texas' },
  { slug: 'real-estate-investing-florida', title: 'Real Estate Investing in Florida' },
  { slug: 'real-estate-investing-ohio', title: 'Real Estate Investing in Ohio' },
  { slug: 'real-estate-investing-georgia', title: 'Real Estate Investing in Georgia' },
  { slug: 'real-estate-investing-north-carolina', title: 'Real Estate Investing in North Carolina' },
  { slug: 'real-estate-investing-tennessee', title: 'Real Estate Investing in Tennessee' },
  { slug: 'real-estate-investing-arizona', title: 'Real Estate Investing in Arizona' },
  { slug: 'real-estate-investing-colorado', title: 'Real Estate Investing in Colorado' },
  { slug: 'real-estate-investing-indiana', title: 'Real Estate Investing in Indiana' },
  { slug: 'real-estate-investing-michigan', title: 'Real Estate Investing in Michigan' },
  { slug: 'real-estate-investing-missouri', title: 'Real Estate Investing in Missouri' },
  { slug: 'real-estate-investing-virginia', title: 'Real Estate Investing in Virginia' },
  { slug: 'real-estate-investing-pennsylvania', title: 'Real Estate Investing in Pennsylvania' },
  { slug: 'real-estate-investing-washington', title: 'Real Estate Investing in Washington State' },
  { slug: 'real-estate-investing-california', title: 'Real Estate Investing in California' },
];

const nicheStrategy = [
  { slug: 'land-investing-beginners-guide', title: 'Land Investing for Beginners' },
  { slug: 'storage-unit-investing-guide', title: 'Storage Unit Investing Guide' },
  { slug: 'real-estate-note-investing-explained', title: 'Real Estate Note Investing Explained' },
  { slug: 'airbnb-investing-nashville', title: 'Airbnb Investing in Nashville' },
  { slug: 'airbnb-investing-smoky-mountains', title: 'Airbnb Investing: Smoky Mountains' },
  { slug: 'airbnb-investing-scottsdale', title: 'Airbnb Investing in Scottsdale' },
  { slug: 'airbnb-investing-florida-gulf-coast', title: 'Airbnb Investing: Florida Gulf Coast' },
  { slug: 'cost-segregation-study-real-estate', title: 'Cost Segregation Study for Real Estate' },
  { slug: 'depreciation-recapture-real-estate', title: 'Depreciation Recapture Explained' },
  { slug: 'real-estate-tax-strategy-flippers', title: 'Tax Strategy for House Flippers' },
  { slug: 's-corp-vs-llc-real-estate-investors', title: 'S-Corp vs LLC for Real Estate Investors' },
  { slug: 'how-to-analyze-mobile-home-park-deal', title: 'How to Analyze a Mobile Home Park Deal' },
  { slug: 'wholesaling-real-estate-texas', title: 'Wholesaling in Texas' },
  { slug: 'wholesaling-real-estate-florida', title: 'Wholesaling in Florida' },
  { slug: 'wholesaling-real-estate-ohio', title: 'Wholesaling in Ohio' },
  { slug: 'wholesaling-real-estate-georgia', title: 'Wholesaling in Georgia' },
  { slug: 'self-storage-real-estate-investing', title: 'Self-Storage Real Estate Investing' },
  { slug: 'manufactured-housing-investing', title: 'Manufactured Housing Investing' },
  { slug: 'real-estate-investing-military-families', title: 'Real Estate Investing for Military Families' },
  { slug: 'house-flipping-with-partner', title: 'House Flipping With a Partner' },
];

const calculatorHowTos = [
  { slug: 'how-to-calculate-depreciation-rental-property', title: 'How to Calculate Depreciation on Rental Property' },
  { slug: 'how-to-calculate-holding-costs-flip', title: 'How to Calculate Holding Costs on a Flip' },
  { slug: 'how-to-calculate-brrrr-returns', title: 'How to Calculate BRRRR Returns' },
  { slug: 'how-to-calculate-assignment-fee', title: 'How to Calculate Your Assignment Fee' },
  { slug: 'how-to-calculate-cap-rate-by-address', title: 'How to Calculate Cap Rate by Address' },
  { slug: 'how-to-calculate-gross-rent-multiplier', title: 'How to Calculate Gross Rent Multiplier' },
  { slug: 'how-to-calculate-equity-paydown', title: 'How to Calculate Equity Paydown' },
  { slug: 'how-to-calculate-cash-on-cash-return', title: 'How to Calculate Cash-on-Cash Return' },
  { slug: 'how-to-calculate-real-estate-roi', title: 'How to Calculate Real Estate ROI' },
  { slug: 'how-to-calculate-net-operating-income', title: 'How to Calculate Net Operating Income' },
];

const coreGuides = [
  { slug: 'how-to-flip-houses', title: 'How to Flip Houses: A Complete Guide' },
  { slug: 'brrrr-method-explained', title: 'The BRRRR Method Explained' },
  { slug: 'how-to-wholesale-real-estate', title: 'How to Wholesale Real Estate' },
  { slug: 'rental-property-investing-guide', title: 'Rental Property Investing Guide' },
  { slug: 'how-to-analyze-a-deal', title: 'How to Analyze a Real Estate Deal' },
  { slug: 'arv-explained', title: 'ARV Explained: After-Repair Value' },
  { slug: '70-percent-rule-explained', title: 'The 70% Rule Explained' },
  { slug: 'hard-money-loans-explained', title: 'Hard Money Loans Explained' },
  { slug: 'how-to-find-motivated-sellers', title: 'How to Find Motivated Sellers' },
  { slug: 'real-estate-deal-scoring', title: 'Real Estate Deal Scoring: How Freddie Grades Deals' },
  { slug: 'what-is-a-disposition-package', title: 'What Is a Disposition Package?' },
  { slug: 'how-to-write-a-seller-proposal', title: 'How to Write a Seller Proposal' },
  { slug: 'how-to-analyze-a-deal-in-5-minutes', title: 'How to Analyze a Deal in 5 Minutes' },
  { slug: 'free-real-estate-deal-analyzer-comparison', title: 'Free Deal Analyzer Comparison 2026' },
  { slug: 'best-free-real-estate-investing-tools-2026', title: 'Best Free Real Estate Tools 2026' },
  { slug: 'wholesaling-real-estate-by-state', title: 'Wholesaling Laws by State' },
  { slug: 'real-estate-investing-northern-virginia-2026', title: 'Investing in Northern Virginia 2026' },
];

export default function BlogIndex() {
  return (
    <div style={s.page}>
      <div style={s.hero}>
        <div style={s.heroLabel}>FreeDealCalc Blog</div>
        <h1 style={s.heroTitle}>Real Estate Investing Guides</h1>
        <p style={s.heroSub}>Expert analysis, market guides, and investor how-tos from Dan White — 20+ year fix-and-flip investor and founder of FreeDealCalc.</p>
      </div>

      <Section label="Core Investor Guides" posts={coreGuides} />
      <Section label="City Flip Guides" posts={cityFlips} />
      <Section label="State Investing Guides" posts={stateGuides} />
      <Section label="Niche Strategies" posts={nicheStrategy} />
      <Section label="Calculator How-Tos" posts={calculatorHowTos} />
    </div>
  );
}
