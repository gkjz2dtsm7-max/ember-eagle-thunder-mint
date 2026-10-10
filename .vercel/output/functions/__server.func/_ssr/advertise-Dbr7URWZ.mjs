import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as CtaLink, l as cn, o as PageIntro, s as SiteShell } from "./site-shell-BUKrBx4s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/advertise-Dbr7URWZ.js
var import_jsx_runtime = require_jsx_runtime();
var AD_PACKAGES = [
	{
		id: "premier",
		name: "Premier Partner",
		price: "$1,250 / mo",
		badge: "Best value",
		items: [
			"Premier banner (website)",
			"Top banner (app)",
			"Sponsor card (app)",
			"Featured sponsor box (website)",
			"Business spotlight (monthly)",
			"Social media feature (monthly)"
		]
	},
	{
		id: "growth",
		name: "Growth Partner",
		price: "$750 / mo",
		items: [
			"Website banner ad",
			"App top banner ad",
			"Sponsor card (app)",
			"Business spotlight (quarterly)"
		]
	},
	{
		id: "community",
		name: "Community Partner",
		price: "$450 / mo",
		items: ["Website rectangle ad", "Sponsor card (app)"]
	},
	{
		id: "local",
		name: "Local Supporter",
		price: "$200 / mo",
		items: ["Sponsor card (app only)"]
	}
];
var AD_IMPACT = [
	{
		label: "Annual visitors",
		value: "25K+"
	},
	{
		label: "App downloads, year 1",
		value: "10K+"
	},
	{
		label: "Avg. engagement time",
		value: "3 to 5 min"
	},
	{
		label: "More local visibility",
		value: "2.5x"
	}
];
function AdvertisePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "2026 media kit",
		title: "Reach locals. Engage visitors. Grow your business.",
		dek: "Website and app placements on Local Studies, the Gulf County civic hub. Packages for every budget, from a supporter card to an exclusive premier partnership."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-4 lg:grid-cols-4",
				children: AD_PACKAGES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: cn("flex flex-col rounded-xl border p-5 shadow-card", "badge" in p && p.badge ? "border-forest bg-forest text-cream" : "border-line bg-cream-soft"),
					children: [
						"badge" in p && p.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-bold uppercase tracking-[0.18em] text-sand",
							children: p.badge
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-bold uppercase tracking-[0.18em] text-moss",
							children: "Package"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-xl font-bold",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-2xl font-bold tabular",
							children: p.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 flex-1 space-y-2 text-sm",
							children: p.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", item] }, item))
						})
					]
				}, p.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: AD_IMPACT.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg bg-foam p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl font-bold tabular text-forest",
						children: i.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted",
						children: i.label
					})]
				}, i.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 rounded-xl border border-line bg-cream-soft p-6 md:flex md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold",
					children: "Let's grow Gulf County together"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Email info@localstudies.org. Mention Premier, Growth, Community, or Local Supporter."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
					to: "/calendar",
					variant: "primary",
					children: "Meanwhile, add your events"
				})]
			})
		]
	})] });
}
//#endregion
export { AdvertisePage as component };
