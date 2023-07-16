import * as React from "react";

interface Props {
  icon: React.ElementType;
  size?: number;
}

export function ButtonIcon({ icon: Icon }: Props) {
  return <Icon />;
};
