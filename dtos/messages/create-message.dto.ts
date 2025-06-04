import { Message } from "../../entities";

export type CreateMessageRequest = Pick<Message, "text" | "media"> & {
  chatId: string;
};

export type SendSupportMessageRequest = Pick<Message, "text" | "media">;
export type SendSupportMessageResponse = {
  message: Message;
};

export type ReplySupportRequest = Pick<Message, "text" | "media" | "chat">;
export type ReplySupportResponse = {
  message: Message;
};
export interface CreateMessageResponse {
  message: Message;
}
