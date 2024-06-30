import styled from "@emotion/styled";
import { Theme } from "./Theme";
import { NavLink } from "react-router-dom";

const SidebarContainer = styled.div`
  padding: 20px 25px;
  list-style-type: none;
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
`;

const SidebarLogos = styled.img`
  width: 75px;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.rotate ? "rotate(90deg)" : "rotate(0deg)")};
`;

const SidebarList = styled.ol`
  display: block;
  justify-items: center;
  padding-left: 0;
`;

const SidebarListItem = styled.li`
  display: block;
  padding-bottom: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const DropDownContainer = styled.div`
  padding-top: 148px;
  padding-bottom: 30px;
  background-color: ${Theme.colors.secondary};
  overflow: hidden;

  max-height: ${(props) => (props.isVisible ? "auto" : "0")};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transition:
    max-height 5s ease-in-out,
    opacity 0.1s linear;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 9;
  justify-content: center;
  align-items: center;
  display: flex;
  box-shadow: 0 2px 15px black;
  flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
  color: #ad9e75;
  font-size: 1rem;
  text-align: center;
  display: block;
  font-weight: 700;
  text-decoration: none;
  &:hover {
    color: darkgrey;
    text-decoration: underline white;
    text-decoration-thickness: 6px;
  }
`;

export {
  SidebarContainer,
  SidebarLogos,
  DropDownContainer,
  SidebarList,
  SidebarListItem,
  StyledNavLink,
};
