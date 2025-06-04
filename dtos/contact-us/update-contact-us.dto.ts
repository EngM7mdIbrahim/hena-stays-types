import { ContactUs } from "../../entities";
import { IdParamsQuery } from "../common";
export type UpdateContactUsRequestBody = Partial<ContactUs>;
export type UpdateContactUsRequestParams = IdParamsQuery;
export type UpdateContactUsResponse = {
  contactUs: ContactUs;
};
