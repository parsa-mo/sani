import React from "react";
import {
  FormContainer,
  FormField,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
} from "../Styles/FormStyles";

const ContactForm = () => {
  return (
    <FormContainer>
      <FormField>
        <FormLabel htmlFor="name">Name </FormLabel>
        <FormInput
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />
      </FormField>
      <FormField>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          type="email"
          id="email"
          name="email"
          placeholder="youremail@example.com"
          required
        />
      </FormField>
      <FormField>
        <FormLabel htmlFor="phone">Phone Number</FormLabel>
        <FormInput
          type="tel"
          id="phone"
          name="phone"
          placeholder="(Optional)"
        />
      </FormField>
      <FormField>
        <FormLabel htmlFor="message">Enquiry/Message </FormLabel>
        <FormTextArea id="message" name="message" required />
      </FormField>
      <FormButton type="submit">Submit</FormButton>
    </FormContainer>
  );
};

export default ContactForm;
