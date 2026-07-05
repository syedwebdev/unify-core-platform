"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const NODES = [
  "WebDev", "SySoft", "AIAB", "Auto RPA", "ERP-CRM",
  "EdTech", "FinTech", "DBMS", "CSS", "SAD",
  "ITIS", "DMT", "WAPO", "DS", "RAO",
];

export function EcosystemMap() {
  const [hover, setHover] = useState<number | null>(null);
  const size = 720;
  const cx = size / 2;
  const cy = size / 2;

  const points = useMemo(() => {
    return NODES.map((n, i) => {
      const angle = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
      const r = 280;
      return {
        name: n,
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r,
        angle,
      };
    });
  }, [cx, cy]);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-3xl">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-brand opacity-20 blur-[100px]" />

      <svg viewBox={`0 0 ${size} ${size}`} className="relative h-full w-full">
        <defs>
          <linearGradient id="ec-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.55 0.22 275)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="oklch(0.72 0.16 232)" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="ec-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.72 0.16 232)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 275)" stopOpacity="0.2" />
          </radialGradient>
          <filter id="ec-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Concentric rings */}
        {[120, 200, 280, 340].map((r, i) => (
          <circle
            key={r}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="oklch(1 0 0 / 0.06)"
            strokeWidth={1}
            strokeDasharray={i === 1 ? "4 6" : undefined}
          />
        ))}

        {/* Connections */}
        {points.map((p, i) => {
          const active = hover === null || hover === i;
          return (
            <motion.line
              key={`l-${i}`}
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              stroke="url(#ec-line)"
              strokeWidth={hover === i ? 1.8 : 1}
              strokeOpacity={active ? 0.8 : 0.15}
              strokeDasharray="4 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: active ? 0.8 : 0.15 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
              style={{ animation: "ec-dash 12s linear infinite" }}
            />
          );
        })}

        {/* Traveling pulses along each line */}
        {points.map((p, i) => (
          <motion.circle
            key={`p-${i}`}
            r={3}
            fill="oklch(0.85 0.15 200)"
            filter="url(#ec-glow)"
            initial={false}
            animate={{
              cx: [cx, p.x],
              cy: [cy, p.y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: (i * 0.35) % 3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Center SGT node */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={64}
          fill="url(#ec-core)"
          filter="url(#ec-glow)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
        <circle cx={cx} cy={cy} r={52} fill="oklch(0.16 0.03 265 / 0.85)" stroke="oklch(1 0 0 / 0.15)" />
        <text
          x={cx}
          y={cy + 8}
          textAnchor="middle"
          className="fill-white font-display font-bold"
          style={{ fontSize: 28, letterSpacing: "-0.02em" }}
        >
          SGT
        </text>

        {/* Department nodes */}
        {points.map((p, i) => {
          const isHover = hover === i;
          return (
            <g
              key={p.name}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: "pointer" }}
            >
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={isHover ? 28 : 22}
                fill={isHover ? "oklch(0.72 0.16 232)" : "oklch(0.22 0.035 265)"}
                stroke="oklch(1 0 0 / 0.2)"
                filter={isHover ? "url(#ec-glow)" : undefined}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              />
              <text
                x={p.x}
                y={p.y + 4}
                textAnchor="middle"
                className="fill-white pointer-events-none select-none"
                style={{ fontSize: 10, fontWeight: 600 }}
              >
                {p.name}
              </text>
            </g>
          );
        })}
      </svg>

      <style>{`
        @keyframes ec-dash {
          to { stroke-dashoffset: -200; }
        }
      `}</style>
    </div>
  );
}