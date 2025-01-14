import React from "react";
import { Div, Title, Paragraph, Divider } from "../Styles/PagesStyle";
import { MainContainer } from "../Styles/GalleryLoaderStyle";
import GalleryLoaderOnlineStore from "../Components/GalleryLoaderOnlineStore";

const Shapewear = () => {
  return (
    <MainContainer>
      <Div>
        <Title>Sani Shapewear</Title>
        <Paragraph>
          Confidence Starts here! Shop now and feel the difference.
        </Paragraph>
      </Div>
      <GalleryLoaderOnlineStore FolderName={"Shapewear"} />
    </MainContainer>
  );
};

export default Shapewear;
