import React from "react";
import wie_logo from "./WIE_Logo_Black.png";
import ieee_logo from "./IEEE_DTU_Logo.png";
import linkedin from "./linkedin.png";
import github from "./github-muted.png";
import "./Footer.css";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  ImageContainer,
  Images,
  Copyright,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "black", textAlign: "center", marginTop: "-40px" }}>
        Contact Us
      </h1>
      <ImageContainer>
        <img src={wie_logo} height="80" />
        <img src={ieee_logo} height="80" />
      </ImageContainer>
      <Container>
        <Row>
          <Column>
            <Heading>Ayushee Agarwal</Heading>
            <FooterLink href="#">Website Coordinator</FooterLink>
            <Images>
              <FooterLink href="https://www.linkedin.com/in/ayushee-agarwal-0b285b176/">
                <span style={{ marginLeft: "10px" }}>
                  <img src={linkedin} alt="linkedin" />
                </span>
              </FooterLink>
              <FooterLink href="https://github.com/Ayushee11">
                <span style={{ marginLeft: "10px" }}>
                  <img src={github} alt="github" />
                </span>
              </FooterLink>
            </Images>
          </Column>
          <Column>
            <Heading>Nitya Mittal</Heading>
            <FooterLink href="#">Event Coordinator</FooterLink>
            <Images>
              <FooterLink href="https://www.linkedin.com/in/mittalnitya/">
                <span style={{ marginLeft: "10px" }}>
                  <img src={linkedin} alt="linkedin" />
                </span>
              </FooterLink>
              <FooterLink href="https://github.com/nityamittal">
                <span style={{ marginLeft: "10px" }}>
                  <img src={github} alt="github" />
                </span>
              </FooterLink>
            </Images>
          </Column>
          <Column>
            <Heading>Saujanya Sood</Heading>
            <FooterLink href="#">Event Executive</FooterLink>
            <Images>
              <FooterLink href="https://www.linkedin.com/in/saujanyasood/">
                <span style={{ marginLeft: "10px" }}>
                  <img src={linkedin} alt="linkedin" />
                </span>
              </FooterLink>
              <FooterLink href="https://github.com/saujanyasood">
                <span style={{ marginLeft: "10px" }}>
                  <img src={github} alt="github" />
                </span>
              </FooterLink>
            </Images>
          </Column>
          <Column>
            <Heading>Shreya Sahu</Heading>
            <FooterLink href="#">Event Executive</FooterLink>
            <Images>
              <FooterLink href="https://www.linkedin.com/in/shreya-sahu-1463691bb/">
                <span style={{ marginLeft: "10px" }}>
                  <img src={linkedin} alt="linkedin" />
                </span>
              </FooterLink>
              <FooterLink href="https://github.com/shreyasahu4">
                <span style={{ marginLeft: "10px" }}>
                  <img src={github} alt="github" />
                </span>
              </FooterLink>
            </Images>
          </Column>
          <Column>
            <Heading>Arya Pandey</Heading>
            <FooterLink href="#">Content Executive</FooterLink>
            <Images>
              <FooterLink href="https://www.linkedin.com/in/arya-pandey-5340651b8/">
                <span style={{ marginLeft: "10px" }}>
                  <img src={linkedin} alt="linkedin" />
                </span>
              </FooterLink>
              <FooterLink href="https://github.com/arya312">
                <span style={{ marginLeft: "10px" }}>
                  <img src={github} alt="github" />
                </span>
              </FooterLink>
            </Images>
          </Column>
        </Row>
      </Container>
      <Copyright>©2022 IEEE WIE DTU – All rights reserved.</Copyright>
    </Box>
  );
};
export default Footer;
