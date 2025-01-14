import styled from "@emotion/styled";

const Div = styled.div`
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
  width: 40vw;
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

export { Div, ImgLarge, ImgSmall, Location };