import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { BLOG_POSTS, BLOG_ARTICLE_CSS } from "@/data/blog";
import {
  ChevronRight,
  ArrowLeft,
  MapPin,
  Clock,
  User,
  Calendar,
  GraduationCap,
  Users,
  Leaf,
  Home,
  Briefcase,
  Wallet,
  ShoppingBag,
  TrendingUp,
  Building,
  ClipboardList,
  Shield,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) return { meta: [] };
    return {
      meta: [
        { title: post.seoTitle },
        { name: "description", content: post.seoDescription },
        { property: "og:title", content: post.seoTitle },
        { property: "og:description", content: post.seoDescription },
        { property: "og:url", content: `/blog/${post.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/blog/${post.slug}` }],
    };
  },
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  component: BlogPostPage,
});

const iconMap: Record<string, React.ElementType> = {
  "graduation-cap": GraduationCap,
  "map-pin": MapPin,
  users: Users,
  leaf: Leaf,
  home: Home,
  briefcase: Briefcase,
  wallet: Wallet,
  "shopping-bag": ShoppingBag,
  "trending-up": TrendingUp,
  building: Building,
  clock: Clock,
  "clipboard-list": ClipboardList,
  shield: Shield,
};

// Helper to extract headings for the table of contents
const extractHeadings = (html: string) => {
  const regex = /<h2>(.*?)<\/h2>/g;
  const headings: { text: string; id: string }[] = [];
  let match;
  let index = 1;
  while ((match = regex.exec(html)) !== null) {
    const rawText = match[1].replace(/<[^>]*>/g, ""); // strip inner HTML tags
    const id = `section-${index}`;
    headings.push({ text: rawText, id });
    index++;
  }
  return headings;
};

// Helper to inject IDs into the H2 tags so linking to hash works
const injectHeadingIds = (html: string) => {
  let index = 1;
  return html.replace(/<h2>/g, () => {
    const replacement = `<h2 id="section-${index}">`;
    index++;
    return replacement;
  });
};

// Split the HTML at the second h2 to insert highlights/CTA dynamically
const splitContentHtml = (htmlWithIds: string) => {
  const firstH2Index = htmlWithIds.indexOf("<h2 ");
  if (firstH2Index === -1) return { firstSection: htmlWithIds, restSection: "" };

  const secondH2Index = htmlWithIds.indexOf("<h2 ", firstH2Index + 4);
  if (secondH2Index === -1) return { firstSection: htmlWithIds, restSection: "" };

  return {
    firstSection: htmlWithIds.substring(0, secondH2Index),
    restSection: htmlWithIds.substring(secondH2Index),
  };
};

