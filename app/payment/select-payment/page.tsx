import React from "react";
import { decode } from "js-base64";
import { PropsPage } from "@/common/interfaces/PropsPage";
import { FormSelectPayment } from "@/components/FormSelectPayment";
import { FormatMoney } from "format-money-js";
import { percentage } from "@/common/utils/percentage";
import { Box, Container, Typography } from "@mui/material";
import { ContainerStyles } from "@/common/styles";



interface Props extends Omit<PropsPage, "searchParams"> {
  searchParams: { data: string };
}
export default async function Page({ searchParams: { data } }: Props) {
  const Decode = (value: string) => {
    const { amount, nome }: { amount: number; nome: String } = JSON.parse(
      decode(value)
    );

    const fm = new FormatMoney({
      separator: "",
      decimals: 2,
    });
    let result = {
      pixCashback: +(fm.from(amount * 0.03)?.toString() || "0"),

      PixParcelado: percentage.map((percentagem, index) => {
        return {
          numberParcela: index + 2,
          total: +(fm.from(amount + amount * percentagem)?.toString() || "0"),

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
    <Container sx={{ ...ContainerStyles }}>
      <Box sx={{ margin: "auto",textAlign:"center" }}>
        <Typography sx={{ display: "flex", fontSize: 26, fontWeight: 700 }}>
          {result.nome}, como você quer pagar?
        </Typography>
      </Box>

      <FormSelectPayment data={result as any} />
    </Container>
  );
}
