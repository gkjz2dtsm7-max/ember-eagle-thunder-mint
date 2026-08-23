import { useState } from "react";
import { MAP_PLACES, type MapPlace } from "@/data/map";
import { cn } from "@/lib/utils";

const KIND_FILL: Record<MapPlace["kind"], string> = {
  town: "#1b4332",
  landmark: "#245c45",
  park: "#3d6b54",
  water: "#4a7d8c",
};

export function CountyMap() {
  const [active, setActive] = useState<MapPlace>(MAP_PLACES[0]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="overflow-hidden rounded-xl border border-line bg-foam">
        <svg viewBox="0 0 100 100" className="h-auto w-full" role="img" aria-label="Stylized map of Gulf County">
          <rect width="100" height="100" fill="#d7e4dc" />
          <path d="M8 6 H78 L86 22 L80 34 L92 40 L88 52 L70 48 L74 62 L60 58 L64 78 L40 92 L22 70 L18 48 L28 36 L16 22 Z" fill="#c5d8cc" stroke="#1b4332" strokeWidth="0.6" />
          <path d="M36 48 C48 50 58 44 64 52 C70 58 62 66 54 70 C44 76 34 68 32 60 C30 54 32 50 36 48 Z" fill="#9ec3c9" opacity="0.9" />
          <path d="M30 62 L38 86 L48 90 L44 70 Z" fill="#b7cfc0" />
          <text x="50" y="8" textAnchor="middle" fontSize="3.2" fill="#5a6b61" fontFamily="DM Sans, sans-serif">Gulf County, Florida</text>
          {MAP_PLACES.map((p) => (
            <g key={p.id} className="cursor-pointer" onClick={() => setActive(p)}>
              <circle cx={p.x} cy={p.y} r={active.id === p.id ? 2.6 : 1.8} fill={KIND_FILL[p.kind]} stroke="#fffdf8" strokeWidth="0.5" />
              <text x={p.x + 3} y={p.y + 1} fontSize="2.4" fill="#13251c" fontFamily="DM Sans, sans-serif">
                {p.name}
              </text>
            </g>
          ))}
        </svg>
      </div>
      <aside className="rounded-xl border border-line bg-cream-soft p-5 shadow-card">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-moss">{active.kind}</p>
        <h3 className="mt-1 text-2xl font-bold text-ink">{active.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{active.blurb}</p>
        <ul className="mt-6 grid gap-1.5">
          {MAP_PLACES.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => setActive(p)}
                className={cn(
                  "w-full rounded-sm px-3 py-2 text-left text-sm",
                  p.id === active.id ? "bg-forest text-cream" : "hover:bg-foam",
                )}
              >
                {p.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
