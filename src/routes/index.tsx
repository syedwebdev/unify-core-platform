import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Hero, LogoMarquee, Overview, GroupStructure, EcosystemSection, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SGT Core — The Corporate Technology Ecosystem" },
      { name: "description", content: "SYED GLOBAL TECHNOLOGIES is the parent holding company of 17 specialized SYED MNCs across 4GL, RAD, automation, data, cloud, security and AI." },
      { property: "og:title", content: "SGT Core — The Corporate Technology Ecosystem" },
      { property: "og:description", content: "One parent company. Seventeen specialized global MNCs. End-to-end digital world coverage." },
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
      <GroupStructure />
      <EcosystemSection />
      <CTA />
    </SiteLayout>
  );
}