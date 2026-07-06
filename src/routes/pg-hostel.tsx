import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  ShieldCheck, 
  MapPin, 
  IndianRupee, 
  Headphones, 
  Search, 
  ArrowRight, 
  Home, 
  Heart, 
  Bed,
  ChevronDown,
  Clock,
  Users,
  UtensilsCrossed,
  BedDouble,
  Phone
} from "lucide-react";
import { useState } from "react";
import { properties } from "@/data/properties";
import { InquiryForm } from "@/components/InquiryForm";
import galleryBedroom from "@/assets/gallery-bedroom.webp";
import armchairImg from "@/assets/armchair.webp";

export const Route = createFileRoute("/pg-hostel")({
  head: () => ({
    meta: [
      { title: "PG & Hostel | Shyam Ji Estate" },
      { name: "description", content: "Find safe, fully furnished PG and hostel accommodations for girls and boys in Old Rajinder Nagar and Karol Bagh." },
      { property: "og:title", content: "PG & Hostel | Shyam Ji Estate" },
      { property: "og:url", content: "/pg-hostel" },
    ],
    links: [{ rel: "canonical", href: "/pg-hostel" }],
  }),
  component: PgPage,
});

function getPropertyNumericPrice(priceStr: string): number {
  const clean = priceStr.replace(/[₹,]/g, "").trim();
  if (clean.includes("Month")) {
    const num = parseInt(clean.replace("/ Month", "").trim(), 10);
    return num;
  }
  return 0;
}

