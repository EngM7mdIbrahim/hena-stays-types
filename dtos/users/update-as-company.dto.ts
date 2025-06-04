import { User } from "../../entities/User";
import { IdParamsQuery } from "../common";
export type UpdateCompanyUserRequestBody = Pick<
  User,
  "name" | "phone" | "whatsapp" | "role" | "image" | "watermark"
> & {
  password?: string;
};

export type UpdateCompanyUserRequestParams = IdParamsQuery;

export type UpdateCompanyUserResponse = {
  user: User;
};
