import { Property } from "../../entities";
import { RecommendationTypeEnumType } from "../../enums";

export type BulkUpdateRecommendationsRequestBody = {
  propertyIds: string[];
  recommended: RecommendationTypeEnumType;
  recommendationNoExpireDays: number;
};

export type BulkUpdateRecommendationsResponse = {
  properties: Property[];
};
