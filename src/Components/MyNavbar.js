import React from 'react';
import sanilogo from '../Images/sanilogo.png';
import {NavLogo, NavWrapper} from "../Styles/NavbarStyle";

const MyNavbar = () => {
    return (
        <NavWrapper>
            <nav>
                <ul>
                    <li><a href="/"><NavLogo src={sanilogo} alt="logo"/></a></li>
                    <li><a href="/aboutus"> About </a></li>
                </ul>
            </nav>
        </NavWrapper>
    );
};

export default MyNavbar;