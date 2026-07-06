import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { V as BookOpen, X as House, a as TrendingUp, j as Clock, k as FileText, q as ArrowRight, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./PageHero-Dt1HazNs.mjs";
import { n as BLOG_POSTS } from "./blog-DdhXeNK9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog.index-BkrfSioz.js
var import_jsx_runtime = require_jsx_runtime();
function BlogListingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		title: "Guides, Tips & Market Updates",
		crumb: "Blog",
		subtitle: "Expert property guides written by local experts in Old Rajinder Nagar, New Rajinder Nagar & Karol Bagh."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-12 sm:py-16 md:py-20 bg-[#FAF8F5]/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-10 sm:mb-14",
					children: [
						{
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" }),
							title: "Expert Insights",
							desc: "Well-researched content by local property experts"
						},
						{
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5 w-5" }),
							title: "Local Focus",
							desc: "Updates on Old Rajinder Nagar, New Rajinder Nagar & Karol Bagh"
						},
						{
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5" }),
							title: "Market Updates",
							desc: "Stay updated with the latest property trends and prices"
						},
						{
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5" }),
							title: "Helpful Guides",
							desc: "Step-by-step guides for buyers, renters & investors"
						}
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-[#C49545]/15 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FAF6F0] border border-[#C49545]/20 text-[#C49545] shadow-sm",
							children: f.icon
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-xs font-extrabold text-[#0B1528] tracking-tight",
							children: f.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-muted-foreground mt-0.5 leading-snug font-medium",
							children: f.desc
						})] })]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto",
					children: BLOG_POSTS.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: post.slug },
						className: "group flex flex-col sm:flex-row rounded-3xl border border-[#C49545]/15 bg-white shadow-sm hover:shadow-xl hover:border-[#C49545]/30 transition-all duration-300 overflow-hidden h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between flex-1 p-5 sm:p-6 z-10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3",
									style: {
										background: post.categoryBg,
										color: post.categoryColor,
										border: `1px solid ${post.categoryBorder}`
									},
									children: post.category
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-base md:text-lg font-extrabold text-[#0B1528] leading-snug group-hover:text-[#C49545] transition-colors mb-2.5",
									children: post.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4 font-medium",
									children: post.excerpt
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider border-t border-border/30 pt-3.5 mb-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-[#C49545]" }), post.location]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-[#C49545]" }), post.readTime]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#C49545] group-hover:gap-3 transition-all duration-200",
								children: ["Read Full Guide ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-full sm:w-[35%] md:w-[38%] min-h-[180px] sm:h-full overflow-hidden shrink-0 relative order-first sm:order-last",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: post.image,
								alt: post.title,
								loading: "lazy",
								className: "h-full w-full object-cover transition duration-500 group-hover:scale-105",
								style: {
									position: "absolute",
									height: "100%",
									width: "100%",
									top: 0,
									left: 0
								}
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/10 to-transparent sm:bg-gradient-to-l z-10 pointer-events-none" })]
						})]
					}, post.slug))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 sm:mt-16 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-3 rounded-2xl border border-[#C49545]/30 bg-[#fdf8f0] px-5 sm:px-6 py-4 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5 text-[#C49545] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-[#0B1528] font-bold text-left",
							children: [
								"Have a property question?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "tel:+918595777428",
									className: "text-[#C49545] hover:underline font-extrabold",
									children: "Call our experts: +91 85957 77428"
								})
							]
						})]
					})
				})
			]
		})
	})] });
}
//#endregion
export { BlogListingPage as component };
