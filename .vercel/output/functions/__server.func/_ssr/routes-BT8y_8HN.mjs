import { o as __toESM } from "../_runtime.mjs";
import { H as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ChartColumn, E as Briefcase, O as Baby, S as ChevronLeft, T as Building2, _ as Fish, a as Turtle, b as CloudSun, c as Target, d as Music, g as Flag, i as Umbrella, k as ArrowRight, l as Sun, m as Landmark, n as Utensils, p as MapPin, r as Users, s as TreePine, v as DollarSign, w as CalendarDays, x as ChevronRight } from "../_libs/lucide-react.mjs";
import { a as CONDITIONS, o as CtaLink, p as cn, u as SiteShell } from "./site-shell-DeaECsn-.mjs";
import { n as ECONOMY } from "./census-D5skQ1iM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BT8y_8HN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HERO_COPY = {
	kicker: "Discover what's happening in",
	title: "GULF COUNTY, FL",
	dek: "Live local insights. Real-time data. Stronger community. Brighter tomorrow."
};
var QUICK_CARDS = [
	{
		href: "/trackers/economy",
		title: "Community Data",
		dek: "Explore key insights and trends."
	},
	{
		href: "/calendar",
		title: "Events",
		dek: "See what's happening around town."
	},
	{
		href: "/business",
		title: "Business Directory",
		dek: "Support local businesses."
	},
	{
		href: "/trackers",
		title: "Live Trackers",
		dek: "Real-time updates that matter."
	}
];
var HAPPENING = [
	{
		id: "sunset",
		badge: "LIVE",
		title: "Sunset on St. Joseph Bay",
		meta: "Tonight · 7:18 PM",
		image: "/photos/sunset.jpg",
		href: "/calendar"
	},
	{
		id: "music",
		badge: "TONIGHT",
		title: "Live Music Downtown",
		meta: "Port St. Joe · 7:00 PM",
		image: "/photos/music.jpg",
		href: "/calendar"
	},
	{
		id: "turtles",
		badge: "THIS WEEKEND",
		title: "Turtle Nesting Season",
		meta: "Track our shores",
		image: "/photos/turtles.jpg",
		href: "/trackers/turtles"
	},
	{
		id: "market",
		badge: "AUG 29",
		title: "Farmers Market",
		meta: "Port St. Joe · 8:00 AM",
		image: "/photos/market.jpg",
		href: "/calendar"
	},
	{
		id: "boats",
		badge: "SEP 5",
		title: "Scallop Festival",
		meta: "Beacon Hill · Labor Day weekend",
		image: "/photos/boats.jpg",
		href: "/calendar"
	}
];
var SPOTLIGHT = {
	title: "Port St. Joe Marina",
	dek: "Heart of our waterfront community and working harbor.",
	image: "/photos/marina.jpg",
	href: "/map"
};
var INTERESTS = [
	{
		href: "/trackers/beach",
		label: "Beaches",
		icon: "beaches"
	},
	{
		href: "/trackers/fishing",
		label: "Fishing",
		icon: "fishing"
	},
	{
		href: "/learn#bay",
		label: "Nature",
		icon: "nature"
	},
	{
		href: "/business",
		label: "Food",
		icon: "food"
	},
	{
		href: "/calendar",
		label: "Events",
		icon: "events"
	},
	{
		href: "/calendar",
		label: "Family",
		icon: "family"
	},
	{
		href: "/learn#heritage",
		label: "History",
		icon: "history"
	},
	{
		href: "/trackers/economy",
		label: "Local Data",
		icon: "data"
	},
	{
		href: "/learn#kids",
		label: "For Kids",
		icon: "kids"
	}
];
var TICKER = {
	sunset: "7:18 PM",
	nestsToday: 3,
	bite: "Red Snapper",
	biteNote: "Good Bite",
	music: "Port St. Joe"
};
var items = [
	{
		icon: Sun,
		label: "Sunset Tonight",
		value: TICKER.sunset
	},
	{
		icon: Turtle,
		label: `${TICKER.nestsToday} Turtle Nests`,
		value: "Recorded Today"
	},
	{
		icon: Fish,
		label: TICKER.bite,
		value: TICKER.biteNote
	},
	{
		icon: Music,
		label: "Live Music",
		value: TICKER.music
	},
	{
		icon: Flag,
		label: "Beach Flags",
		value: CONDITIONS.beach
	},
	{
		icon: CloudSun,
		label: `${CONDITIONS.airF}°F`,
		value: CONDITIONS.sky
	}
];
function LiveTicker() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-label": "Live Gulf County updates",
		className: "flex w-full min-w-0 items-center gap-4 overflow-x-auto rounded-full bg-navy/88 px-4 py-2.5 text-cream shadow-glass backdrop-blur-md no-scrollbar md:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2 pr-3 md:border-r md:border-cream/15",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-moss shadow-[0_0_0_4px_rgb(61_107_84_/_0.35)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "leading-tight",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] font-bold uppercase tracking-[0.16em]",
					children: "Live Gulf County"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hidden text-[10px] text-cream/70 sm:block",
					children: "Updates just now"
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex min-w-max items-center gap-5 md:gap-6",
			children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-5",
				children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-8 w-px bg-cream/15 sm:block" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "size-4 shrink-0 text-sand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-xs font-semibold",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] text-cream/70",
							children: item.value
						})]
					})]
				})]
			}, item.label))
		})]
	});
}
var CARD_ICONS = [
	ChartColumn,
	CalendarDays,
	Building2,
	Target
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-navy-deep text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/photos/hero.jpg",
				alt: "Working shrimp boat at sunrise on St. Joseph Bay, Port St. Joe",
				className: "absolute inset-0 h-full w-full object-cover object-[62%_center]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-navy-deep/40 to-navy-deep/10",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep/50 to-transparent",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[1320px] px-4 pb-24 pt-4 md:px-6 md:pb-28 md:pt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveTicker, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid items-end gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl pb-2 pt-4 md:pt-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-script text-3xl text-cream md:text-4xl",
								children: HERO_COPY.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-5xl font-bold uppercase leading-[0.9] tracking-wide text-cream md:text-7xl lg:text-8xl",
								children: HERO_COPY.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-md text-base font-medium leading-relaxed text-cream/90 md:text-lg",
								children: HERO_COPY.dek
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaLink, {
									to: "/map",
									variant: "photo",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" }), "Explore the Map"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CtaLink, {
									to: "/business",
									variant: "photoOutline",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4" }), "View Businesses"]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid grid-cols-2 gap-3",
						children: QUICK_CARDS.map((card, i) => {
							const Icon = CARD_ICONS[i];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: card.href,
								className: "group flex h-full flex-col rounded-xl bg-paper/95 p-4 text-navy shadow-glass backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-paper md:p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex size-9 items-center justify-center rounded-md bg-foam text-forest",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-3 flex items-start justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-bold uppercase tracking-wide",
											children: card.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mt-0.5 size-4 shrink-0 text-forest transition group-hover:translate-x-0.5" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 text-xs leading-snug text-muted",
										children: card.dek
									})
								]
							}) }, card.title);
						})
					})]
				})]
			})
		]
	});
}
function StatsBand() {
	const stats = [
		{
			icon: Users,
			value: "3,000+",
			label: "Jobs Supported"
		},
		{
			icon: DollarSign,
			value: `$${ECONOMY.visitorSpending2024}M`,
			label: "Visitor Spending"
		},
		{
			icon: Briefcase,
			value: `$${ECONOMY.wagesSupported}+M`,
			label: "Wages Supported"
		},
		{
			icon: Landmark,
			value: `$${ECONOMY.taxesGenerated.toFixed(1)}M`,
			label: "Taxes Generated"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative z-10 mx-auto w-full max-w-[1320px] px-4 md:-mt-12 md:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4 rounded-xl bg-navy px-5 py-4 text-cream shadow-lift md:flex-row md:items-center md:gap-2 md:px-6 md:py-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-cream/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl font-semibold tabular leading-none md:text-2xl",
						children: s.value
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[10px] font-semibold uppercase tracking-wider text-cream/65",
						children: s.label
					})] })]
				}, s.label))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "/advertise",
				className: "flex items-center justify-between gap-3 rounded-lg bg-forest px-4 py-3 md:min-w-52 md:justify-start",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex size-10 items-center justify-center rounded-full bg-cream/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex-1 leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-bold",
							children: "Stronger Together"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] text-cream/75",
							children: "Support Local. Grow Local."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 shrink-0" })
				]
			})]
		})
	});
}
function HappeningRow() {
	const scroller = (0, import_react.useRef)(null);
	const move = (dir) => {
		scroller.current?.scrollBy({
			left: dir * 280,
			behavior: "smooth"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto w-full max-w-[1320px] overflow-hidden px-4 py-12 md:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-w-0 gap-5 lg:grid-cols-[1.7fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarDays, { className: "size-4 text-forest" }), "What's Happening Right Now"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/calendar",
						className: "text-xs font-bold uppercase tracking-wider text-forest hover:text-pine",
						children: "View all events →"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-4 flex min-w-0 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: scroller,
						className: "flex min-w-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto pb-2 no-scrollbar",
						children: HAPPENING.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.href,
							className: "w-[78%] shrink-0 snap-start overflow-hidden rounded-xl bg-paper shadow-card sm:w-[46%] lg:w-[24%]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-32",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: "",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("absolute left-2 top-2 rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", item.badge === "LIVE" ? "bg-forest text-cream" : "bg-navy text-cream"),
									children: item.badge
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold text-navy",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: item.meta
								})]
							})]
						}, item.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden flex-col justify-center gap-2 lg:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Previous events",
							onClick: () => move(-1),
							className: "inline-flex size-9 items-center justify-center rounded-full bg-paper text-navy shadow-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"aria-label": "Next events",
							onClick: () => move(1),
							className: "inline-flex size-9 items-center justify-center rounded-full bg-paper text-navy shadow-card",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-paper p-4 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-navy",
						children: "Local Spotlight"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: SPOTLIGHT.image,
						alt: "Port St. Joe marina and working waterfront",
						className: "mt-3 h-36 w-full rounded-lg object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-bold text-navy",
						children: SPOTLIGHT.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: SPOTLIGHT.dek
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: SPOTLIGHT.href,
						className: "mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-forest",
						children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
					})
				]
			})]
		})
	});
}
var INTEREST_ICONS = {
	beaches: Umbrella,
	fishing: Fish,
	nature: TreePine,
	food: Utensils,
	events: CalendarDays,
	family: Users,
	history: Landmark,
	data: ChartColumn,
	kids: Baby
};
function ExploreInterest() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto w-full max-w-[1320px] px-4 pb-4 md:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-paper px-3 py-4 shadow-card md:px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "px-2 text-xs font-bold uppercase tracking-[0.16em] text-muted",
				children: "Explore by Interest"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 grid grid-cols-3 gap-1 sm:grid-cols-5 lg:grid-cols-9",
				children: INTERESTS.map((item) => {
					const Icon = INTEREST_ICONS[item.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.href,
						className: "flex flex-col items-center gap-2 rounded-lg px-2 py-3 text-navy hover:bg-foam",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-5 text-forest" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-center text-[10px] font-semibold uppercase tracking-wider",
							children: item.label
						})]
					}) }, item.label);
				})
			})]
		})
	});
}
function TrackerBtn({ href, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: cn("flex min-h-16 items-center gap-3 rounded-lg px-4 py-3 text-cream shadow-card transition hover:brightness-110", className),
		children
	});
}
function TrackerStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto w-full max-w-[1320px] px-4 pb-14 md:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TrackerBtn, {
					href: "/trackers/turtles",
					className: "tracker-fill-turtle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Turtle, { className: "size-6 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-bold uppercase tracking-wide",
						children: "Sea Turtle Tracker"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-cream/80",
						children: "Nesting Season"
					})] })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TrackerBtn, {
					href: "/trackers/fishing",
					className: "tracker-fill-fish",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fish, { className: "size-6 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-bold uppercase tracking-wide",
						children: "Fishing Report"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-cream/80",
						children: "Red Snapper Active"
					})] })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TrackerBtn, {
					href: "/trackers/beach",
					className: "tracker-fill-beach",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Umbrella, { className: "size-6 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-bold uppercase tracking-wide",
						children: "Beach Conditions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-cream/80",
						children: "Yellow Flag · Low Hazard"
					})] })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TrackerBtn, {
					href: "/trackers/weather",
					className: "tracker-fill-weather",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudSun, { className: "size-6 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-bold uppercase tracking-wide",
						children: "Weather Center"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block text-xs text-cream/80",
						children: [
							CONDITIONS.airF,
							"°F · ",
							CONDITIONS.sky
						]
					})] })]
				}) })
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBand, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HappeningRow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExploreInterest, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackerStrip, {})
		]
	})] });
}
//#endregion
export { Home as component };
