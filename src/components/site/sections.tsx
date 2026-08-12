import { Link } from "@tanstack/react-router";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { useState, useEffect, useMemo, useRef, lazy, Suspense } from "react";
import { useInView } from "framer-motion";
import { NeuralBackground } from "@/components/hero/NeuralBackground";
import { MagneticButton, TiltCard, CountUp } from "@/components/motion/primitives";
import { EcosystemMap } from "@/components/ecosystem/EcosystemMap";
import { NeuralSection } from "@/components/ai/NeuralSection";
import { motion } from "framer-motion";
import { divisions, parent, nextSteps, establishSteps, type Division } from "@/data/divisions";

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
  Menu, X,
} from "lucide-react";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */
export function Nav() {
  const links: { label: string; to: string }[] = [
    { label: "Ecosystem", to: "/ecosystem" },
    { label: "MNCs", to: "/departments" },
    { label: "Platform", to: "/platform" },
    { label: "Research", to: "/research" },
    { label: "Industries", to: "/industries" },
    { label: "Company", to: "/company" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl">
      <div className="glass rounded-full px-3 py-2 flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2 pl-3 pr-4 py-1.5">
          <Logo className="h-7 w-7" />
          <span className="font-display font-bold tracking-tight text-lg">SGT</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 mx-auto text-sm text-muted-foreground">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "px-3 py-1.5 rounded-full text-foreground bg-white/5" }}
              inactiveProps={{ className: "px-3 py-1.5 rounded-full hover:text-foreground hover:bg-white/5 transition" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 shrink-0">
          <Link to="/signin" className="hidden sm:inline text-sm px-4 py-2 rounded-full hover:bg-white/5 transition">Sign in</Link>
          <Link to="/get-started" className="hidden sm:inline-flex text-sm px-4 py-2 rounded-full bg-gradient-brand text-white font-medium shadow-[0_8px_30px_-8px_oklch(0.55_0.22_275/0.7)] hover:opacity-95 transition items-center gap-1.5">
            Get started <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-foreground transition hover:bg-white/10"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden mt-2 glass rounded-3xl p-3 flex flex-col gap-1 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeProps={{ className: "px-4 py-3 rounded-2xl text-foreground bg-white/10" }}
              inactiveProps={{ className: "px-4 py-3 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition" }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-1 grid grid-cols-2 gap-2">
            <Link to="/signin" onClick={() => setOpen(false)} className="px-4 py-3 rounded-2xl border border-white/10 text-center">Sign in</Link>
            <Link to="/get-started" onClick={() => setOpen(false)} className="px-4 py-3 rounded-2xl bg-gradient-brand text-white font-medium text-center">Get started</Link>
          </div>
        </nav>
      )}
      </div>
    </header>
  );
}

export function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <img
      src="/sgt-logo.png"
      alt="SGT logo"
      className={`${className} object-contain drop-shadow-[0_0_18px_oklch(0.55_0.22_275/0.55)]`}
    />
  );
}

/* ---------------- Hero ---------------- */
export function Hero() {
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
              &gt; One parent company. Seventeen global MNCs._
            </span>
          </div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            SGT Core is the official corporate platform of SYED GLOBAL TECHNOLOGIES (SGT) — the parent
            holding company that owns, governs, funds and scales seventeen specialized SYED MNCs across
            programming languages, rapid application development, automation, data, cloud, security,
            infrastructure and artificial intelligence. Together they deliver end-to-end coverage of the
            digital world.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <MagneticButton
              href="#departments"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-[0_20px_60px_-20px_oklch(0.55_0.22_275/0.7)] hover:opacity-95 transition"
            >
              Explore the 17 MNCs <ArrowRight className="h-4 w-4" />
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
          <FloatingChip className="hidden md:flex right-[-2%] top-[35%] animate-float [animation-delay:1s]" icon={<Building2 className="h-4 w-4" />} label="17 SYED MNCs" sub="One parent company" />
          <FloatingChip className="hidden md:flex left-[8%] bottom-[-4%] animate-float [animation-delay:2s]" icon={<BrainCircuit className="h-4 w-4" />} label="AIAB · Research" sub="ML · DL · Applied AI" />
        </motion.div>
      </div>
    </section>
  );
}

