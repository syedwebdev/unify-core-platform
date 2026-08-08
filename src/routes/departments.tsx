import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Departments, GroupStructure, SySoftShowcase, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "The 17 SYED MNCs — SGT" },
      { name: "description", content: "Seventeen specialized SYED MNCs — 4GL, RAD, SAD, AUTO/RPA, DBMS, DMT, ONE, WEB-DEV, AI-ML-DL, CS, CSS, DS, ITIS, AIIS, NS, WAPL, AIAB — each with features, products, pricing, clients, challenges and roadmap." },
      { property: "og:title", content: "The SYED MNCs" },
      { property: "og:description", content: "Seventeen MNCs, one parent company." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DepartmentsPage,
});

function DepartmentsPage() {
  return (
    <SiteLayout>
      <div className="pt-32" />
      <Departments />
      <GroupStructure />
      <SySoftShowcase />
      <CTA />
    </SiteLayout>
  );
}