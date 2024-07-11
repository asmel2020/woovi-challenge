export type GetPayments = {
  result: Root;
};
export interface Root {
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
}

export interface GetPayment {
  nome?:string
  amount: number;
  valuePix: ValuePix;
}

export interface ValuePix {
  pixCashback: number;
  PixParcelado: PixParcelado[];
}

export interface PixParcelado {
  numberParcela: number;
  total: number;
  parcelaAmount: number;
}
