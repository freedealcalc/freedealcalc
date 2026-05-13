import InvestorPageClient from './Client';

const METRO_CONFIG = {
  'anaheim-ca': { city: 'Anaheim', state: 'California', region: 'Orange County' },
  'atlanta-ga': { city: 'Atlanta', state: 'Georgia', region: 'metro Atlanta' },
  'baltimore-md': { city: 'Baltimore', state: 'Maryland', region: 'metro Baltimore' },
  'charlotte-nc': { city: 'Charlotte', state: 'North Carolina', region: 'metro Charlotte' },
  'chicago-il': { city: 'Chicago', state: 'Illinois', region: 'Chicagoland' },
  'cincinnati-oh': { city: 'Cincinnati', state: 'Ohio', region: 'Greater Cincinnati' },
  'cleveland-oh': { city: 'Cleveland', state: 'Ohio', region: 'Northeast Ohio' },
  'columbus-oh': { city: 'Columbus', state: 'Ohio', region: 'Central Ohio' },
  'denver-co': { city: 'Denver', state: 'Colorado', region: 'Front Range' },
  'detroit-mi': { city: 'Detroit', state: 'Michigan', region: 'metro Detroit' },
  'fort-lauderdale-fl': { city: 'Fort Lauderdale', state: 'Florida', region: 'Broward County' },
  'jacksonville-fl': { city: 'Jacksonville', state: 'Florida', region: 'Northeast Florida' },
  'las-vegas-nv': { city: 'Las Vegas', state: 'Nevada', region: 'Clark County' },
  'los-angeles-ca': { city: 'Los Angeles', state: 'California', region: 'LA County' },
  'miami-fl': { city: 'Miami', state: 'Florida', region: 'Miami-Dade' },
  'milwaukee-wi': { city: 'Milwaukee', state: 'Wisconsin', region: 'Greater Milwaukee' },
  'minneapolis-mn': { city: 'Minneapolis', state: 'Minnesota', region: 'Twin Cities' },
  'montgomery-county-pa': { city: 'Montgomery County', state: 'Pennsylvania', region: 'Philadelphia suburbs' },
  'nashville-tn': { city: 'Nashville', state: 'Tennessee', region: 'Middle Tennessee' },
  'new-brunswick-nj': { city: 'New Brunswick', state: 'New Jersey', region: 'Central New Jersey' },
  'new-york-ny': { city: 'New York', state: 'New York', region: 'NYC metro' },
  'newark-nj': { city: 'Newark', state: 'New Jersey', region: 'Essex County' },
  'oakland-ca': { city: 'Oakland', state: 'California', region: 'East Bay' },
  'orlando-fl': { city: 'Orlando', state: 'Florida', region: 'Central Florida' },
  'philadelphia-pa': { city: 'Philadelphia', state: 'Pennsylvania', region: 'metro Philadelphia' },
  'phoenix-az': { city: 'Phoenix', state: 'Arizona', region: 'Maricopa County' },
  'portland-or': { city: 'Portland', state: 'Oregon', region: 'metro Portland' },
  'providence-ri': { city: 'Providence', state: 'Rhode Island', region: 'Greater Providence' },
  'riverside-ca': { city: 'Riverside', state: 'California', region: 'Inland Empire' },
  'sacramento-ca': { city: 'Sacramento', state: 'California', region: 'Sacramento Valley' },
  'san-diego-ca': { city: 'San Diego', state: 'California', region: 'San Diego County' },
  'san-francisco-ca': { city: 'San Francisco', state: 'California', region: 'San Francisco Bay' },
  'san-jose-ca': { city: 'San Jose', state: 'California', region: 'Silicon Valley' },
  'seattle-wa': { city: 'Seattle', state: 'Washington', region: 'Puget Sound' },
  'tampa-fl': { city: 'Tampa', state: 'Florida', region: 'Tampa Bay' },
  'virginia-beach-va': { city: 'Virginia Beach', state: 'Virginia', region: 'Hampton Roads' },
  'warren-mi': { city: 'Warren', state: 'Michigan', region: 'Macomb County' },
  'washington-dc': { city: 'Washington', state: 'DC / Maryland / Virginia', region: 'the DMV' },
  'west-palm-beach-fl': { city: 'West Palm Beach', state: 'Florida', region: 'Palm Beach County' },
};

function getConfig(slug) {
  if (METRO_CONFIG[slug]) return METRO_CONFIG[slug];
  const parts = slug.split('-');
  const city = parts.slice(0, -1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const state = parts[parts.length - 1].toUpperCase();
  return { city, state, region: city };
}

export async function generateMetadata({ params }) {
  const slug = params['metro-slug'];
  const config = getConfig(slug);
  const { city, state, region } = config;

  return {
    title: `${city} Real Estate Investor Activity — Market Share & Trends | FreeDealCalc`,
    description: `Track investor home purchases, market share, and year-over-year trends in ${city}, ${state}. Free quarterly data for wholesalers, flippers, and rental investors in ${region}.`,
    openGraph: {
      title: `${city} Real Estate Investor Activity | FreeDealCalc`,
      description: `Investor market share, purchase volume, and competition trends for ${region}. Updated quarterly. Free deal analysis included.`,
      url: `https://www.freedealcalc.com/investor-markets/${slug}`,
      siteName: 'FreeDealCalc',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${city} Real Estate Investor Activity | FreeDealCalc`,
      description: `Investor market share and trends for ${region}. Free quarterly data for real estate investors.`,
    },
    alternates: {
      canonical: `https://www.freedealcalc.com/investor-markets/${slug}`,
    },
  };
}

export default function Page({ params }) {
  return <InvestorPageClient />;
}