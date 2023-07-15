import { Button as Content } from "./Button";
import { ButtonIcon } from "./ButtonIcon";

export const Button: {
  Base: typeof Content;
  Icon: typeof ButtonIcon;
} = {
  Base: Content,
  Icon: ButtonIcon,
};
