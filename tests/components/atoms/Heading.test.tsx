import React from 'react'
import { jsx } from '@emotion/react'
import {render} from '@testing-library/react'
import { Heading } from '../../../src'

test('Snapshot Test: Heading Level One', () => {
  const {container} = render(
    <Heading element="h1">Heading Level One</Heading>,
  )
  expect(container).toMatchSnapshot()
})

test('Snapshot Test: Heading Level Two', () => {
  const {container} = render(
    <Heading element="h2">Heading Level One</Heading>,
  )
  expect(container).toMatchSnapshot()
})

test('Snapshot Test: Heading Level Three', () => {
  const {container} = render(
    <Heading element="h3">Heading Level One</Heading>,
  )
  expect(container).toMatchSnapshot()
})

test('Snapshot Test: Heading Level Four', () => {
  const {container} = render(
    <Heading element="h4">Heading Level One</Heading>,
  )
  expect(container).toMatchSnapshot()
})
