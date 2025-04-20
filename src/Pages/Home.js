import React, { useEffect } from "react";
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
import { FetchImages } from "../Components/FetchImages";

const Home = () => {
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const fetchedImages = await FetchImages("HomePage");
        const portalImages = {
          gallery: null,
          shapewear: null,
          bridal: null,
          accessories: null,
        };

        fetchedImages.forEach((image) => {
          const url = image.url.toLowerCase();
          if (url.includes("gallery")) portalImages.gallery = image;
          else if (url.includes("shapewear")) portalImages.shapewear = image;
          else if (url.includes("bridal")) portalImages.bridal = image;
          else if (url.includes("accessories"))
            portalImages.accessories = image;
        });

        setImages(portalImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

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
              {images.gallery?.url && (
                <>
                  <PortalImage src={images.gallery.url} alt="gallery" />
                  <NavLink to="/gallery">
                    <PortalButton>Gallery</PortalButton>
                  </NavLink>
                </>
              )}
            </PortalImageWrapper>
            <PortalImageWrapper
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {images.shapewear?.url && (
                <>
                  <PortalImage src={images.shapewear.url} alt="shapewear" />
                  <NavLink to="/shapewear">
                    <PortalButton>Shapewear</PortalButton>
                  </NavLink>
                </>
              )}
            </PortalImageWrapper>
            <PortalImageWrapper
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {images.bridal?.url && (
                <>
                  <PortalImage src={images.bridal.url} alt="bridal" />
                  <NavLink to="/bridal">
                    <PortalButton>Bridal</PortalButton>
                  </NavLink>
                </>
              )}
            </PortalImageWrapper>
            <PortalImageWrapper
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {images.accessories?.url && (
                <>
                  {" "}
                  <PortalImage src={images.accessories.url} alt="bridal" />
                  <NavLink to="/accessories">
                    <PortalButton>Accessories</PortalButton>
                  </NavLink>
                </>
              )}
            </PortalImageWrapper>
          </PortalDiv>
        </HomeContainer>
      </main>
    </div>
  );
};

export default Home;
