import { Meta, Story } from '@storybook/react/types-6-0'

import { jsx } from '@emotion/react'
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  ButtonTypes,
} from './Buttons'

export default {
  title: 'Components/Atoms/Button',
  component: PrimaryButton,
  parameters: {
    docs: {
      description: {
        component: 'New buttons for new things',
      },
    },
  },
} as Meta

const PrimaryTemplate: Story<ButtonTypes> = (args) => (
  <PrimaryButton {...args} />
)
export const Primary = PrimaryTemplate.bind({})
Primary.args = {
  label: 'Primary Button',
}

const SecondaryTemplate: Story<ButtonTypes> = (args) => (
  <SecondaryButton {...args} />
)
export const Secondary = SecondaryTemplate.bind({})
Secondary.args = {
  label: 'Secondary Button',
}

const TertiaryTemplate: Story<ButtonTypes> = (args) => (
  <TertiaryButton {...args} />
)
export const Tertiary = TertiaryTemplate.bind({})
Tertiary.args = {
  label: 'Tertiary Button',
}
