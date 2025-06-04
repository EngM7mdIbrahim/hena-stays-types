export const LeadsStatusEnum = {
  Pending: "Pending",
  Approved: "Approved",
  Rejected: "Rejected",
} as const;

export type leadsStatusType =
  (typeof LeadsStatusEnum)[keyof typeof LeadsStatusEnum];

export const LeadsContactsTypesEnum = {
  email: "email",
  phone: "phone",
  whatsapp: "whatsapp",
  truedar: "truedar",
} as const;

export type leadsContactsType =
  (typeof LeadsContactsTypesEnum)[keyof typeof LeadsContactsTypesEnum];
