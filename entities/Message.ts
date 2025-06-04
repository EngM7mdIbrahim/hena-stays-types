import { MessageStatusTypes } from "../enums/message";
import { Extendable, Nullable } from "../genericTypes";
import { Chat } from "./Chat";
import { Media } from "./media";
import { User } from "./User";
export type MessageStatus =
  (typeof MessageStatusTypes)[keyof typeof MessageStatusTypes];

export interface Message {
  _id: string;
  chat: Extendable<Chat>;
  sender: Extendable<User>;
  media: Nullable<Media[]>;
  text: string;
  createdAt: Date;
  readBy: Extendable<User>[];
}
