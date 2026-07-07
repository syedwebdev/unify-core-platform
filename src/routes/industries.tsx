import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Industries, Stats, Testimonials, Security, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — SGT Core" },
      { name: "description", content: "SGT serves retail, healthcare, education, hospitality, logistics, government and enterprises with specialized technology divisions." },
      { property: "og:title", content: "Industries served by SGT" },
      { property: "og:description", content: "Serving businesses across every industry with enterprise-grade technology." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <SiteLayout>
      <div className="pt-32" />
      <Industries />
      <Stats />
      <Testimonials />
      <Security />
      <CTA />
    </SiteLayout>
  );
}