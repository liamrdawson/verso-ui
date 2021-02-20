import React from 'react'
import { jsx } from '@emotion/react'
import {render} from '@testing-library/react'
import { PrimaryButton, SecondaryButton, TertiaryButton } from '../../../src'
import { defaultTheme } from '../../../src/themes'

test('Snapshot Test: Primary Button', () => {
  const {container} = render(
    <PrimaryButton
      isDisabled={false}
      label="Primary Button"
      theme={defaultTheme}
    />
  )
  expect(container).toMatchSnapshot()
})

test('Snapshot Test: Secondary Button', () => {
  const {container} = render(
    <SecondaryButton
      isDisabled={false}
      label="Secondary Button"
      theme={defaultTheme}
    />,
  )
  expect(container).toMatchSnapshot()
})

test('Snapshot Test: Tertiary Button', () => {
  const {container} = render(
    <TertiaryButton
      isDisabled={false}
      label="Tertiary Button"
      theme={defaultTheme}
    />,
  )
  expect(container).toMatchSnapshot()
})
