import { Message } from "../../entities";

export type DeleteMessageByIdRequestParams = {
  id: string;
};

export type DeleteMessageByIdResponse = {
  message: Message;
};
