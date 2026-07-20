import PageClient from './Client';

export const metadata = {
  title: { absolute: 'Free Wholesale Deal Flyer Generator — FreeDealCalc' },
  description: 'Free wholesale deal flyer generator with Rentcast verified comps. One-page deal summary ready to blast to your buyer list in 60 seconds. No monthly fee.',
  alternates: { canonical: 'https://www.freedealcalc.com/tools/free-wholesale-deal-flyer' },
};

export default function Page() {
  return <PageClient />;
}
