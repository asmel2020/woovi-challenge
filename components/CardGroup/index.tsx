import React from "react";
import { Tag } from "../Tag";
import * as S from "./styles";
import { PixParcelado } from "@/common/interfaces/getPayment.interfaces";
import { parserMoney } from "@/common/utils/parserMoney";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { CardContainer } from "../CardContainer";

interface Props {
  pixParcelado: PixParcelado[];
  register:any
}

export const CardGroup = ({ pixParcelado,register }: Props) => {
  return (
    <section className="text-[#4D4D4D]">
      
        {pixParcelado.map(({ parcela, total }, index, arrayd) => {
          if (index === 0)
            /// header
            return (
              <CardContainer label="Pix Parcelado">
                <S.Container $isHeader="header">
                  <section className="flex justify-between">
                    <section className="flex flex-col">
                      <span className="font-bold text-lg">
                        {index + 2}x R$ {parserMoney(parcela)}
                      </span>
                      <span className="font-semibold text-[#AFAFAF]">
                        Total: R$ {parserMoney(pixParcelado[0].total)}
                      </span>
                    </section>
                    <FormControlLabel
                      value={index + 2}
                      control={<Radio  {...register} value={index + 2}  />}
                      label={""}
                    
                    />
                  </section>
                </S.Container>
              </CardContainer>
            );
          /// footer
          if (arrayd.length === index + 1)
            return (
              <S.Container $isHeader="footer">
                <section className="flex justify-between">
                  <section className="flex flex-col">
                    <span className="font-bold text-lg">
                      {index + 2}x R$ {parserMoney(parcela)}
                    </span>
                    <span className="font-semibold text-[#AFAFAF]">
                      Total: R$ {parserMoney(total)}
                    </span>
                  </section>
                  <FormControlLabel
                    value={index + 2}
                    control={<Radio   {...register} value={index + 2}/>}
                    label={""}
                  />
                </section>
              </S.Container>
            );
          /// body
          return (
            <S.Container $isHeader="body">
              <section className="flex justify-between">
                <section className="flex flex-col">
                  <span className="font-bold text-lg">
                    {index + 2}x R$ {parserMoney(parcela)}
                  </span>
                  <span className="font-semibold text-[#AFAFAF]">
                    Total: R$ {parserMoney(total)}
                  </span>
                </section>
                <FormControlLabel
                  value={index + 2}
                  control={<Radio  {...register} value={index + 2} />}
                  label={""}
                />
              </section>

              {index + 2 === 4 ? (
                <Tag
                  title=" -3% de juros:"
                  subTitle="Melhor opção de parcelamento"
                />
              ) : (
                <></>
              )}
            </S.Container>
          );
        })}
     
    </section>
  );
};
