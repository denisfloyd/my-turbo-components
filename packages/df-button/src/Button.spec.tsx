import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Button', () => {
  it('should render Button Label', () => {
    render(<Button>Hello</Button>);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
