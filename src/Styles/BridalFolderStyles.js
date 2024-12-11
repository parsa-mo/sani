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
  @media (max-width: 500px) {
    padding: 4rem 3rem 2rem 3rem;
  }
`;

const ImgLarge = styled.img`
  width: 40vw; /* Ensure the image takes full width of the carousel item */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Ensures images look good */
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const ImgSmall = styled.img`
  width: 5vw; /* Ensure the image takes full width of the carousel item */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Ensures images look good */
  margin: 30px 15px 20px 0;
  padding: 0;
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
`;

export { Div, ImgLarge, ImgSmall, Location };
