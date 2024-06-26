import styled from "@emotion/styled";
import { Theme } from "./Theme";

const SidebarContainer = styled.div`
  padding: 20px 25px;
  list-style-type: none;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
`;

const SidebarLogos = styled.img`
  width: 75px;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.rotate ? "rotate(90deg)" : "rotate(0deg)")};
`;

const DropDownContainer = styled.div`
  height: 100vh;
  background-color: ${Theme.colors.secondary};
  backdrop-filter: blur(2px);
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  position: relative;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 9;
  justify-content: center;
  align-items: center;
`;

export { SidebarContainer, SidebarLogos, DropDownContainer };
