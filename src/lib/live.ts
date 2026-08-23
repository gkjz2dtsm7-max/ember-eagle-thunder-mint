import { createServerFn } from "@tanstack/react-start";
import { CONDITIONS } from "@/data/trackers";

const UA = "LocalStudies.org civic portal (info@localstudies.org)";
const POINT = { lat: 29.8119, lon: -85.303 };
const STATION = "KAAF";
const CACHE_MS = 10 * 60 * 1000;

export type LiveConditions = {
  asOf: string;
  asOfIso: string;
  airF: number;
  feelsF: number;
  sky: string;
  windMph: number;
  windDir: string;
  station: string;
  stationName: string;
  waterF: number | null;
  waterStation: string;
  sunrise: string;
  sunset: string;
  forecastHigh: number | null;
  forecastHighDay: string;
  forecastShort: string;
  alerts: string[];
  source: string;
  live: boolean;
};

let cache: { at: number; data: LiveConditions } | null = null;

function cToF(c: number) {
  return Math.round((c * 9) / 5 + 32);
}

function kmhToMph(k: number) {
  return Math.round(k * 0.621371);
}

function compass(deg: number | null, speed: number) {
  if (!speed) return "Calm";
  if (deg == null || Number.isNaN(deg)) return "";
  const dirs = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return dirs[Math.round(deg / 22.5) % 16];
}

function cdtTime(iso: string) {
  return new Date(iso).toLocaleTimeString("en-US", {
    timeZone: "America/Chicago",
    hour: "numeric",
    minute: "2-digit",
  });
}

function cdtStamp(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

async function readJson(url: string, ms = 8000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "application/geo+json, application/json" },
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    return res.json();
  } finally {
    clearTimeout(t);
  }
}

async function readText(url: string, ms = 8000) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { headers: { "User-Agent": UA }, signal: ctrl.signal });
    if (!res.ok) throw new Error(`${res.status} ${url}`);
    return res.text();
  } finally {
    clearTimeout(t);
  }
}

function fallback(): LiveConditions {
  return {
    asOf: CONDITIONS.asOf,
    asOfIso: new Date().toISOString(),
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
    live: false,
  };
}

function parseBuoyTemp(text: string) {
  const lines = text.split("\n").filter((l) => l && !l.startsWith("#"));
  for (const line of lines.slice(0, 6)) {
    const parts = line.trim().split(/\s+/);
    if (parts.length < 15) continue;
    const wtmp = Number(parts[14]);
    if (!Number.isNaN(wtmp) && wtmp > 5 && wtmp < 45) return cToF(wtmp);
  }
  return null;
}

async function fetchLive(): Promise<LiveConditions> {
  const base = fallback();
  const [obsRes, fcRes, sunRes, buoyRes, alertRes] = await Promise.allSettled([
    readJson(`https://api.weather.gov/stations/${STATION}/observations/latest`),
    readJson(`https://api.weather.gov/gridpoints/TAE/47,56/forecast`),
    readJson(`https://api.sunrise-sunset.org/json?lat=${POINT.lat}&lng=${POINT.lon}&formatted=0&tzid=America/Chicago`),
    readText("https://www.ndbc.noaa.gov/data/realtime2/JBYF1.txt"),
    readJson("https://api.weather.gov/alerts/active?zone=FLZ114"),
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
    const day = periods.find((p: { isDaytime?: boolean }) => p.isDaytime) ?? periods[1];
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

  if (alertRes.status === "fulfilled") {
    const feats = alertRes.value?.features ?? [];
    base.alerts = feats
      .map((f: { properties?: { event?: string } }) => f.properties?.event)
      .filter(Boolean)
      .slice(0, 3);
  }

  base.source = base.live
    ? "National Weather Service (api.weather.gov, station KAAF / forecast office Tallahassee). Water: NOAA NDBC JBYF1. Sun times for 29.81N, 85.30W."
    : base.source;
  return base;
}

export const getLiveConditions = createServerFn({ method: "GET" }).handler(async () => {
  const now = Date.now();
  if (cache && now - cache.at < CACHE_MS) return cache.data;
  try {
    const data = await fetchLive();
    cache = { at: now, data };
    return data;
  } catch {
    const data = fallback();
    cache = { at: now, data };
    return data;
  }
});
