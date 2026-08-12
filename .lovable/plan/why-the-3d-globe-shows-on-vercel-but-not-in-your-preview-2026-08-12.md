# Why the 3D globe shows on Vercel but not in your preview

Nothing is broken and nothing is missing from this project. The 3D scenes are deliberately gated to screens **768px wide and up**:

- `Hero` in `src/components/site/sections.tsx` only mounts `HeroScene` when `matchMedia("(min-width: 768px)")` matches (and when reduced-motion is off).
- Your current preview viewport is **690px wide**, so the gate returns false and only the flat 2D neural background renders.
- On Vercel you were looking at a desktop-width window, so the same code mounts the 3D scene.

The same gate also skips 3D for anyone who has "reduce motion" enabled at the OS level.

## Plan: make the 3D visible on mobile too (lightweight mode)

1. Lower the 3D gate in `Hero` from 768px to all widths, keeping the reduced-motion opt-out.
2. Add a mobile-tuned quality mode so phones stay smooth:
   - lower `dpr` cap (1 instead of 1.5)
   - pull the camera back / reduce sphere segment counts
   - fewer orbit nodes
   - skip the heavier post-processing passes (chromatic aberration) on small screens
3. Apply the same width/quality treatment to the neural brain scene (`NeuralSection` / `NeuralBrainScene`) so the AI section also renders on mobile.
4. Verify in the 690px preview that the canvas mounts and the hero text stays readable above it.

## Technical notes

Changes are limited to `src/components/site/sections.tsx`, `src/components/hero/HeroScene.tsx`, `src/components/ai/NeuralSection.tsx`, and `src/components/ai/NeuralBrainScene.tsx`. No dependency changes: `three`, `@react-three/fiber`, `drei`, and `postprocessing` are already installed. Scenes stay lazy-loaded and client-only, so SSR behaviour is unchanged.

If you would rather keep phones 2D-only for performance, the alternative is to leave the gate as is — in that case the answer is simply "resize the preview to desktop width to see the globe."
