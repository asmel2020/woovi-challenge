import React from "react";
import "./styles.css";
import { Typography } from "@mui/material";

interface Props {
  title: string;
  subTitle: string;
}
export const Tag = ({ title, subTitle }: Props) => {
  return (
    <div className="c flex items-center pl-2 rounded bg-[#133A6F] h-8 text-white gap-1">
      <Typography className="font-bold">{title}</Typography>{" "}
      <span>{subTitle}</span>
    </div>
  );
};
