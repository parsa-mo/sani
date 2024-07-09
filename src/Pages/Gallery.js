import React from "react";
import { Div, Title, Paragraph } from "../Styles/PagesStyle";
import { MainContainer } from "../Styles/ImageGalleryStyle";
import GalleryLoader from "../Components/GalleryLoader";

const Gallery = () => {
  return (
    <MainContainer>
      <Div>
        <Title>Bridal</Title>
        <Paragraph>
          Sani carry a range of breathtaking pre-designed garments for clients
          to choose from, and have adjusted to fit them perfectly. A magnificent
          amalgamation of an off-the-shelf experience, with the all the
          exclusivity and perks of a tailor-made outfit.
        </Paragraph>
        <Paragraph>
          Feel Free to browse through some of our existing designs, and send us
          an enquiry today, if you like one our pieces made just to fit YOU!
        </Paragraph>{" "}
      </Div>
      <GalleryLoader FolderName={"Gallery"} />
    </MainContainer>
  );
};

export default Gallery;
