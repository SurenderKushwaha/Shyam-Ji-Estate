import { useState, useEffect } from "react";
import { Play, Instagram, X } from "lucide-react";
import { BRAND } from "@/lib/brand";

// Local fallback thumbnails (Instagram CDN is CORS-blocked)
import livingRoomImg from "@/assets/gallery-living.webp";
import girlsPgImg from "@/assets/girls-premium-1.png";
import commercialImg from "@/assets/commercial-metro-facing-1.png";
import officeImg from "@/assets/office-pusa-road-1.jpg";

interface Reel {
  id: string;
  title: string;
  location: string;
  views: string;
  category: string;
  type: string;
  thumbnail?: string;
}

const DEFAULT_REELS: Reel[] = [
  { id: "DawcuL8voQY", title: "Property Tour", location: "Old Rajinder Nagar", views: "1.7K", category: "Buy / Rent", type: "living" },
  { id: "DZ_yNPYPd6V", title: "Property Tour", location: "Old Rajinder Nagar", views: "1.6K", category: "Buy / Rent", type: "living" },
  { id: "DZ96F8NMF46", title: "Property Tour", location: "New Rajinder Nagar", views: "1.4K", category: "Buy / Rent", type: "living" },
  { id: "DZ8_tRBvxZW", title: "Property Tour", location: "Karol Bagh", views: "1.5K", category: "Commercial", type: "commercial" },
  { id: "DZzVju7vdhh", title: "Property Tour", location: "Old Rajinder Nagar", views: "1.4K", category: "Buy / Rent", type: "living" },
  { id: "DZz-H9hP_tH", title: "Property Tour", location: "Karol Bagh", views: "1.4K", category: "PG / Hostel", type: "girls" },
  { id: "DZ_wwabvpEB", title: "Property Tour", location: "New Rajinder Nagar", views: "1.4K", category: "Buy / Rent", type: "living" },
  { id: "DarKGrMP6y-", title: "Property Tour", location: "Pusa Road", views: "1.3K", category: "Commercial", type: "commercial" },
  { id: "DaJ57Fev3ag", title: "Property Tour", location: "Old Rajinder Nagar", views: "1.3K", category: "Buy / Rent", type: "living" },
  { id: "DaaPh6Av0R4", title: "Property Tour", location: "Karol Bagh", views: "1.3K", category: "Commercial", type: "office" },
  { id: "DY4dTU9P2Xj", title: "Property Tour", location: "New Rajinder Nagar", views: "1.4K", category: "Buy / Rent", type: "living" },
  { id: "DYy8dchPndt", title: "Property Tour", location: "Old Rajinder Nagar", views: "1.2K", category: "PG / Hostel", type: "girls" },
  { id: "DauHx32vobY", title: "Property Tour", location: "Old Rajinder Nagar", views: "495", category: "PG / Hostel", type: "girls" },
  { id: "DaeYz2yPwbE", title: "Property Tour", location: "Karol Bagh", views: "680", category: "Commercial", type: "commercial" },
  { id: "DaChV6tvzf6", title: "Property Tour", location: "New Rajinder Nagar", views: "541", category: "Buy / Rent", type: "living" },
  { id: "DY8gMDzPOCl", title: "Property Tour", location: "Old Rajinder Nagar", views: "508", category: "Buy / Rent", type: "living" },
  { id: "DacIeioPU_v", title: "Property Tour", location: "Karol Bagh", views: "376", category: "PG / Hostel", type: "girls" },
  { id: "DaCggL1v1i2", title: "Property Tour", location: "Old Rajinder Nagar", views: "352", category: "Buy / Rent", type: "living" },
  { id: "DahjR8mPrKN", title: "Property Tour", location: "New Rajinder Nagar", views: "331", category: "Commercial", type: "commercial" },
  { id: "Day9BN0PDee", title: "Property Tour", location: "Old Rajinder Nagar", views: "298", category: "Buy / Rent", type: "living" },
  { id: "DanCQo5vGr6", title: "Property Tour", location: "Karol Bagh", views: "232", category: "PG / Hostel", type: "girls" },
  { id: "Da0LxiQv880", title: "Property Tour", location: "Old Rajinder Nagar", views: "218", category: "Buy / Rent", type: "living" },
  { id: "DY6IG6NPCKu", title: "Property Tour", location: "New Rajinder Nagar", views: "391", category: "Buy / Rent", type: "living" },
  { id: "DY0xUOGPvvM", title: "Property Tour", location: "Karol Bagh", views: "435", category: "Commercial", type: "office" },
];

function getThumb(type: string, thumbnail?: string): string {
  if (thumbnail) return thumbnail;
  if (type === "girls") return girlsPgImg;
  if (type === "commercial") return commercialImg;
  if (type === "office") return officeImg;
  return livingRoomImg;
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
          const mapped: Reel[] = data.map(
            (item: Record<string, unknown>) => ({
              id: String(item.id ?? ""),
              title: String(item.title ?? "Property Tour"),
              location: String(item.location ?? ""),
              views: String(item.views ?? ""),
              category: String(item.category ?? ""),
              type: String(item.type ?? "living"),
              thumbnail: item.thumbnail ? String(item.thumbnail) : undefined,
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

        {/* All Reels — horizontally scrollable carousel */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar">
          {reels.map((reel) => (
            <button
              key={reel.id}
              onClick={() => {
                setActiveReelId(reel.id);
                setActiveReelTitle(reel.title);
              }}
              className="group relative flex flex-col w-[220px] sm:w-[240px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border/80 bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxe text-left cursor-pointer"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-muted">
                <img
                  src={getThumb(reel.type, reel.thumbnail)}
                  alt={reel.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />

                {/* Instagram Reels icon top-left */}
                <div className="absolute left-3 top-3 flex items-center gap-1">
                  <Instagram className="h-4 w-4 text-white drop-shadow" />
                </div>

                {/* Category Badge top-right */}
                {reel.category && (
                  <div className="absolute right-3 top-3 rounded bg-[#C49545] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white">
                    {reel.category}
                  </div>
                )}

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transition-all duration-300 group-hover:bg-[#C49545] group-hover:border-[#C49545] group-hover:scale-110 shadow-md">
                    <Play className="h-6 w-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Location + Title */}
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
          ))}
        </div>

        {/* View All on Instagram CTA */}
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

      {/* Lightbox — real Instagram reel embed */}
      {activeReelId && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setActiveReelId(null)}
        >
          <div
            className="relative w-full max-w-[360px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActiveReelId(null)}
              className="absolute top-4 right-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-[#C49545] border border-white/10 transition-colors cursor-pointer"
              aria-label="Close video player"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Real Instagram Reel embed */}
            <iframe
              src={`https://www.instagram.com/reel/${activeReelId}/embed/`}
              className="w-full h-full border-none"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              title={activeReelTitle}
            />

            {/* Watch on Instagram */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[110] w-[90%]">
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
