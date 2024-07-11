"use client";
import { PropsInputs } from "@/common/interfaces/propsInputs.interface";
import { parserMoney } from "@/common/utils/parserMoney";
import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

interface Props extends PropsInputs {
  parcelas: { installment: number; amount: number }[];
}

export const InputParcelas = ({ parcelas, onChange, ...props }: Props) => {
  return (
    <TextField
      id="outlined-select-currency"
      select
      label="Parcelas"
      defaultValue={1}
      onChange={(value)=>onChange(value.target.value)}
      {...props}
    >
      {parcelas.map((option) => (
        <MenuItem key={option.installment} value={option.installment}>
          {option.installment} x de R$ {parserMoney(option.amount)}
        </MenuItem>
      ))}
    </TextField>
  );
};
