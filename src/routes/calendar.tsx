import { createFileRoute } from "@tanstack/react-router";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parseISO,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { EventForm } from "@/components/event-form";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { Button } from "@/components/ui/button";
import { mergeEvents, type CalendarEvent } from "@/data/events";
import { CATEGORIES, categoryLabel } from "@/data/taxonomy";
import { listCommunityEvents } from "@/lib/events";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/calendar")({
  loader: () => listCommunityEvents(),
  component: CalendarPage,
});

function CalendarPage() {
  const community = Route.useLoaderData();
  const events = useMemo(() => mergeEvents(community ?? []), [community]);
  const [month, setMonth] = useState(new Date(2026, 7, 1));
  const [filter, setFilter] = useState<string>("all");
  const [selected, setSelected] = useState<Date | null>(new Date(2026, 7, 22));

  const filtered = events.filter((e) => (filter === "all" ? true : e.category === filter));
  const selectedKey = selected ? format(selected, "yyyy-MM-dd") : null;
  const dayEvents = selectedKey ? filtered.filter((e) => inRange(e, selectedKey)) : [];
  const upcoming = filtered.filter((e) => e.startsOn >= "2026-08-22");

  const grid = eachDayOfInterval({
    start: startOfWeek(startOfMonth(month)),
    end: endOfWeek(endOfMonth(month)),
  });

  return (
    <SiteShell>
      <PageIntro
        kicker="Shared local calendar"
        title="Gulf County community calendar"
        dek="Fitness, yoga, live music, markets, churches, wildlife, and everything else neighbors asked for. Add yours. This is a community resource, not a government filing."
      />

      <div className="mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider",
              filter === "all" ? "bg-forest text-cream" : "bg-foam text-forest",
            )}
          >
            All
          </button>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setFilter(c.id)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider",
                filter === c.id ? "bg-forest text-cream" : "bg-foam text-forest",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{format(month, "MMMM yyyy")}</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" aria-label="Previous month" onClick={() => setMonth((m) => addMonths(m, -1))}>
                  <ChevronLeft className="size-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Next month" onClick={() => setMonth((m) => addMonths(m, 1))}>
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-7 text-center text-[11px] font-bold uppercase tracking-wider text-muted">
              {"SMTWTFS".split("").map((d, i) => (
                <div key={d + i} className="py-2">{["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][i]}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {grid.map((day) => {
                const key = format(day, "yyyy-MM-dd");
                const has = filtered.some((e) => inRange(e, key));
                const on = selected && isSameDay(day, selected);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelected(day)}
                    className={cn(
                      "flex min-h-16 flex-col items-center rounded-md p-1 text-sm",
                      isSameMonth(day, month) ? "bg-cream-soft" : "bg-foam/40 text-muted",
                      on && "bg-forest text-cream",
                      has && !on && "ring-1 ring-forest/30",
                    )}
                  >
                    <span className="tabular">{format(day, "d")}</span>
                    {has ? <span className={cn("mt-1 size-1.5 rounded-full", on ? "bg-sand" : "bg-forest")} /> : null}
                  </button>
                );
              })}
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-bold text-ink">
                {selected ? format(selected, "EEEE, MMMM d") : "Select a day"}
              </h3>
              <ul className="mt-3 grid gap-3">
                {dayEvents.length === 0 ? (
                  <li className="rounded-lg border border-dashed border-line p-4 text-sm text-muted">
                    Nothing listed for this day yet. If you organize something, add it on the right.
                  </li>
                ) : (
                  dayEvents.map((e) => <EventRow key={e.id} event={e} />)
                )}
              </ul>
            </div>
          </div>

          <div className="grid gap-6">
            <EventForm />
            <div>
              <h3 className="text-lg font-bold">Coming up</h3>
              <ul className="mt-3 grid gap-3">
                {[...upcoming].sort((a, b) => Number(b.source === "community") - Number(a.source === "community")).slice(0, 10).map((e) => (
                  <EventRow key={e.id} event={e} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}

function inRange(event: CalendarEvent, day: string) {
  const end = event.endOn ?? event.startsOn;
  return day >= event.startsOn && day <= end;
}

function EventRow({ event }: { event: CalendarEvent }) {
  const start = parseISO(event.startsOn);
  return (
    <article className="rounded-lg border border-line bg-cream-soft p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-moss">
        {categoryLabel(event.category)} · {event.source === "community" ? "Neighbor submitted" : "Local Studies"}
      </p>
      <h4 className="mt-1 font-bold text-ink">{event.title}</h4>
      <p className="mt-1 text-sm text-muted">
        {format(start, "MMM d")}
        {event.endOn ? ` to ${format(parseISO(event.endOn), "MMM d")}` : ""}
        {event.startTime ? ` · ${event.startTime}` : ""} · {event.location}, {event.city}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink/80">{event.description}</p>
    </article>
  );
}
