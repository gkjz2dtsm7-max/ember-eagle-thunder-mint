import { o as __toESM } from "../_runtime.mjs";
import { C as require_jsx_runtime, Z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight, C as ChevronRight, D as Building2, E as CalendarDays, O as Briefcase, S as CloudSun, T as ChartColumn, _ as Flag, a as Umbrella, b as DollarSign, c as TreePine, d as Star, h as Landmark, i as Users, l as Target, m as MapPin, n as Waves, o as Turtle, r as Utensils, u as Sun, v as Fish, y as Droplets } from "../_libs/lucide-react.mjs";
import { c as VISIT_GULF, i as CtaLink, l as cn, s as SiteShell } from "./site-shell-BUKrBx4s.mjs";
import { a as QUICK_CARDS, n as HERO_COPY, o as SPOTLIGHT, r as INTERESTS, t as HAPPENING } from "./home-KtL4kwww.mjs";
import { a as Route$9 } from "./router-Bo66ntaB.mjs";
import { n as ECONOMY } from "./census-D5skQ1iM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DMamG7pb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LiveTicker({ live }) {
	const items = [
		{
			icon: CloudSun,
			kicker: `${live.airF}°F`,
			value: live.sky
		},
		{
			icon: Sun,
			kicker: "Sunset",
			value: live.sunset
		},
		{
			icon: Waves,
			kicker: live.waterF ? `${live.waterF}°F water` : "Bay water",
			value: live.waterStation
		},
		{
			icon: Fish,
			kicker: "Bay scallops",
			value: VISIT_GULF.scallops.status
		},
		{
			icon: Droplets,
			kicker: live.forecastHighDay,
			value: live.forecastHigh ? `${live.forecastHigh}°F` : live.forecastShort
		},
		{
			icon: Flag,
			kicker: "Beach flags",
			value: "Posted locally"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-label": "Live Gulf County updates",
		className: "flex w-full min-w-0 items-center gap-4 overflow-x-auto rounded-full bg-navy px-4 py-2.5 text-cream shadow-lift no-scrollbar md:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex shrink-0 items-center gap-2 pr-4 md:border-r md:border-cream/15",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2.5 rounded-full bg-moss shadow-[0_0_0_4px_rgb(61_107_84_/_0.4)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-bold uppercase tracking-[0.18em]",
				children: "Live Now"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex min-w-max items-center gap-5 md:gap-7",
			children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-5",
				children: [i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-8 w-px bg-cream/15 sm:block" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
						className: "size-4 shrink-0 text-sand",
						strokeWidth: 1.75
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[13px] font-semibold",
							children: item.kicker
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] text-cream/70",
							children: item.value
						})]
					})]
				})]
			}, item.kicker))
		})]
	});
}
var CARD_ICONS = [
	ChartColumn,
	CalendarDays,
	Building2,
	Target
];
function Sparkline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 240 80",
		className: "h-full w-full text-forest",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M0 80 L0 52 L18 48 L36 54 L54 40 L72 44 L90 30 L108 34 L126 22 L144 26 L162 16 L180 20 L198 12 L220 18 L240 10 L240 80 Z",
			className: "fill-forest/15"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M0 52 L18 48 L36 54 L54 40 L72 44 L90 30 L108 34 L126 22 L144 26 L162 16 L180 20 L198 12 L220 18 L240 10",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2.4",
			strokeLinejoin: "round",
			strokeLinecap: "round"
		})]
	});
}
function Hero({ live }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-navy-deep text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/photos/hero-indian-pass.jpg",
				alt: "Sunset over Indian Pass, Port St. Joe, Gulf County, Florida",
				className: "absolute inset-0 h-full w-full object-cover object-[58%_center]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-gradient-to-r from-navy-deep/78 via-navy-deep/28 to-transparent",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-navy-deep/45 to-transparent",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto w-full max-w-[1320px] px-4 pb-16 pt-2 md:px-6 md:pb-20 md:pt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LiveTicker, { live }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid items-start gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:mt-7 lg:gap-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl pt-2 md:pt-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-script text-[1.95rem] leading-none text-cream md:text-[2.45rem]",
								children: HERO_COPY.kicker
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-1 font-display text-5xl font-bold uppercase leading-[0.88] tracking-wide text-cream md:text-6xl lg:text-[4.85rem]",
								children: HERO_COPY.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 max-w-md text-base font-medium leading-snug text-cream/92 md:text-lg",
								children: [
									HERO_COPY.dekLines[0],
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									HERO_COPY.dekLines[1]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
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
								className: "group flex h-full flex-col overflow-hidden rounded-xl bg-paper text-navy shadow-glass",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex flex-1 flex-col p-3.5 pb-2 md:p-4 md:pb-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex size-8 items-center justify-center rounded-full bg-forest text-cream",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-2.5 flex items-start justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[13px] font-bold uppercase tracking-wide leading-tight",
												children: card.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "mt-0.5 size-4 shrink-0 text-forest transition group-hover:translate-x-0.5" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 text-[11px] leading-snug text-muted",
											children: card.dek
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "relative mt-auto h-[76px] overflow-hidden bg-foam md:h-[88px]",
									children: card.visual === "chart" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: card.image,
										alt: "",
										className: "h-full w-full object-cover"
									})
								})]
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
		className: "relative z-10 mx-auto w-full max-w-[1320px] px-4 md:-mt-10 md:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-xl bg-navy px-5 py-4 text-cream shadow-lift md:px-6 md:py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "grid grid-cols-2 gap-4 lg:grid-cols-5 lg:items-center lg:gap-3",
				children: [stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
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
				}, s.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/advertise",
					className: "flex items-center gap-3 rounded-lg py-1 lg:pl-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-forest",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "min-w-0 flex-1 leading-tight",
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
				}) })]
			})
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
		className: "mx-auto w-full max-w-[1320px] overflow-hidden px-4 py-10 md:px-6",
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
					className: "relative mt-4 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: scroller,
						className: "flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pr-12 no-scrollbar",
						children: HAPPENING.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: item.href,
							className: "w-[78%] shrink-0 snap-start overflow-hidden rounded-xl bg-paper shadow-card sm:w-[46%] lg:w-[23.5%]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-28 md:h-32",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: item.title,
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("absolute left-2 top-2 rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", item.badge === "LIVE" ? "bg-forest text-cream" : "bg-navy text-cream"),
									children: item.badge
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-sm font-bold leading-snug text-navy",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-muted",
									children: item.meta
								})]
							})]
						}, item.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Next events",
						onClick: () => move(1),
						className: "absolute right-0 top-[3.6rem] hidden size-10 items-center justify-center rounded-full bg-paper text-navy shadow-lift lg:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-paper p-4 shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-forest text-forest" }), "Local Spotlight"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: SPOTLIGHT.image,
						alt: "St. Joseph Bay looking southeast from Salinas Park, Gulf County",
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
	data: ChartColumn
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
				className: "mt-3 grid grid-cols-4 gap-1 sm:grid-cols-8",
				children: INTERESTS.map((item) => {
					const Icon = INTEREST_ICONS[item.icon];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.href,
						className: "flex flex-col items-center gap-2 rounded-lg px-2 py-3 text-navy hover:bg-foam",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
							className: "size-5 text-navy",
							strokeWidth: 1.6
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
		className: cn("flex min-h-[4.25rem] items-center gap-3 rounded-lg px-4 py-3 text-cream shadow-card transition hover:brightness-110", className),
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
						children: "Scallops Closed 2026"
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
						children: "Live Updates"
					})] })]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TrackerBtn, {
					href: "/trackers/weather",
					className: "tracker-fill-weather",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudSun, { className: "size-6 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm font-bold uppercase tracking-wide",
						children: "Weather Center"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-xs text-cream/80",
						children: "Local Forecasts"
					})] })]
				}) })
			]
		})
	});
}
function Home() {
	const live = Route$9.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { live }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
