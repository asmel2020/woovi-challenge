import React from "react";
import "./styles.css";
import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  subTitle: string;
}
export const Tag = ({ title, subTitle }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyItems: "center",
        paddingLeft: "8px",
        borderRadius: "4px",
        height: "auto",
        backgroundColor: "info.main",
        gap: "4px",
        color: "white",
        paddingY: "4px",
      }}
      className="c"
    >
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: {
            xs: "16px",
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "16px",
          },
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
};
