import Button from '../Button';
import ButtonGroupComp from '../ButtonGroup';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
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
    buttonStyle: {
      control: 'select',
      options: ['primary', 'success', 'error', 'borderless'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    children: { control: '', name: 'Label' },
    isOutline: { control: 'boolean', name: 'Outline Button' },
    isPending: { control: 'boolean', name: 'Pending State' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PrimaryStyle: Story = {
  args: {
    buttonStyle: 'primary',
    children: 'Button',
  },
};

export const Bordeless: Story = {
  args: {
    children: 'Button',
    buttonStyle: 'borderless',
  },
};

export const OutlineStyle: Story = {
  args: {
    buttonStyle: 'primary',
    children: 'Button',
    isOutline: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    buttonStyle: 'primary',
    disabled: true,
  },
};

export const PendingState: Story = {
  args: {
    children: 'Button',
    buttonStyle: 'primary',
    isPending: true,
  },
};

/* eslint-disable react/no-children-prop */
export const ButtonGroup: Story = {
  // name: 'Button Group with same button sizes',
  render: args => (
    <div style={{ width: '400px', display: 'flex', justifyContent: 'center' }}>
      <ButtonGroupComp>
        <Button {...args} children={`${args.children} 1`} />
        <Button {...args} children={`${args.children} 12`} />
        <Button {...args} children={`${args.children} 123`} />
      </ButtonGroupComp>
    </div>
  ),
  args: {
    children: 'Button',
    buttonStyle: 'primary',
  },
};

/* eslint-disable react/no-children-prop */
export const ButtonGroupWithSameSize: Story = {
  // name: 'Button Group with same button sizes',
  render: args => (
    <div style={{ width: '400px' }}>
      <ButtonGroupComp buttonsHasSameWidth>
        <Button {...args} children={`${args.children} 1`} />
        <Button {...args} children={`${args.children} 12`} />
        <Button {...args} children={`${args.children} 123`} />
      </ButtonGroupComp>
    </div>
  ),
  args: {
    children: 'Button',
    buttonStyle: 'primary',
  },
};
