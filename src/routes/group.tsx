import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, CTA } from "@/components/site/sections";
import { divisions, parent, nextSteps, type Division } from "@/data/divisions";

export const Route = createFileRoute("/group")({
  head: () => ({
    meta: [
      { title: "The SGT Group — Syed Global Technologies & Its 17 MNCs" },
      { name: "description", content: "Full corporate profile of Syed Global Technologies (SGT) and every SYED MNC: features, products, business model, pricing, clients, challenges, upgrades, expansion and roadmap." },
      { property: "og:title", content: "The SGT Group — 17 Specialized Global MNCs" },
      { property: "og:description", content: "SGT is the parent holding company. Each SYED MNC is a specialized global vertical. Together: end-to-end digital world coverage." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GroupPage,
});

function Block({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;
  return (
    <div className="min-w-0">
      <h4 className="font-display text-xs uppercase tracking-[0.18em] text-accent">{title}</h4>
      <ul className="mt-2 space-y-1.5">
        {items.map((i) => (
          <li key={i} className="flex gap-2 text-sm text-muted-foreground">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
            <span className="min-w-0">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DivisionCard({ d, index }: { d: Division; index: number }) {
  return (
    <article className="glass rounded-3xl p-6 md:p-8">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
        <div className="min-w-0">
          <p className="font-pixel text-sm text-accent">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-1 text-2xl font-bold">{d.name}</h3>
          <p className="text-sm text-muted-foreground">{d.full}</p>
        </div>
        <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium">{d.code}</span>
      </header>

      <p className="mt-4 text-sm text-foreground/80">{d.tagline}</p>
      {d.what && (
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <h4 className="font-display text-xs uppercase tracking-[0.18em] text-accent">What it is</h4>
          <p className="mt-2 text-sm text-muted-foreground">{d.what}</p>
        </div>
      )}

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Block title="Focus" items={d.focus} />
        <Block title="Features" items={d.features} />
        <Block title="Why Choose Us?" items={d.why} />
        <Block title="Products & Services" items={d.products} />
        <Block title="Business Model" items={d.businessModel} />
        <Block title="Pricing" items={d.pricing} />
        <Block title="Revenue & Clients" items={d.revenue} />
        <Block title="Challenges" items={d.challenges} />
        <Block title="Upgrade Ideas" items={d.upgrades} />
        <Block title="Expansion Plan" items={d.expansion} />
        <Block title="Roadmap" items={d.roadmap} />
      </div>
    </article>
  );
}

function GroupPage() {
  return (
    <SiteLayout>
      <section className="px-4 pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-widest uppercase text-muted-foreground">
            Corporate Structure
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            <span className="text-gradient">{parent.name}</span>
          </h1>
          <p className="mt-3 font-display text-sm uppercase tracking-[0.3em] text-accent">{parent.role}</p>
          <p className="mt-6 text-muted-foreground">
            SGT is a real global parent MNC. Every child MNC below is documented separately — clear structure, no mixing,
            end-to-end clarity, the way real holding companies document their verticals.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="glass rounded-3xl p-6 md:p-8">
            <Block title="Role" items={parent.rolePoints} />
          </div>
          <div className="glass rounded-3xl p-6 md:p-8">
            <Block title="Core Functions" items={parent.coreFunctions} />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">Each MNC, explained separately</h2>
          <p className="mt-2 text-muted-foreground">No overlap. No confusion.</p>
          <div className="mt-10 space-y-8">
            {divisions.map((d, i) => (
              <DivisionCard key={d.code} d={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-5xl glass rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">The final big picture</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {parent.bigPicture.map((b) => (
              <p key={b} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 font-display text-lg">
                {b}
              </p>
            ))}
          </div>
          <h3 className="mt-10 font-display text-xs uppercase tracking-[0.18em] text-accent">What comes next</h3>
          <ul className="mt-3 grid gap-2 md:grid-cols-2">
            {nextSteps.map((s) => (
              <li key={s} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                <span className="min-w-0">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </SiteLayout>
  );
}
