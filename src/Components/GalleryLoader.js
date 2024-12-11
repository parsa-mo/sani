import React, { useState, useEffect, useCallback } from "react";
import { FetchImages } from "./FetchImages";
import { Container, ImageContainer, Img } from "../Styles/GalleryLoaderStyle";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Divider } from "../Styles/PagesStyle";

const GalleryLoader = ({ FolderName, Filters }) => {
  const [photos, setPhotos] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [reversedPhotos, setReversedPhotos] = useState([]);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // Fetch photos when FolderName changes
  useEffect(() => {
    FetchImages(FolderName)
      .then((fetchedPhotos) => {
        setPhotos(fetchedPhotos);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, [FolderName]);

  // Update reversedPhotos based on photos and Filters
  useEffect(() => {
    let filteredPhotos = [...photos].reverse(); // Start with reversed photos
    if (Filters && Filters.length > 0) {
      filteredPhotos = filteredPhotos.filter(
        (photo) => Filters.some((filter) => photo.url.includes(filter)), // Assuming 'url' contains the filterable text
      );
    }
    setReversedPhotos(filteredPhotos);
  }, [photos, Filters]);

  // Ensure photos have necessary properties for Carousel views
  const carouselViews = reversedPhotos.map((photo) => ({
    ...photo,
    src: photo.url,
    srcset: photo.url, // Assuming 'url' is the source for both src and srcset
    caption: photo.title || "", // Ensure caption is defined or empty string
  }));

  return (
    <Container>
      <Divider />
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
