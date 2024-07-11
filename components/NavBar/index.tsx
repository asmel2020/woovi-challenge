import Image from 'next/image'
import React from 'react'

export const NavBar = () => {
  return (
    <nav className="flex justify-center w-full h-14 mt-9">
    <figure className="">
      <Image src={"/images/icon.svg"} alt="" />
    </figure>
  </nav>
  )
}
