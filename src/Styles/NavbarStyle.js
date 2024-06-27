import styled from "@emotion/styled";

const NavContainer = styled.nav`
  padding: 20px 50px; /* Adjust padding as needed */
  list-style-type: none;
  background: rgba(
    255,
    255,
    255,
    0.025
  ); /* Minimal white background for visibility */
  backdrop-filter: blur(2px); /* Blur effect */
  display: flex;
  align-items: center; /* Centers items vertically */
  position: absolute;
  top: 0;
  z-index: 10;
  left: 0; /* Stretch to the left edge of viewport */
  right: 0; /* Stretch to the right edge of viewport */
`;

const NavLogo = styled.img`
  width: 100px;
  align-self: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const NavLinksContainer = styled.ul`
  display: flex;
  margin-left: auto; /* Pushes the navigation links to the right */
  padding: 0; /* Removes default padding */
`;

const NavList = styled.li`
  list-style: none; /* Removes default list style */
  margin-left: 40px; /* Adjust spacing between links */
`;

const NavButton = styled.button`
  border-radius: 12px;
  padding: 15px;
  border: transparent;
  background: transparent;

  &:hover {
    transition-delay: 30ms;
    //animation: ease-in;
    background: rgba(255, 255, 255, 0.2);
  }

  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export { NavButton, NavContainer, NavLogo, NavLinksContainer, NavList };
