import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FreeDealCalc — Free AI Deal Analyzer for Real Estate Investors",
  description: "Analyze fix-and-flip, wholesale, rental, and BRRRR deals in seconds. Free AI-powered deal scoring, reports, and seller proposals. Talk to Freddie.",
  metadataBase: new URL("https://www.freedealcalc.com"),
  verification: {
    google: "R6qYb2L3duD-6uyDDFlTyPb-z5RCeCtCjTlUBUyURxM",
  },
  openGraph: {
    title: "FreeDealCalc — Free AI Deal Analyzer",
    description: "Score your real estate deals in seconds. Free for flips, wholesale, rentals, and BRRRR.",
    url: "https://www.freedealcalc.com",
    siteName: "FreeDealCalc",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}