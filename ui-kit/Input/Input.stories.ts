import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Input } from './Input';

const meta = {
   title: 'ui-kit/Input',
   component: Input,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
   args: {
      placeholder: 'Basic Input',
      type: 'text',
      disabled: false,
   },
};

export const Password: Story = {
   args: {
      placeholder: 'Password Input',
      type: 'password',
      disabled: false,
   },
};

export const WithTitle: Story = {
   args: {
      placeholder: 'With Title Input',
      type: 'text',
      title: 'Name',
      disabled: false,
   },
};