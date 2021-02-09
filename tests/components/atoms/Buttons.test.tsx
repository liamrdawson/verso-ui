import { jsx } from '@emotion/react'
import renderer from 'react-test-renderer'
import { PrimaryButton, SecondaryButton, TertiaryButton } from '../../../src'
import { defaultTheme } from '../../../src/themes'

test('Snapshot Test: Primary Button', () => {
  const component = renderer.create(
    <PrimaryButton
      isDisabled={false}
      label="Primary Button"
      theme={defaultTheme}
    />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot Test: Secondary Button', () => {
  const component = renderer.create(
    <SecondaryButton
      isDisabled={false}
      label="Secondary Button"
      theme={defaultTheme}
    />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot Test: Tertiary Button', () => {
  const component = renderer.create(
    <TertiaryButton
      isDisabled={false}
      label="Tertiary Button"
      theme={defaultTheme}
    />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
