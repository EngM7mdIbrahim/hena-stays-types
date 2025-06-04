import { CreditsRequest } from "../../entities";

export type CreateCreditRequestsBody = Pick<
  CreditsRequest,
  "credits" | "media"
>;

export type CreateCreditResponse = {
  creditsRequest: CreditsRequest;
};
