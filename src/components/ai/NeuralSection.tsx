"use client";
import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

const NeuralBrainScene = lazy(() => import("./NeuralBrainScene"));

export function NeuralSection() {
  const [enable3D, setEnable3D] = useState(false);
  useEffect(() => {
    const ok =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setEnable3D(ok);
  }, []);

  return (
    <section id="neural" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(700px 400px at 20% 30%, oklch(0.55 0.22 275 / 0.28), transparent 60%), radial-gradient(600px 400px at 80% 70%, oklch(0.72 0.16 232 / 0.22), transparent 60%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
            Neural Intelligence Layer
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold">
            A digital brain <br />
            <span className="text-gradient">wired across the ecosystem.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Live signals flow through a shared neural fabric — knowledge graphs, event
            pipelines, and domain models talking in real time across every SGT division.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {/* Brain scene */}
          <motion.div
            className="relative lg:col-span-2 h-[420px] md:h-[520px] rounded-3xl overflow-hidden glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {enable3D ? (
              <Suspense fallback={<BrainFallback />}>
                <NeuralBrainScene />
              </Suspense>
            ) : (
              <BrainFallback />
            )}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[color:var(--background)]/60 pointer-events-none" />
            <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 text-xs text-muted-foreground flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-3)] animate-pulse-glow" />
              Live neural fabric · 12 signals/s
            </div>
            <div className="absolute top-4 right-4 glass rounded-full px-3 py-1.5 text-xs text-muted-foreground">
              98.7% uptime
            </div>
          </motion.div>

          {/* Knowledge graph + pipeline stack */}
          <div className="grid grid-rows-2 gap-6">
            <KnowledgeGraphCard />
            <DataPipelineCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function BrainFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="relative h-64 w-64">
        <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-40 blur-3xl" />
        <div className="absolute inset-6 rounded-full border border-white/10 animate-pulse-glow" />
        <div className="absolute inset-16 rounded-full bg-gradient-brand opacity-70 blur-xl" />
      </div>
    </div>
  );
}

function KnowledgeGraphCard() {
  // deterministic node layout
  const nodes = [
    { id: "core", x: 50, y: 50, label: "Core" },
    { id: "n1", x: 15, y: 22, label: "AIAB" },
    { id: "n2", x: 82, y: 20, label: "SySoft" },
    { id: "n3", x: 88, y: 65, label: "FinTech" },
    { id: "n4", x: 55, y: 88, label: "ERP" },
    { id: "n5", x: 12, y: 78, label: "EdTech" },
    { id: "n6", x: 30, y: 50, label: "RPA" },
    { id: "n7", x: 72, y: 45, label: "DBMS" },
  ];
  const edges = nodes.filter((n) => n.id !== "core").map((n) => ({ from: "core", to: n.id }));
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <motion.div
      className="relative rounded-2xl glass p-5 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground uppercase tracking-widest">Knowledge Graph</span>
        <span className="text-[color:var(--brand-3)]">Live</span>
      </div>
      <svg viewBox="0 0 100 100" className="mt-3 w-full h-40" preserveAspectRatio="none">
        <defs>
          <linearGradient id="kg" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#67E8F9" />
          </linearGradient>
        </defs>
        {edges.map((e, i) => {
          const a = byId[e.from];
          const b = byId[e.to];
          return (
            <g key={i}>
              <line
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                stroke="url(#kg)" strokeWidth={0.4} opacity={0.6}
              />
              <circle r={0.8} fill="#67E8F9">
                <animateMotion
                  dur={`${2 + (i % 4) * 0.6}s`}
                  repeatCount="indefinite"
                  path={`M ${a.x} ${a.y} L ${b.x} ${b.y}`}
                />
              </circle>
            </g>
          );
        })}
        {nodes.map((n) => (
          <g key={n.id}>
            <circle cx={n.x} cy={n.y} r={n.id === "core" ? 2.6 : 1.6} fill="url(#kg)">
              <animate attributeName="r" values={`${n.id === "core" ? 2.6 : 1.6};${n.id === "core" ? 3 : 2};${n.id === "core" ? 2.6 : 1.6}`} dur="2.4s" repeatCount="indefinite" />
            </circle>
          </g>
        ))}
      </svg>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {nodes.slice(1).map((n) => (
          <span key={n.id} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-muted-foreground">
            {n.label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function DataPipelineCard() {
  const stages = ["Ingest", "Stream", "Model", "Serve"];
  return (
    <motion.div
      className="relative rounded-2xl glass p-5 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground uppercase tracking-widest">Data Pipeline</span>
        <span className="text-[color:var(--brand-2)]">4.2k evt/s</span>
      </div>
      <div className="mt-4 relative">
        <div className="flex items-center justify-between text-[11px] font-medium">
          {stages.map((s) => (
            <div key={s} className="flex flex-col items-center gap-1.5 z-10">
              <div className="h-8 w-8 rounded-lg bg-gradient-brand grid place-items-center text-white text-[10px] shadow-[0_8px_30px_-10px_oklch(0.55_0.22_275/0.7)]">
                {s[0]}
              </div>
              <span className="text-muted-foreground">{s}</span>
            </div>
          ))}
          <div className="absolute left-4 right-4 top-4 h-px bg-white/10 -z-0" />
          <svg className="absolute left-4 right-4 top-3 h-3 -z-0 w-[calc(100%-2rem)]" viewBox="0 0 100 3" preserveAspectRatio="none">
            <defs>
              <linearGradient id="pipe" x1="0" x2="1">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#67E8F9" />
              </linearGradient>
            </defs>
            {[0, 0.35, 0.7].map((delay, i) => (
              <circle key={i} r="1" fill="url(#pipe)">
                <animate attributeName="cx" from="0" to="100" dur="2.4s" repeatCount="indefinite" begin={`${delay}s`} />
                <animate attributeName="cy" values="1.5;1.5" dur="2.4s" repeatCount="indefinite" />
              </circle>
            ))}
          </svg>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 text-[11px]">
          <PipeStat label="Latency" value="42ms" />
          <PipeStat label="Throughput" value="4.2k/s" />
          <PipeStat label="Errors" value="0.02%" tone="good" />
        </div>
      </div>
    </motion.div>
  );
}

function PipeStat({ label, value, tone }: { label: string; value: string; tone?: "good" }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2">
      <div className="text-muted-foreground">{label}</div>
      <div className={`font-semibold ${tone === "good" ? "text-[color:var(--brand-3)]" : "text-foreground"}`}>{value}</div>
    </div>
  );
}