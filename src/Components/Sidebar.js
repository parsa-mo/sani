import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarLogos,
  DropDownContainer,
  SidebarList,
  SidebarListItem,
  StyledNavLink,
} from "../Styles/SidebarStyle"; // Make sure to adjust the path as per your project structure
import { NavLink } from "react-router-dom";
import sanilogo from "../Images/sanilogo.png";
import SidebarLogo from "../Images/SidebarLogo.png";
import { NavLinks } from "../Links/Data";
import CartTab from "./CartTab";

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
          <SidebarLogos key={1} src={sanilogo} alt="logo" t />
        </NavLink>
        <div
          style={{
            color: "#ad9e75",
            fontSize: "1.5rem",
            textAlign: "center",
            display: "flex",
            fontWeight: 700,
            textDecoration: "none",
            padding: "10px 10px 10px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "10px",
          }}
        >
          <CartTab></CartTab>
        </div>

        <SidebarLogos
          key={2}
          src={SidebarLogo}
          alt="logo"
          style={{ width: "30px", cursor: "pointer" }}
          rotate={rotate}
          onClick={handleClick}
        />
      </SidebarContainer>
      <DropDownContainer isVisible={dropdown}>
        {NavLinks.map((link) => (
          <SidebarList key={link.id}>
            <SidebarListItem>
              <StyledNavLink onClick={handleClick} to={link.href}>
                {link.name}
              </StyledNavLink>
            </SidebarListItem>
          </SidebarList>
        ))}
      </DropDownContainer>
    </>
  );
};

export default Sidebar;
