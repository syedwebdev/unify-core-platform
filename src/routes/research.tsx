import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, AIPlatform, CTA } from "@/components/site/sections";
import { NeuralSection } from "@/components/ai/NeuralSection";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: "Research — SGT Core" },
      { name: "description", content: "AIAB — the SGT division for Artificial Intelligence, Machine Learning and Deep Learning — powering applied intelligence across the ecosystem." },
      { property: "og:title", content: "SGT Research · AIAB" },
      { property: "og:description", content: "Applied AI, engineered by AIAB." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  return (
    <SiteLayout>
      <div className="pt-32" />
      <AIPlatform />
      <NeuralSection />
      <CTA />
    </SiteLayout>
  );
}