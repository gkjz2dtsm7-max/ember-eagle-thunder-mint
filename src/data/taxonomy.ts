export const CATEGORIES = [
  { id: "fitness", label: "Fitness and walking" },
  { id: "wellness", label: "Yoga and wellness" },
  { id: "music", label: "Live music" },
  { id: "markets", label: "Markets and vendors" },
  { id: "community", label: "Community gatherings" },
  { id: "outdoor", label: "Outdoor activities" },
  { id: "conservation", label: "Conservation and wildlife" },
  { id: "church", label: "Church and community" },
  { id: "family", label: "Family-friendly" },
  { id: "seasonal", label: "Seasonal happenings" },
] as const;

export type EventCategory = (typeof CATEGORIES)[number]["id"];

export const CITIES = [
  "Port St. Joe",
  "Cape San Blas",
  "Indian Pass",
  "Beacon Hill",
  "St. Joe Beach",
  "Wewahitchka",
  "Highland View",
  "Overstreet",
  "White City",
  "Gulf County",
] as const;

export type CityName = (typeof CITIES)[number];

export function categoryLabel(id: string) {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
