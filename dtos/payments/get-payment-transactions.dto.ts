import { PaymentTransaction } from "../../entities";
import { PaymentStatusValues } from "../../enums";
export type PaymentStatus =
  (typeof PaymentStatusValues)[keyof typeof PaymentStatusValues];

export type GetPaymentTransactionsRequestQuery = {
  limit: number;
  userId: string;
  status: PaymentStatus;
  starting_after: string;
  ending_before: string;
};

export type GetPaymentTransactionsResponseBody = {
  transactions: PaymentTransaction[];
  hasNext: boolean;
};
