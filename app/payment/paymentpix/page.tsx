import React from "react";

import { PropsPage } from "@/common/interfaces/PropsPage";
import { get } from "@/common/request";
import { GetPayments } from "@/common/interfaces/getPayment.interfaces";
import { redirect } from "next/navigation";
import { parserMoney } from "@/common/utils/parserMoney";
import { PixQrColePege } from "@/components/PixQrColePege";
import { FooterPayment } from "@/components/FooterPayment";
import { Box, Container, Typography } from "@mui/material";
import { ContainerStyles, TitleStyles } from "./paymentpix.styles";

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
    <Container sx={{ ...ContainerStyles }}>
      <Box sx={{margin:"auto",textAlign:"center"}}>
        <Typography sx={{ ...TitleStyles }}>
          
          {data.name}, pague a entrada de
        </Typography>
        <Typography sx={{ ...TitleStyles }}>
          R${" "}
          {data.totalInstallment === 1
            ? parserMoney(data.amount)
            : parserMoney(data.payInstallment)}{" "}
          pelo Pix
        </Typography>
      </Box >

      <PixQrColePege id={data.id} />
      <FooterPayment data={data} />
    </Container>
  );
}
