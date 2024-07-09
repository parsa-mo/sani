import styled from "@emotion/styled";

const Container = styled.div`
  overflow: hidden;
  margin: auto;
  padding: 0.5rem; /* Add padding to ensure the outer border is not cropped */
  //background-color: white;
`;

const ImageContainer = styled.div`
  column-count: 3;
  column-gap: 1rem;
`;

const Img = styled.img`
  width: 25vw; /* Adjust width to account for padding */
  height: auto;
  padding: 0.5rem;
  background-color: white;
  margin-bottom: 1rem; /* Ensure margin is only applied to the bottom */
  display: block;
  break-inside: avoid;
  box-sizing: border-box; /* Include padding in width/height calculations */
  cursor: pointer; /* Change cursor to pointer to indicate clickable images */
`;

export { Container, ImageContainer, Img };
