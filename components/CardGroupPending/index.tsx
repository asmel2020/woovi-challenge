"use client";
import React from "react";
import {
  CardStyles,
  CardBorderStyles,
  CardBodyStyles,
  commonStyles,
  TextPrimary,
  TextSecondary,
  ButtonStyles,
} from "./styles";
import { parserMoney } from "@/common/utils/parserMoney";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { CardContainer } from "../CardContainer";
import { Payment } from "@/common/interfaces/mainData.interfaces";
import { useRouter } from "next/navigation";

interface Props {
  payment: Payment[];
  isComplete: boolean;
}

export const CardGroupPending = ({ payment, isComplete }: Props) => {
  const router = useRouter();
  return (
    <Box>
      {payment.map(
        (
          {
            id,
            amountInstallment,
            totalInstallment,
            installmentPix,
            creditCardInstallment,
            isPaymentPix,
            isPaymentCredicard,
          },
          index,
          array
        ) => {
          let isHeader: "header" | "body" | "footer";

          switch (index) {
            case 0:
              isHeader = "header";
              break;
            case array.length - 1:
              isHeader = "footer";
              break;
            default:
              isHeader = "body";
              break;
          }

          return (
            <CardContainer
              label={
                isComplete ? "pagamentos concluídos" : "pagamentos pendentes"
              }
              hidden={!(isHeader === "header")}
              key={index}
            >
              <Card
                variant="outlined"
                sx={{
                  ...(CardBorderStyles[isHeader] as any),
                  ...CardStyles,
                }}
              >
                <CardContent sx={{ ...CardBodyStyles }}>
                  <Typography
                    sx={{ ...TextPrimary }}
                  
                  >
                    Total: {parserMoney(amountInstallment)}
                  </Typography>
                  <Typography
                    sx={{ ...TextPrimary }}
                 
                  >
                    Parcelas: {totalInstallment}
                  </Typography>
                  <Typography sx={{ ...TextSecondary }}>
                    pix: {installmentPix}x{" "}
                    {isPaymentPix ? "concluído" : "pendentes"}
                  </Typography>
                  <Typography sx={{ ...TextSecondary }}>
                    Número do cartão: {creditCardInstallment}x{" "}
                    {isPaymentCredicard ? "concluído" : "pendentes"}
                  </Typography>

                  {isComplete ? (
                    <></>
                  ) : (
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{...ButtonStyles}}
                      onClick={() =>
                        router.push(`/payment/paymentpix?paymentId=${id}`)
                      }
                    >
                      Pagar
                    </Button>
                  )}
                </CardContent>
              </Card>
            </CardContainer>
          );
        }
      )}
    </Box>
  );
};
