/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { TextInput, TextArea, PrimaryButton } from '@aperture-ui/components'
import {
  FormStyle,
  FormFirstNameStyle,
  FormLastNameStyle,
  FormEmailStyle,
  FormSubjectStyle,
  FormMessageStyle
} from './ContactForm.styles'

//  TODO:
//  Check if the form inputs are all entered with the correct data
//  Check first name contains alphabetic characters
//  Check last name contains alphabetic characters
//  Check email contains a valid email address
//  Check that text area contains content.
//  Return boolean value if all are true or false

export const ContactForm = () => {
  return (
    <form css={FormStyle}>
      <TextInput
        additionalStyles={FormFirstNameStyle()}
        label="First Name"
        type="text"
      />
      <TextInput
        additionalStyles={FormLastNameStyle()}
        label="Last Name"
        type="text"
      />
      <TextInput
        additionalStyles={FormEmailStyle()}
        label="Email Address"
        type="email"
      />
      <TextInput
        additionalStyles={FormSubjectStyle()}
        label="Subject"
        type="text"
      />
      <TextArea
        additionalStyles={FormMessageStyle()}
        label="Message"
        type="text"
      />
      <PrimaryButton isDisabled={false} label="Send" />
    </form>
  )
}

export default ContactForm
