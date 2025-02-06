import styled from "@emotion/styled";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
  align-items: center;
  width: 90%;
  background: #191717;
  margin: 2rem 2rem 2rem 2rem;
  padding: 1rem;
  color: white;
`;

const ImgDiv = styled.div`
  display: flex;
  width: 35%;
  border: solid 2px white;
  box-sizing: border-box;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  padding: 1rem;
`;

const Img = styled.img`
  width: auto;
`;

const Title = styled.h3`
  color: white;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const InfoLabel = styled.p`
  color: white;
  font-size: 0.6rem;
  padding-right: 10px;
  padding-bottom: 5px;
`;

const InfoText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding-bottom: 1rem;
`;

export { ItemContainer, ImgDiv, Img, InfoDiv, Title, InfoText, InfoLabel };
