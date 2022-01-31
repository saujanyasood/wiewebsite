import React from "react";
import NBElement from "../NavBar/NavBarElement";
import "./Sidebar.css"

export default function Sidebar(props) {
  const sideBarItems = [
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
    <div className="sidebar">
      <div className={"sideMenu " + (props.isOpen && "visible")} onClick={props.handleClick}>
        <ul>
          {sideBarItems.map((item) => {
            return (
              <li>
                <NBElement title={item.title} link={item.link} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
