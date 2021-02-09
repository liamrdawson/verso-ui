import React from 'react'
import { jsx } from '@emotion/react'
import renderer from 'react-test-renderer'
import { TextInput, TextArea } from '../../../src'

test('Snapshot Test: TextInput', () => {
  const component = renderer.create(
    <TextInput
      type="text"
      label="Text input label"
    />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot Test: TextArea', () => {
  const component = renderer.create(
    <TextArea
      label="Secondary Button"
    />,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
