import Input from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Basic UI Components/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    height: { control: 'select', options: ['sm', 'md', 'lg', 'full'] },
    width: { control: 'select', options: ['sm', 'md', 'lg', 'full'] },
    state: { control: 'select', options: ['normal', 'error', 'required'] },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean', name: 'Is Disabled field ?' },
    error: { control: 'boolean', name: 'Is field contain error ?' },
    isRequired: { control: 'boolean', name: 'Is required field ?' },
    value: { control: 'text', name: 'Value' },
    type: { control: 'select', options: ['text', 'number', 'password'] },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    height: 'md',
    width: 'md',
  },
};

export const Disabled = {
  args: {
    height: 'md',
    width: 'md',
    value: 'Disabled',
    disabled: true,
  },
};

export const Error = {
  args: {
    height: 'md',
    width: 'md',
    error: true,
  },
};

export const Required = {
  args: {
    height: 'md',
    width: 'md',
    isRequired: true,
  },
};
