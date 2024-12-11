import React, { useState, useEffect } from "react";
import { FetchImageFolders } from "./FetchImageFolders";
import {
  Container,
  Frame,
  ImageContainer,
  Img,
} from "../Styles/GalleryLoaderStyle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Divider } from "../Styles/PagesStyle";
import { Link, useNavigate } from "react-router-dom";

const GalleryLoaderWithCarousel = ({ FolderName }) => {
  const [folders, setFolders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const foldersData = await FetchImageFolders(FolderName);
      setFolders(foldersData);
    };

    fetchData();
  }, [FolderName]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, // Show one image per slide
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <Divider />
      {folders.map((folder, folderIndex) => (
        <ImageContainer key={folderIndex}>
          <div style={{ breakInside: "avoid" }}>
            {" "}
            {/* Prevent items from splitting across columns */}
            <Carousel
              responsive={responsive}
              autoPlay
              autoPlaySpeed={6000} // Time between image changes in milliseconds
              infinite
              showDots
              arrows={false} // Remove navigation arrows
              containerClass="carousel-container"
              itemClass="carousel-item"
              customTransition="transform 500ms ease-in-out"
              transitionDuration={500}
            >
              {folder.images
                .filter((image) => !image.url.includes(".csv")) // Exclude CSV files
                .map((image, index) => (
                  <Img
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    style={{ paddingBottom: "1.6rem" }}
                    onClick={() => {
                      navigate(`/bridal/${folder.folderName}`);
                    }}
                  />
                ))}
            </Carousel>
            <Link
              to={`/bridal/${folder.folderName}`}
              style={{
                position: "relative",
                color: "#000000",
                textDecoration: "none",
                fontSize: "1rem",
                marginBottom: "1rem",
                display: "block",
                transform: "translateY(-192%)",
                right: "-2%",
                zIndex: "10",
                width: "40%",
              }}
            >
              {folder.folderName}
            </Link>
          </div>
        </ImageContainer>
      ))}
    </Container>
  );
};

export default GalleryLoaderWithCarousel;
