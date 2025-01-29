import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { TextInput } from './TextInput';

const meta = {
   title: 'ui-kit/TextInput',
   component: TextInput,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   args: { onChange: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
   args: {
      placeholder: 'Basic Input',
      type: 'text',
      disabled: false,
   },
};

export const Disabled: Story = {
   args: {
      placeholder: 'Disabled',
      type: 'text',
      disabled: true,
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