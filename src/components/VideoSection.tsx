import { useState, useEffect } from "react";
import { Play, Instagram, X } from "lucide-react";
import { BRAND } from "@/lib/brand";

interface Reel {
  id: string;
  title: string;
  location: string;
  views: string;
  category: string;
  thumbnail: string;
}

const DEFAULT_REELS: Reel[] = [
  {
    id: "DHAvBGhpa4A",
    title: "Property Tour",
    location: "Old Rajinder Nagar",
    views: "",
    category: "Buy / Rent",
    thumbnail: "",
  },
  {
    id: "DG0fTJDJagC",
    title: "Property Tour",
    location: "Old Rajinder Nagar",
    views: "",
    category: "PG / Hostel",
    thumbnail: "",
  },
  {
    id: "DGw2yeQprZJ",
    title: "Property Tour",
    location: "Karol Bagh",
    views: "",
    category: "Commercial",
    thumbnail: "",
  },
  {
    id: "DGpE_UOzw-s",
    title: "Property Tour",
    location: "New Rajinder Nagar",
    views: "",
    category: "Buy / Rent",
    thumbnail: "",
  },
];

function ReelCard({
  reel,
  onClick,
}: {
  reel: Reel;
  onClick: (id: string, title: string) => void;
}) {
  const thumbnailUrl = `https://www.instagram.com/p/${reel.id}/media/?size=l`;

  return (
    <button
      key={reel.id}
      onClick={() => onClick(reel.id, reel.title)}
      className="group relative flex flex-col w-[220px] sm:w-[250px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border/80 bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxe text-left cursor-pointer"
    >
      {/* Aspect Ratio 9/16 Card */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-muted">
        <img
          src={reel.thumbnail || thumbnailUrl}
          alt={reel.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback to oEmbed thumbnail if direct media fails
            const target = e.currentTarget;
            if (!target.dataset.fallback) {
              target.dataset.fallback = "1";
              target.src = `https://ws.audioscrobbler.com/2.0/`; // trigger next fallback
            }
          }}
        />

        {/* Gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

        {/* Category Badge (top right) */}
        {reel.category && (
          <div className="absolute right-3 top-3 rounded bg-[#C49545] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white">
            {reel.category}
          </div>
        )}

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transition-all duration-300 group-hover:bg-[#C49545] group-hover:border-[#C49545] group-hover:scale-110 shadow-md">
            <Play className="h-5 w-5 fill-current translate-x-0.5" />
          </div>
        </div>

        {/* Title & Location details */}
        <div className="absolute bottom-4 left-3 right-3 text-left">
          {reel.location && (
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#C49545]">
              {reel.location}
            </span>
          )}
          <h3 className="text-xs font-bold text-white mt-1 leading-snug line-clamp-2 group-hover:text-[#C49545] transition-colors duration-200">
            {reel.title}
          </h3>
        </div>
      </div>
    </button>
  );
}

export function VideoSection() {
  const [reels, setReels] = useState<Reel[]>(DEFAULT_REELS);
  const [activeReelId, setActiveReelId] = useState<string | null>(null);
  const [activeReelTitle, setActiveReelTitle] = useState("");

  useEffect(() => {
    fetch("/reels.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch reels.json");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped: Reel[] = data.slice(0, 4).map(
            (item: Record<string, unknown>) => ({
              id: String(item.id ?? ""),
              title: String(item.title ?? "Property Tour"),
              location: String(item.location ?? ""),
              views: String(item.views ?? ""),
              category: String(item.category ?? ""),
              thumbnail: String(item.thumbnail ?? ""),
            })
          );
          setReels(mapped);
        }
      })
      .catch((err) => {
        console.warn("Could not load reels.json, using defaults:", err);
      });
  }, []);

  return (
    <section className="bg-white py-16 md:py-20 border-t border-border/40 relative overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#C49545]/5 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#0B1528]/5 blur-3xl -z-10 pointer-events-none" />

      <div className="container-x">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C49545] mb-3 flex items-center justify-center gap-1.5">
            <span>🗝️</span> Property Walkthroughs
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B1528] leading-tight uppercase tracking-wide">
            Tour Our Premium <span className="text-[#C49545]">Reels</span>
          </h2>
          <div className="mx-auto mt-3.5 mb-4 flex items-center justify-center gap-2">
            <span className="h-0.5 w-12 bg-[#C49545]/40" />
            <span className="text-[#C49545] text-xs">◆</span>
            <span className="h-0.5 w-12 bg-[#C49545]/40" />
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
            Watch high-definition walkthrough tours and Reels of our latest
            flats, PGs, and commercial spaces. Click on any card below to play.
          </p>
        </div>

        {/* Reels Horizontal Scrollable Carousel */}
        <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory max-w-full no-scrollbar justify-center">
          {reels.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              onClick={(id, title) => {
                setActiveReelId(id);
                setActiveReelTitle(title);
              }}
            />
          ))}
        </div>

        {/* Social CTA Button */}
        <div className="mt-8 md:mt-12 text-center">
          <a
            href={BRAND.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#0B1528] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#C49545] hover:text-white active:scale-95 duration-100"
          >
            <Instagram className="h-4 w-4" /> Visit Our Instagram
          </a>
        </div>
      </div>

      {/* Lightbox Video Player Modal */}
      {activeReelId && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setActiveReelId(null)}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-[360px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveReelId(null)}
              className="absolute top-4 right-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#C49545] border border-white/10 transition-colors cursor-pointer"
              aria-label="Close video player"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Embedded Instagram Reel Iframe */}
            <div className="flex-1 w-full h-full relative">
              <iframe
                src={`https://www.instagram.com/reel/${activeReelId}/embed/`}
                className="w-full h-full border-none"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
                title={activeReelTitle}
              />
            </div>

            {/* Bottom Redirect Action */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[110] w-[90%] text-center">
              <a
                href={`https://www.instagram.com/reel/${activeReelId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full rounded-xl bg-[#C49545] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-white hover:text-[#0B1528] active:scale-95 duration-100"
              >
                <Instagram className="h-4 w-4" /> Watch on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
