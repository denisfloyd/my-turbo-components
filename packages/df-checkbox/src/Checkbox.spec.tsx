import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  it('renders correctly enabled checkbox', () => {
    render(<Checkbox id='checkbox-1' />);
    expect(screen.getByTestId('checkbox-container-checkbox-1')).toMatchInlineSnapshot(`
      <div
        class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"
        data-testid="checkbox-container-checkbox-1"
      >
        <input
          class="relative float-left -ml-[1.5rem] mt-[0.2rem] h-[1.125rem] w-[1.125rem] cursor-pointer appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-white indeterminate:after:absolute indeterminate:after:ml-[0.2rem] indeterminate:after:mt-[6px] indeterminate:after:w-[0.5rem] indeterminate:after:border-[0.075rem] indeterminate:after:border-white focus:transition-[border-color_0.2s] indeterminate:focus:after:border-[0.125rem] indeterminate:focus:after:border-b-0 checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600"
          id="checkbox-1"
          type="checkbox"
          value=""
        />
      </div>
    `);
  });

  it('renders correctly disabled checkbox', () => {
    render(<Checkbox id='checkbox-1' label='Hello' disabled />);

    expect(screen.getByRole('checkbox')).toBeDisabled();
    expect(screen.getByRole('checkbox')).toHaveClass('cursor-not-allowed opacity-50');
  });

  it('should assign unique ids to each checkbox if multiple checkboxes are rendered without specific ids', () => {
    render(
      <>
        <Checkbox id='checkbox-1' />
        <Checkbox id='checkbox-2' />
      </>,
    );

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(2);
    const ids: string[] = Array.from(checkboxes).map(checkbox => checkbox.id);
    const uniqueIds = Array.from(new Set(ids));
    expect(ids).toStrictEqual(uniqueIds);
  });

  it('should render a label if a label property is passed in', () => {
    render(<Checkbox id='checkbox-1' label='Hello' />);

    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('should triggers onChange when the fake checkbox is clicked', async () => {
    const onChangeSpy = jest.fn();
    render(<Checkbox id='checkbox-1' onChange={onChangeSpy} />);

    userEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onChangeSpy).toHaveBeenCalled();
    });
  });
});
