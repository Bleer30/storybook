import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    variants: {
      control: 'select',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variants: 'primary',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variants: 'secondary',
    disabled: false,
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variants: 'destructive',
    disabled: false,
  },
};
