import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  box-sizing: border-box;
  height: auto;
  align-items: flex-start;
  padding: 8rem 8rem 6rem 8rem;
  background: #222121ff;
  position: relative;

  @media (max-width: 800px) {
    padding: 6rem 4rem 6rem 4rem;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  box-sizing: border-box;
  padding-top: 2rem;
`;

export { Container, StyledImg };
