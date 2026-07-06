import { r as __toESM } from "../_runtime.mjs";
import { n as waLink, t as BRAND } from "./brand-B9a_wQAu.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { I as ChevronDown, N as ChevronUp, O as Globe, b as Mail, h as Phone, j as Clock, y as MapPin } from "../_libs/lucide-react.mjs";
import { t as InquiryForm } from "./InquiryForm-to4HXRL6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DGVAHqm6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FAQS = [
	{
		q: "What areas do you cover?",
		a: "We primarily serve Old Rajinder Nagar, New Rajinder Nagar, and Karol Bagh. We also handle select properties in Patel Nagar, Rajouri Garden, and other West Delhi localities."
	},
	{
		q: "How quickly will you respond to my inquiry?",
		a: "We typically respond within one hour during business hours (10 AM – 7 PM, 7 days a week). For urgent matters, please call or WhatsApp us directly."
	},
	{
		q: "Do you charge a consultation fee?",
		a: "Our initial consultation is completely free. Brokerage fees apply only when a deal is finalised, and they vary by transaction type. We'll be fully transparent about costs before you commit."
	},
	{
		q: "Can I visit the office without an appointment?",
		a: "Yes! Walk-ins are welcome at our office - Shop No 56, Near Batra Medical, Old Rajinder Nagar - from 10:00 AM to 7:00 PM, Monday through Sunday."
	},
	{
		q: "How do I list my property with you?",
		a: "Simply fill in the inquiry form, WhatsApp us, or visit our office. Share the property details and we'll evaluate it, suggest a fair price, and begin marketing it to our buyer/tenant network immediately."
	}
];
function WhatsAppIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
	});
}
function FaqItem({ q, a, index }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-border/40 rounded-2xl overflow-hidden",
		style: { animationDelay: `${index * 60}ms` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen(!open),
			className: "w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-[#fdf8f0] transition-colors group",
			"aria-expanded": open,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold text-[#0B1528] text-sm md:text-base group-hover:text-[#C49545] transition-colors",
				children: q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "shrink-0 h-8 w-8 rounded-full bg-[#C49545]/10 flex items-center justify-center text-[#C49545] transition-transform duration-200",
				children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden transition-all duration-300 ease-in-out",
			style: { maxHeight: open ? "200px" : "0px" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-6 py-4 text-sm text-muted-foreground leading-relaxed border-t border-border/30 bg-[#fdfaf5]",
				children: a
			})
		})]
	});
}
function ContactPage() {
	const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4614.112801817546!2d77.1848967!3d28.6411729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03001c12a76b%3A0x62cd09576b0c535a!2sShree%20Shyam%20Estate!5e1!3m2!1sen!2sin!4v1782491412547!5m2!1sen!2sin";
	const waMessage = waLink("Hi! I'd like to inquire about a property.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			style: { background: "linear-gradient(135deg, #0B1528 0%, #15243d 50%, #0B1528 100%)" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-10",
					style: { background: "radial-gradient(circle, #C49545 0%, transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full opacity-8",
					style: { background: "radial-gradient(circle, #C49545 0%, transparent 70%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x py-12 sm:py-16 md:py-20 relative z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[#C49545] text-xs font-bold uppercase tracking-[0.2em] mb-3",
								children: "We're here to help you"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-none tracking-tight",
								children: "Contact Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-white/60 text-base md:text-lg leading-relaxed",
								children: [
									"Let's Connect & Find the",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#C49545] font-semibold",
										children: "Right Property"
									}),
									" for You."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-white/50 text-sm",
								children: "Have questions or need assistance?Our team is here to help you find the perfect property that fits your needs."
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-12 sm:py-16 grid gap-10 lg:grid-cols-[1fr_1.25fr] items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[#C49545] text-xs font-bold uppercase tracking-[0.2em] mb-2",
					children: "Get in touch"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-2xl md:text-3xl font-bold text-[#0B1528] leading-tight",
					children: ["We're Here to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#C49545]",
						children: "Help You"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground leading-relaxed",
					children: "Our team is available 7 days a week. Drop by the office, call, or send us a message?we usually respond within an hour."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#C49545]/30 transition-all group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 shrink-0 rounded-xl bg-[#0B1528] flex items-center justify-center text-[#C49545]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1",
								children: "Phone"
							}), BRAND.phones.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:+91${p}`,
								className: "block text-sm font-semibold text-[#0B1528] hover:text-[#C49545] transition-colors",
								children: [
									"+91 ",
									p.slice(0, 5),
									" ",
									p.slice(5)
								]
							}, p))] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waMessage,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md hover:border-green-400/50 transition-all group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 shrink-0 rounded-xl bg-green-500 flex items-center justify-center text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1",
									children: "WhatsApp"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-sm font-semibold text-[#0B1528] group-hover:text-green-600 transition-colors",
									children: [
										"+91 ",
										BRAND.phones[1].slice(0, 5),
										" ",
										BRAND.phones[1].slice(5)
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Chat with us instantly"
								})
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#C49545]/30 transition-all group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 shrink-0 rounded-xl bg-[#0B1528] flex items-center justify-center text-[#C49545]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${BRAND.email}`,
								className: "text-sm font-semibold text-[#0B1528] hover:text-[#C49545] transition-colors break-all",
								children: BRAND.email
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#C49545]/30 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 shrink-0 rounded-xl bg-[#0B1528] flex items-center justify-center text-[#C49545]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1",
								children: "Website"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://${BRAND.website}`,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-sm font-semibold text-[#0B1528] hover:text-[#C49545] transition-colors",
								children: BRAND.website
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#C49545]/30 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 shrink-0 rounded-xl bg-[#0B1528] flex items-center justify-center text-[#C49545]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1",
								children: "Office"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-[#0B1528]",
								children: BRAND.address
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4 rounded-2xl border border-border/40 bg-white p-4 shadow-sm hover:shadow-md hover:border-[#C49545]/30 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 shrink-0 rounded-xl bg-[#0B1528] flex items-center justify-center text-[#C49545]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-bold uppercase tracking-wider text-muted-foreground/70 mb-1",
									children: "Office Hours"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-sm font-semibold text-[#0B1528]",
									children: "Mon – Sun: 10:00 AM – 7:00 PM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground mt-0.5",
									children: "Open every day of the week"
								})
							] })]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InquiryForm, { subject: "Website Contact Inquiry" }) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x pb-12 sm:pb-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[#C49545] text-xs font-bold uppercase tracking-[0.2em] mb-2",
						children: "Find Us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-xl sm:text-2xl font-bold text-[#0B1528]",
						children: ["Visit Our ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[#C49545]",
							children: "Office"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-3xl border border-border/40 shadow-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Shree Shyam Ji Estate | Office Location",
						src: mapSrc,
						width: "100%",
						height: "300",
						style: { border: 0 },
						allowFullScreen: true,
						loading: "lazy",
						referrerPolicy: "strict-origin-when-cross-origin",
						className: "block w-full sm:h-[380px] md:h-[450px]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-sm text-muted-foreground text-center",
					children: ["📍 ", BRAND.address]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-[#f9f6f0] py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#C49545] text-xs font-bold uppercase tracking-[0.2em] mb-2",
							children: "Got Questions?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl md:text-3xl font-bold text-[#0B1528]",
							children: ["Frequently Asked ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#C49545]",
								children: "Questions"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground max-w-lg mx-auto",
							children: "Quick answers to the questions we hear most often. Still not sure?Just ask us directly."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-2xl mx-auto space-y-3",
					children: FAQS.map((faq, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqItem, {
						q: faq.q,
						a: faq.a,
						index: i
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-14",
			style: { background: "linear-gradient(135deg, #C49545 0%, #d4a84b 50%, #C49545 100%)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl md:text-3xl font-black text-white uppercase tracking-wide",
						children: "Ready to Find Your Dream Property?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-white/80 text-sm md:text-base max-w-md mx-auto",
						children: "Let our experts guide you?zero pressure, just genuine advice."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:+91${BRAND.phones[0]}`,
							className: "w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-white px-6 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-[#0B1528] shadow-xl hover:scale-105 transition-transform",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
								"Call Now: +91 ",
								BRAND.phones[0].slice(0, 5),
								" ",
								BRAND.phones[0].slice(5)
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: waMessage,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white hover:bg-white/20 hover:scale-105 transition-all",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-4 w-4" }), "WhatsApp Us"]
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { ContactPage as component };
