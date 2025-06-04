import { BaseEntity } from "./BaseEntity";

export interface News extends BaseEntity {
  title: string;
  subtitle: string;
  content: string;
  reference: string;
  author: string;
  image: string;
}
