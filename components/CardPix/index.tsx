import React from "react";
import { Tag } from "../Tag";
import { FormatMoney } from "format-money-js";
import { parserMoney } from "@/common/utils/parserMoney";
import { CardContainer } from "../CardContainer";
import { FormControlLabel, Radio } from "@mui/material";
interface Props {
  value: number;
  cashback: number;
  register: any;
  disabled?:boolean
}
export const CardPix = ({ value, cashback, register,disabled=false }: Props) => {
  return (
    <CardContainer label="Pix">
      <section className="flex w-full flex-col  border-[3px] h-[137px] rounded-xl px-5 pt-5 gap-1">
        <section className="flex justify-between">
          <section className="flex flex-col">
            <span className="font-bold text-lg">
              1x R$ {parserMoney(value)}
            </span>
            <span className="font-semibold text-[#03D69D]">
              Ganhe 3% de Cashback
            </span>
          </section>
          <FormControlLabel
            value={1}
            
            control={<Radio {...register} value={1} disabled={disabled} />}
            label={""}
          />
        </section>
        <Tag
          title={`🤑 R$ ${parserMoney(cashback)}`}
          subTitle="de volta no seu Pix na hora"
        />
      </section>
    </CardContainer>
  );
};
