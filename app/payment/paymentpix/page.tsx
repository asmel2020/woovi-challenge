import React from "react";

import { PropsPage } from "@/common/interfaces/PropsPage";
import { get } from "@/common/request";
import { GetPayments } from "@/common/interfaces/getPayment.interfaces";
import { redirect } from "next/navigation";
import { parserMoney } from "@/common/utils/parserMoney";
import { PixQrColePege } from "@/components/PixQrColePege";
import { FooterPayment } from "@/components/FooterPayment";

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
      return result;
    } catch (error) {
      console.log("paymentpix", error);
    }

    redirect("/");
  };

  const data = await fetchData(paymentId);

  if (data.isPaymentPix && data.totalInstallment === 1) redirect("/");
  if (data.isPaymentPix && data.totalInstallment > 1)
    redirect(`/payment/payment-credicard?paymentId=${paymentId}`);
  return (
    <main className="flex flex-col max-w-[464px]    w-full pl-4 pr-5 gap-8">
      <section className="m-auto text-center">
        <h2 className="text-2xl font-bold"> João, pague a entrada de</h2>
        <h2 className="text-2xl font-bold">
          R${" "}
          {data.totalInstallment === 1
            ? parserMoney(data.amount)
            : parserMoney(data.payInstallment)}{" "}
          pelo Pix
        </h2>
      </section>

      <PixQrColePege id={data.id} />
      <FooterPayment data={data} />
    </main>
  );
}
