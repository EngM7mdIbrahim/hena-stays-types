import { Interactions } from "../../entities";

export type CreateInteractionsRequest = Omit<Interactions, "_id" | "createdAt">;

export type CreateInteractionsResponse = {
  interaction: Interactions;
};
