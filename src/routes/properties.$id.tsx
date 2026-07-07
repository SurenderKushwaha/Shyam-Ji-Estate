import { createFileRoute, Link } from "@tanstack/react-router";
import { properties } from "@/data/properties";
import { useState } from "react";

import { InquiryForm } from "@/components/InquiryForm";
import { 
  MapPin, 
  IndianRupee, 
  ShieldCheck, 
  Phone, 
  ArrowLeft, 
  CheckCircle2, 
  Building2,
  Percent,
  Bed,
  Bath,
  Compass,
  UserCheck,
  Layers,
  Wrench,
  Utensils,
  Armchair,
  Hammer,
  Sparkles,
  Zap,
  Lock
} from "lucide-react";

const getIconForLabel = (label: string) => {
  const lowercase = label.toLowerCase();
  if (lowercase.includes("price") || lowercase.includes("rent")) return IndianRupee;
  if (lowercase.includes("location") || lowercase.includes("address")) return MapPin;
  if (lowercase.includes("brokerage")) return Percent;
  if (lowercase.includes("room") || lowercase.includes("occupancy") || lowercase.includes("sharing")) return Bed;
  if (lowercase.includes("washroom") || lowercase.includes("bathroom") || lowercase.includes("toilet")) return Bath;
  if (lowercase.includes("balcony")) return Compass;
  if (lowercase.includes("gender") || lowercase.includes("boys") || lowercase.includes("girls") || lowercase.includes("preferred")) return UserCheck;
  if (lowercase.includes("floor")) return Layers;
  if (lowercase.includes("maintenance")) return Wrench;
  if (lowercase.includes("kitchen")) return Utensils;
  if (lowercase.includes("furnish") || lowercase.includes("bedding") || lowercase.includes("sofa")) return Armchair;
  if (lowercase.includes("construction") || lowercase.includes("status") || lowercase.includes("age")) return Hammer;
  if (lowercase.includes("inclusion") || lowercase.includes("amenit")) return Sparkles;
  if (lowercase.includes("safety") || lowercase.includes("security") || lowercase.includes("safe")) return ShieldCheck;
  if (lowercase.includes("water") || lowercase.includes("electricity") || lowercase.includes("power") || lowercase.includes("utility")) return Zap;
  if (lowercase.includes("independent") || lowercase.includes("independence")) return Lock;
  return Building2;
};

export const Route = createFileRoute("/properties/$id")({
  head: ({ params }) => {
    const property = properties.find((p) => p.id === params.id);
    const seoTitle = property
      ? `${property.title} in ${property.location} | Shyam Ji Estate`
      : "Property Details | Shyam Ji Estate";
    
    const seoDesc = property
      ? `${property.title} in ${property.location}. Price: ${property.price}. Contact Shyam Ji Estate for details and site visits.`
      : "Detailed overview of the property at Shyam Ji Estate.";

    return {
      meta: [
        { title: seoTitle },
        { name: "description", content: seoDesc },
        { property: "og:title", content: seoTitle },
        { property: "og:description", content: seoDesc },
        { property: "og:url", content: `/properties/${params.id}` },
      ],
    };
  },
  component: PropertyDetailPage,
});

