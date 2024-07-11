import React, { PropsWithChildren } from "react";
import * as S from "./styles";
interface Props extends PropsWithChildren {
  label: string;
  hidden?: boolean;
}
export const CardContainer = ({ children, label, hidden = false }: Props) => {
  return (
    <section className="relative">
      <S.IconTag $isHidden={hidden}>{label}</S.IconTag>
      {children}
    </section>
  );
};
