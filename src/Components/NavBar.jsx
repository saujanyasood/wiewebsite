import React from "react"
import NBElement from "./navBarElement"

function NavBar(){
    return (
        <div className="navBar">
            <NBElement element="Home" />
            <NBElement element="About us" />
            <NBElement element="Events" />
            <NBElement element="Council" />
            <NBElement element="Awards" />
            <NBElement element="Contact us" />
            <NBElement element="Join now" />
        </div>
    )
}

export default NavBar;