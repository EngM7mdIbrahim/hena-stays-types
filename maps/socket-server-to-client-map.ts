import { Message, User } from "../entities";
import { SOCKET_EVENTS } from "../enums";

export interface SocketServerToClientMap {
  // Messages
  [SOCKET_EVENTS.NEW_MESSAGE]: (data: { message: Message }) => void;
  [SOCKET_EVENTS.DELETE_MESSAGE]: (data: { messageId: string }) => void;
  // Chats

  // Users
  [SOCKET_EVENTS.USER_ONLINE]: (data: { user: User }) => void;
  [SOCKET_EVENTS.USER_OFFLINE]: (data: { user: User }) => void;
  [SOCKET_EVENTS.USER_TYPING]: (data: { user: User; chatId: string }) => void;
  [SOCKET_EVENTS.USER_STOP_TYPING]: (data: {
    user: User;
    chatId: string;
  }) => void;

  // Reserved
  [SOCKET_EVENTS.CONNECT_ERROR]: (error: Error) => void;
  [SOCKET_EVENTS.CONNECT]: () => void;
  [SOCKET_EVENTS.DISCONNECT]: () => void;
  [SOCKET_EVENTS.ERROR]: (error: Error) => void;
}
