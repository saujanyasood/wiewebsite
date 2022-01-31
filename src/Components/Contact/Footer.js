import React from "react";
import wie_logo from "./WIE_Logo_Black.png"
import ieee_logo from "./IEEE_DTU_Logo.png"

import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
        
	<h1 style={{ color: "black",
				textAlign: "center",
				marginTop: "-50px" }}>
		Contact Us
	</h1>
    <img src={wie_logo} height="80" />
    <img src={ieee_logo}  height="80" />
    
	<Container>
		<Row>
		<Column>
        
			<Heading>Ayushee Agarwal</Heading>
			<FooterLink>Website Coordinator</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/ayushee-agarwal-0b285b176/">
			<i className="fab fa-linkedin-f">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
            <FooterLink href="https://github.com/Ayushee11">
			<i className="fab fa-github-f">
				<span style={{ marginLeft: "10px" }}>
				GitHub
				</span>
			</i>
			</FooterLink>
		</Column>
        <Column>
        
			<Heading>Nitya Mittal</Heading>
			<FooterLink href="#">Event Coordinator</FooterLink>
			<FooterLink href="https://www.linkedin.com/in/mittalnitya/">
			<i className="fab fa-linkedin-f">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
            <FooterLink href="https://github.com/nityamittal">
			<i className="fab fa-github-f">
				<span style={{ marginLeft: "10px" }}>
				GitHub
				</span>
			</i>
			</FooterLink>
		</Column>
		<Column>
			<Heading>Saujanya Sood</Heading>
			<FooterLink href="#">Event Executive</FooterLink>
			<FooterLink href="https://www.linkedin.com/in/saujanyasood/">
			<i className="fab fa-linkedin-f">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
            <FooterLink href="https://github.com/saujanyasood">
			<i className="fab fa-github-f">
				<span style={{ marginLeft: "10px" }}>
				GitHub
				</span>
			</i>
			</FooterLink>
		</Column>
        <Column>
			<Heading>Shreya Sahu</Heading>
			<FooterLink href="#">Event Executive</FooterLink>
			<FooterLink href="https://www.linkedin.com/in/shreya-sahu-1463691bb/">
			<i className="fab fa-linkedin-f">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
            <FooterLink href="https://github.com/shreyasahu4">
			<i className="fab fa-github-f">
				<span style={{ marginLeft: "10px" }}>
				GitHub
				</span>
			</i>
			</FooterLink>
		</Column>   
        <Column>
			<Heading>Arya Pandey</Heading>
			<FooterLink href="#">Content Executive</FooterLink>
			<FooterLink href="https://www.linkedin.com/in/arya-pandey-5340651b8/">
			<i className="fab fa-linkedin-f">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
            <FooterLink href="https://github.com/arya312">
			<i className="fab fa-github-f">
				<span style={{ marginLeft: "10px" }}>
				GitHub
				</span>
			</i>
			</FooterLink>
		</Column>
		
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
