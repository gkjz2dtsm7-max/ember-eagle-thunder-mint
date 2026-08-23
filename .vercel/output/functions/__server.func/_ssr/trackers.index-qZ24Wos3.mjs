import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as PageIntro, d as TRACKERS, u as SiteShell } from "./site-shell-DeaECsn-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trackers.index-qZ24Wos3.js
var import_jsx_runtime = require_jsx_runtime();
function TrackersPage() {
	const live = TRACKERS.filter((t) => t.group === "live");
	const civic = TRACKERS.filter((t) => t.group === "civic");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "All trackers",
		title: "Live conditions and civic numbers",
		dek: "Sea turtles, fishing, beach flags, and marine weather sit beside population, housing, economy, schools, and civic projects. Sources are named on each page."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-lg font-bold",
				children: "Live"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-4 sm:grid-cols-2",
				children: live.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackerCard, { ...t }, t.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 text-lg font-bold",
				children: "Civic data"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: civic.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackerCard, { ...t }, t.id))
			})
		]
	})] });
}
function TrackerCard({ id, title, dek, updated }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/trackers/$id",
		params: { id },
		className: "flex h-full flex-col rounded-xl border border-line bg-cream-soft p-5 shadow-card hover:shadow-lift",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-xl font-bold text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 flex-1 text-sm text-muted",
				children: dek
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-[11px] uppercase tracking-wider text-moss",
				children: updated
			})
		]
	}) });
}
//#endregion
export { TrackersPage as component };
