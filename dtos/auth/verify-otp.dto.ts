import { User } from "../../entities";
import { DeviceRegister, MessageResponse } from "../common";

export type VerifyOTPRequest = Pick<User, "email"> & {
  otp: string;
} & DeviceRegister;

export type VerifyOTPResponse = MessageResponse & {
  token: string;
};
