import { Like } from "../../entities";
import { XOR } from "../../genericTypes";
import { FindPostResponse } from "../posts";

/**
 * @typedef {Object} CreateLikeRequest
 * @property {string} [comment]
 * @property {string} [post]
 * @description XOR is a utility type that takes two types and makes them exclusive.
 */
export type CreateLikeRequest = XOR<Pick<Like, "comment">, Pick<Like, "post">>;

/**
 * @typedef {Object} CreateLikeResponse
 * @property {Like} like
 */
export type CreateLikeResponse = {
  like: Omit<Like, "post"> & {
    post?: FindPostResponse["post"];
  };
};