function TableOfContents({ headings }: { headings: { text: string; id: string }[] }) {
  return (
    <div className="rounded-2xl border border-[#C49545]/15 bg-white p-6 shadow-[0_12px_30px_-16px_rgba(11,21,40,0.04)] sticky top-[120px]">
      <h3 className="font-display text-sm font-extrabold text-[#0B1528] uppercase tracking-wider flex items-center gap-2.5 mb-6 pb-4">
        <FileText className="h-4.5 w-4.5 text-[#C49545]" />
        In This Guide
      </h3>
      <ul className="space-y-4">
        {headings.map((h, i) => (
          <li key={h.id} className="pb-3.5 last:pb-0">
            <a
              href={`#${h.id}`}
              className="group flex items-start gap-3.5 text-xs font-semibold text-[#4A5568] hover:text-[#C49545] transition-colors leading-relaxed"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(h.id)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full border border-[#C49545]/30 bg-[#FAF6F0] text-[10px] font-bold text-[#C49545] group-hover:bg-[#C49545] group-hover:text-white group-hover:border-[#C49545] transition-all">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="group-hover:translate-x-0.5 transition-transform">{h.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BlogPostPage() {
  const post = Route.useLoaderData();

  // Process Content
  const htmlWithIds = injectHeadingIds(post.contentHtml);
  const headings = extractHeadings(post.contentHtml);
  const { firstSection, restSection } = splitContentHtml(htmlWithIds);

  return (
    <>
      {/* Inject scoped blog article CSS */}
      <style dangerouslySetInnerHTML={{ __html: BLOG_ARTICLE_CSS }} />

      {/* Back navigation bar */}
      <div className="border-b border-border/30 bg-[#FAF8F5]/90 backdrop-blur-md sticky top-[64px] z-10">
        <div className="container-x py-2.5 flex items-center justify-between">
          <Link
            to="/blog"
            className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-[#C49545] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Guides
          </Link>
          <div className="flex items-center gap-2 text-xs text-muted-foreground/60 uppercase tracking-wider">
            <Link to="/" className="hover:text-[#C49545] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/blog" className="hover:text-[#C49545] transition-colors">
              Blog
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="font-semibold" style={{ color: post.categoryColor }}>
              {post.category}
            </span>
          </div>
        </div>
      </div>

      {/* Blog article content container */}
      <div className="blog-article bg-white">
        {/* React Hero section matching mockup */}
        <section className="bg-[#FAF8F5] py-12 lg:py-0 border-b border-border/40 overflow-hidden relative min-h-[440px] flex items-center z-0">
          {/* Right side full-bleed image (only visible on lg and above) */}
          <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[45%] h-full z-0 overflow-hidden">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
            {/* S-curve overlay on the left edge of the image */}
            <svg
              className="absolute left-0 top-0 h-full w-24 text-[#FAF8F5] fill-current pointer-events-none z-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M 0,0 C 70,25 30,75 0,100 Z" />
              <path d="M 0,0 C 70,25 30,75 0,100" fill="none" stroke="#C49545" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="container-x w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text Column */}
              <div className="lg:col-span-7 py-6 lg:py-16 relative">
                {/* Category Badge */}
                <span
                  className="inline-block text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4"
                  style={{
                    background: "transparent",
                    color: post.categoryColor,
                    border: `1px solid ${post.categoryColor}`,
                  }}
                >
                  {post.category}
                </span>

                {/* Split Title */}
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0B1528] mb-5">
                  {post.title.includes(" – ") ? (
                    <>
                      {post.title.split(" – ")[0]} –{" "}
                      <span className="text-[#C49545]">{post.title.split(" – ")[1]}</span>
                    </>
                  ) : post.title.includes(" - ") ? (
                    <>
                      {post.title.split(" - ")[0]} -{" "}
                      <span className="text-[#C49545]">{post.title.split(" - ")[1]}</span>
                    </>
                  ) : (
                    post.title
                  )}
                </h1>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-y-2.5 gap-x-4 text-xs font-semibold text-muted-foreground/80 mb-6 pb-5">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#C49545]" />
                    {post.location}
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#C49545]" />
                    {post.readTime}
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-[#C49545]" />
                    Shyam Ji Estate
                  </span>
                  <span className="text-gray-300">|</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[#C49545]" />
                    Updated {post.date}
                  </span>
                </div>

                {/* Intro Quote Box */}
                <div className="relative p-6 rounded-2xl bg-white border border-[#C49545]/10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex gap-4">
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl"
                    style={{ backgroundColor: post.categoryColor }}
                  />
                  <div className="text-4xl font-serif text-[#C49545] leading-none shrink-0 select-none">
                    “
                  </div>
                  <p className="text-sm md:text-base font-medium text-[#4A5568] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Mobile/Tablet Image Column (only visible below lg) */}
              <div className="lg:col-span-5 block lg:hidden relative h-[250px] sm:h-[300px] w-full shrink-0">
                {/* Grid of gold dots */}
                <div className="absolute left-[-20px] bottom-6 z-0 grid grid-cols-5 gap-1.5 opacity-40">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="h-1 w-1 rounded-full bg-[#C49545]" />
                  ))}
                </div>

                {/* Image container */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-luxe border border-[#C49545]/10 z-10 bg-white">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />

                  {/* S-curve overlay */}
                  <svg
                    className="absolute left-0 top-0 h-full w-24 text-[#FAF8F5] fill-current pointer-events-none z-20"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <path d="M 0,0 C 70,25 30,75 0,100 Z" />
                    <path
                      d="M 0,0 C 70,25 30,75 0,100"
                      fill="none"
                      stroke="#C49545"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>

              {/* Grid dots matrix on desktop (placed to the left of the S-curve) */}
              <div className="hidden lg:block absolute right-[45%] mr-6 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <div className="grid grid-cols-5 gap-1.5 opacity-40">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#C49545]" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2-Column Main Content Body */}
        <section className="container-x py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
            {/* Left Column (Content + Highlights + CTA Banner) */}
            <div className="min-w-0">
              {/* Section 1 Content */}
              <div className="content-section" dangerouslySetInnerHTML={{ __html: firstSection }} />

              {/* Highlights cards grid */}
              {post.highlights && post.highlights.length > 0 && (
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[780px] mx-auto px-4 md:px-10">
                  {post.highlights.map((hl, index) => {
                    const IconComp = iconMap[hl.icon] || MapPin;
                    return (
                      <div
                        key={index}
                        className="bg-[#FAF8F5] border border-border/20 p-4 rounded-2xl flex flex-col hover:border-[#C49545]/30 hover:shadow-[0_8px_20px_rgba(0,0,0,0.02)] transition-all duration-300"
                      >
                        <IconComp className="h-5 w-5 text-[#C49545] mb-2.5 shrink-0" />
                        <h5 className="text-[11px] font-extrabold uppercase text-[#0B1528] tracking-wider mb-1 leading-snug">
                          {hl.title}
                        </h5>
                        <p className="text-[10px] text-muted-foreground font-semibold leading-relaxed flex-grow">
                          {hl.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Contact Experts CTA Banner */}
              <div className="mt-8 relative p-6 rounded-2xl bg-white border border-[#C49545]/15 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-[780px] mx-auto">
                <div
                  className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl"
                  style={{ backgroundColor: post.categoryColor }}
                />
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FAF6F0] border border-[#C49545]/20 text-[#C49545] shadow-sm">
                    <Home className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-[#0B1528] tracking-tight">
                      Looking to Buy or Rent in {post.location.split(",")[0]}?
                    </h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5 font-semibold">
                      Get personalized assistance from our local property experts.
                    </p>
                  </div>
                </div>
                <a
                  href="tel:+918595777428"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#C49545] hover:bg-[#B38435] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all hover:scale-[1.01] shrink-0"
                >
                  Contact Our Experts <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Remaining Content Sections */}
              {restSection && (
                <div
                  className="content-section mt-8"
                  dangerouslySetInnerHTML={{ __html: restSection }}
                />
              )}
            </div>

            {/* Right Column (Sticky ToC sidebar) */}
            <aside className="hidden lg:block sticky top-[120px] shrink-0 w-[320px]">
              <TableOfContents headings={headings} />
            </aside>
          </div>
        </section>
      </div>

      {/* Related posts strip */}
      <RelatedPosts currentSlug={post.slug} />
    </>
  );
}

function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const related = BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 2);
  if (related.length === 0) return null;

  return (
    <section className="bg-[#FAF8F5] py-14 border-t border-border/30">
      <div className="container-x">
        <p className="text-[#C49545] text-xs font-bold uppercase tracking-[0.2em] mb-2">
          Continue Reading
        </p>
        <h2 className="font-display text-xl font-bold text-[#0B1528] mb-8">More Property Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {related.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col rounded-2xl border border-border/40 bg-white p-5 shadow-sm hover:shadow-md hover:border-[#C49545]/30 transition-all"
            >
              <span
                className="inline-block self-start text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                style={{
                  background: post.categoryBg,
                  color: post.categoryColor,
                  border: `1px solid ${post.categoryBorder}`,
                }}
              >
                {post.category}
              </span>
              <h3 className="font-display text-base font-bold text-[#0B1528] group-hover:text-[#C49545] transition-colors leading-snug line-clamp-2">
                {post.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-2 line-clamp-2 flex-1">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#C49545] mt-4 group-hover:gap-2 transition-all">
                Read Guide <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
