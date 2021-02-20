import { jsx } from '@emotion/react'
import {render} from '@testing-library/react'
import { Text } from '../../../src'

test('Snapshot Test: Text', () => {
  const {container} = render(
    <Text element="a" fontWeight="light" fontSize="medium">
      I am a string
    </Text>,
  )
  expect(container).toMatchSnapshot()
})

test('Snapshot Test: Text', () => {
  const {container} = render(
    <Text element="p" fontWeight="medium" fontSize="large">
      I am a string
    </Text>,
  )
  expect(container).toMatchSnapshot()
})
