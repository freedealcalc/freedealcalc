export const metadata = {
  metadataBase: new URL('https://www.freedealcalc.com'),
  title: {
    template: '%s | FreeDealCalc — Free Real Estate Investor Tools',
    default: 'Free Real Estate Investor Calculators & Tools — FreeDealCalc',
  },
  description: 'Free real estate investor calculators and tools. Analyze flips, rentals, BRRRR, and wholesale deals with AI-powered deal scoring. No signup required.',
  openGraph: {
    siteName: 'FreeDealCalc',
    type: 'website',
  },
};

export default function ToolsLayout({ children }) {
  return children;
}