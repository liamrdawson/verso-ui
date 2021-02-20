import { jsx } from '@emotion/react'
import {render} from '@testing-library/react'
import { ContactForm } from '../../../src'

test('Snapshot Test: Contact Form', () => {
  const {container} = render(
    <ContactForm>Heading Level One</ContactForm>,
  )
  expect(container).toMatchSnapshot()
})
