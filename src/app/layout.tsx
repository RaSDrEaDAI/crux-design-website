import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Crux Design — AI-Powered Design & Marketing",
    description:
      "Creative excellence meets cutting-edge AI. Web design, marketing, and automation for small businesses.",
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
  return (
    <html lang="en">
      <body className="bg-purple-dark text-white antialiased">
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
