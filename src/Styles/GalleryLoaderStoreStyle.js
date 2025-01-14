import styled from "@emotion/styled";

const ImageContainer = styled.div`
  column-count: 4; /* Create 3 masonry-style columns */
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
  width: 18vw; /* Adjust width to account for padding */
  height: auto;
  display: block;
  break-inside: avoid;

  cursor: pointer; /* Change cursor to pointer to indicate clickable images */

  @media (max-width: 500px) {
    width: 80vw; /* Ensure images scale properly to fill carousel */
    margin: 0 auto; /* Center images in their container */
  }
`;

const Container = styled.div`
  overflow: hidden;
  margin: auto;
  padding: 0.5rem; /* Add padding to ensure the outer border is not cropped */
  //background-color: white;
`;

const Title = styled.h3`
  text-align: center;
  color: white;
  padding: 0.5em;
  font-weight: lighter;
`;

const Price = styled.h4`
  color: #ad9e75;
  text-align: center;
`;

export { ImageContainer, Container, Img, Title, Price };
