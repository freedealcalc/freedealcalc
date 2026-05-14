import Link from 'next/link';
export const revalidate = 2592000;
export const metadata = {
  title: \'Real Estate Investing Blog | FreeDealCalc',
  description: \'Free guides for house flippers, wholesalers, landlords, and BRRRR investors. Deal analysis, market guides, and tool tutorials from a 20-year Northern Virginia investor.',
  alternates: { canonical: 'https://www.freedealcalc.com/blog' },
};

const s = {
  page: { maxWidth: 1100, margin: '0 auto', padding: '72px 24px' },
  hero: { marginBottom: 64, textAlign: 'center' },
  heroTitle: { fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', fontWeight: 700, color: '#18181b', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: 16 },
  heroSub: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '1.05rem', color: '#52525b', lineHeight: 1.7, maxWidth: 580, margin: '0 auto 32px' },
  cta: { display: 'inline-block', background: '#059669', color: '#fff', padding: '12px 28px', borderRadius: 7, fontFamily: 'var(--font-sora, sans-serif)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' },
  section: { marginBottom: 64 },
  sectionHead: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, paddingBottom: 12, borderBottom: '2px solid #e4e4e7' },
  sectionTitle: { fontFamily: 'var(--font-cormorant, Georgia, serif)', fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#18181b' },
  badge: { fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.7rem', color: '#059669', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 4, padding: '3px 8px', textTransform: 'uppercase', letterSpacing: '0.06em' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 },
  card: { background: '#fafafa', border: '1px solid #e4e4e7', borderRadius: 8, padding: '18px 20px', textDecoration: 'none', display: 'block', transition: 'border-color 0.15s' },
  cardTitle: { fontFamily: 'var(--font-sora, sans-serif)', fontSize: '0.92rem', fontWeight: 600, color: '#18181b', lineHeight: 1.45, marginBottom: 6 },
  cardMeta: { fontFamily: 'var(--font-dm-mono, monospace)', fontSize: '0.7rem', color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.06em' },
};

const Post = ({ href, title, tag }) => (
  <Link href={href} style={s.card}>
    <div style={s.cardTitle}>{title}</div>
    {tag && <div style={s.cardMeta}>{tag}</div>}
  </Link>
);

const Section = ({ title, badge, children }) => (
  <div style={s.section}>
    <div style={s.sectionHead}>
      <h2 style={s.sectionTitle}>{title}</h2>
      {badge && <span style={s.badge}>{badge}</span>}
    </div>
    <div style={s.grid}>{children}</div>
  </div>
);

export default function BlogIndex() {
  return (
    <div style={s.page}>
      {/* Hero */}
      <div style={s.hero}>
        <h1 style={s.heroTitle}>Real Estate Investing<br />Guides & Tools</h1>
        <p style={s.heroSub}>Free resources for house flippers, wholesalers, landlords, and BRRRR investors — from a 20-year Northern Virginia investor and licensed agent.</p>
        <a href="https://www.freedealcalc.com/freddie" style={s.cta}>Analyze Any Deal Free →</a>
      </div>

      {/* Free Calculators & Tools */}
      <Section title="Free Calculators & Tools" badge="Free">
        <Post href="/blog/free-arv-calculator" title="Free ARV Calculator for Real Estate Investors" tag="Calculator" />
        <Post href="/blog/free-house-flip-calculator" title="Free House Flip Calculator — Profit, ROI, and Max Offer" tag="Calculator" />
        <Post href="/blog/free-rental-property-calculator" title="Free Rental Property Calculator — Cash Flow, Cap Rate, CoC" tag="Calculator" />
        <Post href="/blog/wholesale-deal-calculator-free" title="Free Wholesale Deal Calculator — MAO and Assignment Fee" tag="Calculator" />
        <Post href="/blog/max-allowable-offer-calculator" title="Max Allowable Offer Calculator — Free Tool" tag="Calculator" />
        <Post href="/blog/house-flip-profit-calculator" title="House Flip Profit Calculator — See Your Net Before You Buy" tag="Calculator" />
        <Post href="/blog/brrrr-calculator-free" title="Free BRRRR Calculator — Does Your Deal Recycle Capital?" tag="Calculator" />
        <Post href="/blog/rental-cash-flow-calculator" title="Rental Cash Flow Calculator — Free Tool" tag="Calculator" />
        <Post href="/blog/cap-rate-calculator-free" title="Cap Rate Calculator — Free Tool" tag="Calculator" />
        <Post href="/blog/dscr-calculator-free" title="Free DSCR Calculator — Does Your Rental Qualify?" tag="Calculator" />
        <Post href="/blog/rehab-cost-estimator-free" title="Free Rehab Cost Estimator for House Flippers" tag="Calculator" />
        <Post href="/blog/real-estate-roi-calculator" title="Real Estate ROI Calculator — Free Tool" tag="Calculator" />
        <Post href="/blog/after-repair-value-calculator" title="After Repair Value Calculator — Free ARV Tool" tag="Calculator" />
        <Post href="/blog/assignment-fee-calculator" title="Assignment Fee Calculator — How Much Can You Make Wholesaling?" tag="Calculator" />
        <Post href="/blog/holding-cost-calculator" title="Holding Cost Calculator — What Your Flip Really Costs Per Month" tag="Calculator" />
      </Section>

      {/* FreeDealCalc Platform */}
      <Section title="FreeDealCalc Platform" badge="Tool Guides">
        <Post href="/blog/how-to-use-freedealcalc" title="How to Use FreeDealCalc: Complete Guide" tag="Platform" />
        <Post href="/blog/what-is-freddie-ai-deal-analyst" title="What is Freddie? FreeDealCalc's AI Deal Analyst" tag="Platform" />
        <Post href="/blog/free-wholesale-dispo-package-tool" title="Free Wholesale Dispo Package Generator" tag="Platform" />
        <Post href="/blog/how-to-generate-seller-proposal-free" title="How to Generate a Free Seller Proposal" tag="Platform" />
        <Post href="/blog/real-estate-deal-score-explained" title="Real Estate Deal Score: How FreeDealCalc Scores Deals" tag="Platform" />
      </Section>

      {/* Fix and Flip */}
      <Section title="Fix and Flip" badge="Strategy Deep Dives">
        <Post href="/blog/how-to-estimate-rehab-costs" title="How to Estimate Rehab Costs for House Flippers" tag="Flip" />
        <Post href="/blog/flip-house-no-money-down" title="How to Flip Houses With No Money Down" tag="Flip" />
        <Post href="/blog/how-long-does-it-take-to-flip-a-house" title="How Long Does It Take to Flip a House?" tag="Flip" />
        <Post href="/blog/house-flipping-taxes-explained" title="House Flipping Taxes Explained" tag="Flip" />
        <Post href="/blog/best-renovations-roi-house-flip" title="Best Renovations for House Flip ROI" tag="Flip" />
        <Post href="/blog/how-to-find-contractors-house-flip" title="How to Find Reliable Contractors for House Flipping" tag="Flip" />
        <Post href="/blog/house-flip-gone-wrong-lessons" title="House Flip Gone Wrong: Real Lessons" tag="Flip" />
        <Post href="/blog/cosmetic-flip-vs-full-rehab" title="Cosmetic Flip vs Full Rehab: Which Should You Do?" tag="Flip" />
        <Post href="/blog/how-to-flip-houses-no-experience" title="How to Flip Houses With No Experience" tag="Flip" />
        <Post href="/blog/house-flipping-mistakes-beginners" title="House Flipping Mistakes Beginners Make" tag="Flip" />
        <Post href="/blog/what-is-50-percent-rule" title="What Is the 50% Rule in Real Estate?" tag="Flip" />
        <Post href="/blog/what-is-70-percent-rule" title="What Is the 70% Rule in Real Estate?" tag="Flip" />
        <Post href="/blog/house-flipping-for-beginners" title="House Flipping for Beginners: A Complete Guide" tag="Flip" />
        <Post href="/blog/how-to-find-motivated-sellers" title="How to Find Motivated Sellers" tag="Flip" />
        <Post href="/blog/arv-real-estate-explained" title="ARV Real Estate Explained" tag="Flip" />
        <Post href="/blog/what-is-a-good-cap-rate" title="What Is a Good Cap Rate?" tag="Flip" />
      </Section>

      {/* Motivated Sellers & Distressed Properties */}
      <Section title="Motivated Sellers & Distressed Properties" badge="Seller Guides">
        <Post href="/blog/how-to-sell-inherited-house" title="How to Sell an Inherited House: Your Options Explained" tag="Seller" />
        <Post href="/blog/how-to-sell-house-in-foreclosure" title="How to Sell a House in Foreclosure" tag="Seller" />
        <Post href="/blog/selling-house-during-divorce" title="Selling a House During Divorce" tag="Seller" />
        <Post href="/blog/how-to-sell-hoarder-house-fast" title="How to Sell a Hoarder House Fast" tag="Seller" />
        <Post href="/blog/behind-on-mortgage-options" title="Behind on Mortgage Payments: Your Options" tag="Seller" />
        <Post href="/blog/how-to-avoid-foreclosure" title="How to Avoid Foreclosure: 6 Options That Work" tag="Seller" />
        <Post href="/blog/sell-house-as-is-without-repairs" title="How to Sell a House As-Is Without Repairs" tag="Seller" />
        <Post href="/blog/what-happens-when-you-inherit-a-house" title="What Happens When You Inherit a House?" tag="Seller" />
        <Post href="/blog/how-to-sell-vacant-property" title="How to Sell a Vacant Property" tag="Seller" />
        <Post href="/blog/sell-house-with-code-violations" title="How to Sell a House With Code Violations" tag="Seller" />
        <Post href="/blog/selling-house-with-liens" title="Selling a House With Liens" tag="Seller" />
        <Post href="/blog/how-to-sell-fire-damaged-house" title="How to Sell a Fire Damaged House" tag="Seller" />
        <Post href="/blog/probate-real-estate-investing" title="Probate Real Estate Investing" tag="Seller" />
        <Post href="/blog/how-to-find-distressed-properties" title="How to Find Distressed Properties for Sale" tag="Seller" />
        <Post href="/blog/driving-for-dollars-guide" title="Driving for Dollars: A Complete Guide" tag="Seller" />
        <Post href="/blog/cash-offer-vs-traditional-sale" title="Cash Offer vs Traditional Sale" tag="Seller" />
      </Section>

      {/* Rental & BRRRR */}
      <Section title="Rental Properties & BRRRR" badge="Strategy Deep Dives">
        <Post href="/blog/how-to-screen-tenants" title="How to Screen Tenants: A Landlord's Complete Guide" tag="Rental" />
        <Post href="/blog/landlord-vs-property-manager" title="Self-Managing vs Property Manager: Which Is Right?" tag="Rental" />
        <Post href="/blog/single-family-vs-multifamily-investment" title="Single Family vs Multifamily Real Estate Investing" tag="Rental" />
        <Post href="/blog/best-states-landlord-laws-2026" title="Best States for Landlords in 2026" tag="Rental" />
        <Post href="/blog/how-to-raise-rent-legally" title="How to Raise Rent Legally" tag="Rental" />
        <Post href="/blog/short-term-rental-vs-long-term-rental" title="Short-Term Rental vs Long-Term Rental" tag="Rental" />
        <Post href="/blog/section-8-housing-pros-cons" title="Section 8 Housing for Landlords: Pros, Cons, and How It Works" tag="Rental" />
        <Post href="/blog/how-to-evict-a-tenant" title="How to Evict a Tenant: The Legal Process" tag="Rental" />
        <Post href="/blog/rental-property-tax-deductions-2026" title="Rental Property Tax Deductions in 2026" tag="Rental" />
        <Post href="/blog/how-to-build-rental-portfolio" title="How to Build a Rental Property Portfolio" tag="Rental" />
        <Post href="/blog/brrrr-method-explained" title="BRRRR Method Explained: Buy, Rehab, Rent, Refinance, Repeat" tag="BRRRR" />
        <Post href="/blog/brrrr-vs-house-flipping" title="BRRRR vs House Flipping: Which Strategy Is Better?" tag="BRRRR" />
        <Post href="/blog/cash-on-cash-return-explained" title="Cash-on-Cash Return Explained" tag="Rental" />
        <Post href="/blog/rental-property-depreciation" title="Rental Property Depreciation: How It Works" tag="Rental" />
      </Section>

      {/* Wholesale */}
      <Section title="Wholesaling Real Estate" badge="Strategy Deep Dives">
        <Post href="/blog/how-to-wholesale-real-estate" title="How to Wholesale Real Estate: A Complete Guide" tag="Wholesale" />
        <Post href="/blog/wholesale-vs-house-flipping" title="Wholesaling vs House Flipping: Which Is Better?" tag="Wholesale" />
        <Post href="/blog/how-to-build-a-buyers-list" title="How to Build a Cash Buyers List for Wholesaling" tag="Wholesale" />
        <Post href="/blog/assignment-of-contract-explained" title="Assignment of Contract in Real Estate Explained" tag="Wholesale" />
        <Post href="/blog/how-to-market-wholesale-deals" title="How to Market Your Wholesale Deals" tag="Wholesale" />
      </Section>

      {/* Financing */}
      <Section title="Financing & Capital" badge="Strategy Deep Dives">
        <Post href="/blog/private-money-lenders-real-estate" title="Private Money Lenders for Real Estate" tag="Financing" />
        <Post href="/blog/how-to-get-hard-money-loan-first-deal" title="How to Get a Hard Money Loan for Your First Deal" tag="Financing" />
        <Post href="/blog/conventional-loan-vs-dscr-loan" title="Conventional Loan vs DSCR Loan: Which Is Better?" tag="Financing" />
        <Post href="/blog/gap-funding-real-estate" title="Gap Funding in Real Estate: What It Is and How to Use It" tag="Financing" />
        <Post href="/blog/transactional-funding-explained" title="Transactional Funding for Real Estate" tag="Financing" />
        <Post href="/blog/how-to-fund-real-estate-deals-no-money" title="How to Fund Real Estate Deals With No Money" tag="Financing" />
        <Post href="/blog/real-estate-syndication-explained" title="Real Estate Syndication Explained" tag="Financing" />
        <Post href="/blog/hard-money-lenders-explained" title="Hard Money Lenders Explained for Investors" tag="Financing" />
        <Post href="/blog/dscr-loans-for-investors" title="DSCR Loans for Real Estate Investors" tag="Financing" />
      </Section>

      {/* Market Guides by City */}
      <Section title="City & Market Guides" badge="Local Markets">
        <Post href="/blog/house-flipping-northern-virginia" title="House Flipping in Northern Virginia: Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-atlanta" title="House Flipping in Atlanta: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-phoenix" title="House Flipping in Phoenix: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-dallas" title="House Flipping in Dallas: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-houston" title="House Flipping in Houston: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-charlotte" title="House Flipping in Charlotte: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-nashville" title="House Flipping in Nashville: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-denver" title="House Flipping in Denver: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-indianapolis" title="House Flipping in Indianapolis: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-jacksonville" title="House Flipping in Jacksonville: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-columbus" title="House Flipping in Columbus: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-kansas-city" title="House Flipping in Kansas City: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-memphis" title="House Flipping in Memphis: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-cleveland" title="House Flipping in Cleveland: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-detroit" title="House Flipping in Detroit: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-las-vegas" title="House Flipping in Las Vegas: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-orlando" title="House Flipping in Orlando: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-san-antonio" title="House Flipping in San Antonio: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-raleigh" title="House Flipping in Raleigh: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-minneapolis" title="House Flipping in Minneapolis: 2026 Market Guide" tag="Market" />
        <Post href="/blog/house-flipping-tampa" title="House Flipping in Tampa: 2026 Market Guide" tag="Market" />
      </Section>

      {/* Market Outlook & AI */}
      <Section title="Market Outlook & AI Tools" badge="2026">
        <Post href="/blog/real-estate-investing-2026-outlook" title="Real Estate Investing in 2026: Market Outlook" tag="2026" />
        <Post href="/blog/is-house-flipping-still-profitable-2026" title="Is House Flipping Still Profitable in 2026?" tag="2026" />
        <Post href="/blog/real-estate-vs-stock-market-2026" title="Real Estate vs Stock Market in 2026" tag="2026" />
        <Post href="/blog/ai-real-estate-investing-tools-2026" title="AI Real Estate Investing Tools in 2026" tag="AI" />
        <Post href="/blog/how-to-use-ai-to-analyze-real-estate-deals" title="How to Use AI to Analyze Real Estate Deals" tag="AI" />
      </Section>

    </div>
  );
}
