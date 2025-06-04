import { BaseEntity } from "./BaseEntity";
import { Extendable } from "../genericTypes";
import { Post } from "./Post";
import { User } from "./User";
export interface UserViewPosts extends BaseEntity {
  post: Extendable<Post>;
  user: Extendable<User>;
  views: number;
}
