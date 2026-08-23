import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site-shell";
import { SeriesChart, EconomyChart } from "@/components/charts";
import { CIVIC_PROJECTS } from "@/data/civic";
import {
  CENSUS,
  ECONOMY,
  ECONOMY_SERIES,
  HOUSING_SERIES,
  POPULATION_SERIES,
} from "@/data/census";
import {
  BEACH_FLAGS,
  FISHING_SNAPSHOT,
  SCHOOLS,
  TRACKERS,
  TURTLE_SNAPSHOT,
} from "@/data/trackers";
import { FL_CHAMBER, VISIT_GULF } from "@/data/visit-gulf";
import { getLiveConditions } from "@/lib/live";

export const Route = createFileRoute("/trackers/$id")({
  loader: () => getLiveConditions(),
  component: TrackerDetail,
});

function TrackerDetail() {
  const { id } = Route.useParams();
  const live = Route.useLoaderData();
  const meta = TRACKERS.find((t) => t.id === id);
  if (!meta) throw notFound();

  return (
    <SiteShell>
      <PageIntro kicker="Tracker" title={meta.title} dek={meta.dek} />
      <div className="mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6">
        <p className="mb-8 text-xs uppercase tracking-wider text-muted">
          {id === "weather" || id === "beach" ? `NWS ${live.asOf}` : `Updated ${meta.updated}`}
        </p>
        {id === "turtles" && <Turtles />}
        {id === "fishing" && <Fishing />}
        {id === "beach" && <Beach liveSky={live.sky} liveAir={live.airF} />}
        {id === "weather" && <Weather />}
        {id === "economy" && <Economy />}
        {id === "population" && <Population />}
        {id === "housing" && <Housing />}
        {id === "civic" && <Civic />}
        {id === "education" && <Education />}
        <p className="mt-10 text-sm">
          <Link to="/trackers" className="font-semibold text-forest hover:underline">
            Back to all trackers
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg bg-forest p-5 text-cream">
      <p className="text-3xl font-bold tabular">{value}</p>
      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cream/70">{label}</p>
    </div>
  );
}

