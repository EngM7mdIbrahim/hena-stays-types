export const CreditRequestStatus = {
  Pending: "Pending",
  Accepted: "Accepted",
  Rejected: "Rejected",
};

export type CreditRequestStatusType =
  (typeof CreditRequestStatus)[keyof typeof CreditRequestStatus];
