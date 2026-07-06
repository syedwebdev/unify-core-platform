import { createFileRoute } from "@tanstack/react-router";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { useState, useEffect, useMemo, useRef, lazy, Suspense } from "react";
import { useInView } from "framer-motion";
import { NeuralBackground } from "@/components/hero/NeuralBackground";
import { MagneticButton, TiltCard, CountUp } from "@/components/motion/primitives";
import { EcosystemMap } from "@/components/ecosystem/EcosystemMap";
import { NeuralSection } from "@/components/ai/NeuralSection";
import { motion } from "framer-motion";

const HeroScene = lazy(() => import("@/components/hero/HeroScene"));
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from "@/components/ui/dialog";
import {
  ArrowRight, ShieldCheck, Sparkles, Rocket, Globe2, Cpu, Cloud, Code2, Layers,
  Zap, Database, Lock, LineChart, Bot, Workflow, Boxes, PlugZap, Smartphone,
  HeartPulse, GraduationCap, Store, UtensilsCrossed, DoorOpen, Building2,
  Check, Github, Twitter, Linkedin, Youtube,
  Server, BrainCircuit, Repeat, Briefcase, BookOpen, Banknote,
  HardDrive, Network, Radar, FlaskConical, Handshake,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <LogoMarquee />
      <Overview />
      <EcosystemSection />
      <Departments />
      <SySoftShowcase />
      <WhyUs />
      <AIPlatform />
      <NeuralSection />
      <TechStack />
      <Industries />
      <Stats />
      <Testimonials />
      <Security />
      <Integrations />
      <Developers />
      <Engagement />
      <Vision />
      <CTA />
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const links = ["Ecosystem", "Departments", "Platform", "Research", "Industries", "Company"];
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div className="glass rounded-full px-3 py-2 flex items-center gap-2 w-full max-w-5xl">
        <a href="#" className="flex items-center gap-2 pl-3 pr-4 py-1.5">
          <Logo className="h-7 w-7" />
          <span className="font-display font-bold tracking-tight text-lg">SGT</span>
        </a>
        <nav className="hidden md:flex items-center gap-1 mx-auto text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="px-3 py-1.5 rounded-full hover:text-foreground hover:bg-white/5 transition">
              {l}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <a href="#contact" className="hidden sm:inline text-sm px-4 py-2 rounded-full hover:bg-white/5 transition">Sign in</a>
          <a href="#products" className="text-sm px-4 py-2 rounded-full bg-gradient-brand text-white font-medium shadow-[0_8px_30px_-8px_oklch(0.55_0.22_275/0.7)] hover:opacity-95 transition inline-flex items-center gap-1.5">
            Get started <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <img
      src="/sgt-logo.png"
      alt="SGT logo"
      className={`${className} object-contain drop-shadow-[0_0_18px_oklch(0.55_0.22_275/0.55)]`}
    />
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const enable3D =
    mounted &&
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-40 overflow-hidden">
      {/* Layered atmospheric background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <NeuralBackground className="absolute inset-0 h-full w-full opacity-70" />
        {/* Aurora blobs */}
        <div className="absolute -top-20 -left-20 h-[520px] w-[520px] rounded-full bg-[color:var(--brand)] opacity-25 blur-[120px] animate-float" />
        <div className="absolute top-20 right-[-10%] h-[560px] w-[560px] rounded-full bg-[color:var(--brand-2)] opacity-20 blur-[130px] animate-float [animation-delay:2s]" />
      </div>

      {/* 3D scene layer */}
      {enable3D && (
        <div className="pointer-events-none absolute inset-0 -z-[5] opacity-90">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
          {/* soft fade to content */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[color:var(--background)]" />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#platform" className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-3)] animate-pulse-glow" />
            The Official Corporate Platform of SGT
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Building the Core <br className="hidden sm:block" />
            <TypingWord /> for <span className="text-gradient">Modern Business Software</span>
          </h1>
          <div className="mt-6 flex justify-center">
            <span className="typewriter text-base sm:text-xl md:text-2xl text-foreground/90">
              &gt; One ecosystem. Many specialized departments._
            </span>
          </div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            SGT Core is the official digital platform of SGT — a technology organization of specialized
            departments engineering AI, automation, cloud, and enterprise systems that power the next
            generation of business software.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <MagneticButton
              href="#departments"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-[0_20px_60px_-20px_oklch(0.55_0.22_275/0.7)] hover:opacity-95 transition"
            >
              Explore Departments <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href="#ecosystem"
              strength={0.25}
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              Discover the Ecosystem
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          className="relative mt-16 md:mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-30 blur-3xl -z-10" />
          <div className="glass rounded-2xl p-2 shadow-[var(--shadow-card)]">
            <img
              src={heroDashboard}
              alt="SGT Core unified dashboard showing analytics, AI insights and workflows"
              width={1600}
              height={1200}
              className="rounded-xl w-full h-auto"
            />
          </div>
          {/* floating chips */}
          <FloatingChip className="hidden md:flex left-[-2%] top-[20%] animate-float" icon={<Bot className="h-4 w-4" />} label="AI Assistant" sub="+18.6% forecast" />
          <FloatingChip className="hidden md:flex right-[-2%] top-[35%] animate-float [animation-delay:1s]" icon={<Building2 className="h-4 w-4" />} label="15 Departments" sub="Unified ecosystem" />
          <FloatingChip className="hidden md:flex left-[8%] bottom-[-4%] animate-float [animation-delay:2s]" icon={<BrainCircuit className="h-4 w-4" />} label="AIAB · Research" sub="ML · DL · Applied AI" />
        </motion.div>
      </div>
    </section>
  );
}

