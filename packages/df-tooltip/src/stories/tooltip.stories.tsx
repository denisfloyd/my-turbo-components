import Tooltip from '../Tooltip';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tooltip> = {
  title: 'Basic UI Components/Tooltip',
  component: Tooltip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: {
      control: 'select',
      name: 'Group component',
      description: 'Examples of child component',
      options: ['Button', 'Text'],
      mapping: {
        Button: (
          <button className='flex h-8 items-center rounded bg-blue-700 p-3 text-slate-100'>
            Hello
          </button>
        ),
        Text: <span>Hello</span>,
      },
    },
    content: {
      control: 'text',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    tooltipStyle: {
      control: 'radio',
      options: ['default', 'error'],
    },
  },
  args: {
    children: 'Button',
    placement: 'top',
    tooltipStyle: 'default',
    content: 'Tooltip content',
  },
  decorators: [
    Story => (
      <div style={{ height: '200px', display: 'flex', alignItems: 'center' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DefaultStyle: Story = {
  args: {
    children: 'Button',
    placement: 'top',
    tooltipStyle: 'default',
    content: 'Tooltip content',
  },
};

export const ErrorStyle: Story = {
  args: {
    children: 'Button',
    placement: 'top',
    tooltipStyle: 'error',
    content: 'Tooltip content',
  },
};
