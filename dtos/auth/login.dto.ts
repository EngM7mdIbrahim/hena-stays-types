import { User } from "../../entities/User";
import { DeviceRegister } from "../common";

export type LoginRequest = Pick<User, "email"> & {
  password: string;
} & DeviceRegister;

export type LoginResponse = {
  token: string;
  user: User;
};
