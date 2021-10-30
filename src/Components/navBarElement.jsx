import React from "react"

function NBElement(props){
    return (
        <button className="navBarElement">
            <h3>{props.element}</h3>
        </button>
    )
}

export default NBElement;