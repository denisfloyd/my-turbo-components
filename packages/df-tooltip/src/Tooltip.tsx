import * as React from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const tooltipTailwind = tv({
  slots: {
    group: 'group relative',
    container: 'absolute hidden group-hover:flex',
    content:
      'relative z-10 min-w-[150px] max-w-xs rounded-sm text-xs leading-none text-slate-50 shadow-lg',
    arrow: 'absolute -mt-2 h-3 w-3',
  },
  variants: {
    placement: {
      top: {
        container: 'left-1/2 top-0 -translate-x-1/2 -translate-y-full transform pb-2',
        arrow: 'bottom-0 left-1/2 mb-2 -translate-x-1/2 translate-y-[3px] rotate-45 transform',
      },
      bottom: {
        group: 'pb-2',
        container: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full transform',
        arrow: 'left-1/2 top-0 -translate-x-1/2 translate-y-[3px] rotate-45 transform',
      },
    },
    type: {
      default: {
        content: 'bg-slate-900',
        arrow: 'bg-slate-900',
      },
      error: {
        content: 'bg-red-700',
        arrow: 'bg-red-700',
      },
    },
  },
  defaultVariants: {
    placement: 'top',
    type: 'default',
  },
});

export type Props = VariantProps<typeof tooltipTailwind> & { children: React.ReactNode } & {
  content: React.ReactNode;
};

const Tooltip = ({ content: tooltipContent, children, placement, type }: Props) => {
  const { group, container, content, arrow } = tooltipTailwind({
    placement,
    type,
  });

  return (
    <div className={group()}>
      {children}
      <div className={container()}>
        <span className={content({ className: typeof tooltipContent === 'string' ? 'p-2' : '' })}>
          {tooltipContent}
        </span>
        <div className={arrow()} />
      </div>
    </div>
  );
};
Tooltip.displayName = 'Tooltip';

export default Tooltip;
