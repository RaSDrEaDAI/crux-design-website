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
  // --- Motion Design & Broadcast Work ---
  {
    slug: "calvin-klein-eternity",
    title: "Calvin Klein — Eternity",
    category: "Motion / Broadcast",
    description:
      "Elegant motion design for Calvin Klein's Eternity fragrance campaign — cinematic visuals and refined typography embodying the brand's timeless aesthetic.",
    image: "/images/portfolio/work-examples/calvin-klein.jpg",
    highlights: [
      "Fragrance campaign motion graphics",
      "Cinematic visual direction",
      "Brand-aligned typography and pacing",
    ],
  },
  {
    slug: "motown-records",
    title: "Motown Records",
    category: "Motion / Broadcast",
    description:
      "Broadcast motion design for Motown Records — capturing the soul and energy of one of music's most iconic labels through dynamic visuals.",
    image: "/images/portfolio/work-examples/motown.jpg",
    gallery: ["/images/portfolio/work-examples/motown-still.png"],
    highlights: [
      "30-second broadcast spot",
      "Iconic brand identity integration",
      "Dynamic motion typography",
    ],
  },
  {
    slug: "vh1-broadcast",
    title: "VH1 Network Branding",
    category: "Motion / Broadcast",
    description:
      "On-air network branding and motion design for VH1 — bold graphics and transitions that defined the channel's visual identity.",
    image: "/images/portfolio/work-examples/vh1.jpg",
    highlights: [
      "On-air network identity system",
      "Broadcast motion design",
      "Multi-format delivery",
    ],
  },
  {
    slug: "national-geographic-anatomy",
    title: "National Geographic — Anatomy",
    category: "Motion / Broadcast",
    description:
      "Title sequence and motion graphics for National Geographic's anatomy series — blending scientific precision with cinematic storytelling.",
    image: "/images/portfolio/work-examples/natgeo.jpg",
    highlights: [
      "Title sequence design",
      "Scientific visualization",
      "Broadcast delivery pipeline",
    ],
  },
  {
    slug: "fidelity-investments",
    title: "Fidelity Investments",
    category: "Motion / Corporate",
    description:
      "Motion design for Fidelity Investments across multiple campaigns — Big Data, Personalized Medicine, and Synthetic Biology — translating complex financial and scientific concepts into compelling visuals.",
    image: "/images/portfolio/work-examples/fidelity.jpg",
    highlights: [
      "Multi-campaign motion design",
      "Complex data visualization",
      "Corporate brand compliance",
      "Big Data, Biotech, and Finance themes",
    ],
  },
  {
    slug: "nasdaq-market-open",
    title: "NASDAQ",
    category: "Motion / Corporate",
    description:
      "Motion design for NASDAQ — dynamic visuals capturing the energy and precision of global financial markets.",
    image: "/images/portfolio/work-examples/nasdaq.jpg",
    highlights: [
      "Financial brand motion graphics",
      "Data-driven visual design",
      "Corporate broadcast delivery",
    ],
  },
  {
    slug: "td-ameritrade",
    title: "TD Ameritrade",
    category: "Motion / Corporate",
    description:
      "Suite of motion design projects for TD Ameritrade including GridLite, iRebal, and VEO platforms — communicating financial technology through engaging animation.",
    image: "/images/portfolio/work-examples/td-ameritrade.jpg",
    highlights: [
      "Multi-product motion campaigns",
      "Financial technology visualization",
      "Platform launch animations",
    ],
  },
  {
    slug: "jp-morgan-advisor",
    title: "JP Morgan",
    category: "Motion / Corporate",
    description:
      "Motion design for JP Morgan's advisor application — bringing financial planning tools to life through polished animation and clear information architecture.",
    image: "/images/portfolio/work-examples/jp-morgan.jpg",
    highlights: [
      "Financial app visualization",
      "Corporate brand standards",
      "Advisor platform animation",
    ],
  },
  {
    slug: "santander-bank",
    title: "Santander",
    category: "Motion / Corporate",
    description:
      "Motion graphics for Santander — delivering the bank's brand message through dynamic, polished broadcast animation.",
    image: "/images/portfolio/work-examples/santander.jpg",
    highlights: [
      "Banking brand motion design",
      "Broadcast-ready delivery",
      "International brand compliance",
    ],
  },
  {
    slug: "intel-5g-economics",
    title: "Intel — 5G: The Economics",
    category: "Motion / Tech",
    description:
      "Explanatory motion design for Intel's 5G economics initiative — distilling the business case for next-generation wireless into visually compelling storytelling.",
    image: "/images/portfolio/work-examples/intel-5g.png",
    highlights: [
      "Tech explainer motion design",
      "Data visualization and infographics",
      "Intel brand compliance",
    ],
  },
  {
    slug: "cctv-network",
    title: "CCTV (China Central Television)",
    category: "Motion / Broadcast",
    description:
      "Network identity and broadcast design for CCTV — multiple on-air promo spots including Brick, Diamond, Jade, and Key concepts.",
    image: "/images/portfolio/work-examples/cctv.jpg",
    highlights: [
      "International broadcast network identity",
      "Multiple concept directions",
      "On-air promo design",
    ],
  },
  {
    slug: "conde-nast-traveler",
    title: "Condé Nast Traveler",
    category: "Motion / Editorial",
    description:
      "Motion design for Condé Nast Traveler — bringing the spirit of luxury travel to screen through elegant animation and editorial design sensibility.",
    image: "/images/portfolio/work-examples/conde-nast-traveler.jpg",
    highlights: [
      "Editorial brand motion design",
      "Luxury visual language",
      "Title sequence design",
    ],
  },
  {
    slug: "martha-stewart",
    title: "Martha Stewart Living",
    category: "Motion / Broadcast",
    description:
      "Motion graphics for Martha Stewart Living Omnimedia — refined animation that matches the brand's commitment to quality and craftsmanship.",
    image: "/images/portfolio/work-examples/martha-stewart.jpg",
    highlights: [
      "Lifestyle brand motion design",
      "Broadcast-ready graphics",
      "Brand-aligned visual storytelling",
    ],
  },
  {
    slug: "art21-pbs",
    title: "Art21 — PBS",
    category: "Motion / Broadcast",
    description:
      "Title sequence and on-air graphics for Art21 on PBS — the acclaimed series exploring contemporary art and artists through Season 7 and beyond.",
    image: "/images/portfolio/work-examples/art21.png",
    highlights: [
      "PBS series title design",
      "Contemporary art visual language",
      "Multi-season graphics package",
    ],
  },
  {
    slug: "bio-channel-series",
    title: "Bio Channel — Series Open",
    category: "Motion / Broadcast",
    description:
      "Series open and network identity design for the Bio Channel — dramatic motion graphics for biographical storytelling.",
    image: "/images/portfolio/work-examples/bio-series.jpg",
    highlights: [
      "Series title sequence",
      "Network identity design",
      "Dramatic motion graphics",
    ],
  },
  {
    slug: "most-evil-investigation-discovery",
    title: "Most Evil — Investigation Discovery",
    category: "Motion / Broadcast",
    description:
      "Title sequence and graphics for 'Most Evil' on Investigation Discovery — dark, compelling motion design for true crime storytelling.",
    image: "/images/portfolio/work-examples/most-evil.jpg",
    highlights: [
      "True crime title design",
      "Dramatic visual atmosphere",
      "Investigation Discovery network",
    ],
  },
  {
    slug: "double-dare-nickelodeon",
    title: "Double Dare — Nickelodeon",
    category: "Motion / Broadcast",
    description:
      "Motion graphics for Nickelodeon's Double Dare — fun, energetic broadcast design for one of the network's most iconic game shows.",
    image: "/images/portfolio/work-examples/double-dare.jpg",
    highlights: [
      "Game show graphics package",
      "Nickelodeon brand compliance",
      "Energetic, youth-oriented design",
    ],
  },
  {
    slug: "usa-network",
    title: "USA Network",
    category: "Motion / Broadcast",
    description:
      "On-air motion design and montage work for USA Network — contributing to the visual identity of a major cable television brand.",
    image: "/images/portfolio/work-examples/usa-network.jpg",
    highlights: [
      "Cable network brand design",
      "On-air montage work",
      "Broadcast motion graphics",
    ],
  },
  // --- Film & Documentary ---
  {
    slug: "django-unchained",
    title: "Django Unchained — Title Design",
    category: "Film / Title Design",
    description:
      "Title design and motion graphics for the Django Unchained project — cinematic typography and visual treatments for Tarantino's vision.",
    image: "/images/portfolio/work-examples/django.jpg",
    highlights: [
      "Film title design",
      "Cinematic typography",
      "Character-driven visual treatments",
    ],
  },
  {
    slug: "dreams-petrified-head",
    title: "Dreams from a Petrified Head",
    category: "Film / Documentary",
    description:
      "Title design and motion graphics for the independent documentary — atmospheric visuals that set the tone for the film's exploration.",
    image: "/images/portfolio/work-examples/petrified-head.jpg",
    highlights: [
      "Documentary title design",
      "Independent film production",
      "Atmospheric motion graphics",
    ],
  },
  {
    slug: "lotf-trailer",
    title: "Lord of the Flies — Trailer",
    category: "Film / Title Design",
    description:
      "Trailer design and motion graphics for a Lord of the Flies adaptation — cinematic visuals conveying the descent from civilization to chaos.",
    image: "/images/portfolio/work-examples/lotf-trailer.jpg",
    highlights: [
      "Film trailer design",
      "Cinematic motion graphics",
      "Dramatic visual storytelling",
    ],
  },
  {
    slug: "growing-payne",
    title: "Growing Payne",
    category: "Film / Documentary",
    description:
      "Motion design and title sequence for Growing Payne — a documentary production with compelling visual storytelling.",
    image: "/images/portfolio/work-examples/growing-payne.jpg",
    highlights: [
      "Documentary title sequence",
      "Narrative motion design",
      "Full production delivery",
    ],
  },
  {
    slug: "obama-the-consequence",
    title: "Obama: The Consequence",
    category: "Film / Documentary",
    description:
      "Motion graphics for the political documentary 'Obama: The Consequence' — dynamic visuals for political storytelling in HD broadcast.",
    image: "/images/portfolio/work-examples/obama-consequence.jpg",
    highlights: [
      "Political documentary graphics",
      "HD broadcast delivery",
      "Dynamic motion typography",
    ],
  },
  {
    slug: "anhedonia-film",
    title: "Anhedonia",
    category: "Film / Short",
    description:
      "Visual design and motion graphics for the short film Anhedonia — exploring emotional numbness through atmospheric, moody visuals.",
    image: "/images/portfolio/work-examples/anhedonia.jpg",
    highlights: [
      "Short film visual design",
      "Atmospheric motion graphics",
      "Festival-ready production",
    ],
  },
  {
    slug: "breaking-point-id",
    title: "Breaking Point — Investigation Discovery",
    category: "Motion / Broadcast",
    description:
      "Title sequence and broadcast design for Breaking Point on Investigation Discovery — logo reveals, endpages, and tune-in graphics.",
    image: "/images/portfolio/work-examples/escape.jpg",
    highlights: [
      "Full broadcast graphics package",
      "Logo reveal animation",
      "Tune-in and endpage design",
    ],
  },
  // --- Brand & Corporate ---
  {
    slug: "best-made-company",
    title: "Best Made Company",
    category: "Motion / Brand",
    description:
      "Brand film and motion design for Best Made Company — capturing the spirit of craftsmanship and adventure that defines the brand.",
    image: "/images/portfolio/work-examples/best-made-company.jpg",
    highlights: [
      "Brand film production",
      "Lifestyle brand storytelling",
      "Motion design and editing",
    ],
  },
  {
    slug: "anna-sui-fashion",
    title: "Anna Sui",
    category: "Motion / Fashion",
    description:
      "Motion design for fashion label Anna Sui — bringing runway energy and brand personality to screen through dynamic, stylish animation.",
    image: "/images/portfolio/work-examples/anna-sui.jpg",
    highlights: [
      "Fashion brand motion design",
      "Runway-inspired visuals",
      "Brand identity animation",
    ],
  },
  {
    slug: "target-3d-environments",
    title: "Target — 3D Environments",
    category: "3D / Retail",
    description:
      "3D environment design for Target — immersive virtual worlds including Toon Town and Tron City concepts, plus product visualization.",
    image: "/images/portfolio/work-examples/target.png",
    highlights: [
      "3D environment design",
      "Retail brand visualization",
      "Multiple concept directions",
      "Product and set design",
    ],
  },
  {
    slug: "johnson-and-johnson",
    title: "Johnson & Johnson",
    category: "Motion / Corporate",
    description:
      "Training video production and motion design for Johnson & Johnson — clear, engaging visuals for corporate communications.",
    image: "/images/portfolio/work-examples/johnson-and-johnson.jpg",
    highlights: [
      "Corporate training video",
      "Healthcare brand compliance",
      "Clear information design",
    ],
  },
  {
    slug: "piramal-group",
    title: "Piramal Group",
    category: "Motion / Corporate",
    description:
      "Motion design for Piramal Group — polished corporate visuals for one of India's leading diversified conglomerates.",
    image: "/images/portfolio/work-examples/piramal.jpg",
    highlights: [
      "International corporate motion design",
      "Diversified brand storytelling",
      "Professional broadcast delivery",
    ],
  },
  {
    slug: "yammer-microsoft",
    title: "Yammer (Microsoft)",
    category: "Motion / Tech",
    description:
      "Motion design for Yammer's enterprise communication platform — showcasing the tool's collaborative features through clean, tech-forward animation.",
    image: "/images/portfolio/work-examples/yammer.jpg",
    highlights: [
      "Enterprise SaaS motion design",
      "Microsoft brand ecosystem",
      "Tech product visualization",
    ],
  },
  {
    slug: "datarobot-promo",
    title: "DataRobot",
    category: "Motion / Tech",
    description:
      "Promotional video and motion design for DataRobot's self-service AI platform — making machine learning accessible through clear visual communication.",
    image: "/images/portfolio/work-examples/datarobot.png",
    highlights: [
      "AI/ML product promo",
      "Self-service platform visualization",
      "Tech startup brand storytelling",
    ],
  },
  {
    slug: "downtown-brooklyn-partnership",
    title: "Downtown Brooklyn Partnership",
    category: "Motion / Civic",
    description:
      "Documentary-style motion design for the Downtown Brooklyn Partnership — telling the story of Brooklyn's transformation and community investment.",
    image: "/images/portfolio/work-examples/downtown-brooklyn.png",
    highlights: [
      "Civic organization storytelling",
      "Documentary motion design",
      "Community-focused narrative",
    ],
  },
  {
    slug: "make-it-in-brooklyn",
    title: "Make It in Brooklyn",
    category: "Motion / Civic",
    description:
      "Motion design for the 'Make It in Brooklyn' initiative — celebrating makers, entrepreneurs, and the creative spirit of Brooklyn's communities.",
    image: "/images/portfolio/work-examples/make-it-in-brooklyn.jpg",
    highlights: [
      "Community initiative branding",
      "Maker economy storytelling",
      "Brooklyn-focused creative direction",
    ],
  },
  // --- Music & Entertainment ---
  {
    slug: "john-mayer-fuse-tv",
    title: "John Mayer — Fuse TV",
    category: "Motion / Music",
    description:
      "Motion design for John Mayer's Fuse TV appearance — dynamic visuals that complement the artist's musical energy.",
    image: "/images/portfolio/work-examples/john-mayer-fuse.jpg",
    highlights: [
      "Music artist motion design",
      "Fuse TV broadcast",
      "Live performance graphics",
    ],
  },
  {
    slug: "music-city-stop-motion",
    title: "Music City — Stop Motion",
    category: "Motion / Music",
    description:
      "Stop motion animation for Music City — a tactile, handcrafted approach to music-themed visual storytelling.",
    image: "/images/portfolio/work-examples/music-city.jpg",
    highlights: [
      "Stop motion animation",
      "Handcrafted visual approach",
      "Music-themed storytelling",
    ],
  },
  {
    slug: "jazz-conservancy",
    title: "Jazz Conservancy",
    category: "Motion / Music",
    description:
      "Motion design for the Jazz Conservancy — visual storytelling that honors the heritage and evolution of jazz music.",
    image: "/images/portfolio/work-examples/jazz-conservancy.jpg",
    highlights: [
      "Nonprofit music organization",
      "Cultural preservation storytelling",
      "Elegant motion typography",
    ],
  },
  // --- Education & Nonprofit ---
  {
    slug: "eureka-math",
    title: "Eureka Math",
    category: "Motion / Education",
    description:
      "Animated educational content for Eureka Math — making mathematics engaging and accessible through dynamic visual explanations.",
    image: "/images/portfolio/work-examples/eureka-math.png",
    highlights: [
      "Educational content animation",
      "K-12 curriculum support",
      "Clear information design",
    ],
  },
  {
    slug: "brooklyn-public-library",
    title: "Brooklyn Public Library — STEM",
    category: "Motion / Education",
    description:
      "Multi-scene animation for Brooklyn Public Library's STEM education initiative — covering Industrial Design, Robotics, Engineering, Math, and Bionics.",
    image: "/images/portfolio/work-examples/brooklyn-public-library.jpg",
    highlights: [
      "STEM education animation",
      "Multi-scene production",
      "Public institution collaboration",
      "6 distinct subject areas",
    ],
  },
  {
    slug: "dadcamp-bumpers",
    title: "DadCamp",
    category: "Motion / Entertainment",
    description:
      "Broadcast bumpers for DadCamp — fun, lively motion design that captures the spirit of fatherhood and family adventure.",
    image: "/images/portfolio/work-examples/dadcamp.jpg",
    highlights: [
      "Broadcast bumper design",
      "Family entertainment branding",
      "HD delivery",
    ],
  },
  // --- Other Notable Work ---
  {
    slug: "financial-times",
    title: "Financial Times",
    category: "Motion / Editorial",
    description:
      "Motion design for the Financial Times — bringing the authority and elegance of the world's leading business newspaper to motion graphics.",
    image: "/images/portfolio/work-examples/financial-times.jpg",
    highlights: [
      "Global media brand",
      "Editorial motion design",
      "Financial storytelling",
    ],
  },
  {
    slug: "ageloc-nu-skin",
    title: "ageLOC (Nu Skin)",
    category: "Motion / Health",
    description:
      "Motion design for Nu Skin's ageLOC anti-aging product line — communicating science-backed beauty through polished, aspirational visuals.",
    image: "/images/portfolio/work-examples/ageloc.jpg",
    highlights: [
      "Health & beauty product visualization",
      "International brand (Korean market)",
      "Science-forward storytelling",
    ],
  },
  {
    slug: "good-penny-brazil",
    title: "Good Penny",
    category: "Motion / Brand",
    description:
      "Brand motion design for Good Penny including international Brazil campaign — crafting visual identity across borders.",
    image: "/images/portfolio/work-examples/good-penny.jpg",
    highlights: [
      "International brand campaign",
      "Brazil market adaptation",
      "Cross-cultural visual design",
    ],
  },
  {
    slug: "bowerbag-brand",
    title: "Bowerbag",
    category: "Motion / Brand",
    description:
      "Brand video production for Bowerbag — motion design that showcases the product's craftsmanship and lifestyle positioning.",
    image: "/images/portfolio/work-examples/bowerbag.jpg",
    highlights: [
      "Product brand film",
      "Lifestyle brand storytelling",
      "Motion design and editing",
    ],
  },
  {
    slug: "gilt-groupe",
    title: "Gilt Groupe",
    category: "Motion / Fashion",
    description:
      "Motion design for Gilt Groupe — luxurious visual treatments featuring cloth, ribbon, and strand simulations for the flash-sale fashion brand.",
    image: "/images/portfolio/work-examples/gilt.jpg",
    highlights: [
      "Fashion e-commerce brand",
      "Fabric and material simulations",
      "Luxury visual language",
    ],
  },
  {
    slug: "bio-network-ids",
    title: "Bio Network — On-Air IDs",
    category: "Motion / Broadcast",
    description:
      "On-air network ID design for the Bio Channel — short-form identity animations that define the network's visual presence.",
    image: "/images/portfolio/work-examples/bio-network.jpg",
    highlights: [
      "Network ID design",
      "Short-form broadcast animation",
      "Brand identity system",
    ],
  },
  {
    slug: "pharmacy-films",
    title: "Pharmacy Films",
    category: "Motion / Brand",
    description:
      "Motion branding for Pharmacy Films production company — visual identity work that establishes the studio's creative positioning.",
    image: "/images/portfolio/work-examples/pharmacy-films.jpg",
    highlights: [
      "Production company branding",
      "Studio identity motion design",
      "Creative industry positioning",
    ],
  },
  {
    slug: "zombie-farm",
    title: "Zombie Farm",
    category: "Motion / Entertainment",
    description:
      "Motion design for Zombie Farm — playful, energetic animation for a gaming and entertainment property.",
    image: "/images/portfolio/work-examples/zombie-farm.jpg",
    highlights: [
      "Gaming/entertainment branding",
      "Playful motion design",
      "Character-driven animation",
    ],
  },
  {
    slug: "robo-man",
    title: "Robo Man",
    category: "Motion / Entertainment",
    description:
      "Motion design and visual effects for Robo Man — combining 3D elements with dynamic motion graphics for a sci-fi themed production.",
    image: "/images/portfolio/work-examples/robo-man.jpg",
    highlights: [
      "Sci-fi themed motion design",
      "3D integration",
      "Visual effects production",
    ],
  },
  {
    slug: "lifes-a-trip",
    title: "Life's a Trip",
    category: "Motion / Entertainment",
    description:
      "Title sequence design for Life's a Trip — capturing the adventure and spontaneity of travel through dynamic opening graphics.",
    image: "/images/portfolio/work-examples/lifes-a-trip.jpg",
    highlights: [
      "Title sequence design",
      "Travel-themed visuals",
      "Broadcast opening graphics",
    ],
  },
  {
    slug: "outrageous-acts-science",
    title: "Outrageous Acts of Science",
    category: "Motion / Broadcast",
    description:
      "Motion graphics for Discovery's Outrageous Acts of Science — energetic visuals that match the show's sense of wonder and spectacle.",
    image: "/images/portfolio/work-examples/outrageous-acts.jpg",
    highlights: [
      "Discovery Channel series",
      "Science entertainment graphics",
      "Broadcast graphics package",
    ],
  },
  {
    slug: "escape-tv",
    title: "Escape",
    category: "Motion / Broadcast",
    description:
      "Motion design for the Escape television series — suspenseful, atmospheric visuals for true escape-themed storytelling.",
    image: "/images/portfolio/work-examples/escape.jpg",
    highlights: [
      "Television series graphics",
      "Suspense-driven design",
      "Atmospheric motion design",
    ],
  },
  {
    slug: "raw-hd",
    title: "RAW",
    category: "Motion / Entertainment",
    description:
      "HD motion design for RAW — bold, unfiltered visual treatments with raw energy and impact.",
    image: "/images/portfolio/work-examples/raw.jpg",
    highlights: [
      "HD broadcast motion design",
      "Bold visual treatment",
      "High-energy animation",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
