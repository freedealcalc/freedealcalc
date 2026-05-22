import PageClient from './Client';

export const metadata = {
  title: 'Free Wholesale Marketing Package Generator — FreeDealCalc',
  description: 'Free wholesale marketing package generator with Rentcast verified comps. Professional design, no designer required. Built for real estate wholesalers. No monthly fee.',
  alternates: { canonical: 'https://www.freedealcalc.com/tools/free-wholesale-marketing-package' },
};

export default function Page() {
  return (
    <>
      <div style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
        <h1>Free Wholesale Marketing Package Generator</h1>
        <p>Generate a professional wholesale marketing package with Rentcast verified comps, clean deal math, rehab estimates, and a buyer call to action — in 60 seconds, for free. No designer required. No monthly fee.</p>
        <h2>What is a wholesale marketing package?</h2>
        <p>A wholesale marketing package is the complete set of materials you use to market a deal to your buyer list. It includes a deal summary, comparable sales data, property condition notes, rehab estimate, photos, and a buyer call to action.</p>
        <h2>What goes in a wholesale marketing package?</h2>
        <p>Every strong dispo package includes: property address and photos, ARV with Rentcast verified comp support, estimated rehab scope and cost, your asking price, net profit estimate for the buyer, title company contact, and timeline.</p>
        <h2>How much does wholesale marketing software cost?</h2>
        <p>Most wholesale marketing tools charge $97–$800 per month or take a JV split of 50% of your assignment fee. FreeDealCalc generates professional wholesale marketing packages free — 3 packages per month with no monthly fee and no JV split.</p>
        <h2>How does Rentcast make the marketing package more credible?</h2>
        <p>Buyers verify your ARV claim before making an offer. When your marketing package already includes Rentcast verified comps with a third-party badge, buyers are more likely to offer at your price rather than negotiate down.</p>
      </div>
      <PageClient />
    </>
  );
}