export function FloatingChip({ className = "", icon, label, sub }: any) {
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

export function TypingWord() {
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
export function LogoMarquee() {
  const items = divisions.map((d) => d.name);
  return (
    <section id="ecosystem" className="py-12 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">The SGT group · 17 specialized global MNCs</p>
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
export function Overview() {
  const pillars = [
    { icon: Building2, title: "One Parent Company", text: "SGT owns, governs, funds and scales every SYED-branded MNC in the group." },
    { icon: Layers, title: "Seventeen MNCs", text: "Each SYED MNC is a specialized global vertical with its own products and P&L." },
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
            SGT defines vision, standards, compliance, IP ownership and global expansion. Each SYED MNC is
            an independent global vertical with its own features, products, business model, pricing, clients,
            challenges, upgrade path and roadmap. SGT Core is the corporate platform representing them all.
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

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground uppercase tracking-[0.18em]">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {children}
    </div>
  );
}

/* ---------------- Ecosystem Map ---------------- */
export function EcosystemSection() {
  return (
    <section id="ecosystem-map" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionEyebrow>The SGT Ecosystem</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            One parent company.<br />
            <span className="text-gradient">Seventeen connected MNCs.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            SGT sits at the center — every MNC connected, exchanging expertise, talent,
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
export function SySoftShowcase() {
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

export function ProductCard({ name, desc, tags, category }: { name: string; desc: string; tags: string[]; category: string }) {
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

export function MiniSparkline() {
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

/* ---------------- Departments (the 17 SYED MNCs) ---------------- */
const deptIcons: Record<string, any> = {
  "4GL": Code2, RAD: Zap, SAD: Layers, "AUTO/RPA": Repeat, DBMS: Database,
  DMT: LineChart, ONE: Briefcase, "WEB-DEV": Globe2, "AI-ML-DL": BrainCircuit,
  CS: Cloud, CSS: Lock, DS: HardDrive, ITIS: Server, AIIS: Cpu, NS: Network,
  WAPL: Workflow, AIAB: Bot,
};

export function Departments() {
  const [active, setActive] = useState<Division | null>(null);
  return (
    <section id="departments" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <SectionEyebrow>The SYED MNCs</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
              Seventeen MNCs,<br /><span className="text-gradient">one parent organization.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            SYED Global Technologies owns, governs, funds and scales every SYED-branded MNC. Each one is a
            specialized global vertical with its own products, business model, clients and roadmap.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ perspective: 1200 }}>
          {divisions.map((d, i) => {
            const Icon = deptIcons[d.code] ?? Boxes;
            return (
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
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">MNC · {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{d.name}</h3>
                  <p className="text-xs text-accent">{d.full}</p>
                  <p className="mt-2 text-sm text-muted-foreground min-h-[44px]">{d.tagline}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {(d.focus ?? d.features ?? []).slice(0, 3).map((t) => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  {d.roadmap?.length ? (
                    <div className="mt-5 pt-4 border-t border-white/5 text-xs text-muted-foreground">
                      <span className="text-foreground/70">Roadmap · </span>{d.roadmap.join(" → ")}
                    </div>
                  ) : null}
                  <div className="mt-4">
                    <button
                      onClick={() => setActive(d)}
                      className="inline-flex items-center gap-1 text-sm text-foreground hover:text-[color:var(--brand-2)] transition cursor-pointer group/btn"
                    >
                      View MNC
                      <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
      <DepartmentModal dept={active} onClose={() => setActive(null)} />
    </section>
  );
}

function ModalList({ items }: { items: string[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-2">
      {items.map((e) => (
        <li key={e} className="flex items-start gap-2 text-sm">
          <Check className="h-4 w-4 mt-0.5 text-[color:var(--brand-3)] shrink-0" />
          <span className="text-foreground/90">{e}</span>
        </li>
      ))}
    </ul>
  );
}

export function DepartmentModal({ dept, onClose }: { dept: Division | null; onClose: () => void }) {
  const open = !!dept;
  const Icon = dept ? (deptIcons[dept.code] ?? Boxes) : Boxes;
  const blocks: { title: string; icon: React.ReactNode; items?: string[] }[] = dept
    ? [
        { title: "Features", icon: <Sparkles className="h-4 w-4" />, items: dept.features },
        { title: "Focus", icon: <Radar className="h-4 w-4" />, items: dept.focus },
        { title: "Why choose us?", icon: <ShieldCheck className="h-4 w-4" />, items: dept.why },
        { title: "Products & services", icon: <Boxes className="h-4 w-4" />, items: dept.products },
        { title: "Business model", icon: <Briefcase className="h-4 w-4" />, items: dept.businessModel },
        { title: "Pricing", icon: <Banknote className="h-4 w-4" />, items: dept.pricing },
        { title: "Revenue & clients", icon: <LineChart className="h-4 w-4" />, items: dept.revenue },
        { title: "Challenges we face", icon: <Lock className="h-4 w-4" />, items: dept.challenges },
        { title: "Ideas to upgrade", icon: <FlaskConical className="h-4 w-4" />, items: dept.upgrades },
        { title: "Expansion plan", icon: <Globe2 className="h-4 w-4" />, items: dept.expansion },
        { title: "Roadmap", icon: <Rocket className="h-4 w-4" />, items: dept.roadmap },
        { title: "How to establish this MNC", icon: <Building2 className="h-4 w-4" />, items: establishSteps },
      ].filter((b) => b.items?.length)
    : [];
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
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">SGT Group · {dept.full}</div>
                    <DialogTitle className="font-display text-2xl">{dept.name}</DialogTitle>
                  </div>
                </div>
                <DialogDescription className="mt-3 text-base text-foreground/80">
                  {dept.tagline}
                </DialogDescription>
              </DialogHeader>

              {dept.what && (
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="text-xs uppercase tracking-widest text-accent">What it is</div>
                  <p className="mt-2 text-sm text-muted-foreground">{dept.what}</p>
                </div>
              )}

              <div className="mt-6 max-h-[55vh] overflow-y-auto pr-1 space-y-6">
                {blocks.map((b) => (
                  <ModalBlock key={b.title} title={b.title} icon={b.icon}>
                    <ModalList items={b.items!} />
                  </ModalBlock>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" onClick={onClose} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-medium text-white">
                  Engage this MNC <ArrowRight className="h-4 w-4" />
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

/* ---------------- Group structure (parent company) ---------------- */
export function GroupStructure() {
  return (
    <section id="group" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Corporate Structure</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            {parent.name}<br /><span className="text-gradient">{parent.role}</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            SGT is a real global parent MNC. Each SYED MNC below is documented separately — clear structure,
            no mixing, end-to-end clarity, the way real holding companies document their verticals.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-widest text-accent">Role</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {parent.rolePoints.map((r) => <li key={r}>· {r}</li>)}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-widest text-accent">Core functions</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {parent.coreFunctions.map((r) => <li key={r}>· {r}</li>)}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-widest text-accent">How to establish an MNC</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {establishSteps.map((r) => <li key={r}>· {r}</li>)}
            </ul>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {parent.bigPicture.map((b) => (
            <p key={b} className="glass rounded-2xl p-5 font-display text-lg">{b}</p>
          ))}
        </div>
        <div className="mt-6 glass rounded-2xl p-6">
          <div className="text-xs uppercase tracking-widest text-accent">What comes next</div>
          <ul className="mt-3 grid gap-2 md:grid-cols-2 text-sm text-muted-foreground">
            {nextSteps.map((s) => <li key={s}>· {s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ModalBlock({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
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
export function WhyUs() {
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
export function AIPlatform() {
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

export function ChatBubble({ role, children }: { role: "you" | "ai"; children: React.ReactNode }) {
  const isAi = role === "ai";
  return (
    <div className={`flex ${isAi ? "" : "justify-end"}`}>
      <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${isAi ? "bg-white/[0.04] border border-white/10" : "bg-gradient-brand text-white"}`}>
        {children}
      </div>
    </div>
  );
}

export function MiniChart() {
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
export function TechStack() {
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
export function Industries() {
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
export function Stats() {
  const stats: { n: number; suffix: string; l: string }[] = [
    { n: 17, suffix: "", l: "SYED MNCs" },
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

export function FloatCountUp({ to, suffix }: { to: number; suffix: string }) {
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
export function Testimonials() {
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
export function Security() {
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
export function Integrations() {
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
export function Developers() {
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
export function Engagement() {
  const models = [
    {
      name: "Partnership",
      icon: Handshake,
      note: "For enterprises & institutions",
      features: [
        "Collaborate with SYED MNCs",
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
            SGT Core doesn't sell software directly — products and services are delivered by the respective
            SYED MNCs. Organizations engage with the group through partnership, research and ecosystem access.
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
export function Vision() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionEyebrow>Global Vision</SectionEyebrow>
        <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold leading-tight">
          To become the world's most trusted
          <span className="text-gradient"> technology empire</span> — one parent company, seventeen specialized global MNCs, end-to-end digital world coverage.
        </h2>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
export function CTA() {
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
              Connect with the right SYED MNC for your challenge — from applied AI and automation to enterprise systems and cloud infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white">
                Talk to SGT <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#departments" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10">
                Explore the MNCs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
export function Footer() {
  const cols = [
    { t: "SYED MNCs", l: ["SYED (4GL)", "SYED (RAD)", "SYED (SAD)", "SYED (AUTO/RPA)", "SYED (DBMS)", "SYED (DMT)", "SYED (ONE)", "SYED (WEB-DEV)", "SYED (AI-ML-DL)"] },
    { t: "More MNCs", l: ["SYED (CS)", "SYED (CSS)", "SYED (DS)", "SYED (ITIS)", "SYED (AIIS)", "SYED (NS)", "SYED (WAPL)", "SYED (AIAB)"] },
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
              SYED GLOBAL TECHNOLOGIES is the parent holding company of seventeen specialized SYED MNCs
              building the core infrastructure for modern business software.
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
          <div>© {new Date().getFullYear()} SGT · Parent holding company of 17 specialized SYED MNCs.</div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-3)] animate-pulse-glow" /> All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
