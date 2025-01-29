import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SwitchInput } from './SwitchInput';


const meta = {
   title: 'ui-kit/SwitchInput',
   component: SwitchInput,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   args: { onChange: fn() },
} satisfies Meta<typeof SwitchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
   args: {
      id: 'switch',
      name: 'normal',
      value: 'test',
      checked: false,
      disabled: false,
      required: false,
   },
};

export const Disabled: Story = {
   args: {
      id: 'switch',
      name: 'disabled',
      value: 'test',
      checked: false,
      disabled: true,
      required: false,
   },
};

export const Required: Story = {
   args: {
      id: 'switch',
      name: 'required',
      value: 'test',
      checked: false,
      disabled: false,
      required: true,
   },
};


