import React from "react";
import sanilogo from "../Images/sanilogo.png";
import {
  NavLogo,
  NavContainer,
  NavLink,
  NavAnchor,
  NavLinksContainer,
  NavButton,
} from "../Styles/NavbarStyle";
import { NavLinks } from "../Links/Data";

const MyNavbar = () => {
  return (
    <NavContainer>
      <a href="/">
        <NavLogo src={sanilogo} alt="logo" />
      </a>
      <NavLinksContainer>
        {NavLinks.map((link) => {
          return (
            <NavLink key={link.id}>
              <NavButton>
                {" "}
                <NavAnchor href={link.href}>{link.name} </NavAnchor>
              </NavButton>
            </NavLink>
          );
        })}
      </NavLinksContainer>
    </NavContainer>
  );
};

export default MyNavbar;
