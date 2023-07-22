import styled, { css } from "styled-components";
import { HEIGHT, STYLE } from "./constants";

interface Button {
  buttonStyle: STYLE;
  height: HEIGHT;
}

const getDefaultStyles = ({ buttonStyle }: { buttonStyle: STYLE }) => {
  switch (buttonStyle) {
    case STYLE.PRIMARY:
      return css`
        color: #ffffff;
        border-color: #004788;
        background-color: #004788;
        font-weight: 700;
        -webkit-font-smoothing: antialiased !important;
      `;
    case STYLE.SECONDARY:
      return css`
        color: #ffffff;
        border-color: #920020;
        background-color: #920020;
        font-weight: 700;
        -webkit-font-smoothing: antialiased !important;
      `;
    default:
      return css`
        border-color: transparent;
        color: #000000;
        border-color: transparent;
        background-color: transparent;
        font-weight: 700;
        -webkit-font-smoothing: antialiased !important;
      `;
  }
};

const getButtonHeightStyles = ({ height }: { height: HEIGHT }) => {
  if (height === HEIGHT.XSMALL) {
    return css`
      height: 24px;
      padding: 0 6px;
    `;
  }
  if (height === HEIGHT.SMALL) {
    return css`
      height: 32px;
      padding: 0 8px;
    `;
  }
  if (height === HEIGHT.LARGE) {
    return css`
      height: 48px;
      padding: 0 40px;
    `;
  }
  return css`
    height: 40px;
    padding: 0 10px;
  `;
};

export const StyledInnerContainer = styled.span`
  align-items: center;
  align-self: center;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 1;
  flex: 1 1 auto;
  overflow: hidden;
`;

export const StyledButton = styled.button<Button>`
  box-sizing: border-box;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  display: inline-flex;
  vertical-align: middle;
  box-shadow: 0 1px 1px #000;
  text-decoration: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
  line-height: 20px;
  width: auto;
  max-width: 100%;
  ${getDefaultStyles};
  ${getButtonHeightStyles};

  &:disabled {
    cursor: not-allowed;
    border-color: transparent;
  }
`;
