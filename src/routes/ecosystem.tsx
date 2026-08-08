import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, LogoMarquee, EcosystemSection, Overview, GroupStructure, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "Ecosystem — SGT Core" },
      { name: "description", content: "Explore the SGT group — one parent company, seventeen connected SYED MNCs collaborating on a shared engineering core." },
      { property: "og:title", content: "The SGT Ecosystem" },
      { property: "og:description", content: "One parent company, seventeen connected MNCs engineering the future of business software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EcosystemPage,
});

function EcosystemPage() {
  return (
    <SiteLayout>
      <div className="pt-32" />
      <LogoMarquee />
      <EcosystemSection />
      <Overview />
      <GroupStructure />
      <CTA />
    </SiteLayout>
  );
}