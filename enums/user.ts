export const UserStatus = {
  Active: "Active",
  Pending: "Pending",
  Blocked: "Blocked",
} as const;

export const UserRole = {
  Broker: "Broker",
  Company: "Company",
  Admin: "Admin",
  CompanyAdmin: "CompanyAdmin",
  Agent: "Agent",
  User: "User",
  AdminViewer: "AdminViewer",
  Support: "Support",
} as const;
