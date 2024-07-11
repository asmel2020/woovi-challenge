"use client";
import { PropsInputs } from "@/common/interfaces/propsInputs.interface";
import { TextField } from "@mui/material";
import React, { useState } from "react";

export const InputCVV = ({ onChange, ...props }: PropsInputs) => {
  const [value, setValue] = useState<string>("");

  const format = (input: React.ChangeEvent<HTMLInputElement>) => {
    // Remova qualquer caractere que não seja números
    let value = input.target.value.replace(/\D/g, "");

    if (value.length === 4) {
      return;
    }
    if (!!onChange) {
      onChange(value);
    }
    // Atualizar valor de entrada
    setValue(value);
  };
  return (
    <TextField
      id="outlined-basic"
      label="CVV"
      variant="outlined"
      value={value}
      onChange={format}
      {...props}
    />
  );
};
