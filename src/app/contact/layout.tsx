import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Crux Design. We help small businesses in Southwest Florida with web design, AI integration, marketing, and automation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Crux Design",
    description:
      "Ready to start a project? Contact Crux Design today.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
