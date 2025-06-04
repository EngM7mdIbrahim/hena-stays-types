import { Follow } from "../../entities";

export type DeleteFollowRequest = {
  following: string;
};

export type DeleteFollowResponse = {
  follow: Follow;
};
