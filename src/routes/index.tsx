import { createFileRoute } from "@tanstack/react-router";
import heroDashboard from "@/assets/hero-dashboard.jpg";
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
      <Departments />
      <SySoftShowcase />
      <WhyUs />
      <AIPlatform />
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
          <span className="font-display font-bold tracking-tight">SGT Core</span>
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
    <div className={`${className} relative rounded-lg bg-gradient-brand grid place-items-center shadow-[0_0_20px_oklch(0.55_0.22_275/0.6)]`}>
      <div className="h-2.5 w-2.5 rounded-sm bg-white/95" />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <a href="#platform" className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-3)] animate-pulse-glow" />
            The Official Corporate Platform of SGT
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight">
            Building the Core <br className="hidden sm:block" />
            Infrastructure for <span className="text-gradient">Modern Business Software</span>
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
            <a href="#departments" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white shadow-[0_20px_60px_-20px_oklch(0.55_0.22_275/0.7)] hover:opacity-95 transition">
              Explore Departments <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#ecosystem" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
              Discover the Ecosystem
            </a>
          </div>
        </div>

        <div className="relative mt-16 md:mt-20">
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
        </div>
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
    <div className="group relative glass rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-30 blur-3xl transition-opacity" />
      <div className="flex items-center justify-between">
        <div className="h-10 w-10 rounded-xl bg-gradient-brand grid place-items-center text-white font-bold text-sm shadow-[0_10px_30px_-10px_oklch(0.55_0.22_275/0.8)]">
          {name[0]}
        </div>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{category}</span>
      </div>
      <h4 className="mt-4 font-display text-lg font-semibold">{name}</h4>
      <p className="mt-1 text-sm text-muted-foreground min-h-[40px]">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3 text-sm">
        <a href="#" className="inline-flex items-center gap-1 text-foreground hover:text-[color:var(--brand-2)] transition">
          Learn more <ArrowRight className="h-3.5 w-3.5" />
        </a>
        <span className="text-white/20">·</span>
        <a href="#" className="text-muted-foreground hover:text-foreground transition">Live demo</a>
      </div>
    </div>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  const feats = [
    { icon: Cloud, t: "Modern Cloud", d: "Kubernetes-grade infrastructure built to scale globally." },
    { icon: Bot, t: "AI Workflows", d: "Every product ships with intelligent automation." },
    { icon: ShieldCheck, t: "Enterprise Security", d: "SOC 2, ISO 27001 aligned controls end-to-end." },
    { icon: Boxes, t: "Multi-Tenant SaaS", d: "Isolate data, share innovation." },
    { icon: Zap, t: "Blazing Performance", d: "Sub-100ms responses on the edge." },
    { icon: Globe2, t: "Global Scale", d: "Deployed across regions and CDNs." },
    { icon: Code2, t: "Powerful APIs", d: "REST, GraphQL, webhooks & SDKs." },
    { icon: PlugZap, t: "Easy Integrations", d: "Connect to the tools you already use." },
    { icon: Sparkles, t: "White-label Ready", d: "Ship your own brand, on our core." },
    { icon: Smartphone, t: "Mobile First", d: "Native and PWA experiences included." },
    { icon: Rocket, t: "24×7 Support", d: "Dedicated enterprise success teams." },
    { icon: Workflow, t: "Continuous Updates", d: "Ship weekly, without downtime." },
  ];
  return (
    <section className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Why SGT Core</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Enterprise capability, <span className="text-gradient">startup velocity.</span>
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
    "Smart Reports across every product",
    "Predictive analytics on live data",
    "AI chat assistants for operators",
    "Automated customer & inventory insights",
    "Sales forecasting & anomaly detection",
    "Auto-responses trained on your business",
  ];
  return (
    <section className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionEyebrow>AI Platform</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            AI baked into <span className="text-gradient">every product.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            The SGT Core AI layer sits underneath every application — analyzing operations, surfacing
            opportunities, and automating the work no one should have to do manually.
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
  const stats = [
    { v: "18+", l: "Products" },
    { v: "12,400+", l: "Happy Customers" },
    { v: "38", l: "Countries" },
    { v: "9.4B", l: "API Requests / mo" },
    { v: "620M", l: "Orders Processed" },
    { v: "1.2B", l: "AI Requests" },
    { v: "99.99%", l: "System Uptime" },
    { v: "24×7", l: "Global Support" },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl md:text-5xl font-bold text-gradient">{s.v}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const t = [
    { q: "SGT Core replaced five vendors with one platform. Our operations team has never moved faster.", n: "Ananya Rao", r: "COO, Metro Foods" },
    { q: "MediCore ERP transformed our hospital. Billing, EMR and pharmacy — finally one truth.", n: "Dr. Rajiv Menon", r: "Director, Aster Health" },
    { q: "EduNova gave our campuses a real digital backbone. Parents, teachers and students all love it.", n: "Priya Sharma", r: "Principal, Polaris EDU" },
    { q: "ShopWave scaled with us from 3 to 78 stores without a single re-platform.", n: "Kabir Malhotra", r: "Founder, Zenith Retail" },
    { q: "The AI layer is the differentiator. It quietly does the work of an analyst on every store.", n: "Mei Tanaka", r: "VP Product, Skyline Hotels" },
    { q: "As a technology partner, integrating with SGT Core APIs was the smoothest we've ever done.", n: "Lucas Fernandes", r: "CTO, Vantage Group" },
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
          <SectionEyebrow>Developer Platform</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Build on the <span className="text-gradient">SGT Core API.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            REST & GraphQL APIs, SDKs, webhooks, OAuth 2.0, and a full sandbox — everything you need to
            extend the platform or embed our products in your own experience.
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
{`const sgt = new SGTCore({ apiKey: process.env.SGT_KEY });

const order = await sgt.commerce.orders.create({
  outlet: "andheri-west",
  items: [
    { sku: "LATTE-M", qty: 2 },
    { sku: "CROISSANT", qty: 1 },
  ],
  customer: { phone: "+91xxxxxxxxxx" },
});

// AI: auto-suggest upsell + delivery ETA
const insight = await sgt.ai.suggest(order.id);`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */
function Pricing() {
  const plans = [
    { name: "Starter", price: "$49", note: "per product / month", features: ["1 product license", "Cloud hosting", "Community support", "Standard APIs"] },
    { name: "Business", price: "$199", note: "per product / month", featured: true, features: ["Up to 5 products", "Priority support", "Advanced AI features", "SSO & RBAC"] },
    { name: "Enterprise", price: "Custom", note: "tailored SaaS", features: ["Unlimited products", "Dedicated infra", "White-label licensing", "24×7 success team"] },
  ];
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <SectionEyebrow>Pricing</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            Simple plans, <span className="text-gradient">enterprise power.</span>
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div key={p.name} className={`relative glass rounded-2xl p-8 ${p.featured ? "border-transparent" : ""}`}>
              {p.featured && (
                <>
                  <div className="absolute -inset-px rounded-2xl bg-gradient-brand opacity-40 blur-xl -z-10" />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-[color:var(--brand)]/60 pointer-events-none" />
                  <span className="absolute -top-3 left-6 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-brand text-white">Most Popular</span>
                </>
              )}
              <h3 className="font-display text-xl font-semibold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.note}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="h-4 w-4 mt-0.5 text-[color:var(--brand-3)] shrink-0" />
                    <span className="text-foreground/90">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`mt-8 inline-flex w-full justify-center items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${p.featured ? "bg-gradient-brand text-white" : "glass hover:bg-white/10"}`}>
                Get started <ArrowRight className="h-4 w-4" />
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
          To become one of the world's leading
          <span className="text-gradient"> enterprise software platforms</span> — powering intelligent, scalable, connected businesses everywhere.
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
              Ready to build on <span className="text-gradient">SGT Core?</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Talk to our team about the right combination of products, integrations and infrastructure for your business.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white">
                Request Demo <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#products" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10">
                Explore Products
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
    { t: "Products", l: ["ShopWave", "DineHub", "MediCore ERP", "EduNova", "GateFlow"] },
    { t: "Industries", l: ["Retail", "Food", "Healthcare", "Education", "Enterprise"] },
    { t: "Developers", l: ["Documentation", "APIs", "SDKs", "Status", "Sandbox"] },
    { t: "Company", l: ["About", "Careers", "Blog", "Press", "Contact"] },
    { t: "Legal", l: ["Privacy", "Terms", "Security", "DPA", "Cookies"] },
  ];
  return (
    <footer className="border-t border-white/5 pt-16 pb-10 mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-6 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-display font-bold text-lg">SGT Core</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Building the core infrastructure for modern business software.
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
          <div>© {new Date().getFullYear()} SGT Core. Building the Core Infrastructure for Modern Business Software.</div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-3)] animate-pulse-glow" /> All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
