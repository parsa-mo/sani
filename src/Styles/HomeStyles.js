import styled from "@emotion/styled";

const HomeContainer = styled.div`
  background: white;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1500px) {
    height: 1500px;
    @media (min-width: 950px) and (max-width: 1500px) {
      height: 3000px;
    }
  }
`;

const StyledDiv = styled.div`
  color: white;
  text-align: center;
  font-size: 1.3rem;

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

/* Bottom Section */
const PortalDiv = styled.div`
  display: flex;
  padding-left: 7rem;
  padding-right: 7rem;
  flex-direction: row;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  height: 70vh; /* 70% of the viewport height */
  position: absolute;
  outline: none !important;
  border: none !important; /* Remove border if you want a cleaner look */
  box-shadow: none !important;

  & > div {
    flex: 1; /* Ensure each column takes up equal space */
    height: 100%; /* Ensure the divs take up the full height of PortalDiv */
  }

  @media (max-width: 1500px) {
    flex-direction: column; /* Stack images vertically on smaller screens */
    align-items: center;
    height: 90%;
  }
  @media (max-width: 950px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

const PortalImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  overflow: hidden;
  position: relative; /* Add this line */
  transition: transform 0.3s ease; /* Add transition for smooth zoom effect */
`;

const PortalImage = styled.img`
  object-fit: cover; /* Maintain aspect ratio and cover the container */
  width: 100%;
  height: 100%;
  object-position: top;
  overflow: hidden;
  transition: transform 1s ease; /* Smooth zoom transition */

  &.zoom {
    transform: scale(1.05); /* Zoom the image */
  }
`;

const PortalButton = styled.button`
  position: absolute;
  z-index: 100;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0); /* Center the button */
  background-color: white; /* Set background to white */
  color: #1d1d1d; /* Change text color to contrast with the white background */
  box-sizing: border-box;
  padding: 1.5rem 4rem; /* Add padding for a better look */
  border: none !important; /* Remove border */
  cursor: pointer;
  font-size: 1.5rem; /* Adjust font size as needed */
  font-weight: bolder;
  transition:
    background-color 0.3s,
    color 0.3s; /* Add transitions for better UX */
  letter-spacing: 0.3rem;

  &:hover {
    background-color: #ad9e75; /* Slightly different background color on hover */
    color: #1d1d1d; /* Ensure text color remains the same */
  }

  &:active {
    color: white;
  }
  @media (min-width: 1000px) and (max-width: 1500px) {
    padding: 1.5rem 12rem;
  }

  @media (min-width: 800px) and (max-width: 999px) {
    padding: 1.5rem 8rem;
  }

  @media (min-width: 500px) and (max-width: 700px) {
    padding: 1.5rem 5rem;
  }

  @media (max-width: 499px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

export {
  StyledDiv,
  Button,
  HomeContainer,
  PortalImage,
  PortalImageWrapper,
  PortalDiv,
  PortalButton,
};
