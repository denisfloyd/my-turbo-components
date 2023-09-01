/* eslint-disable react/react-in-jsx-scope */
import Checkbox from '../Checkbox';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
  title: 'Basic UI Components/Checkbox',
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    style: {
      control: 'select',
      options: ['primary', 'success'],
    },
    label: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
  },
  args: {
    checkboxStyle: 'primary',
    label: 'Checkbox',
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryStyle: Story = {
  args: {
    checkboxStyle: 'primary',
  },
};

export const SuccessStyle: Story = {
  args: {
    checkboxStyle: 'success',
  },
};
