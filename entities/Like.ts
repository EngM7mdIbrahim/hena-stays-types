import { Extendable, Nullable } from "../genericTypes";
import { Comment } from "./Comment";
import { Post } from "./Post";
import { User } from "./User";
import { BaseEntity } from "./BaseEntity";

export interface Like extends BaseEntity {
  user: Extendable<User>;
  post: Nullable<Extendable<Post>>;
  comment: Nullable<Extendable<Comment>>;
}
