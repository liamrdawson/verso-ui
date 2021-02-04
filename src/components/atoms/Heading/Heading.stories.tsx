import * as React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Atoms/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component:
          'The heading tag is used in HTML to define headings of a page.'
      }
    }
  },
  argTypes: {
    element: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4']
      }
    }
  }
} as Meta

const HeadingTemplate: Story<HeadingProps> = (args) => <Heading {...args} />
export const HeadingLevel = HeadingTemplate.bind({})
HeadingLevel.args = {
  children: 'The quick brown fox jumps over the lazy dog.',
  element: 'h1'
}
