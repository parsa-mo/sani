import React, { useEffect, useState } from "react";
import GalleryLoader from "../Components/GalleryLoader";
import {
  Div,
  Title,
  Paragraph,
  ButtonDiv,
  Button,
  CloseIcon,
} from "../Styles/PagesStyle";
import { MainContainer } from "../Styles/GalleryLoaderStyle";

const Accessories = () => {
  const [active, setIsActive] = useState({ veil: false, robe: false });
  const [filters, setFilters] = useState([]);
  useEffect(() => {
    setFilters(Object.keys(active).filter((key) => active[key]));
  }, [active]);

  return (
    <MainContainer>
      <Div>
        <Title>Accessories</Title>
        <Paragraph>
          Explore our curated collection of premium accessories designed to
          complement your lifestyle and elevate every moment.
        </Paragraph>
      </Div>
      <ButtonDiv>
        <Button
          onClick={() => {
            setIsActive({ veil: false, robe: false });
          }}
        >
          All
        </Button>
        <Button
          active={active.veil}
          onClick={() => {
            setIsActive({ ...active, veil: true });
          }}
        >
          Veils
          <CloseIcon
            active={active.veil}
            onClick={(e) => {
              e.stopPropagation();
              setIsActive({ ...active, veil: false });
            }}
          >
            &times;
          </CloseIcon>
        </Button>
        <Button
          active={active.robe}
          onClick={() => {
            setIsActive({ ...active, robe: true });
          }}
        >
          Robes
          <CloseIcon
            active={active.robe}
            onClick={(e) => {
              e.stopPropagation();
              setIsActive({ ...active, robe: false });
            }}
          >
            &times;
          </CloseIcon>
        </Button>
      </ButtonDiv>
      <GalleryLoader
        FolderName={"Accessories"}
        Filters={filters}
      ></GalleryLoader>
    </MainContainer>
  );
};

export default Accessories;
