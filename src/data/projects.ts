export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
  videoEmbed?: { type: "youtube" | "vimeo" | "cloudinary"; id: string };
  gallery?: string[];
  highlights?: string[];
  fullDescription?: string;
  marketing?: {
    title: string;
    description: string;
    details?: string[];
  };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "sur-la-table-lid-and-ladle",
    title: "Sur La Table — Lid & Ladle",
    category: "Web / Content Platform",
    description:
      "A recipe blog and video hub designed for a nationwide cookware retailer — blending culinary storytelling with seamless product discovery to turn home cooks into loyal customers.",
    fullDescription:
      "We designed and built Lid & Ladle, Sur La Table's dedicated recipe blog and content platform, to bridge the gap between culinary inspiration and product sales. The platform pairs chef-driven recipes and step-by-step video tutorials with curated product recommendations — so every dish becomes a natural path to Sur La Table's cookware catalog. Features include a full-length video library with episode notes, integrated product carousels (\"These Are Perfect for This Recipe\"), community engagement through comments and social sharing, and a clean editorial layout that puts food photography front and center. The result is a content engine that strengthens brand authority, drives organic traffic, and turns casual browsers into engaged shoppers.",
    image: "/images/portfolio/sur-la-table/homepage.png",
    liveUrl: "https://learn.surlatable.com/",
    gallery: [
      "/images/portfolio/sur-la-table/recipe-video.png",
      "/images/portfolio/sur-la-table/popular-videos.png",
      "/images/portfolio/sur-la-table/product-recs.png",
    ],
    highlights: [
      "Chef-led video tutorials with episode notes",
      "Integrated product recommendations per recipe",
      "Community comments and social sharing",
      "SEO-optimized editorial content strategy",
    ],
    featured: true,
  },
  {
    slug: "babcock-ranch-directory",
    title: "Babcock Ranch Directory",
    category: "Web / Community Platform",
    description:
      "Full-stack community directory for America's first solar-powered town. Business listings, event management, and resident engagement — built from the ground up.",
    fullDescription:
      "We designed and built the Babcock Ranch Directory from the ground up — a community platform connecting residents, newcomers, and visitors with verified local businesses and events. The platform features hand-verified business listings with category search, a community events calendar, sponsored placement for local businesses, and a dual-audience design serving both residents and business owners. Built with responsive grid layouts, newsletter integration, business owner dashboards, and progressive web app capabilities.",
    image: "/images/portfolio/babcock-ranch.png",
    liveUrl: "https://www.babcockranchdirectory.com",
    highlights: [
      "40+ verified businesses at launch",
      "Integrated events calendar",
      "Business owner self-service dashboard",
      "Solar-powered town branding",
    ],
    featured: true,
  },
  {
    slug: "edison-sailing-center",
    title: "Edison Sailing Center",
    category: "Web / Nonprofit",
    description:
      "Complete web presence for a US Sailing-accredited youth program. Program marketing, donor conversion funnels, and event registration — designed to grow enrollment and giving.",
    fullDescription:
      "Complete web presence for Edison Sailing Center, a US Sailing-accredited nonprofit serving youth ages 5-18 on Fort Myers' Caloosahatchee River since 1983. The site tells a brand story through three pillars — Respect, Responsibility, Resilience — while driving two critical conversions: program registration and donor cultivation. Includes program cards for five offerings, video testimonials, event registration for their River Romp Regatta, and animated impact counters. Nautical-themed design with navy, ocean blue, and gold palette.",
    image: "/images/portfolio/edison-sailing.png",
    liveUrl: "https://www.edisonsailingcenter.org",
    highlights: [
      "Dual conversion paths (enrollment + donations)",
      "Embedded video + parent testimonials",
      "Regatta event registration",
      "7 accreditation badges displayed",
    ],
    featured: true,
  },
  {
    slug: "victory-kdd-cleaning",
    title: "Victory KDD Cleaning",
    category: "Web / Small Business",
    description:
      "Professional web presence for a local cleaning service — designed to convert visitors into booked appointments with clear CTAs and trust signals.",
    fullDescription:
      "A clean, modern website built for Victory KDD Cleaning to establish their digital presence and drive customer acquisition. The site focuses on clear service descriptions, trust-building elements, and streamlined contact flows that make it easy for potential clients to book services.",
    image: "/images/portfolio/victory-kdd.png",
    liveUrl: "https://victorykddcleaning.com/",
    highlights: [
      "Mobile-first responsive design",
      "Service booking integration",
      "Local SEO optimization",
      "Trust signals and social proof",
    ],
    marketing: {
      title: "Marketing Campaign",
      description:
        "Integrated digital marketing support including paid advertising and local SEO strategy.",
      details: [
        "Paid ad campaign setup and management",
        "Local SEO optimization for SWFL market",
        "Google Business Profile optimization",
      ],
    },
    featured: true,
  },
  {
    slug: "3d-visualization-genai",
    title: "3D Visualization & Generative AI",
    category: "AI / 3D",
    description:
      "Cutting-edge 3D visualizations enhanced with generative AI techniques, pushing the boundaries of digital art and commercial graphics.",
    image: "/images/portfolio/3dviz-genai.png",
    featured: true,
  },
  {
    slug: "digital-personas",
    title: "Digital Personas",
    category: "AI / Creative",
    description:
      "AI-driven digital persona creation for brands and influencers — photorealistic characters that bring campaigns to life.",
    image: "/images/portfolio/digital-personas.png",
  },
  {
    slug: "knowtifyme-platform",
    title: "Knowtify.me Platform",
    category: "Web / UX",
    description:
      "Full platform design and UX for Knowtify.me — a notification and awareness platform with mapping, analytics, and user engagement features.",
    image: "/images/portfolio/knowtifyme.png",
    featured: true,
  },
  {
    slug: "knowtifyme-ux",
    title: "Knowtify.me UX Design",
    category: "UX / UI",
    description:
      "Detailed user experience design work for the Knowtify.me platform, including wireframes, flows, and interactive prototypes.",
    image: "/images/portfolio/knowtifyme-ux.png",
  },
  {
    slug: "apple-conference-2019",
    title: "Apple Conference 2019",
    category: "Event / Video",
    description:
      "Visual production and creative direction for event coverage at Apple Conference 2019.",
    image: "/images/portfolio/apple-conf.jpg",
  },
  {
    slug: "digital-influencer-campaign",
    title: "Digital Influencer Campaign",
    category: "AI / Marketing",
    description:
      "AI-generated digital influencer content for modern marketing campaigns — blending technology with authentic brand storytelling.",
    image: "/images/portfolio/digital-influencer.png",
  },
  {
    slug: "comfyui-workflows",
    title: "ComfyUI Workflows",
    category: "AI / Tooling",
    description:
      "Advanced ComfyUI pipeline development for generative art production — custom nodes, workflows, and batch processing systems.",
    image: "/images/portfolio/comfyui.png",
  },
  {
    slug: "metaverse-experience",
    title: "Metaverse Experience",
    category: "3D / Immersive",
    description:
      "Immersive metaverse environment design — virtual spaces that combine architectural thinking with interactive digital experiences.",
    image: "/images/portfolio/metaverse.jpeg",
  },
  {
    slug: "freal-brand",
    title: "Freal Brand Project",
    category: "Branding / Web",
    description:
      "Complete brand identity and web presence for Freal — from visual direction to responsive web implementation.",
    image: "/images/freal/cover.webp",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
