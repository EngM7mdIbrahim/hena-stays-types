import { Follow } from "../../entities/Follow";

export type CreateFollowRequest = {
  following: string;
};

export type CreateFollowResponse = {
  follow: Follow;
};
