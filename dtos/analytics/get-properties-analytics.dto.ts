import {
  Interactions,
  InteractionsPropertiesAnalytics,
  PropertiesAnalytics,
  Property,
} from "../../entities";
export type GetPropertiesAnalyticsResponse = {
  propertiesAnalytics: PropertiesAnalytics;
  interactionsAnalytics: InteractionsPropertiesAnalytics;
  totalLeads: number;
  conversionRate: number;
  topPerformers: (Property & {
    interaction: Interactions;
  })[];
};
