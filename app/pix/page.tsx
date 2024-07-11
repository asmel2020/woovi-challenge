import React from "react";
import { decode } from "js-base64";
import { PropsPage } from "@/common/interfaces/PropsPage";
import { FormSelectPayment } from "@/components/FormSelectPayment";
import { FormatMoney } from "format-money-js";
import { percentage } from "@/common/utils/percentage";
import { Button, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { GetPayments } from "@/common/interfaces/getPayment.interfaces";
import { get } from "@/common/request";
import { parserMoney } from "@/common/utils/parserMoney";
import { ButtonPaymentPix } from "@/components/ButtonPaymentPix";

interface Props extends Omit<PropsPage, "searchParams"> {
  searchParams: { paymentId: string };
}

export default async function Page({ searchParams: { paymentId } }: Props) {
  const fetchData = async (paymentId: string) => {
    let result: GetPayments;
    try {
      result = await get({
        url: `/api/payment/${paymentId}`,
      });
      return result.result;
    } catch (error) {}

    redirect("/");
  };

  const data = await fetchData(paymentId);
  if (data.isPaymentPix) redirect("/");
  return (
    <main className="flex flex-col max-w-[464px]   w-full pl-4 pr-5 gap-8">
      <section className="m-auto">
        <h2 className="text-2xl font-bold"> Transferindo</h2>
      </section>
      <section className="flex flex-col">
        <Typography fontSize={28} fontWeight={800}>
          R$ {parserMoney(data.payInstallment)}
        </Typography>
        <Typography fontSize={18} fontWeight={800} color={"#B2B2B2"}>
          {" "}
          Para: Woovi
        </Typography>
      </section>
      <ButtonPaymentPix paymentId={data.id} />
    </main>
  );
}
