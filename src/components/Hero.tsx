import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Wallet, Headphones, MapPin, Phone } from "lucide-react";
import heroBuilding from "@/assets/hero-building.webp";

const highlights = [
  { Icon: ShieldCheck, label: "Trusted Deals", desc: "Transparent & Reliable" },
  { Icon: MapPin, label: "Prime Locations", desc: "Best Connectivity" },
  { Icon: Wallet, label: "Best Value for Money", desc: "Great Deals" },
  { Icon: Headphones, label: "After Sales Support", desc: "Always With You" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-foreground pb-20 sm:pb-16 lg:pb-20">
      <div className="container-x grid items-center gap-8 py-10 sm:py-12 md:py-16 lg:grid-cols-[1.05fr_1fr] relative z-10">

        {/* Text Content */}
        <div className="relative z-10 text-center sm:text-left">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#C49545] mb-2">
            Your Trusted
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold leading-tight text-[#0B1528] md:text-5xl lg:text-6xl">
            <span className="text-[#C49545] block">Property Experts in</span>
            <span className="block text-[#0B1528] mt-1">Old Rajinder Nagar</span>
          </h1>
          <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-x-2.5 text-sm md:text-base font-extrabold uppercase tracking-widest text-[#0B1528]">
            <span>Buy</span>
            <span className="text-[#C49545]">•</span>
            <span>Sell</span>
            <span className="text-[#C49545]">•</span>
            <span>Rent</span>
            <span className="text-[#C49545]">•</span>
            <span>PG <span className="font-serif italic font-normal text-muted-foreground">&</span> Hostel</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-sm mx-auto sm:mx-0">
            Find the best residential, commercial and PG properties in Old Rajinder Nagar with trusted
            local experts.
          </p>

          {/* Highlights Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-4 max-w-sm mx-auto sm:max-w-xl sm:mx-0">
            {highlights.map(({ Icon, label, desc }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <div className="mx-auto relative grid h-11 w-11 sm:h-14 sm:w-14 place-items-center rounded-full border border-[#C49545]/20 bg-white text-[#C49545] shadow-[0_4px_10px_rgba(196,149,69,0.15)]">
                  <div className="absolute inset-1 rounded-full border border-dashed border-[#C49545]/40" />
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                </div>
                <div className="mt-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-[#0B1528] leading-tight">
                  {label}
                </div>
                <div className="mt-0.5 text-[9px] sm:text-[10px] text-muted-foreground leading-tight hidden sm:block">
                  {desc}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center sm:justify-start">
            <Link
              to="/buy"
              className="inline-flex items-center gap-2 rounded bg-[#C49545] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-[0_6px_20px_rgba(196,149,69,0.4)] transition hover:brightness-110 cursor-pointer"
            >
              Explore Properties <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded border border-[#C49545] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#C49545] bg-white transition hover:bg-[#C49545] hover:text-white cursor-pointer"
            >
              Contact Now <Phone className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-full min-h-[280px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[560px] w-full flex items-center justify-end">
          {/* Decorative dots */}
          <div className="absolute -top-6 left-1/3 z-0 text-[#C49545]/20 opacity-60 hidden md:block">
            <div className="grid grid-cols-6 gap-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#C49545]" />
              ))}
            </div>
          </div>

          {/* Curved Image Container */}
          <div className="relative w-full sm:w-[95%] h-[90%] overflow-hidden rounded-2xl sm:rounded-l-[45%_50%] border-l-4 border-[#C49545] shadow-luxe">
            <img
              src={heroBuilding}
              alt="Luxury apartment building in Old Rajinder Nagar"
              className="h-full w-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Serve Card — hidden on xs, visible sm+ */}
          <div className="hidden sm:block absolute bottom-8 lg:bottom-16 -left-2 lg:-left-6 z-20 rounded-2xl bg-[#0B1528] p-4 lg:p-5 shadow-xl border border-[#C49545]/30 min-w-[170px] lg:min-w-[200px]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mb-3">
              <MapPin className="h-4 w-4 text-[#C49545]" />
              <span>We Serve</span>
            </div>
            <ul className="space-y-2 text-xs font-semibold text-white/90">
              <li className="flex items-center gap-2">
                <span className="text-[#C49545] font-bold">✓</span> Old Rajinder Nagar
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C49545] font-bold">✓</span> New Rajinder Nagar
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C49545] font-bold">✓</span> Karol Bagh
              </li>
            </ul>
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
