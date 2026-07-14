import { Link } from "@tanstack/react-router";
import { MapPin, ArrowRight, BedDouble, ShieldCheck } from "lucide-react";
import type { Property } from "@/data/properties";

export function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#C49545]/15 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(196,149,69,0.08)] flex flex-col h-full">
      
      {/* Image Area */}
      <Link 
        to="/properties/$id" 
        params={{ id: p.id }} 
        className="relative aspect-[4/3] overflow-hidden block bg-muted"
      >
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Category Badge overlay */}
        <span className="absolute left-3.5 top-3.5 rounded-lg bg-[#0B1528]/90 backdrop-blur-sm border border-[#C49545]/30 px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-widest text-white">
          {p.badge}
        </span>
      </Link>

      {/* Content Details Area */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Title */}
        <Link 
          to="/properties/$id" 
          params={{ id: p.id }} 
          className="block hover:text-[#C49545] transition-colors duration-200"
        >
          <h3 className="font-display text-base sm:text-lg font-bold text-[#0B1528] leading-snug line-clamp-2 h-12">
            {p.title}
          </h3>
        </Link>

        {/* Location & Map Pin */}
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
          <MapPin className="h-4 w-4 text-[#C49545] shrink-0" />
          <span className="truncate">{p.location}</span>
        </div>

        {/* Price Display */}
        <div className="mt-3.5 flex items-baseline gap-1 text-xl font-extrabold text-[#C49545]">
          <span>{p.price}</span>
        </div>

        {/* Features / Amenities Pills */}
        <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-border/50 flex-grow content-start">
          {p.features.slice(0, 3).map((f) => (
            <span 
              key={f} 
              className="rounded-lg border border-[#C49545]/10 bg-[#FAF9F6] px-2.5 py-1 text-[10px] font-bold text-[#0B1528]/80 uppercase tracking-wide"
            >
              {f}
            </span>
          ))}
          {(p.category === "pg" || p.category === "rent") && (
            <span className="rounded-lg border border-[#C49545]/20 bg-[#C49545]/5 px-2.5 py-1 text-[10px] font-extrabold text-[#C49545] uppercase tracking-wide flex items-center gap-1">
              <ShieldCheck className="h-3.5 w-3.5 text-[#C49545] shrink-0" />
              Brokerage: 21 Days
            </span>
          )}
        </div>

        {/* Action Button */}
        <div className="mt-5">
          <Link
            to="/properties/$id"
            params={{ id: p.id }}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0B1528] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-[#C49545] hover:shadow-[0_6px_20px_rgba(196,149,69,0.3)] active:scale-[0.98] cursor-pointer"
          >
            View Details 
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

    </article>
  );
}
