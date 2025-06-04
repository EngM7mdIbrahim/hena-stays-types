import { Chat } from "../../entities";

export type FindChatByIdRequestParams = {
  id: string;
};

export type FindChatByIdResponse = {
  chat: Chat;
};
