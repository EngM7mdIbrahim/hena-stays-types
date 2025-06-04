import { NotificationTypes } from "../enums";
import {
  Comment,
  Follow,
  Like,
  Message,
  Property,
  Project,
  RequestBuyProperty,
  RequestSellProperty,
} from "../entities";
import { NotExtended } from "../genericTypes";

export interface NotificationToPayloadMap {
  [NotificationTypes.Follow]: NotExtended<
    Pick<Follow, "follower" | "following">
  >;
  [NotificationTypes.Like]: NotExtended<
    Pick<Like, "user"> & Partial<Pick<Like, "post" | "comment">>
  >;
  [NotificationTypes.Comment]: NotExtended<
    Pick<Comment, "_id" | "user" | "post">
  >;
  [NotificationTypes.SellPropertyRequest]: NotExtended<
    Pick<RequestSellProperty, "_id" | "createdBy">
  >;
  [NotificationTypes.BuyPropertyRequest]: NotExtended<
    Pick<RequestBuyProperty, "_id" | "createdBy">
  >;
  [NotificationTypes.Message]: NotExtended<
    Pick<Message, "_id" | "sender" | "chat">
  >;
  [NotificationTypes.Property]: NotExtended<
    Pick<Property, "_id" | "createdBy">
  >;
  [NotificationTypes.Project]: NotExtended<Pick<Project, "_id" | "owner">>;
  [NotificationTypes.Other]: Record<string, string>;
}
