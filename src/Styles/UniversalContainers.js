import styled from "@emotion/styled";
import backgroundImg from "../Images/HomeBackground.jpeg";

const TopContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: brightness(50%);
    z-index: -1;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 8rem 6rem 6rem 6rem;
  //border: 10px solid white;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  padding-top: 4rem;
  text-align: left;
  font-size: 2.2rem;
  font-weight: bold;
  color: #ad9e75;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  padding-top: 2rem;
  color: #ffffff;
  font-weight: lighter;
  letter-spacing: 0.5px;
  line-height: 1.5rem;
  font-size: 1.2rem;
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`;

export { Div, TopContainer, Title, Paragraph };
