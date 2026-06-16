export const LeadStatus = {
  NEW: "NEW",
  CONTACTED: "CONTACTED",
  QUALIFIED: "QUALIFIED",
  VIBE_CHECK_SENT: "VIBE_CHECK_SENT",
  CONFIRMED: "CONFIRMED",
  NOT_A_FIT: "NOT_A_FIT",
} as const;

export type LeadStatus = (typeof LeadStatus)[keyof typeof LeadStatus];

export const LEAD_STATUS_LABELS: Record<LeadStatus, string> = {
  NEW: "New",
  CONTACTED: "Contacted",
  QUALIFIED: "Qualified",
  VIBE_CHECK_SENT: "Vibe Check Sent",
  CONFIRMED: "Confirmed",
  NOT_A_FIT: "Not a Fit",
};

export const VALID_TRANSITIONS: Record<LeadStatus, LeadStatus[]> = {
  NEW: ["CONTACTED", "NOT_A_FIT"],
  CONTACTED: ["QUALIFIED", "NOT_A_FIT"],
  QUALIFIED: ["VIBE_CHECK_SENT", "NOT_A_FIT"],
  VIBE_CHECK_SENT: ["CONFIRMED", "NOT_A_FIT"],
  CONFIRMED: [],
  NOT_A_FIT: [],
};