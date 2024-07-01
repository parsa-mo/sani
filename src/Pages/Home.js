import React from "react";
import { Div, TopContainer } from "../Styles/UniversalContainers.js";
import {
  StyledDiv,
  Button,
  HomeContainer,
  PortalImageWrapper,
  PortalDiv,
  PortalButton,
  PortalImage,
} from "../Styles/HomeStyles";
import { NavLink } from "react-router-dom";
import weddingDress from "../Images/weddingDress.jpg";
import fashion from "../Images/fashion.jpeg";
import Gallery from "../Images/Gallery.jpeg";

const Home = () => {
  const handleMouseEnter = (e) => {
    const img = e.currentTarget.querySelector("img");
    if (img) {
      img.classList.add("zoom");
    }
  };

  const handleMouseLeave = (e) => {
    const img = e.currentTarget.querySelector("img");
    if (img) {
      img.classList.remove("zoom");
    }
  };

  return (
    <div>
      <main>
        <TopContainer>
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
        </TopContainer>
        <HomeContainer>
          <PortalDiv>
            <PortalImageWrapper
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <PortalImage src={fashion} alt="fashion"></PortalImage>
              <NavLink to="/fashion">
                <PortalButton>Fashion</PortalButton>
              </NavLink>
            </PortalImageWrapper>
            <PortalImageWrapper
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <PortalImage src={weddingDress} alt="fashion"></PortalImage>
              <NavLink to="/bridal">
                <PortalButton>Bridal</PortalButton>
              </NavLink>
            </PortalImageWrapper>
            <PortalImageWrapper
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <PortalImage src={Gallery} alt="fashion"></PortalImage>
              <NavLink to="/gallery">
                <PortalButton>Gallery</PortalButton>
              </NavLink>
            </PortalImageWrapper>
          </PortalDiv>
        </HomeContainer>
      </main>
    </div>
  );
};

export default Home;
