import React from 'react' // TODO:  TS warnings get produced as this is you don't need to import react anymore to use JSX, what can we do to mute this warning? https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports
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
