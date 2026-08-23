import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { ExploreInterest, HappeningRow, StatsBand, TrackerStrip } from "@/components/home-panels";
import { SiteShell } from "@/components/site-shell";
import { getLiveConditions } from "@/lib/live";

export const Route = createFileRoute("/")({
  loader: () => getLiveConditions(),
  component: Home,
});

function Home() {
  const live = Route.useLoaderData();
  return (
    <SiteShell>
      <Hero live={live} />
      <div className="bg-cream">
        <StatsBand />
        <HappeningRow />
        <ExploreInterest />
        <TrackerStrip />
      </div>
    </SiteShell>
  );
}
