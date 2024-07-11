import React from "react";
import { decode } from "js-base64";
import { PropsPage } from "@/common/interfaces/PropsPage";
import { CardPix } from "@/components/CardPix";
import { CardGroup } from "@/components/CardGroup";
import { get } from "@/common/request";
import { GetPayment } from "@/common/interfaces/getPayment.interfaces";
import { redirect } from "next/navigation";
import { RadioGroup } from "@mui/material";
import { FormSelectPayment } from "@/components/FormSelectPayment";

interface Props extends Omit<PropsPage, "searchParams"> {
  searchParams: { paymentId: string };
}
export default async function Page({ searchParams: { paymentId } }: Props) {
  const fetchData = async (paymentId: string) => {
    try {
      const result: GetPayment = await get({
        url: `http://localhost:3000/api/payment/${paymentId}`,
      });
      return result;
    } catch (error) {}

    redirect("/");
  };
  const data = await fetchData(paymentId);

  return (
    <main className="flex flex-col max-w-[464px]   w-full pl-4 pr-5 gap-8">
      <section className="m-auto">
        <h2 className="text-2xl font-bold"> João, como você quer pagar?</h2>
      </section>

      <FormSelectPayment data={data} paymentId={paymentId} />
    </main>
  );
}
