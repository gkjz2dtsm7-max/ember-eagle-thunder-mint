import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as PageIntro, o as CtaLink, u as SiteShell } from "./site-shell-DeaECsn-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-B15C3F0D.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "About",
		title: "Local Studies is a civic front door",
		dek: "Real data. Local stories. Stronger community. Built for Gulf County residents, businesses, churches, and visitors who need one honest place to look."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid w-full max-w-[1240px] gap-8 px-4 pb-16 md:grid-cols-[1.1fr_0.9fr] md:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4 text-sm leading-relaxed text-ink/90",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Local Studies gathers community data, a shared digital calendar, live coastal trackers, and a business directory so you do not have to hunt five Facebook groups to find out what is happening this weekend." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The calendar is community-contributed. If you organize a walk, a market, a fish fry, a concert, or a nest-watch, add it. Businesses and civic groups can keep their own listings current as the system grows." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This is not a city or county website. Figures from Census, FWC, and tourism partners are cited on the tracker pages. Visitor-economy totals are Local Studies estimates. When we are compiling rather than quoting, we say so." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Domain: localstudies.org. Contact: info@localstudies.org. Port St. Joe, Florida." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-3 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/calendar",
						children: "Open the calendar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaLink, {
						to: "/advertise",
						variant: "outline",
						children: "Sponsor Local Studies"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/photos/hero.jpg",
			alt: "Working waterfront and lighthouse, Port St. Joe",
			className: "h-full min-h-64 rounded-xl object-cover"
		})]
	})] });
}
//#endregion
export { AboutPage as component };
