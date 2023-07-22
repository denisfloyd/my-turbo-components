import * as React from "react";
import { StyledButton, StyledInnerContainer } from "./ButtonStyles";
import { HEIGHT, STYLE } from "./constants";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  buttonStyle?: STYLE;
  height?: HEIGHT;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      buttonStyle = STYLE.PRIMARY,
      children = null,
      onClick = () => {},
      height = HEIGHT.DEFAULT,
      disabled = false,
      ...elementProps
    }: Props,
    ref
  ) => {
    return (
      <StyledButton
        buttonStyle={buttonStyle}
        onClick={onClick}
        height={height}
        disabled={disabled}
        ref={ref}
        {...elementProps}
      >
        <StyledInnerContainer>{children}</StyledInnerContainer>
      </StyledButton>
    );
  }
);

export default Button;
