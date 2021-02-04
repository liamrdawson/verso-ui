import * as React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { TextInput, TextArea, FormTypes } from './FormInput'

export default {
  title: 'Components/Atoms/FormInput',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: 'An input for inputting things'
      }
    }
  }
} as Meta

const TextInputTemplate: Story<FormTypes> = (args) => <TextInput {...args} />
export const FormInput = TextInputTemplate.bind({})
FormInput.args = {
  label: 'I am a label',
  type: 'text'
}

const TextAreaTemplate: Story<FormTypes> = (args) => <TextArea {...args} />
export const TextAreaInput = TextAreaTemplate.bind({})
TextAreaInput.args = {
  label: 'I am a label'
}
