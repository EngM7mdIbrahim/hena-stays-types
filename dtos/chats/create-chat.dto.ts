import { Chat, ChatType } from "../../entities";

export type CreateChatRequestBody = {
  user?: string; // User ID of the user to chat with
  type: ChatType;
};

export interface CreateChatResponse {
  chat: Chat;
}
