export const NotificationTypes = {
  Message: "Message",
  Property: "Property",
  Project: "Project",
  Follow: "Follow",
  Like: "Like",
  Comment: "Comment",
  SellPropertyRequest: "Sell Property Request",
  BuyPropertyRequest: "Buy Property Request",
  Other: "Other",
} as const;

export type NotificationType =
  (typeof NotificationTypes)[keyof typeof NotificationTypes];

export const NotificationTitles = {
  SellProperty: "New Sell Property Request",
  BuyProperty: "New Buy Property Request",
  Comment: "New Comment",
  Like: "New Like",
  Follow: "New Follow",
  other: "New Notification",
  Message: "New Message",
} as const;
