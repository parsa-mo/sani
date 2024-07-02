import React from "react";
import { Container, StyledImg } from "../Styles/AboutUsStyle";
import { Title, Paragraph } from "../Styles/UniversalContainers";
import aboutUS from "../Images/aboutUS.jpg";

const AboutUs = () => {
  return (
    <Container>
      {" "}
      <Title> About Us </Title>
      <StyledImg src={aboutUS} alt="about us" />
      <Paragraph>
        Established in 2012, Sani is the stomping ground for big ideas,
        hand-made apparel and outerwear, tailored suit ensembles, and mastery of
        craftsmanship from start to finish. The team at Sani have a wealth of
        international experience to draw upon for inspiration and elevation.
        <br /> <br />
        They are fully qualified seamstresses with specialities in thin & thick
        stitching, beading and sequening, and bridal wear.
        <br />
        Sani’s step-by-step process is thorough and ensures clients are always
        satisfied with the comprehensive service they’re provided. <br />
        <br />
        It begins with a meeting where ideas are brainstormed and workshopped
        between client and designer, step two involves conceptualizing and
        realising an idea, step three is creating a pattern based on the design,
        step four is the birth of the of the garment, and step five is a final
        consultation to ensure all of the clients visions have been actualised.
      </Paragraph>
    </Container>
  );
};

export default AboutUs;
