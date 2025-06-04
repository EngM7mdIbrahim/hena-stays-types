import { Broker, Company, User, UserRoleType } from "../../entities";
import { UserRole } from "../../enums";
import { Nullable } from "../../genericTypes";
// import {  } from "../";

export type CommonUserCreationFields = Pick<
  User,
  | "email"
  | "name"
  | "phone"
  | "username"
  | "whatsapp"
  | "image"
  | "status"
  | "watermark"
> & {
  password: string;
};
export type CreateAsAdminUserRequest = CommonUserCreationFields & {
  role: typeof UserRole.User;
};

export type CreateAsAdminBrokerRequest = CommonUserCreationFields & {
  role: typeof UserRole.Broker;
} & Pick<
    Broker,
    "city" | "licenseCopies" | "licenseExpiryDate" | "license" | "watermark"
  >;

export type CreateAsAdminCompanyRequest = CommonUserCreationFields & {
  role: typeof UserRole.Company;
  companyName: string;
} & Pick<
    Company,
    | "authority"
    | "city"
    | "jurisdiction"
    | "address"
    | "license"
    | "licenseCopies"
    | "licenseExpiryDate"
    | "watermark"
  >;

export type CreateAsAdminAnyUserRequest = CommonUserCreationFields & {
  role: UserRoleType;
  company?: string;
};

export type CreateAsAdminRequest =
  | CreateAsAdminUserRequest
  | CreateAsAdminBrokerRequest
  | CreateAsAdminCompanyRequest
  | CreateAsAdminAnyUserRequest;

export type CreateAsAdminResponse = {
  user: User;
};
