import { ArrowRight, BarChart3, Building2, CalendarDays, MapPin, Target } from "lucide-react";
import { HERO_COPY, QUICK_CARDS } from "@/data/home";
import { CtaLink } from "@/components/site-shell";
import { LiveTicker } from "@/components/live-ticker";
import type { LiveConditions } from "@/lib/live";

const CARD_ICONS = [BarChart3, CalendarDays, Building2, Target];

function Sparkline() {
  return (
    <svg viewBox="0 0 240 80" className="h-full w-full text-forest" aria-hidden>
      <path
        d="M0 80 L0 52 L18 48 L36 54 L54 40 L72 44 L90 30 L108 34 L126 22 L144 26 L162 16 L180 20 L198 12 L220 18 L240 10 L240 80 Z"
        className="fill-forest/15"
      />
      <path
        d="M0 52 L18 48 L36 54 L54 40 L72 44 L90 30 L108 34 L126 22 L144 26 L162 16 L180 20 L198 12 L220 18 L240 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero({ live }: { live: LiveConditions }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-cream">
      <img
        src="/photos/hero-indian-pass.jpg"
        alt="Sunset over Indian Pass, Port St. Joe, Gulf County, Florida"
        className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-deep/78 via-navy-deep/28 to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-navy-deep/45 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 pb-16 pt-2 md:px-6 md:pb-20 md:pt-3">
        <LiveTicker live={live} />

        <div className="mt-6 grid items-start gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:mt-7 lg:gap-7">
          <div className="max-w-xl pt-2 md:pt-3">
            <p className="font-script text-[1.95rem] leading-none text-cream md:text-[2.45rem]">
              {HERO_COPY.kicker}
            </p>
            <h1 className="mt-1 font-display text-5xl font-bold uppercase leading-[0.88] tracking-wide text-cream md:text-6xl lg:text-[4.85rem]">
              {HERO_COPY.title}
            </h1>
            <p className="mt-4 max-w-md text-base font-medium leading-snug text-cream/92 md:text-lg">
              {HERO_COPY.dekLines[0]}
              <br />
              {HERO_COPY.dekLines[1]}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CtaLink to="/map" variant="photo">
                <MapPin className="size-4" />
                Explore the Map
              </CtaLink>
              <CtaLink to="/business" variant="photoOutline">
                <Building2 className="size-4" />
                View Businesses
              </CtaLink>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-3">
            {QUICK_CARDS.map((card, i) => {
              const Icon = CARD_ICONS[i];
              return (
                <li key={card.title}>
                  <a
                    href={card.href}
                    className="group flex h-full flex-col overflow-hidden rounded-xl bg-paper text-navy shadow-glass"
                  >
                    <span className="flex flex-1 flex-col p-3.5 pb-2 md:p-4 md:pb-2">
                      <span className="inline-flex size-8 items-center justify-center rounded-full bg-forest text-cream">
                        <Icon className="size-3.5" />
                      </span>
                      <span className="mt-2.5 flex items-start justify-between gap-2">
                        <span className="text-[13px] font-bold uppercase tracking-wide leading-tight">
                          {card.title}
                        </span>
                        <ArrowRight className="mt-0.5 size-4 shrink-0 text-forest transition group-hover:translate-x-0.5" />
                      </span>
                      <span className="mt-1 text-[11px] leading-snug text-muted">{card.dek}</span>
                    </span>
                    <span className="relative mt-auto h-[76px] overflow-hidden bg-foam md:h-[88px]">
                      {card.visual === "chart" ? (
                        <Sparkline />
                      ) : (
                        <img src={card.image} alt="" className="h-full w-full object-cover" />
                      )}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
