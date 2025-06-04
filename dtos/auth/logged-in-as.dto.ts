import { User } from "../../entities/User";

export type LoginAsRequest = {
  userId: string;
};
export type LoginAsResponse = {
  token: string;
  user: User;
};