function PropertyDetailPage() {
  const { id } = Route.useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="container-x py-20 text-center">
        <h1 className="text-3xl font-bold text-primary">Property Not Found</h1>
        <p className="mt-4 text-muted-foreground">The property you are looking for does not exist or has been removed.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-bold uppercase text-accent-foreground">
          <ArrowLeft className="h-4 w-4" /> Go back home
        </Link>
      </div>
    );
  }

  const galleryImages = property.gallery && property.gallery.length > 0
    ? property.gallery
    : [property.image];

  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  const categoryInterestMap: Record<string, string> = {
    buy: "Buy",
    rent: "Rent",
    pg: "PG / Hostel",
    commercial: "Commercial",
  };
  const defaultInterest = categoryInterestMap[property.category] ?? "Buy";

  const priceBreakup = [...(property.priceBreakup || [])];
  if (property.category === "pg" || property.category === "rent") {
    const hasBrokerage = priceBreakup.some(item => item.label.toLowerCase().includes("brokerage"));
    if (!hasBrokerage) {
      const totalIdx = priceBreakup.findIndex(item => item.isTotal);
      const brokerageItem = { label: "Brokerage Fee", value: "21 Days Rent" };
      if (totalIdx !== -1) {
        priceBreakup.splice(totalIdx, 0, brokerageItem);
      } else {
        priceBreakup.push(brokerageItem);
      }
    }
  }

  return (
    <>
      <section className="container-x py-12">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent mb-6 transition">
          <ArrowLeft className="h-4 w-4" /> Back to all properties
        </Link>

        {/* Title & Meta Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-[#0B1528] leading-tight">
            {property.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-[#C49545]" /> {property.location}
            </span>
            <span className="text-border/60">|</span>
            <span className="text-[#C49545] font-bold">{property.price}</span>
            <span className="text-border/60">|</span>
            <span className="bg-[#0B1528] text-white px-3 py-1 rounded text-[10px] font-extrabold tracking-widest">
              {property.badge}
            </span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 min-w-0">
          {/* Main Details and Gallery (Left 2 columns on desktop) */}
          <div className="lg:col-span-2 space-y-8 min-w-0">
            {/* Gallery Component */}
            <div className="space-y-4 min-w-0">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted shadow-card border">
                <img
                  src={activeImage}
                  alt={property.title}
                  className="h-full w-full object-cover transition duration-300"
                />
                <span className="absolute left-4 top-4 rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md">
                  {property.badge}
                </span>
              </div>
              
              {galleryImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
                  {galleryImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(img)}
                      className={`relative aspect-[4/3] w-24 flex-shrink-0 overflow-hidden rounded-md border-2 transition ${
                        activeImage === img ? "border-accent scale-95 shadow-md" : "border-border hover:border-accent/50"
                      }`}
                    >
                      <img src={img} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Overview */}
            {(() => {
              const overviewItems = [
                { label: "Price", value: property.price },
                { label: "Location", value: property.location },
                ...((property.category === "pg" || property.category === "rent") ? [{ label: "Brokerage", value: "21 Days Rent" }] : []),
                ...(property.detailedFeatures || [])
              ];

              return (
                <div className="bg-card rounded-xl border border-border/80 p-5 md:p-8 shadow-card space-y-6">
                  <div className="flex items-center justify-between border-b pb-4 border-border/60">
                    <h2 className="font-display text-xl md:text-2xl font-extrabold text-primary uppercase tracking-wide">
                      Property Overview
                    </h2>
                    <span className="text-xs font-bold bg-accent/15 text-accent px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                      Key Details
                    </span>
                  </div>
                  <div className="grid gap-3.5 grid-cols-1 min-[370px]:grid-cols-2 sm:grid-cols-3">
                    {overviewItems.map((item, idx) => {
                      const Icon = getIconForLabel(item.label);
                      return (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 p-3.5 rounded-xl border border-border/40 bg-muted/10 hover:bg-muted/30 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300 group shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)] hover:shadow-md min-w-0"
                        >
                          <div className="p-2 rounded-lg bg-accent/5 text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-300 shrink-0">
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors duration-300">
                              {item.label}
                            </span>
                            <span className="block text-xs sm:text-sm font-semibold text-primary mt-0.5 leading-snug break-words">
                              {item.value}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}

            {/* Description */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-bold text-primary uppercase tracking-wide">
                Description
              </h2>
              <div className="text-sm leading-relaxed text-muted-foreground bg-muted/30 p-5 rounded-lg border">
                {property.description}
              </div>
            </div>

            {/* Key Features Bullet List */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-bold text-primary uppercase tracking-wide">
                Amenities & Key Features
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 bg-card rounded-lg border p-6">
                {property.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Breakup Section */}
            {priceBreakup && priceBreakup.length > 0 && (
              <div className="bg-card rounded-lg border p-5 md:p-6 shadow-sm space-y-4">
                <h2 className="font-display text-xl font-bold text-primary uppercase tracking-wide flex items-center gap-2">
                  <IndianRupee className="h-5 w-5 text-accent" /> Price Breakup & Charges
                </h2>
                <div className="divide-y divide-border rounded-lg border bg-card overflow-hidden">
                  {priceBreakup.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`flex justify-between items-center px-4 py-3.5 sm:px-6 sm:py-4 text-xs sm:text-sm ${
                        item.isTotal ? "bg-accent/10 font-bold border-t border-accent/20" : ""
                      }`}
                    >
                      <span className={item.isTotal ? "text-primary font-bold" : "text-muted-foreground font-medium"}>
                        {item.label}
                      </span>
                      <span className="text-primary font-semibold text-right pl-4">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-start gap-2.5 text-xs text-muted-foreground bg-muted/20 p-3 rounded border">
                  <ShieldCheck className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <p>
                    Prices listed above are estimates based on standard calculations. Utility bills and actual charges may vary based on exact usage and final agreement.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Inquiry Form and Contact Sidebar (Right 1 column on desktop) */}
          <div className="space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Dedicated Inquiry Form */}
              <InquiryForm
                subject={`Inquiry for ${property.title} (ID: ${property.id})`}
                defaultInterest={defaultInterest}
                formTitle="Inquire About This Property"
                formSubtitle="Fill out the form below and our property expert will reach out directly."
                formIcon={<Building2 className="h-6 w-6" />}
              />

              {/* Agent contact info card */}
              <div className="bg-primary text-primary-foreground rounded-lg p-5 md:p-6 shadow-md space-y-4 min-w-0">
                <h3 className="font-display text-lg font-bold text-accent uppercase tracking-wide">
                  Direct Contact
                </h3>
                <p className="text-xs text-primary-foreground/80 leading-relaxed">
                  Prefer direct calling? Speak to our expert property consultant instantly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 pt-2">
                  <a href="tel:+918595777428" className="flex items-center gap-3 rounded bg-white/10 p-3 hover:bg-white/15 transition min-w-0">
                    <Phone className="h-5 w-5 text-accent shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase font-bold text-accent">Call Agent</div>
                      <div className="text-sm font-bold whitespace-nowrap">+91 8595777428</div>
                    </div>
                  </a>
                  <a href="tel:+919311510866" className="flex items-center gap-3 rounded bg-white/10 p-3 hover:bg-white/15 transition min-w-0">
                    <Phone className="h-5 w-5 text-accent shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase font-bold text-accent">Office Desk</div>
                      <div className="text-sm font-bold whitespace-nowrap">+91 9311510866</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
