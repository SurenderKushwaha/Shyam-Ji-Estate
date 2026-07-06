import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Briefcase, C as IndianRupee, I as ChevronDown, T as Headphones, X as House, a as TrendingUp, c as Star, d as ShieldCheck, f as Search, h as Phone, q as ArrowRight, w as Heart, y as MapPin, z as Building2 } from "../_libs/lucide-react.mjs";
import { i as properties, r as prop_shop_default } from "./properties-B_DAXTJD.mjs";
import { t as InquiryForm } from "./InquiryForm-to4HXRL6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/commercial-DqNaTkCx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function getPropertyNumericPrice(priceStr) {
	const clean = priceStr.replace(/[₹,]/g, "").trim();
	if (clean.includes("Month")) return parseInt(clean.replace("/ Month", "").trim(), 10);
	return 0;
}
function CommercialPage() {
	const [location, setLocation] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)("");
	const [use, setUse] = (0, import_react.useState)("");
	const [budget, setBudget] = (0, import_react.useState)("");
	const [sortBy, setSortBy] = (0, import_react.useState)("latest");
	const sortedList = [...properties.filter((p) => p.category === "commercial").filter((p) => {
		if (location && p.location.toLowerCase() !== location.toLowerCase()) return false;
		if (type) {
			const titleLower = p.title.toLowerCase();
			if (type === "Shop" && !titleLower.includes("shop")) return false;
			if (type === "Office" && !titleLower.includes("office")) return false;
		}
		if (use) {
			const usageFeat = p.detailedFeatures?.find((f) => f.label.toLowerCase() === "usage")?.value.toLowerCase() || "";
			if (use === "Retail" && !usageFeat.includes("retail") && !p.title.toLowerCase().includes("shop")) return false;
			if (use === "Office" && !usageFeat.includes("office") && !p.title.toLowerCase().includes("office")) return false;
		}
		if (budget) {
			const amount = getPropertyNumericPrice(p.price);
			if (budget === "Under ₹50k") {
				if (amount >= 5e4) return false;
			} else if (budget === "₹50k - ₹1L") {
				if (amount < 5e4 || amount > 1e5) return false;
			} else if (budget === "₹1L+") {
				if (amount < 1e5) return false;
			}
		}
		return true;
	})].sort((a, b) => {
		const priceA = getPropertyNumericPrice(a.price);
		const priceB = getPropertyNumericPrice(b.price);
		if (sortBy === "price-asc") return priceA - priceB;
		if (sortBy === "price-desc") return priceB - priceA;
		return 0;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative overflow-hidden bg-white py-10 sm:py-14 lg:py-20 border-b border-border/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid items-center gap-8 lg:grid-cols-[1.25fr_1fr] relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.25em] text-[#C49545]",
						children: "Premium Spaces. Prime Locations."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-3 font-display text-3xl sm:text-4xl font-extrabold leading-tight text-[#0B1528] md:text-5xl lg:text-6xl",
						children: [
							"Commercial Spaces",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#C49545]",
								children: "For Your Business Growth"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 sm:mt-5 space-y-1 text-sm text-muted-foreground leading-relaxed font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Explore a wide range of shops, offices and commercial properties" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "in prime locations with the best deals." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 items-center text-[#0B1528]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 place-items-center rounded-full border border-[#C49545]/20 bg-white text-[#C49545] shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4.5 w-4.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] font-extrabold uppercase tracking-wider leading-tight",
									children: [
										"Verified",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Properties"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block h-6 w-px bg-border/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 place-items-center rounded-full border border-[#C49545]/20 bg-white text-[#C49545] shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4.5 w-4.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] font-extrabold uppercase tracking-wider leading-tight",
									children: [
										"Prime",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Locations"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block h-6 w-px bg-border/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 place-items-center rounded-full border border-[#C49545]/20 bg-white text-[#C49545] shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] font-extrabold uppercase tracking-wider leading-tight",
									children: [
										"Best Value",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Deals"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block h-6 w-px bg-border/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 place-items-center rounded-full border border-[#C49545]/20 bg-white text-[#C49545] shadow-sm",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Headphones, { className: "h-4.5 w-4.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[10px] font-extrabold uppercase tracking-wider leading-tight",
									children: [
										"Dedicated",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Support"
									]
								})]
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:block relative h-[400px] rounded-2xl overflow-hidden shadow-luxe border border-[#C49545]/15",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: prop_shop_default,
						alt: "Premium commercial spaces",
						className: "h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-12 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-30 -mt-20 rounded-2xl bg-white p-6 shadow-luxe border border-[#C49545]/10 max-w-5xl mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 md:grid-cols-[1fr_1fr_1fr_1fr_auto]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground",
									children: "Location"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: location,
											onChange: (e) => setLocation(e.target.value),
											className: "w-full appearance-none rounded border border-input bg-background pl-9 pr-10 py-3 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-[#C49545] cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select Location"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Old Rajinder Nagar",
													children: "Old Rajinder Nagar"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "New Rajinder Nagar",
													children: "New Rajinder Nagar"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Karol Bagh",
													children: "Karol Bagh"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground",
									children: "Property Type"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: type,
											onChange: (e) => setType(e.target.value),
											className: "w-full appearance-none rounded border border-input bg-background pl-9 pr-10 py-3 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-[#C49545] cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select Type"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Shop",
													children: "Shop"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Office",
													children: "Office Space"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground",
									children: "Property Use"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: use,
											onChange: (e) => setUse(e.target.value),
											className: "w-full appearance-none rounded border border-input bg-background pl-9 pr-10 py-3 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-[#C49545] cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select Use"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Retail",
													children: "Retail"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Office",
													children: "Office"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mb-1.5 block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground",
									children: "Budget"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#0B1528]/60" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											value: budget,
											onChange: (e) => setBudget(e.target.value),
											className: "w-full appearance-none rounded border border-input bg-background pl-9 pr-10 py-3 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-[#C49545] cursor-pointer",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "",
													children: "Select Budget"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "Under ₹50k",
													children: "Under ₹50k"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "₹50k - ₹1L",
													children: "₹50k - ₹1L"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: "₹1L+",
													children: "₹1L+"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1528]/60" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "self-end h-[42px] flex items-center justify-center bg-[#0B1528] hover:bg-opacity-95 rounded shadow-sm text-white px-6 font-extrabold uppercase tracking-wider text-xs transition cursor-pointer w-full md:w-auto gap-2",
								children: ["Search Properties ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })]
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-4 max-w-5xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs md:text-sm font-bold text-muted-foreground uppercase",
						children: [
							"Showing ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#C49545]",
								children: sortedList.length
							}),
							" Results"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-muted-foreground uppercase",
							children: "Sort by:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: sortBy,
								onChange: (e) => setSortBy(e.target.value),
								className: "appearance-none rounded border border-input bg-background pl-3 pr-8 py-1.5 text-xs font-semibold text-foreground focus:outline-none focus:ring-1 focus:ring-[#C49545] cursor-pointer",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "latest",
										children: "Latest First"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "price-asc",
										children: "Price: Low to High"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "price-desc",
										children: "Price: High to Low"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto",
					children: sortedList.length > 0 ? sortedList.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group overflow-hidden rounded-2xl bg-white border border-[#C49545]/15 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-luxe flex flex-col md:flex-row h-full min-h-[220px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/properties/$id",
							params: { id: p.id },
							className: "relative w-full md:w-[40%] aspect-[4/3] md:aspect-auto md:h-full min-h-[200px] overflow-hidden block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.title,
									loading: "lazy",
									className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-4 top-4 rounded bg-[#0B1528] px-3.5 py-1.5 text-[9px] font-extrabold uppercase tracking-widest text-white shadow-sm",
									children: p.badge
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-white border border-[#C49545]/20 text-[#C49545] shadow-sm hover:scale-105 hover:bg-[#C49545]/5 transition duration-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 flex flex-col justify-between flex-grow md:w-[60%]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/properties/$id",
									params: { id: p.id },
									className: "hover:text-[#C49545] transition block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg md:text-xl font-extrabold text-[#0B1528] leading-tight",
										children: p.title
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wide",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-[#C49545]" }),
										" ",
										p.location
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-lg md:text-xl font-extrabold text-[#C49545]",
									children: p.price
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 pt-4 border-t border-border/60 flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground",
								children: p.features.map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded bg-muted px-2.5 py-1",
									children: feat
								}, feat))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 flex justify-start",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/properties/$id",
									params: { id: p.id },
									className: "inline-flex items-center justify-center gap-2 rounded border border-[#C49545] px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-[#C49545] bg-white transition hover:bg-[#C49545] hover:text-white",
									children: ["View Details ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							})] })]
						})]
					}, p.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-full text-center py-12 bg-white rounded-2xl border border-dashed border-border/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold text-muted-foreground uppercase",
							children: "No commercial spaces match your filter criteria."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setLocation("");
								setType("");
								setUse("");
								setBudget("");
							},
							className: "mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase text-[#C49545] hover:underline",
							children: "Reset Filters"
						})]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[#FAF8F5] border-t border-border/10 py-16 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-10 lg:grid-cols-2 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between h-full relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C49545]",
							children: "Grow Your Business"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-8 h-0.5 bg-[#C49545] mt-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl md:text-5xl font-extrabold text-[#0B1528] leading-tight",
							children: [
								"Find Your Perfect",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#C49545]",
									children: "Commercial Space"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-md",
							children: [
								"High-footfall shops and offices in the heart of ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-[#0B1528]",
									children: "Old Rajinder Nagar"
								}),
								" and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-[#0B1528]",
									children: "Karol Bagh"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid grid-cols-4 divide-x divide-gray-200 border-t border-gray-100 py-8 text-center max-w-2xl",
							children: [
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-5 w-5 text-[#C49545]" }),
									title: "Prime Locations",
									desc: "Strategic locations in Old Rajinder Nagar and Karol Bagh."
								},
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-5 w-5 text-[#C49545]" }),
									title: "High Footfall",
									desc: "Excellent visibility and high footfall areas."
								},
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-5 w-5 text-[#C49545]" }),
									title: "Best Deals",
									desc: "Competitive prices and the best available options."
								},
								{
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-5 w-5 text-[#C49545]" }),
									title: "Safe & Secure",
									desc: "Transparent deals and hassle-free transactions."
								}
							].map(({ icon, title, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center px-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-11 w-11 items-center justify-center rounded-full bg-[#FAF6F0] border border-[#C49545]/20 text-[#C49545] mb-3 shrink-0",
										children: icon
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] font-extrabold uppercase tracking-wider text-[#0B1528] mb-1.5 leading-tight",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] text-muted-foreground leading-normal font-medium",
										children: desc
									})
								]
							}, title))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-between rounded-xl bg-[#F5EFE6]/50 border border-[#C49545]/15 p-5 max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#C49545]/20 text-[#C49545] shadow-sm shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-xs font-extrabold text-[#0B1528] uppercase tracking-wider",
									children: "Need expert advice?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-muted-foreground mt-0.5 font-medium",
									children: "Our property experts are here to help you."
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-10 w-px bg-gray-200 mx-4 hidden sm:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right shrink-0 flex flex-col justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-[9px] font-bold uppercase tracking-wider text-[#C49545]",
									children: "CALL US NOW"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm font-extrabold text-[#0B1528] mt-1",
									children: "+91 85957 77428"
								})]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, {
					subject: "Commercial Property Inquiry",
					defaultInterest: "Commercial",
					formTitle: "Inquire About Commercial Property",
					formSubtitle: "Tell us your requirements and we'll find you the",
					formSubtitleHighlight: "best options.",
					formIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-6 w-6" })
				})]
			})
		})
	] });
}
//#endregion
export { CommercialPage as component };
