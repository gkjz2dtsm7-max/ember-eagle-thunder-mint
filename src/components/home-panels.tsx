import { useRef, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  CalendarDays,
  ChevronRight,
  CloudSun,
  DollarSign,
  Fish,
  Landmark,
  Star,
  TreePine,
  Turtle,
  Umbrella,
  Users,
  Utensils,
} from "lucide-react";
import { ECONOMY } from "@/data/census";
import { HAPPENING, INTERESTS, SPOTLIGHT } from "@/data/home";
import { cn } from "@/lib/utils";

export function StatsBand() {
  const stats = [
    { icon: Users, value: "3,000+", label: "Jobs Supported" },
    { icon: DollarSign, value: `$${ECONOMY.visitorSpending2024}M`, label: "Visitor Spending" },
    { icon: Briefcase, value: `$${ECONOMY.wagesSupported}+M`, label: "Wages Supported" },
    { icon: Landmark, value: `$${ECONOMY.taxesGenerated.toFixed(1)}M`, label: "Taxes Generated" },
  ];

  return (
    <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 md:-mt-10 md:px-6">
      <div className="rounded-xl bg-navy px-5 py-4 text-cream shadow-lift md:px-6 md:py-5">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:items-center lg:gap-3">
          {stats.map((s) => (
            <li key={s.label} className="flex items-center gap-3">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-cream/10">
                <s.icon className="size-4" />
              </span>
              <span>
                <p className="font-display text-xl font-semibold tabular leading-none md:text-2xl">{s.value}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-cream/65">{s.label}</p>
              </span>
            </li>
          ))}
          <li>
            <a href="/advertise" className="flex items-center gap-3 rounded-lg py-1 lg:pl-2">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-forest">
                <Users className="size-4" />
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span className="block text-sm font-bold">Stronger Together</span>
                <span className="block text-[11px] text-cream/75">Support Local. Grow Local.</span>
              </span>
              <ArrowRight className="size-4 shrink-0" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export function HappeningRow() {
  const scroller = useRef<HTMLDivElement>(null);
  const move = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section className="mx-auto w-full max-w-[1320px] overflow-hidden px-4 py-10 md:px-6">
      <div className="grid min-w-0 gap-5 lg:grid-cols-[1.7fr_0.9fr]">
        <div className="min-w-0">
          <div className="flex items-end justify-between gap-3">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-navy">
              <CalendarDays className="size-4 text-forest" />
              What's Happening Right Now
            </h2>
            <a href="/calendar" className="text-xs font-bold uppercase tracking-wider text-forest hover:text-pine">
              View all events →
            </a>
          </div>
          <div className="relative mt-4 min-w-0">
            <div
              ref={scroller}
              className="flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pr-12 no-scrollbar"
            >
              {HAPPENING.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="w-[78%] shrink-0 snap-start overflow-hidden rounded-xl bg-paper shadow-card sm:w-[46%] lg:w-[23.5%]"
                >
                  <div className="relative h-28 md:h-32">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                    <span
                      className={cn(
                        "absolute left-2 top-2 rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                        item.badge === "LIVE" ? "bg-forest text-cream" : "bg-navy text-cream",
                      )}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-bold leading-snug text-navy">{item.title}</h3>
                    <p className="mt-1 text-xs text-muted">{item.meta}</p>
                  </div>
                </a>
              ))}
            </div>
            <button
              type="button"
              aria-label="Next events"
              onClick={() => move(1)}
              className="absolute right-0 top-[3.6rem] hidden size-10 items-center justify-center rounded-full bg-paper text-navy shadow-lift lg:inline-flex"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <article className="rounded-xl bg-paper p-4 shadow-card">
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-navy">
            <Star className="size-3.5 fill-forest text-forest" />
            Local Spotlight
          </h2>
          <img
            src={SPOTLIGHT.image}
            alt="St. Joseph Bay looking southeast from Salinas Park, Gulf County"
            className="mt-3 h-36 w-full rounded-lg object-cover"
          />
          <h3 className="mt-3 font-bold text-navy">{SPOTLIGHT.title}</h3>
          <p className="mt-1 text-sm text-muted">{SPOTLIGHT.dek}</p>
          <a href={SPOTLIGHT.href} className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-forest">
            Learn more <ArrowRight className="size-3.5" />
          </a>
        </article>
      </div>
    </section>
  );
}

const INTEREST_ICONS: Record<string, typeof CalendarDays> = {
  beaches: Umbrella,
  fishing: Fish,
  nature: TreePine,
  food: Utensils,
  events: CalendarDays,
  family: Users,
  history: Landmark,
  data: BarChart3,
};

export function ExploreInterest() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pb-4 md:px-6">
      <div className="rounded-xl bg-paper px-3 py-4 shadow-card md:px-5">
        <h2 className="px-2 text-xs font-bold uppercase tracking-[0.16em] text-muted">Explore by Interest</h2>
        <ul className="mt-3 grid grid-cols-4 gap-1 sm:grid-cols-8">
          {INTERESTS.map((item) => {
            const Icon = INTEREST_ICONS[item.icon];
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex flex-col items-center gap-2 rounded-lg px-2 py-3 text-navy hover:bg-foam"
                >
                  <Icon className="size-5 text-navy" strokeWidth={1.6} />
                  <span className="text-center text-[10px] font-semibold uppercase tracking-wider">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function TrackerBtn({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn(
        "flex min-h-[4.25rem] items-center gap-3 rounded-lg px-4 py-3 text-cream shadow-card transition hover:brightness-110",
        className,
      )}
    >
      {children}
    </a>
  );
}

export function TrackerStrip() {
  return (
    <section className="mx-auto w-full max-w-[1320px] px-4 pb-14 md:px-6">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <li>
          <TrackerBtn href="/trackers/turtles" className="tracker-fill-turtle">
            <Turtle className="size-6 shrink-0" />
            <span>
              <span className="block text-sm font-bold uppercase tracking-wide">Sea Turtle Tracker</span>
              <span className="block text-xs text-cream/80">Nesting Season</span>
            </span>
          </TrackerBtn>
        </li>
        <li>
          <TrackerBtn href="/trackers/fishing" className="tracker-fill-fish">
            <Fish className="size-6 shrink-0" />
            <span>
              <span className="block text-sm font-bold uppercase tracking-wide">Fishing Report</span>
              <span className="block text-xs text-cream/80">Scallops Closed 2026</span>
            </span>
          </TrackerBtn>
        </li>
        <li>
          <TrackerBtn href="/trackers/beach" className="tracker-fill-beach">
            <Umbrella className="size-6 shrink-0" />
            <span>
              <span className="block text-sm font-bold uppercase tracking-wide">Beach Conditions</span>
              <span className="block text-xs text-cream/80">Live Updates</span>
            </span>
          </TrackerBtn>
        </li>
        <li>
          <TrackerBtn href="/trackers/weather" className="tracker-fill-weather">
            <CloudSun className="size-6 shrink-0" />
            <span>
              <span className="block text-sm font-bold uppercase tracking-wide">Weather Center</span>
              <span className="block text-xs text-cream/80">Local Forecasts</span>
            </span>
          </TrackerBtn>
        </li>
      </ul>
    </section>
  );
}
