import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Web Design & Development",
    description:
      "Custom websites built with modern frameworks that load fast, look stunning, and convert visitors into customers.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    description:
      "Harness the power of artificial intelligence to automate workflows, generate content, and unlock new capabilities for your business.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Marketing & Social Media",
    description:
      "Strategic digital marketing and social media management that builds your brand and drives real engagement.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Business Automation",
    description:
      "Streamline your operations with intelligent automation — from customer onboarding to inventory management.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-dark via-purple to-purple-dark" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/portfolio/3dviz-genai.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-dark via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-cyan">
                Design
              </span>{" "}
              Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-magenta">
                AI
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
              We help small businesses in Southwest Florida and beyond transform through
              creative design, intelligent automation, and cutting-edge AI integration.
              From stunning websites to automated workflows — we build the future of your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-magenta hover:bg-magenta-light text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center border border-cyan/40 hover:border-cyan text-cyan hover:bg-cyan/10 font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-purple-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What We <span className="text-cyan">Do</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Full-service design and technology solutions tailored for businesses
              ready to grow with the power of AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-purple/40 border border-purple-light/20 rounded-xl p-8 hover:border-magenta/40 transition-colors group"
              >
                <div className="text-cyan group-hover:text-magenta transition-colors mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-cyan hover:text-cyan-light transition-colors font-medium inline-flex items-center gap-2"
            >
              Learn more about our services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-purple/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-magenta">Work</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              A glimpse into the creative and technical projects we&apos;ve brought to life.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/portfolio/3dviz-genai.png", title: "3D Visualization & GenAI" },
              { src: "/images/portfolio/digital-personas.png", title: "Digital Personas" },
              { src: "/images/portfolio/knowtifyme.png", title: "Knowtify.me Platform" },
            ].map((item) => (
              <div
                key={item.title}
                className="relative aspect-[4/3] rounded-xl overflow-hidden group"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center bg-cyan hover:bg-cyan-light text-purple-dark font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple via-magenta-dark to-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a stunning new website, AI-powered automation, or a complete
            digital marketing strategy — we&apos;re here to make it happen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-purple-dark font-semibold px-10 py-4 rounded-lg hover:bg-cyan transition-colors text-lg"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
