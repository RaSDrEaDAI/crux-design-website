import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: `${project.title} — Crux Design`,
      description: project.description,
      images: [{ url: project.image, width: 800, height: 600, alt: project.title }],
    },
  };
}

function VideoEmbed({ type, id }: { type: string; id: string }) {
  const src =
    type === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${id}`
      : type === "vimeo"
        ? `https://player.vimeo.com/video/${id}`
        : id; // cloudinary passes full URL

  return (
    <div className="relative aspect-video rounded-xl overflow-hidden bg-purple/40">
      <iframe
        src={src}
        title="Project video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-purple to-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-cyan hover:text-cyan-light transition-colors text-sm mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <div className="max-w-3xl">
            <span className="bg-purple-dark/80 backdrop-blur-sm text-cyan text-sm font-medium px-4 py-1.5 rounded-full">
              {project.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-4">
              {project.title}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              {project.description}
            </p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-magenta hover:bg-magenta-light text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Visit Live Site
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Video Embed */}
      {project.videoEmbed && (
        <section className="py-12 bg-purple-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">
              Project <span className="text-cyan">Video</span>
            </h2>
            <VideoEmbed type={project.videoEmbed.type} id={project.videoEmbed.id} />
          </div>
        </section>
      )}

      {/* Full Description + Highlights */}
      {(project.fullDescription || project.highlights) && (
        <section className="py-16 bg-purple/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {project.fullDescription && (
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">
                    About This <span className="text-magenta">Project</span>
                  </h2>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {project.fullDescription}
                  </p>
                </div>
              )}
              {project.highlights && (
                <div>
                  <h3 className="text-xl font-bold mb-4 text-cyan">Highlights</h3>
                  <ul className="space-y-3">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-white/70">
                        <svg
                          className="w-5 h-5 text-magenta shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Image Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 bg-purple-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">
              Project <span className="text-cyan">Gallery</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <div
                  key={img}
                  className={`relative rounded-xl overflow-hidden ${
                    i === 0 ? "sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${project.title} gallery image ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Marketing Efforts */}
      {project.marketing && (
        <section className="py-16 bg-purple/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">
              Marketing <span className="text-magenta">Effort</span>
            </h2>
            <div className="bg-purple/40 border border-purple-light/20 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-3">{project.marketing.title}</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                {project.marketing.description}
              </p>
              {project.marketing.details && (
                <ul className="space-y-2">
                  {project.marketing.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-white/70">
                      <svg
                        className="w-5 h-5 text-cyan shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-dark via-magenta-dark to-violet-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Want something like this for your business?
          </h2>
          <p className="text-white/70 mb-8">
            Let&apos;s discuss how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-purple-dark font-semibold px-8 py-3 rounded-lg hover:bg-cyan transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
