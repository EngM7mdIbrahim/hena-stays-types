import { ContactUs } from "../../entities";
import { IdParamsQuery } from "../common";

export type DeleteContactUsRequestParams = IdParamsQuery;

export type DeleteContactUsResponse = {
  contactUs: ContactUs;
};
