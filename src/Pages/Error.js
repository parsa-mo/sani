import React from "react";
import { Container, Div } from "../Styles/PagesStyle";
import { ErrorMessage, ErrorTitle, ErrorButton } from "../Styles/ErrorStyle";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Container style={{ alignItems: "center", textAlign: "center" }}>
      <Div>
        <ErrorTitle>ERROR</ErrorTitle>
        <ErrorMessage>
          {" "}
          Sorry the page you were looking for could not be found.
        </ErrorMessage>
        <NavLink to={"/"}>
          <ErrorButton>Return Home</ErrorButton>
        </NavLink>
      </Div>
    </Container>
  );
};

export default Error;
