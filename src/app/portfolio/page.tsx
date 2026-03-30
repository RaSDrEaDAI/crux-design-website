import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Crux Design's portfolio — from 3D visualization and AI-generated art to UX design and digital personas.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portfolio — Crux Design",
    description: "Creative and technical projects brought to life by Crux Design.",
  },
};

const projects = [
  {
    title: "3D Visualization & Generative AI",
    category: "AI / 3D",
    description:
      "Cutting-edge 3D visualizations enhanced with generative AI techniques, pushing the boundaries of digital art and commercial graphics.",
    image: "/images/portfolio/3dviz-genai.png",
  },
  {
    title: "Digital Personas",
    category: "AI / Creative",
    description:
      "AI-driven digital persona creation for brands and influencers — photorealistic characters that bring campaigns to life.",
    image: "/images/portfolio/digital-personas.png",
  },
  {
    title: "Knowtify.me Platform",
    category: "Web / UX",
    description:
      "Full platform design and UX for Knowtify.me — a notification and awareness platform with mapping, analytics, and user engagement features.",
    image: "/images/portfolio/knowtifyme.png",
  },
  {
    title: "Knowtify.me UX Design",
    category: "UX / UI",
    description:
      "Detailed user experience design work for the Knowtify.me platform, including wireframes, flows, and interactive prototypes.",
    image: "/images/portfolio/knowtifyme-ux.png",
  },
  {
    title: "Apple Conference 2019",
    category: "Event / Video",
    description:
      "Visual production and creative direction for event coverage at Apple Conference 2019.",
    image: "/images/portfolio/apple-conf.jpg",
  },
  {
    title: "Digital Influencer Campaign",
    category: "AI / Marketing",
    description:
      "AI-generated digital influencer content for modern marketing campaigns — blending technology with authentic brand storytelling.",
    image: "/images/portfolio/digital-influencer.png",
  },
  {
    title: "ComfyUI Workflows",
    category: "AI / Tooling",
    description:
      "Advanced ComfyUI pipeline development for generative art production — custom nodes, workflows, and batch processing systems.",
    image: "/images/portfolio/comfyui.png",
  },
  {
    title: "Metaverse Experience",
    category: "3D / Immersive",
    description:
      "Immersive metaverse environment design — virtual spaces that combine architectural thinking with interactive digital experiences.",
    image: "/images/portfolio/metaverse.jpeg",
  },
  {
    title: "Freal Brand Project",
    category: "Branding / Web",
    description:
      "Complete brand identity and web presence for Freal — from visual direction to responsive web implementation.",
    image: "/images/freal/cover.webp",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-purple to-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="text-cyan">Work</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              From AI-generated art to full platform design — here&apos;s a selection of
              projects that showcase our range and capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-purple/40 border border-purple-light/20 rounded-xl overflow-hidden group hover:border-magenta/40 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-purple-dark/80 backdrop-blur-sm text-cyan text-xs font-medium px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Art Gallery */}
      <section className="py-20 bg-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              AI <span className="text-magenta">Gallery</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A selection of AI-generated artwork created using custom workflows
              and cutting-edge generative models.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/ai/ai-art-1.png"
                alt="AI-generated artwork 1"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src="/images/ai/ai-art-2.png"
                alt="AI-generated artwork 2"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple via-magenta-dark to-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Like what you see?
          </h2>
          <p className="text-white/70 mb-8">
            Let&apos;s create something amazing for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-purple-dark font-semibold px-8 py-3 rounded-lg hover:bg-cyan transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
