import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonTailwind = tv({
  slots: {
    base: "px-4 py-2 rounded transition-all duration-1000 cursor-pointer text-white",
  },
  variants: {
    style: {
      primary: "bg-blue-700 hover:bg-blue-600",
      success: "bg-lime-700 hover:bg-lime-600",
      error: "bg-red-700 hover:bg-red-600",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    style: "primary",
    size: "md",
  },
});

type Props = ComponentProps<"button"> & VariantProps<typeof buttonTailwind>;

const Button = ({ style, size, children, ...props }: Props) => {
  const { base } = buttonTailwind({ style, size });

  return (
    <button className={base()} {...props}>
      {children}
    </button>
  );
};

export default Button;
