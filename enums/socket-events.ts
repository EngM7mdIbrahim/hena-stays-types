export const SOCKET_EVENTS = {
  // Connection events
  CONNECT: "connect",
  DISCONNECT: "disconnect",
  CONNECT_ERROR: "connect_error",

  // Chat room events
  JOIN_CHAT: "join-chat",
  LEAVE_CHAT: "leave-chat",

  // Message status events
  DELETE_MESSAGE: "delete-message",

  // User status events
  USER_ONLINE: "user-online",
  USER_OFFLINE: "user-offline",
  USER_TYPING: "user-typing",
  USER_STOP_TYPING: "user-stop-typing",

  // Chat events
  NEW_MESSAGE: "new-message",

  //Error
  ERROR: "Error",
} as const;
