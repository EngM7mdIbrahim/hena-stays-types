import { PaginationQuery, PaginationResponse } from "../common";
import { ContactUs } from "../../entities";

export type FindAllContactUsRequestQuery = PaginationQuery<ContactUs>;

export type FindAllContactUsResponse = PaginationResponse<ContactUs>;
