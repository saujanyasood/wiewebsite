import React from "react"
import NBElement from "./NavBarElement"
import "./NavBar.css"
import logo from "./wieLogoWhite.png"

function NavBar(props){

    const navBarItems=[
        {
            key: 1,
            id: 1,
            title: "HOME",
            link: "#homepage"
        },
        {
            key: 2,
            id: 2,
            title: "ABOUT",
            link: "#about"
        },
        {
            key: 3,
            id: 3,
            title: "EVENTS",
            link: "#events"
        },
        {
            key: 4,
            id: 4,
            title: "COUNCIL",
            link: "#council"
        },
        {
            key: 5,
            id: 5,
            title: "CONTACT US",
            link: "#contact"
        }
    ];

    return (
        <div className={"navBar " + (props.navBarActive && "navBarActive ") + (props.darkBGColor && "darkBGColor")} id="navbar">
            <div className="left">
                <div className="logo">
                    <a href="#homepage"><img src={logo} alt="logo"/></a>
                </div>
            </div>
            <div className="right">
                <ul>
                    {navBarItems.map((item) => (
                        <NBElement title={item.title} link={item.link}/>    
                    )
                    )}
                </ul>  
            </div>            
        </div>
    )
}

export default NavBar;