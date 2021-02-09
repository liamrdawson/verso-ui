import { jsx } from '@emotion/react'
import renderer from 'react-test-renderer'
import { Heading } from 'src/components'

test('Snapshot Test: Heading Level One', () => {
  const component = renderer.create(
    <Heading element="h1">Heading Level One</Heading>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot Test: Heading Level Two', () => {
  const component = renderer.create(
    <Heading element="h2">Heading Level One</Heading>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot Test: Heading Level Three', () => {
  const component = renderer.create(
    <Heading element="h3">Heading Level One</Heading>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot Test: Heading Level Four', () => {
  const component = renderer.create(
    <Heading element="h4">Heading Level One</Heading>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
