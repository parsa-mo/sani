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

export { Div, TopContainer };
