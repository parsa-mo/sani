import React from "react";
import {
  MainContainer,
  TopLine,
  StyledDiv,
  StyledLogo,
  DivItem,
  DivTitle,
  FooterIcon,
  BottomLine,
  SecondaryContainer,
} from "../Styles/FooterStyle";
import sanilogo from "../Images/sanilogo.png";
import call from "../Images/call.png";
import email from "../Images/email.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import pintrest from "../Images/pintrest.png";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <TopLine />
      <MainContainer>
        <SecondaryContainer>
          <StyledDiv>
            <DivItem>
              <StyledLogo src={sanilogo} />
            </DivItem>
            <DivItem>
              Alterations and bespoke clothing tailored to perfection.
            </DivItem>
          </StyledDiv>

          <StyledDiv>
            <DivItem>
              <DivTitle>Contact Us</DivTitle>
            </DivItem>
            <DivItem>
              <FooterIcon src={email} alt={"call"} />
              info@sani.com.au
            </DivItem>
            <DivItem>
              <FooterIcon src={call} alt={"call"} />
              0426242850
            </DivItem>
          </StyledDiv>

          <StyledDiv>
            <DivItem>
              <DivTitle>Find Us</DivTitle>
            </DivItem>
            <DivItem>
              <a
                style={{
                  fontWeight: 300,
                  textDecoration: "none",
                  color: "#ad9e75",
                  display: "block",
                }}
                href={
                  "https://www.google.com/maps/dir//Shop+1%2F120+James+St,+Templestowe+VIC+3106/@-37.7570584,145.0467274,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6ad638f771f5a731:0x57389c913164c115!2m2!1d145.12914!2d-37.7570278?entry=ttu"
                }
              >
                Shop 1, 120 James Street Templestowe, 3106
              </a>
            </DivItem>
            <DivItem>
              Mon-Fri: 9:00-17:00 <br /> Sat: 9:00-14:00
            </DivItem>
          </StyledDiv>
        </SecondaryContainer>

        <BottomLine />

        <SecondaryContainer>
          <StyledDiv>
            <a href={"https://www.instagram.com/sani.fashionstudio/"}>
              <FooterIcon src={instagram} style={{ width: "1.5rem" }} />{" "}
            </a>
            <a
              href={"https://www.facebook.com/www.radafashion?mibextid=LQQJ4d"}
            >
              <FooterIcon src={facebook} style={{ width: "1.5rem" }} />{" "}
            </a>
            <a href={"https://www.pinterest.com.au/sani_fashionstudio/"}>
              <FooterIcon src={pintrest} style={{ width: "1.5rem" }} />{" "}
            </a>
          </StyledDiv>
          <StyledDiv>
            {" "}
            <DivItem style={{ paddingLeft: "52px" }}>
              Copyright ©{currentYear} Sani{" "}
            </DivItem>{" "}
          </StyledDiv>
        </SecondaryContainer>
      </MainContainer>
    </>
  );
};

export default Footer;
