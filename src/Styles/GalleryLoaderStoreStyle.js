import styled from "@emotion/styled";

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Force 4 columns on large screens */
  column-gap: 1rem;
  row-gap: 2rem;
  justify-content: center;
  align-items: start;
  margin: auto;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* 3 columns for medium-large screens */
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablets */
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr); /* 1 column on small screens */
    width: 80vw;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 400px; /* Prevents shrinking too much */
  height: auto;
  display: block;
  margin: 0 auto; /* Center the images */
  cursor: pointer;
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
