import MetroPageClient from './Client';

const METRO_CONFIG = {
  'atlanta-ga': { city: 'Atlanta', state: 'Georgia' },
  'dallas-tx': { city: 'Dallas', state: 'Texas' },
  'houston-tx': { city: 'Houston', state: 'Texas' },
  'phoenix-az': { city: 'Phoenix', state: 'Arizona' },
  'charlotte-nc': { city: 'Charlotte', state: 'North Carolina' },
  'tampa-fl': { city: 'Tampa', state: 'Florida' },
  'nashville-tn': { city: 'Nashville', state: 'Tennessee' },
  'denver-co': { city: 'Denver', state: 'Colorado' },
  'chicago-il': { city: 'Chicago', state: 'Illinois' },
  'baltimore-md': { city: 'Baltimore', state: 'Maryland' },
  'washington-dc': { city: 'Washington', state: 'DC / Maryland / Virginia' },
  'miami-fl': { city: 'Miami', state: 'Florida' },
  'orlando-fl': { city: 'Orlando', state: 'Florida' },
  'jacksonville-fl': { city: 'Jacksonville', state: 'Florida' },
  'memphis-tn': { city: 'Memphis', state: 'Tennessee' },
  'cleveland-oh': { city: 'Cleveland', state: 'Ohio' },
  'indianapolis-in': { city: 'Indianapolis', state: 'Indiana' },
  'kansas-city-mo': { city: 'Kansas City', state: 'Missouri' },
  'columbus-oh': { city: 'Columbus', state: 'Ohio' },
  'raleigh-nc': { city: 'Raleigh', state: 'North Carolina' },
  'pittsburgh-pa': { city: 'Pittsburgh', state: 'Pennsylvania' },
  'richmond-va': { city: 'Richmond', state: 'Virginia' },
  'virginia-beach-va': { city: 'Virginia Beach', state: 'Virginia' },
  'san-antonio-tx': { city: 'San Antonio', state: 'Texas' },
  'las-vegas-nv': { city: 'Las Vegas', state: 'Nevada' },
};

function getConfig(slug) {
  if (METRO_CONFIG[slug]) return METRO_CONFIG[slug];
  const parts = slug.split('-');
  const city = parts.slice(0, -1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const state = parts[parts.length - 1].toUpperCase();
  return { city, state };
}

export async function generateMetadata({ params }) {
  const slug = params['metro-slug'];
  const { city, state } = getConfig(slug);

  return {
    title: `${city} Real Estate Market Data — Prices, Trends & Investor Analysis | FreeDealCalc`,
    description: `Live ${city}, ${state} real estate market data. Median sale price, days on market, inventory trends, and free AI deal analysis for flippers, wholesalers, and rental investors.`,
    openGraph: {
      title: `${city} Real Estate Market Data | FreeDealCalc`,
      description: `Live market data and free deal analysis for ${city} real estate investors. Updated monthly.`,
      url: `https://www.freedealcalc.com/markets/${slug}`,
      siteName: 'FreeDealCalc',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city} Real Estate Market Data | FreeDealCalc`,
      description: `Live market data and free deal analysis for ${city} real estate investors.`,
    },
    alternates: {
      canonical: `https://www.freedealcalc.com/markets/${slug}`,
    },
  };
}

export default function Page({ params }) {
  return <MetroPageClient />;
}