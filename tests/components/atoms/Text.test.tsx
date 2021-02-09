import { jsx } from '@emotion/react'
import renderer from 'react-test-renderer'
import { Text } from 'src/components'

test('Snapshot Test: Text', () => {
  const component = renderer.create(
    <Text element="a" fontWeight="light" fontSize="medium">
      I am a string
    </Text>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot Test: Text', () => {
  const component = renderer.create(
    <Text element="p" fontWeight="medium" fontSize="large">
      I am a string
    </Text>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
