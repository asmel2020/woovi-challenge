"use client";
import React from "react";
import * as S from "./styles";
import { parserMoney } from "@/common/utils/parserMoney";
import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
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
    <section className="text-[#4D4D4D]">
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
              <S.Container $isHeader={isHeader}>
                <section className="flex justify-between">
                  <section className="flex flex-col">
                    <span className="font-bold text-lg">
                      Total: {parserMoney(amountInstallment)}
                    </span>
                    <span className="font-bold text-lg">
                      Parcelas: {totalInstallment}
                    </span>
                    <span className="font-semibold text-[#AFAFAF]">
                      pix: {installmentPix}x{" "}
                      {isPaymentPix ? "concluído" : "pendentes"}
                    </span>
                    <span className="font-semibold text-[#AFAFAF]">
                      Número do cartão: {creditCardInstallment}x{" "}
                      {isPaymentCredicard ? "concluído" : "pendentes"}
                    </span>
                  </section>
                  {isComplete ? (
                    <></>
                  ) : (
                    <section className="flex justify-center items-center">
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{ background: "#133A6F" }}
                        className="w-full"
                        onClick={() =>
                          router.push(`/payment/paymentpix?paymentId=${id}`)
                        }
                      >
                        Pagar
                      </Button>
                    </section>
                  )}
                </section>
              </S.Container>
            </CardContainer>
          );
        }
      )}
    </section>
  );
};
