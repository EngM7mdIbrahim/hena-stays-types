import { User } from "../../entities/User";
import { IdParamsQuery } from "../common";
export type UpdateAdminUserRequestBody = Pick<
  User,
  | "name"
  | "phone"
  | "whatsapp"
  | "role"
  | "image"
  | "watermark"
  | "email"
  | "status"
  | "username"
> & {
  password?: string;
};

export type UpdateAdminUserRequestParams = IdParamsQuery;

export type UpdateAdminUserResponse = {
  user: User;
};
