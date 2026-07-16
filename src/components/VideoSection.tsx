import { useState, useEffect } from "react";
import { Play, Instagram, X, Eye } from "lucide-react";
import { BRAND } from "@/lib/brand";

// Local image thumbnails for the property reels
import livingRoomImg from "@/assets/gallery-living.webp";
import girlsPgImg from "@/assets/girls-premium-1.png";
import commercialImg from "@/assets/commercial-metro-facing-1.png";
import officeImg from "@/assets/office-pusa-road-1.jpg";

const DEFAULT_REELS = [
  {
    id: "DawcuL8voQY",
    title: "Luxury 3BHK Builder Floor Walkthrough Tour",
    location: "Old Rajinder Nagar",
    views: "12.4K",
    category: "Buy / Rent",
    thumbnail: livingRoomImg,
    type: "living",
  },
  {
    id: "DauHx32vobY",
    title: "Premium Girls PG & Hostel Accommodation Room Tour",
    location: "Near Karol Bagh Metro",
    views: "8.2K",
    category: "PG / Hostel",
    thumbnail: girlsPgImg,
    type: "girls",
  },
  {
    id: "DarKGrMP6y-",
    title: "Metro Facing Premium Commercial Space for Rent",
    location: "Pusa Road",
    views: "5.7K",
    category: "Commercial",
    thumbnail: commercialImg,
    type: "commercial",
  },
  {
    id: "DanCQo5vGr6",
    title: "Premium Corporate Office Space Tour",
    location: "Karol Bagh Desk",
    views: "9.1K",
    category: "Commercial",
    thumbnail: officeImg,
    type: "office",
  },
] as const;

export function VideoSection() {
  const [reels, setReels] = useState<any[]>(DEFAULT_REELS);
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
          const mapped = data.map((item: any) => {
            let thumbnail = livingRoomImg;
            if (item.type === "girls") thumbnail = girlsPgImg;
            else if (item.type === "commercial") thumbnail = commercialImg;
            else if (item.type === "office") thumbnail = officeImg;
            return {
              ...item,
              thumbnail,
            };
          });
          setReels(mapped);
        }
      })
      .catch((err) => {
        console.warn("Could not auto-sync reels from reels.json, using local fallback:", err);
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
            Watch high-definition walkthrough tours and Reels of our latest flats, PGs, and commercial spaces. Click on any card below to play the video.
          </p>
        </div>
        
        {/* Reels Horizontal Scrollable Carousel */}
        <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-thin snap-x snap-mandatory max-w-full no-scrollbar">
          {reels.map((reel) => (
            <button
              key={reel.id}
              onClick={() => {
                setActiveReelId(reel.id);
                setActiveReelTitle(reel.title);
              }}
              className="group relative flex flex-col w-[220px] sm:w-[250px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border/80 bg-card shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxe text-left cursor-pointer"
            >
              {/* Aspect Ratio 9/16 Card */}
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-muted">
                <img
                  src={
                    reel.thumbnail || 
                    (reel.type === 'girls' ? girlsPgImg : 
                     reel.type === 'commercial' ? commercialImg : 
                     reel.type === 'office' ? officeImg : 
                     livingRoomImg)
                  }
                  alt={reel.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
                
                {/* Views Counter (top left) */}
                <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wide text-white border border-white/10">
                  <Eye className="h-3 w-3 text-[#C49545]" />
                  <span>{reel.views} Views</span>
                </div>

                {/* Category Badge (top right) */}
                <div className="absolute right-3 top-3 rounded bg-[#C49545] px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white">
                  {reel.category}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 transition-all duration-300 group-hover:bg-[#C49545] group-hover:border-[#C49545] group-hover:scale-110 shadow-md">
                    <Play className="h-5 w-5 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Title & Location details */}
                <div className="absolute bottom-4 left-3 right-3 text-left">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#C49545]">{reel.location}</span>
                  <h3 className="text-xs font-bold text-white mt-1 leading-snug line-clamp-2 group-hover:text-[#C49545] transition-colors duration-200">
                    {reel.title}
                  </h3>
                </div>
              </div>
            </button>
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
            onClick={(e) => e.stopPropagation()} // Prevent close on modal click
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
                src={`https://www.instagram.com/p/${activeReelId}/embed/`}
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
