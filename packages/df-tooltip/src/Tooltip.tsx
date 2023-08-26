import * as React from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const tooltipTailwind = tv({
  slots: {
    group: 'group relative',
    container:
      'absolute rounded-sm text-slate-50 opacity-0 shadow-lg transition-opacity duration-200 ease-in-out group-hover:opacity-100',
    content: 'relative z-10 line-clamp-4 w-max max-w-xs text-xs leading-none',
    arrow: 'absolute h-3 w-3',
  },
  variants: {
    placement: {
      top: {
        container: '-top-[8px] left-1/2 -translate-x-1/2 -translate-y-full transform',
        arrow: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-[3px] rotate-45 transform',
      },
      bottom: {
        container: '-bottom-[8px] left-1/2 -translate-x-1/2 translate-y-full transform',
        arrow: 'left-1/2 top-0 -translate-x-1/2 -translate-y-[3px] rotate-45 transform',
      },
      left: {
        container: '-left-[8px] top-1/2 -translate-x-full -translate-y-1/2 transform',
        arrow: 'right-0 top-1/2 -translate-y-1/2 translate-x-[3px] rotate-45 transform',
      },
      right: {
        container: '-right-[8px] top-1/2 -translate-y-1/2 translate-x-full transform',
        arrow: 'left-0 top-1/2 -translate-x-[3px] -translate-y-1/2 rotate-45 transform',
      },
    },
    type: {
      default: {
        container: 'bg-slate-700',
        arrow: 'bg-slate-700',
      },
      error: {
        container: 'bg-red-700',
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

  const tooltipContentIsString = typeof tooltipContent === 'string';

  return (
    <div className={group()} data-testid='group-tooltip'>
      {children}
      <div className={container({ className: tooltipContentIsString ? 'p-2' : '' })}>
        <span className={content()} role='tooltip'>
          {tooltipContent}
        </span>
        <div className={arrow()} />
      </div>
    </div>
  );
};
Tooltip.displayName = 'Tooltip';

export default Tooltip;
