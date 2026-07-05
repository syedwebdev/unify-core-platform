import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CursorGlow } from "@/components/motion/primitives";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SGT — Building the Core Infrastructure for Modern Business Software" },
      { name: "description", content: "SGT is a technology organization of specialized departments building intelligent software, AI, automation, and enterprise infrastructure that powers modern business." },
      { name: "author", content: "SGT" },
      { property: "og:title", content: "SGT — A Technology Ecosystem of Specialized Departments" },
      { property: "og:description", content: "One organization. Many specialized departments. Building the core infrastructure for modern business software." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "/sgt-logo.png" },
      { name: "twitter:image", content: "/sgt-logo.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/sgt-logo.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/sgt-logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Geist+Mono:wght@500;700&family=VT323&family=Geist+Pixel&family=Instrument+Serif:ital@0;1&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <PageTransitionLoader />
      <CursorGlow />
      <SmoothScroll>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </SmoothScroll>
    </QueryClientProvider>
  );
}

function PageTransitionLoader() {
  const isLoading = useRouterState({ select: (s) => s.isLoading || s.isTransitioning });
  const [visible, setVisible] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    // Show a brief intro reveal on first mount
    if (firstLoad) {
      setVisible(true);
      const t = setTimeout(() => {
        setVisible(false);
        setFirstLoad(false);
      }, 900);
      return () => clearTimeout(t);
    }
  }, [firstLoad]);

  useEffect(() => {
    if (firstLoad) return;
    if (isLoading) {
      setVisible(true);
    } else {
      const t = setTimeout(() => setVisible(false), 350);
      return () => clearTimeout(t);
    }
  }, [isLoading, firstLoad]);

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,120,255,0.12),transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 -m-6 rounded-full bg-primary/20 blur-2xl animate-pulse" />
          <img
            src="/sgt-logo.png"
            alt="SGT"
            className="relative h-16 w-16 object-contain animate-[logoReveal_900ms_cubic-bezier(0.22,1,0.36,1)_forwards]"
          />
        </div>
        <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[loaderSweep_1.2s_ease-in-out_infinite]" />
        </div>
      </div>
      <style>{`
        @keyframes logoReveal {
          0% { opacity: 0; transform: scale(0.85); filter: blur(8px); }
          60% { opacity: 1; filter: blur(0); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        @keyframes loaderSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
}
