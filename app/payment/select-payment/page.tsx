import React from "react";
import { decode } from "js-base64";
import { PropsPage } from "@/common/interfaces/PropsPage";
import { FormSelectPayment } from "@/components/FormSelectPayment";
import { FormatMoney } from "format-money-js";
import { percentage } from "@/common/utils/percentage";

interface Props extends Omit<PropsPage, "searchParams"> {
  searchParams: { amount: string };
}
export default async function Page({ searchParams: { amount } }: Props) {
  
  const Decode = (amount: string) => {
    const data: { amount: number } = JSON.parse(decode(amount));
    

    const fm = new FormatMoney({
      separator: "",
      decimals: 2,
    });
    let result = {
      pixCashback: +(fm.from(data.amount * 0.03)?.toString() || "0"),

      PixParcelado: percentage.map((percentagem, index) => {
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

  return (
    <main className="flex flex-col max-w-[464px]   w-full pl-4 pr-5 gap-8">
      <section className="m-auto">
        <h2 className="text-2xl font-bold"> João, como você quer pagar?</h2>
      </section>

      <FormSelectPayment data={data} />
    </main>
  );
}
