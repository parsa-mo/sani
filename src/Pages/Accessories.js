import React from "react";
import GalleryLoader from "../Components/GalleryLoader";
import { Div, Title, Paragraph } from "../Styles/PagesStyle";
import { MainContainer } from "../Styles/GalleryLoaderStyle";

const Accessories = () => {
  return (
    <MainContainer>
      <Div>
        <Title>Accessories</Title>
        <Paragraph>
          Explore our curated collection of premium accessories designed to
          complement your lifestyle and elevate every moment.
        </Paragraph>
      </Div>
      <GalleryLoader FolderName={"Accessories"}></GalleryLoader>
    </MainContainer>
  );
};

export default Accessories;
