import { r as __toESM } from "../_runtime.mjs";
import { t as BRAND } from "./brand-B9a_wQAu.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { $ as CircleCheckBig, I as ChevronDown, X as House, b as Mail, g as MessageSquare, h as Phone, i as User, x as Lock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/InquiryForm-to4HXRL6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function InquiryForm({ subject = "Property Inquiry", defaultInterest = "Buy", formTitle = "Let's Find the Right Property for You", formSubtitle = "Fill in your details and we'll get back to you", formSubtitleHighlight = "shortly.", formIcon }) {
	const [data, setData] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		interest: defaultInterest,
		message: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setData((prev) => ({
			...prev,
			interest: defaultInterest
		}));
	}, [defaultInterest]);
	function validate() {
		const newErrors = {};
		if (!data.name.trim()) newErrors.name = "Please enter your name.";
		const digits = data.phone.replace(/\D/g, "");
		if (!digits) newErrors.phone = "Phone number is required.";
		else if (digits.length !== 10) newErrors.phone = "Enter a valid 10-digit phone number.";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	}
	const submit = (e) => {
		e.preventDefault();
		if (!validate()) return;
		const text = `*${subject}*\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || "N/A"}\nInterest: ${data.interest}\nMessage: ${data.message}`;
		window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
		setSubmitted("whatsapp");
		setTimeout(() => setSubmitted(null), 4e3);
	};
	const mail = () => {
		if (!validate()) return;
		const body = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nInterest: ${data.interest}\n\n${data.message}`;
		window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
		setSubmitted("email");
		setTimeout(() => setSubmitted(null), 4e3);
	};
	const inp = "w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition shadow-sm";
	const inpError = "w-full rounded-xl border border-red-300 bg-red-50/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-400 transition shadow-sm";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "@container rounded-3xl bg-white shadow-[0_15px_60px_rgba(0,0,0,0.06)] border border-border/20 p-6 md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-4 mb-6 pb-5 border-b border-border/30",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#0B1528] text-[#C49545]",
					children: formIcon ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-6 w-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-base font-extrabold text-[#0B1528] leading-snug",
					children: formTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground mt-1.5",
					children: [
						formSubtitle,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent font-semibold",
							children: formSubtitleHighlight
						})
					]
				})] })]
			}),
			submitted && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700 animate-in fade-in slide-in-from-top-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4 shrink-0 text-green-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: submitted === "whatsapp" ? "Opening WhatsApp — your message is ready to send!" : "Opening your email client — your message is ready to send!" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				noValidate: true,
				className: "grid gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 @[480px]:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "contact-name",
									required: true,
									placeholder: "Your Name",
									className: `${errors.name ? inpError : inp} pl-10`,
									value: data.name,
									onChange: (e) => {
										setData({
											...data,
											name: e.target.value
										});
										if (errors.name) setErrors((prev) => ({
											...prev,
											name: void 0
										}));
									}
								}),
								errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-red-500",
									children: errors.name
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "contact-phone",
									required: true,
									type: "tel",
									inputMode: "numeric",
									placeholder: "10-digit Phone Number",
									className: `${errors.phone ? inpError : inp} pl-10`,
									value: data.phone,
									maxLength: 10,
									onChange: (e) => {
										const val = e.target.value.replace(/\D/g, "").slice(0, 10);
										setData({
											...data,
											phone: val
										});
										if (errors.phone) setErrors((prev) => ({
											...prev,
											phone: void 0
										}));
									}
								}),
								errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-red-500",
									children: errors.phone
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 @[480px]:grid-cols-2 gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "contact-email",
								type: "email",
								placeholder: "Email Address (optional)",
								className: `${inp} pl-10`,
								value: data.email,
								onChange: (e) => setData({
									...data,
									email: e.target.value
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative rounded-xl border border-gray-200 bg-white px-4 py-2 flex flex-col justify-center min-h-[50px] shadow-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70",
									children: "I am looking to"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-bold text-[#0B1528] mt-0.5",
									children: data.interest
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									id: "contact-interest",
									className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
									value: data.interest,
									onChange: (e) => setData({
										...data,
										interest: e.target.value
									}),
									children: [
										"Buy",
										"Rent",
										"PG / Hostel",
										"Commercial",
										"Consultancy"
									].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										className: "text-foreground font-medium",
										children: o
									}, o))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "pointer-events-none absolute left-3.5 top-4 h-4 w-4 text-muted-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "contact-message",
							placeholder: "Tell us what you're looking for...",
							rows: 4,
							className: `${inp} pl-10 resize-none`,
							value: data.message,
							onChange: (e) => setData({
								...data,
								message: e.target.value
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 @[360px]:grid-cols-2 gap-3 mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							id: "contact-submit-whatsapp",
							type: "submit",
							className: "flex items-center justify-center gap-2 rounded-xl bg-[#C49545] px-4 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm transition-all hover:brightness-110 hover:scale-[1.02] cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								viewBox: "0 0 24 24",
								fill: "currentColor",
								className: "h-4 w-4 shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
							}), "SEND VIA WHATSAPP"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							id: "contact-submit-email",
							type: "button",
							onClick: mail,
							className: "flex items-center justify-center gap-2 rounded-xl border-2 border-[#0B1528] bg-white px-4 py-3.5 text-xs font-extrabold uppercase tracking-wider text-[#0B1528] transition hover:bg-[#0B1528]/5 hover:scale-[1.02] cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), "EMAIL US"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 text-[10px] text-muted-foreground/60 mt-4 w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-gray-200 flex-1" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5 text-muted-foreground/50" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"Your information is safe with us. We respect your",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent font-semibold",
										children: "privacy."
									})
								] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-gray-200 flex-1" })
						]
					})
				]
			})
		]
	});
}
//#endregion
export { InquiryForm as t };
