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
  padding: 6rem 6rem 2rem 6rem;
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

  @media (max-width: 600px) {
    text-align: center; /* Center title for mobile */
    font-size: 1.8rem; /* Reduce font size */
  }
`;

const Paragraph = styled.p`
  padding-top: 1rem;
  color: #ffffff;
  letter-spacing: 0.5px;
  line-height: 1.5rem;
  font-size: 1.2rem;

  @media (max-width: 600px) {
    text-align: center; /* Center paragraphs for mobile */
    font-size: 1rem; /* Adjust font size for better readability */
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

const Icon = styled.img`
  width: 1.5rem;
  padding-right: 1rem;
  @media (max-width: 800px) {
    width: 1rem;
  }
`;

const Divider = styled.hr`
  width: 100%;
  margin-bottom: 40px;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  margin: 0 10px;
  font-size: 1.2rem;
  color: #ffffff;
  background-color: ${({ active }) => (active ? "#7c6a4f" : "#ad9e75")};
  font-weight: normal;
  border: none;
  border-radius: 4px;
  cursor: ${({ active }) => (active ? "default" : "pointer")};
  transition:
    background-color 0.3s,
    color 0.3s;
  border-radius: 12px;
`;

const CloseIcon = styled.span`
  display: ${({ active }) => (active ? "flex" : "none")};
  align-items: center; /* Vertically center the cross */
  justify-content: center; /* Horizontally center the cross */
  font-size: 1.8rem;
  margin-left: 15px;
  cursor: pointer;
  color: #ffffff;
  line-height: 0.5; /* Prevent extra height from line spacing */
  vertical-align: middle; /* Align with the text baseline */
  height: auto; /* Prevent height from expanding */
  overflow: hidden; /* Ensure no overflow from the span */
`;

export {
  Container,
  ContactDetail,
  StyledImg,
  Title,
  Paragraph,
  Icon,
  Div,
  Divider,
  ButtonDiv,
  Button,
  CloseIcon,
};
