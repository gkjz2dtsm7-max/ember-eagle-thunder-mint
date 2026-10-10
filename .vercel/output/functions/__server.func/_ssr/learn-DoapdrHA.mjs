import { C as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as PageIntro, s as SiteShell } from "./site-shell-BUKrBx4s.mjs";
import { t as CENSUS } from "./census-D5skQ1iM.mjs";
import { n as LEARN_PAGES } from "./civic-Cvq2BSta.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn-DoapdrHA.js
var import_jsx_runtime = require_jsx_runtime();
function LearnPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Learn",
		title: "How to read Gulf County",
		dek: "Short briefings behind the trackers. Heritage, the storm, the bay, the turtles, and the sources."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-cream-soft p-6",
					id: "heritage",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: LEARN_PAGES[0].title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "St. Joseph was a boom town that vanished. Port St. Joe grew around a mill, a port, and a paper economy. Cape San Blas has always been the wild edge: lighthouse, turtles, and a road that storms keep rewriting. Local Studies treats that memory as civic infrastructure, not nostalgia."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-cream-soft p-6",
					id: "michael",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: LEARN_PAGES[1].title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: [
							"Hurricane Michael made landfall as a Category 5 in October 2018. The 2020 Census counted ",
							CENSUS.population2020.toLocaleString(),
							" people, down from the pre-storm years. The 2025 estimate of ",
							CENSUS.population2025.toLocaleString(),
							" is a recovery line. Permits, clinics, and school enrollment are the honest trackers."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-cream-soft p-6",
					id: "bay",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: LEARN_PAGES[2].title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "St. Joseph Bay is an aquatic preserve. Seagrass holds scallops, trout, and the county's visitor economy. Treat it like a factory floor: no prop scars if you can help it, no trash, and harvest only inside FWC rules."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-cream-soft p-6",
					id: "turtles",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold",
							children: LEARN_PAGES[3].title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: "Nesting season is May 1 through October 31. The peninsula is one of the most important loggerhead shores in northwest Florida. Lights out, fill the holes, stay off the dunes. Open the turtle tracker for the 2026 park snapshot."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trackers/$id",
							params: { id: "turtles" },
							className: "mt-3 inline-block text-sm font-semibold text-forest",
							children: "Open turtle tracker"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl border border-line bg-cream-soft p-6",
					id: "kids",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-bold",
						children: "For kids"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "Gulf County is a living classroom: loggerheads on the cape, scallops in the bay, a lighthouse that moved inland, and a Saturday market on the waterfront. Story time at the library, youth fishing clinics, and nest-safe beach days are on the shared calendar. Bring a grown-up, fill the holes, and leave the dunes alone."
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mt-6 rounded-xl border border-line bg-paper p-6",
			id: "sources",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-bold",
				children: LEARN_PAGES[4].title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-4 grid gap-2 text-sm leading-relaxed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "1. U.S. Census Bureau QuickFacts for Gulf County, Florida (2025 population estimate, 2020-2024 ACS, 2023 business patterns)." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2. Visitor spending, jobs, wages, and taxes: Local Studies 2024 estimates for the county tourism narrative. Confirm with Gulf County TDC before official use." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "3. Sea turtle nest counts: WMBB / mypanhandle.com reporting on T.H. Stone Memorial St. Joseph Peninsula State Park, July 10, 2026. FWC and park staff hold the live log." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "4. Festival dates: Florida Scallop, Music and Arts Festival (Sept 5-6, 2026, Beacon Hill) and Forgotten Music Festival (Oct 10-11, 2026)." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "5. Fishing and scallop rules: Florida Fish and Wildlife Conservation Commission. Dates move. Check MyFWC." })
				]
			})]
		})]
	})] });
}
//#endregion
export { LearnPage as component };
