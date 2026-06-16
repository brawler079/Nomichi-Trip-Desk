export const GroupType = {
  SOLO: "SOLO",
  COUPLE: "COUPLE",
  FRIENDS: "FRIENDS",
  FAMILY: "FAMILY",
} as const;

export type GroupType = (typeof GroupType)[keyof typeof GroupType];

export const GROUP_TYPE_LABELS: Record<GroupType, string> = {
  SOLO: "Solo",
  COUPLE: "Couple",
  FRIENDS: "With friends",
  FAMILY: "Family",
};