function FloatingChip({ className = "", icon, label, sub }: any) {
  return (
    <div className={`absolute glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[var(--shadow-card)] ${className}`}>
      <div className="h-9 w-9 rounded-xl bg-gradient-brand grid place-items-center text-white">{icon}</div>
      <div className="text-left">
        <div className="text-sm font-semibold">{label}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

function TypingWord() {
  const words = ["Central platform", "Technology ecosystem", "Infrastructure"];
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (pause) {
      timer = setTimeout(() => setPause(false), 1600);
    } else if (isDeleting) {
      timer = setTimeout(() => {
        setDisplay(current.substring(0, display.length - 1));
        if (display.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 40);
    } else {
      timer = setTimeout(() => {
        setDisplay(current.substring(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setIsDeleting(true);
          setPause(true);
        }
      }, 90);
    }

    return () => clearTimeout(timer);
  }, [display, isDeleting, pause, wordIndex]);

  return (
    <span className="inline-block font-['Instrument_Serif',_'Geist_Pixel',_serif] italic text-gradient" aria-label={words[wordIndex]}>
      {display}
      <span className="inline-block w-[3px] h-[0.85em] ml-1 align-middle bg-[color:var(--brand-2)] animate-pulse-glow" />
    </span>
  );
}

/* ---------------- Logo marquee ---------------- */
function LogoMarquee() {
  const items = ["WebDev", "SySoft Systems", "AIAB", "Auto RPA", "ERP-CRM", "EdTech", "FinTech", "DBMS", "CSS", "SAD", "ITIS", "DMT", "WAPO", "DS", "RAO"];
  return (
    <section id="ecosystem" className="py-12 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">The SGT ecosystem · 15 specialized technology departments</p>
        <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-12 animate-marquee w-max">
            {[...items, ...items].map((n, i) => (
              <div key={i} className="text-xl font-display font-semibold text-muted-foreground/70 whitespace-nowrap">
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Overview ---------------- */
function Overview() {
  const pillars = [
    { icon: Building2, title: "One Organization", text: "SGT is the parent technology organization behind every department in the ecosystem." },
    { icon: Layers, title: "Specialized Divisions", text: "Fifteen independent departments, each owning a distinct technology domain." },
    { icon: FlaskConical, title: "Research & Innovation", text: "Applied research in AI, automation, systems and data drives every division forward." },
    { icon: ShieldCheck, title: "Enterprise-Grade Core", text: "Shared infrastructure, security and standards unify the entire ecosystem." },
  ];
  return (
    <section id="platform" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>The Corporate Platform</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            SGT is the organization.<br />
            <span className="text-gradient">SGT Core is its digital face.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            SGT is a technology organization built on specialized departments — each an independent
            engineering division with its own expertise, research and roadmap. SGT Core is the official
            corporate platform that represents this ecosystem to the world.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="glass rounded-2xl p-6 hover:-translate-y-1 hover:bg-white/[0.06] transition-all duration-300">
              <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground uppercase tracking-[0.18em]">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {children}
    </div>
  );
}

/* ---------------- Ecosystem Map ---------------- */
function EcosystemSection() {
  return (
    <section id="ecosystem-map" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionEyebrow>The SGT Ecosystem</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            One core.<br />
            <span className="text-gradient">Fifteen connected divisions.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            SGT sits at the center — every department connected, exchanging expertise,
            data and infrastructure through a shared engineering core.
          </p>
        </div>
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <EcosystemMap />
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SySoft Systems showcase ---------------- */
function SySoftShowcase() {
  const categories: { name: string; icon: any; items: { name: string; desc: string; tags: string[] }[] }[] = [
    {
      name: "Commerce",
      icon: Store,
      items: [
        { name: "ShopWave", desc: "Modern retail POS & inventory suite.", tags: ["POS", "Inventory"] },
        { name: "StoreFlow", desc: "Omnichannel storefront orchestration.", tags: ["Omnichannel"] },
        { name: "CartNex", desc: "Headless commerce engine & checkout.", tags: ["Headless"] },
        { name: "Vendrix POS", desc: "Enterprise multi-outlet POS platform.", tags: ["Enterprise"] },
      ],
    },
    {
      name: "Food",
      icon: UtensilsCrossed,
      items: [
        { name: "FoodoraX", desc: "Cloud kitchen & delivery command center.", tags: ["Delivery"] },
        { name: "MealForge", desc: "Recipe, prep & kitchen operations.", tags: ["Ops"] },
        { name: "DineHub", desc: "Full-service restaurant management.", tags: ["Restaurant"] },
        { name: "MenuSnap", desc: "Digital menus, QR ordering & payments.", tags: ["QR"] },
        { name: "Tiffinox", desc: "Subscription meal & tiffin platform.", tags: ["Subscription"] },
      ],
    },
    {
      name: "Healthcare",
      icon: HeartPulse,
      items: [
        { name: "MediCore ERP", desc: "Hospital-grade ERP with EMR, billing & pharmacy.", tags: ["Hospital", "EMR"] },
      ],
    },
    {
      name: "Education",
      icon: GraduationCap,
      items: [
        { name: "EduNova", desc: "Modern school & campus management.", tags: ["Campus"] },
        { name: "Examora", desc: "Assessments, grading & analytics.", tags: ["Exams"] },
        { name: "HostelFlow", desc: "Hostel operations & student services.", tags: ["Hostel"] },
        { name: "Scholaro", desc: "Learning management & content delivery.", tags: ["LMS"] },
      ],
    },
    {
      name: "Visitor Management",
      icon: DoorOpen,
      items: [
        { name: "GateFlow", desc: "Enterprise visitor & access management.", tags: ["Access"] },
        { name: "GateSync", desc: "Multi-site check-in & compliance.", tags: ["Multi-site"] },
      ],
    },
  ];

  return (
    <section id="sysoft" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <SectionEyebrow>Featured Division · SySoft Systems</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Enterprise SaaS,<br /><span className="text-gradient">engineered by SySoft Systems.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            SySoft Systems is the software product division within the SGT ecosystem. The products below
            are developed, owned and operated by SySoft Systems — showcased here as examples of what the
            SGT ecosystem builds.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-9 w-9 rounded-lg bg-gradient-brand grid place-items-center text-white">
                  <cat.icon className="h-4 w-4" />
                </div>
                <h3 className="font-display text-2xl font-semibold">{cat.name}</h3>
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-xs text-muted-foreground">{cat.items.length} products · by SySoft Systems</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {cat.items.map((p) => (
                  <ProductCard key={p.name} category={cat.name} {...p} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-muted-foreground text-center max-w-3xl mx-auto">
          All products above are developed and maintained by <span className="text-foreground/80">SySoft Systems</span>, a division of the SGT ecosystem.
          SGT Core is the corporate platform representing the ecosystem — not a direct product vendor.
        </p>
      </div>
    </section>
  );
}

function ProductCard({ name, desc, tags, category }: { name: string; desc: string; tags: string[]; category: string }) {
  return (
    <TiltCard intensity={5} className="group relative glass rounded-2xl p-6 overflow-hidden animated-border h-full">
      <span className="animated-border-inner" aria-hidden />
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-500" />
      <div className="flex items-center justify-between">
        <div className="h-10 w-10 rounded-xl bg-gradient-brand grid place-items-center text-white font-bold text-sm shadow-[0_10px_30px_-10px_oklch(0.55_0.22_275/0.8)] group-hover:scale-110 transition-transform">
          {name[0]}
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-3)] animate-pulse-glow" />
          Live
        </span>
      </div>
      {/* Mini sparkline dashboard */}
      <MiniSparkline />
      <h4 className="mt-4 font-display text-lg font-semibold">{name}</h4>
      <p className="mt-1 text-sm text-muted-foreground min-h-[40px]">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
        ))}
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">{category}</span>
      </div>
      <div className="mt-5 flex items-center justify-between text-sm">
        <a href="#" className="inline-flex items-center gap-1 text-foreground hover:text-[color:var(--brand-2)] transition group/btn">
          Learn more <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </a>
        <span className="text-[10px] text-muted-foreground">by SySoft Systems</span>
      </div>
    </TiltCard>
  );
}

function MiniSparkline() {
  const pts = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => {
      const y = 20 + Math.sin(i * 0.6) * 8 + Math.random() * 6;
      return `${(i / 23) * 100},${40 - y}`;
    }).join(" ");
  }, []);
  return (
    <div className="mt-4 h-10 rounded-lg bg-white/[0.03] border border-white/5 px-2 py-1 overflow-hidden">
      <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="h-full w-full">
        <defs>
          <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.16 232)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.72 0.16 232)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points={`0,40 ${pts} 100,40`} fill="url(#spark)" />
        <polyline points={pts} fill="none" stroke="oklch(0.85 0.15 200)" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

/* ---------------- Departments ---------------- */
function Departments() {
  const depts: Dept[] = [
    { code: "WebDev", name: "WebDev", icon: Code2, desc: "Modern web engineering, design systems and progressive web platforms.", focus: ["React", "Next.js", "Design Systems"], roadmap: "Edge-first, AI-assisted web experiences.",
      expertise: ["Design systems & component libraries", "Server-rendered React on the edge", "PWA & offline-first experiences", "Web performance & Core Web Vitals"],
      initiatives: ["Unified SGT design system across all divisions", "AI-assisted content authoring for enterprise sites", "Edge-rendered storefronts for SySoft commerce products"] },
    { code: "SySoft", name: "SySoft Systems", icon: Boxes, desc: "Enterprise SaaS product engineering across commerce, food, health, education and access.", focus: ["Multi-tenant SaaS", "POS", "ERP"], roadmap: "Verticalized AI-native business suites.",
      expertise: ["Multi-tenant SaaS architecture", "Vertical ERP & POS engineering", "Offline-first mobile point-of-sale", "Billing, subscriptions & pricing engines"],
      initiatives: ["ShopWave POS · omnichannel retail suite", "MediCore ERP · hospital-grade platform", "FoodoraX · cloud kitchen command center", "EduNova · next-gen campus management"] },
    { code: "AIAB", name: "AIAB", icon: BrainCircuit, desc: "Artificial Intelligence, Machine Learning and Deep Learning research and applied models.", focus: ["ML", "Deep Learning", "LLMs"], roadmap: "Domain-tuned foundation models for enterprise.",
      expertise: ["Applied LLMs & retrieval-augmented systems", "Computer vision & document AI", "Time-series forecasting & anomaly detection", "MLOps and model lifecycle"],
      initiatives: ["Domain-tuned foundation model for retail", "Vision pipelines for healthcare imaging", "Forecasting engine embedded in ShopWave", "In-product AI assistant used across the ecosystem"] },
    { code: "AutoRPA", name: "Auto RPA", icon: Repeat, desc: "Robotic Process Automation for repetitive back-office and operational workflows.", focus: ["RPA", "Workflow AI", "OCR"], roadmap: "Autonomous agents for enterprise operations.",
      expertise: ["Attended & unattended bots", "Document OCR & IDP pipelines", "Workflow orchestration", "Human-in-the-loop automation"],
      initiatives: ["Finance close automation for enterprise clients", "AP invoice ingestion with AIAB models", "Onboarding & KYC bots for FinTech partners"] },
    { code: "ERP-CRM", name: "ERP-CRM", icon: Briefcase, desc: "End-to-end enterprise resource and customer relationship platforms.", focus: ["ERP", "CRM", "BPM"], roadmap: "Composable ERP with embedded intelligence.",
      expertise: ["Finance, HR & supply-chain modules", "Sales pipelines & customer 360", "Business process modeling", "Cross-module reporting"],
      initiatives: ["Composable ERP core shared across SySoft products", "Unified customer graph for the ecosystem", "AI copilots for finance and sales teams"] },
    { code: "EdTech", name: "EdTech", icon: BookOpen, desc: "Learning platforms, assessment engines and campus operations technology.", focus: ["LMS", "Assessments", "Campus Ops"], roadmap: "Adaptive learning and AI tutors.",
      expertise: ["LMS & content delivery at scale", "Proctored & adaptive assessments", "Campus & hostel operations", "Learning analytics"],
      initiatives: ["Scholaro LMS · adaptive learning paths", "Examora · secure online assessments", "AI tutor prototypes with AIAB"] },
    { code: "FinTech", name: "FinTech", icon: Banknote, desc: "Payments, ledgers and financial infrastructure for modern businesses.", focus: ["Payments", "Ledger", "Compliance"], roadmap: "Regulated open-finance rails.",
      expertise: ["Payment orchestration & PSP integration", "Double-entry ledgers", "KYC / AML & compliance", "Merchant risk scoring"],
      initiatives: ["Unified checkout across SySoft commerce apps", "Ledger service powering ERP-CRM", "Open-finance connectors for enterprise clients"] },
    { code: "DBMS", name: "DBMS", icon: Database, desc: "Database engineering, data modeling and high-performance storage systems.", focus: ["PostgreSQL", "Redis", "Vector DB"], roadmap: "Multi-model, AI-ready data platforms.",
      expertise: ["High-availability Postgres clusters", "Caching & in-memory systems", "Vector & search indices", "Query performance engineering"],
      initiatives: ["Managed multi-tenant Postgres for the ecosystem", "Vector store for AIAB retrieval workloads", "Zero-downtime schema evolution framework"] },
    { code: "CSS", name: "CSS", icon: Cloud, desc: "Cloud Services & Systems — elastic infrastructure powering every division.", focus: ["Kubernetes", "Multi-cloud", "Edge"], roadmap: "Fully autonomous cloud operations.",
      expertise: ["Kubernetes platform engineering", "Multi-cloud & edge deployment", "Cost & capacity optimization", "SRE & incident response"],
      initiatives: ["Internal developer platform for all divisions", "Edge runtime for latency-critical products", "Autonomous scaling & remediation with AIAB"] },
    { code: "SAD", name: "SAD", icon: Layers, desc: "Systems Architecture & Design — the blueprints behind every SGT platform.", focus: ["Architecture", "Design Systems", "DDD"], roadmap: "Reference architectures for AI-native systems.",
      expertise: ["Domain-driven design", "Event-driven & microservices architecture", "Reference architectures & standards", "Architecture review & governance"],
      initiatives: ["SGT reference architecture v3", "AI-native service blueprint", "Cross-division architecture council"] },
    { code: "ITIS", name: "ITIS", icon: Server, desc: "IT Infrastructure & Security — enterprise networks, identity and zero-trust.", focus: ["Zero-Trust", "Identity", "SecOps"], roadmap: "Autonomous threat response.",
      expertise: ["Zero-trust networking", "Identity & SSO", "SecOps, SIEM & SOAR", "Compliance (SOC 2 / ISO 27001)"],
      initiatives: ["Ecosystem-wide zero-trust rollout", "Unified identity for internal & partner access", "Autonomous incident response pilots"] },
    { code: "DMT", name: "DMT", icon: HardDrive, desc: "Data Management & Transformation — pipelines, ETL and governed data products.", focus: ["ETL", "Lakehouse", "Governance"], roadmap: "Real-time governed data mesh.",
      expertise: ["Streaming & batch pipelines", "Lakehouse architecture", "Data contracts & governance", "Master data management"],
      initiatives: ["Governed data mesh across divisions", "Real-time analytics stream for commerce", "Data-product catalog for internal teams"] },
    { code: "WAPO", name: "WAPO", icon: Network, desc: "Web APIs, Protocols & Orchestration — the connective tissue of the ecosystem.", focus: ["REST", "GraphQL", "gRPC"], roadmap: "AI-orchestrated service meshes.",
      expertise: ["REST, GraphQL & gRPC API design", "OAuth 2.0 & developer identity", "Service mesh & orchestration", "Webhooks & event delivery"],
      initiatives: ["Unified @sgt/ecosystem SDK", "Public developer portal & API keys", "AI-orchestrated workflows across services"] },
    { code: "DS", name: "DS", icon: LineChart, desc: "Data Science — analytics, experimentation and decision intelligence.", focus: ["Analytics", "Forecasting", "MLOps"], roadmap: "Causal & decision-first data science.",
      expertise: ["Experimentation & causal inference", "Forecasting & optimization", "Executive analytics", "Feature stores & MLOps"],
      initiatives: ["Experimentation platform for product teams", "Decision-intelligence dashboards for operators", "Causal uplift models with AIAB"] },
    { code: "RAO", name: "RAO", icon: Radar, desc: "Research, Applied & Operations — long-horizon R&D and operational excellence.", focus: ["R&D", "Ops", "Innovation Labs"], roadmap: "Breakthrough technology incubation.",
      expertise: ["Long-horizon research programs", "Innovation labs & incubation", "Operational excellence", "Cross-division R&D partnerships"],
      initiatives: ["Ecosystem-wide innovation program", "Emerging-tech scouting (agents, robotics, spatial)", "Partner R&D collaborations with enterprises"] },
  ];
  const [active, setActive] = useState<Dept | null>(null);
  return (
    <section id="departments" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <SectionEyebrow>Departments</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Fifteen divisions,<br /><span className="text-gradient">one unified ecosystem.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Each SGT department is an independent technology division with its own expertise, research
            direction and roadmap — collaborating on a shared engineering core.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ perspective: 1200 }}>
          {depts.map((d, i) => (
            <motion.div
              key={d.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard intensity={6} className="group relative glass rounded-2xl p-6 overflow-hidden animated-border h-full">
                <span className="animated-border-inner" aria-hidden />
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-40 blur-3xl transition-opacity duration-500" />
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center text-white shadow-[0_10px_30px_-10px_oklch(0.55_0.22_275/0.8)] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Division</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{d.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground min-h-[44px]">{d.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.focus.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/5 text-xs text-muted-foreground">
                  <span className="text-foreground/70">Roadmap · </span>{d.roadmap}
                </div>
                <div className="mt-4">
                  <button
                    onClick={() => setActive(d)}
                    className="inline-flex items-center gap-1 text-sm text-foreground hover:text-[color:var(--brand-2)] transition cursor-pointer group/btn"
                  >
                    View department
                    <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
      <DepartmentModal dept={active} onClose={() => setActive(null)} />
    </section>
  );
}

type Dept = {
  code: string; name: string; icon: any; desc: string;
  focus: string[]; roadmap: string; expertise: string[]; initiatives: string[];
};

function DepartmentModal({ dept, onClose }: { dept: Dept | null; onClose: () => void }) {
  const open = !!dept;
  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-2xl bg-background/80 backdrop-blur-xl border-white/10 p-0 overflow-hidden">
        {dept && (
          <div className="relative">
            <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-brand opacity-30 blur-3xl -z-10" />
            <div className="p-8">
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center text-white shadow-[0_10px_30px_-10px_oklch(0.55_0.22_275/0.8)]">
                    <dept.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">SGT Division</div>
                    <DialogTitle className="font-display text-2xl">{dept.name}</DialogTitle>
                  </div>
                </div>
                <DialogDescription className="mt-3 text-base text-foreground/80">
                  {dept.desc}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {dept.focus.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
                ))}
              </div>

              <div className="mt-6 max-h-[55vh] overflow-y-auto pr-1 space-y-6">
                <ModalBlock title="Core expertise" icon={<Sparkles className="h-4 w-4" />}>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {dept.expertise.map((e) => (
                      <li key={e} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 mt-0.5 text-[color:var(--brand-3)] shrink-0" />
                        <span className="text-foreground/90">{e}</span>
                      </li>
                    ))}
                  </ul>
                </ModalBlock>

                <ModalBlock title="Current roadmap" icon={<Rocket className="h-4 w-4" />}>
                  <p className="text-sm text-foreground/85">{dept.roadmap}</p>
                </ModalBlock>

                <ModalBlock title="Example initiatives" icon={<FlaskConical className="h-4 w-4" />}>
                  <ul className="space-y-2">
                    {dept.initiatives.map((i) => (
                      <li key={i} className="flex items-start gap-2 text-sm rounded-lg bg-white/[0.03] border border-white/5 px-3 py-2">
                        <ArrowRight className="h-4 w-4 mt-0.5 text-[color:var(--brand-2)] shrink-0" />
                        <span className="text-foreground/90">{i}</span>
                      </li>
                    ))}
                  </ul>
                </ModalBlock>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" onClick={onClose} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white">
                  Engage this department <ArrowRight className="h-4 w-4" />
                </a>
                <button onClick={onClose} className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:bg-white/10 cursor-pointer">
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function ModalBlock({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
        <span className="text-[color:var(--brand-2)]">{icon}</span>
        {title}
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  const feats = [
    { icon: Cloud, t: "Modern Cloud", d: "Kubernetes-grade infrastructure built to scale globally." },
    { icon: Bot, t: "AI Workflows", d: "Applied AI from the AIAB division across the ecosystem." },
    { icon: ShieldCheck, t: "Enterprise Security", d: "SOC 2, ISO 27001 aligned controls end-to-end." },
    { icon: Boxes, t: "Multi-Tenant Systems", d: "Isolated tenancy, shared engineering excellence." },
    { icon: Zap, t: "Blazing Performance", d: "Sub-100ms responses on the edge." },
    { icon: Globe2, t: "Global Scale", d: "Deployed across regions and CDNs." },
    { icon: Code2, t: "Powerful APIs", d: "REST, GraphQL, webhooks & SDKs." },
    { icon: PlugZap, t: "Easy Integrations", d: "Connect to the tools you already use." },
    { icon: Sparkles, t: "Research Culture", d: "Long-horizon R&D powered by RAO and AIAB." },
    { icon: Smartphone, t: "Mobile First", d: "Native and PWA experiences across divisions." },
    { icon: Rocket, t: "24×7 Operations", d: "Global engineering coverage across timezones." },
    { icon: Workflow, t: "Continuous Delivery", d: "Ship weekly across every department." },
  ];
  return (
    <section className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Why the SGT Ecosystem</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Enterprise depth, <span className="text-gradient">startup velocity.</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {feats.map((f) => (
            <div key={f.t} className="glass rounded-2xl p-5 hover:bg-white/[0.06] transition">
              <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 grid place-items-center text-[color:var(--brand-2)]">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{f.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI Platform ---------------- */
function AIPlatform() {
  const bullets = [
    "Smart reports across every division",
    "Predictive analytics on live data",
    "AI assistants co-engineered with AIAB",
    "Automated operational insights",
    "Sales forecasting & anomaly detection",
    "Domain-tuned models by AIAB",
  ];
  return (
    <section id="research" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionEyebrow>AI & Research · AIAB</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Applied AI, <span className="text-gradient">engineered by AIAB.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            AIAB — the SGT division for Artificial Intelligence, Machine Learning and Deep Learning —
            builds the applied intelligence layer used across every product in the ecosystem.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 mt-0.5 text-[color:var(--brand-3)] shrink-0" />
                <span className="text-foreground/90">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-brand opacity-30 blur-3xl -z-10" />
          <div className="glass rounded-2xl p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-[color:var(--brand-3)] animate-pulse-glow" />
              SGT Core · AI Assistant
            </div>
            <div className="mt-4 space-y-3">
              <ChatBubble role="you">Why did orders dip on Tuesday?</ChatBubble>
              <ChatBubble role="ai">
                Orders dropped 12% on Tue due to a 3-hour outage at your Andheri outlet. Delivery ETA also spiked to 48m.
                I've drafted an SMS apology to affected customers and a compensating coupon.
              </ChatBubble>
              <ChatBubble role="you">Forecast next 7 days.</ChatBubble>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>7-day revenue forecast</span>
                  <span className="text-[color:var(--brand-3)]">+18.6%</span>
                </div>
                <MiniChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ role, children }: { role: "you" | "ai"; children: React.ReactNode }) {
  const isAi = role === "ai";
  return (
    <div className={`flex ${isAi ? "" : "justify-end"}`}>
      <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${isAi ? "bg-white/[0.04] border border-white/10" : "bg-gradient-brand text-white"}`}>
        {children}
      </div>
    </div>
  );
}

function MiniChart() {
  const pts = [10, 22, 18, 30, 26, 44, 38, 60, 54, 72, 68, 88];
  const max = Math.max(...pts);
  const path = pts.map((v, i) => `${(i / (pts.length - 1)) * 100},${100 - (v / max) * 90}`).join(" ");
  return (
    <svg viewBox="0 0 100 100" className="mt-3 w-full h-24" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={`0,100 ${path} 100,100`} fill="url(#g)" />
      <polyline points={path} fill="none" stroke="#67E8F9" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/* ---------------- Tech Stack ---------------- */
function TechStack() {
  const groups = [
    { title: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Flutter"] },
    { title: "Backend", items: ["Laravel", "Node.js", "PostgreSQL", "Redis", "Docker", "Nginx"] },
    { title: "Cloud", items: ["Vercel", "Cloudflare", "AWS", "DigitalOcean"] },
    { title: "AI", items: ["OpenAI", "Machine Learning", "Automation"] },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Technology Stack</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Built on the <span className="text-gradient">best of modern engineering.</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g) => (
            <div key={g.title} className="glass rounded-2xl p-6">
              <h3 className="font-display font-semibold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Industries ---------------- */
function Industries() {
  const items = ["Restaurants", "Retail", "Healthcare", "Education", "Corporate Offices", "Hotels", "Manufacturing", "Logistics", "Government", "Small Businesses", "Enterprises", "Franchises"];
  return (
    <section id="industries" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Industries</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Serving businesses <span className="text-gradient">across every industry.</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {items.map((n) => (
            <div key={n} className="glass rounded-xl px-4 py-5 text-center hover:bg-white/[0.06] transition">
              <Building2 className="h-5 w-5 mx-auto text-[color:var(--brand-2)]" />
              <div className="mt-2 text-sm">{n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  const stats: { n: number; suffix: string; l: string }[] = [
    { n: 15, suffix: "", l: "Departments" },
    { n: 18, suffix: "+", l: "Products across divisions" },
    { n: 38, suffix: "", l: "Countries" },
    { n: 9.4, suffix: "B", l: "API Requests / mo" },
    { n: 620, suffix: "M", l: "Orders Processed" },
    { n: 1.2, suffix: "B", l: "AI Requests" },
    { n: 99.99, suffix: "%", l: "System Uptime" },
    { n: 24, suffix: "×7", l: "Global Support" },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[color:var(--brand)] opacity-30 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[color:var(--brand-2)] opacity-25 blur-3xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
              >
                <div className="font-display text-3xl md:text-5xl font-bold text-gradient tabular-nums">
                  {Number.isInteger(s.n) ? (
                    <CountUp to={s.n} suffix={s.suffix} />
                  ) : (
                    <FloatCountUp to={s.n} suffix={s.suffix} />
                  )}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
                <div className="mt-3 h-[3px] w-16 rounded-full bg-gradient-brand opacity-60" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatCountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);
  const decimals = to.toString().split(".")[1]?.length ?? 0;
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1800;
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const t = [
    { q: "Working with SGT feels like partnering with a full technology organization — each department a specialist in its domain.", n: "Ananya Rao", r: "COO, Metro Foods" },
    { q: "MediCore ERP by SySoft Systems transformed our hospital. Billing, EMR and pharmacy — finally one truth.", n: "Dr. Rajiv Menon", r: "Director, Aster Health" },
    { q: "EduNova, engineered by SySoft Systems, gave our campuses a real digital backbone.", n: "Priya Sharma", r: "Principal, Polaris EDU" },
    { q: "ShopWave scaled with us from 3 to 78 stores. The SGT ecosystem is built for growth.", n: "Kabir Malhotra", r: "Founder, Zenith Retail" },
    { q: "The AIAB team's applied research is the differentiator. Enterprise AI you can actually deploy.", n: "Mei Tanaka", r: "VP Product, Skyline Hotels" },
    { q: "Every SGT department speaks the same engineering language. Integration was effortless.", n: "Lucas Fernandes", r: "CTO, Vantage Group" },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Testimonials</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Loved by <span className="text-gradient">operators worldwide.</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.map((x) => (
            <div key={x.n} className="glass rounded-2xl p-6">
              <p className="text-foreground/90">"{x.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-brand grid place-items-center text-white font-semibold">{x.n[0]}</div>
                <div>
                  <div className="text-sm font-semibold">{x.n}</div>
                  <div className="text-xs text-muted-foreground">{x.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Security ---------------- */
function Security() {
  const items = [
    { icon: Lock, t: "End-to-end Encryption", d: "TLS 1.3 in transit, AES-256 at rest across every product." },
    { icon: ShieldCheck, t: "Role-based Access", d: "Fine-grained RBAC, SSO and SCIM provisioning." },
    { icon: Database, t: "Automatic Backups", d: "Point-in-time recovery with cross-region replication." },
    { icon: Cloud, t: "Cloud Security", d: "Isolated tenants, private VPCs, hardened images." },
    { icon: ShieldCheck, t: "Compliance", d: "SOC 2, ISO 27001 aligned. GDPR & HIPAA ready." },
    { icon: LineChart, t: "Observability", d: "Real-time audit logs and anomaly detection." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Security</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Enterprise trust, <span className="text-gradient">by default.</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((i) => (
            <div key={i.t} className="glass rounded-2xl p-6">
              <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-[color:var(--brand-2)]">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{i.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Integrations ---------------- */
function Integrations() {
  const items = ["Stripe", "Razorpay", "PayPal", "WhatsApp", "Google Maps", "Twilio SMS", "Sendgrid", "AWS S3", "QuickBooks", "Zoho", "Salesforce", "Slack", "Zapier", "HubSpot", "Meta Ads", "Google Ads"];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Integrations</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Connects to <span className="text-gradient">everything your business runs on.</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {items.map((n) => (
            <div key={n} className="glass rounded-xl p-4 text-center text-sm hover:bg-white/[0.06] transition">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Developers ---------------- */
function Developers() {
  return (
    <section id="developers" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionEyebrow>Developer Platform · WAPO</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Build on the <span className="text-gradient">SGT ecosystem APIs.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            The WAPO division delivers REST & GraphQL APIs, SDKs, webhooks and OAuth 2.0 across every
            SGT platform — a unified developer surface for the entire ecosystem.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white">
              Read the docs <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium">
              Developer Portal
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-brand opacity-20 blur-3xl -z-10" />
          <div className="glass rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 text-xs text-muted-foreground">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <span className="ml-2">POST /v1/orders</span>
            </div>
            <pre className="p-5 text-xs leading-relaxed text-foreground/90 overflow-x-auto">
{`import { SGT } from "@sgt/ecosystem";

const sgt = new SGT({ apiKey: process.env.SGT_KEY });

// SySoft Systems · ShopWave
const order = await sgt.sysoft.shopwave.orders.create({
  outlet: "andheri-west",
  items: [{ sku: "LATTE-M", qty: 2 }],
});

// AIAB · applied intelligence
const insight = await sgt.aiab.suggest(order.id);`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Engagement Models ---------------- */
function Engagement() {
  const models = [
    {
      name: "Partnership",
      icon: Handshake,
      note: "For enterprises & institutions",
      features: [
        "Collaborate with SGT departments",
        "Joint solution engineering",
        "Dedicated technical liaison",
        "Access to product divisions",
      ],
    },
    {
      name: "Innovation Program",
      icon: FlaskConical,
      featured: true,
      note: "Co-build with AIAB & RAO",
      features: [
        "Applied AI & research collaborations",
        "Proof-of-concept engineering",
        "Shared IP frameworks",
        "Long-horizon R&D",
      ],
    },
    {
      name: "Ecosystem Access",
      icon: Boxes,
      note: "For product-led organizations",
      features: [
        "Introductions to SySoft Systems",
        "Integrate with SGT platforms",
        "Developer & API programs",
        "White-label & OEM pathways",
      ],
    },
  ];
  return (
    <section id="engagement" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Engagement Models</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Ways to build <span className="text-gradient">with the SGT ecosystem.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            SGT Core doesn't sell software directly — products are delivered by the respective
            departments. Organizations engage with SGT through partnership, research and ecosystem access.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {models.map((p) => (
            <div key={p.name} className={`relative glass rounded-2xl p-8 ${p.featured ? "border-transparent" : ""}`}>
              {p.featured && (
                <>
                  <div className="absolute -inset-px rounded-2xl bg-gradient-brand opacity-40 blur-xl -z-10" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-[color:var(--brand)]/60 pointer-events-none" />
                  <span className="absolute -top-3 left-6 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-brand text-white">Flagship</span>
                </>
              )}
              <div className="h-11 w-11 rounded-xl bg-gradient-brand grid place-items-center text-white">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.note}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-[color:var(--brand-3)] shrink-0" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex w-full justify-center items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${p.featured ? "bg-gradient-brand text-white" : "glass hover:bg-white/10"}`}>
                Talk to SGT <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Vision ---------------- */
function Vision() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionEyebrow>Global Vision</SectionEyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">
          To become the world's most trusted
          <span className="text-gradient"> technology ecosystem</span> — a unified organization of specialized departments engineering the future of business software.
        </h2>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative glass rounded-3xl p-10 md:p-16 overflow-hidden text-center">
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              Ready to work with <span className="text-gradient">the SGT ecosystem?</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Connect with the right SGT department for your challenge — from applied AI and automation to enterprise systems and cloud infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white">
                Talk to SGT <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#departments" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10">
                Explore Departments
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const cols = [
    { t: "Departments", l: ["WebDev", "SySoft Systems", "AIAB", "Auto RPA", "ERP-CRM"] },
    { t: "More Divisions", l: ["EdTech", "FinTech", "DBMS", "CSS", "SAD"] },
    { t: "Industries", l: ["Retail", "Food", "Healthcare", "Education", "Enterprise"] },
    { t: "Company", l: ["About", "Careers", "Blog", "Press", "Contact"] },
  ];
  return (
    <footer className="border-t border-white/5 pt-16 pb-10 mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="font-display font-bold text-lg">SGT</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              SGT is a technology organization of specialized departments building the core infrastructure
              for modern business software.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Twitter, Linkedin, Github, Youtube].map((I, i) => (
                <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-white/10 transition">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {c.l.map((x) => (
                  <li key={x}><a href="#" className="text-foreground/80 hover:text-foreground transition">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} SGT · A technology ecosystem of specialized departments.</div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-3)] animate-pulse-glow" /> All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
