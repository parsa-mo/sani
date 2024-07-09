import React, { useState, useEffect, useCallback } from "react";
import { FetchImages } from "./FetchImages";
import { Container, ImageContainer, Img } from "../Styles/GalleryLoaderStyle";
import Carousel, { Modal, ModalGateway } from "react-images";

const GalleryLoader = ({ FolderName }) => {
  const [photos, setPhotos] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    FetchImages(FolderName)
      .then((fetchedPhotos) => {
        setPhotos(fetchedPhotos);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, [FolderName]);

  // Ensure photos have necessary properties for Carousel views
  const carouselViews = photos.map((photo) => ({
    ...photo,
    src: photo.url,
    srcset: photo.url, // Assuming 'url' is the source for both src and srcset
    caption: photo.title || "", // Ensure caption is defined or empty string
  }));

  // Reverse the photos array and map from the end backwards
  const reversedPhotos = [...photos].reverse();

  return (
    <Container>
      <ImageContainer>
        {reversedPhotos.map((photo, index) => (
          <div key={index}>
            <Img
              src={photo.url}
              alt={`Photo ${index}`}
              onClick={(event) => openLightbox(event, { photo, index })}
            />
          </div>
        ))}
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={carouselViews} // Pass structured views to Carousel
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </ImageContainer>
    </Container>
  );
};

export default GalleryLoader;
