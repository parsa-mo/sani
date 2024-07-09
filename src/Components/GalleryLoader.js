import React, { useState, useEffect } from "react";
import { FetchImages } from "./FetchImages";
import { Container, ImageContainer, Img } from "../Styles/GalleryLoaderStyle";

const GalleryLoader = ({ FolderName }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    FetchImages(FolderName)
      .then((fetchedPhotos) => {
        setPhotos(fetchedPhotos);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, [FolderName]);

  return (
    <Container>
      <ImageContainer>
        {photos.map((photo, index) => (
          <Img key={index} src={photo.url} alt={`Photo ${index}`} />
        ))}
      </ImageContainer>
    </Container>
  );
};

export default GalleryLoader;
