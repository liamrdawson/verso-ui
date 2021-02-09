import { jsx } from '@emotion/react'
import renderer from 'react-test-renderer'
import { ContactForm } from 'src/components'

test('Snapshot Test: Contact Form', () => {
  const component = renderer.create(
    <ContactForm>Heading Level One</ContactForm>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
