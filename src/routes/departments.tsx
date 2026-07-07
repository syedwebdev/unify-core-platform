import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Departments, SySoftShowcase, CTA } from "@/components/site/sections";

export const Route = createFileRoute("/departments")({
  head: () => ({
    meta: [
      { title: "Departments — SGT Core" },
      { name: "description", content: "Fifteen specialized SGT divisions — WebDev, SySoft, AIAB, Auto RPA, ERP-CRM, EdTech, FinTech, DBMS, CSS, SAD, ITIS, DMT, WAPO, DS, RAO." },
      { property: "og:title", content: "SGT Departments" },
      { property: "og:description", content: "Fifteen divisions, one unified ecosystem." },
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
      <SySoftShowcase />
      <CTA />
    </SiteLayout>
  );
}