import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const SITE_URL = "https://cruxnyc.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: "Crux Design — AI-Powered Design & Marketing for Small Business",
    template: "%s | Crux Design",
  },
  description:
    "Crux Design blends creative excellence with cutting-edge AI to help small businesses in Southwest Florida grow through web design, marketing, automation, and social media.",
  keywords: [
    "web design",
    "AI integration",
    "marketing",
    "social media",
    "small business",
    "Southwest Florida",
    "SWFL",
    "automation",
    "Crux Design",
  ],
  openGraph: {
    title: "Crux Design — AI-Powered Design & Marketing",
    description:
      "Creative excellence meets cutting-edge AI. Web design, marketing, and automation for small businesses.",
    type: "website",
    locale: "en_US",
    siteName: "Crux Design",
    url: SITE_URL,
    images: [
      {
        url: "/images/branding/og-placeholder.png",
        width: 1200,
        height: 630,
        alt: "Crux Design — AI-Powered Design & Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crux Design — AI-Powered Design & Marketing",
    description:
      "Creative excellence meets cutting-edge AI. Web design, marketing, and automation for small businesses.",
    images: ["/images/branding/og-placeholder.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Crux Design",
    url: SITE_URL,
    logo: `${SITE_URL}/images/branding/logo.png`,
    description:
      "AI-powered design, marketing, and automation for small businesses in Southwest Florida.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressLocality: "Southwest Florida",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 26.64,
        longitude: -81.87,
      },
      geoRadius: "100 mi",
    },
    founder: {
      "@type": "Person",
      name: "Uros Perisic",
    },
    knowsAbout: [
      "Web Design",
      "AI Integration",
      "Digital Marketing",
      "Social Media Management",
      "Business Automation",
    ],
    serviceType: [
      "Web Design & Development",
      "AI Integration",
      "Marketing & Branding",
      "Social Media Management",
      "Business Automation",
    ],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="bg-purple-dark text-white antialiased font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-magenta focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
