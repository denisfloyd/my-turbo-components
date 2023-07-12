import * as React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ children, onClick, disabled }: Props) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
