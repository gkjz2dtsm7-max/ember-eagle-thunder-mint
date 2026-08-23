import { createFileRoute } from "@tanstack/react-router";
import { CountyMap } from "@/components/county-map";
import { PageIntro, SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/map")({ component: MapPage });

function MapPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="County map"
        title="From Dead Lakes to the cape"
        dek="A civic sketch of Gulf County: Port St. Joe, Wewahitchka, Cape San Blas, Indian Pass, the bay, and the state park. Tap a place for the short story."
      />
      <div className="mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6">
        <CountyMap />
        <p className="mt-6 text-sm text-muted">
          This is a wayfinding map for residents and visitors, not a survey plat. For parcel lines and flood zones, use Gulf County GIS and FEMA maps.
        </p>
      </div>
    </SiteShell>
  );
}
