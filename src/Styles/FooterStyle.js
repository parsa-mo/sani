import styled from "@emotion/styled";
import { css } from "@emotion/react";

const MainContainer = styled.div`
  height: 300px;
  width: 100vw;
  overflow: hidden;
  bottom: 0;
  background-color: #1d1d1d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 950px) {
    height: auto;
    padding-top: 2rem;
  }
`;

const SecondaryContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 950px) {
    flex-direction: column;
    //height: 1000px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const DivTitle = styled.h1`
  font-weight: bold;
`;

const StyledDiv = styled.div`
  padding: 0 3rem 2rem 3rem;
  width: 12rem;
  overflow: hidden;
`;

const DivItem = styled.div`
  padding-bottom: 10px;
  color: #ad9e75;
  text-align: left;
  font-size: 0.9rem;
  font-weight: 300;
  display: flex;
  align-items: center; /* Ensure vertical alignment */
  @media (max-width: 950px) {
    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

const TopLine = styled.hr`
  border-top: 50px solid rgb(19, 19, 19);
  border-bottom: 0;
  border-right: 0;
  border-left: 0;
  padding: 0;
`;

const BottomLine = styled.hr`
  border-top: 3px solid #ad9e75;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  width: 42%;
  padding-top: 15px;
`;

const StyledLogo = styled.img`
  width: 100px;
`;

const FooterIcon = styled.img`
  display: inline-block;
  padding: 0 0.5rem 0 0.5rem;
  width: 1rem;
`;

const myStyle = css`
  padding-left: 5rem;

  @media (max-width: 950px) {
    padding-right: 0;
  }
`;

export {
  MainContainer,
  TopLine,
  StyledDiv,
  StyledLogo,
  DivItem,
  DivTitle,
  FooterIcon,
  BottomLine,
  SecondaryContainer,
  myStyle,
};
