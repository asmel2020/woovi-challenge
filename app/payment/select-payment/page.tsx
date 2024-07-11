import React from "react";
import { decode } from "js-base64";
import { PropsPage } from "@/common/interfaces/PropsPage";
import { FormSelectPayment } from "@/components/FormSelectPayment";
import { FormatMoney } from "format-money-js";
import { percentage } from "@/common/utils/percentage";

interface Props extends Omit<PropsPage, "searchParams"> {
  searchParams: { data: string };
}
export default async function Page({ searchParams: { data } }: Props) {
  const Decode = (value: string) => {
    const {amount,nome}: { amount: number; nome: String } = JSON.parse(decode(value));

    const fm = new FormatMoney({
      separator: "",
      decimals: 2,
    });
    let result = {
      pixCashback: +(fm.from(amount * 0.03)?.toString() || "0"),

      PixParcelado: percentage.map((percentagem, index) => {
        return {
          numberParcela: index + 2,
          total: +(
            fm.from(amount + amount * percentagem)?.toString() || "0"
          ),

          parcelaAmount: +(
            fm
              .from((amount + amount * percentagem) / (index + 2))
              ?.toString() || "0"
          ),
        };
      }),
    };

    return {
      nome,
      amount: amount,
      valuePix: result,
    };
  };
  const result = Decode(data);

  return (
    <main className="flex flex-col max-w-[464px]   w-full pl-4 pr-5 gap-8">
      <section className="m-auto">
        <h2 className="text-2xl font-bold cap"> <span className="capitalize">{result.nome}</span>, como você quer pagar?</h2>
      </section>

      <FormSelectPayment data={result as any} />
    </main>
  );
}
