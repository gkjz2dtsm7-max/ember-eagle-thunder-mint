import { o as __toESM } from "../_runtime.mjs";
import { a as TRACKERS, i as SCHOOLS, o as TURTLE_SNAPSHOT, r as FISHING_SNAPSHOT, t as BEACH_FLAGS } from "./trackers-Bfq5zcb8.mjs";
import { C as require_jsx_runtime, X as notFound, Z as require_react, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as FL_CHAMBER, c as VISIT_GULF, o as PageIntro, s as SiteShell } from "./site-shell-BUKrBx4s.mjs";
import { n as Route } from "./router-Bo66ntaB.mjs";
import { a as POPULATION_SERIES, i as HOUSING_SERIES, n as ECONOMY, r as ECONOMY_SERIES, t as CENSUS } from "./census-D5skQ1iM.mjs";
import { t as CIVIC_PROJECTS } from "./civic-Cvq2BSta.mjs";
import { a as CartesianGrid, i as Line, n as YAxis, o as ResponsiveContainer, r as XAxis, s as Tooltip, t as LineChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trackers._id-BEabmtfR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ChartFrame({ children }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-full rounded-md bg-foam" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function EconomyChart({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
			data,
			margin: {
				top: 8,
				right: 8,
				left: -18,
				bottom: 0
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					stroke: "#c9d6ce",
					strokeDasharray: "3 3",
					vertical: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "year",
					tick: {
						fill: "#5a6b61",
						fontSize: 11
					},
					axisLine: false,
					tickLine: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					tick: {
						fill: "#5a6b61",
						fontSize: 11
					},
					axisLine: false,
					tickLine: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					contentStyle: {
						borderRadius: 12,
						border: "1px solid #c9d6ce",
						fontSize: 12
					},
					formatter: (value, name) => [`$${value}M`, name === "visitor" ? "Visitor spending (est.)" : "Wages supported"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					type: "monotone",
					dataKey: "visitor",
					stroke: "#1b4332",
					strokeWidth: 2.4,
					dot: {
						r: 3,
						fill: "#1b4332"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					type: "monotone",
					dataKey: "wages",
					stroke: "#8aa090",
					strokeWidth: 2.2,
					dot: {
						r: 3,
						fill: "#8aa090"
					}
				})
			]
		})
	}) });
}
function SeriesChart({ data, dataKey, color = "#1b4332", unit = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
			data,
			margin: {
				top: 8,
				right: 8,
				left: -12,
				bottom: 0
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					stroke: "#c9d6ce",
					strokeDasharray: "3 3",
					vertical: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "year",
					tick: {
						fill: "#5a6b61",
						fontSize: 12
					},
					axisLine: false,
					tickLine: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					tick: {
						fill: "#5a6b61",
						fontSize: 12
					},
					axisLine: false,
					tickLine: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					contentStyle: {
						borderRadius: 12,
						border: "1px solid #c9d6ce",
						fontSize: 12
					},
					formatter: (value) => [`${value}${unit}`, ""]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					type: "monotone",
					dataKey,
					stroke: color,
					strokeWidth: 2.6,
					dot: {
						r: 4,
						fill: color
					}
				})
			]
		})
	}) });
}
function TrackerDetail() {
	const { id } = Route.useParams();
	const live = Route.useLoaderData();
	const meta = TRACKERS.find((t) => t.id === id);
	if (!meta) throw notFound();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		kicker: "Tracker",
		title: meta.title,
		dek: meta.dek
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-8 text-xs uppercase tracking-wider text-muted",
				children: id === "weather" || id === "beach" ? `NWS ${live.asOf}` : `Updated ${meta.updated}`
			}),
			id === "turtles" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Turtles, {}),
			id === "fishing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fishing, {}),
			id === "beach" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Beach, {
				liveSky: live.sky,
				liveAir: live.airF
			}),
			id === "weather" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Weather, {}),
			id === "economy" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Economy, {}),
			id === "population" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Population, {}),
			id === "housing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Housing, {}),
			id === "civic" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Civic, {}),
			id === "education" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/trackers",
					className: "font-semibold text-forest hover:underline",
					children: "Back to all trackers"
				})
			})
		]
	})] });
}
function Stat({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-forest p-5 text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-3xl font-bold tabular",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cream/70",
			children: label
		})]
	});
}
function Turtles() {
	const t = TURTLE_SNAPSHOT;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-[1.1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/photos/cape-san-blas-light.jpg",
				alt: "Cape San Blas Light and Coast Guard housing on St. Joseph Peninsula, Gulf County",
				className: "h-64 w-full rounded-xl object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid grid-cols-3 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: String(t.parkTotal),
						label: "Park nests (Jul 10)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: String(t.parkLoggerhead),
						label: "Loggerhead"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: String(t.parkGreen),
						label: "Green"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-sm leading-relaxed text-muted",
				children: t.source
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					"Season: ",
					t.season,
					". ",
					t.parkName,
					". Visit Gulf lists the Forgotten Coast Sea Turtle Festival as the summer celebration. Live nest logs stay with park staff and FWC."
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-line bg-cream-soft p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg font-bold",
				children: "What to do on the beach"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 grid gap-3 text-sm leading-relaxed",
				children: t.rules.map((rule, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-bold tabular text-forest",
						children: [i + 1, "."]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: rule })]
				}, rule))
			})]
		})]
	});
}
function Fishing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-navy p-5 text-cream lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold uppercase tracking-[0.16em] text-sand",
						children: "Visit Gulf / FWC"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mt-2 text-2xl font-bold",
						children: ["Bay scallops: ", FISHING_SNAPSHOT.scallops]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-3xl text-sm leading-relaxed text-cream/80",
						children: VISIT_GULF.scallops.note
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-cream-soft p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-bold",
					children: "St. Joseph Bay"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-2 text-sm",
					children: FISHING_SNAPSHOT.bay.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-sm bg-foam px-3 py-2",
						children: s
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-cream-soft p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-bold",
					children: "Gulf side"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-2 text-sm",
					children: FISHING_SNAPSHOT.gulf.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-sm bg-foam px-3 py-2",
						children: s
					}, s))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-2 rounded-xl border border-line bg-paper p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-bold",
					children: "Before you harvest"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 grid gap-2 text-sm leading-relaxed",
					children: FISHING_SNAPSHOT.notes.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-bold text-forest",
							children: [i + 1, "."]
						}),
						" ",
						n
					] }, n))
				})]
			})
		]
	});
}
function Beach({ liveSky, liveAir }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
			children: BEACH_FLAGS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-line bg-cream-soft p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-bold",
					children: f.color
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: f.meaning
				})]
			}, f.color))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm leading-relaxed text-muted",
			children: [
				"NWS sky over Port St. Joe: ",
				liveSky,
				", ",
				liveAir,
				"°F. ",
				VISIT_GULF.beachFlags,
				" Visit Gulf destination page: historic downtown is one block off Highway 98. Point South Marina is the boating hub in town."
			]
		})]
	});
}
function Weather() {
	const live = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					value: `${live.airF}°F`,
					label: "Air"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					value: `${live.feelsF}°F`,
					label: "Feels like"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					value: live.waterF ? `${live.waterF}°F` : "—",
					label: "Bay water"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					value: live.windMph ? `${live.windMph} mph` : "Calm",
					label: `Wind ${live.windDir}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-line bg-cream-soft p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold uppercase tracking-wider text-muted",
						children: "Sky"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-bold",
						children: live.sky
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-line bg-cream-soft p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold uppercase tracking-wider text-muted",
						children: "Sunset"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-bold",
						children: live.sunset
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-line bg-cream-soft p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold uppercase tracking-wider text-muted",
						children: live.forecastHighDay
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-bold",
						children: live.forecastHigh ? `${live.forecastHigh}°F` : live.forecastShort
					})]
				})
			]
		}),
		live.alerts.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 rounded-lg bg-navy px-4 py-3 text-sm text-cream",
			children: ["Active NWS: ", live.alerts.join(", ")]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-muted",
			children: "No active NWS alerts for coastal Gulf County (FLZ114)."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 max-w-2xl text-sm leading-relaxed text-muted",
			children: [live.source, " Hurricane season runs June 1 to November 30. This page refreshes from NWS. It is not a substitute for local emergency management."]
		})
	] });
}
function Economy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: `$${ECONOMY.visitorSpending2024}M`,
						label: "Visitor spending 2024 est."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: "3,000+",
						label: "Jobs supported"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: `$${ECONOMY.wagesSupported}+M`,
						label: "Wages supported"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: `$${ECONOMY.taxesGenerated.toFixed(1)}M`,
						label: "Taxes generated"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-72 rounded-xl border border-line bg-cream-soft p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EconomyChart, { data: ECONOMY_SERIES })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: ECONOMY.note
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-line bg-paper p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-bold uppercase tracking-[0.16em] text-moss",
						children: "Florida Chamber of Commerce"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "mt-2 text-xl font-bold",
						children: ["Statewide context, ", FL_CHAMBER.asOf]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 grid gap-2 text-sm leading-relaxed",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Florida economy: ",
								FL_CHAMBER.economy,
								". ",
								FL_CHAMBER.economyNote
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Net migration: ",
								FL_CHAMBER.netMigrationPerDay,
								" people per day (statewide)."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: FL_CHAMBER.homeSales }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: FL_CHAMBER.kindergartenReady })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-xs text-muted",
						children: [
							FL_CHAMBER.source,
							". These are Florida totals. They are not Gulf County visitor-economy numbers.",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								className: "font-semibold text-forest",
								href: FL_CHAMBER.url,
								children: "Read the mid-year report"
							})
						]
					})
				]
			})
		]
	});
}
function Population() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-[0.9fr_1.1fr]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: CENSUS.population2025.toLocaleString(),
						label: "2025 population estimate"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: CENSUS.population2020.toLocaleString(),
						label: "2020 Census"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: `+${CENSUS.populationChange}%`,
						label: "Change 2020 to 2025"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-72 rounded-xl border border-line bg-cream-soft p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesChart, {
					data: POPULATION_SERIES,
					dataKey: "value"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "lg:col-span-2 text-sm leading-relaxed text-muted",
				children: [
					"Hurricane Michael in October 2018 is the break in the line. The county lost people, housing, and a mill-era identity. The 2025 estimate of ",
					CENSUS.population2025.toLocaleString(),
					" is a recovery number, not a boom town number.",
					CENSUS.source,
					" Florida Chamber statewide: ",
					FL_CHAMBER.netMigrationPerDay,
					" people a day net into Florida. That is the state, not this county."
				]
			})
		]
	});
}
function Housing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: CENSUS.housingUnits.toLocaleString(),
						label: "Housing units 2025"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: `${CENSUS.ownerOccupied}%`,
						label: "Owner-occupied"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: `$${CENSUS.medianHomeValue.toLocaleString()}`,
						label: "Median home value"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: String(CENSUS.buildingPermits2025),
						label: "Building permits 2025"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-72 rounded-xl border border-line bg-cream-soft p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeriesChart, {
					data: HOUSING_SERIES,
					dataKey: "permits"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Median rent ",
					`$${CENSUS.medianRent.toLocaleString()}`,
					". Households ",
					CENSUS.households.toLocaleString(),
					", ",
					CENSUS.personsPerHousehold,
					" persons per household. Permit counts are the cleanest local rebuild signal after Michael. ",
					CENSUS.source,
					" ",
					FL_CHAMBER.homeSales
				]
			})
		]
	});
}
function Civic() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "grid gap-4 md:grid-cols-2",
		children: CIVIC_PROJECTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "rounded-xl border border-line bg-cream-soft p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[11px] font-bold uppercase tracking-[0.16em] text-moss",
					children: [
						p.status,
						" · ",
						p.where
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 text-lg font-bold",
					children: p.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: p.blurb
				})
			]
		}, p.id))
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
				value: `${CENSUS.hsOrHigher}%`,
				label: "High school or higher"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
				value: `${CENSUS.bachelorsOrHigher}%`,
				label: "Bachelor's or higher"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-line bg-cream-soft p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-bold",
					children: "Gulf District Schools"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid gap-2 text-sm",
					children: SCHOOLS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-3 border-b border-line py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: s.city
						})]
					}, s.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: FL_CHAMBER.kindergartenReady
				})
			]
		})]
	});
}
//#endregion
export { TrackerDetail as component };
