export type Business = {
  id: string;
  name: string;
  category: string;
  city: string;
  blurb: string;
  address?: string;
  website?: string;
  highlight?: boolean;
};

export const BUSINESS_CATEGORIES = [
  "Dining",
  "Coffee",
  "Marina",
  "Outfitters",
  "Lodging",
  "Builders",
  "Real estate",
  "Health",
  "Civic",
  "Services",
] as const;

export const BUSINESSES: Business[] = [
  {
    id: "chamber",
    name: "Gulf County Chamber of Commerce",
    category: "Civic",
    city: "Port St. Joe",
    address: "150 Captain Neal Ct, Port St. Joe",
    website: "https://www.gulfchamber.org",
    blurb: "The business and civic front door for Port St. Joe, Wewahitchka, and the Cape.",
    highlight: true,
  },
  {
    id: "visitgulf",
    name: "Visit Gulf / Gulf County TDC",
    category: "Civic",
    city: "Port St. Joe",
    website: "https://www.visitgulf.com",
    blurb: "Official tourism calendar, beach guides, and visitor information for the Forgotten Coast.",
    highlight: true,
  },
  {
    id: "marina",
    name: "Port St. Joe Marina",
    category: "Marina",
    city: "Port St. Joe",
    blurb: "Full-service marina: slips, fuel, and tackle on St. Joseph Bay.",
    highlight: true,
  },
  {
    id: "coffee",
    name: "Shoreline Coffee Co.",
    category: "Coffee",
    city: "Port St. Joe",
    blurb: "Coffee, community, coastal life. A Reid Avenue style stop before the beach.",
  },
  {
    id: "outfitters",
    name: "Coastal Outfitters",
    category: "Outfitters",
    city: "Port St. Joe",
    blurb: "Kayaks, fishing, and camping gear for bay and Gulf days.",
  },
  {
    id: "builders",
    name: "Gulf Coast Builders",
    category: "Builders",
    city: "Port St. Joe",
    blurb: "Local residential and commercial building after the long recovery from Hurricane Michael.",
  },
  {
    id: "realty",
    name: "St. Joe Realty",
    category: "Real estate",
    city: "Port St. Joe",
    blurb: "Homes, lots, and rentals across Port St. Joe, the Cape, and WindMark.",
  },
  {
    id: "sandsea",
    name: "Sand and Sea Vacation Rentals",
    category: "Lodging",
    city: "Cape San Blas",
    blurb: "Cape and Port St. Joe vacation homes for families who want the quieter Gulf.",
  },
  {
    id: "horizon",
    name: "New Horizon Primary Care",
    category: "Health",
    city: "Port St. Joe",
    blurb:
      "Local primary care. Named in Florida's Rural Health Transformation work for northwest Florida clinics.",
    highlight: true,
  },
  {
    id: "park",
    name: "T.H. Stone Memorial St. Joseph Peninsula State Park",
    category: "Civic",
    city: "Cape San Blas",
    website: "https://www.floridastateparks.org",
    blurb: "Wilderness beach, camping, and the county's core loggerhead nesting shore.",
    highlight: true,
  },
  {
    id: "lighthouse",
    name: "Cape San Blas Lighthouse",
    category: "Civic",
    city: "Cape San Blas",
    blurb: "Relocated historic lighthouse, keepers' houses, and grounds open for walks and climb days.",
  },
  {
    id: "schools",
    name: "Gulf District Schools",
    category: "Civic",
    city: "Port St. Joe",
    website: "https://www.gulf.k12.fl.us",
    blurb: "Port St. Joe and Wewahitchka schools serving about 1,800 students countywide.",
  },
  {
    id: "library",
    name: "Gulf County Public Library",
    category: "Civic",
    city: "Port St. Joe",
    blurb: "Story times, public computers, and a quiet room with the county's memory on the shelves.",
  },
  {
    id: "cityhall",
    name: "City of Port St. Joe",
    category: "Civic",
    city: "Port St. Joe",
    blurb: "City hall, permits, parks, and the working waterfront that still defines the county seat.",
  },
  {
    id: "county",
    name: "Gulf County Board of County Commissioners",
    category: "Civic",
    city: "Port St. Joe",
    website: "https://www.gulfcounty-fl.gov",
    blurb: "County administration, emergency management, and public meetings.",
  },
  {
    id: "provisions",
    name: "Provisions",
    category: "Dining",
    city: "Port St. Joe",
    blurb: "Waterfront dining on the bay. A local favorite for visitors and Friday nights.",
  },
  {
    id: "indianpass",
    name: "Indian Pass Raw Bar",
    category: "Dining",
    city: "Indian Pass",
    blurb: "Oysters, mullet, and the last stop before the pass. A Forgotten Coast original.",
  },
  {
    id: "portinn",
    name: "Port Inn",
    category: "Lodging",
    city: "Port St. Joe",
    blurb: "Historic inn downtown. Walk to Reid Avenue, the marina, and George Core Park.",
  },
];
