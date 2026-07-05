
# SGT — Cinematic Experience Upgrade

This is a large upgrade. To keep the site fast, stable, and consistent with the current premium look, I'll ship it in **four focused phases** instead of one giant rewrite. You can approve the whole plan, or tell me to skip/reorder phases.

## Phase 1 — Foundation: motion + interaction primitives
Ship the invisible plumbing first so every later section feels cohesive.

- Install `framer-motion` and `lenis` (smooth inertia scroll).
- Add a `MotionProvider` wrapping the app with Lenis smooth scroll + `prefers-reduced-motion` respect.
- Add reusable primitives in `src/components/motion/`:
  - `MagneticButton` — cursor-attracted CTAs with spring physics.
  - `TiltCard` — 3D tilt + glare on hover for department/product cards.
  - `RevealText` / `WordStagger` — scroll-triggered letter/word reveals.
  - `CursorGlow` — soft global cursor spotlight (desktop only).
  - `ParallaxLayer` — scroll-based Y/opacity/scale.
- Add global CSS tokens for premium glass, aurora, and volumetric glow (extend `src/styles.css`).

## Phase 2 — Hero: 3D scene + neural background
Replace the current static hero visuals (keep the current headline + typing animation) with a cinematic hero.

- Install `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`.
- Build `HeroScene` (R3F):
  - Central slowly-rotating **wireframe/glass technology sphere** with subtle displacement.
  - Orbiting **network nodes** connected by animated lines (the SGT ecosystem preview).
  - HDR environment (`Environment preset="city"`), rim + ambient lights, soft shadows.
  - Post-processing: `Bloom`, mild `ChromaticAberration`, `Vignette`, DoF.
  - Mouse-driven camera parallax (damped).
  - Suspense fallback = current gradient hero, so first paint stays instant.
- Add SVG **neural network** canvas layer behind the 3D (animated with requestAnimationFrame, capped at 60fps, paused off-screen).
- Floating **holographic UI panels** (glass cards with live-looking stats) using framer-motion float loops.
- Preserve the existing typing headline and CTA copy.

## Phase 3 — Sections: scroll storytelling
- **Departments**: convert cards to `TiltCard` with animated gradient borders, inner glow, and staggered scroll reveal. Add a dedicated **Ecosystem Map** section: SGT at center, animated SVG lines to all 15 departments; hovering a node highlights its edges and dims others; clicking opens the existing modal.
- **SySoft product showcase**: each product card becomes a mock SaaS dashboard (floating panels, animated bar/line chart, live status chip, subtle mouse tilt).
- **Statistics**: counters use `useInView` + number rolling; add circular progress rings.
- **AI Platform section**: animated neural graph (nodes pulse, connections travel light beads).
- **Section transitions**: sticky gradient dividers + background color morph tied to scroll progress.

## Phase 4 — Polish + performance
- Magnetic primary buttons across nav/hero/CTA.
- Micro-interactions: icon rotation on hover, shimmer on load, ripple on click.
- **Performance guardrails** (non-negotiable):
  - Lazy-load `HeroScene` via `React.lazy` + Suspense; only mount when the hero is in view.
  - Mobile (`< 768px`) and `prefers-reduced-motion` users get a **static premium fallback** (current hero + CSS aurora) — no R3F, no Lenis hijack, no cursor glow.
  - Cap DPR at `[1, 1.5]`, `frameloop="demand"` where possible, freeze the scene when tab hidden.
  - Code-split heavy sections; keep initial JS budget in check.
  - Keep `og:image`, favicon, and current SEO metadata intact.

## Technical notes
- Stack additions: `framer-motion`, `lenis`, `three`, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`.
- No backend changes. No route changes. Existing department data, modal, and copy are preserved.
- All new colors/gradients go through `src/styles.css` tokens (no hard-coded hex in components).
- Every 3D/motion feature has a static CSS fallback so the site still looks premium if WebGL is unavailable.

## Suggested delivery order
I recommend I start with **Phase 1 + Phase 2** in the next turn (biggest visible impact), then Phase 3, then Phase 4. Reply with "go" to proceed, or tell me which phases to skip/reorder.
