"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useMemo, useState } from "react";

import type { ClaimStatus, SustainabilityClaim } from "@/lib/models";
import { claims as initialClaims } from "@/lib/mockData";

const ClaimsContext = createContext<ClaimsContextValue | null>(null);

type ClaimsContextValue = {
  claims: SustainabilityClaim[];
  submitClaim: (claimId: string) => void;
  verifyClaim: (claimId: string) => void;
  rejectClaim: (claimId: string) => void;
};

type ClaimsProviderProps = {
  children: ReactNode;
};

const todayIsoDate = () => new Date().toISOString().slice(0, 10);

export function ClaimsProvider({ children }: ClaimsProviderProps) {
  const [claims, setClaims] = useState<SustainabilityClaim[]>(initialClaims);

  const submitClaim = (claimId: string) => {
    setClaims((prevClaims) =>
      prevClaims.map((claim) =>
        claim.id === claimId && claim.status === "DRAFT"
          ? {
              ...claim,
              status: "SUBMITTED",
              updatedAt: todayIsoDate(),
            }
          : claim
      )
    );
  };

  const verifyClaim = (claimId: string) => {
    setClaims((prevClaims) =>
      prevClaims.map((claim) =>
        claim.id === claimId && claim.status === "SUBMITTED"
          ? {
              ...claim,
              status: "VERIFIED",
              updatedAt: todayIsoDate(),
            }
          : claim
      )
    );
  };

  const rejectClaim = (claimId: string) => {
    setClaims((prevClaims) =>
      prevClaims.map((claim) =>
        claim.id === claimId && claim.status === "SUBMITTED"
          ? {
              ...claim,
              status: "REJECTED",
              updatedAt: todayIsoDate(),
            }
          : claim
      )
    );
  };

  const value = useMemo(
    () => ({ claims, submitClaim, verifyClaim, rejectClaim }),
    [claims]
  );

  return (
    <ClaimsContext.Provider value={value}>{children}</ClaimsContext.Provider>
  );
}

export const useClaims = () => {
  const context = useContext(ClaimsContext);

  if (!context) {
    throw new Error("useClaims must be used within ClaimsProvider");
  }

  return context;
};
