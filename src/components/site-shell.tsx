import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  BarChart3,
  BookOpen,
  CalendarDays,
  Compass,
  Handshake,
  MapPin,
  Menu,
  Search,
  Target,
  Users,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Toaster } from "sonner";
import { BUSINESSES } from "@/data/businesses";
import { SEEDED_EVENTS } from "@/data/events";
import { TRACKERS } from "@/data/trackers";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const EXPLORE = [
  { href: "/calendar", label: "Community calendar" },
  { href: "/business", label: "Business directory" },
  { href: "/map", label: "County map" },
  { href: "/advertise", label: "Become a sponsor" },
] as const;

const DATA = [
  { href: "/trackers/economy", label: "Visitor economy" },
  { href: "/trackers/population", label: "Population" },
  { href: "/trackers/housing", label: "Housing" },
  { href: "/trackers/civic", label: "Civic projects" },
  { href: "/trackers/education", label: "Education" },
  { href: "/trackers", label: "All trackers" },
] as const;

const TRACKER_LINKS = [
  { href: "/trackers/turtles", label: "Sea turtles" },
  { href: "/trackers/fishing", label: "Fishing and scallops" },
  { href: "/trackers/beach", label: "Beach flags" },
  { href: "/trackers/weather", label: "Marine weather" },
  { href: "/trackers", label: "All trackers" },
] as const;

const LEARN = [
  { href: "/learn", label: "Learn hub" },
  { href: "/learn#kids", label: "For kids" },
  { href: "/trackers/turtles", label: "Sea turtles" },
  { href: "/about", label: "About Local Studies" },
] as const;

function Logo({ compact }: { compact?: boolean }) {
  return (
    <Link to="/" className="relative z-20 flex items-center gap-3">
      <img
        src="/logo.png"
        alt="Local Studies"
        width={compact ? 56 : 92}
        height={compact ? 50 : 82}
        className={cn(
          "object-contain drop-shadow-md",
          compact ? "h-12 w-12 md:h-14 md:w-14" : "h-[5rem] w-[5rem] md:h-[5.6rem] md:w-[5.6rem] md:-mb-5",
        )}
      />
      <span className="hidden min-w-0 sm:flex flex-col leading-none">
        <span className="font-display text-lg font-semibold uppercase tracking-wide text-navy md:text-xl">
          Local Studies
        </span>
        <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy/60">
          Gulf County, FL
        </span>
      </span>
    </Link>
  );
}

function DropLink({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={to}
      onClick={onClick}
      className="block rounded-sm px-3 py-2 text-sm text-ink hover:bg-foam"
    >
      {label}
    </a>
  );
}

