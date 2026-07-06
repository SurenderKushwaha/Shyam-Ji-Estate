import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHero({
  title,
  crumb,
  subtitle,
}: {
  title: string;
  crumb: string;
  subtitle?: string;
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0B1528 0%, #15243d 50%, #0B1528 100%)",
      }}
    >
      {/* Decorative golden glow top-right */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #C49545 0%, transparent 70%)" }}
      />
      {/* Decorative golden glow bottom-left */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full opacity-8"
        style={{ background: "radial-gradient(circle, #C49545 0%, transparent 70%)" }}
      />

      <div className="container-x relative z-10 py-10 sm:py-14 md:py-16">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-wider text-white/50 mb-4">
          <Link to="/" className="hover:text-[#C49545] transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3 text-[#C49545]/60" />
          <span className="text-[#C49545] font-semibold">{crumb}</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase leading-tight tracking-tight text-center">
          {title}
        </h1>

        {/* Optional subtitle */}
        {subtitle && (
          <p className="mt-3 text-white/60 text-sm md:text-base text-center max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* Gold divider line */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#C49545]/40" />
          <span className="text-[#C49545] text-xs">◆</span>
          <span className="h-px w-12 bg-[#C49545]/40" />
        </div>
      </div>
    </section>
  );
}

