import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "./Card.jsx";
import "./CardSlider.css";
import apis from "./WIEEvents/APIs.jpeg"
import arvr from "./WIEEvents/ARVR.jpeg"
import blockchain from "./WIEEvents/Blockchain.jpeg"
import codingblocks from "./WIEEvents/CodingBlocks.jpeg"
import cybersec from "./WIEEvents/CyberSecurity.jpeg"
import fintech from "./WIEEvents/Fintech.jpeg"
import innovation from "./WIEEvents/Innovation.jpeg"
import itrack from "./WIEEvents/iTrack.jpeg"
import webd from "./WIEEvents/WebDevelopment.jpeg"
import wiex from "./WIEEvents/WIExperience.jpeg"
import womenintech from "./WIEEvents/WomenInTech.jpeg"
import paneldisc from "./WIEEvents/PanelDisc.jpeg"

export default function CardSlider() {

  const cards=[{
    title: "Panel Discussion",
    img: paneldisc
  },
  {
    title: "Women in Tech",
    img: womenintech
  },
  {
    title: "APIs 101",
    img: apis
  },
  {
    title: "Webinar on iTrack",
    img: itrack
  },
  {
    title: "Panel Discussion",
    img: paneldisc
  },
  {
    title: "Blockchain 101",
    img: blockchain
  },
  {
    title: "Innovation in Education",
    img: innovation
  },
  {
    title: "Fintech Funamentals",
    img: fintech
  },
  {
    title: "Cybersecurity - Dos and Donts",
    img: cybersec
  },
  {
    title: "Get Set Innovate",
    img: codingblocks
  },
  {
    title: "Cloud Connected AR/VR App",
    img: arvr
  },
  {
    title: "WIExperience",
    img: wiex
  },
  {
    title: "When and How to start on a Project",
    img: webd
  }
]

  return (
    <div className="slider-container">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        autoplay
        autoplayTimeout={3000}
        nav
      >
        {cards.map((card, index) => {
          return(<div className="item"><Card title={card.title} img={card.img} key={index}/></div>)
        })}
      </OwlCarousel>
    </div>
  );
}
