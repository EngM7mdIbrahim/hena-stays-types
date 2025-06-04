export interface PaymentTransaction {
  id: string;
  currency: string;
  customerDetails: Record<string, any>;
  creditsCost: number;
  totalAmount: number;
  taxAmount?: number;
  status: string;
  paymentStatus: string;
  createdAt: Date;
  credits: number;
}
