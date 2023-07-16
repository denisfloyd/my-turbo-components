import * as React from "react";
import { ContainerButton } from "./styles";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({ children, onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="rounded-md 
        ui-mx-1 
        ui-flex 
        ui-items-center
        ui-justify-center
        ui-gap-2 ui-cursor-pointer 
        ui-bg-lime-500 
        ui-border-solid ui-border-2 ui-border-black ui-rounded"
    >
      {children}
    </button>
  );
}
