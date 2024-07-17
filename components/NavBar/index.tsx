import Image from "next/image";
import React from "react";
import { LogoNavbarIco } from "../Svg";
import Link from "next/link";
import { Box } from "@mui/material";

export const NavBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "56px",
        marginTop: "36px",
      }}
     
    >
      <Link href={"/"}>
        <figure>
          <LogoNavbarIco />
        </figure>
      </Link>
    </Box>
  );
};
