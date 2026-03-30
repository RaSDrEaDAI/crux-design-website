import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Crux Design offers web design, AI integration, marketing, social media management, and business automation for small businesses in Southwest Florida.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Crux Design",
    description:
      "Web design, AI integration, marketing, and automation for small businesses.",
  },
};

const services = [
  {
    title: "Web Design & Development",
    description:
      "We build modern, responsive websites that don't just look great — they perform. Using Next.js, React, and Tailwind CSS, we create fast-loading, SEO-optimized sites that convert visitors into customers.",
    features: [
      "Custom responsive design — mobile-first approach",
      "Next.js & React for blazing-fast performance",
      "SEO optimization built from the ground up",
      "Content management integration",
      "E-commerce ready solutions",
      "Ongoing maintenance and support",
    ],
    gradient: "from-cyan to-cyan-dark",
  },
  {
    title: "AI Integration",
    description:
      "From generative AI workflows to intelligent automation, we bring the power of artificial intelligence into your business operations. We work with tools like ComfyUI, Fal.ai, and the Anthropic SDK to build custom AI solutions.",
    features: [
      "Custom AI workflow design and implementation",
      "Generative AI for content and imagery",
      "Chatbot and conversational AI integration",
      "AI-powered data analysis and insights",
      "Process automation with intelligent decision-making",
      "Training and knowledge transfer",
    ],
    gradient: "from-magenta to-magenta-dark",
  },
  {
    title: "Marketing & Branding",
    description:
      "Strategic marketing that cuts through the noise. We craft brand identities, develop marketing strategies, and execute campaigns that build real connections with your audience.",
    features: [
      "Brand identity design and guidelines",
      "Digital marketing strategy",
      "Content creation and copywriting",
      "Email marketing campaigns",
      "PPC advertising management",
      "Analytics and performance tracking",
    ],
    gradient: "from-purple-light to-purple",
  },
  {
    title: "Social Media Management",
    description:
      "Consistent, engaging social media presence that grows your following and drives engagement. We handle everything from content creation to community management.",
    features: [
      "Social media strategy and calendar",
      "Content creation — graphics, video, copy",
      "Community management and engagement",
      "Influencer collaboration coordination",
      "Performance reporting and optimization",
      "Platform-specific strategy (Instagram, TikTok, LinkedIn, etc.)",
    ],
    gradient: "from-cyan-dark to-cyan",
  },
  {
    title: "Business Automation",
    description:
      "Stop wasting time on repetitive tasks. We design and implement intelligent automation systems that streamline your operations, from customer onboarding to inventory management.",
    features: [
      "Workflow analysis and optimization",
      "Custom automation pipeline design",
      "CRM and tool integration",
      "Automated reporting and notifications",
      "Customer journey automation",
      "Scalable architecture for growth",
    ],
    gradient: "from-magenta-dark to-magenta",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-purple to-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="text-magenta">Services</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              From pixel-perfect web design to AI-powered business automation — we offer
              a complete suite of services designed to help small businesses compete and
              grow in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${
                index % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`inline-block h-1 w-16 rounded-full bg-gradient-to-r ${service.gradient} mb-4`}
                />
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-white/70 leading-relaxed mb-6">{service.description}</p>
              </div>
              <div
                className={`bg-purple/40 border border-purple-light/20 rounded-xl p-6 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <h3 className="text-sm font-semibold text-cyan uppercase tracking-wider mb-4">
                  What&apos;s included
                </h3>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-white/70">
                      <svg
                        className="w-5 h-5 text-magenta shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple via-magenta-dark to-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-white/70 mb-8">
            Let&apos;s have a conversation about your goals. We&apos;ll help you figure out
            the right approach for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-purple-dark font-semibold px-8 py-3 rounded-lg hover:bg-cyan transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
