import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Crux Design — founded in Soho NYC by Uros Perisic, now bringing AI-powered design and marketing to small businesses in Southwest Florida.",
  openGraph: {
    title: "About Crux Design",
    description:
      "From Soho NYC to Southwest Florida — creative excellence meets cutting-edge AI.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-purple to-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              The Story Behind{" "}
              <span className="text-cyan">Crux</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              From the creative energy of Soho, New York City, to the sun-drenched
              innovation landscape of Southwest Florida — Crux Design has always been
              about pushing boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Born in <span className="text-magenta">Soho</span>
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Crux Design was founded by Uros Perisic in the heart of Soho, New York City —
                  a neighborhood where art, design, and technology collide on every corner.
                  What started as a branding and video production studio quickly evolved
                  into something more ambitious.
                </p>
                <p>
                  Working with diverse clients across industries, from concert visuals and
                  3D visualization to digital personas and UX design, Crux built a reputation
                  for creative excellence and technical precision.
                </p>
                <p>
                  Projects ranged from immersive event graphics to full platform designs
                  like Knowtify.me, always blending art direction with hands-on development.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/portfolio/apple-conf.jpg"
                alt="Crux Design project at Apple Conference"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Pivot */}
      <section className="py-20 bg-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/ai/ai-art-1.png"
                alt="AI-generated artwork by Crux Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">
                The <span className="text-cyan">AI</span> Pivot
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  As artificial intelligence began reshaping creative industries, Uros saw
                  an opportunity that most agencies missed: AI wasn&apos;t a threat to creative
                  work — it was the most powerful tool to amplify it.
                </p>
                <p>
                  Crux Design pivoted to integrate AI across every service offering.
                  From generative art and ComfyUI workflows to business process automation
                  and AI-powered marketing — the studio became a bridge between cutting-edge
                  technology and real-world business needs.
                </p>
                <p>
                  Now based in Southwest Florida, Crux Design is on a mission to help small
                  businesses in the SWFL area and beyond harness the power of AI — making
                  advanced technology accessible, practical, and beautiful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Drives <span className="text-magenta">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Creative Excellence",
                description:
                  "Every pixel matters. We bring the same attention to detail that defined our Soho roots to every project we touch.",
              },
              {
                title: "AI-First Thinking",
                description:
                  "We don't just use AI as a buzzword. We integrate it into real solutions that save time, reduce costs, and create value.",
              },
              {
                title: "Small Business Focus",
                description:
                  "Enterprise-grade solutions shouldn't require enterprise-grade budgets. We make powerful technology accessible to growing businesses.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-purple/40 border border-purple-light/20 rounded-xl p-8 text-center"
              >
                <h3 className="text-xl font-semibold mb-3 text-cyan">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple via-magenta-dark to-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Want to work with us?
          </h2>
          <p className="text-white/70 mb-8">
            We&apos;d love to hear about your project and explore how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-purple-dark font-semibold px-8 py-3 rounded-lg hover:bg-cyan transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
