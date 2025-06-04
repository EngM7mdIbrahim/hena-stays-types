import { Media, Message } from "../../entities";
export type UpdateMessageRequestParams = {
  id: String;
};
export type UpdateMessageRequestBody = Pick<Message, "media"> & {
  message: string;
};
export type UpdateMessageResponse = {
  message: Message;
};
