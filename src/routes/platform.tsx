import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Overview, WhyUs, TechStack, Integrations, Developers, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Platform — SGT Core" },
      { name: "description", content: "The SGT corporate platform: enterprise cloud, APIs, integrations, developer tooling and shared engineering standards." },
      { property: "og:title", content: "SGT Platform" },
      { property: "og:description", content: "Enterprise depth, startup velocity — built on the best of modern engineering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <SiteLayout>
      <div className="pt-32" />
      <Overview />
      <WhyUs />
      <TechStack />
      <Integrations />
      <Developers />
      <CTA />
    </SiteLayout>
  );
}