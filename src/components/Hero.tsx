import { MapPin, Key } from "lucide-react";
import { PropertySearch, type SearchFilters } from "./PropertySearch";
import heroBuilding from "@/assets/hero-building.webp";

export function Hero({
  filters,
  onChange,
  onSearch,
}: {
  filters: SearchFilters;
  onChange: (key: keyof SearchFilters, value: string) => void;
  onSearch: () => void;
}) {
  return (
    <section 
      className="relative bg-[#0B1528] text-white pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBuilding})` }}
    >
      {/* Dark overlay to ensure contrast and premium feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1528]/95 via-[#0B1528]/85 to-[#0B1528]/95 pointer-events-none" />

      <div className="container-x relative z-10">
        
        {/* Left-aligned Content Column */}
        <div className="max-w-4xl text-left">
          
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#C49545]/40 bg-[#C49545]/10 px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C49545] mb-5">
            <Key className="h-3.5 w-3.5 text-[#C49545]" /> Real Estate Reimagined
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight text-white md:text-6xl tracking-tight">
            Find Your <span className="text-[#C49545]">Perfect Home</span>
          </h1>

          {/* Subheading / Description */}
          <p className="mt-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 max-w-2xl font-medium">
            Premium flats, builder floors, PGs, and commercial spaces in Old Rajinder Nagar, New Rajinder Nagar & Karol Bagh. Find your ideal home with Old Rajinder Nagar's most trusted real estate agency.
          </p>

          {/* Integrated Search Widget */}
          <div className="mt-8 sm:mt-10 max-w-4xl w-full">
            <PropertySearch
              filters={filters}
              onChange={onChange}
              onSearch={onSearch}
            />
          </div>

        </div>

      </div>

      {/* Serving Areas Pill */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-[95%] max-w-4xl px-2">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-2xl sm:rounded-full bg-[#0B1528] px-5 py-3 sm:px-8 sm:py-3.5 text-center text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-lg border border-[#C49545]/30">
          <span className="text-[#C49545] flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> Serving Areas:
          </span>
          <span className="text-white font-semibold">Old Rajinder Nagar</span>
          <span className="text-[#C49545]/60 hidden sm:inline">|</span>
          <span className="text-white font-semibold">New Rajinder Nagar</span>
          <span className="text-[#C49545]/60 hidden sm:inline">|</span>
          <span className="text-white font-semibold">Karol Bagh</span>
        </div>
      </div>
    </section>
  );
}
