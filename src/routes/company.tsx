import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, GroupStructure, Vision, Engagement, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — SGT Core" },
      { name: "description", content: "SYED GLOBAL TECHNOLOGIES — parent holding company of 17 SYED MNCs. Our role, core functions, vision and how to engage with the group." },
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
      <GroupStructure />
      <Vision />
      <Engagement />
      <CTA />
    </SiteLayout>
  );
}