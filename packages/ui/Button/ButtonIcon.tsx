import * as React from "react";

interface Props {
  icon: React.ReactElement;
}

export const ButtonIcon = ({ icon: Icon }: Props) => {
  return Icon;
};
