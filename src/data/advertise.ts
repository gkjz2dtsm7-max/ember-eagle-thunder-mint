export const AD_PACKAGES = [
  {
    id: "premier",
    name: "Premier Partner",
    price: "$1,250 / mo",
    badge: "Best value",
    items: [
      "Premier banner (website)",
      "Top banner (app)",
      "Sponsor card (app)",
      "Featured sponsor box (website)",
      "Business spotlight (monthly)",
      "Social media feature (monthly)",
    ],
  },
  {
    id: "growth",
    name: "Growth Partner",
    price: "$750 / mo",
    items: [
      "Website banner ad",
      "App top banner ad",
      "Sponsor card (app)",
      "Business spotlight (quarterly)",
    ],
  },
  {
    id: "community",
    name: "Community Partner",
    price: "$450 / mo",
    items: [
      "Website rectangle ad",
      "Sponsor card (app)",
    ],
  },
  {
    id: "local",
    name: "Local Supporter",
    price: "$200 / mo",
    items: ["Sponsor card (app only)"],
  },
] as const;

export const AD_IMPACT = [
  { label: "Annual visitors", value: "25K+" },
  { label: "App downloads, year 1", value: "10K+" },
  { label: "Avg. engagement time", value: "3 to 5 min" },
  { label: "More local visibility", value: "2.5x" },
];
