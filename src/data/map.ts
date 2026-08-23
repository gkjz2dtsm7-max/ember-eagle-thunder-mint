export type MapPlace = {
  id: string;
  name: string;
  kind: "town" | "landmark" | "park" | "water";
  x: number;
  y: number;
  blurb: string;
};

export const MAP_PLACES: MapPlace[] = [
  {
    id: "psj",
    name: "Port St. Joe",
    kind: "town",
    x: 58,
    y: 38,
    blurb: "County seat, working waterfront, Reid Avenue, and the civic center of Gulf County.",
  },
  {
    id: "cape",
    name: "Cape San Blas",
    kind: "town",
    x: 42,
    y: 72,
    blurb: "The peninsula. Beaches, state park, lighthouse, and the county's turtle-nesting heart.",
  },
  {
    id: "indian",
    name: "Indian Pass",
    kind: "town",
    x: 28,
    y: 58,
    blurb: "West end of the cape road. Raw bar country and the pass into St. Vincent Sound.",
  },
  {
    id: "beacon",
    name: "Beacon Hill",
    kind: "town",
    x: 62,
    y: 48,
    blurb: "Veterans Memorial Park. Home of the Scallop, Music and Arts Festival.",
  },
  {
    id: "sjb",
    name: "St. Joe Beach",
    kind: "town",
    x: 70,
    y: 32,
    blurb: "Gulf-front neighborhood between Port St. Joe and Mexico Beach.",
  },
  {
    id: "wewa",
    name: "Wewahitchka",
    kind: "town",
    x: 48,
    y: 14,
    blurb: "North county. Dead Lakes, tupelo honey, and the inland half of Gulf County.",
  },
  {
    id: "highland",
    name: "Highland View",
    kind: "town",
    x: 66,
    y: 28,
    blurb: "Residential community on the north side of the city.",
  },
  {
    id: "overstreet",
    name: "Overstreet",
    kind: "town",
    x: 36,
    y: 22,
    blurb: "Rural crossroads between the cape road and Wewahitchka.",
  },
  {
    id: "lighthouse",
    name: "Cape San Blas Lighthouse",
    kind: "landmark",
    x: 46,
    y: 64,
    blurb: "Historic lighthouse relocated to the peninsula, with keepers' cottages and bay views.",
  },
  {
    id: "park",
    name: "St. Joseph Peninsula State Park",
    kind: "park",
    x: 38,
    y: 82,
    blurb: "T.H. Stone Memorial park. Wilderness beach, camping, and 200-plus turtle nests in 2026.",
  },
  {
    id: "bay",
    name: "St. Joseph Bay",
    kind: "water",
    x: 52,
    y: 52,
    blurb: "Scallops, seagrass, and the reason Port St. Joe exists. An aquatic preserve.",
  },
  {
    id: "deadlakes",
    name: "Dead Lakes",
    kind: "water",
    x: 44,
    y: 10,
    blurb: "Drowned cypress and bass water north of Wewahitchka.",
  },
];
