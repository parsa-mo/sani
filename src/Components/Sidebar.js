import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarLogos,
  DropDownContainer,
} from "../Styles/SidebarStyle"; // Make sure to adjust the path as per your project structure
import { NavLink } from "react-router-dom";
import sanilogo from "../Images/sanilogo.png";
import SidebarLogo from "../Images/SidebarLogo.png";

const Sidebar = () => {
  const [rotate, setRotate] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setRotate(!rotate);
    setDropdown(!dropdown);
  };

  return (
    <>
      <SidebarContainer>
        <NavLink to="/">
          <SidebarLogos key={1} src={sanilogo} alt="logo" />
        </NavLink>
        <SidebarLogos
          key={2}
          src={SidebarLogo}
          alt="logo"
          style={{ width: "50px", cursor: "pointer" }}
          rotate={rotate}
          onClick={handleClick}
        />
      </SidebarContainer>
      <DropDownContainer isVisible={dropdown}>
        <ul>
          <li>
            <NavLink to="/link1">Link 1</NavLink>
          </li>
          <li>
            <NavLink to="/link2">Link 2</NavLink>
          </li>
          <li>
            <NavLink to="/link3">Link 3</NavLink>
          </li>
        </ul>
      </DropDownContainer>
    </>
  );
};

export default Sidebar;
