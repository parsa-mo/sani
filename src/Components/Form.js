import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FormButton,
  FormContainer,
  FormField,
  FormInput,
  FormLabel,
  FormTextArea,
} from "../Styles/FormStyles";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_7bvu66v", "template_xxch7rh", form.current, {
        publicKey: "Rc-d2rmQiwgZIMK-j",
      })
      .then(
        () => {
          enqueueSnackbar("Form Submitted Successfully.", {
            variant: "success",
          });
          form.current[0].value = "";
          form.current[1].value = "";
          form.current[2].value = "";
          form.current[3].value = "";
        },
        (error) => {
          enqueueSnackbar(`FAILED...${error.text}`, { variant: "error" });
        },
      );
  };

  return (
    <FormContainer id="myForm" ref={form} onSubmit={sendEmail}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      />
      <FormField>
        <FormLabel htmlFor="name">Name*</FormLabel>
        <FormInput type="text" name="name" placeholder="Name" required />
      </FormField>
      <FormField>
        <FormLabel htmlFor="email">Email*</FormLabel>
        <FormInput
          type="email"
          name="email"
          placeholder="youremail@example.com"
          required
        />
      </FormField>
      <FormField>
        <FormLabel htmlFor="phone">Phone Number</FormLabel>
        <FormInput type="tel" name="phone" placeholder="(Optional)" />
      </FormField>
      <FormField>
        <FormLabel htmlFor="message">Enquiry/Message*</FormLabel>
        <FormTextArea name="message" required />
      </FormField>
      <FormButton type="submit" value="Send">
        Submit
      </FormButton>
    </FormContainer>
  );
};

export default ContactForm;
