import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'information', 'success', 'danger', 'warning'],
    },
  },
} satisfies Meta;

export default meta;
export type Story = StoryObj<typeof Callout>;

export const Primary: Story = { args: { title: 'Primary', variant: 'primary' } };
export const information: Story = { args: { title: 'information', variant: 'information' } };
export const success: Story = { args: { title: 'success', variant: 'success' } };
export const danger: Story = { args: { title: 'danger', variant: 'danger' } };
export const warning: Story = { args: { title: 'warning', variant: 'warning' } };
