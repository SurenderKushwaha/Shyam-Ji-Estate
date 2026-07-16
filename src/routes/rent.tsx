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
  Maximize,
  Bath,
  ChevronDown,
  Clock,
  ClipboardList,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { properties } from "@/data/properties";
import { InquiryForm } from "@/components/InquiryForm";
import { PropertySearch } from "@/components/PropertySearch";
import { CustomSelect } from "@/components/CustomSelect";
import galleryLiving from "@/assets/gallery-living.webp";
import armchairImg from "@/assets/armchair.webp";

export const Route = createFileRoute("/rent")({
  head: () => ({
    meta: [
      { title: "Flats & Builder Floors for Rent in Old Rajinder Nagar | Shyam Ji Estate" },
      {
        name: "description",
        content:
          "Find the best builder floors, flats, and apartments for rent in Old Rajinder Nagar, New Rajinder Nagar, and Karol Bagh. Verified properties ready to move in.",
      },
      {
        name: "keywords",
        content:
          "flat for rent in old rajinder nagar, builder floor for rent in old rajinder nagar, rent house in old rajinder nagar, apartments for rent in rajinder nagar, shyam ji estate",
      },
      {
        property: "og:title",
        content: "Premium Flats & Builder Floors for Rent in Old Rajinder Nagar | Shyam Ji Estate",
      },
      {
        property: "og:description",
        content:
          "Find verified builder floors, independent rooms, and flats for rent in Old and New Rajinder Nagar. Directly deal with top local property consultants.",
      },
      { property: "og:url", content: "/rent" },
    ],
    links: [{ rel: "canonical", href: "/rent" }],
  }),
  component: RentPage,
});

function getPropertyNumericPrice(priceStr: string): { amount: number; isMonthly: boolean } {
  const clean = priceStr.replace(/[₹,]/g, "").trim();
  if (clean.includes("Cr")) {
    const num = parseFloat(clean.replace("Cr.", "").trim());
    return { amount: num * 10000000, isMonthly: false };
  }
  if (clean.includes("Month")) {
    const num = parseInt(clean.replace("/ Month", "").trim(), 10);
    return { amount: num, isMonthly: true };
  }
  return { amount: 0, isMonthly: false };
}

