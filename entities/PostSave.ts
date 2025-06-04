import { Extendable } from "../genericTypes";
import { Post } from "./Post";
import { User } from "./User";
import { BaseEntity } from "./BaseEntity";

export interface PostSave extends BaseEntity {
  post: Extendable<Post>;
  user: Extendable<User>;
  isSavedByMe?: boolean;
}
