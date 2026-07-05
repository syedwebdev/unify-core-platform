"use client";
import { useRef, useEffect, useState, type ReactNode, type CSSProperties } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";

/* ------------ MagneticButton ------------ */
export function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  as: Tag = "a",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: any;
  [k: string]: any;
}) {
  const ref = useRef<HTMLElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.3 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.3 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      x.set((e.clientX - cx) * strength);
      y.set((e.clientY - cy) * strength);
    };
    const onLeave = () => { x.set(0); y.set(0); };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, x, y]);

  const MotionTag = motion(Tag) as any;
  return (
    <MotionTag ref={ref as any} style={{ x, y }} className={className} {...rest}>
      {children}
    </MotionTag>
  );
}

/* ------------ TiltCard ------------ */
export function TiltCard({
  children,
  className = "",
  intensity = 8,
  glare = true,
  style,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [intensity, -intensity]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-intensity, intensity]), { stiffness: 200, damping: 20 });
  const gx = useTransform(mx, (v) => `${v * 100}%`);
  const gy = useTransform(my, (v) => `${v * 100}%`);

  const onMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => { mx.set(0.5); my.set(0.5); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", ...style }}
      className={`relative will-change-transform ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: useTransform(
              [gx, gy] as any,
              ([xv, yv]: any) =>
                `radial-gradient(400px circle at ${xv} ${yv}, rgba(255,255,255,0.14), transparent 45%)`
            ) as any,
          }}
        />
      )}
    </motion.div>
  );
}

/* ------------ RevealText (word stagger) ------------ */
export function RevealText({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: any;
}) {
  const words = text.split(" ");
  const MotionTag = motion(Tag) as any;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.05, delayChildren: delay }}
      variants={{ hidden: {}, show: {} }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { y: "0.6em", opacity: 0, filter: "blur(8px)" },
            show: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          {w}
        </motion.span>
      ))}
    </MotionTag>
  );
}

/* ------------ CursorGlow ------------ */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useSpring(0, { stiffness: 120, damping: 20, mass: 0.4 });
  const y = useSpring(0, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[60] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
      style={{
        left: x,
        top: y,
        background: "radial-gradient(circle, oklch(0.72 0.16 232 / 0.14), transparent 60%)",
        filter: "blur(30px)",
      }}
    />
  );
}

/* ------------ CountUp ------------ */
export function CountUp({
  to,
  duration = 1600,
  suffix = "",
  prefix = "",
  className = "",
}: {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}