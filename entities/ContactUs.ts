import { BaseEntity } from "./BaseEntity";

export interface ContactUs extends BaseEntity {
  name: string;
  email: string;
  subject: string;
  message: string;
}
