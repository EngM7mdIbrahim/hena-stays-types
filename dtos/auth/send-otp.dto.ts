import { User } from "../../entities";
import { MessageResponse } from "../common";

export type SendOTPRequest = Pick<User, "email">;

export type SendOTPResponse = MessageResponse;
