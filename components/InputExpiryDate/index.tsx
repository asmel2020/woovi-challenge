"use client";
import { PropsInputs } from "@/common/interfaces/propsInputs.interface";
import { TextField } from "@mui/material";
import React, { useState } from "react";

export const InputExpiryDate = ({ onChange,...props }: PropsInputs) => {
  const [value, setValue] = useState<string>("");

  const format = (input: React.ChangeEvent<HTMLInputElement>) => {
    // Remova qualquer caractere que não seja números
    let value = input.target.value.replace(/\D/g, "");

    if (value.length === 5) {
      return;
    }
    if (!!onChange) {
      onChange(value);
    }
    // Añadir la barra después del mes
    if (value.length > 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    // Atualizar valor de entrada
    setValue(value);
  };
  return (
    <TextField
      id="outlined-basic"
      label="Vencimento"
      variant="outlined"
      value={value}
      onChange={format}
      {...props}
    />
  );
};