function PgPage() {
  const [location, setLocation] = useState("");
  const [pgType, setPgType] = useState("");
  const [roomType, setRoomType] = useState("");
  const [budget, setBudget] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const filteredList = properties
    .filter((p) => p.category === "pg")
    .filter((p) => {
      if (location && p.location.toLowerCase() !== location.toLowerCase()) return false;
      if (pgType) {
        const titleLower = p.title.toLowerCase();
        if (pgType === "Boys" && !titleLower.includes("boys")) return false;
        if (pgType === "Girls" && !titleLower.includes("girls")) return false;
      }
      if (roomType) {
        const hasRoomType = p.features.some(f => f.toLowerCase() === roomType.toLowerCase());
        if (!hasRoomType) return false;
      }
      if (budget) {
        const amount = getPropertyNumericPrice(p.price);
        if (budget === "Under ₹12k") {
          if (amount >= 12000) return false;
        } else if (budget === "₹12k - ₹15k") {
          if (amount < 12000 || amount > 15000) return false;
        } else if (budget === "₹15k+") {
          if (amount < 15000) return false;
        }
      }
      return true;
    });

  const sortedList = [...filteredList].sort((a, b) => {
    const priceA = getPropertyNumericPrice(a.price);
    const priceB = getPropertyNumericPrice(b.price);
    if (sortBy === "price-asc") return priceA - priceB;
    if (sortBy === "price-desc") return priceB - priceA;
    return 0;
  });

  return (
    <>
      <section className="relative overflow-hidden bg-white py-10 sm:py-14 lg:py-20 border-b border-border/40">
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] relative z-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C49545]">
              Comfortable Stays. Great Living.
            </p>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold leading-tight text-[#0B1528] md:text-5xl lg:text-6xl">
              PG &amp; Hostel<br />
              <span className="text-[#C49545]">In Old Rajinder Nagar</span>
            </h1>
            <div className="mt-4 sm:mt-5 space-y-1 text-sm text-muted-foreground leading-relaxed font-medium">
              <p>Well-furnished PGs &amp; Hostels with all essential amenities.</p>
              <p>Safe, comfortable and affordable living for students and working professionals.</p>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 items-center text-[#0B1528]">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full border border-[#C49545]/20 bg-white text-[#C49545] shadow-sm">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider leading-none text-[#0B1528]">Safe &amp; Secure</span>
                  <span className="text-[8px] font-medium text-muted-foreground mt-0.5">Verified Properties</span>
                </div>
              </div>

              <span className="hidden sm:block h-6 w-px bg-border/80" />

              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full border border-[#C49545]/20 bg-white text-[#C49545] shadow-sm">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider leading-none text-[#0B1528]">Prime Location</span>
                  <span className="text-[8px] font-medium text-muted-foreground mt-0.5">Near Metro &amp; Market</span>
                </div>
              </div>

              <span className="hidden sm:block h-6 w-px bg-border/80" />

              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full border border-[#C49545]/20 bg-white text-[#C49545] shadow-sm">
                  <IndianRupee className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider leading-none text-[#0B1528]">Affordable Prices</span>
                  <span className="text-[8px] font-medium text-muted-foreground mt-0.5">Best Value for Money</span>
                </div>
              </div>

              <span className="hidden sm:block h-6 w-px bg-border/80" />

              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full border border-[#C49545]/20 bg-white text-[#C49545] shadow-sm">
                  <Headphones className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider leading-none text-[#0B1528]">Dedicated Support</span>
                  <span className="text-[8px] font-medium text-muted-foreground mt-0.5">We're Here to Help</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image - only visible on lg+ where 2-col layout is active */}
          <div className="hidden lg:block relative h-[400px] rounded-2xl overflow-hidden shadow-luxe border border-[#C49545]/15">
            <img
              src={galleryBedroom}
              alt="Comfortable student room"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="container-x py-12 md:py-16">
        {/* Search Card */}
        <div className="relative z-30 -mt-10 md:-mt-20 rounded-2xl bg-white p-6 shadow-luxe border border-[#C49545]/10 max-w-5xl mx-auto">
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_1fr_auto]">
            {/* Location Select */}
            <label className="block">
              <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Location</span>
              <div className="relative">
                <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" />
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full appearance-none rounded border border-input bg-background pl-9 pr-10 py-3 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-[#C49545] cursor-pointer"
                >
                  <option value="">Select Location</option>
                  <option value="Old Rajinder Nagar">Old Rajinder Nagar</option>
                  <option value="New Rajinder Nagar">New Rajinder Nagar</option>
                  <option value="Karol Bagh">Karol Bagh</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" />
              </div>
            </label>

            {/* PG Type Select */}
            <label className="block">
              <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">PG Type</span>
              <div className="relative">
                <Home className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" />
                <select
                  value={pgType}
                  onChange={(e) => setPgType(e.target.value)}
                  className="w-full appearance-none rounded border border-input bg-background pl-9 pr-10 py-3 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-[#C49545] cursor-pointer"
                >
                  <option value="">Select PG Type</option>
                  <option value="Boys">Boys PG</option>
                  <option value="Girls">Girls PG</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" />
              </div>
            </label>

            {/* Room Type Select */}
            <label className="block">
              <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Room Type</span>
              <div className="relative">
                <Bed className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" />
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full appearance-none rounded border border-input bg-background pl-9 pr-10 py-3 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-[#C49545] cursor-pointer"
                >
                  <option value="">Select Room Type</option>
                  <option value="Single Room">Single Room</option>
                  <option value="Twin Sharing">Twin Sharing</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" />
              </div>
            </label>

            {/* Budget Select */}
            <label className="block">
              <span className="mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Budget</span>
              <div className="relative">
                <IndianRupee className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#0B1528]/60" />
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full appearance-none rounded border border-input bg-background pl-9 pr-10 py-3 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-[#C49545] cursor-pointer"
                >
                  <option value="">Select Budget</option>
                  <option value="Under ₹12k">Under ₹12k</option>
                  <option value="₹12k - ₹15k">₹12k - ₹15k</option>
                  <option value="₹15k+">₹15k+</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" />
              </div>
            </label>

            {/* Search Button */}
            <div className="self-end h-[42px] flex items-center justify-center bg-[#0B1528] hover:bg-opacity-95 rounded shadow-sm text-white px-6 font-extrabold uppercase tracking-wider text-xs transition cursor-pointer w-full md:w-auto gap-2">
              Search PG & Hostel <Search className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pb-4 max-w-5xl mx-auto">
          <div className="text-xs md:text-sm font-bold text-muted-foreground uppercase">
            Showing <span className="text-[#C49545]">{sortedList.length}</span> Results
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-muted-foreground uppercase">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none rounded border border-input bg-background pl-3 pr-8 py-1.5 text-xs font-semibold text-foreground focus:outline-none focus:ring-1 focus:ring-[#C49545] cursor-pointer"
              >
                <option value="latest">Latest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto">
          {sortedList.length > 0 ? (
            sortedList.map((p) => (
              <article key={p.id} className="group overflow-hidden rounded-2xl bg-white border border-[#C49545]/15 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe flex flex-col md:flex-row h-full min-h-[220px]">
                <Link to="/properties/$id" params={{ id: p.id }} className="relative w-full md:w-[40%] aspect-[4/3] md:aspect-auto md:h-full min-h-[200px] overflow-hidden block">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded bg-[#0B1528] px-3.5 py-1.5 text-[9px] font-extrabold uppercase tracking-widest text-white shadow-sm">
                    {p.badge}
                  </span>
                  <button className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white border border-[#C49545]/20 text-[#C49545] shadow-sm hover:scale-105 hover:bg-[#C49545]/5 transition duration-300">
                    <Heart className="h-4 w-4" />
                  </button>
                </Link>

                <div className="p-6 flex flex-col justify-between flex-grow md:w-[60%]">
                  <div>
                    <Link to="/properties/$id" params={{ id: p.id }} className="hover:text-[#C49545] transition block">
                      <h3 className="font-display text-lg md:text-xl font-extrabold text-[#0B1528] leading-tight">
                        {p.title}
                      </h3>
                    </Link>
                    <div className="mt-2 flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wide">
                      <MapPin className="h-3.5 w-3.5 text-[#C49545]" /> {p.location}
                    </div>
                    <div className="mt-3 text-lg md:text-xl font-extrabold text-[#C49545]">
                      {p.price}
                    </div>
                  </div>

                  <div>
                    <div className="mt-4 pt-4 flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground">
                      {p.features.map((feat) => (
                        <span key={feat} className="rounded bg-muted px-2.5 py-1">
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex justify-start">
                      <Link
                        to="/properties/$id"
                        params={{ id: p.id }}
                        className="inline-flex items-center justify-center gap-2 rounded border border-[#C49545] px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#C49545] bg-white transition hover:bg-[#C49545] hover:text-white"
                      >
                        View Details <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-dashed border-border/60">
              <p className="text-sm font-bold text-muted-foreground uppercase">No PG accommodations match your filter criteria.</p>
              <button
                onClick={() => { setLocation(""); setPgType(""); setRoomType(""); setBudget(""); }}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase text-[#C49545] hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </section>

      {/* Requirement Form Section - Restyled full width */}
      <section className="bg-[#FAF8F5] border-t border-border/10 py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-between h-full relative">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C49545]">
                PG Made Simple
              </p>
              <div className="w-8 h-0.5 bg-[#C49545] mt-2"></div>
              <h2 className="mt-6 font-display text-4xl md:text-5xl font-extrabold text-[#0B1528] leading-tight">
                Looking for a<br />
                <span className="text-[#C49545]">PG?</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                Share your preferences (boys / girls, sharing, food) and we'll arrange visits the same day.
              </p>
              
              {/* Pillars row */}
              <div className="mt-8 grid grid-cols-4 divide-x divide-gray-200 border-t border-gray-100 py-8 text-center max-w-2xl">
                {[
                  {
                    icon: <Clock className="h-5 w-5 text-[#C49545]" />,
                    title: "Same Day Visits",
                    desc: "Quick and hassle-free site visits scheduled on the same day."
                  },
                  {
                    icon: <Users className="h-5 w-5 text-[#C49545]" />,
                    title: "Verified Properties",
                    desc: "Every PG and hostel room is physically verified by our team."
                  },
                  {
                    icon: <UtensilsCrossed className="h-5 w-5 text-[#C49545]" />,
                    title: "Food Options",
                    desc: "Nutritious, hygienic, and home-style meal plans available."
                  },
                  {
                    icon: <ShieldCheck className="h-5 w-5 text-[#C49545]" />,
                    title: "Safe & Secure",
                    desc: "Safe locations with modern security measures and CCTV."
                  },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex flex-col items-center px-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF6F0] border border-[#C49545]/20 text-[#C49545] mb-3 shrink-0">
                      {icon}
                    </div>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#0B1528] mb-1.5 leading-tight">
                      {title}
                    </span>
                    <span className="text-[10px] text-muted-foreground leading-normal font-medium">
                      {desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Need expert advice? Banner */}
            <div className="mt-8 flex items-center justify-between rounded-xl bg-[#F5EFE6]/50 border border-[#C49545]/15 p-5 max-w-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#C49545]/20 text-[#C49545] shadow-sm shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#0B1528] uppercase tracking-wider">
                    Need expert advice?
                  </h4>
                  <p className="text-[11px] text-muted-foreground mt-0.5 font-medium">
                    Our property experts are here to help you.
                  </p>
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200 mx-4 hidden sm:block" />
              <div className="text-right shrink-0 flex flex-col justify-center">
                <span className="block text-[9px] font-bold uppercase tracking-wider text-[#C49545]">
                  CALL US NOW
                </span>
                <span className="block text-sm font-extrabold text-[#0B1528] mt-1">
                  +91 85957 77428
                </span>
              </div>
            </div>
          </div>

          <InquiryForm
            subject="PG / Hostel Inquiry"
            defaultInterest="PG / Hostel"
            formTitle="Tell Us Your Preferences"
            formSubtitle="Our team will get in touch with you"
            formSubtitleHighlight="shortly."
            formIcon={<BedDouble className="h-6 w-6" />}
          />
        </div>
      </section>
    </>
  );
}
