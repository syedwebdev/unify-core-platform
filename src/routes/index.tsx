import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Hero, LogoMarquee, Overview, EcosystemSection, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SGT Core — The Corporate Technology Ecosystem" },
      { name: "description", content: "SGT is a technology organization of specialized departments engineering AI, automation, cloud and enterprise systems." },
      { property: "og:title", content: "SGT Core — The Corporate Technology Ecosystem" },
      { property: "og:description", content: "One organization. Fifteen specialized departments. The core of modern business software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <SiteLayout>
      <Hero />
      <LogoMarquee />
      <Overview />
      <EcosystemSection />
      <CTA />
    </SiteLayout>
  );
}