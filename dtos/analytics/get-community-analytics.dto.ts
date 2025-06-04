import { ProfileInteractions } from "../../entities";

export type GetCommunityAnalyticsResponse = {
  postsInteractions: {
    views: number;
    visitors: number;
    impressions: number;
    saves: number;
  };
  profileViews: ProfileInteractions;
};
