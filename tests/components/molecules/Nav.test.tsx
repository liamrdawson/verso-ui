import { jsx } from '@emotion/react'
import renderer from 'react-test-renderer'
import { Nav } from 'src/components'

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

  const component = renderer.create(
    <Nav pages={pagesArray}>Heading Level One</Nav>,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
