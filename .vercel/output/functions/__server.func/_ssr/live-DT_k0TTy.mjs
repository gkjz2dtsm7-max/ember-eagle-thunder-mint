import { n as CONDITIONS } from "./trackers-Bfq5zcb8.mjs";
import { n as createServerFn } from "./ssr.mjs";
import { t as createServerRpc } from "./createServerRpc-A6pJPYTF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/live-DT_k0TTy.js
var UA = "LocalStudies.org civic portal (info@localstudies.org)";
var POINT = {
	lat: 29.8119,
	lon: -85.303
};
var STATION = "KAAF";
var CACHE_MS = 6e5;
var cache = null;
function cToF(c) {
	return Math.round(c * 9 / 5 + 32);
}
function kmhToMph(k) {
	return Math.round(k * .621371);
}
function compass(deg, speed) {
	if (!speed) return "Calm";
	if (deg == null || Number.isNaN(deg)) return "";
	return [
		"N",
		"NNE",
		"NE",
		"ENE",
		"E",
		"ESE",
		"SE",
		"SSE",
		"S",
		"SSW",
		"SW",
		"WSW",
		"W",
		"WNW",
		"NW",
		"NNW"
	][Math.round(deg / 22.5) % 16];
}
function cdtTime(iso) {
	return new Date(iso).toLocaleTimeString("en-US", {
		timeZone: "America/Chicago",
		hour: "numeric",
		minute: "2-digit"
	});
}
function cdtStamp(iso) {
	return new Date(iso).toLocaleString("en-US", {
		timeZone: "America/Chicago",
		weekday: "short",
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "2-digit"
	});
}
async function readJson(url, ms = 8e3) {
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), ms);
	try {
		const res = await fetch(url, {
			headers: {
				"User-Agent": UA,
				Accept: "application/geo+json, application/json"
			},
			signal: ctrl.signal
		});
		if (!res.ok) throw new Error(`${res.status} ${url}`);
		return res.json();
	} finally {
		clearTimeout(t);
	}
}
async function readText(url, ms = 8e3) {
	const ctrl = new AbortController();
	const t = setTimeout(() => ctrl.abort(), ms);
	try {
		const res = await fetch(url, {
			headers: { "User-Agent": UA },
			signal: ctrl.signal
		});
		if (!res.ok) throw new Error(`${res.status} ${url}`);
		return res.text();
	} finally {
		clearTimeout(t);
	}
}
function fallback() {
	return {
		asOf: CONDITIONS.asOf,
		asOfIso: (/* @__PURE__ */ new Date()).toISOString(),
		airF: CONDITIONS.airF,
		feelsF: CONDITIONS.feelsF,
		sky: CONDITIONS.sky,
		windMph: CONDITIONS.windMph,
		windDir: CONDITIONS.windDir,
		station: STATION,
		stationName: "Apalachicola (KAAF)",
		waterF: CONDITIONS.waterF,
		waterStation: "Snapshot",
		sunrise: "6:12 AM",
		sunset: "7:15 PM",
		forecastHigh: 91,
		forecastHighDay: "Sunday",
		forecastShort: CONDITIONS.sky,
		alerts: [],
		source: "Cached civic snapshot. Live NWS feed was unavailable.",
		live: false
	};
}
function parseBuoyTemp(text) {
	const lines = text.split("\n").filter((l) => l && !l.startsWith("#"));
	for (const line of lines.slice(0, 6)) {
		const parts = line.trim().split(/\s+/);
		if (parts.length < 15) continue;
		const wtmp = Number(parts[14]);
		if (!Number.isNaN(wtmp) && wtmp > 5 && wtmp < 45) return cToF(wtmp);
	}
	return null;
}
async function fetchLive() {
	const base = fallback();
	const [obsRes, fcRes, sunRes, buoyRes, alertRes] = await Promise.allSettled([
		readJson(`https://api.weather.gov/stations/${STATION}/observations/latest`),
		readJson(`https://api.weather.gov/gridpoints/TAE/47,56/forecast`),
		readJson(`https://api.sunrise-sunset.org/json?lat=${POINT.lat}&lng=${POINT.lon}&formatted=0&tzid=America/Chicago`),
		readText("https://www.ndbc.noaa.gov/data/realtime2/JBYF1.txt"),
		readJson("https://api.weather.gov/alerts/active?zone=FLZ114")
	]);
	if (obsRes.status === "fulfilled") {
		const p = obsRes.value?.properties ?? {};
		const tempC = p.temperature?.value;
		const heatC = p.heatIndex?.value;
		const windK = p.windSpeed?.value;
		const windD = p.windDirection?.value;
		if (typeof tempC === "number") {
			base.airF = cToF(tempC);
			base.live = true;
		}
		if (typeof heatC === "number") base.feelsF = cToF(heatC);
		else base.feelsF = base.airF;
		if (p.textDescription) base.sky = p.textDescription;
		if (typeof windK === "number") {
			base.windMph = kmhToMph(windK);
			base.windDir = compass(typeof windD === "number" ? windD : null, base.windMph);
		}
		if (p.timestamp) {
			base.asOfIso = p.timestamp;
			base.asOf = cdtStamp(p.timestamp) + " CDT";
		}
		base.station = STATION;
		base.stationName = "Apalachicola Intl (KAAF), NWS station for Port St. Joe";
	}
	if (fcRes.status === "fulfilled") {
		const periods = fcRes.value?.properties?.periods ?? [];
		const day = periods.find((p) => p.isDaytime) ?? periods[1];
		if (day) {
			base.forecastHigh = day.temperature;
			base.forecastHighDay = day.name;
			base.forecastShort = day.shortForecast;
		}
	}
	if (sunRes.status === "fulfilled" && sunRes.value?.results) {
		const r = sunRes.value.results;
		if (r.sunrise) base.sunrise = cdtTime(r.sunrise);
		if (r.sunset) base.sunset = cdtTime(r.sunset);
	}
	if (buoyRes.status === "fulfilled") {
		const w = parseBuoyTemp(buoyRes.value);
		if (w) {
			base.waterF = w;
			base.waterStation = "NOAA JBYF1, St. Joseph Bay";
		}
	}
	if (alertRes.status === "fulfilled") base.alerts = (alertRes.value?.features ?? []).map((f) => f.properties?.event).filter(Boolean).slice(0, 3);
	base.source = base.live ? "National Weather Service (api.weather.gov, station KAAF / forecast office Tallahassee). Water: NOAA NDBC JBYF1. Sun times for 29.81N, 85.30W." : base.source;
	return base;
}
var getLiveConditions_createServerFn_handler = createServerRpc({
	id: "af939c82f88f2df8f37dd7ca3871f578333b243142407acafc1c9fdcc99acce4",
	name: "getLiveConditions",
	filename: "src/lib/live.ts"
}, (opts) => getLiveConditions.__executeServer(opts));
var getLiveConditions = createServerFn({ method: "GET" }).handler(getLiveConditions_createServerFn_handler, async () => {
	const now = Date.now();
	if (cache && now - cache.at < CACHE_MS) return cache.data;
	try {
		const data = await fetchLive();
		cache = {
			at: now,
			data
		};
		return data;
	} catch {
		const data = fallback();
		cache = {
			at: now,
			data
		};
		return data;
	}
});
//#endregion
export { getLiveConditions_createServerFn_handler };
