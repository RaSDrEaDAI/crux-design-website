import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";
import { loadProjectSettings } from "@/data/settings-server";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Crux Design's portfolio — from Sur La Table's recipe platform and Babcock Ranch to 3D visualization, AI-generated art, and UX design.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — Crux Design",
    description: "Creative and technical projects brought to life by Crux Design.",
  },
};

export const dynamic = "force-dynamic";

export default function PortfolioPage() {
  const settings = loadProjectSettings();
  return <PortfolioClient settings={settings} />;
}
