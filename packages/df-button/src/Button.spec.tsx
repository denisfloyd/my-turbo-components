import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

describe('Button', () => {
  it('should render Button Label', () => {
    render(<Button>Hello</Button>);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('should trigger on click when clicking on button', async () => {
    const onClickSpy = jest.fn();
    render(<Button onClick={onClickSpy}>Hello</Button>);

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(onClickSpy).toHaveBeenCalled();
    });
  });

  [
    { style: 'primary', class: 'bg-blue-700' },
    { style: 'success', class: 'bg-emerald-700' },
    { style: 'error', class: 'bg-red-700' },
    { style: 'borderless', class: 'bg-transparent' },
  ].forEach(({ style, class: className }) => {
    it(`should render button ${style} style`, () => {
      render(<Button buttonStyle={style as any}>Hello</Button>);

      expect(screen.getByRole('button')).toHaveClass(className);
    });
  });

  (
    [
      { size: 'sm', class: 'text-sm' },
      { size: 'md', class: 'text-base' },
      { size: 'lg', class: 'text-lg' },
    ] as const
  ).forEach(({ size, class: className }) => {
    it(`should render button ${size} size`, () => {
      render(<Button size={size}>Hello</Button>);

      expect(screen.getByRole('button')).toHaveClass(className);
    });
  });

  it('should render an outline button', () => {
    render(<Button isOutline>Hello</Button>);

    expect(screen.getByRole('button')).toHaveClass('bg-white');
    expect(screen.getByRole('button')).toHaveClass('text-textColor');
  });

  it('should apply disable style to button', () => {
    render(<Button disabled>Hello</Button>);

    expect(screen.getByRole('button')).toHaveClass('cursor-default');
    expect(screen.getByRole('button')).toHaveClass('opacity-50');
  });

  it('should render Button disable when button is pending', () => {
    render(<Button isPending>Hello</Button>);

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
