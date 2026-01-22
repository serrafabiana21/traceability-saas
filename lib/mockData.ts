import { Restaurant, Supplier, SustainabilityClaim } from "./models";

export const restaurants: Restaurant[] = [
  {
    id: "resto-ember",
    name: "Ember & Grain",
    city: "Portland",
    country: "USA",
  },
  {
    id: "resto-marina",
    name: "Marina Table",
    city: "Lisbon",
    country: "Portugal",
  },
];

export const suppliers: Supplier[] = [
  {
    id: "supp-harvest",
    name: "Harvest Horizon Co-op",
    country: "USA",
    website: "https://harvest-horizon.example.com",
  },
  {
    id: "supp-atlantic",
    name: "Atlantic Blue Foods",
    country: "Portugal",
    website: "https://atlantic-blue.example.com",
  },
];

export const claims: SustainabilityClaim[] = [
  {
    id: "claim-olive-oil",
    restaurantId: "resto-marina",
    supplierId: "supp-atlantic",
    productName: "Atlantic Olive Oil",
    claimText: "Extra virgin olive oil sourced from regenerative farms.",
    status: "VERIFIED",
    createdAt: "2024-11-02",
    updatedAt: "2024-11-18",
    evidence: [
      {
        id: "evidence-olive-cert",
        type: "CERTIFICATION",
        title: "EU Organic Certification",
        issuedBy: "EU Organic Register",
        issuedAt: "2024-10-15",
      },
      {
        id: "evidence-olive-lab",
        type: "LAB_TEST",
        title: "Polyphenol Lab Analysis",
        issuedBy: "Lisbon Food Lab",
        issuedAt: "2024-10-28",
      },
    ],
  },
  {
    id: "claim-salmon",
    restaurantId: "resto-ember",
    supplierId: "supp-atlantic",
    productName: "North Atlantic Salmon",
    claimText: "Responsibly farmed salmon with low feed conversion ratio.",
    status: "SUBMITTED",
    createdAt: "2024-11-05",
    updatedAt: "2024-11-05",
    evidence: [
      {
        id: "evidence-salmon-audit",
        type: "AUDIT_REPORT",
        title: "Marine Stewardship Audit Summary",
        issuedBy: "Oceanic Verifiers",
        issuedAt: "2024-09-30",
      },
      {
        id: "evidence-salmon-photo",
        type: "PHOTO",
        title: "Net pen monitoring photos",
        notes: "Monthly photo log supplied by farm manager.",
      },
    ],
  },
  {
    id: "claim-mushroom",
    restaurantId: "resto-ember",
    supplierId: "supp-harvest",
    productName: "Forest Foraged Mushrooms",
    claimText: "Foraged within certified sustainable harvest zones.",
    status: "DRAFT",
    createdAt: "2024-11-20",
    updatedAt: "2024-11-21",
    evidence: [
      {
        id: "evidence-mushroom-visit",
        type: "FARM_VISIT",
        title: "Supplier field visit notes",
        issuedBy: "Ember & Grain Procurement",
        issuedAt: "2024-11-19",
        notes: "Visit verified harvest practices and GPS boundaries.",
      },
    ],
  },
];
