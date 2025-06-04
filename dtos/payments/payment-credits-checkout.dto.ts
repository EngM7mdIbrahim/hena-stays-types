export type PaymentCreditsCheckoutRequestBody = {
  credits: number;
  returnUrl: string;
};

export type PaymentCreditsCheckoutResponseBody = {
  url: string;
};
