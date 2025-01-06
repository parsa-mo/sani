import React, { useState, useEffect } from "react";
import { FetchImageFolders } from "./FetchImageFolders";
import {
  Container,
  Frame,
  ImageContainer,
  Img,
  CarouselWrapper,
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

  return (
    <Container>
      <Divider />
      <ImageContainer>
        {folders.map((folder, folderIndex) => (
          <CarouselWrapper key={folderIndex}>
            <Carousel
              responsive={{
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
                tablet: { breakpoint: { max: 1024, min: 664 }, items: 1 },
                mobile: { breakpoint: { max: 664, min: 0 }, items: 1 },
              }}
              autoPlay
              autoPlaySpeed={6000}
              infinite
              showDots
              arrows={false}
              containerClass="carousel-container"
              itemClass="carousel-item"
              customTransition="transform 500ms ease-in-out"
              transitionDuration={500}
            >
              {folder.images
                .filter((image) => !image.url.includes(".csv")) // Filter out CSV files
                .map((image, index) => (
                  <Img
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    onClick={() => navigate(`/bridal/${folder.folderName}`)}
                  />
                ))}
            </Carousel>
            <Link
              to={`/bridal/${folder.folderName}`}
              style={{
                color: "#000",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: "bolder",
                display: "block",
                textAlign: "center",
                padding: "0.5rem",
              }}
            >
              {folder.folderName
                .split("_")[1]
                ?.replace(/^\w/, (c) => c.toUpperCase()) || "Unknown"}
            </Link>
          </CarouselWrapper>
        ))}
      </ImageContainer>
    </Container>
  );
};

export default GalleryLoaderWithCarousel;
