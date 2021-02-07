import { jsx } from '@emotion/react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Nav, NavProps } from './Nav'

export default {
  title: 'Components/Molecules/Nav',
  component: Nav,
  parameters: {
    docs: {
      description: {
        component:
          'The `<Nav>` component represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.',
      },
    },
  },
} as Meta

const NavTemplate: Story<NavProps> = (args) => <Nav {...args} />
export const NavComponent = NavTemplate.bind({})
NavComponent.args = {
  pages: [
    {
      pageName: 'Prints',
      pathName: '/prints',
    },
    {
      pageName: 'About',
      pathName: '/about',
    },
    {
      pageName: 'Contact',
      pathName: '/contact',
    },
  ],
}
