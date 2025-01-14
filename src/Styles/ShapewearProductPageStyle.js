import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100vh;
  height: auto;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 8rem;
  background: #222121ff;
  position: relative;

  @media (max-width: 600px) {
    align-items: center;
    justify-content: center;
    padding: 10rem 2rem 2rem 2rem;
    height: 100%;
  }
`;

const PrimaryDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center; /* Center content for mobile */
    gap: 1rem; /* Add spacing between sections */
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

const ImgLarge = styled.img`
  width: 40vw;
  height: auto;
  object-fit: cover;
  margin: 0;
  padding: 0;
  cursor: pointer;

  @media (max-width: 1200px) {
    width: 70vw;
  }

  @media (max-width: 600px) {
    width: 70vw; /* Expand image width for smaller screens */
  }
`;

const Paragraph = styled.p`
  padding-top: 1rem;
  color: #ffffff;
  letter-spacing: 0.5px;
  line-height: 1.5rem;
  font-size: 1.2rem;
  font-weight: lighter;

  @media (max-width: 600px) {
    text-align: center; /* Center paragraphs for mobile */
    font-size: 1rem; /* Adjust font size for better readability */
  }
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

const Price = styled.h4`
  color: #ad9e75;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 50px;
  padding-top: 20px;
  font-weight: bolder;
`;

const ColorButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

// Circular color button
const ColorButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: transparent;
  margin-right: 10px;
  cursor: pointer;
  outline: none;

  &:hover {
    border: 2px solid #000;
  }
`;

const SizeButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  border: none;
  border-radius: 4px;
  width: 80px;
  height: 40px;
  justify-content: space-between;
  padding: 5px;
  background-color: #fff;
  margin-right: 30px;
`;

const BuyButton = styled.button`
  display: flex;
  align-self: center;
  padding: 1rem;
  font-size: 0.9rem;
  color: #1d1d1d;
  background-color: #ad9e75;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8c7a5a;
  }
  &:active {
    color: azure;
  }

  @media (max-width: 1000px) {
    padding: 0.5rem;
  }
`;
// Quantity increment/decrement button
const QuantityButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  color: #888;
  cursor: pointer;
  width: 30px;

  &:hover {
    color: #000;
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

// Quantity number styling
const QuantityDisplay = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

// Out-of-stock message
const OutOfStockMessage = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 10px;
`;

const SizeButton = styled.button`
  padding: 10px 15px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #000;
    color: #fff;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 80%;
  max-height: 80%;
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 5px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;

  &:hover {
    color: red;
  }
`;

const A = styled.a`
  margin-left: auto;
  color: #ad9e75;
  text-decoration: underline;

  &:hover {
    color: #8c7a5a;
  }
`;

export {
  ImgLarge,
  Div,
  Location,
  ImgSmall,
  PrimaryDiv,
  Container,
  Title,
  Paragraph,
  BuyButton,
  Price,
  ColorButton,
  ColorButtonWrapper,
  SizeButton,
  SizeButtonWrapper,
  QuantityButton,
  QuantityWrapper,
  QuantityDisplay,
  OutOfStockMessage,
  ModalOverlay,
  ModalContent,
  CloseButton,
  A,
};
