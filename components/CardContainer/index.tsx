import React, { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
    label:string
}
export const CardContainer = ({children,label}:Props) => {
  return (
    <section className="relative">
      <span className="absolute -top-3 left-5 h-7 w-auto px-5 bg-[#E5E5E5] rounded-full text-center text-lg font-bold">
        {label}
      </span>
     {children}
    </section>
  );
};
