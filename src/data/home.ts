export const HERO_COPY = {
  kicker: "Discover what's happening in",
  title: "GULF COUNTY, FL",
  dekLines: ["Live local insights. Real-time data.", "Stronger community. Brighter tomorrow."],
};

export const QUICK_CARDS = [
  {
    href: "/trackers/economy",
    title: "Community Data",
    dek: "Explore key insights and trends.",
    visual: "chart" as const,
    image: "",
  },
  {
    href: "/calendar",
    title: "Events",
    dek: "See what's happening around town.",
    visual: "photo" as const,
    image: "/photos/reid-ave-south.jpg",
  },
  {
    href: "/business",
    title: "Business Directory",
    dek: "Support local businesses.",
    visual: "photo" as const,
    image: "/photos/reid-ave-storefronts.jpg",
  },
  {
    href: "/trackers",
    title: "Live Trackers",
    dek: "Real-time updates that matter.",
    visual: "photo" as const,
    image: "/photos/cape-san-blas-light.jpg",
  },
] as const;

export const HAPPENING = [
  {
    id: "vg-bingo-0824",
    badge: "MONDAY",
    title: "Monday Night Bingo at the VFW",
    meta: "Port St. Joe · Aug 24",
    image: "/photos/reid-ave-south.jpg",
    href: "/calendar",
  },
  {
    id: "vg-skim-0829",
    badge: "AUG 29",
    title: "Cape San Blas Skim and Surf Contest",
    meta: "Rish Recreation Area",
    image: "/photos/cape-san-blas-light.jpg",
    href: "/calendar",
  },
  {
    id: "vg-scallop-fest-0905",
    badge: "SEP 5-6",
    title: "Scallop, Music and Arts Festival",
    meta: "Beacon Hill · Labor Day weekend",
    image: "/photos/port-psj-harbor.jpg",
    href: "/calendar",
  },
  {
    id: "vg-market-0905",
    badge: "SEP 5",
    title: "Salt Air Farmer's Market",
    meta: "George Core Park · through Dec 19",
    image: "/photos/reid-ave-market.jpg",
    href: "/calendar",
  },
] as const;

export const SPOTLIGHT = {
  title: "St. Joseph Bay",
  dek: "From Salinas Park, the bay that holds this county together.",
  image: "/photos/salinas-bay.jpg",
  href: "/map",
};

export const INTERESTS = [
  { href: "/trackers/beach", label: "Beaches", icon: "beaches" },
  { href: "/trackers/fishing", label: "Fishing", icon: "fishing" },
  { href: "/learn#bay", label: "Nature", icon: "nature" },
  { href: "/business", label: "Food", icon: "food" },
  { href: "/calendar", label: "Events", icon: "events" },
  { href: "/learn#kids", label: "Family", icon: "family" },
  { href: "/learn#heritage", label: "History", icon: "history" },
  { href: "/trackers/economy", label: "Local Data", icon: "data" },
] as const;

export const TICKER = {
  sunrise: "6:15 AM",
  nestsToday: 3,
  bite: "Red Snapper",
  biteNote: "Good Bite",
  music: "Port St. Joe",
};

export const PHOTO_CREDITS = [
  {
    work: "Sunset over Indian Pass",
    place: "Port St. Joe, Gulf County",
    by: "Maggie Parke",
    year: "2022",
    license: "CC BY-SA 4.0",
    used: "Homepage hero and sunset",
  },
  {
    work: "Reid Avenue looking south",
    place: "Downtown Port St. Joe",
    by: "Ebyabe",
    year: "2010",
    license: "CC BY-SA 3.0",
    used: "Business directory, market, and events",
  },
  {
    work: "Reid Avenue looking north",
    place: "Downtown Port St. Joe",
    by: "Ebyabe",
    year: "2010",
    license: "CC BY-SA 3.0",
    used: "Downtown and live music",
  },
  {
    work: "St. Joseph Bay from Salinas Park",
    place: "Cape San Blas, Gulf County",
    by: "The Bushranger",
    year: "2025",
    license: "CC BY-SA 4.0",
    used: "Local spotlight",
  },
  {
    work: "HOS Rocinante at the Port of Port St. Joe",
    place: "Port St. Joe harbor",
    by: "The Bushranger",
    year: "2025",
    license: "CC BY-SA 4.0",
    used: "Working waterfront",
  },
  {
    work: "Cape San Blas Light and Coast Guard housing",
    place: "Cape San Blas, Gulf County",
    by: "Ebyabe",
    year: "2010",
    license: "CC BY-SA 3.0",
    used: "Sea turtle and coastal trackers",
  },
] as const;
