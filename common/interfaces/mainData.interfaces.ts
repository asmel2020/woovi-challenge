export interface MainData {
  result: Result;
}

export interface Result {
  paymentPending: Payment[];
  paymentComplete: Payment[];
}

export interface Payment {
  id: string;
  amount: number;
  amountInstallment: number;
  payInstallment: number;
  cashback: number;
  name: string;
  totalInstallment: number;
  creditCardInstallment: number;
  installmentPix: number;
  isPaymentPix: boolean;
  isPaymentCredicard: boolean;
  statusPayment: boolean;
}
