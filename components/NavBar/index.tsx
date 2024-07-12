import Image from "next/image";
import React from "react";
import { LogoNavbarIco } from "../Svg";
import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="flex justify-center w-full h-14 mt-9">
      <Link href={"/"}>
        <figure className="">
          <LogoNavbarIco />
        </figure>
      </Link>
    </nav>
  );
};
