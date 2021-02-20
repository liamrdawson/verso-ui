import { jsx } from '@emotion/react'
import {render} from '@testing-library/react'
import { Nav } from '../../../src'

test('Snapshot Test: Contact Form', () => {
  const pagesArray = [
    {
      pathName: 'path/to/page/one',
      pageName: 'Page One',
    },
    {
      pathName: 'path/to/page/two',
      pageName: 'Page Two',
    },
  ]

  const {container} = render(
    <Nav pages={pagesArray}>Heading Level One</Nav>,
  )

  expect(container).toMatchSnapshot()
})
