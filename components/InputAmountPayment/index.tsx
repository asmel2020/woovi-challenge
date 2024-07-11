"use client";
import { TextField } from "@mui/material";
import { FormatMoney } from "format-money-js";
import React, { useState } from "react";
interface Props {
  register: any;
  error?: boolean;
  label?: string;
  helperText?: string | undefined;
  disabled?:boolean
}
export const InputAmountPayment = ({ register, ...props }: Props) => {
  const [value, setValue] = useState("");

  const formatNumber = (number: string) => {
    // Elimina cualquier caracter que no sea un número

    // Mantener solo números y una coma
    let value: string = number.replace(/[^0-9,]/g, "");

    if (value[0] === ",") {
      value = "";
    }
    // Permitir solo una coma
    const parts = value.split(",");

    if (parts.length > 2) {
      value = parts[0] + "," + parts.slice(1).join("");
    }

    // Restringir a dos dígitos después de la coma
    if (parts[1] && parts[1].length > 2) {
      value = parts[0] + "," + parts[1].substring(0, 2);
    }

    // No permitir que el número comience con 0 a menos que sea 0,00
    if (value.startsWith("0") && !/^0(,0{0,2})?$/.test(value)) {
      value = value.replace(/^0+/, "");
    }

    const fm = value.split(",");

    let formatMoney = new FormatMoney({
      decimals: 0,
      separator: ".",
    });

    if (!fm[1] && !(fm[1] === "")) {
      return formatMoney.from(+fm[0])?.toString() || "0";
    }

    return `${formatMoney.from(+fm[0])?.toString() || "0"}${
      fm[1].length === 0 ? "," : "," + fm[1]
    }`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const formattedValue = formatNumber(inputValue);
    setValue(formattedValue);
  };

  return (
    <TextField
      {...props}
      {...register}
      id="outlined-basic"
      className="w-64 md:w-80"
      variant="outlined"
      value={value}
      onChange={handleChange}
    />
  );
};
