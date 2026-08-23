import type { EventCategory } from "./taxonomy";
import { VISIT_GULF_EVENTS } from "./visit-gulf";

export type CalendarEvent = {
  id: string;
  title: string;
  category: EventCategory;
  startsOn: string;
  endOn?: string;
  startTime?: string;
  endTime?: string;
  location: string;
  city: string;
  description: string;
  organizer?: string;
  source: "local-studies" | "community";
  featured?: boolean;
  image?: string;
};

export const SEEDED_EVENTS: CalendarEvent[] = [
  ...VISIT_GULF_EVENTS.map((e) => ({
    id: e.id,
    title: e.title,
    category: e.category,
    startsOn: e.startsOn,
    endOn: e.endOn,
    startTime: e.startTime,
    location: e.location,
    city: e.city,
    description: e.description,
    organizer: e.organizer,
    source: "local-studies" as const,
    featured: true,
    image:
      e.category === "music"
        ? "/photos/reid-ave-north.jpg"
        : e.category === "markets"
          ? "/photos/reid-ave-market.jpg"
          : e.category === "outdoor"
            ? "/photos/cape-san-blas-light.jpg"
            : e.category === "seasonal"
              ? "/photos/port-psj-harbor.jpg"
              : "/photos/reid-ave-south.jpg",
  })),
  {
    id: "sunset-0822",
    title: "Sunset at Indian Pass",
    category: "outdoor",
    startsOn: "2026-08-22",
    startTime: "7:18 PM",
    location: "Indian Pass",
    city: "Port St. Joe",
    description:
      "The bay puts on a free show most evenings. Pier, waterfront, and Cape lookouts. Bring a chair. Stay off marked nests after dark and skip the flash.",
    organizer: "Open waterfront",
    source: "local-studies",
    featured: true,
    image: "/photos/sunset-indian-pass.jpg",
  },
  {
    id: "music-0822",
    title: "Live music downtown",
    category: "music",
    startsOn: "2026-08-22",
    startTime: "7:00 PM",
    endTime: "9:00 PM",
    location: "Reid Avenue",
    city: "Port St. Joe",
    description:
      "Saturday evening sets downtown. Local players, lawn chairs welcome, shops stay open late.",
    organizer: "Downtown merchants",
    source: "local-studies",
    featured: true,
    image: "/photos/reid-ave-north.jpg",
  },
  {
    id: "market-0822",
    title: "Port St. Joe Waterfront Market",
    category: "markets",
    startsOn: "2026-08-22",
    startTime: "8:00 AM",
    endTime: "12:00 PM",
    location: "Port St. Joe Waterfront",
    city: "Port St. Joe",
    description:
      "Local produce, seafood, baked goods, and makers on the bay. A Saturday habit for residents and a first stop for visitors.",
    organizer: "Waterfront vendors",
    source: "local-studies",
    featured: true,
    image: "/photos/reid-ave-market.jpg",
  },
  {
    id: "yoga-0823",
    title: "Sunrise yoga at Salinas Park",
    category: "wellness",
    startsOn: "2026-08-23",
    startTime: "7:00 AM",
    endTime: "8:00 AM",
    location: "Salinas Park pavilion",
    city: "Cape San Blas",
    description:
      "All-level flow facing St. Joseph Bay. Bring a mat. Free, weather permitting.",
    organizer: "Cape wellness circle",
    source: "local-studies",
  },
  {
    id: "walk-0825",
    title: "Cape San Blas walking group",
    category: "fitness",
    startsOn: "2026-08-25",
    startTime: "7:30 AM",
    endTime: "8:30 AM",
    location: "Lighthouse keepers grounds",
    city: "Cape San Blas",
    description:
      "Easy coastal walk on paved paths around the lighthouse and park. Strollers welcome. Meet at the lighthouse parking area.",
    organizer: "Cape walking group",
    source: "local-studies",
  },
  {
    id: "turtles-0826",
    title: "Turtle patrol volunteer night",
    category: "conservation",
    startsOn: "2026-08-26",
    startTime: "6:30 PM",
    location: "St. Joseph Peninsula State Park ranger station",
    city: "Cape San Blas",
    description:
      "Season briefing for nest monitors and night-lights education. Nesting season runs May 1 through October 31. Confirm with park staff before showing up.",
    organizer: "Peninsula turtle patrol",
    source: "local-studies",
    featured: true,
    image: "/photos/cape-san-blas-light.jpg",
  },
  {
    id: "library-0827",
    title: "Story time at the library",
    category: "family",
    startsOn: "2026-08-27",
    startTime: "10:00 AM",
    location: "Gulf County Public Library",
    city: "Port St. Joe",
    description:
      "Picture books, songs, and a short craft for preschoolers and their grown-ups.",
    organizer: "Gulf County Public Library",
    source: "local-studies",
  },
  {
    id: "football-0828",
    title: "Port St. Joe High Friday night football",
    category: "community",
    startsOn: "2026-08-28",
    startTime: "7:00 PM",
    location: "Port St. Joe High School stadium",
    city: "Port St. Joe",
    description:
      "Home game under the lights. Family-friendly, local bands in the stands, and a classic Forgotten Coast Friday.",
    organizer: "Port St. Joe High School",
    source: "local-studies",
  },
  {
    id: "market-0829",
    title: "Port St. Joe Waterfront Market",
    category: "markets",
    startsOn: "2026-08-29",
    startTime: "8:00 AM",
    endTime: "12:00 PM",
    location: "Port St. Joe Waterfront",
    city: "Port St. Joe",
    description:
      "Weekly Saturday market. Seafood, produce, flowers, and local makers.",
    organizer: "Waterfront vendors",
    source: "local-studies",
    image: "/photos/reid-ave-market.jpg",
  },
  {
    id: "church-0830",
    title: "Community covered-dish lunch",
    category: "church",
    startsOn: "2026-08-30",
    startTime: "12:00 PM",
    location: "First Baptist Church fellowship hall",
    city: "Port St. Joe",
    description:
      "Open lunch after morning worship. Visitors welcome. Bring a dish if you can, come anyway if you cannot.",
    organizer: "First Baptist Church of Port St. Joe",
    source: "local-studies",
  },
  {
    id: "kayak-0901",
    title: "St. Joseph Bay paddle morning",
    category: "outdoor",
    startsOn: "2026-09-01",
    startTime: "8:00 AM",
    endTime: "11:00 AM",
    location: "Frank Brown Park boat ramp",
    city: "Port St. Joe",
    description:
      "Guided beginner paddle on the bay. Bring water, sun protection, and a PFD. Wind check at 7:30 AM.",
    organizer: "Bay paddle coop",
    source: "local-studies",
  },
  {
    id: "java-0907",
    title: "Java with Joe",
    category: "community",
    startsOn: "2026-09-07",
    startTime: "8:00 AM",
    endTime: "9:00 AM",
    location: "Gulf County Chamber of Commerce",
    city: "Port St. Joe",
    description:
      "Informal coffee hour for local business owners, civic groups, and anyone working on Gulf County projects.",
    organizer: "Gulf County Chamber of Commerce",
    source: "local-studies",
  },
  {
    id: "friday-reid-0904",
    title: "First Friday on Reid Avenue",
    category: "music",
    startsOn: "2026-09-04",
    startTime: "5:00 PM",
    endTime: "8:00 PM",
    location: "Reid Avenue downtown",
    city: "Port St. Joe",
    description:
      "Shops stay open late, local bands, and a stroll through historic downtown. A good night to bring visitors.",
    organizer: "Downtown merchants",
    source: "local-studies",
    featured: true,
    image: "/photos/reid-ave-storefronts.jpg",
  },
  {
    id: "scallop-2026",
    title: "Florida Scallop, Music and Arts Festival",
    category: "seasonal",
    startsOn: "2026-09-05",
    endOn: "2026-09-06",
    startTime: "10:00 AM",
    location: "Gulf County Veterans Memorial Park",
    city: "Beacon Hill",
    description:
      "Labor Day weekend at Beacon Hill. Live music, arts vendors, and the county's signature scallop-season gathering. Confirm hours on Visit Gulf before you drive.",
    organizer: "Gulf County TDC and local organizers",
    source: "local-studies",
    featured: true,
    image: "/photos/reid-ave-north.jpg",
  },
  {
    id: "cleanup-0912",
    title: "Cape San Blas beach cleanup",
    category: "conservation",
    startsOn: "2026-09-12",
    startTime: "8:00 AM",
    endTime: "10:00 AM",
    location: "Salinas Park beach access",
    city: "Cape San Blas",
    description:
      "Bags and gloves provided. Stay off marked turtle nests and dunes. Families welcome.",
    organizer: "Keep Gulf County Wild volunteers",
    source: "local-studies",
  },
  {
    id: "lighthouse-0913",
    title: "Cape San Blas Lighthouse grounds walk",
    category: "family",
    startsOn: "2026-09-13",
    startTime: "9:00 AM",
    endTime: "11:00 AM",
    location: "Cape San Blas Lighthouse",
    city: "Cape San Blas",
    description:
      "Docent-led walk of the relocated lighthouse, keepers' houses, and bay overlook. Check the lighthouse site for climb days.",
    organizer: "St. Joseph Historical Society",
    source: "local-studies",
  },
  {
    id: "youth-fish-0919",
    title: "Youth fishing clinic",
    category: "family",
    startsOn: "2026-09-19",
    startTime: "8:00 AM",
    endTime: "11:00 AM",
    location: "George Core Park pier",
    city: "Port St. Joe",
    description:
      "Rods on loan, bait provided, and a short lesson on bay etiquette and licenses. Ages 6 to 14 with an adult.",
    organizer: "Gulf County 4-H and marine volunteers",
    source: "local-studies",
  },
  {
    id: "wellness-0920",
    title: "Community health and wellness morning",
    category: "wellness",
    startsOn: "2026-09-20",
    startTime: "9:00 AM",
    location: "New Horizon Primary Care",
    city: "Port St. Joe",
    description:
      "Blood pressure checks, walking maps, and a short talk on heat safety during late summer. Open to the public.",
    organizer: "New Horizon Primary Care",
    source: "local-studies",
  },
  {
    id: "wewa-0926",
    title: "Dead Lakes paddle and picnic",
    category: "outdoor",
    startsOn: "2026-09-26",
    startTime: "9:00 AM",
    location: "Dead Lakes Recreation Area",
    city: "Wewahitchka",
    description:
      "North-county day on the lakes. Bring your own boat or kayak. Picnic after at the recreation area.",
    organizer: "Wewahitchka civic group",
    source: "local-studies",
  },
  {
    id: "market-0926",
    title: "Port St. Joe Waterfront Market",
    category: "markets",
    startsOn: "2026-09-26",
    startTime: "8:00 AM",
    endTime: "12:00 PM",
    location: "Port St. Joe Waterfront",
    city: "Port St. Joe",
    description: "Saturday market on the bay.",
    organizer: "Waterfront vendors",
    source: "local-studies",
    image: "/photos/reid-ave-market.jpg",
  },
  {
    id: "bay-talk-1003",
    title: "St. Joseph Bay aquatic preserve talk",
    category: "conservation",
    startsOn: "2026-10-03",
    startTime: "6:00 PM",
    location: "Port St. Joe Centennial Building",
    city: "Port St. Joe",
    description:
      "Water quality, seagrass, and scallop habitat. A public briefing for residents who want the science behind the bay.",
    organizer: "St. Joseph Bay Aquatic Preserve",
    source: "local-studies",
  },
  {
    id: "forgotten-music-2026",
    title: "Forgotten Music Festival",
    category: "music",
    startsOn: "2026-10-10",
    endOn: "2026-10-11",
    startTime: "12:00 PM",
    location: "St. Joseph Bay waterfront",
    city: "Port St. Joe",
    description:
      "Eighth annual two-day roots, blues, soul, and funk festival on the bay. Check forgottenmusicfestival.com for the artist lineup and gates.",
    organizer: "Forgotten Music Festival",
    source: "local-studies",
    featured: true,
    image: "/photos/reid-ave-north.jpg",
  },
  {
    id: "fall-fest-1017",
    title: "Gulf County fall family festival",
    category: "family",
    startsOn: "2026-10-17",
    startTime: "11:00 AM",
    endTime: "4:00 PM",
    location: "George Core Park",
    city: "Port St. Joe",
    description:
      "Games, local food, a small vendors row, and live music. Built for kids and grandparents on the same blanket.",
    organizer: "City of Port St. Joe parks",
    source: "local-studies",
    featured: true,
    image: "/photos/reid-ave-storefronts.jpg",
  },
  {
    id: "walk-1018",
    title: "Cape San Blas walking group",
    category: "fitness",
    startsOn: "2026-10-18",
    startTime: "8:00 AM",
    location: "Lighthouse keepers grounds",
    city: "Cape San Blas",
    description: "Sunday walk as the air finally cools. Meet at the lighthouse.",
    organizer: "Cape walking group",
    source: "local-studies",
  },
  {
    id: "church-1024",
    title: "Community fish fry",
    category: "church",
    startsOn: "2026-10-24",
    startTime: "5:00 PM",
    endTime: "7:30 PM",
    location: "St. Joseph Catholic Church hall",
    city: "Port St. Joe",
    description:
      "Fried fish, hush puppies, and a freewill offering that supports local outreach. Everyone is invited.",
    organizer: "St. Joseph Catholic Church",
    source: "local-studies",
  },
  {
    id: "halloween-1031",
    title: "Safe trick-or-treat on Reid Avenue",
    category: "seasonal",
    startsOn: "2026-10-31",
    startTime: "4:00 PM",
    endTime: "6:30 PM",
    location: "Reid Avenue downtown",
    city: "Port St. Joe",
    description:
      "Merchants hand out candy along downtown. Come in costume. Stay on the sidewalks and watch for evening traffic.",
    organizer: "Downtown merchants",
    source: "local-studies",
    featured: true,
  },
];

export function mergeEvents(
  community: CalendarEvent[],
  seed: CalendarEvent[] = SEEDED_EVENTS,
): CalendarEvent[] {
  const seen = new Set(seed.map((e) => e.id));
  const extra = community.filter((e) => !seen.has(e.id));
  return [...seed, ...extra].sort((a, b) =>
    a.startsOn === b.startsOn
      ? (a.startTime ?? "").localeCompare(b.startTime ?? "")
      : a.startsOn.localeCompare(b.startsOn),
  );
}
