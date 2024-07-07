import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  box-sizing: border-box;
  min-height: 100vh;
  height: auto;
  align-items: flex-start;
  justify-content: space-evenly;
  padding-top: 8rem;
  background: #222121ff;
  position: relative;

  @media (max-width: 1100px) {
    padding-top: 6rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Div = styled.div`
  box-sizing: border-box;
  padding: 6rem 4rem 6rem 4rem;
  @media (max-width: 1100px) {
    padding: 4rem 2rem 3rem 2rem;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  box-sizing: border-box;
  padding-top: 2rem;
`;

const Title = styled.h1`
  text-align: left;
  font-size: 2.2rem;
  font-weight: bold;
  color: #ad9e75;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const ContactDetail = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 1rem; /* Adjust as needed */
  font-size: 1rem;
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`;

const Paragraph = styled.p`
  padding-top: 1rem;
  color: #ffffff;
  font-weight: lighter;
  letter-spacing: 0.5px;
  line-height: 1.5rem;
  font-size: 1.2rem;
  @media (max-width: 800px) {
    font-size: 0.9rem;
  }
`;

const Icon = styled.img`
  width: 1.5rem;
  padding-right: 1rem;
  @media (max-width: 800px) {
    width: 1rem;
  }
`;

export { Container, ContactDetail, StyledImg, Title, Paragraph, Icon, Div };
