import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Text, TextProps } from './index'

export default {
  title: 'Components/Atoms/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          'The Text component renders its children and applies standard font styling. It receives two props `fontSize` and `fontWeight`.'
      }
    }
  },
  argTypes: {
    element: {
      control: {
        type: 'select',
        options: ['p', 'a']
      }
    },
    fontSize: {
      control: {
        type: 'select',
        options: ['small', 'normal', 'caption', 'medium', 'large']
      }
    },
    fontWeight: {
      control: {
        type: 'select',
        options: ['light', 'medium', 'bold', 'black']
      }
    },
    css: {
      table: {
        disable: true
      }
    },
    additionalStyles: {
      table: {
        disable: true
      }
    }
  }
} as Meta

const TextTemplate: Story<TextProps> = (args) => <Text {...args} />
export const TextComponent = TextTemplate.bind({})
TextComponent.args = {
  children: 'The quick brown fox jumps over the lazy dog.',
  fontSize: 'normal',
  fontWeight: 'light',
  element: 'p'
}
