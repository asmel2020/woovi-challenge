import { FormatMoney } from "format-money-js";
export const parserMoney = (value: number) =>
  new FormatMoney({
    separator:".",
    decimalPoint:",",
    decimals: 2,
  }).from(value)?.toString() || "0";
