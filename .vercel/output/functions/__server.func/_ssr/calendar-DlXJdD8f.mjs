import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, S as useRouter, Z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ChevronRight, w as ChevronLeft } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { l as cn, o as PageIntro, r as Button, s as SiteShell, u as mergeEvents } from "./site-shell-BUKrBx4s.mjs";
import { n as CITIES, r as categoryLabel, t as CATEGORIES } from "./taxonomy-D6hCXNBX.mjs";
import { i as submitCommunityEvent, r as Route$5 } from "./router-Bo66ntaB.mjs";
import { a as startOfMonth, c as isSameDay, i as endOfWeek, l as startOfWeek, n as isSameMonth, o as eachDayOfInterval, r as format, s as endOfMonth, t as parseISO, u as addMonths } from "../_libs/date-fns.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/calendar-DlXJdD8f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	title: "",
	category: "community",
	startsOn: "",
	startTime: "",
	location: "",
	city: "Port St. Joe",
	description: "",
	organizer: ""
};
function EventForm() {
	const router = useRouter();
	const [form, setForm] = (0, import_react.useState)(empty);
	const [busy, setBusy] = (0, import_react.useState)(false);
	function set(key, value) {
		setForm((f) => ({
			...f,
			[key]: value
		}));
	}
	async function onSubmit(e) {
		e.preventDefault();
		setBusy(true);
		try {
			await submitCommunityEvent({ data: {
				title: form.title,
				category: form.category,
				startsOn: form.startsOn,
				startTime: form.startTime || void 0,
				location: form.location,
				city: form.city,
				description: form.description,
				organizer: form.organizer || void 0
			} });
			toast.success("Event added to the shared calendar.");
			setForm(empty);
			await router.invalidate();
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Could not save the event. Try again.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-3 rounded-xl border border-line bg-cream-soft p-5 shadow-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-bold uppercase tracking-[0.18em] text-moss",
					children: "Add an event"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 text-xl font-bold text-ink",
					children: "Share it with the county"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "For organizers, churches, bands, markets, and civic groups. Public event details only. No emails or phone numbers stored here."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-sm font-medium",
				htmlFor: "event-title",
				children: ["Event title", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "event-title",
					required: true,
					minLength: 3,
					value: form.title,
					onChange: (e) => set("title", e.target.value),
					className: "h-11 rounded-md border border-line bg-paper px-3 font-normal"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm font-medium",
					children: ["Category", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: form.category,
						onChange: (e) => set("category", e.target.value),
						className: "h-11 rounded-md border border-line bg-paper px-3 font-normal",
						children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c.id,
							children: c.label
						}, c.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm font-medium",
					children: ["Town", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						value: form.city,
						onChange: (e) => set("city", e.target.value),
						className: "h-11 rounded-md border border-line bg-paper px-3 font-normal",
						children: CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: c,
							children: c
						}, c))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm font-medium",
					htmlFor: "event-date",
					children: ["Date", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "event-date",
						required: true,
						type: "date",
						value: form.startsOn,
						onChange: (e) => set("startsOn", e.target.value),
						className: "h-11 rounded-md border border-line bg-paper px-3 font-normal"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "grid gap-1 text-sm font-medium",
					htmlFor: "event-time",
					children: ["Start time", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "event-time",
						value: form.startTime,
						onChange: (e) => set("startTime", e.target.value),
						placeholder: "9:00 AM",
						className: "h-11 rounded-md border border-line bg-paper px-3 font-normal"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-sm font-medium",
				htmlFor: "event-location",
				children: ["Location", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "event-location",
					required: true,
					minLength: 3,
					value: form.location,
					onChange: (e) => set("location", e.target.value),
					placeholder: "George Core Park",
					className: "h-11 rounded-md border border-line bg-paper px-3 font-normal"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-sm font-medium",
				htmlFor: "event-organizer",
				children: ["Organizer (business or group)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "event-organizer",
					value: form.organizer,
					onChange: (e) => set("organizer", e.target.value),
					className: "h-11 rounded-md border border-line bg-paper px-3 font-normal"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "grid gap-1 text-sm font-medium",
				htmlFor: "event-desc",
				children: ["What is happening", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "event-desc",
					required: true,
					minLength: 12,
					rows: 4,
					value: form.description,
					onChange: (e) => set("description", e.target.value),
					className: "rounded-md border border-line bg-paper px-3 py-2 font-normal"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				disabled: busy,
				size: "lg",
				children: busy ? "Saving…" : "Add to calendar"
			})
		]
	});
}
function CalendarPage() {
	const community = Route$5.useLoaderData();
	const events = (0, import_react.useMemo)(() => mergeEvents(community ?? []), [community]);
	const [month, setMonth] = (0, import_react.useState)(new Date(2026, 7, 1));
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [selected, setSelected] = (0, import_react.useState)(new Date(2026, 7, 22));
	const filtered = events.filter((e) => filter === "all" ? true : e.category === filter);
	const selectedKey = selected ? format(selected, "yyyy-MM-dd") : null;
	const dayEvents = selectedKey ? filtered.filter((e) => inRange(e, selectedKey)) : [];
	const upcoming = filtered.filter((e) => e.startsOn >= "2026-08-22");
	const grid = eachDayOfInterval({
		start: startOfWeek(startOfMonth(month)),
		end: endOfWeek(endOfMonth(month))
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Shared local calendar",
		title: "Gulf County community calendar",
		dek: "Fitness, yoga, live music, markets, churches, wildlife, and everything else neighbors asked for. Add yours. This is a community resource, not a government filing."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setFilter("all"),
				className: cn("rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider", filter === "all" ? "bg-forest text-cream" : "bg-foam text-forest"),
				children: "All"
			}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setFilter(c.id),
				className: cn("rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider", filter === c.id ? "bg-forest text-cream" : "bg-foam text-forest"),
				children: c.label
			}, c.id))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xl font-bold",
						children: format(month, "MMMM yyyy")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							"aria-label": "Previous month",
							onClick: () => setMonth((m) => addMonths(m, -1)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							"aria-label": "Next month",
							onClick: () => setMonth((m) => addMonths(m, 1)),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-7 text-center text-[11px] font-bold uppercase tracking-wider text-muted",
					children: "SMTWTFS".split("").map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-2",
						children: [
							"Sun",
							"Mon",
							"Tue",
							"Wed",
							"Thu",
							"Fri",
							"Sat"
						][i]
					}, d + i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-7 gap-1",
					children: grid.map((day) => {
						const key = format(day, "yyyy-MM-dd");
						const has = filtered.some((e) => inRange(e, key));
						const on = selected && isSameDay(day, selected);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSelected(day),
							className: cn("flex min-h-16 flex-col items-center rounded-md p-1 text-sm", isSameMonth(day, month) ? "bg-cream-soft" : "bg-foam/40 text-muted", on && "bg-forest text-cream", has && !on && "ring-1 ring-forest/30"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular",
								children: format(day, "d")
							}), has ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("mt-1 size-1.5 rounded-full", on ? "bg-sand" : "bg-forest") }) : null]
						}, key);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-ink",
						children: selected ? format(selected, "EEEE, MMMM d") : "Select a day"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 grid gap-3",
						children: dayEvents.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-lg border border-dashed border-line p-4 text-sm text-muted",
							children: "Nothing listed for this day yet. If you organize something, add it on the right."
						}) : dayEvents.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventRow, { event: e }, e.id))
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventForm, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-bold",
					children: "Coming up"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-3",
					children: [...upcoming].sort((a, b) => Number(b.source === "community") - Number(a.source === "community")).slice(0, 10).map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventRow, { event: e }, e.id))
				})] })]
			})]
		})]
	})] });
}
function inRange(event, day) {
	const end = event.endOn ?? event.startsOn;
	return day >= event.startsOn && day <= end;
}
function EventRow({ event }) {
	const start = parseISO(event.startsOn);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "rounded-lg border border-line bg-cream-soft p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[10px] font-bold uppercase tracking-[0.14em] text-moss",
				children: [
					categoryLabel(event.category),
					" · ",
					event.source === "community" ? "Neighbor submitted" : "Local Studies"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
				className: "mt-1 font-bold text-ink",
				children: event.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: [
					format(start, "MMM d"),
					event.endOn ? ` to ${format(parseISO(event.endOn), "MMM d")}` : "",
					event.startTime ? ` · ${event.startTime}` : "",
					" · ",
					event.location,
					", ",
					event.city
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-ink/80",
				children: event.description
			})
		]
	});
}
//#endregion
export { CalendarPage as component };
