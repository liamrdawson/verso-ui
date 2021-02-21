import React from 'react'
import { jsx } from '@emotion/react'
import {render} from '@testing-library/react'
import { TextInput, TextArea } from '../../../src'

test('Snapshot Test: TextInput', () => {
  const {container} = render(
    <TextInput
      type="text"
      label="Text input label"
    />,
  )
  expect(container).toMatchSnapshot()
})

test('Snapshot Test: TextArea', () => {
  const {container} = render(
    <TextArea
      label="Secondary Button"
    />,
  )
  expect(container).toMatchSnapshot()
  })