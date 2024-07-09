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
    padding-top: 6rem;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 1100px) {
    padding: 6rem 4rem 4rem 4rem;
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

const ImageContainer = styled.div`
  column-count: 3;
  column-gap: 1rem;
  @media (max-width: 500px) {
    column-count: 1;
  }
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

  @media (max-width: 800px) {
    width: 20vw;
  }
  @media (max-width: 500px) {
    width: 70vw;
  }
`;

export { Container, ImageContainer, Img, MainContainer };
