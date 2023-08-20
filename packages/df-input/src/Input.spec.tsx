import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('should render input component', () => {
    render(<Input />);

    const input = screen.getByRole('textbox');
    expect(input).toMatchInlineSnapshot(`
      <input
        class="rounded border-[1px] px-4 py-0 text-sm focus:outline-none disabled:cursor-not-allowed disabled:text-slate-500 dark:bg-slate-900 dark:text-slate-50 dark:disabled:text-slate-500 border-slate-400 w-48 h-10"
        placeholder=""
        type="text"
        value=""
      />
    `);
  });

  (
    [
      { width: 'sm', class: 'w-24' },
      { width: 'md', class: 'w-48' },
      { width: 'lg', class: 'w-96' },
      { width: 'full', class: 'w-full' },
    ] as const
  ).forEach(({ width, class: className }) => {
    it(`should render input ${width} width`, () => {
      render(<Input width={width} />);

      expect(screen.getByRole('textbox')).toHaveClass(className);
    });
  });

  (
    [
      { height: 'sm', class: 'h-5' },
      { height: 'md', class: 'h-10' },
      { height: 'lg', class: 'h-16' },
    ] as const
  ).forEach(({ height, class: className }) => {
    it(`should render input ${height} height`, () => {
      render(<Input height={height} />);

      expect(screen.getByRole('textbox')).toHaveClass(className);
    });
  });

  it('should apply disable style then input is disabled', () => {
    render(<Input disabled />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('disabled:cursor-not-allowed');
    expect(input).toHaveClass('disabled:text-slate-500');
  });

  it('should not apply require style when input is require and value is not empty', () => {
    render(<Input isRequired value='value' onChange={() => jest.fn()} />);

    expect(screen.getByRole('textbox')).not.toHaveClass('border-orange-400');
  });

  it('should apply require style when input is require and value is empty', () => {
    render(<Input isRequired />);

    expect(screen.getByRole('textbox')).toHaveClass('border-orange-400');
  });

  it('should apply error style when there is an error on input', () => {
    render(<Input error />);

    expect(screen.getByRole('textbox')).toHaveClass('border-red-400');
  });

  it('should apply state class regardless any other style prop passed', () => {
    render(<Input state='normal' isRequired error />);

    expect(screen.getByRole('textbox')).not.toHaveClass('border-red-400');
    expect(screen.getByRole('textbox')).not.toHaveClass('border-orange-400');
  });
});
