import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { P as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-Dt1HazNs.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ title, crumb, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		style: { background: "linear-gradient(135deg, #0B1528 0%, #15243d 50%, #0B1528 100%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full opacity-10",
				style: { background: "radial-gradient(circle, #C49545 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute -bottom-20 -left-20 h-[250px] w-[250px] rounded-full opacity-8",
				style: { background: "radial-gradient(circle, #C49545 0%, transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative z-10 py-10 sm:py-14 md:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2 text-[10px] sm:text-xs uppercase tracking-wider text-white/50 mb-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-[#C49545] transition-colors",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3 text-[#C49545]/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#C49545] font-semibold",
								children: crumb
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase leading-tight tracking-tight text-center",
						children: title
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-white/60 text-sm md:text-base text-center max-w-xl mx-auto leading-relaxed",
						children: subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-[#C49545]/40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#C49545] text-xs",
								children: "◆"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-12 bg-[#C49545]/40" })
						]
					})
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
