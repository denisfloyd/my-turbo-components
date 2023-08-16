import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Basic UI Components/Button',
  component: Button,
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
      options: ['primary', 'success', 'error', 'borderless'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    children: { control: '', name: 'Label' },
    isOutline: { control: 'boolean', name: 'Outline Button' },
    isPending: { control: 'boolean', name: 'Pending State' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryStyle = {
  args: {
    style: 'primary',
    children: 'Button',
  },
};

export const Bordeless = {
  args: {
    children: 'Button',
    style: 'borderless',
  },
};

export const OutlineStyle = {
  args: {
    style: 'primary',
    children: 'Button',
    isOutline: true,
  },
};

export const Disabled = {
  args: {
    children: 'Button',
    style: 'primary',
    disabled: true,
  },
};

export const PendingState = {
  args: {
    children: 'Button',
    style: 'primary',
    isPending: true,
  },
};
