import React from "react";
import { Div, Title, Paragraph } from "../Styles/PagesStyle";
import { MainContainer } from "../Styles/GalleryLoaderStyle";
import GalleryLoaderWithCarousel from "../Components/GalleryLoaderWithCarousel";

const Bridal = () => {
  return (
    <MainContainer>
      <Div>
        <Title>Bridal</Title>
        <Paragraph>
          Sani are an experienced team who want to be a part of helping make
          your wedding dreams come true.
        </Paragraph>
        <Paragraph>
          Lead by talented and experienced seamstress and tailor extraordinaire
          Afsaneh (Sani), staff are at your beck and call throughout the
          concept, design and dressmaking process start-to-finish. They have a
          collection of pre-designed ensembles for brides to select from, and
          from there the garment is tailored to appear as though it were
          originally crafted just for you
        </Paragraph>{" "}
        <Paragraph>
          Feel free to browse our collection, or contact us today to discuss how
          we can help transform a dress into THE WEDDING DRESS OF YOUR DREAMS!
        </Paragraph>
      </Div>
      <GalleryLoaderWithCarousel FolderName={"Bridal"} />
    </MainContainer>
  );
};

export default Bridal;
