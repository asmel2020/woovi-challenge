import React from "react";

import { PropsPage } from "@/common/interfaces/PropsPage";
import { get } from "@/common/request";
import { GetPayments } from "@/common/interfaces/getPayment.interfaces";
import { redirect } from "next/navigation";
import { FooterPayment } from "@/components/FooterPayment";
import { FormCreditCardPayment } from "@/components/FormCreditCardPayment";

interface Props extends Omit<PropsPage, "searchParams"> {
  searchParams: { paymentId: string; parcela: string };
}
export default async function Page({
  searchParams: { parcela, paymentId },
}: Props) {
  const fetchData = async (paymentId: string) => {
    try {
      const { result }: GetPayments = await get({
        url: `/api/payment/${paymentId}`,
      });

      let parcelas = [];

      for (let index = 0; index < result.creditCardInstallment; index++) {
        parcelas.push({
          installment: index + 1,
          amount:
            result.payInstallment * (result.creditCardInstallment - index),
        });
      }

      return { ...result, parcelas };
    } catch (error) {
      console.log("payment-credicard", error);
    }

    redirect("/");
  };

  const data = await fetchData(paymentId);

  if (!data.isPaymentPix)
    redirect(`/payment/paymentpix?paymentId=${paymentId}`);

  if (data.isPaymentCredicard) redirect(`/`);

  return (
    <main className="flex flex-col max-w-[464px]    w-full pl-4 pr-5 gap-8">
      <section className="m-auto text-center">
        <h2 className="text-2xl font-bold"> João, pague o restante em {data.creditCardInstallment}x no</h2>
        <h2 className="text-2xl font-bold">cartão</h2>
      </section>
      <FormCreditCardPayment data={data as any} />
      <FooterPayment data={data} />
    </main>
  );
}
