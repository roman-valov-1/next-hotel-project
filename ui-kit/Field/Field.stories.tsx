import type { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';
import { TextInput } from '../TextInput/TextInput';
import { RadioInput } from '../RadioInput/RadioInput';
import { SwitchInput } from '../SwitchInput/SwitchInput';


const meta = {
   title: 'ui-kit/Field',
   component: Field,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
   args: {
      direction: 'row',
      gap: 7,
      children: [
         <div><b>TITLE:</b></div>,
         <TextInput placeholder='Type...'/>
      ]
   },
};

export const Column: Story = {
   args: {
      direction: 'column',
      gap: 5,
      children: [
         <div><b>TITLE:</b></div>,
         <TextInput placeholder='Type...'/>
      ]
   },
};

export const WithRadio: Story = {
   args: {
      direction: 'row',
      gap: 10,
      children: [
         <div><b>Radio</b></div>,
         <RadioInput id='male' name='gender' value='male' onChange={ (e) => console.log(e)}/> ,
         <RadioInput id='female' name='gender' value='female' onChange={ (e) => console.log(e)}/>
      ]
   },
};


export const WithSwitch: Story = {
   args: {
      direction: 'row',
      gap: 5,
      children: [
         <div><b>TITLE:</b></div>,
         <SwitchInput id='switch' name='switch'/>
      ]
   },
};

