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
  padding: 8rem;
  background: #222121ff;
  position: relative;

  @media (max-width: 1100px) {
    padding: 6rem 4rem 4rem 4rem;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 500px) {
    padding: 6rem 0 0 0;
  }
`;

const Div = styled.div`
  box-sizing: border-box;
  display: block;
  padding: 6rem 6rem 3rem 6rem;
  @media (max-width: 1100px) {
    padding: 6rem 3rem 3rem 3rem;
  }
  @media (max-width: 500px) {
    padding: 4rem 3rem 2rem 3rem;
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
