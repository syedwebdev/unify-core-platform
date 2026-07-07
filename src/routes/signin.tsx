import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/sections";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/signin")({
  head: () => ({
    meta: [
      { title: "Sign in — SGT Core" },
      { name: "description", content: "Sign in to the SGT Core corporate platform." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: SignInPage,
});

function SignInPage() {
  return (
    <SiteLayout>
      <section className="min-h-screen grid place-items-center px-6 pt-32 pb-24">
        <div className="w-full max-w-md glass rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="relative">
            <h1 className="font-display text-3xl font-bold">Welcome back</h1>
            <p className="mt-2 text-sm text-muted-foreground">Sign in to the SGT Core corporate platform.</p>
            <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Work email</label>
                <input type="email" required className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Password</label>
                <input type="password" required className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand)]" placeholder="••••••••" />
              </div>
              <button type="submit" className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-medium text-white">
                Sign in <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-6 text-sm text-muted-foreground text-center">
              New to SGT? <Link to="/get-started" className="text-foreground hover:text-[color:var(--brand-2)]">Get started</Link>
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}