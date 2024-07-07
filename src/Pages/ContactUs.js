import React from "react";
import {
  Container,
  Title,
  Paragraph,
  Icon,
  ContactDetail,
  Div,
} from "../Styles/PagesStyle";
import email from "../Images/email.png";
import call from "../Images/call.png";
import cellphone from "../Images/cell-phone.png";
import map from "../Images/map.png";
import { Form } from "../Components/components";

const ContactUs = () => {
  const apiKey = process.env.REACT_APP_MAP_API;
  return (
    <>
      <Container>
        <Div>
          <Title>Contact Us</Title>
          <Paragraph>
            Contact us by phone or email to schedule a consultation, or visit us
            in person.
          </Paragraph>
          <Paragraph>
            <ContactDetail>
              <Icon src={email} alt="email" />
              info@sani.com.au
            </ContactDetail>
            <ContactDetail>
              <Icon src={call} alt="phone" />
              03 9943 4035
            </ContactDetail>
            <ContactDetail>
              <Icon src={cellphone} alt="mobile" />
              0406 212 428
            </ContactDetail>
          </Paragraph>
          <Paragraph>
            You can fill out the form below for any questions or enquiries:
          </Paragraph>
          <Form />
        </Div>
        <Div>
          <Paragraph>
            <ContactDetail>
              <Icon src={map} alt="address" />
              Shop 1, 120 James Street, Templestowe 3106
            </ContactDetail>
          </Paragraph>

          <iframe
            className="map"
            title="Sani"
            width="500"
            height="500"
            style={{ border: "0" }}
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=-37.757073486182065,145.12913332365963&zoom=17`}
            allowFullScreen
          ></iframe>

          <Paragraph
            style={{
              overflow: "hidden",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Opening Hours:
          </Paragraph>
          <Paragraph>Monday-Friday 9:00-17:00 </Paragraph>
          <Paragraph>Saturday 9:00-14:00 </Paragraph>
          <Paragraph> Sunday Closed</Paragraph>
        </Div>
      </Container>
    </>
  );
};

export default ContactUs;
