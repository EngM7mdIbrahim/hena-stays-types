import { User } from "../../entities/User";
import { UserRole } from "../../enums";

const allowedRoles = [UserRole.CompanyAdmin, UserRole.Agent];

export type CompanyUserRoleType =
  (typeof allowedRoles)[keyof typeof allowedRoles];

export type CreateCompanyUserRequest = Pick<
  User,
  "email" | "name" | "phone" | "username" | "whatsapp" | "role"
> & {
  password: string;
};

export type CreateCompanyUserResponse = {
  user: User;
};