function Turtles() {
  const t = TURTLE_SNAPSHOT;
  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <img
          src="/photos/cape-san-blas-light.jpg"
          alt="Cape San Blas Light and Coast Guard housing on St. Joseph Peninsula, Gulf County"
          className="h-64 w-full rounded-xl object-cover"
        />
        <div className="mt-6 grid grid-cols-3 gap-3">
          <Stat value={String(t.parkTotal)} label="Park nests (Jul 10)" />
          <Stat value={String(t.parkLoggerhead)} label="Loggerhead" />
          <Stat value={String(t.parkGreen)} label="Green" />
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted">{t.source}</p>
        <p className="mt-3 text-sm text-muted">
          Season: {t.season}. {t.parkName}. Visit Gulf lists the Forgotten Coast Sea Turtle Festival as the summer celebration. Live nest logs stay with park staff and FWC.
        </p>
      </div>
      <div className="rounded-xl border border-line bg-cream-soft p-5">
        <h3 className="text-lg font-bold">What to do on the beach</h3>
        <ol className="mt-4 grid gap-3 text-sm leading-relaxed">
          {t.rules.map((rule, i) => (
            <li key={rule} className="flex gap-3">
              <span className="font-bold tabular text-forest">{i + 1}.</span>
              <span>{rule}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function Fishing() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-xl border border-line bg-navy p-5 text-cream lg:col-span-2">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-sand">Visit Gulf / FWC</p>
        <h3 className="mt-2 text-2xl font-bold">Bay scallops: {FISHING_SNAPSHOT.scallops}</h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-cream/80">{VISIT_GULF.scallops.note}</p>
      </div>
      <div className="rounded-xl border border-line bg-cream-soft p-5">
        <h3 className="text-lg font-bold">St. Joseph Bay</h3>
        <ul className="mt-3 grid gap-2 text-sm">
          {FISHING_SNAPSHOT.bay.map((s) => (
            <li key={s} className="rounded-sm bg-foam px-3 py-2">
              {s}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-line bg-cream-soft p-5">
        <h3 className="text-lg font-bold">Gulf side</h3>
        <ul className="mt-3 grid gap-2 text-sm">
          {FISHING_SNAPSHOT.gulf.map((s) => (
            <li key={s} className="rounded-sm bg-foam px-3 py-2">
              {s}
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-2 rounded-xl border border-line bg-paper p-5">
        <h3 className="text-lg font-bold">Before you harvest</h3>
        <ol className="mt-3 grid gap-2 text-sm leading-relaxed">
          {FISHING_SNAPSHOT.notes.map((n, i) => (
            <li key={n}>
              <span className="font-bold text-forest">{i + 1}.</span> {n}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function Beach({ liveSky, liveAir }: { liveSky: string; liveAir: number }) {
  return (
    <div className="grid gap-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {BEACH_FLAGS.map((f) => (
          <div key={f.color} className="rounded-lg border border-line bg-cream-soft p-4">
            <p className="font-bold">{f.color}</p>
            <p className="mt-2 text-sm text-muted">{f.meaning}</p>
          </div>
        ))}
      </div>
      <p className="text-sm leading-relaxed text-muted">
        NWS sky over Port St. Joe: {liveSky}, {liveAir}°F. {VISIT_GULF.beachFlags} Visit Gulf destination page: historic downtown is one block off Highway 98. Point South Marina is the boating hub in town.
      </p>
    </div>
  );
}

function Weather() {
  const live = Route.useLoaderData();
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat value={`${live.airF}°F`} label="Air" />
        <Stat value={`${live.feelsF}°F`} label="Feels like" />
        <Stat value={live.waterF ? `${live.waterF}°F` : "—"} label="Bay water" />
        <Stat value={live.windMph ? `${live.windMph} mph` : "Calm"} label={`Wind ${live.windDir}`} />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-line bg-cream-soft p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Sky</p>
          <p className="mt-1 font-bold">{live.sky}</p>
        </div>
        <div className="rounded-lg border border-line bg-cream-soft p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Sunset</p>
          <p className="mt-1 font-bold">{live.sunset}</p>
        </div>
        <div className="rounded-lg border border-line bg-cream-soft p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted">{live.forecastHighDay}</p>
          <p className="mt-1 font-bold">
            {live.forecastHigh ? `${live.forecastHigh}°F` : live.forecastShort}
          </p>
        </div>
      </div>
      {live.alerts.length ? (
        <p className="mt-4 rounded-lg bg-navy px-4 py-3 text-sm text-cream">Active NWS: {live.alerts.join(", ")}</p>
      ) : (
        <p className="mt-4 text-sm text-muted">No active NWS alerts for coastal Gulf County (FLZ114).</p>
      )}
      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
        {live.source} Hurricane season runs June 1 to November 30. This page refreshes from NWS. It is not a substitute for local emergency management.
      </p>
    </div>
  );
}

function Economy() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat value={`$${ECONOMY.visitorSpending2024}M`} label="Visitor spending 2024 est." />
        <Stat value="3,000+" label="Jobs supported" />
        <Stat value={`$${ECONOMY.wagesSupported}+M`} label="Wages supported" />
        <Stat value={`$${ECONOMY.taxesGenerated.toFixed(1)}M`} label="Taxes generated" />
      </div>
      <div className="h-72 rounded-xl border border-line bg-cream-soft p-4">
        <EconomyChart data={ECONOMY_SERIES} />
      </div>
      <p className="text-sm text-muted">{ECONOMY.note}</p>
      <div className="rounded-xl border border-line bg-paper p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-moss">Florida Chamber of Commerce</p>
        <h3 className="mt-2 text-xl font-bold">Statewide context, {FL_CHAMBER.asOf}</h3>
        <ul className="mt-3 grid gap-2 text-sm leading-relaxed">
          <li>Florida economy: {FL_CHAMBER.economy}. {FL_CHAMBER.economyNote}</li>
          <li>Net migration: {FL_CHAMBER.netMigrationPerDay} people per day (statewide).</li>
          <li>{FL_CHAMBER.homeSales}</li>
          <li>{FL_CHAMBER.kindergartenReady}</li>
        </ul>
        <p className="mt-3 text-xs text-muted">
          {FL_CHAMBER.source}. These are Florida totals. They are not Gulf County visitor-economy numbers.{" "}
          <a className="font-semibold text-forest" href={FL_CHAMBER.url}>
            Read the mid-year report
          </a>
        </p>
      </div>
    </div>
  );
}

function Population() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="grid gap-3">
        <Stat value={CENSUS.population2025.toLocaleString()} label="2025 population estimate" />
        <Stat value={CENSUS.population2020.toLocaleString()} label="2020 Census" />
        <Stat value={`+${CENSUS.populationChange}%`} label="Change 2020 to 2025" />
      </div>
      <div className="h-72 rounded-xl border border-line bg-cream-soft p-4">
        <SeriesChart data={POPULATION_SERIES} dataKey="value" />
      </div>
      <p className="lg:col-span-2 text-sm leading-relaxed text-muted">
        Hurricane Michael in October 2018 is the break in the line. The county lost people, housing, and a mill-era identity.
        The 2025 estimate of {CENSUS.population2025.toLocaleString()} is a recovery number, not a boom town number.
        {CENSUS.source} Florida Chamber statewide: {FL_CHAMBER.netMigrationPerDay} people a day net into Florida. That is the state, not this county.
      </p>
    </div>
  );
}

function Housing() {
  return (
    <div className="grid gap-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat value={CENSUS.housingUnits.toLocaleString()} label="Housing units 2025" />
        <Stat value={`${CENSUS.ownerOccupied}%`} label="Owner-occupied" />
        <Stat value={`$${CENSUS.medianHomeValue.toLocaleString()}`} label="Median home value" />
        <Stat value={String(CENSUS.buildingPermits2025)} label="Building permits 2025" />
      </div>
      <div className="h-72 rounded-xl border border-line bg-cream-soft p-4">
        <SeriesChart data={HOUSING_SERIES} dataKey="permits" />
      </div>
      <p className="text-sm text-muted">
        Median rent {`$${CENSUS.medianRent.toLocaleString()}`}. Households {CENSUS.households.toLocaleString()}, {CENSUS.personsPerHousehold} persons per household.
        Permit counts are the cleanest local rebuild signal after Michael. {CENSUS.source} {FL_CHAMBER.homeSales}
      </p>
    </div>
  );
}

function Civic() {
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {CIVIC_PROJECTS.map((p) => (
        <li key={p.id} className="rounded-xl border border-line bg-cream-soft p-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-moss">
            {p.status} · {p.where}
          </p>
          <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{p.blurb}</p>
        </li>
      ))}
    </ul>
  );
}

function Education() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="grid gap-3 sm:grid-cols-2">
        <Stat value={`${CENSUS.hsOrHigher}%`} label="High school or higher" />
        <Stat value={`${CENSUS.bachelorsOrHigher}%`} label="Bachelor's or higher" />
      </div>
      <div className="rounded-xl border border-line bg-cream-soft p-5">
        <h3 className="text-lg font-bold">Gulf District Schools</h3>
        <ul className="mt-3 grid gap-2 text-sm">
          {SCHOOLS.map((s) => (
            <li key={s.name} className="flex justify-between gap-3 border-b border-line py-2">
              <span>{s.name}</span>
              <span className="text-muted">{s.city}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">{FL_CHAMBER.kindergartenReady}</p>
      </div>
    </div>
  );
}
