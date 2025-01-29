import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { RadioInput } from './RadioInput';


const meta = {
   title: 'ui-kit/RadioInput',
   component: RadioInput,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   args: { onChange: fn() },
} satisfies Meta<typeof RadioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
   args: {
      id: 'male',
      name: 'gender',
      value: 'male',
      defaultChecked: false,
      disabled: false,
      required: false,
   },
};

export const Checked: Story = {
   args: {
      id: 'male',
      name: 'gender',
      value: 'male',
      defaultChecked: true,
      disabled: false,
      required: false,
   },
};

export const Disabled: Story = {
   args: {
      id: 'male',
      name: 'gender',
      value: 'male',
      defaultChecked: false,
      disabled: true,
      required: false,
   },
};

export const Required: Story = {
   args: {
      id: 'male',
      name: 'gender',
      value: 'male',
      defaultChecked: false,
      disabled: false,
      required: true,
   },
};