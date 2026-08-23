export type TrackerId =
  | "turtles"
  | "fishing"
  | "beach"
  | "weather"
  | "economy"
  | "population"
  | "housing"
  | "civic"
  | "education";

export type TrackerMeta = {
  id: TrackerId;
  title: string;
  dek: string;
  group: "live" | "civic";
  updated: string;
};

export const TRACKERS: TrackerMeta[] = [
  {
    id: "turtles",
    title: "Sea turtle nests",
    dek: "Loggerheads and greens on the peninsula, May 1 to October 31.",
    group: "live",
    updated: "July 10, 2026 public reports",
  },
  {
    id: "fishing",
    title: "Fishing and scallops",
    dek: "Bay, Gulf, and harvest windows. 2026 Gulf County scallops are closed.",
    group: "live",
    updated: "Visit Gulf / FWC, August 2026",
  },
  {
    id: "beach",
    title: "Beach flags and access",
    dek: "Flag meaning, heat, and nest-safe beach use.",
    group: "live",
    updated: "August 22, 2026 evening",
  },
  {
    id: "weather",
    title: "Marine weather",
    dek: "Air, water, wind, and hurricane-season posture.",
    group: "live",
    updated: "Live from NWS Tallahassee / KAAF",
  },
  {
    id: "economy",
    title: "Visitor economy",
    dek: "Spending, jobs, wages, and taxes supported by Gulf County tourism.",
    group: "civic",
    updated: "2024 Local Studies estimates",
  },
  {
    id: "population",
    title: "Population",
    dek: "Census counts and the long recovery after Hurricane Michael.",
    group: "civic",
    updated: "Census 2025 estimate",
  },
  {
    id: "housing",
    title: "Housing",
    dek: "Units, values, rents, and building permits.",
    group: "civic",
    updated: "Census 2020-2024 ACS and 2025 permits",
  },
  {
    id: "civic",
    title: "Civic projects",
    dek: "Recovery, clinics, waterfront, schools, and the bay.",
    group: "civic",
    updated: "August 2026 compilation",
  },
  {
    id: "education",
    title: "Education",
    dek: "Gulf District Schools and nearby college pathways.",
    group: "civic",
    updated: "Census ACS 2020-2024",
  },
];

export const CONDITIONS = {
  asOf: "Saturday, August 22, 2026, about 6:00 PM CDT",
  airF: 88,
  feelsF: 95,
  windMph: 10,
  windDir: "SSW",
  windNote: "Afternoon storm risk",
  waterF: 85,
  waterNote: "Gulf and bay surface, typical late August",
  sky: "Partly Cloudy",
  beach: "Yellow",
  beachNote: "Low hazard. Heat advisory pattern, isolated storms.",
};

export const TURTLE_SNAPSHOT = {
  season: "May 1 to October 31, 2026",
  parkNestsAsOf: "July 10, 2026",
  parkTotal: 204,
  parkLoggerhead: 189,
  parkGreen: 15,
  parkName: "T.H. Stone Memorial St. Joseph Peninsula State Park",
  source:
    "WMBB / mypanhandle.com report, July 10, 2026. Park staff and FWC have the live count. This tracker is a civic snapshot, not an official nest log.",
  rules: [
    "Fill holes and knock down sandcastles before you leave.",
    "No flash photography or flashlights on nesting beaches at night.",
    "Lights out in beachfront windows. Use turtle-safe amber lighting.",
    "Stay off dunes and marked nests. Use walkovers.",
    "Give nesting or hatching turtles a wide berth. Never touch them.",
  ],
};

export const FISHING_SNAPSHOT = {
  bay: ["Speckled trout", "Redfish", "Flounder", "Sheepshead"],
  gulf: ["Red snapper (federal season)", "Grouper (season varies)", "King mackerel", "Cobia"],
  scallops: "Closed for 2026 in the Gulf County Zone",
  notes: [
    "Visit Gulf / FWC: the 2026 recreational bay scallop harvest in the Gulf County Zone is closed because of very low abundance. Do not harvest.",
    "St. Joseph Bay is an aquatic preserve. Treat seagrass as infrastructure.",
    "A Florida fishing license is required for most harvest. Shore-based exceptions exist. Confirm on MyFWC.",
    "The Florida Scallop, Music and Arts Festival is still on September 5 and 6, 2026 at Beacon Hill. That is a festival, not an open harvest.",
  ],
};

export const BEACH_FLAGS = [
  { color: "Green", meaning: "Low hazard. Calm conditions." },
  { color: "Yellow", meaning: "Medium hazard. Moderate surf or currents." },
  { color: "Red", meaning: "High hazard. Strong surf or currents." },
  { color: "Double red", meaning: "Water closed to the public." },
  { color: "Purple", meaning: "Dangerous marine life (often jellyfish or man-of-war)." },
];

export const SCHOOLS = [
  { name: "Port St. Joe Elementary", city: "Port St. Joe" },
  { name: "Port St. Joe Junior/Senior High", city: "Port St. Joe" },
  { name: "Wewahitchka Elementary", city: "Wewahitchka" },
  { name: "Wewahitchka Junior/Senior High", city: "Wewahitchka" },
  { name: "Gulf Coast State College (nearby)", city: "Panama City / Gulf Franklin" },
];
