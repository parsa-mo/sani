import React from "react";
import { Div, Container } from "../Styles/UniversalContainers.js";
import { StyledDiv, Button } from "../Styles/HomeStyles";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <main>
        <Container>
          <Div>
            <StyledDiv>
              <h1>CRAFTING DREAMS IN EVERY STITCH</h1>
              <p style={{ paddingTop: "10px", fontWeight: 300 }}>
                Discover the perfect wedding and bridesmaid dresses <br /> that
                make your special day unforgettable.
              </p>
            </StyledDiv>
            <NavLink to={"/bridal"}>
              <Button className="btn">BRIDAL COLLECTION </Button>
            </NavLink>
          </Div>
        </Container>
      </main>
    </div>
  );
};

export default Home;
