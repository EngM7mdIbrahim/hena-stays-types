import { Extendable } from "../genericTypes";
import { Location } from "./Location";
import { Media } from "./media";
import { User } from "./User";
import { BaseEntity } from "./BaseEntity";

export interface Post extends BaseEntity {
  description: string;
  location: Location;
  media: Media[];
  user: Extendable<User>;
  likes: number;
  saves: number;
  comments: number;
}
