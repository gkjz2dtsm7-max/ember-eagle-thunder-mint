import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CtaLink, PageIntro, SiteShell } from "@/components/site-shell";
import { BUSINESSES, BUSINESS_CATEGORIES } from "@/data/businesses";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/business")({ component: BusinessPage });

function BusinessPage() {
  const [cat, setCat] = useState<string>("All");
  const list = useMemo(
    () => (cat === "All" ? BUSINESSES : BUSINESSES.filter((b) => b.category === cat)),
    [cat],
  );

  return (
    <SiteShell>
      <PageIntro
        kicker="Business directory"
        title="Discover and support local"
        dek="Shops, marinas, clinics, civic offices, builders, and the people who keep Gulf County working. Listings are a public directory, not paid endorsements unless marked as a sponsor."
      />
      <div className="mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6">
        <div className="flex flex-wrap gap-2">
          {["All", ...BUSINESS_CATEGORIES].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wider",
                cat === c ? "bg-forest text-cream" : "bg-foam text-forest",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b) => (
            <li key={b.id} className="flex flex-col rounded-xl border border-line bg-cream-soft p-5 shadow-card">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-moss">
                {b.category} · {b.city}
                {b.highlight ? " · Featured" : ""}
              </p>
              <h2 className="mt-2 text-lg font-bold">{b.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{b.blurb}</p>
              {b.address ? <p className="mt-3 text-sm text-ink">{b.address}</p> : null}
              {b.website ? (
                <a href={b.website} className="mt-3 text-sm font-semibold text-forest hover:underline" target="_blank" rel="noreferrer">
                  Visit site
                </a>
              ) : null}
            </li>
          ))}
        </ul>
        <div className="mt-12 rounded-xl bg-forest p-6 text-cream md:flex md:items-center md:justify-between md:p-8">
          <div>
            <h2 className="text-2xl font-bold">Want your business on this list and in the calendar?</h2>
            <p className="mt-2 text-sm text-cream/80">Add events for free. Sponsor packages put you on the homepage.</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
            <CtaLink to="/calendar" variant="inverse">Add an event</CtaLink>
            <CtaLink to="/advertise" variant="photoOutline">Sponsor kits</CtaLink>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
