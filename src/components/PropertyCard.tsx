import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import type { Property } from "@/data/properties";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group overflow-hidden rounded-lg bg-card shadow-card transition hover:-translate-y-1 hover:shadow-luxe flex flex-col h-full">
      <Link to="/properties/$id" params={{ id: p.id }} className="relative aspect-[4/3] overflow-hidden block">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
          {p.badge}
        </span>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <Link to="/properties/$id" params={{ id: p.id }} className="hover:text-accent transition">
          <h3 className="font-display text-lg font-bold text-primary">{p.title}</h3>
        </Link>
        <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-accent" /> {p.location}
        </div>
        <div className="mt-2 text-lg font-bold text-accent">{p.price}</div>
        <div className="mt-3 flex flex-wrap gap-2 border-t pt-3 text-xs text-muted-foreground flex-grow">
          {p.features.map((f) => (
            <span key={f} className="rounded bg-muted px-2 py-1">{f}</span>
          ))}
          {(p.category === "pg" || p.category === "rent") && (
            <span className="rounded bg-[#C49545]/10 text-accent px-2 py-1 font-semibold">Brokerage: 21 Days</span>
          )}
        </div>
        <div className="mt-4 pt-3 border-t">
          <Link
            to="/properties/$id"
            params={{ id: p.id }}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent transition hover:text-primary"
          >
            View Details <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
