export type GetUserAnalyticsResponse = {
  totalCount: number;
  roles: {
    _id: string;
    count: number;
  }[];
};
