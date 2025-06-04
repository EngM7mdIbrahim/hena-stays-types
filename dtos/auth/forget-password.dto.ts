import { User } from "../../entities";
import { MessageResponse } from "../common";

export type ForgetPasswordRequest = Pick<User, "email">;

export type ForgetPasswordResponse = MessageResponse;
