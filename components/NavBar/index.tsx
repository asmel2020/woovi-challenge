import Image from 'next/image'
import React from 'react'
import { LogoNavbarIco } from '../Svg'

export const NavBar = () => {
  return (
    <nav className="flex justify-center w-full h-14 mt-9">
    <figure className="">
     <LogoNavbarIco />
    </figure>
  </nav>
  )
}
