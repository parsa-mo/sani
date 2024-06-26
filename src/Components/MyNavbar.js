import React, { useState, useEffect } from "react";
import sanilogo from "../Images/sanilogo.png";
import {
  NavLogo,
  NavContainer,
  NavList,
  NavLinksContainer,
  NavButton,
} from "../Styles/NavbarStyle";
import { NavLinks } from "../Links/Data";
import { NavLink, useLocation } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const MyNavbar = () => {
  const location = useLocation();
  const [pageId, setPageId] = useState(1);
  const [navbar, setNavbar] = useState(window.innerWidth >= 1250);

  // Set Navbar visibility based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1250) {
        setNavbar(false);
      } else {
        setNavbar(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Update pageId when location.pathname changes
  useEffect(() => {
    const pathname = location.pathname;
    const matchingLink = NavLinks.find((link) => link.href === pathname);
    if (matchingLink) {
      setPageId(matchingLink.id);
    }
  }, [location]);

  if (!navbar) {
    return <Sidebar></Sidebar>;
  } else {
    return (
      <NavContainer>
        <NavLink to="/">
          <NavLogo src={sanilogo} alt="logo" />
        </NavLink>
        <NavLinksContainer>
          {NavLinks.map((link) => (
            <NavList key={link.id}>
              <NavButton
                className={pageId === link.id ? "ActiveNavButton" : ""}
              >
                <NavLink
                  to={link.href}
                  style={{
                    color: "rgba(255, 255, 255, 0.75)",
                    fontSize: "1rem",
                    textAlign: "center",
                    display: "block",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  {link.name}
                </NavLink>
              </NavButton>
            </NavList>
          ))}
        </NavLinksContainer>
      </NavContainer>
    );
  }
};

export default MyNavbar;
