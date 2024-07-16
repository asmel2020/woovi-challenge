"use client";
import { Nunito } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const nunito = Nunito({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: nunito.style.fontFamily,
  },
  palette: {
    primary: { main: "#133A6F" },
      secondary: { main: "#03D69D" },
    grey: {
      "900": "#E5E5E5",
    },
    text: { primary: "#FFFFF", secondary: "#AFAFAF" },
  },
});

export default theme;
