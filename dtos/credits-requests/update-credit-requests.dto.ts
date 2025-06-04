import { CreditsRequest } from "../../entities";
import { CreditRequestStatusType } from "../../enums";
import { IdParamsQuery } from "../common";

export type UpdateCreditRequestsParam = IdParamsQuery;

export type UpdateCreditRequestsBody = {
  status: CreditRequestStatusType;
  message?: string;
};

export type UpdateCreditRequestsResponse = {
  creditsRequest: CreditsRequest;
};
