import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Briefcase, D as GraduationCap, J as ArrowLeft, L as Calendar, M as ClipboardList, P as ChevronRight, R as Building, S as Leaf, X as House, a as TrendingUp, i as User, j as Clock, k as FileText, l as ShoppingBag, n as Wallet, r as Users, u as Shield, y as MapPin } from "../_libs/lucide-react.mjs";
import { n as BLOG_POSTS, t as BLOG_ARTICLE_CSS } from "./blog-DdhXeNK9.mjs";
import { t as Route } from "./blog._slug-D-AAqZyv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog._slug-BxyFH4xa.js
var import_jsx_runtime = require_jsx_runtime();
var iconMap = {
	"graduation-cap": GraduationCap,
	"map-pin": MapPin,
	"users": Users,
	"leaf": Leaf,
	"home": House,
	"briefcase": Briefcase,
	"wallet": Wallet,
	"shopping-bag": ShoppingBag,
	"trending-up": TrendingUp,
	"building": Building,
	"clock": Clock,
	"clipboard-list": ClipboardList,
	"shield": Shield
};
var extractHeadings = (html) => {
	const regex = /<h2>(.*?)<\/h2>/g;
	const headings = [];
	let match;
	let index = 1;
	while ((match = regex.exec(html)) !== null) {
		const rawText = match[1].replace(/<[^>]*>/g, "");
		const id = `section-${index}`;
		headings.push({
			text: rawText,
			id
		});
		index++;
	}
	return headings;
};
var injectHeadingIds = (html) => {
	let index = 1;
	return html.replace(/<h2>/g, () => {
		const replacement = `<h2 id="section-${index}">`;
		index++;
		return replacement;
	});
};
var splitContentHtml = (htmlWithIds) => {
	const firstH2Index = htmlWithIds.indexOf("<h2 ");
	if (firstH2Index === -1) return {
		firstSection: htmlWithIds,
		restSection: ""
	};
	const secondH2Index = htmlWithIds.indexOf("<h2 ", firstH2Index + 4);
	if (secondH2Index === -1) return {
		firstSection: htmlWithIds,
		restSection: ""
	};
	return {
		firstSection: htmlWithIds.substring(0, secondH2Index),
		restSection: htmlWithIds.substring(secondH2Index)
	};
};
function TableOfContents({ headings }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-[#C49545]/15 bg-white p-6 shadow-[0_12px_30px_-16px_rgba(11,21,40,0.04)] sticky top-[120px]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			className: "font-display text-sm font-extrabold text-[#0B1528] uppercase tracking-wider flex items-center gap-2.5 mb-6 border-b border-border/40 pb-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4.5 w-4.5 text-[#C49545]" }), "In This Guide"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-4",
			children: headings.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "border-b border-border/20 last:border-0 pb-3.5 last:pb-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${h.id}`,
					className: "group flex items-start gap-3.5 text-xs font-semibold text-[#4A5568] hover:text-[#C49545] transition-colors leading-relaxed",
					onClick: (e) => {
						e.preventDefault();
						document.getElementById(h.id)?.scrollIntoView({
							behavior: "smooth",
							block: "start"
						});
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full border border-[#C49545]/30 bg-[#FAF6F0] text-[10px] font-bold text-[#C49545] group-hover:bg-[#C49545] group-hover:text-white group-hover:border-[#C49545] transition-all",
						children: String(i + 1).padStart(2, "0")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "group-hover:translate-x-0.5 transition-transform",
						children: h.text
					})]
				})
			}, h.id))
		})]
	});
}
function BlogPostPage() {
	const post = Route.useLoaderData();
	const htmlWithIds = injectHeadingIds(post.contentHtml);
	const headings = extractHeadings(post.contentHtml);
	const { firstSection, restSection } = splitContentHtml(htmlWithIds);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { dangerouslySetInnerHTML: { __html: BLOG_ARTICLE_CSS } }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-b border-border/30 bg-[#FAF8F5]/90 backdrop-blur-md sticky top-[64px] z-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-2.5 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-[#C49545] transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), "Back to Guides"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-xs text-muted-foreground/60 uppercase tracking-wider",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-[#C49545] transition-colors",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "hover:text-[#C49545] transition-colors",
							children: "Blog"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold",
							style: { color: post.categoryColor },
							children: post.category
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "blog-article bg-white",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "bg-[#FAF8F5] py-12 lg:py-0 border-b border-border/40 overflow-hidden relative min-h-[440px] flex items-center z-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:block absolute top-0 right-0 bottom-0 w-[45%] h-full z-0 overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.image,
						alt: post.title,
						className: "h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						className: "absolute left-0 top-0 h-full w-24 text-[#FAF8F5] fill-current pointer-events-none z-10",
						viewBox: "0 0 100 100",
						preserveAspectRatio: "none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 0,0 C 70,25 30,75 0,100 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M 0,0 C 70,25 30,75 0,100",
							fill: "none",
							stroke: "#C49545",
							strokeWidth: "1.5"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x w-full relative z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-10 items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-7 py-6 lg:py-16 relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4",
										style: {
											background: "transparent",
											color: post.categoryColor,
											border: `1px solid ${post.categoryColor}`
										},
										children: post.category
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "font-display text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#0B1528] mb-5",
										children: post.title.includes(" – ") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											post.title.split(" – ")[0],
											" – ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#C49545]",
												children: post.title.split(" – ")[1]
											})
										] }) : post.title.includes(" - ") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											post.title.split(" - ")[0],
											" - ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[#C49545]",
												children: post.title.split(" - ")[1]
											})
										] }) : post.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-y-2.5 gap-x-4 text-xs font-semibold text-muted-foreground/80 mb-6 border-b border-border/40 pb-5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-[#C49545]" }), post.location]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gray-300",
												children: "|"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-[#C49545]" }), post.readTime]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gray-300",
												children: "|"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5 text-[#C49545]" }), "Shree Shyam Ji Estate"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gray-300",
												children: "|"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-1.5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5 text-[#C49545]" }),
													"Updated ",
													post.date
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative p-6 rounded-2xl bg-white border border-[#C49545]/10 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex gap-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl",
												style: { backgroundColor: post.categoryColor }
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-4xl font-serif text-[#C49545] leading-none shrink-0 select-none",
												children: "“"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm md:text-base font-medium text-[#4A5568] leading-relaxed",
												children: post.excerpt
											})
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-5 block lg:hidden relative h-[250px] sm:h-[300px] w-full shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-[-20px] bottom-6 z-0 grid grid-cols-5 gap-1.5 opacity-40",
									children: Array.from({ length: 25 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 w-1 rounded-full bg-[#C49545]" }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-full w-full rounded-2xl overflow-hidden shadow-luxe border border-[#C49545]/10 z-10 bg-white",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: post.image,
										alt: post.title,
										className: "h-full w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										className: "absolute left-0 top-0 h-full w-24 text-[#FAF8F5] fill-current pointer-events-none z-20",
										viewBox: "0 0 100 100",
										preserveAspectRatio: "none",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M 0,0 C 70,25 30,75 0,100 Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											d: "M 0,0 C 70,25 30,75 0,100",
											fill: "none",
											stroke: "#C49545",
											strokeWidth: "1.5"
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden lg:block absolute right-[45%] mr-6 top-1/2 -translate-y-1/2 z-10 pointer-events-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-5 gap-1.5 opacity-40",
									children: Array.from({ length: 25 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1.5 w-1.5 rounded-full bg-[#C49545]" }, i))
								})
							})
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "container-x py-12 md:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "content-section",
								dangerouslySetInnerHTML: { __html: firstSection }
							}),
							post.highlights && post.highlights.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[780px] mx-auto px-4 md:px-10",
								children: post.highlights.map((hl, index) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "bg-[#FAF8F5] border border-border/20 p-4 rounded-2xl flex flex-col hover:border-[#C49545]/30 hover:shadow-[0_8px_20px_rgba(0,0,0,0.02)] transition-all duration-300",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(iconMap[hl.icon] || MapPin, { className: "h-5 w-5 text-[#C49545] mb-2.5 shrink-0" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
												className: "text-[11px] font-extrabold uppercase text-[#0B1528] tracking-wider mb-1 leading-snug",
												children: hl.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] text-muted-foreground font-semibold leading-relaxed flex-grow",
												children: hl.desc
											})
										]
									}, index);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 relative p-6 rounded-2xl bg-white border border-[#C49545]/15 shadow-[0_8px_30px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-[780px] mx-auto",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl",
										style: { backgroundColor: post.categoryColor }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FAF6F0] border border-[#C49545]/20 text-[#C49545] shadow-sm",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-5.5 w-5.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
											className: "text-sm font-extrabold text-[#0B1528] tracking-tight",
											children: [
												"Looking to Buy or Rent in ",
												post.location.split(",")[0],
												"?"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-muted-foreground mt-0.5 font-semibold",
											children: "Get personalized assistance from our local property experts."
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "tel:+918595777428",
										className: "inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#C49545] hover:bg-[#B38435] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all hover:scale-[1.01] shrink-0",
										children: ["Contact Our Experts ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
									})
								]
							}),
							restSection && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "content-section mt-8",
								dangerouslySetInnerHTML: { __html: restSection }
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "hidden lg:block sticky top-[120px] shrink-0 w-[320px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableOfContents, { headings })
					})]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedPosts, { currentSlug: post.slug })
	] });
}
function RelatedPosts({ currentSlug }) {
	const related = BLOG_POSTS.filter((p) => p.slug !== currentSlug).slice(0, 2);
	if (related.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#FAF8F5] py-14 border-t border-border/30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[#C49545] text-xs font-bold uppercase tracking-[0.2em] mb-2",
					children: "Continue Reading"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl font-bold text-[#0B1528] mb-8",
					children: "More Property Guides"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-6",
					children: related.map((post) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog/$slug",
						params: { slug: post.slug },
						className: "group flex flex-col rounded-2xl border border-border/40 bg-white p-5 shadow-sm hover:shadow-md hover:border-[#C49545]/30 transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-block self-start text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full mb-3",
								style: {
									background: post.categoryBg,
									color: post.categoryColor,
									border: `1px solid ${post.categoryBorder}`
								},
								children: post.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-bold text-[#0B1528] group-hover:text-[#C49545] transition-colors leading-snug line-clamp-2",
								children: post.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-2 line-clamp-2 flex-1",
								children: post.excerpt
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#C49545] mt-4 group-hover:gap-2 transition-all",
								children: ["Read Guide ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
							})
						]
					}, post.slug))
				})
			]
		})
	});
}
//#endregion
export { BlogPostPage as component };
