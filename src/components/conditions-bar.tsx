import { CloudSun, Flag, Thermometer, Wind, Waves } from "lucide-react";
import { CONDITIONS } from "@/data/trackers";

const items = [
  { icon: Thermometer, label: "Air temp", value: `${CONDITIONS.airF}°F`, detail: `Feels like ${CONDITIONS.feelsF}°` },
  { icon: Wind, label: "Wind", value: `${CONDITIONS.windMph} mph`, detail: `${CONDITIONS.windDir} · ${CONDITIONS.windNote}` },
  { icon: Waves, label: "Water temp", value: `${CONDITIONS.waterF}°F`, detail: CONDITIONS.waterNote },
  { icon: Flag, label: "Beach", value: CONDITIONS.beach, detail: CONDITIONS.beachNote },
];

export function ConditionsBar() {
  return (
    <section aria-label="Live Gulf County conditions" className="bg-forest-deep text-cream">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-4 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-2">
          <CloudSun className="size-5 text-sand" />
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-sand">Live conditions</p>
            <p className="text-xs text-cream/70">Port St. Joe · Cape San Blas · {CONDITIONS.asOf}</p>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-4">
          {items.map((item) => (
            <li key={item.label} className="flex items-start gap-2">
              <item.icon className="mt-0.5 size-4 text-sand" />
              <span>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-cream/55">{item.label}</p>
                <p className="text-sm font-bold tabular">{item.value}</p>
                <p className="text-[11px] text-cream/65">{item.detail}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
