import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Vision, Engagement, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — SGT Core" },
      { name: "description", content: "SGT — a global technology organization of specialized departments. Learn about our vision and how to engage with the ecosystem." },
      { property: "og:title", content: "About SGT" },
      { property: "og:description", content: "A technology ecosystem engineering the future of business software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CompanyPage,
});

function CompanyPage() {
  return (
    <SiteLayout>
      <div className="pt-32" />
      <Vision />
      <Engagement />
      <CTA />
    </SiteLayout>
  );
}