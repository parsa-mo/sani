import styled from "@emotion/styled";

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
`;

const SecondaryContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 750px) {
    flex-direction: column;
    height: 1000px;
    align-items: center;
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
`;

const TopLine = styled.hr`
  border-top: 50px solid rgb(18, 17, 17);
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
  width: 500px;
  padding-top: 15px;
`;

const StyledLogo = styled.img`
  width: 100px;
`;

const FooterIcon = styled.img`
  display: inline-block;
  padding-right: 1rem;
  width: 1rem;
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
};
