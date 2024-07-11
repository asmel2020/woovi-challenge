import React from "react";
import { GuardIcon, LogoGressIcon } from "../Svg";
import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <footer className="w-full justify-center flex items-center gap-1 my-10">
      <GuardIcon />{" "}
      <Typography color={"#B2B2B2"}>Pagamento 100% seguro via:</Typography>{" "}
      <LogoGressIcon />
    </footer>
  );
};
