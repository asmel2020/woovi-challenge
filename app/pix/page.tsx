import React from "react";

import { PropsPage } from "@/common/interfaces/PropsPage";

import { Box, Typography } from "@mui/material";
import { redirect } from "next/navigation";
import { GetPayments } from "@/common/interfaces/getPayment.interfaces";
import { get } from "@/common/request";
import { parserMoney } from "@/common/utils/parserMoney";
import { ButtonPaymentPix } from "@/components/ButtonPaymentPix";
import { ContainerStyles } from "@/common/styles";


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
    <Box sx={{ ...ContainerStyles }}>
      <Box sx={{ margin: "auto",textAlign:"left" }}>
        <Typography sx={{ fontSize: "24px", fontWeight: 700 }}>
          Transferindo
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography fontSize={28} fontWeight={800}>
          R$ {parserMoney(data.payInstallment)}
        </Typography>
        <Typography fontSize={18} fontWeight={800} color={"#B2B2B2"}>
          Para: Woovi
        </Typography>
      </Box>
      <ButtonPaymentPix
        paymentId={data.id}
        installment={data.totalInstallment}
      />
    </Box>
  );
}
