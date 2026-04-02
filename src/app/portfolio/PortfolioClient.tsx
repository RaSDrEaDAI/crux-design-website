"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projects, applySettings, getProjectSection, type PortfolioSection, type ProjectSettings } from "@/data/projects";

const sections: { key: PortfolioSection; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "web", label: "Web Design & Applications" },
  { key: "broadcast", label: "Broadcast" },
  { key: "branding", label: "Branding" },
];

export default function PortfolioClient({ settings = {} }: { settings?: ProjectSettings }) {
  const [activeSection, setActiveSection] = useState<PortfolioSection>("all");
  const visibleProjects = useMemo(() => applySettings(projects, settings), [settings]);
  const filteredProjects = activeSection === "all"
    ? visibleProjects
    : visibleProjects.filter((p) => getProjectSection(p) === activeSection);

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

      {/* Category Tabs */}
      <section className="bg-purple-dark border-b border-purple-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 py-4">
            {sections.map((section) => (
              <button
                key={section.key}
                onClick={() => setActiveSection(section.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === section.key
                    ? "bg-cyan text-purple-dark"
                    : "bg-purple-light/30 text-white/70 hover:text-white hover:bg-purple-light/50"
                }`}
              >
                {section.label}
                <span className="ml-2 text-xs opacity-70">
                  ({section.key === "all" ? visibleProjects.length : visibleProjects.filter((p) => getProjectSection(p) === section.key).length})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
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
                  {project.liveUrl && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-magenta/80 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        Live Site
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
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
      <section className="py-16 bg-gradient-to-r from-violet-dark via-magenta-dark to-violet-dark">
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
