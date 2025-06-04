import { BaseEntity } from "./BaseEntity";

export type RecommendationConfig = {
  price: number;
  noExpireDays: number;
};

export interface Config extends BaseEntity {
  propertyRecommendations: {
    hot: RecommendationConfig[];
    propertyOfWeek: RecommendationConfig[];
    signature: RecommendationConfig[];
  };
  creditsPrice: number;
}
