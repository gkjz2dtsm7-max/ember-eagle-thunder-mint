//#region node_modules/.nitro/vite/services/ssr/assets/taxonomy-D6hCXNBX.js
var CATEGORIES = [
	{
		id: "fitness",
		label: "Fitness and walking"
	},
	{
		id: "wellness",
		label: "Yoga and wellness"
	},
	{
		id: "music",
		label: "Live music"
	},
	{
		id: "markets",
		label: "Markets and vendors"
	},
	{
		id: "community",
		label: "Community gatherings"
	},
	{
		id: "outdoor",
		label: "Outdoor activities"
	},
	{
		id: "conservation",
		label: "Conservation and wildlife"
	},
	{
		id: "church",
		label: "Church and community"
	},
	{
		id: "family",
		label: "Family-friendly"
	},
	{
		id: "seasonal",
		label: "Seasonal happenings"
	}
];
var CITIES = [
	"Port St. Joe",
	"Cape San Blas",
	"Indian Pass",
	"Beacon Hill",
	"St. Joe Beach",
	"Wewahitchka",
	"Highland View",
	"Overstreet",
	"White City",
	"Gulf County"
];
function categoryLabel(id) {
	return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
//#endregion
export { CITIES as n, categoryLabel as r, CATEGORIES as t };
