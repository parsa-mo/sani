import styled from "@emotion/styled";

const ErrorTitle = styled.h1`
  display: block;
  color: #ad9e75;
  font-size: 5rem;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  display: block;
  font-size: 1rem;
  color: #ad9e75;
  padding: 1.5rem;
`;

const ErrorButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
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
`;

export { ErrorMessage, ErrorTitle, ErrorButton };
