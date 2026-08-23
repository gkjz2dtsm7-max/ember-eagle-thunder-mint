import { o as __toESM } from "../_runtime.mjs";
import { H as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as PageIntro, n as BUSINESSES, o as CtaLink, p as cn, r as BUSINESS_CATEGORIES, u as SiteShell } from "./site-shell-DeaECsn-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/business-DgTcNGyj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BusinessPage() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const list = (0, import_react.useMemo)(() => cat === "All" ? BUSINESSES : BUSINESSES.filter((b) => b.category === cat), [cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Business directory",
		title: "Discover and support local",
		dek: "Shops, marinas, clinics, civic offices, builders, and the people who keep Gulf County working. Listings are a public directory, not paid endorsements unless marked as a sponsor."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: ["All", ...BUSINESS_CATEGORIES].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setCat(c),
					className: cn("rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider", cat === c ? "bg-forest text-cream" : "bg-foam text-forest"),
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col rounded-xl border border-line bg-cream-soft p-5 shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[11px] font-bold uppercase tracking-[0.16em] text-moss",
							children: [
								b.category,
								" · ",
								b.city,
								b.highlight ? " · Featured" : ""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-lg font-bold",
							children: b.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 flex-1 text-sm leading-relaxed text-muted",
							children: b.blurb
						}),
						b.address ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-ink",
							children: b.address
						}) : null,
						b.website ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: b.website,
							className: "mt-3 text-sm font-semibold text-forest hover:underline",
							target: "_blank",
							rel: "noreferrer",
							children: "Visit site"
						}) : null
					]
				}, b.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-xl bg-forest p-6 text-cream md:flex md:items-center md:justify-between md:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: "Want your business on this list and in the calendar?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-cream/80",
					children: "Add events for free. Sponsor packages put you on the homepage."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-3 md:mt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/calendar",
						variant: "inverse",
						children: "Add an event"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/advertise",
						variant: "photoOutline",
						children: "Sponsor kits"
					})]
				})]
			})
		]
	})] });
}
//#endregion
export { BusinessPage as component };
