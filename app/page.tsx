import React from "react";

import { PropsPage } from "@/common/interfaces/PropsPage";

import { Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { GetPayments } from "@/common/interfaces/getPayment.interfaces";
import { get } from "@/common/request";
import { parserMoney } from "@/common/utils/parserMoney";
import { ButtonPaymentPix } from "@/components/ButtonPaymentPix";
import { MainData } from "@/common/interfaces/mainData.interfaces";
import { FormValue } from "@/components/FormValue";
import { CardGroupPending } from "@/components/CardGroupPending";
interface Props extends Omit<PropsPage, "searchParams"> {
  searchParams: { paymentId: string };
}

export default async function Page({ searchParams:{ paymentId } }: Props) {
  const fetchData = async () => {
    try {
      const { result }: MainData = await get({
        url: `/api/data`,
      });
      return result;
    } catch (error) {}
    redirect("/");
  };

  const data = await fetchData();
  return (
    <main className="flex flex-col min-h-screen gap-16">
      <FormValue />
      <section className=" flex flex-col gap-16">
        <CardGroupPending payment={data.paymentComplete} isComplete={true} />
        <CardGroupPending payment={data.paymentPending} isComplete={false} />
      </section>
    </main>
  );
}
