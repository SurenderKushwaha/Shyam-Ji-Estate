import { Home, Handshake, BedDouble, Store, Headphones, ArrowRight, ShieldCheck, MapPin, IndianRupee } from "lucide-react";

const services = [
  { Icon: Home, title: "Buy Property", desc: "Find your dream home in Old Rajinder Nagar with the best deals." },
  { Icon: Handshake, title: "Rent Property", desc: "Wide range of rental properties for families and professionals." },
  { Icon: BedDouble, title: "PG & Hostel", desc: "Comfortable and safe PG accommodations for students & working professionals." },
  { Icon: Store, title: "Commercial", desc: "Shops, offices and commercial spaces for your business growth." },
  { Icon: Headphones, title: "Property Consultancy", desc: "Get expert advice and assistance for all your property needs." },
];

export function ServicesGrid() {
  return (
    <section className="bg-[#FAF9F6] py-16 md:py-20 border-t border-border/40">
      <div className="container-x">
        
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-widest text-[#0B1528] flex items-center justify-center gap-3 sm:gap-4">
            <span className="text-[#C49545] font-semibold">—</span> Our Services <span className="text-[#C49545] font-semibold">—</span>
          </h2>
          <div className="mx-auto mt-3 flex items-center justify-center gap-3">
            <span className="h-0.5 w-16 bg-[#C49545]/40" />
            <span className="text-[#C49545] text-xs font-semibold">♦</span>
            <span className="h-0.5 w-16 bg-[#C49545]/40" />
          </div>
          <p className="mt-4 text-xs md:text-sm text-muted-foreground font-semibold">
            Comprehensive property solutions tailored to your needs
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {services.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#C49545]/15 bg-white p-6 text-center shadow-[0_8px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-luxe flex flex-col justify-between"
            >
              <div>
                {/* Double ring icon */}
                <div className="relative mx-auto h-20 w-20 flex items-center justify-center">
                  {/* Dashed outer ring */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#C49545]/60 group-hover:animate-[spin_40s_linear_infinite]" />
                  {/* Inner solid circle */}
                  <div className="relative h-14 w-14 rounded-full border border-[#C49545]/30 bg-white grid place-items-center text-[#0B1528] shadow-sm transition-all duration-300 group-hover:border-[#C49545] group-hover:bg-[#0B1528] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="mt-5 font-display text-xs md:text-sm font-extrabold uppercase tracking-wider text-[#0B1528] leading-tight">
                  {title}
                </h3>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>

              <div className="mt-6 inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C49545] cursor-pointer hover:underline">
                Read More <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-16 pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-y-6 gap-x-4 md:gap-x-12">
          {/* Feature 1 */}
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#0B1528] text-white shadow-sm">
              <ShieldCheck className="h-5 w-5 text-[#C49545]" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wide text-[#0B1528]">100% Trusted</div>
              <div className="text-[10px] text-muted-foreground leading-tight">Local Experts</div>
            </div>
          </div>

          <span className="hidden md:block h-8 w-px bg-border/80" />

          {/* Feature 2 */}
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#C49545] text-white shadow-sm">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wide text-[#0B1528]">Prime Locations</div>
              <div className="text-[10px] text-muted-foreground leading-tight">Best Connectivity</div>
            </div>
          </div>

          <span className="hidden md:block h-8 w-px bg-border/80" />

          {/* Feature 3 */}
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#0B1528] text-white shadow-sm">
              <IndianRupee className="h-4 w-4 text-[#C49545]" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wide text-[#0B1528]">Best Value</div>
              <div className="text-[10px] text-muted-foreground leading-tight">For Money</div>
            </div>
          </div>

          <span className="hidden md:block h-8 w-px bg-border/80" />

          {/* Feature 4 */}
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-[#C49545] text-[#0B1528] shadow-sm">
              <Headphones className="h-5 w-5 text-[#0B1528]" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-wide text-[#0B1528]">Dedicated Support</div>
              <div className="text-[10px] text-muted-foreground leading-tight">Always With You</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
