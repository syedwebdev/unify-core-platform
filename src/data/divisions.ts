export type Division = {
  code: string;
  name: string;
  full: string;
  tagline: string;
  what?: string;
  focus?: string[];
  features?: string[];
  why?: string[];
  products?: string[];
  businessModel?: string[];
  pricing?: string[];
  revenue?: string[];
  challenges?: string[];
  upgrades?: string[];
  expansion?: string[];
  roadmap?: string[];
};

export const parent = {
  name: "SYED GLOBAL TECHNOLOGIES (SGT)",
  role: "Parent / Holding Company",
  rolePoints: [
    "Owns, governs, funds, and scales all SYED-branded MNCs",
    "Defines vision, standards, compliance, IP ownership, and global expansion",
  ],
  coreFunctions: [
    "Strategy & Governance",
    "Capital Allocation",
    "Brand & Legal Control",
    "Global Partnerships",
    "Talent & Leadership Pool",
  ],
  bigPicture: [
    "SGT = Tech Empire",
    "Each SYED MNC = Specialized Global Vertical",
    "Together = End-to-end Digital World Coverage",
  ],
};

export const divisions: Division[] = [
  {
    code: "4GL",
    name: "SYED (4GL)",
    full: "Fourth Generation Programming Language MNC",
    tagline: "Known for its 4th generational programming language.",
    what: "A specialized MNC focused on 4GL-based platforms that allow high-level, low-code / no-code enterprise software development.",
    features: [
      "Human-readable syntax",
      "Rapid business logic creation",
      "Built-in database interaction",
      "Auto code generation",
      "Cross-platform execution",
    ],
    why: [
      "10x faster than traditional coding",
      "Ideal for enterprise & government systems",
      "Lower maintenance cost",
      "Business-user friendly",
    ],
    products: [
      "Proprietary 4GL language",
      "Enterprise app builders",
      "Legacy system modernization",
      "Training & certifications",
    ],
    businessModel: ["Licensing (annual / perpetual)", "Enterprise subscriptions", "Consulting & migration services"],
    pricing: ["Starter: $999/year", "Enterprise: Custom (₹10L+ / year)", "Govt & Large Org: Contract-based"],
    revenue: ["Banks, Govt bodies, Large Enterprises", "ERP-heavy organizations"],
    challenges: ["Market awareness", "Competing with modern languages hype"],
    upgrades: ["AI-assisted 4GL compiler", "Cloud-native 4GL runtime"],
    expansion: ["Government digitization projects", "Emerging markets (Asia, Africa)"],
    roadmap: ["Year 1: Platform stability", "Year 2: AI integration", "Year 3: Global standardization"],
  },
  {
    code: "RAD",
    name: "SYED (RAD)",
    full: "Rapid Application Development MNC",
    tagline: "Known for the best Rapid Application Development in the world.",
    what: "World-class RAD platforms to build apps in days instead of months.",
    features: ["Drag-and-drop UI", "Prebuilt business modules", "Instant deployment", "API-first architecture"],
    why: ["Fastest time-to-market", "Perfect for startups & enterprises", "Minimal coding"],
    products: ["RAD platform", "Mobile & web app builders", "Startup MVP services"],
    businessModel: ["SaaS subscriptions", "Platform usage-based pricing"],
    pricing: ["Basic: $49/month", "Pro: $199/month", "Enterprise: Custom"],
    revenue: ["Startups", "SMEs", "Internal enterprise teams"],
    challenges: ["Feature bloat", "Platform scalability"],
    upgrades: ["AI-generated apps", "Industry-specific RAD kits"],
    expansion: ["Startup ecosystems", "Incubators & accelerators"],
    roadmap: ["Year 1: Platform adoption", "Year 2: AI builder", "Year 3: Global partnerships"],
  },
  {
    code: "SAD",
    name: "SYED (SAD)",
    full: "Software Application Development MNC",
    tagline: "Known for its software application development.",
    what: "Custom end-to-end software development company.",
    features: ["Full SDLC", "Agile & DevOps", "Cross-platform apps", "Enterprise-grade security"],
    why: ["Custom-built solutions", "Industry experts", "Long-term support"],
    products: ["Custom software", "SaaS development", "API & backend systems"],
    businessModel: ["Project-based", "Retainer contracts"],
    pricing: ["Project-based (₹5L – ₹5Cr)"],
    revenue: ["Corporates", "Product companies"],
    challenges: ["Talent retention", "Scope creep"],
    upgrades: ["AI-assisted development", "Code automation"],
    expansion: ["Vertical-specific teams"],
    roadmap: ["Scale teams → Global delivery"],
  },
  {
    code: "AUTO/RPA",
    name: "SYED (AUTO/RPA)",
    full: "Automation & RPA MNC",
    tagline: "Known for its automations & robotic process automations.",
    what: "Enterprise automation using bots + workflows + AI.",
    features: ["No-code automation", "RPA bots", "Process orchestration", "AI decision engines"],
    why: ["Reduce cost by 60%", "Eliminate human errors", "24/7 operations"],
    products: ["RPA bots", "Automation consulting", "Workflow engines"],
    businessModel: ["Bot licensing", "Enterprise subscriptions"],
    pricing: ["Per-bot pricing", "Enterprise contracts"],
    revenue: ["Banks", "Insurance", "BPOs"],
    challenges: ["Process complexity"],
    upgrades: ["Cognitive RPA", "Self-healing bots"],
    expansion: ["Finance & Healthcare sectors"],
    roadmap: ["Hyperautomation leadership"],
  },
  {
    code: "DBMS",
    name: "SYED (DBMS)",
    full: "Database Management Services MNC",
    tagline: "Known for its database management service.",
    what: "Complete database lifecycle management company.",
    features: ["Multi-DB support", "High availability", "Data security", "Performance tuning"],
    why: ["Zero data loss focus", "Enterprise reliability"],
    products: ["DB hosting", "DB optimization", "Migration services"],
    businessModel: ["Managed services", "Subscription"],
    pricing: ["Monthly plans", "Enterprise SLAs"],
    revenue: ["SaaS companies", "Enterprises"],
    challenges: ["Data compliance"],
    upgrades: ["AI-driven DB tuning"],
    expansion: ["Cloud-native DB services"],
  },
  {
    code: "DMT",
    name: "SYED (DMT)",
    full: "Digital Marketing Technologies MNC",
    tagline: "Known for its digital marketing technologies.",
    what: "Technology-first digital marketing automation & analytics firm.",
    features: ["AI SEO", "Campaign automation", "Analytics dashboards"],
    why: ["ROI-driven marketing", "Data-backed decisions"],
    products: ["Marketing platforms", "Campaign tools"],
    businessModel: ["SaaS + Services"],
    pricing: ["Monthly plans"],
    expansion: ["Global brands"],
  },
  {
    code: "ONE",
    name: "SYED (ONE)",
    full: "ERP + CRM MNC",
    tagline: "Known for its ERP — Enterprise Resource Planner and CRM — Customer Relationship Management.",
    what: "Unified enterprise operating system.",
    features: ["ERP + CRM + HR + Finance", "Modular", "Cloud-native"],
    why: ["One system, zero chaos"],
    products: ["Enterprise ERP", "Industry-specific CRM"],
    revenue: ["Enterprise licensing"],
    expansion: ["SMEs → Large Enterprises"],
  },
  {
    code: "WEB-DEV",
    name: "SYED (WEB-DEV)",
    full: "Web Design & Development MNC",
    tagline: "Known for its web design & development.",
    focus: ["High-performance, scalable websites & platforms"],
    products: ["UI/UX", "Frontend & backend", "E-commerce"],
  },
  {
    code: "AI-ML-DL",
    name: "SYED (AI-ML-DL)",
    full: "Core AI Research & Solutions MNC",
    tagline: "Known for its Artificial Intelligence, Machine Learning and Deep Learning.",
    focus: ["Predictive AI", "Generative AI", "Enterprise ML"],
  },
  {
    code: "CS",
    name: "SYED (CS)",
    full: "Cloud Services MNC",
    tagline: "Known for its cloud services.",
    focus: ["Cloud migration", "Cloud-native apps", "Cost optimization"],
  },
  {
    code: "CSS",
    name: "SYED (CSS)",
    full: "Cyber Security Services MNC",
    tagline: "Known for its cybersecurity services.",
    focus: ["Zero Trust", "SOC", "Threat intelligence"],
  },
  {
    code: "DS",
    name: "SYED (DS)",
    full: "Data Services MNC",
    tagline: "Known for its data services.",
    focus: ["Big Data", "Analytics", "Data Engineering"],
  },
  {
    code: "ITIS",
    name: "SYED (ITIS)",
    full: "IT Infrastructure Services MNC",
    tagline: "Information Technology Infrastructure Services.",
    focus: ["Networks", "Servers", "IT ops"],
  },
  {
    code: "AIIS",
    name: "SYED (AIIS)",
    full: "AI Infrastructure Services MNC",
    tagline: "Artificial Intelligence Infrastructure Service.",
    focus: ["GPU clusters", "AI cloud infra"],
  },
  {
    code: "NS",
    name: "SYED (NS)",
    full: "Networking Services MNC",
    tagline: "Networking Services.",
    focus: ["Enterprise networks", "SD-WAN"],
  },
  {
    code: "WAPL",
    name: "SYED (WAPL)",
    full: "Web Application Programming Language MNC",
    tagline: "Web Application Programming Language.",
    focus: ["Proprietary web language", "Secure, fast apps"],
  },
  {
    code: "AIAB",
    name: "SYED (AIAB)",
    full: "AI App Builder MNC",
    tagline: "Artificial intelligence app builder.",
    focus: ["Build AI apps without coding", "Drag-drop AI workflows"],
  },
];

export const nextSteps = [
  "Turn this into an investor pitch deck",
  "Create official company profiles (PDF)",
  "Design global expansion master plan",
  "Build realistic revenue projections",
];
