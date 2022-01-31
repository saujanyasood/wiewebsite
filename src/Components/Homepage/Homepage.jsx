import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import Cover from "./Cover/Cover";
import "./Homepage.css";
import VideoBg from "./VideoBg";
import Sidebar from "./Sidebar/Sidebar";

export default function Homepage(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="homepage" id="homepage">
      <div className="navBar">
        <NavBar
          navBarActive={props.navBarActive && "navBarActive "}
          darkBGColor={props.darkbg && "darkBGColor"}
          handleClick={handleClick}
        />
        <Sidebar isOpen={isOpen} handleClick={handleClick}/>
      </div>
      <VideoBg />
      <Cover />
    </div>
  );
}
