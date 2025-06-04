import { MessageResponse } from "../common";

export type ResetPasswordRequest = {
  password: string;
  token: string;
  confirmPassword: string;
};

export type ResetPasswordResponse = MessageResponse;
