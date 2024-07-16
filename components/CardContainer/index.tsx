import React, { PropsWithChildren } from "react";
import { ChipStyles } from "./styles";
import { Box, Chip } from "@mui/material";
interface Props extends PropsWithChildren {
  label: string;
  hidden?: boolean;
}
export const CardContainer = ({ children, label, hidden = false }: Props) => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Chip
        label={label}
        sx={{ ...ChipStyles, visibility: hidden ? "hidden" : "visible" }}
      />
      {children}
    </Box>
  );
};
