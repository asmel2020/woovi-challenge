"use client";
import { PropsInputs } from "@/common/interfaces/propsInputs.interface";
import { TextField } from "@mui/material";
import React, { useState } from "react";

export const InputCreditCard = ({ onChange,...props }: PropsInputs) => {
  const [value, setValue] = useState<string>("");

  const format = (input: React.ChangeEvent<HTMLInputElement>) => {
    // Remova qualquer caractere que não seja números
    let value = input.target.value.replace(/\D/g, "");

    if (value.length === 17) {
      return;
    }
    if (!!onChange) {
      onChange(value);
    }
    // Adicione espaços a cada 4 dígitos
    value = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    // Atualizar valor de entrada
    setValue(value);
  };
  return (
    <TextField
      id="outlined-basic"
      label="Número do cartão"
      variant="outlined"
      value={value}
      onChange={format}
      {...props}
    />
  );
};
