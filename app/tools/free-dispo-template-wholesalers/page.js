import PageClient from './Client';

export const metadata = {
  title: { absolute: 'Free Dispo Template for Wholesalers — FreeDealCalc' },
  description: 'Free wholesale dispo template generator — better than a static Word doc. Pulls verified comps automatically and builds a package in 60 seconds.',
  alternates: { canonical: 'https://www.freedealcalc.com/tools/free-dispo-template-wholesalers' },
};

export default function Page() {
  return <PageClient />;
}
