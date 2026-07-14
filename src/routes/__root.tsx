import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { WhatsAppFab } from "../components/WhatsAppFab";
import { PageLoader } from "../components/PageLoader";
import { BottomNav } from "../components/BottomNav";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-bold uppercase text-accent-foreground">
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

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-accent px-4 py-2 text-sm font-bold uppercase text-accent-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border px-4 py-2 text-sm font-medium">Go home</a>
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
      { title: "Shyam Ji Estate - Real Estate in Old Rajinder Nagar" },
      {
        name: "description",
        content:
          "Shyam Ji Estate is your trusted property consultant in Old Rajinder Nagar, offering premium builder floors, apartments, PGs, and commercial spaces.",
      },
      { property: "og:site_name", content: "Shyam Ji Estate" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Shyam Ji Estate",
          image: "/logo.png",
          description: "Shyam Ji Estate is the premier real estate agency and property dealer in Old Rajinder Nagar (ORN), Karol Bagh, and New Rajinder Nagar, specializing in premium builder floors, flats, PGs, and commercial spaces.",
          telephone: ["+91-8595777428", "+91-9311510866"],
          email: "info@shyamjiestate.com",
          url: "https://shyamjiestate.com",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No 56, Near Batra Medical, Old Rajinder Nagar",
            addressLocality: "New Delhi",
            postalCode: "110060",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "28.6389",
            longitude: "77.1895"
          },
          areaServed: [
            {
              "@type": "AdministrativeArea",
              name: "Old Rajinder Nagar"
            },
            {
              "@type": "AdministrativeArea",
              name: "New Rajinder Nagar"
            },
            {
              "@type": "AdministrativeArea",
              name: "Karol Bagh"
            }
          ]
        }),
      },
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
      <PageLoader />
      <SiteHeader />
      <main className="pb-16 lg:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppFab />
      <BottomNav />
    </QueryClientProvider>
  );
}
