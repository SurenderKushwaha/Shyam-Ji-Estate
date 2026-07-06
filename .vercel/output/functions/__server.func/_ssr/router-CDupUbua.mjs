import { r as __toESM } from "../_runtime.mjs";
import { n as waLink, t as BRAND } from "./brand-B9a_wQAu.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { N as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Menu, b as Mail, h as Phone, t as X, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as Route$10 } from "./blog._slug-D-AAqZyv.mjs";
import { t as Route$11 } from "./properties._id-C5lBbc6t.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CDupUbua.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D2GAVQnI.css";
var logo_default = "/assets/logo--V_p2o0m.png";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/pg-hostel",
		label: "PG & Hostel"
	},
	{
		to: "/rent",
		label: "Rent Property"
	},
	{
		to: "/buy",
		label: "Buy Property"
	},
	{
		to: "/commercial",
		label: "Commercial"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 bg-background/95 backdrop-blur shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex items-center justify-between py-1 md:py-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default,
						alt: "Shree Shyam Ji Estate Logo",
						className: "h-14 sm:h-16 md:h-20 object-contain"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-5 xl:gap-6",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "text-xs xl:text-sm font-semibold uppercase tracking-wide text-primary/80 transition hover:text-accent whitespace-nowrap",
						activeProps: { className: "text-accent border-b-2 border-accent pb-1" },
						activeOptions: { exact: n.to === "/" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${BRAND.phones[0]}`,
						className: "hidden md:inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-xs font-bold uppercase text-accent-foreground shadow-gold transition hover:brightness-110 whitespace-nowrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call Now"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle menu",
						className: "lg:hidden p-2.5 text-primary rounded-md hover:bg-muted transition-colors",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t bg-background shadow-lg",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-4 flex flex-col gap-0.5",
				children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "flex items-center py-3 px-2 text-sm font-semibold uppercase tracking-wide text-primary rounded-lg hover:bg-muted transition-colors",
					activeProps: { className: "text-accent bg-accent/5" },
					activeOptions: { exact: n.to === "/" },
					children: n.label
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 pt-3 border-t border-border/40",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `tel:${BRAND.phones[0]}`,
						className: "flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-bold uppercase text-accent-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call Now"]
					})
				})]
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-white border-t border-border/40 text-foreground py-10 sm:py-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex flex-col items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center max-w-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_default,
							alt: "Shree Shyam Ji Estate Logo",
							className: "h-14 sm:h-16 md:h-20 object-contain"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed font-medium",
						children: "Your Trusted Property Partner in Old Rajinder Nagar"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-7 sm:mt-8 text-xs font-semibold uppercase tracking-wider text-primary/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-accent transition py-1",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-border/60 hidden sm:inline",
							children: "|"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-accent transition py-1",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-border/60 hidden sm:inline",
							children: "|"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog",
							className: "hover:text-accent transition py-1",
							children: "Blog"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-border/60 hidden sm:inline",
							children: "|"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-accent transition py-1",
							children: "About"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-center justify-center gap-y-3 gap-x-6 mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-border/40 w-full text-xs text-muted-foreground font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${BRAND.email}`,
							className: "flex items-center justify-center gap-1.5 hover:text-accent transition font-medium break-all",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-3.5 w-3.5 text-accent shrink-0" }),
								" ",
								BRAND.email
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-border/60 hidden md:inline",
							children: "•"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center justify-center gap-1.5 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 text-accent shrink-0" }),
								" ",
								BRAND.address
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center text-xs text-muted-foreground/80 mt-5 sm:mt-6 font-medium",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ",
						BRAND.name,
						". All rights reserved."
					]
				})
			]
		})
	});
}
function WhatsAppFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: waLink(`Hi ${BRAND.name}, I'd like to know more about your properties.`),
		target: "_blank",
		rel: "noopener",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe transition hover:scale-110",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 48 48",
			className: "h-8 w-8",
			fill: "white",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M24 4C13 4 4 13 4 24c0 3.6 1 6.9 2.7 9.8L4 44l10.5-2.7C17.3 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6-.8-8.6-2.3l-.6-.4-6.2 1.6 1.6-6-.4-.6C8.8 30.1 8 27.1 8 24 8 15.2 15.2 8 24 8s16 7.2 16 16-7.2 16-16 16zm8.8-11.7c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.5-1.1 1.5-1.4 1.8-.3.3-.5.4-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.8-2.6-3.2-.3-.5 0-.7.2-1l.7-.8c.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8l-1.4-3.3c-.4-.9-.7-.8-1-.8h-.8c-.3 0-.8.1-1.2.6C16.5 18 15 19.5 15 22.1c0 2.5 1.8 5 2.1 5.4.3.4 3.6 5.5 8.7 7.7 1.2.5 2.2.8 2.9 1 1.2.4 2.4.3 3.2.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.1-.2-.4-.3-.9-.5z" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" })]
	});
}
var loader_icon_default = "/assets/loader-icon-B7KnuYHx.webp";
function PageLoader() {
	const [visible, setVisible] = (0, import_react.useState)(true);
	const [fadeOut, setFadeOut] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const finishLoading = () => {
			setFadeOut(true);
			setTimeout(() => setVisible(false), 600);
		};
		if (document.readyState === "complete") finishLoading();
		else {
			window.addEventListener("load", finishLoading);
			const fallbackTimer = setTimeout(finishLoading, 8e3);
			return () => {
				window.removeEventListener("load", finishLoading);
				clearTimeout(fallbackTimer);
			};
		}
	}, []);
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[9999] flex items-center justify-center bg-white",
		style: {
			opacity: fadeOut ? 0 : 1,
			transition: "opacity 0.6s ease-in-out",
			pointerEvents: fadeOut ? "none" : "all"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				position: "absolute",
				width: 280,
				height: 280,
				borderRadius: "50%",
				background: "radial-gradient(circle, rgba(196,149,69,0.1) 0%, transparent 70%)",
				animation: "loaderPulse 2s ease-in-out infinite"
			} }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					position: "relative",
					width: 160,
					height: 160
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 160 160",
						style: {
							position: "absolute",
							inset: 0,
							width: "100%",
							height: "100%",
							animation: "loaderSpin 2s linear infinite"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "80",
							cy: "80",
							r: "74",
							fill: "none",
							stroke: "#C49545",
							strokeWidth: "2",
							strokeDasharray: "120 360",
							strokeLinecap: "round"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 160 160",
						style: {
							position: "absolute",
							inset: 10,
							width: "calc(100% - 20px)",
							height: "calc(100% - 20px)",
							animation: "loaderSpinReverse 3s linear infinite"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "70",
							cy: "70",
							r: "65",
							fill: "none",
							stroke: "rgba(196,149,69,0.3)",
							strokeWidth: "1.5",
							strokeDasharray: "60 360",
							strokeLinecap: "round"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: loader_icon_default,
						alt: "Shree Shyam Ji Estate",
						style: {
							position: "absolute",
							inset: 18,
							width: "calc(100% - 36px)",
							height: "calc(100% - 36px)",
							objectFit: "contain"
						}
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes loaderPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.12); opacity: 1; }
        }
        @keyframes loaderSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes loaderSpinReverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      ` })
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-bold uppercase text-accent-foreground",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-accent px-4 py-2 text-sm font-bold uppercase text-accent-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border px-4 py-2 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Shree Shyam Ji Estate | Property Experts in Old Rajinder Nagar" },
			{
				name: "description",
				content: "Trusted property dealer in Old Rajinder Nagar for Buy, Sell, Rent, PG & Hostel, and Commercial properties."
			},
			{
				property: "og:site_name",
				content: "Shree Shyam Ji Estate"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "RealEstateAgent",
				name: "Shree Shyam Ji Estate",
				telephone: ["+91-8595777428", "+91-9311510866"],
				email: "info@shreeshyamjiestate.com",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Shop No 56, Near Batra Medical, Old Rajinder Nagar",
					addressLocality: "New Delhi",
					postalCode: "110060",
					addressCountry: "IN"
				},
				areaServed: [
					"Old Rajinder Nagar",
					"New Rajinder Nagar",
					"Karol Bagh"
				]
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageLoader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
		]
	});
}
var $$splitComponentImporter$8 = () => import("./rent-K6vPSfFZ.mjs");
var Route$8 = createFileRoute("/rent")({
	head: () => ({
		meta: [
			{ title: "Rent Property in Old Rajinder Nagar | Shree Shyam Ji Estate" },
			{
				name: "description",
				content: "Find premium rental properties, apartments and builder floors in Old Rajinder Nagar, New Rajinder Nagar and Karol Bagh."
			},
			{
				property: "og:title",
				content: "Rent Property in Old Rajinder Nagar | Shree Shyam Ji Estate"
			},
			{
				property: "og:url",
				content: "/rent"
			}
		],
		links: [{
			rel: "canonical",
			href: "/rent"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./pg-hostel-CFDi2FSo.mjs");
var Route$7 = createFileRoute("/pg-hostel")({
	head: () => ({
		meta: [
			{ title: "PG & Hostels in Old Rajinder Nagar | Shree Shyam Ji Estate" },
			{
				name: "description",
				content: "Find safe, comfortable and well-equipped PG accommodations and hostels in Old Rajinder Nagar for students and professionals."
			},
			{
				property: "og:title",
				content: "PG & Hostels in Old Rajinder Nagar | Shree Shyam Ji Estate"
			},
			{
				property: "og:url",
				content: "/pg-hostel"
			}
		],
		links: [{
			rel: "canonical",
			href: "/pg-hostel"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-DGVAHqm6.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Us | Shree Shyam Ji Estate" },
			{
				name: "description",
				content: "Visit our office near Batra Medical in Old Rajinder Nagar, or call / WhatsApp us for any property inquiry. We respond within an hour, 7 days a week."
			},
			{
				property: "og:title",
				content: "Contact Shree Shyam Ji Estate"
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./commercial-DqNaTkCx.mjs");
var Route$5 = createFileRoute("/commercial")({
	head: () => ({
		meta: [
			{ title: "Commercial Property in Old Rajinder Nagar | Shree Shyam Ji Estate" },
			{
				name: "description",
				content: "Find premium commercial shops, offices, and retail spaces for buy or rent in Old Rajinder Nagar, New Rajinder Nagar and Karol Bagh."
			},
			{
				property: "og:title",
				content: "Commercial Property in Old Rajinder Nagar | Shree Shyam Ji Estate"
			},
			{
				property: "og:url",
				content: "/commercial"
			}
		],
		links: [{
			rel: "canonical",
			href: "/commercial"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./buy-Cw2zknUg.mjs");
var Route$4 = createFileRoute("/buy")({
	head: () => ({
		meta: [
			{ title: "Buy Property in Old Rajinder Nagar | Shree Shyam Ji Estate" },
			{
				name: "description",
				content: "Browse builder floors, apartments and houses for sale in Old Rajinder Nagar, New Rajinder Nagar and Karol Bagh."
			},
			{
				property: "og:title",
				content: "Buy Property in Old Rajinder Nagar"
			},
			{
				property: "og:url",
				content: "/buy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/buy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./blog-GHsbigBI.mjs");
var Route$3 = createFileRoute("/blog")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./about-BG3K7rxW.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Us | Shree Shyam Ji Estate" },
			{
				name: "description",
				content: "Shree Shyam Ji Estate is a trusted property partner in Old Rajinder Nagar, New Rajinder Nagar, and Karol Bagh."
			},
			{
				property: "og:title",
				content: "About Shree Shyam Ji Estate"
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-CZV0Ktbe.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Shree Shyam Ji Estate | Buy, Rent, PG & Commercial in Old Rajinder Nagar" },
			{
				name: "description",
				content: "Find residential, commercial and PG properties in Old Rajinder Nagar, New Rajinder Nagar and Karol Bagh with trusted local experts."
			},
			{
				property: "og:title",
				content: "Shree Shyam Ji Estate | Old Rajinder Nagar Property Experts"
			},
			{
				property: "og:description",
				content: "Buy, Sell, Rent, PG & Hostel and Commercial property experts in Old Rajinder Nagar."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./blog.index-BkrfSioz.mjs");
var Route = createFileRoute("/blog/")({
	head: () => ({
		meta: [
			{ title: "Blog & Property Guides | Shree Shyam Ji Estate" },
			{
				name: "description",
				content: "Property guides, market insights, and tips for buying, renting, and investing in Old Rajinder Nagar, New Rajinder Nagar, and Karol Bagh."
			},
			{
				property: "og:title",
				content: "Blog & Property Guides | Shree Shyam Ji Estate"
			},
			{
				property: "og:url",
				content: "/blog"
			}
		],
		links: [{
			rel: "canonical",
			href: "/blog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var RentRoute = Route$8.update({
	id: "/rent",
	path: "/rent",
	getParentRoute: () => Route$9
});
var PgHostelRoute = Route$7.update({
	id: "/pg-hostel",
	path: "/pg-hostel",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var CommercialRoute = Route$5.update({
	id: "/commercial",
	path: "/commercial",
	getParentRoute: () => Route$9
});
var BuyRoute = Route$4.update({
	id: "/buy",
	path: "/buy",
	getParentRoute: () => Route$9
});
var BlogRoute = Route$3.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var BlogIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogRoute
});
var PropertiesIdRoute = Route$11.update({
	id: "/properties/$id",
	path: "/properties/$id",
	getParentRoute: () => Route$9
});
var BlogRouteChildren = {
	BlogSlugRoute: Route$10.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => BlogRoute
	}),
	BlogIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute: BlogRoute._addFileChildren(BlogRouteChildren),
	BuyRoute,
	CommercialRoute,
	ContactRoute,
	PgHostelRoute,
	RentRoute,
	PropertiesIdRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
