import React from "react";
import NBElement from "./NavBarElement";
import "./NavBar.css";
import logo from "./wieLogoWhite.png";
import FemaleIcon from "@mui/icons-material/Female";

function NavBar(props) {
  const navBarItems = [
    {
      id: 1,
      title: "HOME",
      link: "#homepage",
    },
    {
      id: 2,
      title: "ABOUT",
      link: "#about",
    },
    {
      id: 3,
      title: "EVENTS",
      link: "#events",
    },
    {
      id: 4,
      title: "CONTACT US",
      link: "#contact",
    },
  ];

  return (
    <div
      className={
        "navBar " +
        (props.navBarActive && "navBarActive ") +
        (props.darkBGColor && "darkBGColor")
      }
      id="navbar"
    >
      <div className="left">
        <div className="logo">
          <a href="#homepage">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>
      <div className="right">
        <ul>
          {navBarItems.map((item) => (
            <NBElement title={item.title} link={item.link} />
          ))}
        </ul>
        <div className="iconContainer" onClick={props.handleClick}>
          <FemaleIcon
            fontSize="large"
            sx={{
              fontSize: "40px"
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
