import { createFileRoute } from "@tanstack/react-router";
import { CtaLink, PageIntro, SiteShell } from "@/components/site-shell";
import { AD_IMPACT, AD_PACKAGES } from "@/data/advertise";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/advertise")({ component: AdvertisePage });

function AdvertisePage() {
  return (
    <SiteShell>
      <PageIntro
        kicker="2026 media kit"
        title="Reach locals. Engage visitors. Grow your business."
        dek="Website and app placements on Local Studies, the Gulf County civic hub. Packages for every budget, from a supporter card to an exclusive premier partnership."
      />
      <div className="mx-auto w-full max-w-[1240px] px-4 pb-16 md:px-6">
        <ul className="grid gap-4 lg:grid-cols-4">
          {AD_PACKAGES.map((p) => (
            <li
              key={p.id}
              className={cn(
                "flex flex-col rounded-xl border p-5 shadow-card",
                "badge" in p && p.badge ? "border-forest bg-forest text-cream" : "border-line bg-cream-soft",
              )}
            >
              {"badge" in p && p.badge ? (
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-sand">{p.badge}</p>
              ) : (
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-moss">Package</p>
              )}
              <h2 className="mt-2 text-xl font-bold">{p.name}</h2>
              <p className="mt-1 text-2xl font-bold tabular">{p.price}</p>
              <ul className="mt-4 flex-1 space-y-2 text-sm">
                {p.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AD_IMPACT.map((i) => (
            <div key={i.label} className="rounded-lg bg-foam p-4">
              <p className="text-2xl font-bold tabular text-forest">{i.value}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted">{i.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-line bg-cream-soft p-6 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-bold">Let's grow Gulf County together</h2>
            <p className="mt-2 text-sm text-muted">Email info@localstudies.org. Mention Premier, Growth, Community, or Local Supporter.</p>
          </div>
          <CtaLink to="/calendar" variant="primary">Meanwhile, add your events</CtaLink>
        </div>
      </div>
    </SiteShell>
  );
}
