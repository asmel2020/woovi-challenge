"use client";
import React from "react";

import { Box, Divider, Typography } from "@mui/material";
import { ArrowUpIcon, ClipCopyIcon } from "@/components/Svg";

import BasicTimeline from "@/components/TimeL";
import { parserMoney } from "@/common/utils/parserMoney";
interface Props {
  data: any;
}
export const FooterPayment = ({ data }: Props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}
      >
        <Typography color={"text.secondary"} sx={{ fontWeight: 700 }}>
          Prazo de pagamento:
        </Typography>
        <Typography fontWeight={800}>15/12/2021 - 08:17</Typography>
      </Box>

      <Box>
        <BasicTimeline
          isCardPay={data.totalInstallment !== 1}
          paymentPix={
            data.totalInstallment === 1 ? data.amount : data.payInstallment
          }
          creditCardInstallment={data.creditCardInstallment}
          isPaymentPix={data.isPaymentPix}
        />
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "28px",
          paddingBottom: "20px",
        }}
      >
        <Typography>CET: 0,5%</Typography>
        <Typography fontSize={18} fontWeight={800}>
          Total: R$ {parserMoney(data.amountInstallment)}
        </Typography>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "28px",
          paddingBottom: "20px",
          justifyItems: "center",
        }}
      >
        <Typography fontWeight={800}>Como funciona?</Typography>
        <ArrowUpIcon />
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          marginTop: "20px",
        }}
       
      >
        <Typography fontWeight={600} color={"#B2B2B2"}>
          Identificador:
        </Typography>

        <Typography fontWeight={800}>{data.id}</Typography>
      </Box>
    </Box>
  );
};
