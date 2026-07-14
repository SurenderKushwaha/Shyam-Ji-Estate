import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { BRAND } from "@/lib/brand";
import logoImg from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/pg-hostel", label: "PG & Hostel" },
  { to: "/rent", label: "Rent Property" },
  { to: "/buy", label: "Buy Property" },
  { to: "/commercial", label: "Commercial" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hidden lg:block sticky top-0 z-50 bg-background/95 backdrop-blur shadow-sm">
      {/* Main nav */}
      <div className="container-x flex items-center justify-between py-1 md:py-1.5">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={logoImg}
            alt="Shyam Ji Estate Logo"
            className="h-12 sm:h-14 md:h-16 object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-xs xl:text-sm font-semibold uppercase tracking-wide text-primary/80 transition hover:text-accent whitespace-nowrap"
              activeProps={{ className: "text-accent border-b-2 border-accent pb-1" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${BRAND.phones[0]}`}
            className="hidden md:inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-xs font-bold uppercase text-accent-foreground shadow-gold transition hover:brightness-110 whitespace-nowrap"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>

          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 text-primary rounded-md hover:bg-muted transition-colors"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t bg-background shadow-lg">
          <div className="container-x py-4 flex flex-col gap-0.5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="flex items-center py-3 px-2 text-sm font-semibold uppercase tracking-wide text-primary rounded-lg hover:bg-muted transition-colors"
                activeProps={{ className: "text-accent bg-accent/5" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border/40">
              <a
                href={`tel:${BRAND.phones[0]}`}
                className="flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold uppercase text-accent-foreground"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
