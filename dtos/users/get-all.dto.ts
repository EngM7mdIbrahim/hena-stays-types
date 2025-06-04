import { User, ProfileInteractions } from "../../entities/";
import { Nullable } from "../../genericTypes";
import { PaginationQuery, PaginationResponse } from "../common";

export type GetAllUsersResponse = PaginationResponse<
  User & {
    totalFollowers?: number;
    totalFollowing?: number;
    agents?: number;
    totalProperties?: number;
    conversionRate?: number;
    propertiesImpressions?: number;
    propertiesViews?: number;
    profileViews?: Nullable<ProfileInteractions>;
  }
>;

export type GetAllUsersRequestQuery = PaginationQuery<User>;
