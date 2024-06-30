import styled from "@emotion/styled";

const StyledDiv = styled.div`
  color: white;
  text-align: center;
  font-size: 1.5rem;

  @media (max-width: 900px) {
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  margin-top: 40px;
  padding: 15px;
  font-size: 0.9rem;
  cursor: pointer;
  outline: 0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 0.5rem;

  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  color: white;

  &:hover {
    color: #ad9e75;
    background-color: #1d1d1d;
    border-color: #1d1d1d;
  }

  &:active {
    transform: scale(0.9); /* scale down by 5% when pressed */
  }

  @media (max-width: 900px) {
    font-size: 0.9rem;
    padding: 5px;
  }
`;

export { StyledDiv, Button };
