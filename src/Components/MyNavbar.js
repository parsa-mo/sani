import React, { useState, useEffect } from "react";
import sanilogo from "../Images/sanilogo.png";
import {
  NavLogo,
  NavContainer,
  NavList,
  NavLinksContainer,
  NavButton,
} from "../Styles/NavbarStyle";
import CartTab from "./CartTab";
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

  const navContainerStyle =
    location.pathname !== "/"
      ? { backgroundColor: "#1d1d1d", boxShadow: "0 4px 4px -2px black" }
      : {};

  const navLinkStyle =
    location.pathname !== "/"
      ? { color: "#ad9e75" }
      : { color: "rgba(255, 255, 255, 0.75)" };

  if (!navbar) {
    return <Sidebar />;
  } else {
    return (
      <NavContainer style={navContainerStyle}>
        <NavLink to="/">
          <NavLogo src={sanilogo} alt="logo" />
        </NavLink>
        <NavLinksContainer>
          {NavLinks.map((link) => (
            <NavList key={link.id}>
              <NavLink
                to={link.href}
                end={link.href === "/"} // If you want the homepage link to only match exactly "/"
                style={{
                  ...navLinkStyle,
                  fontSize: "1rem",
                  textAlign: "center",
                  display: "block",
                  fontWeight: 700,
                  textDecoration: "none",
                  padding: "10px",
                  borderRadius: "5px",
                }}
                className={({ isActive }) =>
                  isActive ? "ActiveNavButton" : ""
                }
              >
                {link.name}
              </NavLink>
            </NavList>
          ))}
          <div
            style={{
              ...navLinkStyle,
              fontSize: "1.8rem",
              textAlign: "center",
              display: "flex",
              fontWeight: 700,
              textDecoration: "none",
              padding: "10px 10px 10px 10px",
              borderRadius: "5px",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
            }}
            className={({ isActive }) => (isActive ? "ActiveNavButton" : "")}
          >
            <CartTab />
          </div>
        </NavLinksContainer>
      </NavContainer>
    );
  }
};

export default MyNavbar;
