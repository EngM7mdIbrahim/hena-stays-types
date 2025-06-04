import { ChatTypes } from "../enums/chat";
import { Extendable, Nullable } from "../genericTypes";
import { Message } from "./Message";
import { User } from "./User";

export type ChatType = (typeof ChatTypes)[keyof typeof ChatTypes];

export interface Chat {
  _id: string;
  users: Extendable<User>[];
  type: ChatType;
  //TODO: Property field
  createdAt: Date;
  //This is a virtual field
  lastMessage?: Nullable<Extendable<Message>>;
}
