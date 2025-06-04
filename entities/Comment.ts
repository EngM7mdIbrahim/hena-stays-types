import { Extendable } from "../genericTypes";
import { BaseEntity } from "./BaseEntity";
import { Post } from "./Post";
import { User } from "./User";

export interface Comment extends BaseEntity {
  description: string;
  user: Extendable<User>;
  post: Extendable<Post>;
  likes: number;
}
