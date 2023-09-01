import React, { ComponentProps, forwardRef } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const buttonTailwind = tv({
  slots: {
    base: 'rounded border-[1px] px-4 py-0 text-sm focus:outline-none disabled:cursor-not-allowed disabled:text-slate-500 dark:bg-slate-900 dark:text-slate-50 dark:disabled:text-slate-500',
  },
  variants: {
    state: {
      normal: 'border-slate-400',
      required: 'border-orange-400',
      error: 'border-red-400',
    },
    width: {
      sm: 'w-24',
      md: 'w-48',
      lg: 'w-96',
      full: 'w-full',
    },
    height: {
      sm: 'h-5',
      md: 'h-10',
      lg: 'h-16',
    },
  },
  defaultVariants: {
    state: 'normal',
    width: 'md',
    height: 'md',
  },
});

const getInputStateStyle = (
  error: boolean,
  isRequired: boolean,
  value: string | number | readonly string[] | undefined,
): VariantProps<typeof buttonTailwind>['state'] => {
  if (error) {
    return 'error';
  }

  if (isRequired && (!value || (value && value === ''))) {
    return 'required';
  }

  return 'normal';
};

export type Props = ComponentProps<'input'> &
  VariantProps<typeof buttonTailwind> & {
    isRequired?: boolean;
    error?: boolean;
    ref?: React.Ref<HTMLInputElement>;
  };

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      disabled = false,
      placeholder = '',
      isRequired = false,
      value,
      error = false,
      height,
      width,
      state,
      className,
      type = 'text',
      ...props
    },
    ref,
  ) => {
    const { base } = buttonTailwind({
      width,
      height,
      state: state || getInputStateStyle(error, isRequired, value),
    });

    return (
      <input
        className={base({ className })}
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        {...(type === 'number' ? { step: 1 } : {})}
        ref={ref}
        width={width}
        height={height}
        value={value}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export default Input;
