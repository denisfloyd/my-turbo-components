import { render, screen } from '@testing-library/react';

import Button from './Button';
import ButtonGroup from './ButtonGroup';

describe('Button Group', () => {
  it('show render button group with buttons children', () => {
    render(
      <ButtonGroup>
        <Button>Hello</Button>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </ButtonGroup>,
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
    expect(screen.getByRole('group')).toMatchInlineSnapshot(`
      <div
        class="[&>button]:margin-0 inline-block whitespace-nowrap border-0 shadow-sm [&>button:first-of-type]:rounded-l-md [&>button:last-of-type]:rounded-r-md [&>button]:rounded-none"
        role="group"
      >
        <button
          class="relative cursor-pointer rounded border-0 px-4 py-2 text-slate-50 transition-all duration-1000 bg-blue-700 outline-blue-700 hover:bg-blue-600 text-base"
        >
          Hello
        </button>
        <button
          class="relative cursor-pointer rounded border-0 px-4 py-2 text-slate-50 transition-all duration-1000 bg-blue-700 outline-blue-700 hover:bg-blue-600 text-base"
        >
          Hello
        </button>
        <button
          class="relative cursor-pointer rounded border-0 px-4 py-2 text-slate-50 transition-all duration-1000 bg-blue-700 outline-blue-700 hover:bg-blue-600 text-base"
        >
          Hello
        </button>
      </div>
    `);
    expect(screen.getAllByRole('button')).toHaveLength(3);
  });

  it('should apply same width to all buttons when buttonsHasSameWidth prop is passed', () => {
    render(
      <ButtonGroup buttonsHasSameWidth>
        <Button>Hello</Button>
        <Button>Hello --</Button>
        <Button>Hello ---</Button>
      </ButtonGroup>,
    );

    expect(screen.getByRole('group')).toHaveClass('flex');
    expect(screen.getByRole('group')).toHaveClass('[&>button]:flex-1');
  });
});
