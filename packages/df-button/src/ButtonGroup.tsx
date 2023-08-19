import * as React from 'react';
import { tv } from 'tailwind-variants';

const buttonGroupTailwind = tv({
  slots: {
    base: '[&>button]:margin-0 inline-block whitespace-nowrap border-0 shadow-sm [&>button:first-of-type]:rounded-l-md [&>button:last-of-type]:rounded-r-md [&>button]:rounded-none',
  },
  variants: {
    buttonsHasSameWidth: {
      true: '[&>button]:overflow:hidden flex [&>button]:flex-1 [&>button]:text-ellipsis [&>button]:whitespace-nowrap',
    },
  },
  defaultVariants: {
    buttonsHasSameWidth: false,
  },
});

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  buttonsHasSameWidth?: boolean;
}

const ButtonGroup = ({ buttonsHasSameWidth = false, className, children }: Props) => {
  const { base } = buttonGroupTailwind({ buttonsHasSameWidth });
  return (
    <div className={base({ className })} role='group'>
      {children}
    </div>
  );
};

export default ButtonGroup;
