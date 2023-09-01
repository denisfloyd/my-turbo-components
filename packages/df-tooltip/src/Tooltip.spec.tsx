/* eslint-disable testing-library/no-node-access */
import { render, screen } from '@testing-library/react';

import Tooltip from './Tooltip';

const ChildComponent = () => <button>Hover me!</button>;

describe('Tooltip', () => {
  it('should render tooltip component', () => {
    render(
      <Tooltip content='Tooltip content'>
        <ChildComponent />
      </Tooltip>,
    );

    expect(screen.getByTestId('group-tooltip')).toMatchInlineSnapshot(`
      <div
        class="group relative"
        data-testid="group-tooltip"
      >
        <button>
          Hover me!
        </button>
        <div
          class="absolute rounded-sm text-slate-50 opacity-0 shadow-lg transition-opacity duration-200 ease-in-out group-hover:opacity-100 -top-[8px] left-1/2 -translate-x-1/2 -translate-y-full transform bg-slate-700 p-2"
        >
          <span
            class="relative z-10 line-clamp-4 w-max max-w-xs text-xs leading-none"
            role="tooltip"
          >
            Tooltip content
          </span>
          <div
            class="absolute h-3 w-3 bottom-0 left-1/2 -translate-x-1/2 translate-y-[3px] rotate-45 transform bg-slate-700"
          />
        </div>
      </div>
    `);
  });

  it('should render tooltip component with error type', () => {
    render(
      <Tooltip content='Tooltip content' tooltipStyle='error'>
        <ChildComponent />
      </Tooltip>,
    );

    expect(screen.getByRole('tooltip').parentElement).toHaveClass('bg-red-700');
  });

  it('should render a custom tooltip content', () => {
    render(
      <Tooltip content={<span>Tooltip content</span>}>
        <ChildComponent />
      </Tooltip>,
    );

    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip content');
    expect(screen.getByRole('tooltip').parentElement).not.toHaveClass('p-2');
  });

  describe('Placements', () => {
    (
      [
        { placement: 'top', class: '-top-[8px]', arrowClass: 'bottom-0' },
        { placement: 'bottom', class: '-bottom-[8px]', arrowClass: 'top-0' },
        { placement: 'right', class: '-right-[8px]', arrowClass: 'left-0' },
        { placement: 'left', class: '-left-[8px]', arrowClass: 'right-0' },
      ] as const
    ).forEach(({ placement, class: className, arrowClass }) => {
      it(`should render tooltip with placement ${placement}`, () => {
        render(
          <Tooltip content='Tooltip content' placement={placement}>
            <ChildComponent />
          </Tooltip>,
        );

        expect(screen.getByRole('tooltip').parentElement).toHaveClass(className);
        expect(screen.getByRole('tooltip').nextElementSibling).toHaveClass(arrowClass);
      });
    });
  });
});
