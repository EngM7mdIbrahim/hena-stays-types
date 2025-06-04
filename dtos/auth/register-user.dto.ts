import { Broker, Company } from "../../entities";
import { User } from "../../entities/User";
import { Nullable } from "../../genericTypes";
import { UserRole } from "../../enums/user";

export type CommonUserFields = Pick<
  User,
  "email" | "name" | "phone" | "username" | "whatsapp"
> & {
  password: string;
};
export type RegisterUserRequest = CommonUserFields & {
  role: typeof UserRole.User;
};

export type RegisterBrokerRequest = CommonUserFields & {
  role: typeof UserRole.Broker;
} & Pick<
    Broker,
    "city" | "licenseCopies" | "licenseExpiryDate" | "license" | "watermark"
  >;

export type RegisterCompanyRequest = CommonUserFields & {
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

export type RegisterRequest =
  | RegisterUserRequest
  | RegisterBrokerRequest
  | RegisterCompanyRequest;

export type RegisterUserResponse = {
  user: User;
  company?: Nullable<Company>;
  broker?: Nullable<Broker>;
};
