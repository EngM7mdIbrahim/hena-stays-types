import { ContactUs } from "../../entities";
export type CreateContactUsRequest = Omit<ContactUs, "_id" | "createdAt">;

export type CreateContactUsResponse = {
  contactUs: ContactUs;
};
