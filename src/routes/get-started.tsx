import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/sections";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/get-started")({
  head: () => ({
    meta: [
      { title: "Get started — SGT Core" },
      { name: "description", content: "Get started with the SGT ecosystem — partnership, innovation programs and platform access." },
    ],
  }),
  component: GetStartedPage,
});

function GetStartedPage() {
  return (
    <SiteLayout>
      <section className="min-h-screen grid place-items-center px-6 pt-32 pb-24">
        <div className="w-full max-w-lg glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative">
            <h1 className="font-display text-3xl font-bold">Get started with SGT</h1>
            <p className="mt-2 text-sm text-muted-foreground">Tell us about your organization and the SGT team will route your inquiry to the right department.</p>
            <form className="mt-8 grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Full name</label>
                  <input required className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Company</label>
                  <input required className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Work email</label>
                <input type="email" required className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">How can SGT help?</label>
                <textarea rows={4} className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
              </div>
              <button type="submit" className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white">
                Submit inquiry <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-6 text-sm text-muted-foreground text-center">
              Already have access? <Link to="/signin" className="text-foreground hover:text-[color:var(--brand-2)]">Sign in</Link>
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}