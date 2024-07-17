import React from "react";
import { GuardIcon, LogoGressIcon } from "../Svg";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        gap: "4px",
        marginY: "40px",
      }}
    >
      <GuardIcon />
      <Typography color={"#B2B2B2"}>Pagamento 100% seguro via:</Typography>
      <LogoGressIcon />
    </Box>
  );
};
