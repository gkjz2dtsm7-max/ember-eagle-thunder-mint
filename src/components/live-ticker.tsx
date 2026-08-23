import { CloudSun, Droplets, Fish, Flag, Sun, Waves } from "lucide-react";
import type { LiveConditions } from "@/lib/live";
import { VISIT_GULF } from "@/data/visit-gulf";

export function LiveTicker({ live }: { live: LiveConditions }) {
  const items = [
    { icon: CloudSun, kicker: `${live.airF}°F`, value: live.sky },
    { icon: Sun, kicker: "Sunset", value: live.sunset },
    {
      icon: Waves,
      kicker: live.waterF ? `${live.waterF}°F water` : "Bay water",
      value: live.waterStation,
    },
    { icon: Fish, kicker: "Bay scallops", value: VISIT_GULF.scallops.status },
    {
      icon: Droplets,
      kicker: live.forecastHighDay,
      value: live.forecastHigh ? `${live.forecastHigh}°F` : live.forecastShort,
    },
    { icon: Flag, kicker: "Beach flags", value: "Posted locally" },
  ];

  return (
    <div
      aria-label="Live Gulf County updates"
      className="flex w-full min-w-0 items-center gap-4 overflow-x-auto rounded-full bg-navy px-4 py-2.5 text-cream shadow-lift no-scrollbar md:px-5"
    >
      <div className="flex shrink-0 items-center gap-2 pr-4 md:border-r md:border-cream/15">
        <span className="size-2.5 rounded-full bg-moss shadow-[0_0_0_4px_rgb(61_107_84_/_0.4)]" />
        <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Live Now</p>
      </div>
      <ul className="flex min-w-max items-center gap-5 md:gap-7">
        {items.map((item, i) => (
          <li key={item.kicker} className="flex items-center gap-5">
            {i > 0 ? <span className="hidden h-8 w-px bg-cream/15 sm:block" /> : null}
            <span className="flex items-center gap-2.5">
              <item.icon className="size-4 shrink-0 text-sand" strokeWidth={1.75} />
              <span className="leading-tight">
                <span className="block text-[13px] font-semibold">{item.kicker}</span>
                <span className="block text-[11px] text-cream/70">{item.value}</span>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
