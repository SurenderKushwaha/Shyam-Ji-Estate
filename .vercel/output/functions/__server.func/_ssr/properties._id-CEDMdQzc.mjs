import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as IndianRupee, J as ArrowLeft, d as ShieldCheck, et as CircleCheck, h as Phone, y as MapPin, z as Building2 } from "../_libs/lucide-react.mjs";
import { i as properties } from "./properties-B_DAXTJD.mjs";
import { t as InquiryForm } from "./InquiryForm-to4HXRL6.mjs";
import { t as Route } from "./properties._id-C5lBbc6t.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/properties._id-CEDMdQzc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PropertyDetailPage() {
	const { id } = Route.useParams();
	const property = properties.find((p) => p.id === id);
	if (!property) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-x py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-bold text-primary",
				children: "Property Not Found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-muted-foreground",
				children: "The property you are looking for does not exist or has been removed."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "mt-6 inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-bold uppercase text-accent-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Go back home"]
			})
		]
	});
	const galleryImages = property.gallery && property.gallery.length > 0 ? property.gallery : [property.image];
	const [activeImage, setActiveImage] = (0, import_react.useState)(galleryImages[0]);
	const defaultInterest = {
		buy: "Buy",
		rent: "Rent",
		pg: "PG / Hostel",
		commercial: "Commercial"
	}[property.category] ?? "Buy";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent mb-6 transition",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to all properties"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 border-b pb-6 border-border/40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl md:text-4xl font-extrabold text-[#0B1528] leading-tight",
					children: property.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-xs md:text-sm text-muted-foreground font-semibold uppercase tracking-wider",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-[#C49545]" }),
								" ",
								property.location
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-border/60",
							children: "|"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#C49545] font-bold",
							children: property.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-border/60",
							children: "|"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-[#0B1528] text-white px-3 py-1 rounded text-[10px] font-extrabold tracking-widest",
							children: property.badge
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 space-y-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-muted shadow-card border",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: activeImage,
									alt: property.title,
									className: "h-full w-full object-cover transition duration-300"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-4 top-4 rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-md",
									children: property.badge
								})]
							}), galleryImages.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-3 overflow-x-auto pb-2 scrollbar-thin",
								children: galleryImages.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveImage(img),
									className: `relative aspect-[4/3] w-24 flex-shrink-0 overflow-hidden rounded-md border-2 transition ${activeImage === img ? "border-accent scale-95 shadow-md" : "border-border hover:border-accent/50"}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img,
										alt: `Gallery ${i + 1}`,
										className: "h-full w-full object-cover"
									})
								}, i))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-lg border p-6 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-bold text-primary border-b pb-3 uppercase tracking-wide",
								children: "Property Overview"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid gap-4 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b pb-2 sm:border-b-0 sm:pb-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted-foreground",
											children: "Price"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-base font-bold text-accent",
											children: property.price
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b pb-2 sm:border-b-0 sm:pb-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted-foreground",
											children: "Location"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-semibold text-primary",
											children: property.location
										})]
									}),
									property.detailedFeatures?.map((feat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b pb-2 sm:border-b-0 sm:pb-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted-foreground",
											children: feat.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-semibold text-primary",
											children: feat.value
										})]
									}, feat.label))
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-bold text-primary uppercase tracking-wide",
								children: "Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm leading-relaxed text-muted-foreground bg-muted/30 p-5 rounded-lg border",
								children: property.description
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-bold text-primary uppercase tracking-wide",
								children: "Amenities & Key Features"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-3 sm:grid-cols-2 bg-card rounded-lg border p-6",
								children: property.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-sm text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-accent flex-shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
								}, f))
							})]
						}),
						property.priceBreakup && property.priceBreakup.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-card rounded-lg border p-6 shadow-sm space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-xl font-bold text-primary border-b pb-3 uppercase tracking-wide flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-5 w-5 text-accent" }), " Price Breakup & Charges"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden rounded-md border",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "min-w-full divide-y divide-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
											className: "bg-muted/50",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-muted-foreground",
												children: "Component / Fee Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												className: "px-6 py-3 text-right text-xs font-bold uppercase tracking-wider text-muted-foreground",
												children: "Amount"
											})] })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "bg-card divide-y divide-border",
											children: property.priceBreakup.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: item.isTotal ? "bg-accent/10 font-bold" : "",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4 text-sm text-primary font-medium",
													children: item.label
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													className: "px-6 py-4 text-right text-sm font-semibold text-primary",
													children: item.value
												})]
											}, idx))
										})]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-2.5 text-xs text-muted-foreground bg-muted/20 p-3 rounded border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-accent flex-shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Prices listed above are estimates based on standard calculations. Utility bills and actual charges may vary based on exact usage and final agreement." })]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-24 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, {
							subject: `Inquiry for ${property.title} (ID: ${property.id})`,
							defaultInterest,
							formTitle: "Inquire About This Property",
							formSubtitle: "Fill out the form below and our property expert will reach out directly.",
							formIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "h-6 w-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-primary text-primary-foreground rounded-lg p-6 shadow-md space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-bold text-accent uppercase tracking-wide",
									children: "Direct Contact"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-primary-foreground/80",
									children: "Prefer direct calling? Speak to our expert property consultant instantly."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "tel:+918595777428",
										className: "flex items-center gap-3 rounded bg-white/10 p-3 hover:bg-white/15 transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase font-bold text-accent",
											children: "Call Agent"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-bold",
											children: "+91 8595777428"
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "tel:+919311510866",
										className: "flex items-center gap-3 rounded bg-white/10 p-3 hover:bg-white/15 transition",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] uppercase font-bold text-accent",
											children: "Office Desk"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-bold",
											children: "+91 9311510866"
										})] })]
									})]
								})
							]
						})]
					})
				})]
			})
		]
	}) });
}
//#endregion
export { PropertyDetailPage as component };
