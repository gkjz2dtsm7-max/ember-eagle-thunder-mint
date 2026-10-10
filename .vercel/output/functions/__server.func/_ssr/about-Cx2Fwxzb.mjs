import { C as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as CtaLink, o as PageIntro, s as SiteShell } from "./site-shell-BUKrBx4s.mjs";
import { i as PHOTO_CREDITS } from "./home-KtL4kwww.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Cx2Fwxzb.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: "About",
			title: "Local Studies is a civic front door",
			dek: "Real data. Local stories. Stronger community. Built for Gulf County residents, businesses, churches, and visitors who need one honest place to look."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-[1240px] gap-8 px-4 pb-8 md:grid-cols-[1.1fr_0.9fr] md:px-6",
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
				src: "/photos/hero-indian-pass.jpg",
				alt: "Sunset over Indian Pass, Port St. Joe, Gulf County, Florida",
				className: "h-full min-h-64 rounded-xl object-cover"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-bold uppercase tracking-[0.16em] text-navy",
					children: "Photo credits"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-3xl text-sm text-muted",
					children: "Site photography is verified Gulf County, Florida. We use public Wikimedia photographs with the licenses required by their authors. Reid Avenue streetscapes are 2010 historic downtown views. If you have a current photo of the Saturday market, a working shrimp boat, or Reid Avenue after 2018, send it to info@localstudies.org."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-4 grid gap-3 text-sm text-ink/90 md:grid-cols-2",
					children: PHOTO_CREDITS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-line bg-paper p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-bold text-navy",
								children: [
									i + 1,
									". ",
									c.work
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-muted",
								children: [
									c.place,
									". ",
									c.by,
									", ",
									c.year,
									". ",
									c.license,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs uppercase tracking-wider text-muted",
								children: c.used
							})
						]
					}, c.work))
				})
			]
		})
	] });
}
//#endregion
export { AboutPage as component };
