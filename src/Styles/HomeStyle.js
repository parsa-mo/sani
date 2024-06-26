import styled from "@emotion/styled";
import backgroundImg from "../Images/HomeBackground.jpeg";

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;
