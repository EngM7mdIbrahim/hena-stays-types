import { User } from "../../entities/User";
export type UpdateUserRequestBody = Pick<
  User,
  "name" | "phone" | "whatsapp" | "image" | "watermark"
> & {
  password: string;
};

export type UpdateUserResponse = {
  user: User;
};
