import { MediaTypes } from "../enums";

export type MediaType = (typeof MediaTypes)[keyof typeof MediaTypes];

export interface Media {
  type: MediaType;
  url: string;
}
