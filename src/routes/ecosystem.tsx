import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, LogoMarquee, EcosystemSection, Overview, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({
    meta: [
      { title: "Ecosystem — SGT Core" },
      { name: "description", content: "Explore the SGT ecosystem — one core, fifteen connected technology divisions collaborating on a shared engineering platform." },
      { property: "og:title", content: "The SGT Ecosystem" },
      { property: "og:description", content: "One core, fifteen connected divisions engineering the future of business software." },
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
      <CTA />
    </SiteLayout>
  );
}