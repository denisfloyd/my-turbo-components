import { ComponentProps, forwardRef, ForwardRefExoticComponent } from "react";
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

// type Props = ComponentProps<"button"> & VariantProps<typeof buttonTailwind>;

export type Props = ComponentProps<"input"> & {
  disabled?: boolean;
  placeholder?: string;
  width?: string;
  height?: string;
  ref?: React.Ref<HTMLInputElement>;
};

const Input = forwardRef(
  (
    {
      disabled = false,
      placeholder = "",
      isRequired = false,
      width = SIZE.SMALL,
      value,
      height = "40px",
      error = false,
      ...elementProps
    }: Props,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <input
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        className={buttonTailwind({
          style: error ? "error" : "primary",
          size: width,
          height,
        })}
        {...elementProps}
      />
    );
  }
);

export default Button;
