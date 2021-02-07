import { jsx } from '@emotion/react'
import { Meta } from '@storybook/react/types-6-0'

import { ContactForm } from './ContactForm'

export default {
  title: 'Components/Molecules/ContactForm',
  component: ContactForm,
  parameters: {
    docs: {
      description: {
        component:
          'A simple and intuitive interface that customers can use to contact the business. The `ContactForm` accepts a name, last naem, email address, subject and message.',
      },
    },
  },
} as Meta

const ContactFormTemplate = () => <ContactForm />
export const ContactFormStory = ContactFormTemplate.bind({})
