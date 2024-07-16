"use client";
import React from "react";

import { Box, Typography } from "@mui/material";
import { ArrowUpIcon, ClipCopyIcon } from "@/components/Svg";

import BasicTimeline from "@/components/TimeL";
import { parserMoney } from "@/common/utils/parserMoney";
interface Props {
  data: any;
}
export const FooterPayment = ({ data }: Props) => {
  return (
    <section className="flex flex-col">
      <Box className="text-center flex flex-col">
        <Typography color={"text.secondary"} sx={{ fontWeight: 700 }}>
          Prazo de pagamento:
        </Typography>
        <Typography fontWeight={800}>15/12/2021 - 08:17</Typography>
      </Box>

      <Box className="border-b-2">
        <BasicTimeline
          isCardPay={data.totalInstallment !== 1}
          paymentPix={
            data.totalInstallment === 1 ? data.amount : data.payInstallment
          }
          creditCardInstallment={data.creditCardInstallment}
          isPaymentPix={data.isPaymentPix}
        />
      </Box>

      <Box className="flex justify-between border-b-2 pt-7 pb-5">
        <Typography>CET: 0,5%</Typography>
        <Typography fontSize={18} fontWeight={800}>
          Total: R$ {parserMoney(data.amountInstallment)}
        </Typography>
      </Box>

      <Box className="flex justify-between items-center border-b-2 pt-7 pb-5">
        <Typography fontWeight={800}>Como funciona?</Typography>
        <ArrowUpIcon />
      </Box>

      <Box className="text-center flex flex-col mt-5">
        <Typography fontWeight={600} color={"#B2B2B2"}>
          Identificador:
        </Typography>

        <Typography fontWeight={800}>{data.id}</Typography>
      </Box>
    </section>
  );
};
