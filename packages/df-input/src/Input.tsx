import { ComponentProps, forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonTailwind = tv({
  slots: {
    base: "py-0 px-4 rounded text-sm border-[1px] focus:outline-none dark:bg-slate-900 dark:text-slate-100 dark:disabled:text-slate-500 disabled:text-slate-500 disabled:cursor-not-allowed",
  },
  variants: {
    state: {
      normal: "border-slate-400",
      required: "border-orange-400",
      error: "border-red-400",
    },
    width: {
      sm: "w-24",
      md: "w-48",
      lg: "w-96",
      full: "w-full",
    },
    height: {
      sm: "h-5",
      md: "h-10",
      lg: "h-16",
      full: "w-full",
    },
  },
  defaultVariants: {
    state: "normal",
    width: "md",
    height: "md",
  },
});

const getInputStateStyle = (
  error: boolean,
  isRequired: boolean,
  value: string | number | readonly string[] | undefined
): VariantProps<typeof buttonTailwind>["state"] => {
  if (error) {
    return "error";
  }

  if (isRequired && (!value || (value && value === ""))) {
    return "required";
  }
};

export type Props = ComponentProps<"input"> &
  VariantProps<typeof buttonTailwind> & {
    isRequired?: boolean;
    width?: string;
    height?: string;
    error?: boolean;
    ref?: React.Ref<HTMLInputElement>;
  };

const Input: React.ForwardRefExoticComponent<Props> = forwardRef(
  (
    {
      disabled = false,
      placeholder = "",
      isRequired = false,
      value,
      error = false,
      height,
      width,
      state,
      className,
      type = "text",
      ...props
    }: Props,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const { base } = buttonTailwind({
      width,
      height,
      state: getInputStateStyle(error, isRequired, value),
    });

    return (
      <input
        className={base({ className })}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        {...(type === "number" ? { step: 1 } : {})}
        ref={ref}
        width={width}
        height={height}
        value={value}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
