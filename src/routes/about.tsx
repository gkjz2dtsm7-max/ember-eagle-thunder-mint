import { createFileRoute } from "@tanstack/react-router";
import { CtaLink, PageIntro, SiteShell } from "@/components/site-shell";
import { PHOTO_CREDITS } from "@/data/home";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="About"
        title="Local Studies is a civic front door"
        dek="Real data. Local stories. Stronger community. Built for Gulf County residents, businesses, churches, and visitors who need one honest place to look."
      />
      <div className="mx-auto grid w-full max-w-[1240px] gap-8 px-4 pb-8 md:grid-cols-[1.1fr_0.9fr] md:px-6">
        <div className="space-y-4 text-sm leading-relaxed text-ink/90">
          <p>
            Local Studies gathers community data, a shared digital calendar, live coastal trackers, and a business directory
            so you do not have to hunt five Facebook groups to find out what is happening this weekend.
          </p>
          <p>
            The calendar is community-contributed. If you organize a walk, a market, a fish fry, a concert, or a nest-watch,
            add it. Businesses and civic groups can keep their own listings current as the system grows.
          </p>
          <p>
            This is not a city or county website. Figures from Census, FWC, and tourism partners are cited on the tracker pages.
            Visitor-economy totals are Local Studies estimates. When we are compiling rather than quoting, we say so.
          </p>
          <p>
            Domain: localstudies.org. Contact: info@localstudies.org. Port St. Joe, Florida.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <CtaLink to="/calendar">Open the calendar</CtaLink>
            <CtaLink to="/advertise" variant="outline">
              Sponsor Local Studies
            </CtaLink>
          </div>
        </div>
        <img
          src="/photos/hero-indian-pass.jpg"
          alt="Sunset over Indian Pass, Port St. Joe, Gulf County, Florida"
          className="h-full min-h-64 rounded-xl object-cover"
        />
      </div>
      <section className="mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6">
        <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-navy">Photo credits</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted">
          Site photography is verified Gulf County, Florida. We use public Wikimedia photographs with the licenses required
          by their authors. Reid Avenue streetscapes are 2010 historic downtown views. If you have a current photo of the
          Saturday market, a working shrimp boat, or Reid Avenue after 2018, send it to info@localstudies.org.
        </p>
        <ol className="mt-4 grid gap-3 text-sm text-ink/90 md:grid-cols-2">
          {PHOTO_CREDITS.map((c, i) => (
            <li key={c.work} className="rounded-lg border border-line bg-paper p-4">
              <p className="font-bold text-navy">
                {i + 1}. {c.work}
              </p>
              <p className="mt-1 text-muted">{c.place}. {c.by}, {c.year}. {c.license}.</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">{c.used}</p>
            </li>
          ))}
        </ol>
      </section>
    </SiteShell>
  );
}
