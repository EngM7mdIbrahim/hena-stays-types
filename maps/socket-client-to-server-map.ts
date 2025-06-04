import { Message, User } from "../entities";
import { SOCKET_EVENTS } from "../enums";

export interface SocketClientToServerMap {
  // Chats
  [SOCKET_EVENTS.JOIN_CHAT]: (data: { chatId: string }) => void;
  [SOCKET_EVENTS.LEAVE_CHAT]: (data: { chatId: string }) => void;

  // Messages
  [SOCKET_EVENTS.NEW_MESSAGE]: (data: {
    message: Pick<Message, "text" | "media" | "chat">;
  }) => void;
  [SOCKET_EVENTS.DELETE_MESSAGE]: (data: { messageId: string }) => void;

  [SOCKET_EVENTS.USER_TYPING]: (data: { chatId: string }) => void;
  [SOCKET_EVENTS.USER_STOP_TYPING]: (data: { chatId: string }) => void;
}
