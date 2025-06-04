import { ContactUs } from "../../entities";
import { IdParamsQuery } from "../common";

export type GetContactUsRequestParams = IdParamsQuery;

export type GetContactUsResponse = {
  contactUs: ContactUs;
};
