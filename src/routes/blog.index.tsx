import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS } from "@/data/blog";
import { Clock, MapPin, ArrowRight, BookOpen, FileText, Home, TrendingUp } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Property Guides & Blog | Shyam Ji Estate" },
      {
        name: "description",
        content:
          "Explore local real estate guides, UPSC student PG tips, and market updates for Old Rajinder Nagar and Karol Bagh.",
      },
      { property: "og:title", content: "Property Guides & Blog | Shyam Ji Estate" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogListingPage,
});

function BlogListingPage() {
  return (
    <>
      {/* Hero - dark navy gradient, matches Contact / About */}
      <PageHero
        title="Guides, Tips & Market Updates"
        crumb="Blog"
        subtitle="Expert property guides written by local experts in Old Rajinder Nagar, New Rajinder Nagar & Karol Bagh."
      />

      <section className="py-12 sm:py-16 md:py-20 bg-[#FAF8F5]/30">
        <div className="container-x">
          {/* Features Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-10 sm:mb-14">
            {[
              {
                icon: <FileText className="h-5 w-5" />,
                title: "Expert Insights",
                desc: "Well-researched content by local property experts",
              },
              {
                icon: <Home className="h-5 w-5" />,
                title: "Local Focus",
                desc: "Updates on Old Rajinder Nagar, New Rajinder Nagar & Karol Bagh",
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                title: "Market Updates",
                desc: "Stay updated with the latest property trends and prices",
              },
              {
                icon: <BookOpen className="h-5 w-5" />,
                title: "Helpful Guides",
                desc: "Step-by-step guides for buyers, renters & investors",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-[#C49545]/15 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FAF6F0] border border-[#C49545]/20 text-[#C49545] shadow-sm">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#0B1528] tracking-tight">
                    {f.title}
                  </h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug font-medium">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Blog cards grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex flex-col sm:flex-row rounded-3xl border border-[#C49545]/15 bg-white shadow-sm hover:shadow-xl hover:border-[#C49545]/30 transition-all duration-300 overflow-hidden h-full"
              >
                {/* Left text column */}
                <div className="flex flex-col justify-between flex-1 p-5 sm:p-6 z-10">
                  <div>
                    {/* Category badge */}
                    <span
                      className="inline-block text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                      style={{
                        background: post.categoryBg,
                        color: post.categoryColor,
                        border: `1px solid ${post.categoryBorder}`,
                      }}
                    >
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="font-display text-base md:text-lg font-extrabold text-[#0B1528] leading-snug group-hover:text-[#C49545] transition-colors mb-2.5">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4 font-medium">
                      {post.excerpt}
                    </p>
                  </div>

                  <div>
                    {/* Meta row */}
                    <div className="flex items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider pt-3.5 mb-3.5">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-[#C49545]" />
                        {post.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-[#C49545]" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Read Full Guide link */}
                    <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#C49545] group-hover:gap-3 transition-all duration-200">
                      Read Full Guide <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                {/* Right image column */}
                <div className="w-full sm:w-[35%] md:w-[38%] min-h-[180px] sm:h-full overflow-hidden shrink-0 relative order-first sm:order-last">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    style={{ position: "absolute", height: "100%", width: "100%", top: 0, left: 0 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent sm:bg-gradient-to-l z-10 pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-[#C49545]/30 bg-[#fdf8f0] px-5 sm:px-6 py-4 shadow-sm">
              <BookOpen className="h-5 w-5 text-[#C49545] shrink-0" />
              <p className="text-sm text-[#0B1528] font-bold text-left">
                Have a property question?{" "}
                <a
                  href="tel:+918595777428"
                  className="text-[#C49545] hover:underline font-extrabold"
                >
                  Call our experts: +91 85957 77428
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
