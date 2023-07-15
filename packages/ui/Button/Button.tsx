import * as React from "react";
import { ContainerButton } from "./styles";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ children, onClick, disabled }: Props) => {
  return (
    <ContainerButton onClick={onClick} disabled={disabled}>
      {children}
    </ContainerButton>
  );
};
