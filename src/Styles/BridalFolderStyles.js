import styled from "@emotion/styled";

const Container = styled.div`
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

  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
    padding: 10rem 2rem 2rem 2rem;
    height: 100%;
  }
`;

const PrimaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center; /* Center content for mobile */
    gap: 1rem; /* Add spacing between sections */
  }
`;

const DivLeft = styled.div`
  box-sizing: border-box;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  width: 60%;
  padding: 6rem 3rem 3rem 1rem;
  @media (max-width: 1100px) {
    padding: 6rem 3rem 3rem 3rem;
    width: 100%;
  }
  @media (max-width: 600px) {
    padding: 2rem; /* Reduce padding for smaller screens */
    align-items: center; /* Center align content on mobile */
    width: 100%;
  }
`;
const DivRight = styled.div`
  box-sizing: border-box;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  width: 100%;
  padding: 6rem 3rem 3rem 1rem;
  @media (max-width: 1100px) {
    padding: 6rem 3rem 3rem 3rem;
  }
  @media (max-width: 600px) {
    padding: 2rem; /* Reduce padding for smaller screens */
    align-items: center; /* Center align content on mobile */
  }
`;

const ImgLarge = styled.img`
  width: 30vw;
  height: auto;
  object-fit: cover;
  margin: 0;
  padding: 0;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 70vw; /* Expand image width for smaller screens */
  }
`;

const ImgSmall = styled.img`
  width: 5vw;
  height: auto;
  object-fit: cover;
  margin: 30px 15px 20px 0;
  padding: 0;

  @media (max-width: 600px) {
    width: 10vw; /* Make thumbnails larger on mobile */
    margin: 10px; /* Adjust spacing for better alignment */
    overflow: hidden;
  }
`;

const Location = styled.div`
  position: relative;
  color: #ad9e75;
  letter-spacing: 2px;
  font-size: 0.9rem;
  top: 75px;

  a {
    text-decoration: none;
    color: #ad9e75;
  }

  @media (max-width: 600px) {
    text-align: center; /* Center breadcrumb on mobile */
    top: 10px; /* Adjust top spacing */
    font-size: 0.8rem; /* Reduce font size for smaller screens */
  }
`;

export {
  DivLeft,
  DivRight,
  ImgLarge,
  ImgSmall,
  Location,
  Container,
  PrimaryDiv,
};
