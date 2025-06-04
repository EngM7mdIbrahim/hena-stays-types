import { Extendable } from "../genericTypes";
import { BaseEntity } from "./BaseEntity";
import { Media } from "./media";
import { User } from "./User";

export interface Blog extends BaseEntity {
  title: string;
  description: string;
  content: string;
  media: Media[];
  tableOfContents: string;
  user: Extendable<User>;
}
