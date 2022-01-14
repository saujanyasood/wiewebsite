import React from "react"
import "./NavBarElement.css"

export default function NBElement(props){
    return (
        <li className="navBarElement">
            <a href={props.link}><h3>{props.title}</h3></a>
        </li>
    )
}