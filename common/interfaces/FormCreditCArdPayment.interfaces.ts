export interface FormCreditCArdPaymentProps {
  data: Data;
}
export interface Data {
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
  createdAt: string;
  updatedAt: string;
  parcelas: Parcela[];
}

export interface Parcela {
  installment: number;
  amount: number;
}
