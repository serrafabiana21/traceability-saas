export interface Restaurant {
  id: string;
  name: string;
  city: string;
  country: string;
}

export interface Supplier {
  id: string;
  name: string;
  country: string;
  website?: string;
}

export type EvidenceType =
  | "CERTIFICATION"
  | "AUDIT_REPORT"
  | "LAB_TEST"
  | "FARM_VISIT"
  | "INVOICE"
  | "PHOTO"
  | "OTHER";

export interface Evidence {
  id: string;
  type: EvidenceType;
  title: string;
  url?: string;
  issuedBy?: string;
  issuedAt?: string;
  notes?: string;
}

export type ClaimStatus = "DRAFT" | "SUBMITTED" | "VERIFIED" | "REJECTED";

export interface SustainabilityClaim {
  id: string;
  restaurantId: string;
  supplierId: string;
  productName: string;
  claimText: string;
  status: ClaimStatus;
  createdAt: string;
  updatedAt: string;
  evidence: Evidence[];
}
