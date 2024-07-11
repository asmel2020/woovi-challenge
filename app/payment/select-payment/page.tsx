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
import { FormatMoney } from "format-money-js";

interface Props extends Omit<PropsPage, "searchParams"> {
  searchParams: { amount: string };
}
export default async function Page({ searchParams: { amount } }: Props) {
  
  const Decode = (amount: string) => {
    const data: { amount: number } = JSON.parse(decode(amount));
    const percentagem = [0.0033, 0.0039, 0.011, 0.0328, 0.0393, 0.0426];

    const fm = new FormatMoney({
      separator: "",
      decimals: 2,
    });
    let result = {
      pixCashback: +(fm.from(data.amount * 0.03)?.toString() || "0"),

      PixParcelado: percentagem.map((percentagem, index) => {
        return {
          numberParcela:index+2,
          total: +(
            fm.from(data.amount + data.amount * percentagem)?.toString() || "0"
          ),

          parcelaAmount: +(
            fm
              .from((data.amount + data.amount * percentagem) / (index + 2))
              ?.toString() || "0"
          ),
        };
      }),
    };

  
    return {
      amount: data.amount,
      valuePix: result,
    };
  };
  const data = Decode(amount);

  /*  const fetchData = async (paymentId: string) => {
    try {
      const result: GetPayment = await get({
        url: `http://localhost:3000/api/payment/${paymentId}`,
      });
      return result;
    } catch (error) {}

    redirect("/");
  };
  const data = await fetchData(paymentId); */

  return (
    <main className="flex flex-col max-w-[464px]   w-full pl-4 pr-5 gap-8">
      <section className="m-auto">
        <h2 className="text-2xl font-bold"> João, como você quer pagar?</h2>
      </section>

      <FormSelectPayment data={data} />
    </main>
  );
}
