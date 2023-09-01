import * as React from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const checkBoxTailwind = tv({
  slots: {
    base: 'relative float-left -ml-[1.5rem] mt-[0.2rem] h-[1.125rem] w-[1.125rem] cursor-pointer appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-white indeterminate:after:absolute indeterminate:after:ml-[0.2rem] indeterminate:after:mt-[6px] indeterminate:after:w-[0.5rem] indeterminate:after:border-[0.075rem] indeterminate:after:border-white focus:transition-[border-color_0.2s] indeterminate:focus:after:border-[0.125rem] indeterminate:focus:after:border-b-0',
    text: 'cursor-normal inline-block text-slate-800 dark:text-slate-50',
  },
  variants: {
    checkboxStyle: {
      primary: {
        base: 'checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600',
      },
      success: {
        base: 'checked:border-emerald-600 checked:bg-emerald-600 indeterminate:border-emerald-600 indeterminate:bg-emerald-600',
      },
    },
    isDisabled: {
      true: {
        base: 'cursor-not-allowed opacity-50',
        text: 'cursor-not-allowed opacity-50',
      },
    },
  },
  defaultVariants: {
    checkboxStyle: 'primary',
    isDisabled: false,
  },
});

export type Props = React.ComponentProps<'input'> &
  VariantProps<typeof checkBoxTailwind> & {
    id: string;
    label?: string;
    indeterminate?: boolean;
  };

const Checkbox = ({
  id,
  checkboxStyle,
  className,
  disabled,
  checked,
  label,
  indeterminate = false,
  ...props
}: Props) => {
  const { base, text } = checkBoxTailwind({
    checkboxStyle,
    isDisabled: disabled,
  });

  return (
    <div
      className='mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]'
      data-testid={`checkbox-container-${id}`}
    >
      <input
        className={base({ className })}
        type='checkbox'
        value=''
        id={id}
        checked={checked}
        disabled={disabled}
        {...props}
        // eslint-disable-next-line no-return-assign, no-param-reassign
        ref={el => el && (el.indeterminate = indeterminate && !checked)}
      />
      {!!label && (
        <label className={text()} htmlFor='checkboxDefault'>
          {label}
        </label>
      )}
    </div>
  );
};
Checkbox.displayName = 'Checkbox';

export default Checkbox;
