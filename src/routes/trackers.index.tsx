import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { TRACKERS } from "@/data/trackers";

export const Route = createFileRoute("/trackers/")({ component: TrackersPage });

function TrackersPage() {
  const live = TRACKERS.filter((t) => t.group === "live");
  const civic = TRACKERS.filter((t) => t.group === "civic");
  return (
    <SiteShell>
      <PageIntro
        kicker="All trackers"
        title="Live conditions and civic numbers"
        dek="Sea turtles, fishing, beach flags, and marine weather sit beside population, housing, economy, schools, and civic projects. Sources are named on each page."
      />
      <div className="mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6">
        <h2 className="text-lg font-bold">Live</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {live.map((t) => (
            <TrackerCard key={t.id} {...t} />
          ))}
        </ul>
        <h2 className="mt-12 text-lg font-bold">Civic data</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {civic.map((t) => (
            <TrackerCard key={t.id} {...t} />
          ))}
        </ul>
      </div>
    </SiteShell>
  );
}

function TrackerCard({ id, title, dek, updated }: { id: string; title: string; dek: string; updated: string }) {
  return (
    <li>
      <Link
        to="/trackers/$id"
        params={{ id }}
        className="flex h-full flex-col rounded-xl border border-line bg-cream-soft p-5 shadow-card hover:shadow-lift"
      >
        <h3 className="text-xl font-bold text-ink">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{dek}</p>
        <p className="mt-4 text-[11px] uppercase tracking-wider text-moss">{updated}</p>
      </Link>
    </li>
  );
}
