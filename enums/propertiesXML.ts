export const PropertyXMLStatus = {
  Pending: "Pending",
  Approved: "Approved",
  Rejected: "Rejected",
  PendingApproval: "Pending Approval",
};

export type PropertyXMLStatusType =
  (typeof PropertyXMLStatus)[keyof typeof PropertyXMLStatus];

export const PropertyValidatorModes = {
  Admin: "Admin",
  User: "User",
};

export type PropertyValidatorModesType =
  (typeof PropertyValidatorModes)[keyof typeof PropertyValidatorModes];
