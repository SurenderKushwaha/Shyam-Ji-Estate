import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { F as ChevronLeft, P as ChevronRight, c as Star, m as Quote } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Testimonials-CdlsfQ7K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ first, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "section-title",
			children: [
				first,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-accent",
					children: accent
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-2 flex items-center justify-center gap-2 text-accent",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-accent/60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "◆" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-accent/60" })
			]
		})]
	});
}
var items = [
	{
		quote: "Excellent service by Shree Shyam Ji Estate. They helped me find a comfortable PG in Old Rajinder Nagar within my budget. The entire process was smooth and transparent.",
		name: "Naira",
		role: "PG Resident",
		stars: 5
	},
	{
		quote: "I had a great experience with Shree Shyam Ji Estate. Their team showed multiple options and helped me finalize the perfect rental property quickly.",
		name: "Sadaf",
		role: "Tenant",
		stars: 5
	},
	{
		quote: "Very professional and trustworthy property consultants. They understand customer requirements and provide genuine property options.",
		name: "Muniraj",
		role: "Client",
		stars: 5
	},
	{
		quote: "As a UPSC aspirant, finding a suitable PG in Old Rajinder Nagar was a challenge. Shree Shyam Ji Estate helped me get the perfect accommodation near my coaching institute. Highly recommended.",
		name: "Arya",
		role: "UPSC Aspirant",
		stars: 5
	},
	{
		quote: "Shree Shyam Ji Estate helped us find a suitable commercial space in a prime location. Very cooperative team and transparent dealings.",
		name: "Krish Nagar",
		role: "Business Owner",
		stars: 5
	},
	{
		quote: "Finding a rental property became so easy with Shree Shyam Ji Estate. The staff was polite, supportive, and guided us throughout the process.",
		name: "Pooja",
		role: "Tenant",
		stars: 5
	},
	{
		quote: "I came to Delhi for UPSC preparation and was looking for a good PG. Shree Shyam Ji Estate showed multiple options and helped me find a clean and comfortable place within my budget.",
		name: "Satvik",
		role: "UPSC Aspirant",
		stars: 5
	},
	{
		quote: "One of the best property consultants in Old Rajinder Nagar. They helped me find a safe PG near my coaching centre. Honest advice and quick response.",
		name: "Vidhi Rajpurohit",
		role: "UPSC Aspirant",
		stars: 5
	},
	{
		quote: "I was looking for a PG near coaching institutes and Shree Shyam Ji Estate found the perfect accommodation for me. Highly recommended!",
		name: "Pooja Kamat",
		role: "UPSC Aspirant",
		stars: 5
	},
	{
		quote: "Being a lawyer relocating from Patna, I was searching for a secure and comfortable accommodation in Old Rajinder Nagar. Shree Shyam Ji Estate helped me find the ideal place quickly. Excellent service.",
		name: "Nandini Jha",
		role: "Lawyer",
		stars: 5
	},
	{
		quote: "Shree Shyam Ji Estate understood my requirements perfectly and helped me find a well-furnished rental property. The entire process was smooth and hassle-free.",
		name: "Shruti Singh",
		role: "Software Engineer",
		stars: 5
	},
	{
		quote: "I moved from Lucknow for work and was worried about finding a suitable accommodation. Thanks to Shree Shyam Ji Estate, I found a clean and secure place within a day.",
		name: "Vanshika Shrivastava",
		role: "Working Professional",
		stars: 5
	},
	{
		quote: "I came from Punjab for UPSC preparation and needed a PG close to coaching institutes. Shree Shyam Ji Estate provided multiple options and helped me choose the best one. Great service and genuine people.",
		name: "Vanshika Mangla",
		role: "UPSC Aspirant",
		stars: 5
	}
];
function Testimonials() {
	const [i, setI] = (0, import_react.useState)(0);
	const t = items[i];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-muted/50 py-14 sm:py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				first: "WHAT OUR",
				accent: "CLIENTS SAY"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 mx-auto max-w-3xl text-center relative px-10 sm:px-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mx-auto h-8 w-8 text-accent opacity-60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex items-center justify-center gap-1",
						children: Array.from({ length: t.stars }).map((_, starIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" }, starIdx))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-sm sm:text-base text-foreground md:text-lg italic font-medium leading-relaxed",
						children: [
							"\"",
							t.quote,
							"\""
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 font-bold text-accent",
						children: t.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wider text-muted-foreground mt-1",
						children: t.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Previous",
						onClick: () => setI((i - 1 + items.length) % items.length),
						className: "absolute left-0 top-1/2 -translate-y-1/2 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border bg-card text-primary hover:bg-accent hover:text-accent-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Next",
						onClick: () => setI((i + 1) % items.length),
						className: "absolute right-0 top-1/2 -translate-y-1/2 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full border bg-card text-primary hover:bg-accent hover:text-accent-foreground transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-4 w-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex items-center justify-center gap-1.5 flex-wrap max-w-xs sm:max-w-md mx-auto",
						children: items.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": `Go to slide ${idx + 1}`,
							onClick: () => setI(idx),
							className: `h-2 w-2 rounded-full transition-all duration-300 ${idx === i ? "bg-accent w-4" : "bg-muted-foreground/30"}`
						}, idx))
					})
				]
			})]
		})
	});
}
//#endregion
export { Testimonials as t };
