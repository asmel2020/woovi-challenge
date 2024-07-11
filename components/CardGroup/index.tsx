import React from "react";
import { Tag } from "../Tag";
import * as S from "./styles";
import { PixParcelado } from "@/common/interfaces/getPayment.interfaces";
import { parserMoney } from "@/common/utils/parserMoney";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { CardContainer } from "../CardContainer";

interface Props {
  pixParcelado: PixParcelado[];
  register: any;
}

export const CardGroup = ({ pixParcelado, register }: Props) => {
  return (
    <section className="text-[#4D4D4D]">
      {pixParcelado.map(
        ({ numberParcela, parcelaAmount, total }, index, arrayd) => {
          let isHeader: "header" | "body" | "footer";
          switch (numberParcela) {
            case 2:
              isHeader = "body";
              break;
            case 7:
              isHeader = "footer";
              break;
            default:
              isHeader = "body";
              break;
          }
          return (
            <CardContainer label="Pix Parcelado" hidden={numberParcela !== 2} key={index}>
              <S.Container $isHeader={isHeader}>
                <section className="flex justify-between">
                  <section className="flex flex-col">
                    <span className="font-bold text-lg">
                      {numberParcela}x R$ {parserMoney(parcelaAmount)}
                    </span>
                    <span className="font-semibold text-[#AFAFAF]">
                      Total: R$ {parserMoney(total)}
                    </span>
                  </section>
                  <FormControlLabel
                    value={index + 2}
                    control={<Radio {...register} value={index + 2} />}
                    label={""}
                  />
                </section>
              </S.Container>
            </CardContainer>
          );
        }
      )}
    </section>
  );
};