function RentPage() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const filteredList = properties
    .filter((p) => p.category === "rent" || p.category === "pg")
    .filter((p) => {
      if (location && p.location.toLowerCase() !== location.toLowerCase()) return false;
      if (type) {
        const titleLower = p.title.toLowerCase();
        const typeLower = type.toLowerCase();
        if (typeLower === "apartment") {
          if (!titleLower.includes("apartment") && !titleLower.includes("flat")) return false;
        } else if (typeLower === "builder floor") {
          if (!titleLower.includes("builder floor")) return false;
        } else if (typeLower === "pg") {
          if (p.category !== "pg" && !titleLower.includes("pg")) return false;
        }
      }
      if (budget) {
        const { amount } = getPropertyNumericPrice(p.price);
        if (budget === "Under ₹25k") {
          if (amount >= 25000) return false;
        } else if (budget === "₹25k - ₹50k") {
          if (amount < 25000 || amount > 50000) return false;
        } else if (budget === "₹50k - ₹1L") {
          if (amount < 50000 || amount > 100000) return false;
        } else if (budget === "₹1L+") {
          if (amount < 100000) return false;
        }
      }
      return true;
    });

  const sortedList = [...filteredList].sort((a, b) => {
    const priceA = getPropertyNumericPrice(a.price).amount;
    const priceB = getPropertyNumericPrice(b.price).amount;
    if (sortBy === "price-asc") return priceA - priceB;
    if (sortBy === "price-desc") return priceB - priceA;
    return 0;
  });

  return (
    <>
      <section
        className="relative bg-[#0B1528] text-white pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 bg-cover bg-center border-b border-border/10"
        style={{ backgroundImage: `url(${galleryLiving})` }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1528]/98 via-[#0B1528]/90 to-[#0B1528]/98 pointer-events-none" />

        <div className="container-x grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] relative z-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C49545] mb-2">
              Find Your Perfect Rental
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl uppercase tracking-wide">
              Find Your Perfect
              <br />
              <span className="text-[#C49545]">Rental Property</span>
            </h1>
            <div className="mt-4 sm:mt-5 space-y-1 text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
              <p>Explore a wide range of rental flats, apartments</p>
              <p>and furnished properties in prime locations.</p>
            </div>

            {/* Badges */}
            <div className="mt-6 sm:mt-8 flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full border border-[#C49545]/30 bg-white/5 text-[#C49545] shadow-sm backdrop-blur-sm">
                  <ShieldCheck className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider leading-none text-white">
                    Verified
                  </span>
                  <span className="text-[8px] font-medium text-gray-400 mt-0.5">Properties</span>
                </div>
              </div>

              <span className="hidden sm:block h-6 w-px bg-white/10" />

              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full border border-[#C49545]/30 bg-white/5 text-[#C49545] shadow-sm backdrop-blur-sm">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider leading-none text-white">
                    Prime
                  </span>
                  <span className="text-[8px] font-medium text-gray-400 mt-0.5">Locations</span>
                </div>
              </div>

              <span className="hidden sm:block h-6 w-px bg-white/10" />

              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full border border-[#C49545]/30 bg-white/5 text-[#C49545] shadow-sm backdrop-blur-sm">
                  <IndianRupee className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider leading-none text-white">
                    Best Value
                  </span>
                  <span className="text-[8px] font-medium text-gray-400 mt-0.5">Deals</span>
                </div>
              </div>

              <span className="hidden sm:block h-6 w-px bg-white/10" />

              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-full border border-[#C49545]/30 bg-white/5 text-[#C49545] shadow-sm backdrop-blur-sm">
                  <Headphones className="h-4.5 w-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider leading-none text-white">
                    Dedicated
                  </span>
                  <span className="text-[8px] font-medium text-gray-400 mt-0.5">Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block relative h-[380px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#C49545]/20 group">
            <img
              src={galleryLiving}
              alt="Luxury living room"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </div>
      </section>

      <section className="container-x py-12 md:py-16">
        <div className="relative z-30 -mt-14 md:-mt-24 max-w-5xl mx-auto">
          <PropertySearch
            showTabs={false}
            filters={{
              location,
              type,
              transaction: "Rent",
              budget,
            }}
            onChange={(key, val) => {
              if (key === "location") setLocation(val);
              else if (key === "type") setType(val);
              else if (key === "budget") setBudget(val);
            }}
          />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 pb-4 max-w-5xl mx-auto">
          <div className="text-xs md:text-sm font-bold text-muted-foreground uppercase">
            Showing <span className="text-[#C49545]">{sortedList.length}</span> Results
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-muted-foreground uppercase">Sort by:</span>
            <CustomSelect
              value={sortBy}
              onChange={(val) => setSortBy(val)}
              options={[
                { value: "latest", label: "Latest First" },
                { value: "price-asc", label: "Price: Low to High" },
                { value: "price-desc", label: "Price: High to Low" },
              ]}
              placeholder="Sort by"
              className="w-[170px]"
            />
          </div>
        </div>

        {/* Listings Grid */}
        <div className="mt-8 grid gap-6 grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto">
          {sortedList.length > 0 ? (
            sortedList.map((p) => (
              <article
                key={p.id}
                className="group overflow-hidden rounded-2xl bg-white border border-[#C49545]/15 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe flex flex-col md:flex-row h-full min-h-[220px]"
              >
                {/* Left image */}
                <Link
                  to="/properties/$id"
                  params={{ id: p.id }}
                  className="relative w-full md:w-[40%] aspect-[4/3] md:aspect-auto md:h-full min-h-[200px] overflow-hidden block"
                >
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

                {/* Right content */}
                <div className="p-6 flex flex-col justify-between flex-grow md:w-[60%]">
                  <div>
                    <Link
                      to="/properties/$id"
                      params={{ id: p.id }}
                      className="hover:text-[#C49545] transition block"
                    >
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
                    {/* Specs Divider border-t */}
                    <div className="mt-4 pt-4 flex items-center gap-4 text-xs font-bold text-muted-foreground tracking-wide">
                      <span className="flex items-center gap-1.5">
                        <Bed className="h-4 w-4 text-[#C49545]" /> {p.features[0]}
                      </span>
                      <span className="h-3 w-px bg-border/60" />
                      <span className="flex items-center gap-1.5">
                        <Maximize className="h-4 w-4 text-[#C49545]" /> {p.features[1]}
                      </span>
                      <span className="h-3 w-px bg-border/60" />
                      <span className="flex items-center gap-1.5">
                        <Bath className="h-4 w-4 text-[#C49545]" /> {p.features[2]}
                      </span>
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
              <p className="text-sm font-bold text-muted-foreground uppercase">
                No properties match your filter criteria.
              </p>
              <button
                onClick={() => {
                  setLocation("");
                  setType("");
                  setBudget("");
                }}
                className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase text-[#C49545] hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#FAF8F5] border-t border-border/10 py-16 md:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex flex-col justify-between h-full relative">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C49545]">
                We're Here to Help
              </p>
              <div className="w-8 h-0.5 bg-[#C49545] mt-2"></div>
              <h2 className="mt-6 font-display text-4xl md:text-5xl font-extrabold text-[#0B1528] leading-tight">
                Need a<br />
                <span className="text-[#C49545]">Rental Shortlist?</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                Share your preferences and our team will send you the best matching options.
              </p>

              {/* Pillars row */}
              <div className="mt-8 grid grid-cols-4 divide-x divide-gray-200 border-t border-gray-100 py-8 text-center max-w-2xl">
                {[
                  {
                    icon: <Clock className="h-5 w-5 text-[#C49545]" />,
                    title: "Quick Response",
                    desc: "Immediate assistance and fast property visits.",
                  },
                  {
                    icon: <Home className="h-5 w-5 text-[#C49545]" />,
                    title: "Verified Properties",
                    desc: "All rental homes are thoroughly verified and inspected.",
                  },
                  {
                    icon: <ClipboardList className="h-5 w-5 text-[#C49545]" />,
                    title: "Best Matches",
                    desc: "Get personalized recommendations matching your budget.",
                  },
                  {
                    icon: <ShieldCheck className="h-5 w-5 text-[#C49545]" />,
                    title: "Safe & Secure",
                    desc: "Transparent rental agreements and hassle-free documentation.",
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
            subject="Rent Property Inquiry"
            defaultInterest="Rent"
            formTitle="Share Your Requirements"
            formSubtitle="We'll get back to you with the"
            formSubtitleHighlight="best options."
            formIcon={<ClipboardList className="h-6 w-6" />}
          />
        </div>
      </section>
    </>
  );
}
