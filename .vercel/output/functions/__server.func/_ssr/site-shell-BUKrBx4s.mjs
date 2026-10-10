import { o as __toESM } from "../_runtime.mjs";
import { a as TRACKERS } from "./trackers-Bfq5zcb8.mjs";
import { C as require_jsx_runtime, Z as require_react, m as useRouterState, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { E as CalendarDays, T as ChartColumn, f as Search, g as Handshake, i as Users, k as BookOpen, l as Target, m as MapPin, p as Menu, t as X, x as Compass } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-BUKrBx4s.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var BUSINESS_CATEGORIES = [
	"Dining",
	"Coffee",
	"Marina",
	"Outfitters",
	"Lodging",
	"Builders",
	"Real estate",
	"Health",
	"Civic",
	"Services"
];
var BUSINESSES = [
	{
		id: "chamber",
		name: "Gulf County Chamber of Commerce",
		category: "Civic",
		city: "Port St. Joe",
		address: "150 Captain Neal Ct, Port St. Joe",
		website: "https://www.gulfchamber.org",
		blurb: "The business and civic front door for Port St. Joe, Wewahitchka, and the Cape.",
		highlight: true
	},
	{
		id: "visitgulf",
		name: "Visit Gulf / Gulf County TDC",
		category: "Civic",
		city: "Port St. Joe",
		website: "https://www.visitgulf.com",
		blurb: "Official tourism calendar, beach guides, and visitor information for the Forgotten Coast.",
		highlight: true
	},
	{
		id: "marina",
		name: "Port St. Joe Marina",
		category: "Marina",
		city: "Port St. Joe",
		blurb: "Full-service marina: slips, fuel, and tackle on St. Joseph Bay.",
		highlight: true
	},
	{
		id: "coffee",
		name: "Shoreline Coffee Co.",
		category: "Coffee",
		city: "Port St. Joe",
		blurb: "Coffee, community, coastal life. A Reid Avenue style stop before the beach."
	},
	{
		id: "outfitters",
		name: "Coastal Outfitters",
		category: "Outfitters",
		city: "Port St. Joe",
		blurb: "Kayaks, fishing, and camping gear for bay and Gulf days."
	},
	{
		id: "builders",
		name: "Gulf Coast Builders",
		category: "Builders",
		city: "Port St. Joe",
		blurb: "Local residential and commercial building after the long recovery from Hurricane Michael."
	},
	{
		id: "realty",
		name: "St. Joe Realty",
		category: "Real estate",
		city: "Port St. Joe",
		blurb: "Homes, lots, and rentals across Port St. Joe, the Cape, and WindMark."
	},
	{
		id: "sandsea",
		name: "Sand and Sea Vacation Rentals",
		category: "Lodging",
		city: "Cape San Blas",
		blurb: "Cape and Port St. Joe vacation homes for families who want the quieter Gulf."
	},
	{
		id: "horizon",
		name: "New Horizon Primary Care",
		category: "Health",
		city: "Port St. Joe",
		blurb: "Local primary care. Named in Florida's Rural Health Transformation work for northwest Florida clinics.",
		highlight: true
	},
	{
		id: "park",
		name: "T.H. Stone Memorial St. Joseph Peninsula State Park",
		category: "Civic",
		city: "Cape San Blas",
		website: "https://www.floridastateparks.org",
		blurb: "Wilderness beach, camping, and the county's core loggerhead nesting shore.",
		highlight: true
	},
	{
		id: "lighthouse",
		name: "Cape San Blas Lighthouse",
		category: "Civic",
		city: "Cape San Blas",
		blurb: "Relocated historic lighthouse, keepers' houses, and grounds open for walks and climb days."
	},
	{
		id: "schools",
		name: "Gulf District Schools",
		category: "Civic",
		city: "Port St. Joe",
		website: "https://www.gulf.k12.fl.us",
		blurb: "Port St. Joe and Wewahitchka schools serving about 1,800 students countywide."
	},
	{
		id: "library",
		name: "Gulf County Public Library",
		category: "Civic",
		city: "Port St. Joe",
		blurb: "Story times, public computers, and a quiet room with the county's memory on the shelves."
	},
	{
		id: "cityhall",
		name: "City of Port St. Joe",
		category: "Civic",
		city: "Port St. Joe",
		blurb: "City hall, permits, parks, and the working waterfront that still defines the county seat."
	},
	{
		id: "county",
		name: "Gulf County Board of County Commissioners",
		category: "Civic",
		city: "Port St. Joe",
		website: "https://www.gulfcounty-fl.gov",
		blurb: "County administration, emergency management, and public meetings."
	},
	{
		id: "provisions",
		name: "Provisions",
		category: "Dining",
		city: "Port St. Joe",
		blurb: "Waterfront dining on the bay. A local favorite for visitors and Friday nights."
	},
	{
		id: "indianpass",
		name: "Indian Pass Raw Bar",
		category: "Dining",
		city: "Indian Pass",
		blurb: "Oysters, mullet, and the last stop before the pass. A Forgotten Coast original."
	},
	{
		id: "portinn",
		name: "Port Inn",
		category: "Lodging",
		city: "Port St. Joe",
		blurb: "Historic inn downtown. Walk to Reid Avenue, the marina, and George Core Park."
	}
];
var VISIT_GULF = {
	source: "Gulf County TDC, visitgulf.com, pulled August 22, 2026",
	portStJoe: "On the shore of St. Joseph Bay lies Port St. Joe, a small beach town with a big heart. Historic downtown sits one block off Highway 98. Point South Marina is the boating hub in town.",
	marina: "Point South Marina, Port St. Joe",
	scallops: {
		status: "Closed",
		season: "2026 recreational bay scallop harvest",
		zone: "Gulf County Zone",
		note: "Visit Gulf and FWC: 2026 Gulf County bay scallop season is closed because of very low bay scallop abundance. Do not harvest.",
		url: "https://www.visitgulf.com/events/"
	},
	beachFlags: "Gulf County beach flags on Cape San Blas and Indian Pass are posted by South Gulf Fire Rescue and community volunteers. St. Joe Beach is not in that system. There is no public flag API. Check their Facebook page before you swim.",
	welcomeCenter: {
		name: "Gulf County Welcome Center",
		address: "150 Captain Fred's Place, Port St. Joe, FL 32456",
		hours: "Monday to Thursday, 7:00 AM to 5:30 PM Eastern"
	}
};
var VISIT_GULF_EVENTS = [
	{
		id: "vg-bingo-0824",
		title: "Monday Night Bingo at the VFW",
		startsOn: "2026-08-24",
		startTime: "6:00 PM",
		location: "John C. Gainous VFW Post 10069",
		city: "Port St. Joe",
		category: "community",
		description: "Weekly Monday bingo. Listed on the official Gulf County TDC events calendar at visitgulf.com.",
		organizer: "Gulf County TDC / Visit Gulf",
		url: "https://www.visitgulf.com/event/monday-night-bingo-at-the-vfw/1497/"
	},
	{
		id: "vg-skim-0829",
		title: "Cape San Blas Skim and Surf Contest 2026",
		startsOn: "2026-08-29",
		location: "South side of William J. Billy Joe Rish Recreation Area",
		city: "Cape San Blas",
		category: "outdoor",
		description: "Skim and surf contest on Cape San Blas. Official Visit Gulf listing.",
		organizer: "Gulf County TDC / Visit Gulf",
		url: "https://www.visitgulf.com/event/cape-san-blas-skim-%26-surf-contest-2026/1507/"
	},
	{
		id: "vg-scallop-fest-0905",
		title: "2026 Florida Scallop, Music and Arts Festival",
		startsOn: "2026-09-05",
		endOn: "2026-09-06",
		location: "Gulf County Veterans Memorial Park",
		city: "Beacon Hill",
		category: "seasonal",
		description: "Labor Day weekend festival at Veterans Memorial Park, 8750 W Hwy 98. Presented by the Gulf County Chamber of Commerce. Ticketed. Harvest is closed this year. The festival still runs.",
		organizer: "Gulf County Chamber of Commerce",
		url: "https://www.visitgulf.com/event/2026-florida-scallop-music-%26-arts-festival/1484/"
	},
	{
		id: "vg-market-0905",
		title: "2026 Salt Air Farmer's Market",
		startsOn: "2026-09-05",
		endOn: "2026-12-19",
		location: "George Core Park",
		city: "Port St. Joe",
		category: "markets",
		description: "Seasonal farmers market at George Core Park, September 5 through December 19, 2026. Official Visit Gulf listing.",
		organizer: "Gulf County TDC / Visit Gulf",
		url: "https://www.visitgulf.com/event/2026-salt-air-farmers-market/1441/"
	},
	{
		id: "vg-tram-0917",
		title: "St. Joseph Bay State Buffer Preserve Guided Tram Tour",
		startsOn: "2026-09-17",
		location: "St. Joseph Bay State Buffer Preserve",
		city: "Port St. Joe",
		category: "conservation",
		description: "Guided tram tour with Friends of St. Joseph Bay Preserve. Official Visit Gulf listing.",
		organizer: "Friends of St. Joseph Bay Preserve",
		url: "https://www.visitgulf.com/event/st-joseph-bay-state-buffer-preserve-guided-tram-tour/1471/"
	},
	{
		id: "vg-music-1010",
		title: "2026 Forgotten Music Festival",
		startsOn: "2026-10-10",
		endOn: "2026-10-11",
		location: "162 Miss Zola's Dr",
		city: "Port St. Joe",
		category: "music",
		description: "Eighth annual Forgotten Music Festival. Presented by the Gulf County Chamber of Commerce. Ticketed.",
		organizer: "Gulf County Chamber of Commerce",
		url: "https://www.visitgulf.com/event/2026-forgotten-music-festival/1443/"
	}
];
var FL_CHAMBER = {
	source: "Florida Chamber Foundation, 2026 Business and Economic Mid-Year Report",
	url: "https://www.flchamber.com/florida-chamber-foundations-business-economic-mid-year-report-shows-floridas-economy-remains-strong-as-growth-moderates/",
	asOf: "August 2026",
	economy: "$1.8 trillion",
	economyNote: "Florida statewide economy. Not a Gulf County figure.",
	netMigrationPerDay: 551,
	homeSales: "Single-family home sales up year over year for 10 consecutive months (statewide).",
	kindergartenReady: "44% of Florida children entered kindergarten ready to learn in fall 2025 (statewide).",
	kindergartenUrl: "https://www.flchamber.com/florida-chamber-foundation-early-learning-report-finds-more-than-half-of-floridas-youngest-learners-start-kindergarten-already-behind/"
};
var SEEDED_EVENTS = [
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
		source: "local-studies",
		featured: true,
		image: e.category === "music" ? "/photos/reid-ave-north.jpg" : e.category === "markets" ? "/photos/reid-ave-market.jpg" : e.category === "outdoor" ? "/photos/cape-san-blas-light.jpg" : e.category === "seasonal" ? "/photos/port-psj-harbor.jpg" : "/photos/reid-ave-south.jpg"
	})),
	{
		id: "sunset-0822",
		title: "Sunset at Indian Pass",
		category: "outdoor",
		startsOn: "2026-08-22",
		startTime: "7:18 PM",
		location: "Indian Pass",
		city: "Port St. Joe",
		description: "The bay puts on a free show most evenings. Pier, waterfront, and Cape lookouts. Bring a chair. Stay off marked nests after dark and skip the flash.",
		organizer: "Open waterfront",
		source: "local-studies",
		featured: true,
		image: "/photos/sunset-indian-pass.jpg"
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
		description: "Saturday evening sets downtown. Local players, lawn chairs welcome, shops stay open late.",
		organizer: "Downtown merchants",
		source: "local-studies",
		featured: true,
		image: "/photos/reid-ave-north.jpg"
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
		description: "Local produce, seafood, baked goods, and makers on the bay. A Saturday habit for residents and a first stop for visitors.",
		organizer: "Waterfront vendors",
		source: "local-studies",
		featured: true,
		image: "/photos/reid-ave-market.jpg"
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
		description: "All-level flow facing St. Joseph Bay. Bring a mat. Free, weather permitting.",
		organizer: "Cape wellness circle",
		source: "local-studies"
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
		description: "Easy coastal walk on paved paths around the lighthouse and park. Strollers welcome. Meet at the lighthouse parking area.",
		organizer: "Cape walking group",
		source: "local-studies"
	},
	{
		id: "turtles-0826",
		title: "Turtle patrol volunteer night",
		category: "conservation",
		startsOn: "2026-08-26",
		startTime: "6:30 PM",
		location: "St. Joseph Peninsula State Park ranger station",
		city: "Cape San Blas",
		description: "Season briefing for nest monitors and night-lights education. Nesting season runs May 1 through October 31. Confirm with park staff before showing up.",
		organizer: "Peninsula turtle patrol",
		source: "local-studies",
		featured: true,
		image: "/photos/cape-san-blas-light.jpg"
	},
	{
		id: "library-0827",
		title: "Story time at the library",
		category: "family",
		startsOn: "2026-08-27",
		startTime: "10:00 AM",
		location: "Gulf County Public Library",
		city: "Port St. Joe",
		description: "Picture books, songs, and a short craft for preschoolers and their grown-ups.",
		organizer: "Gulf County Public Library",
		source: "local-studies"
	},
	{
		id: "football-0828",
		title: "Port St. Joe High Friday night football",
		category: "community",
		startsOn: "2026-08-28",
		startTime: "7:00 PM",
		location: "Port St. Joe High School stadium",
		city: "Port St. Joe",
		description: "Home game under the lights. Family-friendly, local bands in the stands, and a classic Forgotten Coast Friday.",
		organizer: "Port St. Joe High School",
		source: "local-studies"
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
		description: "Weekly Saturday market. Seafood, produce, flowers, and local makers.",
		organizer: "Waterfront vendors",
		source: "local-studies",
		image: "/photos/reid-ave-market.jpg"
	},
	{
		id: "church-0830",
		title: "Community covered-dish lunch",
		category: "church",
		startsOn: "2026-08-30",
		startTime: "12:00 PM",
		location: "First Baptist Church fellowship hall",
		city: "Port St. Joe",
		description: "Open lunch after morning worship. Visitors welcome. Bring a dish if you can, come anyway if you cannot.",
		organizer: "First Baptist Church of Port St. Joe",
		source: "local-studies"
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
		description: "Guided beginner paddle on the bay. Bring water, sun protection, and a PFD. Wind check at 7:30 AM.",
		organizer: "Bay paddle coop",
		source: "local-studies"
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
		description: "Informal coffee hour for local business owners, civic groups, and anyone working on Gulf County projects.",
		organizer: "Gulf County Chamber of Commerce",
		source: "local-studies"
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
		description: "Shops stay open late, local bands, and a stroll through historic downtown. A good night to bring visitors.",
		organizer: "Downtown merchants",
		source: "local-studies",
		featured: true,
		image: "/photos/reid-ave-storefronts.jpg"
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
		description: "Labor Day weekend at Beacon Hill. Live music, arts vendors, and the county's signature scallop-season gathering. Confirm hours on Visit Gulf before you drive.",
		organizer: "Gulf County TDC and local organizers",
		source: "local-studies",
		featured: true,
		image: "/photos/reid-ave-north.jpg"
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
		description: "Bags and gloves provided. Stay off marked turtle nests and dunes. Families welcome.",
		organizer: "Keep Gulf County Wild volunteers",
		source: "local-studies"
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
		description: "Docent-led walk of the relocated lighthouse, keepers' houses, and bay overlook. Check the lighthouse site for climb days.",
		organizer: "St. Joseph Historical Society",
		source: "local-studies"
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
		description: "Rods on loan, bait provided, and a short lesson on bay etiquette and licenses. Ages 6 to 14 with an adult.",
		organizer: "Gulf County 4-H and marine volunteers",
		source: "local-studies"
	},
	{
		id: "wellness-0920",
		title: "Community health and wellness morning",
		category: "wellness",
		startsOn: "2026-09-20",
		startTime: "9:00 AM",
		location: "New Horizon Primary Care",
		city: "Port St. Joe",
		description: "Blood pressure checks, walking maps, and a short talk on heat safety during late summer. Open to the public.",
		organizer: "New Horizon Primary Care",
		source: "local-studies"
	},
	{
		id: "wewa-0926",
		title: "Dead Lakes paddle and picnic",
		category: "outdoor",
		startsOn: "2026-09-26",
		startTime: "9:00 AM",
		location: "Dead Lakes Recreation Area",
		city: "Wewahitchka",
		description: "North-county day on the lakes. Bring your own boat or kayak. Picnic after at the recreation area.",
		organizer: "Wewahitchka civic group",
		source: "local-studies"
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
		image: "/photos/reid-ave-market.jpg"
	},
	{
		id: "bay-talk-1003",
		title: "St. Joseph Bay aquatic preserve talk",
		category: "conservation",
		startsOn: "2026-10-03",
		startTime: "6:00 PM",
		location: "Port St. Joe Centennial Building",
		city: "Port St. Joe",
		description: "Water quality, seagrass, and scallop habitat. A public briefing for residents who want the science behind the bay.",
		organizer: "St. Joseph Bay Aquatic Preserve",
		source: "local-studies"
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
		description: "Eighth annual two-day roots, blues, soul, and funk festival on the bay. Check forgottenmusicfestival.com for the artist lineup and gates.",
		organizer: "Forgotten Music Festival",
		source: "local-studies",
		featured: true,
		image: "/photos/reid-ave-north.jpg"
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
		description: "Games, local food, a small vendors row, and live music. Built for kids and grandparents on the same blanket.",
		organizer: "City of Port St. Joe parks",
		source: "local-studies",
		featured: true,
		image: "/photos/reid-ave-storefronts.jpg"
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
		source: "local-studies"
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
		description: "Fried fish, hush puppies, and a freewill offering that supports local outreach. Everyone is invited.",
		organizer: "St. Joseph Catholic Church",
		source: "local-studies"
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
		description: "Merchants hand out candy along downtown. Come in costume. Stay on the sidewalks and watch for evening traffic.",
		organizer: "Downtown merchants",
		source: "local-studies",
		featured: true
	}
];
function mergeEvents(community, seed = SEEDED_EVENTS) {
	const seen = new Set(seed.map((e) => e.id));
	const extra = community.filter((e) => !seen.has(e.id));
	return [...seed, ...extra].sort((a, b) => a.startsOn === b.startsOn ? (a.startTime ?? "").localeCompare(b.startTime ?? "") : a.startsOn.localeCompare(b.startsOn));
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-semibold tracking-[0.08em] uppercase transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest", {
	variants: {
		variant: {
			primary: "bg-forest text-cream hover:bg-pine",
			inverse: "bg-cream-soft text-forest hover:bg-sand",
			outline: "border-2 border-forest text-forest bg-transparent hover:bg-foam",
			ghost: "text-forest hover:bg-foam",
			photo: "bg-forest text-cream hover:bg-forest-deep rounded-full",
			photoOutline: "border-2 border-cream text-navy bg-paper hover:bg-cream rounded-full",
			dark: "bg-navy text-cream hover:bg-navy-mid",
			sponsor: "border border-navy/20 text-navy bg-paper hover:bg-foam rounded-full"
		},
		size: {
			sm: "h-10 px-4 text-xs rounded-sm",
			md: "h-11 px-5 text-xs rounded-sm",
			lg: "h-12 px-6 text-sm rounded-md",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var EXPLORE = [
	{
		href: "/calendar",
		label: "Community calendar"
	},
	{
		href: "/business",
		label: "Business directory"
	},
	{
		href: "/map",
		label: "County map"
	},
	{
		href: "/advertise",
		label: "Become a sponsor"
	}
];
var DATA = [
	{
		href: "/trackers/economy",
		label: "Visitor economy"
	},
	{
		href: "/trackers/population",
		label: "Population"
	},
	{
		href: "/trackers/housing",
		label: "Housing"
	},
	{
		href: "/trackers/civic",
		label: "Civic projects"
	},
	{
		href: "/trackers/education",
		label: "Education"
	},
	{
		href: "/trackers",
		label: "All trackers"
	}
];
var TRACKER_LINKS = [
	{
		href: "/trackers/turtles",
		label: "Sea turtles"
	},
	{
		href: "/trackers/fishing",
		label: "Fishing and scallops"
	},
	{
		href: "/trackers/beach",
		label: "Beach flags"
	},
	{
		href: "/trackers/weather",
		label: "Marine weather"
	},
	{
		href: "/trackers",
		label: "All trackers"
	}
];
var LEARN = [
	{
		href: "/learn",
		label: "Learn hub"
	},
	{
		href: "/learn#kids",
		label: "For kids"
	},
	{
		href: "/trackers/turtles",
		label: "Sea turtles"
	},
	{
		href: "/about",
		label: "About Local Studies"
	}
];
function Logo({ compact }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "relative z-20 flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/logo.png",
			alt: "Local Studies",
			width: compact ? 56 : 92,
			height: compact ? 50 : 82,
			className: cn("object-contain drop-shadow-md", compact ? "h-12 w-12 md:h-14 md:w-14" : "h-[5rem] w-[5rem] md:h-[5.6rem] md:w-[5.6rem] md:-mb-5")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "hidden min-w-0 sm:flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg font-semibold uppercase tracking-wide text-navy md:text-xl",
				children: "Local Studies"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-navy/60",
				children: "Gulf County, FL"
			})]
		})]
	});
}
function DropLink({ to, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: to,
		onClick,
		className: "block rounded-sm px-3 py-2 text-sm text-ink hover:bg-foam",
		children: label
	});
}
function IconNavItem({ href, label, icon: Icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href,
			className: "flex min-w-14 flex-col items-center gap-1 rounded-lg px-2 py-1.5 text-navy hover:bg-foam",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-4",
				strokeWidth: 1.75
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-semibold uppercase tracking-[0.12em]",
				children: label
			})]
		}), children ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "invisible absolute left-1/2 top-full z-40 w-56 -translate-x-1/2 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-lg border border-line bg-paper p-2 shadow-lift",
				children
			})
		}) : null]
	});
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const home = pathname === "/";
	const [open, setOpen] = (0, import_react.useState)(false);
	const [searchOpen, setSearchOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		setOpen(false);
		setSearchOpen(false);
	}, [pathname]);
	const results = (0, import_react.useMemo)(() => {
		const query = q.trim().toLowerCase();
		if (query.length < 2) return [];
		const hits = [];
		for (const e of SEEDED_EVENTS) if (`${e.title} ${e.location} ${e.city}`.toLowerCase().includes(query)) hits.push({
			href: "/calendar",
			title: e.title,
			kind: "Event"
		});
		for (const b of BUSINESSES) if (`${b.name} ${b.category} ${b.city}`.toLowerCase().includes(query)) hits.push({
			href: "/business",
			title: b.name,
			kind: b.category
		});
		for (const t of TRACKERS) if (`${t.title} ${t.dek}`.toLowerCase().includes(query)) hits.push({
			href: `/trackers/${t.id}`,
			title: t.title,
			kind: "Tracker"
		});
		return hits.slice(0, 8);
	}, [q]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("relative z-50 bg-paper", home ? "overflow-visible" : "border-b border-line"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-[1320px] items-center gap-3 px-4 py-2.5 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { compact: !home }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Primary",
						className: "hidden flex-1 justify-center lg:flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end px-1 py-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconNavItem, {
									href: "/map",
									label: "Map",
									icon: MapPin
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconNavItem, {
									href: "/business",
									label: "Explore",
									icon: Compass,
									children: EXPLORE.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropLink, {
										to: i.href,
										label: i.label
									}, i.href))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconNavItem, {
									href: "/trackers/economy",
									label: "Data",
									icon: ChartColumn,
									children: DATA.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropLink, {
										to: i.href,
										label: i.label
									}, i.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconNavItem, {
									href: "/trackers",
									label: "Trackers",
									icon: Target,
									children: TRACKER_LINKS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropLink, {
										to: i.href,
										label: i.label
									}, i.href))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconNavItem, {
									href: "/calendar",
									label: "Events",
									icon: CalendarDays
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconNavItem, {
									href: "/learn",
									label: "Learn",
									icon: BookOpen,
									children: LEARN.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropLink, {
										to: i.href,
										label: i.label
									}, i.label))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconNavItem, {
									href: "/about",
									label: "About",
									icon: Users
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": "Search",
								onClick: () => setSearchOpen(true),
								className: "inline-flex size-11 items-center justify-center rounded-md bg-navy text-cream hover:bg-navy-mid",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/advertise",
								className: cn(buttonVariants({
									variant: "sponsor",
									size: "md"
								}), "hidden h-11 md:inline-flex"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handshake, { className: "size-4" }), "Sponsor / Advertise"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-md border border-line text-navy lg:hidden",
								"aria-label": open ? "Close menu" : "Open menu",
								onClick: () => setOpen((v) => !v),
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})
						]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-line bg-paper px-4 py-4 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1",
					children: [
						[
							["/map", "Map"],
							["/calendar", "Events"],
							["/trackers", "Trackers"],
							["/business", "Businesses"],
							["/learn", "Learn"],
							["/about", "About"],
							["/advertise", "Sponsor / Advertise"]
						].map(([href, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href,
							className: "rounded-sm px-3 py-3 font-semibold text-navy",
							children: label
						}, href)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 pt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted",
							children: "Explore"
						}),
						EXPLORE.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: i.href,
							className: "rounded-sm px-3 py-2 text-ink",
							children: i.label
						}, i.href)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 pt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted",
							children: "Data"
						}),
						DATA.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: i.href,
							className: "rounded-sm px-3 py-2 text-ink",
							children: i.label
						}, i.label))
					]
				})
			}) : null,
			searchOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-[60] bg-navy/40 p-4",
				onClick: () => setSearchOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-16 max-w-lg rounded-xl border border-line bg-paper p-4 shadow-lift",
					onClick: (e) => e.stopPropagation(),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[11px] font-bold uppercase tracking-[0.16em] text-muted",
							htmlFor: "site-search",
							children: "Search Gulf County"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "site-search",
							autoFocus: true,
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Events, businesses, trackers",
							className: "mt-2 h-12 w-full rounded-md border border-line bg-cream px-3 text-base text-ink outline-none focus:border-forest"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 divide-y divide-line",
							children: [results.length === 0 && q.trim().length >= 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "py-3 text-sm text-muted",
								children: "No matches. Try calendar, turtles, or marina."
							}) : null, results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: r.href,
								onClick: () => setSearchOpen(false),
								className: "flex items-center justify-between gap-3 py-3 text-sm hover:text-forest",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: r.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] uppercase tracking-wider text-muted",
									children: r.kind
								})]
							}) }, r.title + r.kind))]
						})
					]
				})
			}) : null
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-auto bg-navy-deep text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid w-full max-w-[1320px] gap-10 px-4 py-12 md:grid-cols-4 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-semibold uppercase tracking-wide",
						children: "Local Studies"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-md text-sm leading-relaxed text-cream/75",
						children: "Discover. Support. Grow Local. Community data, a shared calendar, live trackers, and a business directory for Gulf County, Florida."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-bold uppercase tracking-[0.16em] text-cream/55",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 grid gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/calendar",
							className: "hover:text-sand",
							children: "Calendar"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/trackers",
							className: "hover:text-sand",
							children: "Trackers"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/business",
							className: "hover:text-sand",
							children: "Businesses"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/map",
							className: "hover:text-sand",
							children: "Map"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-bold uppercase tracking-[0.16em] text-cream/55",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 grid gap-2 text-sm text-cream/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "info@localstudies.org" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "localstudies.org" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Port St. Joe, FL 32456" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/advertise",
							className: "hover:text-sand",
							children: "Advertise"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-cream/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex w-full max-w-[1320px] flex-col gap-2 px-4 py-5 text-xs text-cream/55 md:flex-row md:justify-between md:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Local Studies. A Gulf County civic resource. Not an official government website."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Census, FWC, and TDC figures cited on tracker pages." })]
			})
		})]
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col overflow-x-hidden bg-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "skip-link",
				children: "Skip to main content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "main",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "bottom-right",
				richColors: true
			})
		]
	});
}
function PageIntro({ kicker, title, dek }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-[1240px] px-4 pb-8 pt-8 md:px-6 md:pt-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] font-bold uppercase tracking-[0.22em] text-moss",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 max-w-3xl text-3xl font-bold tracking-tight text-ink md:text-5xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
				children: dek
			})
		]
	});
}
function CtaLink({ to, children, variant = "primary" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: to,
		className: buttonVariants({
			variant,
			size: "lg"
		}),
		children
	});
}
//#endregion
export { FL_CHAMBER as a, VISIT_GULF as c, CtaLink as i, cn as l, BUSINESS_CATEGORIES as n, PageIntro as o, Button as r, SiteShell as s, BUSINESSES as t, mergeEvents as u };
