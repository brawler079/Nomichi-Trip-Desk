export const TripStatus = {
  OPEN: "OPEN",
  CLOSED: "CLOSED",
} as const;

export type TripStatus = (typeof TripStatus)[keyof typeof TripStatus];

export const TRIP_STATUS_LABELS: Record<TripStatus, string> = {
  OPEN: "Open",
  CLOSED: "Closed",
};
