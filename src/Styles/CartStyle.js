import styled from "@emotion/styled";

const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 30vw;
  height: 100vh;
  background-color: #1d1d1d;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  transition: right 0.3s ease-in-out;
  overflow-y: auto;

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-in-out;
  z-index: 999;
`;

const Span = styled.span`
  display: inline-flex;
  position: relative;
  height: 25px;
  width: 25px;
  overflow: hidden;
  color: white;
  left: 15px;
  font-size: 1rem;
  background-color: red;
  border-radius: 50%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    height: 20px;
    width: 20px;
    font-size: 0.9rem;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: white;
  &:hover {
    color: red;
  }
`;

const ContinueShoppingButton = styled.button`
  background-color: #222121ff;
  color: #ad9e75;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 30px;

  &:hover {
    background-color: #333;
  }

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

// Cart Summary (Total Items & Price)
export const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  font-weight: bold;
  color: #fff;
  background-color: #1d1d1d;
  border-bottom: 1px solid #ccc;
`;

// Buttons Wrapper
export const ActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

// Individual Action Buttons (Clear Cart, Checkout)
export const ActionButton = styled.button`
  flex: 1;
  padding: 10px 20px;
  margin: 0 10px;
  color: #fff;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-size: 1rem;

  &:hover {
    opacity: 0.9;
  }
`;

export { CartContainer, Span, Overlay, ContinueShoppingButton, CloseButton };
