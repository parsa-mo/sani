import styled from "@emotion/styled";

// Styled components
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
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(300px, 1fr)
  ); /* Adjust the minmax width as needed */
  gap: 20px;
  padding-top: 2rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const Image = styled.img`
  max-width: 50%;
  height: auto;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export { Image, ImageWrapper, GalleryContainer, MainContainer };
