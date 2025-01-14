import styled from "@emotion/styled";

const MainContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100vh;
  height: auto;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 8rem;
  background: #222121ff;
  position: relative;

  @media (max-width: 1100px) {
    padding: 6rem 4rem 4rem 4rem;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 6rem 0 0 0;
  }
`;

const Container = styled.div`
  overflow: hidden;
  margin: auto;
  padding: 0.5rem; /* Add padding to ensure the outer border is not cropped */
  //background-color: white;
`;

const CarouselWrapper = styled.div`
  break-inside: avoid; /* Prevent carousels from breaking between columns */
  margin-bottom: 2rem; /* Space between carousels */
  background: #fff; /* Optional: Background for better visual debugging */
  padding: 0; /* Remove internal spacing */
  overflow: hidden; /* Ensure content does not overflow */

  @media (max-width: 500px) {
    width: 80vw; /* Make carousel take up 90vw on small screens */
  }
`;

const ImageContainer = styled.div`
  column-count: 3; /* Create 3 masonry-style columns */
  column-gap: 2rem; /* Space between columns */
  margin: auto;

  @media (max-width: 800px) {
    column-count: 2; /* Reduce to 2 columns on medium screens */
  }

  @media (max-width: 500px) {
    column-count: 1; /* Single column layout on small screens */
    width: 80vw;
  }
`;

const Img = styled.img`
  width: 25vw; /* Adjust width to account for padding */
  height: auto;
  display: block;
  break-inside: avoid;

  cursor: pointer; /* Change cursor to pointer to indicate clickable images */

  @media (max-width: 500px) {
    width: 80vw; /* Ensure images scale properly to fill carousel */
    margin: 0 auto; /* Center images in their container */
  }
`;

const Frame = styled.div``;

export {
  Container,
  ImageContainer,
  Img,
  MainContainer,
  Frame,
  CarouselWrapper,
};
