import { MediaType } from "../../entities";

export type UploadImageResponse = {
  error?: string;
  url?: string;
  type?: MediaType;
};

export type UploadImageBody = FormData;
