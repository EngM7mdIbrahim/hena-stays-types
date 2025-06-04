import { Message } from "../../entities";

export type FindMessageByIdRequestParams = {
  id: String;
};
export type FindMessageByIdResponse = {
  message: Message;
};