function IconNavItem({
  href,
  label,
  icon: Icon,
  children,
}: {
  href: string;
  label: string;
  icon: typeof MapPin;
  children?: ReactNode;
}) {
  return (
    <div className="relative group">
      <a
        href={href}
        className="flex min-w-14 flex-col items-center gap-1 rounded-lg px-2 py-1.5 text-navy hover:bg-foam"
      >
        <Icon className="size-4" strokeWidth={1.75} />
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">{label}</span>
      </a>
      {children ? (
        <div className="invisible absolute left-1/2 top-full z-40 w-56 -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          <div className="rounded-lg border border-line bg-paper p-2 shadow-lift">{children}</div>
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const home = pathname === "/";
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (query.length < 2) return [];
    const hits: { href: string; title: string; kind: string }[] = [];
    for (const e of SEEDED_EVENTS) {
      if (`${e.title} ${e.location} ${e.city}`.toLowerCase().includes(query)) {
        hits.push({ href: "/calendar", title: e.title, kind: "Event" });
      }
    }
    for (const b of BUSINESSES) {
      if (`${b.name} ${b.category} ${b.city}`.toLowerCase().includes(query)) {
        hits.push({ href: "/business", title: b.name, kind: b.category });
      }
    }
    for (const t of TRACKERS) {
      if (`${t.title} ${t.dek}`.toLowerCase().includes(query)) {
        hits.push({ href: `/trackers/${t.id}`, title: t.title, kind: "Tracker" });
      }
    }
    return hits.slice(0, 8);
  }, [q]);

  return (
    <header className={cn("relative z-50 bg-paper", home ? "overflow-visible" : "border-b border-line")}>
      <div className="mx-auto flex w-full max-w-[1320px] items-center gap-3 px-4 py-2.5 md:px-6">
        <Logo compact={!home} />

        <nav aria-label="Primary" className="hidden flex-1 justify-center lg:flex">
          <div className="flex items-end px-1 py-1">
            <IconNavItem href="/map" label="Map" icon={MapPin} />
            <IconNavItem href="/business" label="Explore" icon={Compass}>
              {EXPLORE.map((i) => (
                <DropLink key={i.href} to={i.href} label={i.label} />
              ))}
            </IconNavItem>
            <IconNavItem href="/trackers/economy" label="Data" icon={BarChart3}>
              {DATA.map((i) => (
                <DropLink key={i.label} to={i.href} label={i.label} />
              ))}
            </IconNavItem>
            <IconNavItem href="/trackers" label="Trackers" icon={Target}>
              {TRACKER_LINKS.map((i) => (
                <DropLink key={i.href} to={i.href} label={i.label} />
              ))}
            </IconNavItem>
            <IconNavItem href="/calendar" label="Events" icon={CalendarDays} />
            <IconNavItem href="/learn" label="Learn" icon={BookOpen}>
              {LEARN.map((i) => (
                <DropLink key={i.label} to={i.href} label={i.label} />
              ))}
            </IconNavItem>
            <IconNavItem href="/about" label="About" icon={Users} />
          </div>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            className="inline-flex size-11 items-center justify-center rounded-md bg-navy text-cream hover:bg-navy-mid"
          >
            <Search className="size-5" />
          </button>
          <a
            href="/advertise"
            className={cn(buttonVariants({ variant: "sponsor", size: "md" }), "hidden h-11 md:inline-flex")}
          >
            <Handshake className="size-4" />
            Sponsor / Advertise
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md border border-line text-navy lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-paper px-4 py-4 lg:hidden">
          <div className="grid gap-1">
            {[
              ["/map", "Map"],
              ["/calendar", "Events"],
              ["/trackers", "Trackers"],
              ["/business", "Businesses"],
              ["/learn", "Learn"],
              ["/about", "About"],
              ["/advertise", "Sponsor / Advertise"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="rounded-sm px-3 py-3 font-semibold text-navy">
                {label}
              </a>
            ))}
            <p className="px-3 pt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Explore</p>
            {EXPLORE.map((i) => (
              <a key={i.href} href={i.href} className="rounded-sm px-3 py-2 text-ink">
                {i.label}
              </a>
            ))}
            <p className="px-3 pt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Data</p>
            {DATA.map((i) => (
              <a key={i.label} href={i.href} className="rounded-sm px-3 py-2 text-ink">
                {i.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {searchOpen ? (
        <div className="fixed inset-0 z-[60] bg-navy/40 p-4" onClick={() => setSearchOpen(false)}>
          <div
            className="mx-auto mt-16 max-w-lg rounded-xl border border-line bg-paper p-4 shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <label className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted" htmlFor="site-search">
              Search Gulf County
            </label>
            <input
              id="site-search"
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Events, businesses, trackers"
              className="mt-2 h-12 w-full rounded-md border border-line bg-cream px-3 text-base text-ink outline-none focus:border-forest"
            />
            <ul className="mt-3 divide-y divide-line">
              {results.length === 0 && q.trim().length >= 2 ? (
                <li className="py-3 text-sm text-muted">No matches. Try calendar, turtles, or marina.</li>
              ) : null}
              {results.map((r) => (
                <li key={r.title + r.kind}>
                  <a
                    href={r.href}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center justify-between gap-3 py-3 text-sm hover:text-forest"
                  >
                    <span className="font-medium">{r.title}</span>
                    <span className="text-[11px] uppercase tracking-wider text-muted">{r.kind}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-navy-deep text-cream">
      <div className="mx-auto grid w-full max-w-[1320px] gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-semibold uppercase tracking-wide">Local Studies</p>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/75">
            Discover. Support. Grow Local. Community data, a shared calendar, live trackers, and a business directory for Gulf County, Florida.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-cream/55">Explore</p>
          <ul className="mt-3 grid gap-2 text-sm">
            <li>
              <Link to="/calendar" className="hover:text-sand">
                Calendar
              </Link>
            </li>
            <li>
              <Link to="/trackers" className="hover:text-sand">
                Trackers
              </Link>
            </li>
            <li>
              <Link to="/business" className="hover:text-sand">
                Businesses
              </Link>
            </li>
            <li>
              <Link to="/map" className="hover:text-sand">
                Map
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-cream/55">Contact</p>
          <ul className="mt-3 grid gap-2 text-sm text-cream/80">
            <li>info@localstudies.org</li>
            <li>localstudies.org</li>
            <li>Port St. Joe, FL 32456</li>
            <li>
              <Link to="/advertise" className="hover:text-sand">
                Advertise
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-2 px-4 py-5 text-xs text-cream/55 md:flex-row md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} Local Studies. A Gulf County civic resource. Not an official government website.</p>
          <p>Census, FWC, and TDC figures cited on tracker pages.</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-hidden bg-cream">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <SiteHeader />
      <div id="main" className="flex-1">
        {children}
      </div>
      <SiteFooter />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export function PageIntro({
  kicker,
  title,
  dek,
}: {
  kicker: string;
  title: string;
  dek: string;
}) {
  return (
    <div className="mx-auto w-full max-w-[1240px] px-4 pb-8 pt-8 md:px-6 md:pt-12">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-moss">{kicker}</p>
      <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-ink md:text-5xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{dek}</p>
    </div>
  );
}

export function SectionHead({
  kicker,
  title,
  action,
}: {
  kicker: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-moss">{kicker}</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-ink md:text-3xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function CtaLink({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: ReactNode;
  variant?: "primary" | "inverse" | "outline" | "photo" | "photoOutline" | "dark" | "sponsor";
}) {
  return (
    <a href={to} className={buttonVariants({ variant, size: "lg" })}>
      {children}
    </a>
  );
}
