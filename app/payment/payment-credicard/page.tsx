import React from "react";

import { PropsPage } from "@/common/interfaces/PropsPage";
import { get } from "@/common/request";
import { GetPayments } from "@/common/interfaces/getPayment.interfaces";
import { redirect } from "next/navigation";
import { FooterPayment } from "@/components/FooterPayment";
import { FormCreditCardPayment } from "@/components/FormCreditCardPayment";
import { Box, Typography } from "@mui/material";
import { TitleStyles } from "./payment-credicard.styles";
import { ContainerStyles } from "@/common/styles";


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
    <Box
      sx={{ ...ContainerStyles }}
    
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography sx={{ ...TitleStyles }}>
          {data.name}, pague o restante em {data.creditCardInstallment}x no
        </Typography>
        <Typography sx={{ ...TitleStyles }}>cartão</Typography>
      </Box>
      <FormCreditCardPayment data={data as any} />
      <FooterPayment data={data} />
    </Box>
  );
}
